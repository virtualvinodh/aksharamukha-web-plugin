# Copies the Pyodide + aksharamukha wheel assets that power the client-side
# (no-backend) transliteration engine from the sibling aksharamukha-python
# checkout into wasm/ (this repo's own root), where the v5 web plugin loads
# them from, then pre-compresses every file as a .br sibling. Re-run this
# after rebuilding the wheel or bumping Pyodide.
#
# Assumes aksharamukha-python is a sibling checkout of this repo (both
# directly under the same parent folder, e.g. .../Projects/aksharamukha-
# web-plugin and .../Projects/aksharamukha-python) - pass -SourceRepo if
# yours lives elsewhere.
#
# Usage: pwsh build-scripts/copy-wasm-assets.ps1 [-SourceRepo <path>] [-SkipCompression]

param(
    [string]$SourceRepo = "$PSScriptRoot\..\..\aksharamukha-python\aksharamukha-wasm",
    [switch]$SkipCompression
)

$ErrorActionPreference = "Stop"

$SourceRepo = (Resolve-Path $SourceRepo).Path
$Dest = (Resolve-Path "$PSScriptRoot\..").Path + "\wasm"

Write-Host "Source: $SourceRepo"
Write-Host "Dest:   $Dest"

if (-not (Test-Path "$SourceRepo\pyodide") -or -not (Test-Path "$SourceRepo\wheel")) {
    throw "Expected pyodide/ and wheel/ folders under $SourceRepo - not found."
}

New-Item -ItemType Directory -Force -Path "$Dest\pyodide" | Out-Null
New-Item -ItemType Directory -Force -Path "$Dest\wheel" | Out-Null

Copy-Item -Path "$SourceRepo\pyodide\*" -Destination "$Dest\pyodide" -Recurse -Force
Copy-Item -Path "$SourceRepo\wheel\*" -Destination "$Dest\wheel" -Recurse -Force

$size = (Get-ChildItem -Recurse $Dest -File | Where-Object { $_.Extension -ne '.br' } | Measure-Object -Property Length -Sum).Sum / 1MB
Write-Host ("Copied. Total size: {0:N1} MB" -f $size)

if (-not $SkipCompression) {
    # Pre-compresses every file to a .br sibling using .NET's built-in
    # Brotli codec (System.IO.Compression.BrotliStream, available in
    # PowerShell 7+ with no external tool needed) at maximum quality -
    # this is a one-time build-time cost, not something visitors wait on.
    #
    # Real measured effect (see the repo's development notes): the raw
    # binaries - pyodide.asm.wasm, pyodide.asm.js, pyodide.js - shrink
    # dramatically (roughly 65-85% smaller). python_stdlib.zip and every
    # .whl barely shrink at all (2-10%), since those are already-compressed
    # ZIP archives and Brotli has little left to squeeze out of them - so
    # don't expect the whole ~19MB payload to become ~4MB, more like ~10MB.
    #
    # Generating a .br file does nothing by itself - your web server or
    # CDN has to actually be configured to serve *.br in place of the
    # original when a client's Accept-Encoding allows it (with a
    # Content-Encoding: br response header), or these sit unused. See
    # README.md's "Serving pre-compressed assets" section.
    Write-Host "Compressing to .br siblings (one-time, can take ~30s for the largest files)..."
    $files = Get-ChildItem -Recurse $Dest -File | Where-Object { $_.Extension -ne '.br' }
    $totalBefore = 0
    $totalAfter = 0
    foreach ($f in $files) {
        $totalBefore += $f.Length
        $brPath = "$($f.FullName).br"
        $inStream = [System.IO.File]::OpenRead($f.FullName)
        $outStream = [System.IO.File]::Create($brPath)
        $brotli = New-Object System.IO.Compression.BrotliStream($outStream, [System.IO.Compression.CompressionLevel]::SmallestSize)
        try {
            $inStream.CopyTo($brotli)
        } finally {
            $brotli.Dispose()
            $outStream.Dispose()
            $inStream.Dispose()
        }
        $totalAfter += (Get-Item $brPath).Length
    }
    $pct = 100 - (100 * $totalAfter / $totalBefore)
    Write-Host ("Compressed {0} files: {1:N1} MB -> {2:N1} MB ({3:N0}% smaller)" -f $files.Count, ($totalBefore / 1MB), ($totalAfter / 1MB), $pct)
}

Write-Host "NOTE: this is a large binary payload - consider hosting it on a CDN/release asset instead of committing it to git, and .gitignore wasm/ if so."
