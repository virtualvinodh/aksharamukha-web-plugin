#!/usr/bin/env node
/**
 * Bundles the v5 web plugin into a single classic <script> file, the same
 * "one file to drop on a CDN" shape as v2/v3/v4, from two hand-maintained
 * sources plus the generated script-data:
 *
 *   1. aksharamukha-web-plugin/src/script-data.generated.js
 *      (produced by build-web-plugin-data.js from the front-end's
 *      ScriptMixin.js - re-run that script first if it's stale)
 *   2. aksharamukha-web-plugin/src/v5-plugin.js
 *      (the actual plugin logic - hand-edited)
 *
 * Usage: node build-scripts/build-web-plugin-v5.js
 */
const fs = require('fs')
const path = require('path')

const PLUGIN_DIR = path.join(__dirname, '..', 'aksharamukha-web-plugin')
const DATA_FILE = path.join(PLUGIN_DIR, 'src', 'script-data.generated.js')
const PLUGIN_FILE = path.join(PLUGIN_DIR, 'src', 'v5-plugin.js')
const OUT_FILE = path.join(PLUGIN_DIR, 'aksharamukha-v5.js')

function main () {
  if (!fs.existsSync(DATA_FILE)) {
    throw new Error('Missing ' + DATA_FILE + ' - run build-web-plugin-data.js first.')
  }

  const dataSrc = fs.readFileSync(DATA_FILE, 'utf8')
    .replace(/^export const/m, 'const')
    .replace(/^export function/m, 'function')

  const pluginSrc = fs.readFileSync(PLUGIN_FILE, 'utf8')

  const banner = '/* Aksharamukha Web Plugin v5 - GENERATED FILE, do not edit directly.\n' +
    ' * Built by build-scripts/build-web-plugin-v5.js from:\n' +
    ' *   aksharamukha-web-plugin/src/script-data.generated.js\n' +
    ' *   aksharamukha-web-plugin/src/v5-plugin.js\n' +
    ' * Edit those sources (and re-run build-web-plugin-data.js first if\n' +
    ' * ScriptMixin.js changed), then re-run this script.\n' +
    ' */\n'

  const out = banner + '(function () {\n"use strict";\n' + dataSrc + '\n' + pluginSrc + '\n})();\n'

  fs.writeFileSync(OUT_FILE, out, 'utf8')
  console.log('Wrote ' + path.relative(process.cwd(), OUT_FILE) + ' (' + (out.length / 1024).toFixed(1) + ' KB)')
}

main()
