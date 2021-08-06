Copy-Item ..\aksharamukha\aksharamukha-front\src\mixins\ScriptMixin.js .

(Get-Content ScriptMixin.js).replace('export const ScriptMixin', 'const ScriptMixin') | Set-Content ScriptMixin.js

$file = 'ScriptMixin.js'
$lines = [IO.File]::ReadAllLines("$PWD/$file")
Set-Content -Encoding UTF8 $file -Value $lines[0..2 + 17..($lines.Count-1)]

bundle-js aksharamukha-dev.js -o aksharamukha-v4.js
