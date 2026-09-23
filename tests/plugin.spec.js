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

test('launcher badge shows the current script name, not an abbreviation, and "Change script" for Original', async ({ page }) => {
  // Regression: the badge used to go blank for "Original script", leaving
  // a bare icon with no text - no hint to a first-time visitor that it's
  // interactive at all. It should read "Change script" in that state
  // instead (the closest equivalent to v3/v4's old indicator wording).
  await page.goto(DEMO)
  await selectScript(page, 'Kannada')
  await expect(page.locator('.aksharamukha-text').first()).toContainText('ನಮಸ್ತೇ', { timeout: 15000 })
  await page.click('#aksharamukha-pluginhidebutton')
  await expect(page.locator('#aksharamukha-launcher-label')).toHaveText('Kannada')
  await expect(page.locator('#aksharamukha-launcher')).toHaveClass(/aksharamukha-has-label/)

  await selectScript(page, 'Original script')
  await expect(page.locator('#aksharamukha-launcher-label')).toHaveText('Change script')
  await expect(page.locator('#aksharamukha-launcher')).toHaveClass(/aksharamukha-has-label/)
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

test('after a pick the cursor leaves the box; reopening gives an empty search with the current script highlighted', async ({ page }) => {
  // Regression: after a pick the box kept focus with the script's name in
  // it, so typing appended to it ("Tamilk...") and clicking it again did
  // nothing - the visitor had to click away and back, or clear it by hand.
  const input = page.locator('#aksharamukha-select-input')
  const listbox = page.locator('#aksharamukha-listbox')
  await page.goto(DEMO)
  await selectScript(page, 'Tamil')
  await expect(input).not.toBeFocused()
  await expect(input).toHaveValue('Tamil')
  await expect(listbox).toBeHidden()

  await input.click()
  await expect(input).toHaveValue('')
  await expect(input).toHaveAttribute('placeholder', 'Tamil')
  await expect(listbox).toBeVisible()
  const active = listbox.locator('li.is-active')
  await expect(active).toHaveText('Tamil')
  const activeIsScrolledIntoView = await active.evaluate(li => {
    const a = li.getBoundingClientRect()
    const b = li.parentElement.getBoundingClientRect()
    return a.top >= b.top && a.bottom <= b.bottom
  })
  expect(activeIsScrolledIntoView).toBe(true)

  // Enter with the preselected option keeps it and closes.
  await page.keyboard.press('Enter')
  await expect(listbox).toBeHidden()
  await expect(input).toHaveValue('Tamil')
  await expect(input).not.toBeFocused()

  // Typing then clearing then Enter must not fall through to "Original".
  await input.click()
  await input.fill('Tel')
  await input.fill('')
  await page.keyboard.press('Enter')
  await expect(page.locator('#aksharamukhaselect')).toHaveValue('Tamil')
  await expect(input).toHaveValue('Tamil')

  // Escape abandons a half-typed search and restores the current name.
  await input.click()
  await input.fill('Tel')
  await page.keyboard.press('Escape')
  await expect(input).toHaveValue('Tamil')
  await expect(input).toHaveAttribute('placeholder', 'Search scripts…')
  await expect(page.locator('#aksharamukhaselect')).toHaveValue('Tamil')
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

test('engine=auto routes small text to the API, not a WASM boot', async ({ page }) => {
  // Regression: auto mode used to always try WASM first regardless of
  // text size, forcing every visitor through the ~9s cold boot even for a
  // one-line page. It should now go straight to the API for small text
  // and only pay the WASM boot cost above the size threshold.
  //
  // The plugin also warms WASM up eagerly in the background on idle, which
  // would otherwise race this test and make wasmReadyPromise already
  // truthy by the time the size check runs - disabling requestIdleCallback
  // keeps that warm-up from ever starting, so this isolates the size logic
  // itself rather than the warm-up race.
  await page.addInitScript(() => { window.requestIdleCallback = () => {} })
  const apiRequests = []
  await page.route('https://aksharamukha-plugin.appspot.com/api/plugin', route => {
    apiRequests.push(route.request())
    route.continue()
  })
  await page.goto('/demo-v5.html')
  await selectScript(page, 'Tamil')
  await expect(page.locator('.aksharamukha-text').first()).toContainText('நமஸ்தே', { timeout: 15000 })
  expect(apiRequests.length).toBeGreaterThan(0)
})

test('engine=auto routes large text to WASM, not the API', async ({ page }) => {
  await page.goto('/demo-v5.html')
  const apiRequests = []
  await page.route('https://aksharamukha-plugin.appspot.com/api/plugin', route => {
    apiRequests.push(route.request())
    route.continue()
  })
  await page.evaluate(() => {
    const sentence = 'नमस्ते, अक्षरमुखा एक लिपि परिवर्तन उपकरण है। '
    let text = ''
    while (new Blob([text]).size < 320 * 1024) text += sentence
    document.querySelector('.aksharamukha-text').textContent = text
  })
  await selectScript(page, 'Tamil')
  await expect(page.locator('.aksharamukha-text').first()).toContainText('நமஸ்தே', { timeout: 30000 })
  expect(apiRequests.length).toBe(0)
})

test('output font class beats a lang-keyed host rule and a <pre> UA default', async ({ page }) => {
  // Regression: a host page's own CSS commonly keys font choices off
  // lang="..." (correct for the original text), and <pre>/<code> carry a
  // direct browser-default font-family (monospace). Both are DIRECT rules
  // on a descendant, which always beats a font-family merely INHERITED
  // from the outputClass we add to the outer wrapped element - so without
  // stripping the stale lang and mirroring the class onto <pre>/<code>,
  // the requested font silently never shows on real-world markup like
  // sanskritdocuments.org's <pre lang="sa"><h2>...</h2></pre> verse layout.
  await page.goto(DEMO)
  await page.setContent(`
    <!DOCTYPE html><html><head><meta charset="utf-8"/>
    <style>
      *[lang="sa"] { font-family: "Shobhika", serif; }
      .granthapandya { font-family: "e-Pandya", cursive !important; }
    </style></head>
    <body><pre class="aksharamukha-text"><h2 lang="sa">नमस्ते</h2></pre>
    <script src="/aksharamukha-v5.js?engine=api&source=Devanagari"></script></body></html>
  `, { waitUntil: 'load' })
  await selectScript(page, 'Grantha (Pandya)')
  await expect(page.locator('h2')).not.toHaveText('नमस्ते', { timeout: 15000 })
  const info = await page.evaluate(() => {
    const h2 = document.querySelector('h2')
    const pre = document.querySelector('pre')
    return {
      h2Lang: h2.getAttribute('lang'),
      h2Font: getComputedStyle(h2).fontFamily,
      preClass: pre.className
    }
  })
  expect(info.h2Lang).toBeNull()
  expect(info.h2Font).toContain('e-Pandya')
  expect(info.preClass).toContain('granthapandya')

  await selectScript(page, 'Original script')
  await expect(page.locator('h2')).toHaveAttribute('lang', 'sa')
})

test('after a small conversion goes via the API, WASM still warms up in the background for later picks', async ({ page }) => {
  // Regression: engine=auto's size-based routing means a small-text page's
  // conversions all go via the API and never call initWasm() on their own
  // - warmUp() used to only be scheduled when NO target had been restored
  // yet, on the (now-false) assumption that a real conversion always
  // triggers the same warm-up as a side effect. Without an unconditional
  // background warm-up, a visitor would keep paying a network round-trip
  // per conversion for the whole session even once WASM would have been
  // free. This confirms: first pick goes via the API (no wait), and a
  // later pick - once the background boot has had time to finish - uses
  // WASM automatically, with no further API calls.
  // Headless Chromium's requestIdleCallback can fire almost immediately,
  // which would race the background warm-up against this test's own first
  // selectScript() call and make even the FIRST pick use WASM - delaying
  // it a few seconds keeps the two deterministically ordered without
  // disabling the warm-up outright (unlike the size-routing test above,
  // which isn't trying to observe it happening at all).
  await page.addInitScript(() => {
    window.requestIdleCallback = function (fn) { setTimeout(fn, 3000) }
  })
  const apiRequests = []
  await page.route('https://aksharamukha-plugin.appspot.com/api/plugin', route => {
    apiRequests.push(route.request())
    route.continue()
  })
  await page.goto('/demo-v5.html')
  await selectScript(page, 'Tamil')
  await expect(page.locator('.aksharamukha-text').first()).toContainText('நமஸ்தே', { timeout: 15000 })
  expect(apiRequests.length).toBeGreaterThan(0)

  // Generous margin over the ~4-9s cold boots measured elsewhere in this
  // suite, so this isn't flaky on a slower CI runner.
  await page.waitForTimeout(15000)
  apiRequests.length = 0

  await selectScript(page, 'Telugu')
  await expect(page.locator('.aksharamukha-text').first()).toContainText('నమస్తే', { timeout: 15000 })
  expect(apiRequests.length).toBe(0)
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
