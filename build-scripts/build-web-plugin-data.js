#!/usr/bin/env node
/**
 * Extracts the pure-data portion of aksharamukha-front's ScriptMixin.js
 * (the script catalog, pre/post-option catalogs, etc. - everything that
 * isn't tied to Vue/axios) plus the self-contained getOutputClass() helper,
 * and writes it out as a plain, framework-free JS file that the web plugin
 * can load directly. Run this whenever ScriptMixin.js changes, instead of
 * hand-copying the data block into the plugin.
 *
 * Usage: node build-scripts/build-web-plugin-data.js
 */
const fs = require('fs')
const path = require('path')
const parser = require(path.join(__dirname, '..', 'aksharamukha-front', 'node_modules', '@babel', 'parser'))
const generate = require(path.join(__dirname, '..', 'aksharamukha-front', 'node_modules', '@babel', 'generator')).default
const traverse = require(path.join(__dirname, '..', 'aksharamukha-front', 'node_modules', '@babel', 'traverse')).default

const SRC = path.join(__dirname, '..', 'aksharamukha-front', 'src', 'mixins', 'ScriptMixin.js')
const OUT = path.join(__dirname, '..', 'aksharamukha-web-plugin', 'src', 'script-data.generated.js')

// Data keys that are tied to axios/Vue and must not be carried over into the plugin.
const SKIP_DATA_KEYS = new Set(['apiCall', 'wikipediaCall', 'scriptSourceCall'])

function main () {
  const source = fs.readFileSync(SRC, 'utf8')
  const ast = parser.parse(source, { sourceType: 'module' })

  let dataReturnObject = null
  let getOutputClassFn = null

  traverse(ast, {
    ObjectMethod (nodePath) {
      const key = nodePath.node.key
      if (key.type === 'Identifier' && key.name === 'data') {
        // data () { return { ... } } - find the return statement's object.
        const returnStmt = nodePath.node.body.body.find(n => n.type === 'ReturnStatement')
        dataReturnObject = returnStmt.argument
      }
    },
    ObjectProperty (nodePath) {
      const key = nodePath.node.key
      if (key.type === 'Identifier' && key.name === 'getOutputClass') {
        getOutputClassFn = nodePath.node.value
      }
    }
  })

  if (!dataReturnObject) throw new Error('Could not find ScriptMixin data() return object')
  if (!getOutputClassFn) throw new Error('Could not find ScriptMixin.methods.getOutputClass')

  dataReturnObject.properties = dataReturnObject.properties.filter(prop => {
    return !(prop.key && prop.key.type === 'Identifier' && SKIP_DATA_KEYS.has(prop.key.name))
  })

  const dataCode = generate(dataReturnObject, { concise: false }).code
  const fnCode = generate(getOutputClassFn, { concise: false }).code

  const banner = `// GENERATED FILE - do not edit by hand.
// Produced by build-scripts/build-web-plugin-data.js from
// aksharamukha-front/src/mixins/ScriptMixin.js. Re-run that script after
// editing ScriptMixin.js to pick up new scripts/options in the web plugin.
`

  const out = `${banner}
export const ScriptData = ${dataCode}

export function getOutputClass ${fnCode.replace(/^function\s*/, '')}
`

  fs.mkdirSync(path.dirname(OUT), { recursive: true })
  fs.writeFileSync(OUT, out, 'utf8')
  console.log('Wrote ' + path.relative(process.cwd(), OUT) + ' (' + out.length + ' bytes)')
}

main()
