# Copies the Pyodide + aksharamukha wheel assets that power the client-side
# (no-backend) transliteration engine from the sibling aksharamukha-python
# checkout into aksharamukha-web-plugin/wasm, where the v5 web plugin loads
# them from. Re-run this after rebuilding the wheel or bumping Pyodide.
#
# Usage: pwsh build-scripts/copy-wasm-assets.ps1 [-SourceRepo <path>]

param(
    [string]$SourceRepo = "$PSScriptRoot\..\..\aksharamukha-python\aksharamukha-wasm"
)

$ErrorActionPreference = "Stop"

$SourceRepo = (Resolve-Path $SourceRepo).Path
$Dest = (Resolve-Path "$PSScriptRoot\..\aksharamukha-web-plugin").Path + "\wasm"

Write-Host "Source: $SourceRepo"
Write-Host "Dest:   $Dest"

if (-not (Test-Path "$SourceRepo\pyodide") -or -not (Test-Path "$SourceRepo\wheel")) {
    throw "Expected pyodide/ and wheel/ folders under $SourceRepo - not found."
}

New-Item -ItemType Directory -Force -Path "$Dest\pyodide" | Out-Null
New-Item -ItemType Directory -Force -Path "$Dest\wheel" | Out-Null

Copy-Item -Path "$SourceRepo\pyodide\*" -Destination "$Dest\pyodide" -Recurse -Force
Copy-Item -Path "$SourceRepo\wheel\*" -Destination "$Dest\wheel" -Recurse -Force

$size = (Get-ChildItem -Recurse $Dest | Measure-Object -Property Length -Sum).Sum / 1MB
Write-Host ("Copied. Total size: {0:N1} MB" -f $size)
Write-Host "NOTE: this is a large binary payload - consider hosting it on a CDN/release asset instead of committing it to git, and .gitignore aksharamukha-web-plugin/wasm/ if so."
