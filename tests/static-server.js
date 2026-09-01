// Minimal static file server for the test suite - serves this repo's root
// (demo pages, aksharamukha-v5.js, wasm/ if present) exactly as a real
// static host would, no build step or bundler involved.
const http = require('http')
const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..')
const port = 4173
const mime = {
  '.js': 'application/javascript',
  '.html': 'text/html',
  '.json': 'application/json',
  '.wasm': 'application/wasm',
  '.whl': 'application/octet-stream',
  '.zip': 'application/zip'
}

http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0])
  const filePath = path.join(root, urlPath)
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404)
      res.end('not found')
      return
    }
    res.setHeader('Content-Type', mime[path.extname(filePath)] || 'application/octet-stream')
    res.writeHead(200)
    res.end(data)
  })
}).listen(port, () => console.log('test static server on ' + port))
