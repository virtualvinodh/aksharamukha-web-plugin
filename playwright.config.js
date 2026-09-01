// @ts-check
const { defineConfig, devices } = require('@playwright/test')

// Tests exercise the built aksharamukha-v5.js against the repo's own demo
// pages, served as plain static files - the same way a real embed would
// load it, not through any bundler/dev-server magic. Uses demo-v5-api.html
// (engine=api) everywhere by default: no WASM cold start to wait through,
// which keeps the suite fast and avoids depending on the ~20MB payload
// actually being present locally. It still depends on network access to
// the live hosted API (aksharamukha-plugin.appspot.com) - these are
// integration tests, not fully isolated unit tests.
module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: 'http://127.0.0.1:4173',
    trace: 'retain-on-failure'
  },
  webServer: {
    command: 'node tests/static-server.js',
    url: 'http://127.0.0.1:4173/demo-v5-api.html',
    reuseExistingServer: !process.env.CI
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } }
  ]
})
