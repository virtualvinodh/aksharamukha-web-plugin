// Runs once before the suite. The hosted API runs on App Engine, which shuts
// idle instances down; the first request after that can take 15s+ while one
// starts, failing whichever tests happen to run first. One request up front
// wakes it. Failures are ignored - the tests themselves will report any
// real problem with the API.
module.exports = async function warmApi () {
  try {
    await fetch('https://aksharamukha-plugin.appspot.com/api/plugin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ source: 'autodetect', target: 'Tamil', nativize: true, text: '["नमस्ते"]', postOptions: [], preOptions: [] }),
      signal: AbortSignal.timeout(60000)
    })
  } catch (e) {}
}
