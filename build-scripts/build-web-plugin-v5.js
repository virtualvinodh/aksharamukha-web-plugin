#!/usr/bin/env node
/**
 * Bundles the v5 web plugin into a single classic <script> file, the same
 * "one file to drop on a CDN" shape as v2/v3/v4, from two hand-maintained
 * sources plus the generated script-data:
 *
 *   1. src/script-data.generated.js
 *      (produced by the aksharamukha monorepo's build-web-plugin-data.js
 *      from its aksharamukha-front/src/mixins/ScriptMixin.js - the only
 *      copy of that source. This script runs that one itself first - see
 *      regenerateScriptData() below - so one command does the whole
 *      pipeline; you don't need to run build-web-plugin-data.js by hand
 *      unless you want to regenerate it without also rebuilding v5.)
 *   2. src/v5-plugin.js
 *      (the actual plugin logic - hand-edited, lives in this repo)
 *
 * It also copies the WASM engine (the Pyodide runtime and the aksharamukha
 * wheel) from upstream - aksharamukha-python/aksharamukha-wasm, the source
 * of truth - into wasm/, only where something differs (see syncEngine()).
 *
 * Also writes aksharamukha-v5.js.br, a Brotli-compressed sibling - the
 * bundle is plain JS text and compresses extremely well (measured ~80%
 * smaller). Same as wasm/'s .br siblings, this does nothing by itself:
 * your host/CDN has to actually serve it in place of the original with a
 * Content-Encoding: br header - see README-v5-plugin.md's "Serving
 * pre-compressed assets" section. Pass --skip-compression to skip it.
 *
 * Usage: node build-scripts/build-web-plugin-v5.js [monorepo-path] [--engine-from=<path>] [--skip-compression]
 *   monorepo-path defaults to ../aksharamukha, and --engine-from to
 *   ../aksharamukha-python/aksharamukha-wasm (siblings of this repo's own
 *   checkout) - pass paths if yours live elsewhere.
 */
const fs = require('fs')
const path = require('path')
const zlib = require('zlib')
const { spawnSync } = require('child_process')

const PLUGIN_DIR = path.join(__dirname, '..')
const DATA_FILE = path.join(PLUGIN_DIR, 'src', 'script-data.generated.js')
const PLUGIN_FILE = path.join(PLUGIN_DIR, 'src', 'v5-plugin.js')
const OUT_FILE = path.join(PLUGIN_DIR, 'aksharamukha-v5.js')

// Runs the monorepo's own data-extraction script, pointed back at this
// repo, so a single `node build-web-plugin-v5.js` regenerates
// script-data.generated.js from the live ScriptMixin.js and then bundles
// it - instead of needing that run by hand in the other repo first.
// Degrades gracefully (warns, keeps whatever's already on disk) if the
// monorepo isn't checked out where expected, since this repo's own
// history (src/script-data.generated.js is a real tracked file, not
// gitignored) is meant to still be buildable on its own.
function regenerateScriptData (monorepoPath) {
  const dataScript = path.join(monorepoPath, 'build-scripts', 'build-web-plugin-data.js')
  if (!fs.existsSync(dataScript)) {
    console.warn('Skipping script-data regeneration: ' + dataScript + ' not found ' +
      '(expected the aksharamukha monorepo checked out as a sibling of this repo, or pass its path as an argument). ' +
      'Using the existing src/script-data.generated.js as-is.')
    return
  }
  console.log('Regenerating script-data.generated.js from ' + dataScript + ' ...')
  const result = spawnSync(process.execPath, [dataScript, PLUGIN_DIR], { stdio: 'inherit' })
  if (result.status !== 0) {
    throw new Error('build-web-plugin-data.js failed (exit ' + result.status + ') - see output above.')
  }
}

// Copies the monorepo's fonts.css (the script-name -> font-family rules the
// plugin's output classes rely on) into this repo, so the plugin loads it
// from next to itself - pinned to the plugin's own version on the CDN -
// instead of from an unpinned branch path, which jsDelivr has served stale
// before (breaking e.g. Grantha (Pandya)'s font). Its @import of
// aksharamukha-fonts.css (the actual @font-face rules) is unpinned too, so
// that's rewritten to the aksharamukha-fonts repo's current commit.
// Degrades like regenerateScriptData(): if the monorepo or the network
// isn't available, the existing fonts.css is kept as-is.
const FONTS_CSS_OUT = path.join(PLUGIN_DIR, 'fonts.css')
const FONTS_REPO = 'https://github.com/virtualvinodh/aksharamukha-fonts.git'
const FONTS_CDN_UNPINNED = 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha-fonts/'

function syncFontsCss (monorepoPath) {
  const src = path.join(monorepoPath, 'aksharamukha-front', 'src', 'statics', 'fonts.css')
  if (!fs.existsSync(src)) {
    console.warn('Skipping fonts.css sync: ' + src + ' not found. Using the existing fonts.css as-is.')
    return
  }
  const lsRemote = spawnSync('git', ['ls-remote', FONTS_REPO, 'HEAD'], { encoding: 'utf8' })
  const sha = lsRemote.status === 0 && (lsRemote.stdout.match(/^([0-9a-f]{40})\s/) || [])[1]
  if (!sha) {
    console.warn('Skipping fonts.css sync: could not look up ' + FONTS_REPO + ' HEAD. Using the existing fonts.css as-is.')
    return
  }
  const css = fs.readFileSync(src, 'utf8').replace(/\r\n/g, '\n')
  if (css.indexOf(FONTS_CDN_UNPINNED) === -1) {
    throw new Error(src + " no longer imports from " + FONTS_CDN_UNPINNED + " - update syncFontsCss() to pin whatever it uses now.")
  }
  const header = '/* GENERATED by build-scripts/build-web-plugin-v5.js from the aksharamukha\n' +
    ' * monorepo\'s aksharamukha-front/src/statics/fonts.css, with its\n' +
    ' * aksharamukha-fonts import pinned to ' + sha + '. Do not edit. */\n'
  fs.writeFileSync(FONTS_CSS_OUT, header + css.split(FONTS_CDN_UNPINNED).join(FONTS_CDN_UNPINNED.replace(/\/$/, '@' + sha + '/')), 'utf8')
  console.log('Wrote fonts.css (aksharamukha-fonts pinned to ' + sha.slice(0, 7) + ')')
}

const WASM_DIR = path.join(PLUGIN_DIR, 'wasm')
const ENGINE_FOLDERS = ['pyodide', 'wheel']

function listFiles (dir) {
  const out = []
  ;(function walk (rel) {
    for (const entry of fs.readdirSync(path.join(dir, rel), { withFileTypes: true })) {
      const p = rel ? rel + '/' + entry.name : entry.name
      if (entry.isDirectory()) walk(p)
      else out.push(p)
    }
  })('')
  return out
}

function brotli (data) {
  return zlib.brotliCompressSync(data, {
    params: {
      [zlib.constants.BROTLI_PARAM_QUALITY]: zlib.constants.BROTLI_MAX_QUALITY,
      [zlib.constants.BROTLI_PARAM_SIZE_HINT]: data.length
    }
  })
}

// Copies the engine from upstream into wasm/ - only files whose contents
// differ, plus removing files upstream no longer has - and writes a .br
// sibling for each copied file. Unchanged files are left alone, so wasm/'s
// commit (which visitors load the engine from) only moves when the
// engine really changed. Returns the list of changes, or null if upstream
// isn't checked out here (then the existing wasm/ is used as-is).
function syncEngine (upstream) {
  if (!ENGINE_FOLDERS.every(f => fs.existsSync(path.join(upstream, f)))) {
    console.warn('Skipping engine sync: ' + upstream + ' has no pyodide/ and wheel/ folders. Using the existing wasm/ as-is.')
    return null
  }
  const changes = []
  for (const folder of ENGINE_FOLDERS) {
    const src = path.join(upstream, folder)
    const dst = path.join(WASM_DIR, folder)
    const srcFiles = listFiles(src)
    const dstFiles = fs.existsSync(dst) ? listFiles(dst).filter(f => !f.endsWith('.br')) : []
    for (const f of srcFiles) {
      const data = fs.readFileSync(path.join(src, f))
      const to = path.join(dst, f)
      if (fs.existsSync(to) && fs.readFileSync(to).equals(data)) continue
      console.log('Engine: copying ' + folder + '/' + f + ' (and compressing it - large files take a while)')
      fs.mkdirSync(path.dirname(to), { recursive: true })
      fs.writeFileSync(to, data)
      fs.writeFileSync(to + '.br', brotli(data))
      changes.push(folder + '/' + f)
    }
    for (const f of dstFiles.filter(f => !srcFiles.includes(f))) {
      fs.unlinkSync(path.join(dst, f))
      if (fs.existsSync(path.join(dst, f + '.br'))) fs.unlinkSync(path.join(dst, f + '.br'))
      changes.push(folder + '/' + f + ' (removed - no longer upstream)')
    }
  }
  return changes
}

// The one aksharamukha wheel in wasm/wheel/ - its file name (which carries
// the version) is baked into the bundle, so a new upstream version needs no
// edit here. Also checks the extra wheels src/v5-plugin.js installs itself
// (DEP_WHEELS) are all present, so a renamed one fails the build rather
// than the engine in visitors' browsers.
function engineWheel (pluginSrc) {
  const wheels = listFiles(path.join(WASM_DIR, 'wheel')).filter(f => f.endsWith('.whl'))
  if (wheels.length !== 1) throw new Error('Expected exactly one .whl in wasm/wheel/, found: ' + (wheels.join(', ') || 'none'))
  const depList = (pluginSrc.match(/var DEP_WHEELS = \[([\s\S]*?)\]/) || [])[1]
  if (!depList) throw new Error('Could not find DEP_WHEELS in src/v5-plugin.js.')
  const missing = (depList.match(/'[^']+\.whl'/g) || []).map(s => s.slice(1, -1))
    .filter(w => !fs.existsSync(path.join(WASM_DIR, 'pyodide', w)))
  if (missing.length) {
    throw new Error('DEP_WHEELS in src/v5-plugin.js lists wheels that aren\'t in wasm/pyodide/: ' + missing.join(', ') +
      ' - update the list to match the files upstream.')
  }
  return wheels[0]
}

// The commit that last changed wasm/. It's baked into the bundle as
// ENGINE_COMMIT: on jsDelivr the plugin loads the engine from that commit
// instead of from next to itself, so a plugin release that doesn't touch
// the engine doesn't make every visitor download it again (see
// defaultWasmBase() in src/v5-plugin.js). Tracked by git, so there's no
// separate engine version to maintain.
function engineCommit () {
  const git = argv => spawnSync('git', argv, { cwd: PLUGIN_DIR, encoding: 'utf8' })
  const status = git(['status', '--porcelain', '--', 'wasm/'])
  if (status.status !== 0) throw new Error('git status failed - the build needs this repo\'s git checkout: ' + status.stderr)
  if (status.stdout.trim()) {
    throw new Error('wasm/ has uncommitted changes. Commit them first: visitors load the engine from ' +
      'the commit that last changed wasm/, so that commit has to contain these files.')
  }
  const sha = git(['log', '-1', '--format=%H', '--', 'wasm/']).stdout.trim()
  if (!/^[0-9a-f]{40}$/.test(sha)) throw new Error('Could not find the commit that last changed wasm/.')
  if (git(['rev-parse', '--is-shallow-repository']).stdout.trim() === 'true') {
    throw new Error('This is a shallow clone, so the commit that last changed wasm/ can\'t be found reliably - fetch the full history (e.g. actions/checkout with fetch-depth: 0).')
  }
  return sha
}

function main () {
  const args = process.argv.slice(2)
  const skipCompression = args.includes('--skip-compression')
  const monorepoPath = args.find(a => !a.startsWith('--')) || path.join(PLUGIN_DIR, '..', 'aksharamukha')
  const engineFromArg = args.find(a => a.startsWith('--engine-from='))
  const enginePath = engineFromArg ? engineFromArg.slice('--engine-from='.length) : path.join(PLUGIN_DIR, '..', 'aksharamukha-python', 'aksharamukha-wasm')

  const engineChanges = syncEngine(enginePath)
  if (engineChanges && engineChanges.length) {
    console.log('\nThe engine changed upstream:\n  ' + engineChanges.join('\n  ') +
      '\n\nCommit wasm/, then run this build again: the plugin loads the engine from the commit that contains it.' +
      '\nIf the Pyodide runtime itself changed, also bump WASM_CACHE_NAME in src/v5-plugin.js (see the README\'s release checklist).')
    process.exitCode = 1
    return
  }

  regenerateScriptData(monorepoPath)
  syncFontsCss(monorepoPath)

  if (!fs.existsSync(DATA_FILE)) {
    throw new Error('Missing ' + DATA_FILE + ' and no monorepo found to generate it - see the usage note above.')
  }

  const dataSrc = fs.readFileSync(DATA_FILE, 'utf8')
    .replace(/^export const/m, 'const')
    .replace(/^export function/m, 'function')

  const pluginSrc = fs.readFileSync(PLUGIN_FILE, 'utf8')

  const banner = '/* Aksharamukha Web Plugin v5 - GENERATED FILE, do not edit directly.\n' +
    ' * Built by build-scripts/build-web-plugin-v5.js from:\n' +
    ' *   src/script-data.generated.js\n' +
    ' *   src/v5-plugin.js\n' +
    ' * Edit those sources (src/script-data.generated.js is itself\n' +
    ' * regenerated from ScriptMixin.js automatically), then re-run this\n' +
    ' * script.\n' +
    ' */\n'

  // LF only: on a Windows checkout the sources can contain CRLFs (e.g.
  // comments carried over from ScriptMixin.js). Git normalizes the .js to
  // LF on commit but stores the .br as-is, so without this the committed
  // .br wouldn't decompress to the committed .js (CI checks they match).
  const engine = engineCommit()
  const wheel = engineWheel(pluginSrc)
  const out = (banner + '(function () {\n"use strict";\n' +
    '// Set by the build: the commit that last changed wasm/, and the aksharamukha wheel in it.\n' +
    'var ENGINE_COMMIT = ' + JSON.stringify(engine) + '\n' +
    'var ENGINE_WHEEL = ' + JSON.stringify(wheel) + '\n' +
    dataSrc + '\n' + pluginSrc + '\n})();\n').replace(/\r\n/g, '\n')

  fs.writeFileSync(OUT_FILE, out, 'utf8')
  console.log('Wrote ' + path.relative(process.cwd(), OUT_FILE) + ' (' + (out.length / 1024).toFixed(1) + ' KB; engine from commit ' + engine.slice(0, 7) + ')')

  if (!skipCompression) {
    const compressed = zlib.brotliCompressSync(Buffer.from(out, 'utf8'), {
      params: { [zlib.constants.BROTLI_PARAM_QUALITY]: zlib.constants.BROTLI_MAX_QUALITY }
    })
    const brFile = OUT_FILE + '.br'
    fs.writeFileSync(brFile, compressed)
    const pct = 100 - (100 * compressed.length / out.length)
    console.log('Wrote ' + path.relative(process.cwd(), brFile) + ' (' + (compressed.length / 1024).toFixed(1) + ' KB, ' + pct.toFixed(0) + '% smaller)')
  }
}

main()
