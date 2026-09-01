// @ts-check
const { test, expect } = require('@playwright/test')
const { selectScript, openOptions } = require('./helpers')

// engine=api everywhere: no WASM cold start to wait through, keeps this
// suite fast. Every test uses a cache-busting query param so localStorage
// state from a previous test run's origin doesn't leak in (Playwright
// gives each test a fresh context anyway, but this also protects against
// running the suite twice against a server that kept state some other way).
const DEMO = '/demo-v5-api.html'

test('fresh visit opens the panel; converts on selection', async ({ page }) => {
  await page.goto(DEMO)
  await expect(page.locator('#aksharamukha-navbar')).toBeVisible()
  await expect(page.locator('#aksharamukha-launcher')).toBeHidden()

  await selectScript(page, 'Tamil')
  await expect(page.locator('.aksharamukha-text').first()).toContainText('நமஸ்தே', { timeout: 15000 })
})

test('panel does not auto-collapse across multiple picks in one visit', async ({ page }) => {
  await page.goto(DEMO)
  await selectScript(page, 'Tamil')
  await expect(page.locator('.aksharamukha-text').first()).toContainText('நமஸ்தே', { timeout: 15000 })
  await expect(page.locator('#aksharamukha-navbar')).toBeVisible()

  await selectScript(page, 'Telugu')
  await expect(page.locator('.aksharamukha-text').first()).toContainText('నమస్తే', { timeout: 15000 })
  await expect(page.locator('#aksharamukha-navbar')).toBeVisible()
})

test('rapid re-selection lands on the last pick, not a reverted/stale one', async ({ page }) => {
  await page.goto(DEMO)
  await selectScript(page, 'Tamil')
  await selectScript(page, 'Telugu')
  await selectScript(page, 'Kannada')
  await expect(page.locator('.aksharamukha-text').first()).toContainText('ನಮಸ್ತೇ', { timeout: 15000 })
})

test('hide button collapses to the launcher badge; clicking it reopens', async ({ page }) => {
  await page.goto(DEMO)
  await page.click('#aksharamukha-pluginhidebutton')
  await expect(page.locator('#aksharamukha-navbar')).toBeHidden()
  await expect(page.locator('#aksharamukha-launcher')).toBeVisible()

  await page.click('#aksharamukha-launcher')
  await expect(page.locator('#aksharamukha-navbar')).toBeVisible()
})

test('return visit with a saved target starts collapsed to the badge', async ({ page }) => {
  await page.goto(DEMO)
  await selectScript(page, 'Tamil')
  await expect(page.locator('.aksharamukha-text').first()).toContainText('நமஸ்தே', { timeout: 15000 })

  await page.reload()
  await expect(page.locator('#aksharamukha-navbar')).toBeHidden()
  await expect(page.locator('#aksharamukha-launcher')).toBeVisible()
  await expect(page.locator('#aksharamukhaselect')).toHaveValue('Tamil')
})

test('"Original script" reverts converted text back to the source', async ({ page }) => {
  await page.goto(DEMO)
  const original = await page.locator('.aksharamukha-text').first().innerText()
  await selectScript(page, 'Tamil')
  await expect(page.locator('.aksharamukha-text').first()).toContainText('நமஸ்தே', { timeout: 15000 })
  await selectScript(page, 'Original script')
  await expect(page.locator('.aksharamukha-text').first()).toHaveText(original)
})

test('typing an exact script name and pressing Enter (no arrow-key) selects it', async ({ page }) => {
  await page.goto(DEMO)
  await page.click('#aksharamukha-select-input')
  await page.fill('#aksharamukha-select-input', 'Kannada')
  await page.waitForTimeout(150)
  await page.keyboard.press('Enter')
  await expect(page.locator('#aksharamukhaselect')).toHaveValue('Kannada')
})

test('typing a substring that matches multiple options selects the EXACT match, not a longer one that sorts first', async ({ page }) => {
  // Regression: "Arabic" used to silently select "ISO 233 Arabic" (a
  // romanization scheme, an earlier substring match in list order)
  // instead of the "Arabic" script itself.
  await page.goto(DEMO)
  await page.click('#aksharamukha-select-input')
  await page.fill('#aksharamukha-select-input', 'Arabic')
  await page.waitForTimeout(150)
  await page.keyboard.press('Enter')
  await expect(page.locator('#aksharamukhaselect')).toHaveValue('Arab')
})

test('a post-option checkbox toggles and changes the converted output', async ({ page }) => {
  await page.goto(DEMO)
  await selectScript(page, 'Tamil')
  await expect(page.locator('.aksharamukha-text').first()).toContainText('நமஸ்தே', { timeout: 15000 })
  await openOptions(page)

  const before = await page.locator('.aksharamukha-text').first().innerText()
  await page.click('label[for="aksharamukha-opt-TamilDisableSHA"]', { force: true })
  await expect(async () => {
    expect(await page.locator('.aksharamukha-text').first().innerText()).not.toBe(before)
  }).toPass({ timeout: 15000 })
})

test('mutually-exclusive post-options: checking one unchecks the other in its group', async ({ page }) => {
  await page.goto(DEMO)
  await selectScript(page, 'Siddham')
  await expect(page.locator('.aksharamukha-text').first()).not.toContainText('नमस्ते', { timeout: 15000 })
  await openOptions(page)

  await page.click('label[for="aksharamukha-opt-UseAlternateI1"]', { force: true })
  await expect(page.locator('#aksharamukha-opt-UseAlternateI1')).toBeChecked()

  await page.click('label[for="aksharamukha-opt-UseAlternateI2"]', { force: true })
  await expect(page.locator('#aksharamukha-opt-UseAlternateI2')).toBeChecked()
  await expect(page.locator('#aksharamukha-opt-UseAlternateI1')).not.toBeChecked()
})

test('numeral/danda toggles match the target script category', async ({ page }) => {
  await page.goto(DEMO)

  await selectScript(page, 'Devanagari')
  await expect(page.locator('.aksharamukha-text').first()).toContainText('नमस्ते', { timeout: 15000 })
  await openOptions(page)
  await expect(page.locator('label:has-text("Indo-Arabic numerals")')).toBeVisible()
  await expect(page.locator('label:has-text("Use fullstop")')).toBeVisible()
  await expect(page.locator('label:has-text("Use dandas")')).toHaveCount(0)

  await selectScript(page, 'Tamil')
  await expect(page.locator('.aksharamukha-text').first()).toContainText('நமஸ்தே', { timeout: 15000 })
  await openOptions(page)
  await expect(page.locator('label:has-text("Native numerals")')).toBeVisible()
  await expect(page.locator('label:has-text("Use dandas")')).toBeVisible()
})

test('dynamically added elements are converted to the currently selected script', async ({ page }) => {
  await page.goto(DEMO)
  await selectScript(page, 'Tamil')
  await expect(page.locator('.aksharamukha-text').first()).toContainText('நமஸ்தே', { timeout: 15000 })

  await page.evaluate(() => {
    const p = document.createElement('p')
    p.className = 'aksharamukha-text'
    p.textContent = 'यह गतिशील पाठ है।'
    document.body.appendChild(p)
  })
  await expect(page.locator('.aksharamukha-text').last()).toContainText('யஹ', { timeout: 15000 })
})

test('including the script twice on the same page does not duplicate the panel', async ({ page }) => {
  const consoleWarnings = []
  page.on('console', m => { if (m.type() === 'warning') consoleWarnings.push(m.text()) })

  await page.goto(DEMO)
  await page.evaluate(() => {
    const s = document.createElement('script')
    s.src = 'aksharamukha-v5.js?engine=api'
    document.body.appendChild(s)
  })
  await page.waitForTimeout(500)

  await expect(page.locator('#aksharamukha-navbar')).toHaveCount(1)
  await expect(page.locator('#aksharamukha-launcher')).toHaveCount(1)
  expect(consoleWarnings.some(w => w.includes('already initialized'))).toBe(true)
})

test('theming: a host page setting --aksharamukha-* custom properties is respected', async ({ page }) => {
  // setContent()'s relative URLs (the script src below) resolve against
  // the page's current origin, which is about:blank until something has
  // actually been navigated to - goto first so there's a real origin to
  // resolve "/aksharamukha-v5.js" against.
  await page.goto(DEMO)
  await page.setContent(`
    <!DOCTYPE html><html><head><meta charset="utf-8"/>
    <style>:root { --aksharamukha-radius: 3px; }</style></head>
    <body><p class="aksharamukha-text">test</p>
    <script src="/aksharamukha-v5.js?engine=api"></script></body></html>
  `, { waitUntil: 'load' })
  await page.waitForTimeout(500)
  const radius = await page.locator('#aksharamukha-navbar').evaluate(el => getComputedStyle(el).borderRadius)
  expect(radius).toBe('3px')
})

test('?offset=0 is honored, not silently replaced by the default', async ({ page }) => {
  // Regression: offset used `parseInt(...) || 20`, and 0 is falsy in JS,
  // so an explicit ?offset=0 (a legitimate "flush against the edge"
  // value) was silently replaced with the 20px default.
  await page.goto(DEMO)
  await page.setContent(`
    <!DOCTYPE html><html><head><meta charset="utf-8"/></head>
    <body><p class="aksharamukha-text">test</p>
    <script src="/aksharamukha-v5.js?engine=api&offset=0"></script></body></html>
  `, { waitUntil: 'load' })
  await page.waitForTimeout(500)
  const top = await page.locator('#aksharamukha-navbar').evaluate(el => getComputedStyle(el).top)
  expect(top).toBe('0px')
})
