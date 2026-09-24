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
    // fonts.css and icon.png are loaded from next to this script, so on the
    // CDN they're pinned to the same version as the script itself.
    assetBase: new URL('./', scriptURL),
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

// Text goes through the converter as a JSON array string of text-node
// contents. Some targets also convert the comma BETWEEN the array items
// into their own script's comma - "،" for Urdu, Shahmukhi, Arabic,
// Persian, Thaana and Hanifi Rohingya, "、" for Hiragana/Katakana - which
// makes the result invalid JSON. The brackets and quotes survive for
// every target, so when a plain parse fails, each quoted string is read
// out directly and whatever sits between them is ignored. Commas inside
// the text itself are left as the converter produced them.
function parseConvertedTexts (raw) {
  try {
    var parsed = JSON.parse(raw)
    if (Array.isArray(parsed)) return parsed
  } catch (e) {}
  var texts = []
  var stringLiteral = /"((?:[^"\\]|\\.)*)"/g
  var match
  while ((match = stringLiteral.exec(raw))) {
    try {
      texts.push(JSON.parse('"' + match[1] + '"'))
    } catch (e) {
      // e.g. a raw control character inside the string - JSON.parse
      // rejects those, but the text itself is still usable as-is.
      texts.push(match[1])
    }
  }
  return texts.length ? texts : null
}

// ---------------------------------------------------------------------------
// Engine: converts text, either locally via a WASM Python runtime (Pyodide +
// the aksharamukha wheel, running in a Web Worker - no network calls after
// the one-time engine download) or via the hosted HTTP API. Both expose the
// same async convertAll(jobs) -> string[] shape, where each job is
// { source, target, text, nativize, preOptions, postOptions } and text /
// each result is a JSON array string of text-node contents.
// ---------------------------------------------------------------------------

// Runs inside the Web Worker. Serialized with toString() and started from a
// Blob URL (see startWorker below), so it must not reference anything
// outside itself.
//
// Running Pyodide in a worker keeps its start-up (seconds of CPU:
// compiling the .wasm, starting Python, importing aksharamukha) and every
// conversion off the page's main thread - on the main thread these froze
// the host page for up to ~2s at a time, on every page view.
//
// Explicit persistent caching for the engine's assets (~20MB: pyodide.asm.wasm,
// python_stdlib.zip, the core dep wheels, and the aksharamukha wheel), so
// a returning visitor to THIS site doesn't repeat that download every page
// load. Not a service worker (impossible here - the assets are typically on
// a shared CDN, and a service worker can only be registered for the page's
// own origin) and not the CDN's HTTP cache headers (which browsers now
// partition per top-level site). Cache Storage is scoped to the embedding
// site's origin - a Blob-URL worker shares the page's origin - and persists
// across reloads there regardless of what the CDN sends. Pyodide's own
// loadPackage()/micropip fetch through plain fetch() in the worker, so a
// URL-scoped fetch patch covers those fetches too, not just ours.
function wasmWorkerMain () {
  var pyodide = null
  var transliterate = null
  var readyPromise = null

  function installCachingFetch (baseHref, cacheName) {
    if (!self.fetch || !self.caches) return
    var originalFetch = self.fetch.bind(self)
    // Bumping the cache name (e.g. on a Pyodide/wheel version upgrade)
    // starts fresh - drop any previous version's cache instead of letting
    // it sit unused taking up quota forever.
    self.caches.keys().then(function (names) {
      names.forEach(function (name) {
        if (name.indexOf('aksharamukha-wasm-') === 0 && name !== cacheName) self.caches.delete(name)
      })
    }).catch(function () {})
    self.fetch = function (input, init) {
      // input can be a string, a Request (.url) or a URL object (.href) -
      // Pyodide's own loaders pass URL objects for most of their fetches.
      var url = typeof input === 'string' ? input : (input && (input.url || input.href || String(input)))
      var method = (init && init.method) || (typeof input !== 'string' && input && input.method) || 'GET'
      if (!url || method !== 'GET' || url.indexOf(baseHref) !== 0) return originalFetch(input, init)
      return self.caches.open(cacheName).then(function (cache) {
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

  async function installLocalWheel (micropip, url, name) {
    var resp = await self.fetch(url)
    if (!resp.ok) throw new Error('Failed to fetch ' + url + ' (' + resp.status + ')')
    var path = '/tmp/' + name
    pyodide.FS.writeFile(path, new Uint8Array(await resp.arrayBuffer()))
    await micropip.install.callKwargs('emfs:' + path, { deps: false })
  }

  async function init (msg) {
    installCachingFetch(msg.base, msg.cacheName)
    self.importScripts(new URL('pyodide/pyodide.js', msg.base).href)
    pyodide = await self.loadPyodide({ indexURL: new URL('pyodide/', msg.base).href })
    // requests is imported at module scope by aksharamukha/transliterate.py
    // even though nothing here uses its network features - it must be
    // loaded regardless, or the import itself throws.
    await pyodide.loadPackage(['pyyaml', 'regex', 'requests', 'micropip'])
    // aksharamukha's sources trigger ~60 harmless SyntaxWarnings (invalid
    // escape sequences in regex strings) as they're compiled, which Pyodide
    // forwards to the host page's console on every page view.
    pyodide.runPython("import warnings\nwarnings.filterwarnings('ignore', category=SyntaxWarning)")
    var micropip = pyodide.pyimport('micropip')
    for (var i = 0; i < msg.depWheels.length; i++) {
      await installLocalWheel(micropip, new URL('pyodide/' + msg.depWheels[i], msg.base).href, msg.depWheels[i])
    }
    // The aksharamukha wheel itself lives under wasm/wheel/, not wasm/pyodide/.
    await installLocalWheel(micropip, new URL('wheel/' + msg.aksharamukhaWheel, msg.base).href, msg.aksharamukhaWheel)
    transliterate = pyodide.pyimport('aksharamukha.transliterate')
  }

  function errorText (err) { return String((err && err.message) || err) }

  self.onmessage = function (event) {
    var msg = event.data
    if (msg.type === 'init') {
      if (!readyPromise) readyPromise = init(msg)
      readyPromise.then(
        function () { self.postMessage({ type: 'ready' }) },
        function (err) { self.postMessage({ type: 'init-error', message: errorText(err) }) }
      )
    } else if (msg.type === 'convert') {
      readyPromise.then(function () {
        var preOptions = pyodide.toPy(msg.preOptions || [])
        var postOptions = pyodide.toPy(msg.postOptions || [])
        try {
          var result = transliterate.process.callKwargs(msg.source, msg.target, msg.text, {
            nativize: msg.nativize, pre_options: preOptions, post_options: postOptions
          })
          self.postMessage({ type: 'result', id: msg.id, result: result })
        } catch (err) {
          self.postMessage({ type: 'result', id: msg.id, error: errorText(err) })
        } finally {
          preOptions.destroy()
          postOptions.destroy()
        }
      }, function (err) {
        self.postMessage({ type: 'result', id: msg.id, error: errorText(err) })
      })
    }
  }
}

var Engine = (function () {
  var WASM_CACHE_NAME = 'aksharamukha-wasm-v1'
  var AKSHARAMUKHA_WHEEL = 'aksharamukha-2.3-py3-none-any.whl'
  var DEP_WHEELS = [
    'fonttools-4.51.0-py3-none-any.whl',
    'wrapt-2.4.0-py3-none-any.whl',
    'deprecated-1.3.1-py2.py3-none-any.whl',
    'jaconv-0.5.0-py3-none-any.whl',
    'pykakasi-2.3.0-py3-none-any.whl'
  ]
  // Above this much text, the hosted API's latency (which scales with
  // payload size) exceeds the engine's fixed start-up cost - measured, the
  // two cross over around ~350KB of source text.
  var AUTO_LARGE_TEXT_BYTES = 300 * 1024

  var worker = null
  var readyPromise = null
  var ready = false
  var failed = false
  var pending = {} // conversion id -> { resolve, reject }
  var nextId = 1
  var progressListeners = []
  var lastProgress = ''

  function wasmUrl (path) { return new URL(path, Config.wasmBase).href }

  function notifyProgress (message) {
    lastProgress = message
    progressListeners.forEach(function (fn) { fn(message) })
  }

  function fail (err) {
    failed = true
    ready = false
    notifyProgress('')
    progressListeners = []
    Object.keys(pending).forEach(function (id) { pending[id].reject(err) })
    pending = {}
    return err
  }

  function startWorker () {
    var source = '(' + wasmWorkerMain.toString() + ')()'
    return new Worker(URL.createObjectURL(new Blob([source], { type: 'text/javascript' })))
  }

  function initWasm (onProgress) {
    if (onProgress && !ready && !failed) {
      progressListeners.push(onProgress)
      if (lastProgress) onProgress(lastProgress)
    }
    if (readyPromise) return readyPromise
    readyPromise = new Promise(function (resolve, reject) {
      try {
        worker = startWorker()
      } catch (e) {
        // e.g. a Content-Security-Policy that doesn't allow blob: workers.
        reject(fail(e))
        return
      }
      worker.onmessage = function (event) {
        var msg = event.data
        if (msg.type === 'ready') {
          ready = true
          notifyProgress('')
          progressListeners = []
          resolve()
        } else if (msg.type === 'init-error') {
          reject(fail(new Error(msg.message)))
        } else if (msg.type === 'result') {
          var p = pending[msg.id]
          delete pending[msg.id]
          if (p) msg.error ? p.reject(new Error(msg.error)) : p.resolve(msg.result)
        }
      }
      worker.onerror = function (event) {
        if (event.preventDefault) event.preventDefault()
        reject(fail(new Error(event.message || 'The conversion engine stopped unexpectedly.')))
      }
      notifyProgress('Loading transliteration engine…')
      worker.postMessage({
        type: 'init',
        base: Config.wasmBase.href,
        cacheName: WASM_CACHE_NAME,
        depWheels: DEP_WHEELS,
        aksharamukhaWheel: AKSHARAMUKHA_WHEEL
      })
    })
    return readyPromise
  }

  async function convertOneWasm (job) {
    await initWasm(job.onProgress)
    if (failed) throw new Error('The conversion engine is not available.')
    return new Promise(function (resolve, reject) {
      var id = nextId++
      pending[id] = { resolve: resolve, reject: reject }
      worker.postMessage({
        type: 'convert',
        id: id,
        source: job.source,
        target: job.target,
        text: job.text,
        nativize: job.nativize,
        preOptions: job.preOptions || [],
        postOptions: job.postOptions || []
      })
    })
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

  async function convertOne (job, useWasm, signal) {
    if (!useWasm) return convertOneApi(job, signal)
    try {
      return await convertOneWasm(job)
    } catch (e) {
      if (Config.engine === 'wasm') throw e
      console.warn('Aksharamukha: WASM engine failed, falling back to API.', e)
      return convertOneApi(job, signal)
    }
  }

  function totalTextBytes (jobs) {
    var total = 0
    for (var i = 0; i < jobs.length; i++) total += new Blob([jobs[i].text || '']).size
    return total
  }

  // True if an earlier page view on this site already downloaded the
  // engine into Cache Storage - starting it then needs no download, only
  // its start-up, which runs in the worker without blocking the page.
  var filesCachedCheck = null
  function engineFilesCached () {
    if (!filesCachedCheck) {
      filesCachedCheck = !window.caches
        ? Promise.resolve(false)
        : caches.open(WASM_CACHE_NAME).then(function (cache) {
          return Promise.all([
            cache.match(wasmUrl('pyodide/pyodide.asm.wasm')),
            cache.match(wasmUrl('wheel/' + AKSHARAMUKHA_WHEEL))
          ])
        }).then(function (hits) { return !!(hits[0] && hits[1]) }).catch(function () { return false })
    }
    return filesCachedCheck
  }

  // engine=auto routing. The engine is preferred whenever using it costs no
  // download - it's already running, or its files were saved by an earlier
  // page view - to keep conversions off the hosted API. Large text always
  // goes to the engine, where it's clearly faster. The API is used only
  // for a visitor's first page view on this site (while the engine
  // downloads in the background for next time), or if the engine can't
  // run in this browser at all.
  async function shouldUseWasm (jobs) {
    if (Config.engine === 'wasm') return true
    if (Config.engine === 'api' || failed) return false
    if (ready) return true
    if (totalTextBytes(jobs) >= AUTO_LARGE_TEXT_BYTES) return true
    return engineFilesCached()
  }

  // Jobs that share the same settings go to the converter as ONE combined
  // array - one API request (or engine call) per page rather than one per
  // marked element - and the result is split back per job. Pages set to
  // autodetect keep one call per element: detecting the script over the
  // whole page at once could guess wrong for a page mixing scripts.
  async function convertGroup (group, useWasm, signal) {
    if (group.length === 1) return [await convertOne(group[0], useWasm, signal)]
    var pieces = group.map(function (job) { return JSON.parse(job.text) })
    var combined = Object.assign({}, group[0], { text: JSON.stringify([].concat.apply([], pieces)) })
    var texts = parseConvertedTexts(await convertOne(combined, useWasm, signal))
    var expected = pieces.reduce(function (n, p) { return n + p.length }, 0)
    if (!texts || texts.length !== expected) {
      // Can't split the combined result back reliably - convert each
      // element on its own instead.
      return Promise.all(group.map(function (job) { return convertOne(job, useWasm, signal) }))
    }
    var offset = 0
    return pieces.map(function (p) {
      var slice = texts.slice(offset, offset + p.length)
      offset += p.length
      return JSON.stringify(slice)
    })
  }

  async function convertAll (jobs, options) {
    options = options || {}
    var useWasm = await shouldUseWasm(jobs)
    var groups = {}
    jobs.forEach(function (job, i) {
      var key = job.source === 'autodetect'
        ? 'element:' + i
        : JSON.stringify([job.source, job.target, job.nativize, job.preOptions || [], job.postOptions || []])
      ;(groups[key] = groups[key] || []).push(i)
    })
    var results = new Array(jobs.length)
    await Promise.all(Object.keys(groups).map(function (key) {
      var indexes = groups[key]
      return convertGroup(indexes.map(function (i) { return jobs[i] }), useWasm, options.signal).then(function (converted) {
        indexes.forEach(function (jobIndex, k) { results[jobIndex] = converted[k] })
      })
    }))
    return results
  }

  // Fire-and-forget: starts the engine (downloading it on a first visit)
  // in the background, so it's ready for this page's later conversions and
  // cached for the next page view. Runs in the worker, so it doesn't block
  // the page.
  function warmUp () {
    if (Config.engine === 'api') return
    initWasm().catch(function (e) {
      console.warn('Aksharamukha: background WASM warm-up failed (conversions will use the API).', e)
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

  // A host page's own CSS commonly keys font choices off a lang attribute
  // (e.g. sanskritdocuments.org's *[lang="sa"] { font-family: Shobhika }).
  // That's correct for the original text, but once converted to a different
  // script the outputClass we add to `el` (e.g. .granthapandya, meant to
  // pull in the matching web font) is inherited - and a lang-keyed rule
  // matching one of el's own descendants directly always beats an inherited
  // value, regardless of !important, since a direct match on the element
  // itself outranks inheritance from an ancestor. Left in place, the stale
  // lang attribute silently wins and the requested font never shows.
  // Stripping it while converted (and restoring it for "Original") keeps
  // the host page's own styling correct in both states.
  function captureLangs (el) {
    var withLang = el.hasAttribute && el.hasAttribute('lang') ? [el] : []
    if (el.querySelectorAll) withLang = withLang.concat(Array.prototype.slice.call(el.querySelectorAll('[lang]')))
    return withLang.map(function (node) { return { node: node, lang: node.getAttribute('lang') } })
  }

  // <pre> and <code> carry their own direct browser-default font-family
  // (monospace) - a direct rule on the element itself, not merely inherited
  // - so it beats whatever outputClass is inherited from an ancestor for
  // the exact same reason lang does above. Verse/poetry text wrapped in
  // <pre> for whitespace preservation is common enough (e.g. this is what
  // actually broke on sanskritdocuments.org) that it needs the same
  // outputClass applied directly to these descendants, not just to `el`.
  function captureFontCarriers (el) {
    var carriers = el.matches && el.matches('pre, code') ? [el] : []
    if (el.querySelectorAll) carriers = carriers.concat(Array.prototype.slice.call(el.querySelectorAll('pre, code')))
    return carriers
  }

  function register (el) {
    if (registry.has(el)) return
    registry.set(el, {
      texts: captureTexts(el),
      appliedOutputClass: '',
      langs: captureLangs(el),
      fontCarriers: captureFontCarriers(el)
    })
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

  // Returns false (and leaves the element untouched) if `texts` isn't one
  // converted string per original text node - writing anything else in
  // would scramble the page, e.g. a raw string gets spread across the text
  // nodes one character each.
  function applyResult (el, texts, outputClass) {
    var entry = registry.get(el)
    var expected = entry ? entry.texts.length : captureTexts(el).length
    if (!Array.isArray(texts) || texts.length !== expected) return false
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
    if (entry) {
      entry.appliedOutputClass = outputClass || ''
      entry.langs.forEach(function (rec) {
        if (outputClass) rec.node.removeAttribute('lang')
        else rec.node.setAttribute('lang', rec.lang)
      })
      entry.fontCarriers.forEach(function (carrier) {
        if (outputClassOld && outputClassOld !== outputClass) carrier.classList.remove(outputClassOld)
        if (outputClass) carrier.classList.add(outputClass)
      })
    }
    return true
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
    parseConvertedTexts: parseConvertedTexts
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
    link.href = new URL('fonts.css', Config.assetBase).href
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
    var ICON_URL = new URL('icon.png', Config.assetBase).href

    var launcher = document.createElement('button')
    launcher.type = 'button'
    launcher.id = 'aksharamukha-launcher'
    launcher.className = 'aksharamukha-printhide'
    launcher.title = 'Convert script (Aksharamukha)'
    launcher.setAttribute('aria-label', 'Open script converter')
    launcher.innerHTML = '<img src="' + ICON_URL + '" width="22px" alt=""/>' +
      '<span id="aksharamukha-launcher-label"></span>'
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
      '<input type="text" id="aksharamukha-select-input" autocomplete="off" spellcheck="false" placeholder="' + SEARCH_PLACEHOLDER + '" ' +
      'role="combobox" aria-expanded="false" aria-autocomplete="list" aria-controls="aksharamukha-listbox"/>' +
      '<input type="hidden" id="aksharamukhaselect" name="scriptinput"/>' +
      '<ul id="aksharamukha-listbox" role="listbox" hidden></ul>' +
      '</div>' +
      '<div id="aksharamukha-options-slot"></div>' +
      '<div id="aksharamukha-loading" aria-live="polite"><div class="aksharamukha-progressbar"><div></div></div><small></small></div>' +
      '<div id="aksharamukha-error" hidden></div>' +
      '<div id="aksharamukha-branding">' +
      '<a href="https://aksharamukha.com" class="aksharamukha-hyperlink" target="_blank" rel="noopener">' +
      '<img src="' + ICON_URL + '" width="15px" alt=""/> <small><sup>Aksharamukha</sup></small></a>' +
      '</div>'
    document.body.insertAdjacentElement('afterbegin', root)

    els.root = root
    els.launcher = launcher
    els.launcherLabel = launcher.querySelector('#aksharamukha-launcher-label')
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
    root.addEventListener('click', onInfoClick)
    // Only the visitor's own clicks are remembered - not the automatic
    // open on a first visit below.
    els.hideButton.addEventListener('click', function () { hide(); Storage.set(HIDDEN_KEY, 'true') })
    launcher.addEventListener('click', function () { show(); Storage.set(HIDDEN_KEY, 'false') })
    els.searchInput.addEventListener('focus', openFresh)
    // Focus alone doesn't cover a click on the box while it already has
    // focus (e.g. after Escape), which should reopen the list too.
    els.searchInput.addEventListener('click', function () { if (els.listbox.hidden) openFresh() })
    // mousedown (not click) fires before the search input's blur, so the
    // option gets selected before the listbox would otherwise close itself.
    els.listbox.addEventListener('mousedown', onListboxMouseDown)
    document.addEventListener('click', function (event) {
      if (root.contains(event.target)) return
      closeListbox()
      closeExamples()
    })

    // Open straight to the panel while the visitor is on the original
    // script, so they discover it at all - unless they've hidden it
    // themselves (otherwise a reader who doesn't want it would have to
    // close it again on every page of a multi-page site), or the screen is
    // too narrow for it not to cover the text. A visitor who already
    // picked a script starts collapsed behind the badge, which shows it.
    var onOriginal = !restoredTarget || restoredTarget === 'Original'
    var hiddenByVisitor = Storage.get(HIDDEN_KEY) === 'true'
    var narrowScreen = window.matchMedia && window.matchMedia(PHONE_MEDIA_QUERY).matches
    if (onOriginal && !hiddenByVisitor && !narrowScreen) show()

    return restoredTarget
  }

  // Same key v3 used, so a visitor who hid the v3 widget on a site keeps
  // that choice after the site moves to v5.
  var HIDDEN_KEY = 'hidePlugin'
  // The open panel is 220px wide plus margins: under 640px it covers a good
  // part of the screen. The touch-screen clause catches phones and tablets
  // on pages without <meta name="viewport">, which phones lay out ~980px
  // wide (so the width test alone never matches) and then zoom out.
  var PHONE_MEDIA_QUERY = '(max-width: 640px), (hover: none) and (pointer: coarse)'

  var optionsData = []
  var activeOptionId = null
  var SEARCH_PLACEHOLDER = 'Search scripts…'

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

  // Opening the picker (as opposed to filtering it while typing): the box
  // empties so a search can be typed straight away, the current script
  // stays visible as the placeholder, and the full list opens with the
  // current script highlighted and scrolled into view - arrow keys start
  // from there, and Enter keeps it.
  function openFresh () {
    els.searchInput.value = ''
    els.searchInput.placeholder = currentLabel() || SEARCH_PLACEHOLDER
    openListbox('')
    var current = els.listbox.querySelector('li[role="option"][data-value="' + els.select.value + '"]')
    if (current) setActive(current, true)
  }

  function closeListbox () {
    els.listbox.hidden = true
    els.searchInput.setAttribute('aria-expanded', 'false')
    els.searchInput.removeAttribute('aria-activedescendant')
    activeOptionId = null
    // Typing without picking anything reverts to the last real selection,
    // so a half-typed query never gets mistaken for the active script.
    els.searchInput.value = currentLabel()
    els.searchInput.placeholder = SEARCH_PLACEHOLDER
    // Leaving the cursor in a box that shows the current script's name
    // means the next keystroke appends to it ("Tamilk...") rather than
    // starting a fresh search, and a click on the still-focused box
    // wouldn't reopen the list either. Also dismisses the on-screen
    // keyboard on phones once a pick is made.
    els.searchInput.blur()
  }

  // Scrolls only the listbox itself, never the host page - scrollIntoView()
  // would also scroll any scrollable ancestor, including the page.
  function setActive (li, center) {
    if (activeOptionId) {
      var prev = document.getElementById(activeOptionId)
      if (prev) prev.classList.remove('is-active')
    }
    activeOptionId = li.id
    li.classList.add('is-active')
    els.searchInput.setAttribute('aria-activedescendant', activeOptionId)
    var lb = els.listbox
    var top = li.offsetTop
    var bottom = top + li.offsetHeight
    if (center) lb.scrollTop = top - (lb.clientHeight - li.offsetHeight) / 2
    else if (top < lb.scrollTop) lb.scrollTop = top
    else if (bottom > lb.scrollTop + lb.clientHeight) lb.scrollTop = bottom - lb.clientHeight
  }

  function moveActive (delta) {
    var opts = Array.prototype.filter.call(els.listbox.children, function (li) { return li.getAttribute('role') === 'option' })
    if (!opts.length) return
    var idx = opts.findIndex(function (li) { return li.id === activeOptionId })
    idx = (idx + delta + opts.length) % opts.length
    setActive(opts[idx], false)
  }

  function selectValue (value, triggerChange) {
    els.select.value = value
    var match = optionsData.filter(function (o) { return o.value === value })[0]
    els.searchInput.value = match ? match.label : value
    // The launcher badge shows the current script's full name (not an
    // abbreviation - there's no reliable way to abbreviate "Zanabazar
    // Square" or "Meetei Mayek" that everyone would recognize) whenever a
    // real target is selected, so a visitor can see what's currently
    // displayed at a glance without expanding the panel - on any device,
    // not just on hover, which a tooltip alone wouldn't cover. For
    // "Original script" the label reads "Change script" instead of being
    // left blank - a bare icon with no text gives a first-time visitor no
    // hint that it's interactive at all (this is what v3/v4's old
    // "Displaying in X / Change script" indicator communicated, and site
    // owners relying on that wording noticed its absence).
    els.launcherLabel.textContent = value !== 'Original' && match ? match.label : 'Change script'
    els.launcher.classList.add('aksharamukha-has-label')
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
    if (event.key === 'ArrowDown') { event.preventDefault(); if (els.listbox.hidden) openFresh(); else moveActive(1) } else if (event.key === 'ArrowUp') { event.preventDefault(); if (els.listbox.hidden) openFresh(); else moveActive(-1) } else if (event.key === 'Enter') {
      event.preventDefault()
      if (activeOptionId) {
        selectValue(document.getElementById(activeOptionId).getAttribute('data-value'))
      } else if (!els.searchInput.value.trim()) {
        // Empty box, nothing highlighted (e.g. typed then cleared): keep
        // the current script rather than falling through to the first
        // visible option, which would silently switch to "Original script".
        closeListbox()
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
    if (example) html += exampleHtml(example)
    return html + '</span>'
  }

  // With a mouse, the example shows on hover (or keyboard focus). Touch
  // screens have no hover, and tapping the option's name switches it on,
  // so there an "i" button - shown only on touch screens, see PANEL_CSS -
  // opens the example without changing the option.
  function exampleHtml (example) {
    return '<button type="button" class="aksharamukha-info" aria-label="Show example" aria-expanded="false">i</button>' +
      '<span class="aksharamukha-tooltip" role="tooltip">' + example + '</span>'
  }

  function onInfoClick (event) {
    var button = event.target.closest('.aksharamukha-info')
    var chip = button && button.parentNode
    var wasOpen = chip && chip.classList.contains('is-open')
    closeExamples()
    if (!chip || wasOpen) return
    chip.classList.add('is-open')
    button.setAttribute('aria-expanded', 'true')
    keepOnScreen(chip.querySelector('.aksharamukha-tooltip'))
  }

  function closeExamples () {
    Array.prototype.forEach.call(els.root.querySelectorAll('.aksharamukha-chip.is-open'), function (chip) {
      chip.classList.remove('is-open')
      chip.querySelector('.aksharamukha-tooltip').style.transform = ''
      chip.querySelector('.aksharamukha-info').setAttribute('aria-expanded', 'false')
    })
  }

  // The example is centred over its chip, which on a phone can push it
  // past the edge of the screen - shift it back in if so.
  function keepOnScreen (tooltip) {
    var margin = 8
    var rect = tooltip.getBoundingClientRect()
    var shift = 0
    if (rect.left < margin) shift = margin - rect.left
    else if (rect.right > window.innerWidth - margin) shift = window.innerWidth - margin - rect.right
    if (shift) tooltip.style.transform = 'translateX(calc(-50% + ' + Math.round(shift) + 'px))'
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
        exampleHtml(preserveExample) +
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
  '#aksharamukha-navbar .aksharamukha-info { display: none; align-items: center; justify-content: center; width: 22px; height: 22px; margin: 0 0 0 3px; padding: 0; border-radius: 50%; font: italic 700 12px/1 Georgia, "Times New Roman", serif; }\n' +
  '@media (hover: none) {\n' +
  '  #aksharamukha-navbar .aksharamukha-info { display: inline-flex; }\n' +
  '  .aksharamukha-chip:hover .aksharamukha-tooltip, .aksharamukha-chip:focus-within .aksharamukha-tooltip { visibility: hidden; opacity: 0; }\n' +
  '  .aksharamukha-has-example label { cursor: pointer; text-decoration: none; }\n' +
  '}\n' +
  '.aksharamukha-chip.is-open .aksharamukha-tooltip { visibility: visible; opacity: 1; }\n' +
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
  '#aksharamukha-launcher { position: fixed; width: 44px; height: 44px; border-radius: 22px; background: var(--aksharamukha-bg, #fff); border: 1px solid var(--aksharamukha-border, #e7e8ee); box-shadow: 0 4px 14px rgba(20,20,40,.15); display: flex; align-items: center; justify-content: center; gap: 7px; cursor: pointer; z-index: 1000; padding: 0; overflow: hidden; transition: width .15s ease, padding .15s ease; }\n' +
  '#aksharamukha-launcher.aksharamukha-has-label { width: auto; max-width: 220px; padding: 0 14px 0 11px; }\n' +
  '#aksharamukha-launcher-label { font-family: var(--aksharamukha-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif); font-size: 13px; font-weight: 500; color: var(--aksharamukha-text, #1f2430); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n' +
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

    var failed = 0
    results.forEach(function (raw, i) {
      // getOutputClass's 3rd argument is content-dependent (e.g. Vedic
      // accent-mark detection), so it must be computed per element's own
      // result, not once for the whole batch.
      var outputClass = target === 'Original' ? '' : getOutputClass(target, State.postOptionsList, raw)
      if (!Content.applyResult(targetElements[i], Content.parseConvertedTexts(raw), outputClass)) {
        failed += 1
        console.error('Aksharamukha plugin: unexpected conversion result, left this element unchanged', raw)
      }
    })
    if (failed) Panel.setError('Part of this page could not be converted to this script.')

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
    if (!Content.applyResult(el, Content.parseConvertedTexts(results[0]), outputClass)) {
      console.error('Aksharamukha plugin: unexpected conversion result, left this element unchanged', results[0])
    }
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
  if (restoredTarget) runConversion()
  // Start the engine in the background once the page is idle, so it's
  // ready for this page's later conversions and - on a first visit -
  // downloaded and cached for the next page view, which can then convert
  // without the API at all (see Engine's shouldUseWasm). It runs in a
  // worker, so it doesn't block the page, and it stays silent: whatever
  // the visitor asked for is already shown by the conversion's own
  // loading state. A no-op with engine=api.
  var scheduleIdle = window.requestIdleCallback || function (fn) { setTimeout(fn, 1500) }
  scheduleIdle(function () { Engine.warmUp() })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init)
} else {
  init()
}
