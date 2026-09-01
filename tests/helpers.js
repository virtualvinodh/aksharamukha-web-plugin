// Shared interaction helpers for the plugin's test suite - these drive the
// UI the same way a real visitor would (typing into the combobox, real
// clicks), not by dispatching synthetic events directly at internal DOM
// nodes, which can race the plugin's own re-render-on-change behavior in
// ways a real click never does.

async function selectScript (page, label) {
  const launcherVisible = await page.locator('#aksharamukha-launcher').isVisible().catch(() => false)
  if (launcherVisible) await page.click('#aksharamukha-launcher')
  await page.click('#aksharamukha-select-input')
  await page.fill('#aksharamukha-select-input', label)
  await page.waitForTimeout(150)
  await page.keyboard.press('Enter')
}

// Idempotent: "More options" toggles open<->closed, so calling this twice
// in one test (e.g. once per script selected) must not accidentally
// re-close a panel that a previous call already opened.
async function openOptions (page) {
  const launcherVisible = await page.locator('#aksharamukha-launcher').isVisible().catch(() => false)
  if (launcherVisible) await page.click('#aksharamukha-launcher')
  const alreadyOpen = await page.locator('#options.aksharamukha-showup').isVisible().catch(() => false)
  if (!alreadyOpen) await page.click('#aksharamukha-more')
}

module.exports = { selectScript, openOptions }
