# Aksharamukha Web Plugin

Drop-in `<script>` widget that adds live script conversion to any web page. Mark
up the text you want convertible with a class, load the script, and a small
launcher appears letting visitors pick a target script.

```html
<div class="aksharamukha-text">आपका पाठ यहाँ जाएगा</div>
<script src="https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-web-plugin/aksharamukha-v5.js"></script>
```

`aksharamukha-v5.js` is the current version. `aksharamukha-v2.js`/`v3.js`/`v4.js`
are kept only so existing sites that already load them don't break - do not
use them for new embeds. `v4.js` is a CSS-only visual refresh of `v3.js`
(same behavior); `v5.js` is the current version - a rewrite that runs the
transliteration engine client-side via WASM by default and fixes several
bugs present in `v3`/`v4` (see the repo root [README](../README.md#web-plugin)
for the short version, or the commit history in `aksharamukha-web-plugin/`
for the full detail).

## Query parameters

All parameters go on the `<script src="...">` URL itself, e.g.
`aksharamukha-v5.js?engine=api&position=bottom-left`.

| Parameter | Default | Meaning |
|---|---|---|
| `source` | `autodetect` | Source script for elements that don't declare their own via `inputscript-X` (see below). Any script identifier, e.g. `source=Tamil`. |
| `class` | `aksharamukha-text` | Which elements get converted - only elements with this class. If no element on the page has it, the plugin wraps the entire `<body>` instead, so a page with zero markup still works. |
| `preoptions` | *(none)* | Comma-separated pre-processing options applied globally, e.g. `preoptions=TamilTranscribe`. Overridden per-element by a `preoptions-X` class. |
| `scriptlist` | *(full list)* | Comma-separated list restricting which scripts appear in the picker, e.g. `scriptlist=Grantha,Kannada`. |
| `prelist` | *(none)* | One of the preset lists below, as a shortcut for a common `scriptlist`. Ignored if `scriptlist` is also given. |
| `changeurl` | `0` | Set to `1` to push the selected target into the page URL (`?akshrmkh=Target`) via `history.pushState`, so a reload/shared link keeps the same conversion. |
| `engine` | `auto` | Which conversion engine to use - see below. |
| `wasmbase` | *(the `wasm/` folder next to the script)* | URL prefix to load the WASM runtime + `aksharamukha` wheel from, if you're hosting them somewhere other than alongside the script. |
| `position` | `top-right` | Which viewport corner the launcher/panel live in: `top-right`, `top-left`, `bottom-right`, or `bottom-left`. The launcher and the expanded panel always share this corner and swap visibility, so they never overlap each other. |
| `offset` | `20` | Distance in px from whichever edge(s) `position` puts the panel against. Raise this if your page has a fixed header/footer at that edge that would otherwise sit on top of the panel - e.g. `offset=80` for an 80px-tall fixed header when using a `top-*` position. |

### `prelist` presets

- `majorindic` - Major Indic Scripts
- `majorall` - All Major Scripts
- `sansktradall` - Scripts traditionally used to write Sanskrit
- `sanskall` - All Scripts capable of writing Sanskrit

### `engine`

- **`auto`** (default) - runs the actual transliteration engine client-side via WASM (Pyodide + the real `aksharamukha` Python package). After a one-time ~15-20s download and cold start (started proactively in the background during browser idle time, so it's often already done by the time a visitor interacts), every conversion is instant with no network call. Falls back automatically to the hosted API if the WASM assets fail to load. Best for pages that convert a lot of text, or that should keep working if the hosted API is ever down - but it's a large first-load download (~20MB), so it's not free for a page that only converts a line or two.
- **`api`** - skips WASM entirely and always calls the hosted API (the same lightweight, networked behavior `v3`/`v4` had). No large download, but every conversion is a network round trip and depends on the API being reachable. Best for pages with light or occasional use, or visitors on slow connections.
- **`wasm`** - forces the WASM engine with no API fallback. Useful for testing; not recommended for production since a WASM load failure then breaks conversion entirely instead of degrading to the API.

```html
<!-- lightweight: always uses the hosted API, no WASM download -->
<script src="https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-web-plugin/aksharamukha-v5.js?engine=api"></script>

<!-- panel in the bottom-left, offset for a page with a tall fixed footer -->
<script src="https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-web-plugin/aksharamukha-v5.js?position=bottom-left&offset=60"></script>
```

## Per-element markup

Mixed-source pages can override the source script and pre-options per
element instead of (or in addition to) the script-tag-wide `source`/
`preoptions` params, by adding classes directly to the element:

```html
<div class="verse inputscript-Telugu">మహాశ్రమణ</div>
<div class="verse inputscript-Malayalam">കുസുമിതോ ലക്ഷണൈഃ</div>
<div class="verse inputscript-Tamil preoptions-TamilTranscribe">ஆதீஸ்வர் ஸ்ரீவிருஷபநாதர்</div>
<script src="https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-web-plugin/aksharamukha-v5.js?class=verse"></script>
```

Elements added to the page later (SPA route changes, AJAX-loaded content,
etc.) are picked up automatically and converted to whatever script is
currently selected - no rescan or re-init needed.

## Local development

- `demo-v5.html` - default (`engine=auto`) demo.
- `demo-v5-api.html` - lightweight (`engine=api`) demo.
- Must be served over HTTP, not opened as a `file://` page - WASM
  instantiation is blocked under `file://` in most browsers. From this
  folder: `python -m http.server 8000`, then open `http://localhost:8000/demo-v5.html`.

The plugin is built from source, not hand-edited directly:

- `src/script-data.generated.js` - the script/pre-option/post-option catalog, generated from the front-end's `ScriptMixin.js` by `../build-scripts/build-web-plugin-data.js`. Re-run that script after `ScriptMixin.js` changes.
- `src/v5-plugin.js` - the actual plugin logic, hand-edited.
- `../build-scripts/build-web-plugin-v5.js` - concatenates the two sources above into `aksharamukha-v5.js`. Run this after editing `src/v5-plugin.js` or regenerating `src/script-data.generated.js`.
- `../build-scripts/copy-wasm-assets.ps1` - copies the Pyodide runtime + `aksharamukha` wheel from a sibling `aksharamukha-python/aksharamukha-wasm` checkout into `wasm/` (gitignored - it's a ~20MB binary payload, host it on your CDN alongside the script for production rather than committing it).
