// Aksharamukha Web Plugin v5 - source. Concatenated with script-data.generated.js
// by build-scripts/build-web-plugin-v5.js into ../aksharamukha-v5.js. Do not
// add a "use strict" or an outer IIFE here - the build script supplies both.
//
// Contract kept identical to v3/v4 so this is still a drop-in replacement:
//   <script src=".../aksharamukha-v5.js?source=autodetect&class=aksharamukha-text&..."></script>
// recognised query params: source, class, preoptions, scriptlist, prelist,
// changeurl (all same meaning as v3/v4), plus two new ones:
//   engine   - 'wasm' (default), 'api', or 'auto' (wasm, falling back to api
//              if the WASM assets fail to load)
//   wasmbase - URL prefix where wasm/pyodide + wasm/wheel live, default is
//              the "wasm/" folder next to this script

// Hebr/Thaa/Arab-Ur/Arab-Pa are the same 4 scripts (Hebrew, Thaana, Urdu,
// Shahmukhi) that already appear inside scriptsIndic under cleaner value
// codes - the front-end's own "scripts" list excludes them from
// scriptsSemitic for exactly this reason, to avoid listing each of those 4
// twice. Shared between Config (building the allowed script list) and
// Panel (building the picker's Semitic group).
var SEMITIC_DUPLICATE_CODES = ['Hebr', 'Thaa', 'Arab-Ur', 'Arab-Pa']

// ---------------------------------------------------------------------------
// Config: parsed once from this script tag's own URL.
// ---------------------------------------------------------------------------

var Config = (function () {
  var scriptEl = document.currentScript
  if (!scriptEl) {
    var tags = document.getElementsByTagName('script')
    scriptEl = tags[tags.length - 1]
  }
  var scriptURL = new URL(scriptEl.src, document.baseURI)
  var params = scriptURL.searchParams

  var PRESET_SCRIPT_LISTS = {
    majorindic: ['ISO', 'IAST', 'IPA', 'RomanReadable', 'RussianCyrillic', 'Assamese', 'Bengali', 'Devanagari', 'Grantha', 'Gujarati', 'Gurmukhi', 'Kannada', 'Malayalam', 'Oriya', 'Sharada', 'Tamil', 'TamilExtended', 'Telugu', 'Urdu'],
    majorall: ['ISO', 'IAST', 'IPA', 'RomanReadable', 'RussianCyrillic', 'Assamese', 'Bengali', 'Burmese', 'Devanagari', 'Grantha', 'Gujarati', 'Gurmukhi', 'Kannada', 'Khmer', 'Malayalam', 'Oriya', 'Sharada', 'Sinhala', 'Tamil', 'TamilExtended', 'Telugu', 'Thai', 'Tibetan', 'Urdu'],
    sansktradall: ['ISO', 'IAST', 'IPA', 'RomanReadable', 'RussianCyrillic', 'Assamese', 'Balinese', 'Bengali', 'Brahmi', 'Bhaikshuki', 'Burmese', 'Devanagari', 'Dogra', 'Grantha', 'GranthaPandya', 'Gujarati', 'Gurmukhi', 'Javanese', 'Kannada', 'Kharoshthi', 'KhomThai', 'Khmer', 'Malayalam', 'Mongolian', 'Newa', 'Oriya', 'PhagsPa', 'Ranjana', 'Saurashtra', 'Siddham', 'Sharada', 'Sinhala', 'Soyombo', 'TaiTham', 'Takri', 'Tamil', 'TamilExtended', 'Telugu', 'Thai', 'Tibetan', 'Tirhuta', 'Urdu', 'ZanabazarSquare'],
    sanskall: ['ISO', 'IAST', 'IPA', 'RomanReadable', 'RussianCyrillic', 'Ariyaka', 'Assamese', 'Balinese', 'Bengali', 'Brahmi', 'Bhaikshuki', 'Burmese', 'Chakma', 'Devanagari', 'Dogra', 'GunjalaGondi', 'MasaramGondi', 'Grantha', 'GranthaPandya', 'Gujarati', 'Gurmukhi', 'Javanese', 'Kaithi', 'Kannada', 'Kharoshthi', 'KhomThai', 'Khmer', 'Khudawadi', 'LaoPali', 'Malayalam', 'Mongolian', 'Modi', 'Newa', 'Oriya', 'PhagsPa', 'Ranjana', 'Santali', 'Saurashtra', 'Siddham', 'Sharada', 'Sinhala', 'Soyombo', 'TaiTham', 'Takri', 'Tamil', 'TamilExtended', 'Telugu', 'Thai', 'Tibetan', 'Tirhuta', 'Urdu', 'ZanabazarSquare']
  }

  var baseScriptList = ScriptData.scriptsIndic.map(function (s) { return s.value })
    .concat(ScriptData.scriptsSemitic
      .filter(function (s) { return SEMITIC_DUPLICATE_CODES.indexOf(s.value) === -1 })
      .map(function (s) { return s.value }))
    .concat(ScriptData.semiticLatin.map(function (s) { return s.value }))
    .concat(['RussianCyrillic', 'ISO', 'IAST', 'IASTPali', 'RomanReadable', 'IPA'])

  var scriptList
  var presetKey = params.get('prelist')
  if (params.has('scriptlist')) {
    scriptList = params.get('scriptlist').split(',')
  } else if (presetKey && PRESET_SCRIPT_LISTS[presetKey]) {
    scriptList = PRESET_SCRIPT_LISTS[presetKey].slice()
  } else {
    scriptList = baseScriptList
  }
  scriptList.push('Original')

  return {
    changeURLParams: params.get('changeurl') === '1',
    source: params.get('source') || 'autodetect',
    classURL: params.get('class') || 'aksharamukha-text',
    preOptionsURL: params.has('preoptions') ? params.get('preoptions').split(',') : [],
    scriptList: scriptList,
    // 'auto' (default): try the client-side WASM engine, fall back to the
    // hosted API if it fails to load/run. 'wasm'/'api' force one or the
    // other with no fallback (useful for testing/debugging).
    engine: params.get('engine') || 'auto',
    wasmBase: params.get('wasmbase')
      ? new URL(params.get('wasmbase'), document.baseURI)
      : new URL('wasm/', scriptURL),
    // Which viewport corner the launcher/panel live in. The launcher and
    // the expanded panel always share the same corner and swap visibility
    // (never both shown at once), so they never collide with each other.
    position: ['top-right', 'top-left', 'bottom-right', 'bottom-left'].indexOf(params.get('position')) > -1
      ? params.get('position')
      : 'top-right',
    // Distance in px from whichever edge(s) `position` puts the panel
    // against. Default (20px) assumes no fixed header/footer at that edge;
    // a site with one can pass e.g. ?offset=80 rather than forking the
    // script. Deliberately not `parseInt(...) || 20` - ?offset=0 is a
    // legitimate, meaningful value (flush against the edge), and `0` is
    // falsy in JS, so `||` would silently replace it with the default.
    offset: (function () {
      var parsed = parseInt(params.get('offset'), 10)
      return isNaN(parsed) ? 20 : parsed
    })()
  }
})()

// ---------------------------------------------------------------------------
// Small helpers
// ---------------------------------------------------------------------------

function safeLocalStorage () {
  // Safari private mode (and any storage-disabled context) throws on
  // setItem/getItem rather than just failing silently, so every touch of
  // localStorage in this plugin goes through here.
  try {
    var testKey = '__aksharamukha_test__'
    window.localStorage.setItem(testKey, '1')
    window.localStorage.removeItem(testKey)
    return {
      get: function (k) { try { return window.localStorage.getItem(k) } catch (e) { return null } },
      set: function (k, v) { try { window.localStorage.setItem(k, v) } catch (e) {} }
    }
  } catch (e) {
    return { get: function () { return null }, set: function () {} }
  }
}
var Storage = safeLocalStorage()

// ---------------------------------------------------------------------------
// Engine: converts text, either locally via a WASM Python runtime (Pyodide +
// the aksharamukha wheel - no network calls after the one-time engine
// download) or via the hosted HTTP API, as a fallback. Both expose the same
// async convertAll(jobs) -> string[] shape, where each job is
// { source, target, text, nativize, preOptions, postOptions }.
// ---------------------------------------------------------------------------

var Engine = (function () {
  var wasmReadyPromise = null
  var transliterateModule = null

  // Explicit persistent caching for the WASM engine's assets (~20MB:
  // pyodide.asm.wasm, python_stdlib.zip, the core dep wheels, and the
  // aksharamukha wheel itself), so a returning visitor to THIS site
  // doesn't repeat that download every page load. Two things this is
  // NOT: it's not a service worker (impossible here anyway - the assets
  // are typically served from a shared CDN, and a service worker can
  // only be registered for the page's own origin, not the CDN's), and
  // it's not relying on the CDN's own HTTP cache headers (which modern
  // browsers now partition per top-level site, so a shared CDN URL no
  // longer transparently benefits every site that happens to load it).
  // Cache Storage, used directly from page script with no service worker
  // needed, is scoped to the embedding site's own origin and persists
  // across reloads there regardless of what the CDN sends.
  //
  // Pyodide's own loadPackage()/micropip machinery fetches its wheels via
  // plain fetch() in this same JS realm (Pyodide isn't run in a Worker
  // here), so a URL-scoped fetch patch - rather than just wrapping our
  // own direct fetch() calls in installLocalWheel() - is the only way to
  // cover THOSE fetches too, not just the ~3MB we fetch directly
  // ourselves. Every other fetch on the host page (or even ours, outside
  // wasmBase) passes through untouched.
  var WASM_CACHE_NAME = 'aksharamukha-wasm-v1'
  var cachingFetchInstalled = false

  function installCachingFetch (baseHref) {
    if (cachingFetchInstalled || !window.fetch || !window.caches) return
    cachingFetchInstalled = true
    var originalFetch = window.fetch.bind(window)

    // Bumping WASM_CACHE_NAME (e.g. on a Pyodide/wheel version upgrade)
    // starts fresh automatically - drop any previous version's cache
    // instead of letting it sit unused taking up quota forever.
    caches.keys().then(function (names) {
      names.forEach(function (name) {
        if (name.indexOf('aksharamukha-wasm-') === 0 && name !== WASM_CACHE_NAME) caches.delete(name)
      })
    }).catch(function () {})

    window.fetch = function (input, init) {
      // input can be a plain string, a Request (.url), or - this is the
      // one that was silently falling through uncached before - a URL
      // object (.href, not .url), which is exactly what Pyodide's own
      // loadPackage()/micropip pass for most of its wheel and the core
      // .wasm/.zip fetches. Falling back to String(input) covers
      // anything else with a sane toString().
      var url = typeof input === 'string' ? input : (input && (input.url || input.href || String(input)))
      var method = (init && init.method) || (typeof input !== 'string' && input && input.method) || 'GET'
      if (!url || method !== 'GET' || url.indexOf(baseHref) !== 0) {
        return originalFetch(input, init)
      }
      return caches.open(WASM_CACHE_NAME).then(function (cache) {
        return cache.match(url).then(function (cached) {
          if (cached) return cached
          return originalFetch(input, init).then(function (response) {
            if (response && response.ok) cache.put(url, response.clone())
            return response
          })
        })
      })
    }
  }

  function loadScriptTag (src) {
    return new Promise(function (resolve, reject) {
      var el = document.createElement('script')
      el.src = src
      el.onload = resolve
      el.onerror = function () { reject(new Error('Failed to load ' + src)) }
      document.head.appendChild(el)
    })
  }

  async function initWasm (onProgress) {
    if (wasmReadyPromise) return wasmReadyPromise
    wasmReadyPromise = (async function () {
      var base = Config.wasmBase
      installCachingFetch(base.href)
      onProgress('Loading transliteration engine…')
      await loadScriptTag(new URL('pyodide/pyodide.js', base).href)
      var pyodide = await self.loadPyodide({ indexURL: new URL('pyodide/', base).href })
      // requests is unconditionally imported at module scope by
      // aksharamukha/transliterate.py even though this plugin never uses
      // its network path (Convert_HTML/website features) - it must be
      // loaded regardless, or the import itself throws.
      await pyodide.loadPackage(['pyyaml', 'regex', 'requests', 'micropip'])
      var micropip = pyodide.pyimport('micropip')
      var localWheels = [
        'fonttools-4.51.0-py3-none-any.whl',
        'wrapt-2.4.0-py3-none-any.whl',
        'deprecated-1.3.1-py2.py3-none-any.whl',
        'jaconv-0.5.0-py3-none-any.whl',
        'pykakasi-2.3.0-py3-none-any.whl'
      ]
      for (var i = 0; i < localWheels.length; i++) {
        await installLocalWheel(pyodide, micropip, new URL('pyodide/' + localWheels[i], base).href, localWheels[i])
      }
      // The aksharamukha wheel itself lives under wasm/wheel/, not wasm/pyodide/.
      var wheelResp = await fetch(new URL('wheel/', base).href).catch(function () { return null })
      var aksharamukhaWheelName = 'aksharamukha-2.3-py3-none-any.whl'
      await installLocalWheel(pyodide, micropip, new URL('wheel/' + aksharamukhaWheelName, base).href, aksharamukhaWheelName)
      transliterateModule = pyodide.pyimport('aksharamukha.transliterate')
      onProgress('')
      return pyodide
    })()
    return wasmReadyPromise
  }

  async function installLocalWheel (pyodide, micropip, url, name) {
    var resp = await fetch(url)
    if (!resp.ok) throw new Error('Failed to fetch ' + url + ' (' + resp.status + ')')
    var bytes = new Uint8Array(await resp.arrayBuffer())
    var path = '/tmp/' + name
    pyodide.FS.writeFile(path, bytes)
    await micropip.install.callKwargs('emfs:' + path, { deps: false })
  }

  async function convertOneWasm (job) {
    await initWasm(job.onProgress || function () {})
    var kwargs = {
      nativize: job.nativize,
      pre_options: job.preOptions || [],
      post_options: job.postOptions || []
    }
    return transliterateModule.process.callKwargs(job.source, job.target, job.text, kwargs)
  }

  async function convertOneApi (job, signal) {
    var res = await fetch('https://aksharamukha-plugin.appspot.com/api/plugin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: signal,
      body: JSON.stringify({
        source: job.source,
        target: job.target,
        nativize: job.nativize,
        text: job.text,
        postOptions: job.postOptions || [],
        preOptions: job.preOptions || []
      })
    })
    if (!res.ok) throw new Error('API request failed with status ' + res.status)
    return res.text()
  }

  async function convertAll (jobs, options) {
    options = options || {}
    var mode = Config.engine
    if (mode === 'api') {
      return Promise.all(jobs.map(function (job) { return convertOneApi(job, options.signal) }))
    }
    try {
      return await Promise.all(jobs.map(convertOneWasm))
    } catch (e) {
      if (mode === 'wasm') throw e
      // engine=auto (default 'wasm' with implicit fallback): if the WASM
      // engine failed to load or run, fall back to the hosted API rather
      // than breaking the widget on browsers/CDNs that can't serve/execute it.
      console.warn('Aksharamukha: WASM engine failed, falling back to API.', e)
      return Promise.all(jobs.map(function (job) { return convertOneApi(job, options.signal) }))
    }
  }

  function warmUp (onProgress) {
    // Fire-and-forget: starts the WASM cold start ahead of the user's
    // first actual selection. initWasm() memoizes on wasmReadyPromise, so
    // calling this early just means the real conversion request later
    // awaits an already-in-flight (or already-finished) promise instead of
    // starting one from scratch - the ~15-20s cold start happens while the
    // visitor is still reading the page instead of after they've asked for
    // a conversion and are staring at a spinner.
    if (Config.engine === 'api') return
    initWasm(onProgress || function () {}).catch(function (e) {
      console.warn('Aksharamukha: background WASM warm-up failed (will retry/fallback on first real use).', e)
    })
  }

  return { convertAll: convertAll, warmUp: warmUp }
})()

// ---------------------------------------------------------------------------
// Content: finds the page's transliteration targets and applies results.
// ---------------------------------------------------------------------------

var Content = (function () {
  // Per-element bookkeeping keyed by the element itself (a WeakMap so a
  // removed element's entry is GC'd for free) instead of the old parallel
  // arrays indexed by position. That indexing was the root of the "awkward
  // node looping" - a fixed snapshot taken once up front, with no way for
  // an element added after that scan to ever get picked up. A live registry
  // plus a MutationObserver (below) replaces it: elements are captured (and
  // converted, if a target is already selected) as they appear, and this
  // is now cheap to do per-element because WASM conversions have no
  // per-request network cost to batch away.
  var registry = new WeakMap() // el -> { texts, appliedOutputClass }
  var elements = [] // insertion-ordered list of currently known elements
  var observer = null

  function captureTexts (el) {
    var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false)
    var texts = []
    var node
    while ((node = walker.nextNode())) {
      if (node.nodeValue.trim() !== '') texts.push(node.nodeValue)
    }
    return texts
  }

  function register (el) {
    if (registry.has(el)) return
    registry.set(el, { texts: captureTexts(el), appliedOutputClass: '' })
    elements.push(el)
  }

  function unregister (el) {
    var idx = elements.indexOf(el)
    if (idx > -1) elements.splice(idx, 1)
    registry.delete(el)
  }

  function findMatches (root) {
    var matches = []
    if (root.nodeType !== 1) return matches
    if (root.classList && root.classList.contains(Config.classURL)) matches.push(root)
    if (root.getElementsByClassName) {
      Array.prototype.push.apply(matches, root.getElementsByClassName(Config.classURL))
    }
    return matches
  }

  function collect () {
    var found = document.getElementsByClassName(Config.classURL)
    if (found.length === 0) {
      // No matching elements: wrap the whole page body, same auto-wrap
      // fallback behaviour as v3/v4, so a page with zero setup still works.
      var wrapper = document.createElement('span')
      wrapper.className = Config.classURL
      while (document.body.firstChild) wrapper.appendChild(document.body.firstChild)
      document.body.appendChild(wrapper)
      found = document.getElementsByClassName(Config.classURL)
    }
    Array.prototype.forEach.call(found, register)
  }

  function observe (onElementAdded) {
    observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        Array.prototype.forEach.call(m.addedNodes, function (node) {
          if (node.nodeType !== 1 || node.id === 'aksharamukha-navbar') return
          findMatches(node).forEach(function (el) {
            if (registry.has(el)) return
            register(el)
            onElementAdded(el)
          })
        })
        Array.prototype.forEach.call(m.removedNodes, function (node) {
          findMatches(node).forEach(unregister)
        })
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })
  }

  function sourceForElement (el) {
    var source = ''
    var preOptions = Config.preOptionsURL
    Array.prototype.forEach.call(el.classList, function (cls) {
      if (cls.indexOf('inputscript') === 0) source = cls.split('-')[1]
      if (cls.indexOf('preoptions') === 0 && cls.split('-')[1]) preOptions = cls.split('-')[1].split(',')
    })
    if (!source) source = Config.source !== 'autodetect' ? Config.source : 'autodetect'
    return { source: source, preOptions: preOptions }
  }

  function applyResult (el, texts, outputClass) {
    var entry = registry.get(el)
    var outputClassOld = entry ? entry.appliedOutputClass : ''
    var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false)
    var node
    var i = 0
    while ((node = walker.nextNode())) {
      if (node.nodeValue.trim() === '') continue
      node.nodeValue = texts[i]
      i += 1
    }
    if (outputClassOld && outputClassOld !== outputClass) el.classList.remove(outputClassOld)
    if (outputClass) el.classList.add(outputClass)
    if (entry) entry.appliedOutputClass = outputClass || ''
  }

  function parseJsonOrArray (raw) {
    try { return JSON.parse(raw) } catch (e) { return raw }
  }

  return {
    collect: collect,
    observe: observe,
    // A snapshot, not a live reference - callers that start an async
    // operation should hold on to the array they got, since elements can be
    // added/removed (via the MutationObserver) while that operation is in
    // flight.
    snapshot: function () { return elements.slice() },
    textsFor: function (el) { var entry = registry.get(el); return entry ? entry.texts : [] },
    sourceForElement: sourceForElement,
    applyResult: applyResult,
    parseJsonOrArray: parseJsonOrArray
  }
})()

// ---------------------------------------------------------------------------
// State: the one mutable "current selection" record, plus the request-token
// guard that makes overlapping conversions safe (fixes the v3/v4 race where
// selecting scripts twice quickly could revert the page to source text).
// ---------------------------------------------------------------------------

var State = {
  target: 'Original',
  targetOld: '',
  postOptionsList: [],
  postOptionsListOld: [],
  preservePrevious: false,
  optionsHide: true,
  requestToken: 0,
  activeAbortController: null
}

// ---------------------------------------------------------------------------
// Panel: the injected UI. Built once; subsequent updates touch only the
// parts that changed instead of re-parsing one big innerHTML blob (which is
// what made the old v3/v4 rebuild-and-rewire-every-listener pattern racy).
// ---------------------------------------------------------------------------

var Panel = (function () {
  var els = {}

  function injectStyles () {
    var style = document.createElement('style')
    style.textContent = PANEL_CSS
    document.head.appendChild(style)
    var link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-front/src/statics/fonts.css'
    document.head.appendChild(link)
  }

  var ROMAN_LABELS = { IAST: 'IAST', IASTPali: 'IAST (Pali)', ISO: 'ISO', RomanReadable: 'Readable Roman', IPA: 'IPA', RussianCyrillic: 'Cyrillic (Russian)' }

  // Coarse region label used to group the ~150-script list into <optgroup>s
  // instead of one long flat list - script.region is an array from most-
  // to least-specific (e.g. ['East Indic','Indic']); the last entry is the
  // broad bucket we want ('Indic', 'South East Asian', 'West Asian', ...).
  function regionGroupFor (script) {
    if (!script.region || !script.region.length) return 'Other'
    return script.region[script.region.length - 1]
  }

  // Flat, ordered list of { group, value, label } - the single source of
  // truth for both what the combobox's listbox renders and what a typed
  // query filters against. group === '' renders with no group header
  // ('Original script' at the very top, ungrouped).
  function buildScriptOptionsData () {
    var data = [{ group: '', value: 'Original', label: 'Original script' }]

    ;['IAST', 'IASTPali', 'ISO', 'RomanReadable', 'IPA', 'RussianCyrillic'].forEach(function (v) {
      if (Config.scriptList.indexOf(v) > -1) data.push({ group: 'Romanization schemes', value: v, label: ROMAN_LABELS[v] })
    })

    ScriptData.semiticLatin.forEach(function (s) {
      if (Config.scriptList.indexOf(s.value) > -1) data.push({ group: 'Semitic romanization schemes', value: s.value, label: s.label })
    })

    var byGroup = {} // region label -> array, so same-region scripts stay contiguous
    var groupOrder = []
    ScriptData.scriptsIndic.forEach(function (script) {
      if (Config.scriptList.indexOf(script.value) === -1) return
      var groupLabel = regionGroupFor(script)
      if (!byGroup[groupLabel]) { byGroup[groupLabel] = []; groupOrder.push(groupLabel) }
      byGroup[groupLabel].push({ group: groupLabel, value: script.value, label: script.label })
    })
    groupOrder.sort().forEach(function (label) { data = data.concat(byGroup[label]) })

    // Kept as one deliberate "Semitic scripts" group rather than folded
    // into the region-based grouping above: nearly all of them share the
    // single region tag 'West Asian' anyway, but a couple (Phoenician:
    // Mediterranean, Ethiopic Abjad: North African) would otherwise get
    // split away from scripts they're closely related to and usually
    // discussed alongside.
    var semiticOptions = ScriptData.scriptsSemitic
      .filter(function (s) { return SEMITIC_DUPLICATE_CODES.indexOf(s.value) === -1 && Config.scriptList.indexOf(s.value) > -1 })
      .map(function (s) { return { group: 'Semitic scripts', value: s.value, label: s.label } })
    data = data.concat(semiticOptions)

    return data
  }

  function positionStyleFor (position) {
    var vertical = position.indexOf('top') === 0 ? 'top' : 'bottom'
    var horizontal = position.indexOf('right') > -1 ? 'right' : 'left'
    var style = {}
    style[vertical] = Config.offset + 'px'
    style[horizontal] = '20px'
    return style
  }

  function applyPosition (el) {
    var style = positionStyleFor(Config.position)
    el.style.top = el.style.bottom = el.style.left = el.style.right = ''
    Object.keys(style).forEach(function (prop) { el.style[prop] = style[prop] })
  }

  function build () {
    injectStyles()

    var launcher = document.createElement('button')
    launcher.type = 'button'
    launcher.id = 'aksharamukha-launcher'
    launcher.className = 'aksharamukha-printhide'
    launcher.title = 'Convert script (Aksharamukha)'
    launcher.setAttribute('aria-label', 'Open script converter')
    launcher.innerHTML = '<img src="https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha-web-plugin/icon.png" width="22px" alt=""/>'
    document.body.appendChild(launcher)

    applyPosition(launcher)

    var root = document.createElement('div')
    root.id = 'aksharamukha-navbar'
    root.className = 'aksharamukha-printhide aksharamukha-collapsed'
    applyPosition(root)
    root.innerHTML =
      '<div class="aksharamukha-logosec">' +
      '<label for="aksharamukha-select-input" class="aksharamukha-name">Select script</label>' +
      '<button type="button" id="aksharamukha-pluginhidebutton"><small>Hide</small></button>' +
      '</div>' +
      '<div class="aksharamukha-combobox">' +
      '<input type="text" id="aksharamukha-select-input" autocomplete="off" spellcheck="false" placeholder="Search scripts…" ' +
      'role="combobox" aria-expanded="false" aria-autocomplete="list" aria-controls="aksharamukha-listbox"/>' +
      '<input type="hidden" id="aksharamukhaselect" name="scriptinput"/>' +
      '<ul id="aksharamukha-listbox" role="listbox" hidden></ul>' +
      '</div>' +
      '<div id="aksharamukha-options-slot"></div>' +
      '<div id="aksharamukha-loading" aria-live="polite"><div class="aksharamukha-progressbar"><div></div></div><small></small></div>' +
      '<div id="aksharamukha-error" hidden></div>' +
      '<div id="aksharamukha-branding">' +
      '<a href="https://aksharamukha.com" class="aksharamukha-hyperlink" target="_blank" rel="noopener">' +
      '<img src="https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha-web-plugin/icon.png" width="15px" alt=""/> <small><sup>Aksharamukha</sup></small></a>' +
      '</div>'
    document.body.insertAdjacentElement('afterbegin', root)

    els.root = root
    els.launcher = launcher
    els.select = root.querySelector('#aksharamukhaselect')
    els.searchInput = root.querySelector('#aksharamukha-select-input')
    els.listbox = root.querySelector('#aksharamukha-listbox')
    els.optionsSlot = root.querySelector('#aksharamukha-options-slot')
    els.loading = root.querySelector('#aksharamukha-loading small')
    els.progressBar = root.querySelector('.aksharamukha-progressbar')
    els.error = root.querySelector('#aksharamukha-error')
    els.hideButton = root.querySelector('#aksharamukha-pluginhidebutton')

    optionsData = buildScriptOptionsData()

    var restoredTarget = Storage.get('target')
    if (restoredTarget && Config.scriptList.indexOf(restoredTarget) > -1) {
      selectValue(restoredTarget, false)
    } else {
      selectValue('Original', false)
    }
    State.preservePrevious = Storage.get('preservePrevious') === 'true'

    // One delegated listener per event type instead of re-attaching a
    // listener to every checkbox/button on every re-render.
    root.addEventListener('input', onRootInput)
    root.addEventListener('change', onRootInput)
    root.addEventListener('click', onRootInput)
    root.addEventListener('keydown', onRootKeydown)
    els.hideButton.addEventListener('click', hide)
    launcher.addEventListener('click', show)
    els.searchInput.addEventListener('focus', function () { openListbox(els.searchInput.value === currentLabel() ? '' : els.searchInput.value) })
    // mousedown (not click) fires before the search input's blur, so the
    // option gets selected before the listbox would otherwise close itself.
    els.listbox.addEventListener('mousedown', onListboxMouseDown)
    document.addEventListener('click', function (event) {
      if (!root.contains(event.target)) closeListbox()
    })

    // Open straight to the panel on a first-ever visit (nothing saved yet,
    // or the visitor previously reset to Original) so they discover it at
    // all. A returning visitor who already picked a real target starts
    // collapsed behind the launcher instead - they know how this works,
    // no need to reopen the panel every visit. Combined with the matching
    // auto-hide in selectValue() below (badge -> pick a script -> badge
    // again), the panel only ever stays open while there's something left
    // to decide.
    if (!restoredTarget || restoredTarget === 'Original') show()

    return restoredTarget
  }

  var optionsData = []
  var activeOptionId = null

  function currentLabel () {
    var match = optionsData.filter(function (o) { return o.value === els.select.value })[0]
    return match ? match.label : ''
  }

  function renderListbox (query) {
    query = (query || '').toLowerCase()
    var html = ''
    var currentGroup = null
    var matchCount = 0
    optionsData.forEach(function (item) {
      if (query && item.label.toLowerCase().indexOf(query) === -1) return
      if (item.group !== currentGroup) {
        html += '<li class="aksharamukha-optgroup-label" role="presentation">' + item.group + '</li>'
        currentGroup = item.group
      }
      html += '<li role="option" id="aksharamukha-opt-' + item.value + '" data-value="' + item.value + '" ' +
        (item.value === els.select.value ? 'aria-selected="true" class="is-selected"' : 'aria-selected="false"') + '>' + item.label + '</li>'
      matchCount += 1
    })
    els.listbox.innerHTML = matchCount ? html : '<li class="aksharamukha-empty" role="presentation">No matching script</li>'
    activeOptionId = null
  }

  function openListbox (query) {
    renderListbox(query != null ? query : els.searchInput.value)
    els.listbox.hidden = false
    els.searchInput.setAttribute('aria-expanded', 'true')
  }

  function closeListbox () {
    els.listbox.hidden = true
    els.searchInput.setAttribute('aria-expanded', 'false')
    activeOptionId = null
    // Typing without picking anything reverts to the last real selection,
    // so a half-typed query never gets mistaken for the active script.
    els.searchInput.value = currentLabel()
  }

  function moveActive (delta) {
    var opts = Array.prototype.filter.call(els.listbox.children, function (li) { return li.getAttribute('role') === 'option' })
    if (!opts.length) return
    var idx = opts.findIndex(function (li) { return li.id === activeOptionId })
    idx = (idx + delta + opts.length) % opts.length
    if (activeOptionId) {
      var prev = document.getElementById(activeOptionId)
      if (prev) prev.classList.remove('is-active')
    }
    activeOptionId = opts[idx].id
    opts[idx].classList.add('is-active')
    opts[idx].scrollIntoView({ block: 'nearest' })
    els.searchInput.setAttribute('aria-activedescendant', activeOptionId)
  }

  function selectValue (value, triggerChange) {
    els.select.value = value
    var match = optionsData.filter(function (o) { return o.value === value })[0]
    els.searchInput.value = match ? match.label : value
    closeListbox()
    // Deliberately does NOT auto-collapse the panel on a pick: someone
    // comparing scripts or fine-tuning post-options wants to keep making
    // choices without the panel snapping shut after each one. The panel
    // only starts collapsed on a later page load (see build()) - within
    // one visit, only the explicit Hide button closes it.
    if (triggerChange !== false) onSelectChanged()
  }

  function onListboxMouseDown (event) {
    var li = event.target.closest('li[role="option"]')
    if (!li) return
    event.preventDefault() // keep focus in the search input, skip its blur-close
    selectValue(li.getAttribute('data-value'))
  }

  function onRootKeydown (event) {
    if (event.target !== els.searchInput) return
    if (event.key === 'ArrowDown') { event.preventDefault(); if (els.listbox.hidden) openListbox(''); else moveActive(1) } else if (event.key === 'ArrowUp') { event.preventDefault(); if (!els.listbox.hidden) moveActive(-1) } else if (event.key === 'Enter') {
      event.preventDefault()
      if (activeOptionId) {
        selectValue(document.getElementById(activeOptionId).getAttribute('data-value'))
      } else {
        // Nothing arrow-keyed yet - typing a name and hitting Enter right
        // away is the expected way to use a search field. An exact label
        // match (e.g. "Arabic") must win over an earlier SUBSTRING match
        // in display order (e.g. "ISO 233 Arabic") - otherwise the wrong
        // script gets selected silently just because it happened to sort
        // first, which is exactly what happened here before this check
        // existed. Falls back to the first visible match only when there's
        // no exact match at all.
        var query = els.searchInput.value.trim().toLowerCase()
        var exact = optionsData.filter(function (o) { return o.label.toLowerCase() === query })[0]
        var firstVisible = els.listbox.querySelector('li[role="option"]')
        var value = exact ? exact.value : (firstVisible && firstVisible.getAttribute('data-value'))
        if (value) selectValue(value)
      }
    } else if (event.key === 'Escape') {
      closeListbox()
    }
  }

  function onRootInput (event) {
    // event.target may be a descendant of the actual interactive element
    // (e.g. the <small> label text inside a <button>), so match on the
    // nearest ancestor that carries the id/name, not an exact reference.
    var t = event.target.closest('#aksharamukha-select-input, #aksharamukha-preserve, [name="aksharamukha-optionpost"], #aksharamukha-more')
    if (!t) return
    if (t === els.searchInput) {
      // Typing filters the listbox; it does NOT change the actual
      // selection - that only happens via selectValue() (click or Enter
      // on an option), which calls onSelectChanged() itself.
      if (event.type === 'input') openListbox(t.value)
    } else if (t.id === 'aksharamukha-preserve') {
      State.preservePrevious = t.checked
      Storage.set('preservePrevious', String(t.checked))
      onSelectChanged()
    } else if (t.name === 'aksharamukha-optionpost') {
      applyRadioGroupExclusivity(t)
      onSelectChanged()
    } else if (t.id === 'aksharamukha-more') {
      toggleOptions()
    }
  }

  var onSelectChanged = function () {} // wired by init()
  function setOnSelectChanged (fn) { onSelectChanged = fn }

  function toggleOptions () {
    State.optionsHide = !State.optionsHide
    renderOptionsVisibility()
  }

  function renderOptionsVisibility () {
    var box = els.optionsSlot.querySelector('#options')
    var moreBtn = els.optionsSlot.querySelector('#aksharamukha-more')
    if (box) box.className = State.optionsHide ? 'aksharamukha-hidedown' : 'aksharamukha-showup'
    if (moreBtn) moreBtn.querySelector('small').textContent = State.optionsHide ? 'More options' : 'Hide options'
  }

  function getCheckedPostOptions () {
    var checked = []
    Array.prototype.forEach.call(
      els.optionsSlot.querySelectorAll('input[name="aksharamukha-optionpost"]:checked'),
      function (box) { checked.push(box.value) }
    )
    return checked
  }

  // Global numeral/danda toggles the front-end shows in OutputOptions.vue,
  // conditioned on which script-category lists the target script falls
  // into - not tied to any specific script the way postOptionsGroup is.
  // Exactly one of the first two ever applies to a given target (a script
  // is never in both branches), the danda toggle is independent of those.
  function numeralDandaOptionsFor (target) {
    var opts = []
    if (!ScriptData.romanNumeralScripts.includes(target) && !ScriptData.transliterationScripts.includes(target)) {
      opts.push({ label: 'Indo-Arabic numerals', value: 'romanNumerals' })
    } else if (ScriptData.romanNumeralScripts.includes(target)) {
      opts.push({ label: 'Native numerals', value: 'indicNumerals' })
    }
    if (ScriptData.romanPunctscripts.includes(target) || ScriptData.transliterationScripts.includes(target)) {
      opts.push({ label: 'Use dandas', value: 'indicDandas' })
    } else {
      // Exact complement of the "Use dandas" condition above (this is
      // OutputOptions.vue's romanFullStop toggle) - every target falls
      // into exactly one of the two branches, never both/neither.
      opts.push({ label: 'Use fullstop', value: 'romanFullStop' })
    }
    return opts
  }

  // Splits an option's raw label - a single HTML string mixing a plain-text
  // name with an optional before/after example, e.g.
  // 'Old orthography<br/><small><span class="tamil">லை னா</span> → ...</small>'
  // - into { name, example }. The name is everything before the first
  // <br>, tags stripped (handles a couple of genuinely malformed entries
  // in the source data, like a bare `</>`, since stripping "any <...>"
  // removes those too). The example is the concatenation of every
  // <small>...</small> block's inner HTML (kept, not stripped, since it
  // carries the script-specific font classes) - a few entries have more
  // than one such block (e.g. an "(Experimental)" aside plus the actual
  // example), joined with a space. Options with no <br> at all (about a
  // fifth of them) get name = the whole label, example = ''.
  function parseOptionLabel (rawLabel) {
    var brMatch = rawLabel.match(/<br\s*\/?>/i)
    var namePart = brMatch ? rawLabel.slice(0, brMatch.index) : rawLabel
    var name = namePart.replace(/<[^>]*>/g, '').trim()
    var exampleBlocks = rawLabel.match(/<small>[\s\S]*?<\/small>/gi) || []
    var example = exampleBlocks
      .map(function (block) { return block.replace(/^<small>/i, '').replace(/<\/small>$/i, '').trim() })
      .join(' ')
    return { name: name, example: example }
  }

  function renderChip (id, value, name, example, checked) {
    var html = '<span class="aksharamukha-chip' + (example ? ' aksharamukha-has-example' : '') + '">' +
      '<input type="checkbox" name="aksharamukha-optionpost" id="' + id + '" value="' + value + '"' + (checked ? ' checked' : '') + '/>' +
      '<label for="' + id + '">' + name + '</label>'
    if (example) {
      html += '<span class="aksharamukha-tooltip" role="tooltip">' + example + '</span>'
    }
    return html + '</span>'
  }

  function renderOptions (target, liveChecked, primarySource) {
    var postOptionDefs = (ScriptData.postOptionsGroup[target] || []).concat(numeralDandaOptionsFor(target))
    // Pair-specific options (e.g. Saurashtra<->Tamil's colon/haaru
    // conversion) are keyed target+source, the reverse order of the
    // pre-options equivalent - see resolvePrimarySource()'s comment for
    // why only one shared source is used here rather than per-element.
    if (primarySource) {
      postOptionDefs = postOptionDefs.concat(ScriptData.postOptionsGroupSpecific[target + primarySource] || [])
    }
    var preserveExample = ScriptData.preserveSourceExampleOut[target]
    var checkedSet = {}
    if (liveChecked) {
      // Re-rendering for the SAME target the options panel is already
      // showing (e.g. the user just toggled one of these checkboxes,
      // which triggers this very re-render) - use what's actually checked
      // in the DOM right now, not the last-saved snapshot, or the click
      // that caused this render would be immediately discarded.
      liveChecked.forEach(function (v) { checkedSet[v] = true })
    } else {
      var savedList = Storage.get('postOptionsList' + target)
      if (savedList) savedList.split(',').forEach(function (v) { if (v) checkedSet[v] = true })
    }

    if (!postOptionDefs.length && !preserveExample) {
      els.optionsSlot.innerHTML = ''
      State.postOptionsList = []
      return
    }

    var html = '<button type="button" id="aksharamukha-more"><small>' + (State.optionsHide ? 'More options' : 'Hide options') + '</small></button>'
    html += '<div id="options" class="' + (State.optionsHide ? 'aksharamukha-hidedown' : 'aksharamukha-showup') + '">'
    html += '<div class="aksharamukha-chip-row">'
    if (preserveExample && target !== 'Original') {
      html += '<span class="aksharamukha-chip aksharamukha-has-example">' +
        '<input type="checkbox" id="aksharamukha-preserve"/>' +
        '<label for="aksharamukha-preserve">Preserve source</label>' +
        '<span class="aksharamukha-tooltip" role="tooltip">' + preserveExample + '</span>' +
        '</span>'
    }
    postOptionDefs.forEach(function (opt) {
      var parsed = parseOptionLabel(opt.label)
      html += renderChip('aksharamukha-opt-' + opt.value, opt.value, parsed.name, parsed.example, checkedSet[opt.value])
    })
    html += '</div></div>'
    els.optionsSlot.innerHTML = html

    var preserveBox = els.optionsSlot.querySelector('#aksharamukha-preserve')
    if (preserveBox) preserveBox.checked = State.preservePrevious

    State.postOptionsList = postOptionDefs.map(function (o) { return o.value }).filter(function (v) { return checkedSet[v] })
  }

  // Mirrors the front-end's filterRadio(): some post-options for a given
  // target are mutually exclusive alternatives (e.g. Siddham's two "use
  // alternate I" variants), grouped in ScriptData.postOptionsRadioGroup.
  // Rendering them as plain checkboxes (rather than reworking the markup
  // to <input type="radio">, a bigger change) but enforcing the exclusion
  // in JS: checking one un-checks the others in its group, so a user can
  // no longer end up with two contradictory options both selected - which
  // the plugin previously allowed silently.
  function applyRadioGroupExclusivity (changedCheckbox) {
    if (!changedCheckbox.checked) return
    var groups = ScriptData.postOptionsRadioGroup[State.target]
    if (!groups) return
    var value = changedCheckbox.value
    groups.forEach(function (group) {
      if (group.indexOf(value) === -1) return
      var boxes = els.optionsSlot.querySelectorAll('input[name="aksharamukha-optionpost"]')
      Array.prototype.forEach.call(boxes, function (box) {
        if (box.value !== value && group.indexOf(box.value) > -1) box.checked = false
      })
    })
  }

  function setLoading (isLoading, message) {
    els.loading.textContent = isLoading ? (message || 'Converting…') : ''
    els.root.classList.toggle('is-loading', !!isLoading)
    els.progressBar.classList.toggle('active', !!isLoading)
    // The panel itself is display:none while collapsed to the badge (the
    // common case for a returning visitor, whose saved target kicks off
    // conversion - and the WASM cold start it may trigger - immediately
    // on load), so the loading state needs its own visible indicator on
    // the launcher, or it happens invisibly for ~15-20s with no feedback.
    els.launcher.classList.toggle('is-loading', !!isLoading)
    els.launcher.setAttribute('aria-label', isLoading ? (message || 'Loading…') : 'Open script converter')
    els.launcher.title = isLoading ? (message || 'Loading…') : 'Convert script (Aksharamukha)'
  }

  function setError (message) {
    if (message) {
      els.error.textContent = message
      els.error.hidden = false
    } else {
      els.error.hidden = true
    }
  }

  function hide () {
    els.root.classList.add('aksharamukha-collapsed')
    els.launcher.classList.remove('aksharamukha-collapsed')
  }

  function show () {
    els.root.classList.remove('aksharamukha-collapsed')
    els.launcher.classList.add('aksharamukha-collapsed')
  }

  return {
    build: build,
    setOnSelectChanged: setOnSelectChanged,
    renderOptions: renderOptions,
    getCheckedPostOptions: getCheckedPostOptions,
    setLoading: setLoading,
    setError: setError,
    get select () { return els.select },
    get postOptionCheckboxes () { return els.optionsSlot.querySelectorAll('input[name="aksharamukha-optionpost"]') }
  }
})()

// Colors/sizing referenced through CSS custom properties (var(--aksharamukha-X,
// default)), not hardcoded, so an embedding site can restyle the widget by
// setting these on :root (or any ancestor of <body>) in its own
// stylesheet - custom properties inherit normally regardless of which
// <style> tag declared the rule using them - without forking this file.
// Documented in README-v5-plugin.md's "Theming" section.
var PANEL_CSS = '\n' +
  '#aksharamukha-navbar, #aksharamukha-navbar * { box-sizing: border-box; }\n' +
  '#aksharamukha-navbar { position: fixed; font-family: var(--aksharamukha-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif); width: 220px; padding: 14px 16px 12px; border-radius: var(--aksharamukha-radius, 12px); background: var(--aksharamukha-bg, #fff); border: 1px solid var(--aksharamukha-border, #e7e8ee); box-shadow: 0 4px 18px rgba(20,20,40,.08); z-index: 1000; }\n' +
  '#aksharamukha-navbar.aksharamukha-collapsed { display: none; }\n' +
  '.aksharamukha-logosec { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px; }\n' +
  '.aksharamukha-name { font-weight: 600; color: var(--aksharamukha-text, #1f2430); }\n' +
  '.aksharamukha-combobox { position: relative; }\n' +
  '#aksharamukha-select-input { font-family: inherit; width: 100%; padding: 6px 10px; font-size: 13px; color: var(--aksharamukha-text, #1f2430); background: var(--aksharamukha-bg, #fff); border: 1px solid #d7dae1; border-radius: 7px; cursor: text; }\n' +
  '#aksharamukha-select-input:focus { outline: none; border-color: var(--aksharamukha-accent, #6c63ff); box-shadow: 0 0 0 3px var(--aksharamukha-accent-shadow, rgba(108,99,255,.15)); }\n' +
  '#aksharamukha-listbox { position: absolute; left: 0; right: 0; top: calc(100% + 4px); margin: 0; padding: 4px 0; list-style: none; background: var(--aksharamukha-bg, #fff); border: 1px solid #e2e4ea; border-radius: 8px; box-shadow: 0 10px 28px rgba(20,20,40,.14); max-height: 220px; overflow-y: auto; z-index: 1001; }\n' +
  '#aksharamukha-listbox li[role="option"] { padding: 6px 12px; font-size: 13px; color: var(--aksharamukha-text, #1f2430); cursor: pointer; }\n' +
  '#aksharamukha-listbox li[role="option"]:hover, #aksharamukha-listbox li.is-active { background: var(--aksharamukha-accent-tint, #f2f0ff); }\n' +
  '#aksharamukha-listbox li.is-selected { font-weight: 600; color: var(--aksharamukha-accent-strong, #4b3fd6); }\n' +
  '.aksharamukha-optgroup-label { padding: 8px 12px 2px; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: .05em; color: var(--aksharamukha-text-faint, #9aa0ab); }\n' +
  '.aksharamukha-empty { padding: 8px 12px; font-size: 12px; color: var(--aksharamukha-text-faint, #9aa0ab); }\n' +
  '#aksharamukha-navbar button { font-family: inherit; font-size: 12px; font-weight: 500; color: var(--aksharamukha-text-muted, #4a4f5c); background: #f4f5f8; border: 1px solid #e2e4ea; border-radius: 6px; padding: 4px 10px; cursor: pointer; margin-top: 8px; }\n' +
  '#aksharamukha-navbar button:hover { background: var(--aksharamukha-accent-tint, #ebe9ff); border-color: #c9c3ff; color: var(--aksharamukha-accent-strong, #4b3fd6); }\n' +
  '#options { margin-top: 6px; padding-top: 6px; border-top: 1px solid #edeef2; }\n' +
  '.aksharamukha-chip-row { display: flex; flex-wrap: wrap; gap: 6px; }\n' +
  '.aksharamukha-chip { position: relative; display: inline-flex; align-items: center; }\n' +
  '.aksharamukha-chip input[type="checkbox"] { position: absolute; opacity: 0; width: 1px; height: 1px; overflow: hidden; }\n' +
  '.aksharamukha-chip label { display: inline-block; padding: 4px 9px; border-radius: 13px; border: 1px solid #d7dae1; background: #f8f8fb; color: var(--aksharamukha-text-muted, #4a4f5c); font-size: 11.5px; line-height: 1.3; cursor: pointer; user-select: none; }\n' +
  '.aksharamukha-chip input[type="checkbox"]:checked + label { background: var(--aksharamukha-accent, #6c63ff); border-color: var(--aksharamukha-accent, #6c63ff); color: var(--aksharamukha-accent-contrast, #fff); }\n' +
  '.aksharamukha-chip input[type="checkbox"]:focus-visible + label { outline: 2px solid var(--aksharamukha-accent, #6c63ff); outline-offset: 1px; }\n' +
  '.aksharamukha-has-example label { cursor: help; text-decoration: underline dotted; text-decoration-color: #b9bfcc; text-underline-offset: 2px; }\n' +
  '.aksharamukha-tooltip { visibility: hidden; opacity: 0; position: absolute; bottom: 135%; left: 50%; transform: translateX(-50%); background: var(--aksharamukha-text, #1f2430); color: #fff; padding: 6px 8px; border-radius: 6px; font-size: 11px; line-height: 1.5; width: max-content; max-width: 200px; white-space: normal; z-index: 1002; transition: opacity .1s ease; pointer-events: none; }\n' +
  '.aksharamukha-chip:hover .aksharamukha-tooltip, .aksharamukha-chip:focus-within .aksharamukha-tooltip { visibility: visible; opacity: 1; }\n' +
  '.aksharamukha-hidedown { display: none; }\n' +
  '.aksharamukha-showup { display: block; }\n' +
  '#aksharamukha-loading { min-height: 14px; margin-top: 4px; font-size: 11px; color: var(--aksharamukha-text-faint, #8a8f9c); }\n' +
  '#aksharamukha-error { margin-top: 6px; font-size: 11px; color: #a8352a; }\n' +
  '#aksharamukha-branding { margin-top: 10px; padding-top: 8px; border-top: 1px solid #edeef2; font-size: 90%; color: var(--aksharamukha-text-faint, #8a8f9c); }\n' +
  'a.aksharamukha-hyperlink, a.aksharamukha-hyperlink:visited { text-decoration: none; color: var(--aksharamukha-text-muted, #4a4f5c); }\n' +
  'a.aksharamukha-hyperlink:hover { color: var(--aksharamukha-accent, #6c63ff); }\n' +
  '.aksharamukha-progressbar { height: 3px; border-radius: 2px; background: #eeedf7; overflow: hidden; margin-top: 6px; display: none; }\n' +
  '.aksharamukha-progressbar.active { display: block; }\n' +
  '.aksharamukha-progressbar div { height: 100%; width: 40%; background: var(--aksharamukha-accent, #6c63ff); border-radius: 2px; animation: aksharamukha-indeterminate 1.1s ease-in-out infinite; }\n' +
  '@keyframes aksharamukha-indeterminate { 0% { transform: translateX(-100%); } 100% { transform: translateX(350%); } }\n' +
  '#aksharamukha-launcher { position: fixed; width: 44px; height: 44px; border-radius: 50%; background: var(--aksharamukha-bg, #fff); border: 1px solid var(--aksharamukha-border, #e7e8ee); box-shadow: 0 4px 14px rgba(20,20,40,.15); display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 1000; padding: 0; }\n' +
  '#aksharamukha-launcher:hover { box-shadow: 0 6px 18px rgba(20,20,40,.22); }\n' +
  '#aksharamukha-launcher.aksharamukha-collapsed { display: none; }\n' +
  '#aksharamukha-launcher.is-loading::after { content: ""; position: absolute; inset: -3px; border-radius: 50%; border: 2px solid transparent; border-top-color: var(--aksharamukha-accent, #6c63ff); border-right-color: var(--aksharamukha-accent, #6c63ff); animation: aksharamukha-spin .8s linear infinite; }\n' +
  '@keyframes aksharamukha-spin { to { transform: rotate(360deg); } }\n' +
  '@media print { .aksharamukha-printhide { display: none !important; } }\n'

// ---------------------------------------------------------------------------
// Orchestration
// ---------------------------------------------------------------------------

// postOptionsGroupSpecific (and preOptionsGroupSpecific, not wired into the
// UI - see the comment on that below) are keyed by a SOURCE+TARGET pair,
// not target alone, but the options panel is one shared panel for the
// whole page. Resolves one "primary" source to key that pair-specific
// lookup off: an explicit script-tag ?source=, or - if every element on
// the page shares an explicit inputscript-X - that shared source. Returns
// null (no pair-specific options offered) when the source is autodetect,
// since the actual source script isn't known until the engine resolves
// it - same limitation the main site has for its own Autodetect input.
function resolvePrimarySource () {
  if (Config.source !== 'autodetect') return Config.source
  var elements = Content.snapshot()
  if (!elements.length) return null
  var first = Content.sourceForElement(elements[0]).source
  if (first === 'autodetect') return null
  var allSame = elements.every(function (el) { return Content.sourceForElement(el).source === first })
  return allSame ? first : null
}

async function runConversion () {
  var target = Panel.select.value
  State.target = target

  if (Config.changeURLParams) updateURL(target)
  if (Config.scriptList.indexOf(target) === -1) return

  var liveChecked = target === State.targetOld ? Panel.getCheckedPostOptions() : null
  Panel.renderOptions(target, liveChecked, resolvePrimarySource())
  Storage.set('target', target)
  Storage.set('postOptionsList' + target, State.postOptionsList.join(','))

  // Cancel any still-in-flight run and claim a fresh token: only the result
  // matching the CURRENT token is ever written back to the page, so a user
  // flipping between scripts quickly can no longer cause a stale response
  // to clobber a newer one (the bug that shipped in v3/v4).
  if (State.activeAbortController) State.activeAbortController.abort()
  var controller = new AbortController()
  State.activeAbortController = controller
  var myToken = ++State.requestToken

  Panel.setError(null)
  Panel.setLoading(true)

  // Snapshot the current element list: it can change out from under an
  // in-flight run (elements added/removed via the MutationObserver), so the
  // jobs built here and the elements results get written back to must be
  // the SAME array, not two separate reads of Content's live list.
  var targetElements = Content.snapshot()
  var jobs = targetElements.map(function (el) {
    var meta = Content.sourceForElement(el)
    return {
      source: meta.source,
      target: target,
      preOptions: meta.preOptions,
      postOptions: State.postOptionsList,
      nativize: !State.preservePrevious,
      text: JSON.stringify(Content.textsFor(el)),
      onProgress: function (msg) { if (myToken === State.requestToken) Panel.setLoading(true, msg) }
    }
  })

  try {
    var results = target === 'Original'
      ? targetElements.map(function (el) { return JSON.stringify(Content.textsFor(el)) })
      : await Engine.convertAll(jobs, { signal: controller.signal })

    if (myToken !== State.requestToken) return // superseded by a newer run

    results.forEach(function (raw, i) {
      // getOutputClass's 3rd argument is content-dependent (e.g. Vedic
      // accent-mark detection), so it must be computed per element's own
      // result, not once for the whole batch.
      var outputClass = target === 'Original' ? '' : getOutputClass(target, State.postOptionsList, raw)
      Content.applyResult(targetElements[i], Content.parseJsonOrArray(raw), outputClass)
    })

    State.targetOld = target
    State.postOptionsListOld = State.postOptionsList
  } catch (e) {
    if (e.name === 'AbortError') return // superseded run, not a real failure
    if (myToken !== State.requestToken) return
    console.error('Aksharamukha plugin: conversion failed', e)
    Panel.setError('Could not reach the transliteration service. Please try again.')
  } finally {
    if (myToken === State.requestToken) Panel.setLoading(false)
  }
}

// Converts a single element that appeared on the page AFTER the last full
// run (picked up by the MutationObserver) to whatever script is currently
// selected, without disturbing the rest of the page or the request-token
// bookkeeping used by runConversion's page-wide passes.
async function convertNewElement (el) {
  if (!State.targetOld || State.targetOld === 'Original') return
  var meta = Content.sourceForElement(el)
  var job = {
    source: meta.source,
    target: State.targetOld,
    preOptions: meta.preOptions,
    postOptions: State.postOptionsListOld,
    nativize: !State.preservePrevious,
    text: JSON.stringify(Content.textsFor(el))
  }
  try {
    var results = await Engine.convertAll([job], {})
    var outputClass = getOutputClass(State.targetOld, State.postOptionsListOld, results[0])
    Content.applyResult(el, Content.parseJsonOrArray(results[0]), outputClass)
  } catch (e) {
    console.error('Aksharamukha plugin: failed to convert a dynamically added element', e)
  }
}

function updateURL (target) {
  var url = new URL(window.location.href)
  url.searchParams.set('akshrmkh', target)
  window.history.pushState({ path: url.href }, '', url.href)
}

function init () {
  // Guards against the script being included twice on the same page (an
  // easy copy-paste mistake, or a CMS plugin/theme both adding it) -
  // without this, a second run would build a second panel/launcher and
  // register every element a second time.
  if (document.getElementById('aksharamukha-navbar')) {
    console.warn('Aksharamukha plugin: already initialized on this page - ignoring a duplicate <script> inclusion.')
    return
  }
  Content.collect()
  var restoredTarget = Panel.build()
  Panel.setOnSelectChanged(runConversion)
  // Elements that appear later (SPA route changes, AJAX-loaded content,
  // anything added after this initial scan) get converted to whatever
  // script is currently selected as soon as they show up, instead of
  // silently being invisible to a one-time page scan.
  Content.observe(convertNewElement)
  if (restoredTarget) {
    runConversion()
  } else {
    // No target picked yet: warm the WASM engine in the background during
    // browser idle time, so the ~15-20s cold start happens while the
    // visitor is still reading the page rather than after they've picked a
    // script and are staring at the panel waiting. Harmless if they never
    // interact - the engine just never gets used. Skipped when a target
    // was restored above, since runConversion() already triggers the
    // exact same warm-up as a side effect of that real conversion.
    var scheduleIdle = window.requestIdleCallback || function (fn) { setTimeout(fn, 1500) }
    scheduleIdle(function () {
      Engine.warmUp(function (msg) { Panel.setLoading(!!msg, msg) })
    })
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init)
} else {
  init()
}
