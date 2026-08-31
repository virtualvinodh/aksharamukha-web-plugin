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
 * Also writes aksharamukha-v5.js.br, a Brotli-compressed sibling - the
 * bundle is plain JS text and compresses extremely well (measured ~80%
 * smaller). Same as wasm/'s .br siblings (see copy-wasm-assets.ps1), this
 * does nothing by itself: your host/CDN has to actually serve it in place
 * of the original with a Content-Encoding: br header - see
 * README-v5-plugin.md's "Serving pre-compressed assets" section. Pass
 * --skip-compression to skip generating it.
 *
 * Usage: node build-scripts/build-web-plugin-v5.js [monorepo-path] [--skip-compression]
 *   monorepo-path defaults to ../aksharamukha (a sibling of this repo's
 *   own checkout) - pass a path if yours lives elsewhere.
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

function main () {
  const args = process.argv.slice(2)
  const skipCompression = args.includes('--skip-compression')
  const monorepoPath = args.find(a => !a.startsWith('--')) || path.join(PLUGIN_DIR, '..', 'aksharamukha')
  regenerateScriptData(monorepoPath)

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

  const out = banner + '(function () {\n"use strict";\n' + dataSrc + '\n' + pluginSrc + '\n})();\n'

  fs.writeFileSync(OUT_FILE, out, 'utf8')
  console.log('Wrote ' + path.relative(process.cwd(), OUT_FILE) + ' (' + (out.length / 1024).toFixed(1) + ' KB)')

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
