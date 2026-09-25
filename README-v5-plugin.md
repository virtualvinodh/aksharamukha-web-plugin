# Aksharamukha Web Plugin

Drop-in `<script>` widget that adds live script conversion to any web page. Mark
up the text you want convertible with a class, load the script, and a small
launcher appears letting visitors pick a target script.

```html
<div class="aksharamukha-text">आपका पाठ यहाँ जाएगा</div>
<script src="https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha-web-plugin@v5.0.15/aksharamukha-v5.js"></script>
```

That `@v5.0.15` matters - see "Releasing a new version" below for why real
embeds should always pin a tag like this instead of tracking `master`.

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
| `changeurl` | `0` | Set to `1` to keep the selected target in the page URL (`?akshrmkh=Target`, updated in place - no extra Back-button entries), so a reload or shared link opens in the same script. A link carrying `?akshrmkh=` is honored whatever this is set to. |
| `engine` | `auto` | Which conversion engine to use - see below. |
| `wasmbase` | *(on jsDelivr: the engine's own commit; self-hosted: the `wasm/` folder next to the script)* | URL prefix to load the WASM runtime + `aksharamukha` wheel from, if you're hosting them somewhere else. See "Build pipeline" below for why jsDelivr embeds load it from a fixed commit. |
| `position` | `top-right` | Which viewport corner the launcher/panel live in: `top-right`, `top-left`, `bottom-right`, or `bottom-left`. The launcher and the expanded panel always share this corner and swap visibility, so they never overlap each other. |
| `offset` | `20` | Distance in px from whichever edge(s) `position` puts the panel against. Raise this if your page has a fixed header/footer at that edge that would otherwise sit on top of the panel - e.g. `offset=80` for an 80px-tall fixed header when using a `top-*` position. |

When collapsed, the launcher badge shows the current script's full name
(e.g. "Kannada") once a real target is selected, so a visitor can see
what's currently displayed at a glance without expanding the panel -
works the same on touch as on desktop, unlike a hover-only tooltip. It's
the full name, not an abbreviation - there's no reliable 2-3 letter
shorthand for something like "Zanabazar Square" that everyone would
recognize. For "Original script" it reads "Change script".

The panel opens by itself while the page is in its original script, so
visitors discover it - except on phones and tablets (screens under 640px
wide, or touch screens without hover, where it would cover the text) and
for a visitor who has hidden it: that choice is
remembered across pages and visits (under the same `hidePlugin` storage
key v3 used, so it carries over from v3). A visitor who has picked a
script starts with the badge instead.

> **⚠️ If no element on the page has the `class` above, the plugin wraps
> and converts the ENTIRE `<body>` - navigation, footer, everything, not
> just "the main content."** This is a deliberate zero-setup fallback
> (inherited from v2/v3/v4), not a bug, but it's easy to hit by accident:
> forgetting to add `class="aksharamukha-text"` to your content doesn't
> mean "nothing gets converted," it means "the whole page does." If you
> want only part of a page convertible, that class (or `?class=yourname`)
> is not optional.

### `prelist` presets

- `majorindic` - Major Indic Scripts
- `majorall` - All Major Scripts
- `sansktradall` - Scripts traditionally used to write Sanskrit
- `sanskall` - All Scripts capable of writing Sanskrit

### `engine`

- **`auto`** (default) - runs the actual transliteration engine client-side via WASM (Pyodide + the real `aksharamukha` Python package), in a Web Worker so its start-up and conversions never freeze the page. The engine starts in the background once the page is idle; on a visitor's first page view on a site it's downloaded (~9MB compressed) and saved in the browser's Cache Storage for that site. Routing:
  - The engine is used whenever that costs no download: it's already running, or its files were saved by an earlier page view (so a returning visitor's pages convert with no API calls at all).
  - Very large text (over ~300KB) always uses the engine, where it's faster than the API.
  - Otherwise - a visitor's very first page view, before the engine has finished downloading - the hosted API is used.
  - If the engine can't run in the browser at all (e.g. a Content-Security-Policy that blocks `blob:` workers), everything falls back to the API.
- In both engines, elements that share the same settings are converted in **one** call per page, not one per element. Pages using `source=autodetect` (the default) keep one call per element, since detecting the script across a whole mixed-script page at once could guess wrong - set `source=` to get the single call.
- **`api`** - skips WASM entirely and always calls the hosted API (the same lightweight, networked behavior `v3`/`v4` had). No large download, but every conversion is a network round trip and depends on the API being reachable. Best for pages with light or occasional use, or visitors on slow connections.
- **`wasm`** - forces the WASM engine with no API fallback. Useful for testing; not recommended for production since a WASM load failure then breaks conversion entirely instead of degrading to the API.

```html
<!-- lightweight: always uses the hosted API, no WASM download -->
<script src="https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha-web-plugin@v5.0.15/aksharamukha-v5.js?engine=api"></script>

<!-- panel in the bottom-left, offset for a page with a tall fixed footer -->
<script src="https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha-web-plugin@v5.0.15/aksharamukha-v5.js?position=bottom-left&offset=60"></script>
```

## Theming

The panel's colors/font aren't hardcoded - they're read through CSS custom
properties with sensible defaults, so a host page can restyle the widget
from its own stylesheet without forking this file. Custom properties
inherit normally regardless of which `<style>` tag declared the rule that
uses them, so setting these on `:root` (or any ancestor of `<body>`) in
the page's own CSS is enough - no `!important`, no targeting the
plugin's internal selectors:

```css
:root {
  --aksharamukha-accent: #0d9488;         /* checked chips, links, focus rings, spinner */
  --aksharamukha-accent-contrast: #fff;   /* text color on top of --aksharamukha-accent */
  --aksharamukha-accent-tint: #e6f5f3;    /* light hover backgrounds */
  --aksharamukha-accent-strong: #0f766e;  /* darker accent text (selected option, button hover text) */
  --aksharamukha-bg: #fff;                /* panel/launcher/listbox background */
  --aksharamukha-border: #e7e8ee;         /* panel/launcher border */
  --aksharamukha-radius: 12px;            /* panel corner radius */
  --aksharamukha-text: #1f2430;           /* primary text */
  --aksharamukha-text-muted: #4a4f5c;     /* secondary text (chip labels, buttons) */
  --aksharamukha-text-faint: #8a8f9c;     /* tertiary text (branding, loading state) */
  --aksharamukha-font: Georgia, serif;    /* panel font stack */
}
```

Every property has a default baked in (shown above), so you only need to
set the ones you actually want to change.

**These variables are the supported way to restyle the panel - directly
overriding `#aksharamukha-navbar { background: ...; border: ...; }` in your
own CSS is not, and verifiably doesn't reliably work.** The plugin injects
its own `#aksharamukha-navbar` rule via JavaScript *after* your page's own
`<style>`/`<link>` tags have already been parsed, so on equal specificity
(an ID selector vs. the same ID selector) the plugin's later-loaded rule
wins the cascade tie, not yours - confirmed by testing the exact snippet
above against a real page. Custom properties don't have this problem:
the plugin never *declares* `--aksharamukha-bg` itself, it only *reads*
it via `var(--aksharamukha-bg, #fff)`, so there's no rule from the
plugin to lose a specificity/order fight against - whatever you set on
`:root` simply is the value, regardless of when either stylesheet loaded.

The panel's `top`/`left`/`right`/`bottom` position is set via inline
style (driven by `?position=`/`?offset=`), which beats any stylesheet
selector rule regardless of specificity or order - a plain `#aksharamukha-navbar { top: 0; }`
in your CSS can never move it. Use `?offset=0` on the script URL instead
if you want it flush against the edge.

## Per-element markup

Mixed-source pages can override the source script and pre-options per
element instead of (or in addition to) the script-tag-wide `source`/
`preoptions` params, by adding classes directly to the element:

```html
<div class="verse inputscript-Telugu">మహాశ్రమణ</div>
<div class="verse inputscript-Malayalam">കുസുമിതോ ലക്ഷണൈഃ</div>
<div class="verse inputscript-Tamil preoptions-TamilTranscribe">ஆதீஸ்வர் ஸ்ரீவிருஷபநாதர்</div>
<script src="https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha-web-plugin@v5.0.15/aksharamukha-v5.js?class=verse"></script>
```

Elements added to the page later (SPA route changes, AJAX-loaded content,
etc.) are picked up automatically and converted to whatever script is
currently selected - no rescan or re-init needed.

## Local development

- `demo-v5.html` - default (`engine=auto`) demo.
- `demo-v5-api.html` - lightweight (`engine=api`) demo.
- Self-hosting instead of using jsDelivr: keep `fonts.css`, `icon.png` and `wasm/` in the same folder as `aksharamukha-v5.js` - the plugin loads them from next to itself.
- Must be served over HTTP, not opened as a `file://` page - WASM
  instantiation is blocked under `file://` in most browsers. From this
  folder: `python -m http.server 8000`, then open `http://localhost:8000/demo-v5.html`.

## Tests

`npm install && npm test` runs the Playwright suite in `tests/` against
`demo-v5-api.html` (`engine=api` - no WASM cold start, keeps the suite
fast; the committed `wasm/` isn't exercised by these tests). It spins up
its own static file server (`tests/static-server.js`) automatically, the
same way `python -m http.server` does for manual testing, so no separate
setup is needed - just `npm test`.

These are integration tests, not isolated unit tests: they hit the live
hosted API (`aksharamukha-plugin.appspot.com`) for every conversion, so a
transient issue with that service (not this repo) can fail a run. Runs
automatically on every push/PR via `.github/workflows/ci.yml`.

## Build pipeline (spans two repos)

`aksharamukha-v5.js` is built from source, not hand-edited directly - and
that source is split across **this** repo and the
[virtualvinodh/aksharamukha](https://github.com/virtualvinodh/aksharamukha)
monorepo, because the script/option catalog's only source of truth
(`aksharamukha-front/src/mixins/ScriptMixin.js`) lives there, not here.

Expected local layout - both repos checked out as siblings under the same
parent folder:

```
Projects/
├─ aksharamukha/              (the monorepo - ScriptMixin.js lives here)
│  └─ build-scripts/build-web-plugin-data.js
├─ aksharamukha-web-plugin/   (this repo)
│  ├─ src/script-data.generated.js   <- generated, see step 1
│  ├─ src/v5-plugin.js               <- hand-edited, lives here
│  ├─ build-scripts/build-web-plugin-v5.js
│  └─ wasm/                          <- copied from upstream, committed
└─ aksharamukha-python/       (upstream - the source of truth for the engine)
   └─ aksharamukha-wasm/pyodide/, wheel/
```

To rebuild after any change (`ScriptMixin.js` in the monorepo, the engine
upstream, or `src/v5-plugin.js` here), run one command **in this repo**:

```
node build-scripts/build-web-plugin-v5.js
```

With the sibling layout above, it finds the monorepo automatically,
runs its `build-web-plugin-data.js` for you to refresh
`src/script-data.generated.js` from the live `ScriptMixin.js`, then
concatenates that with `src/v5-plugin.js` into `aksharamukha-v5.js`. If
your checkout of the monorepo lives somewhere else, pass its path as an
argument: `node build-scripts/build-web-plugin-v5.js ../path/to/aksharamukha`.

If the monorepo isn't found at all (e.g. building from just this repo,
without it checked out), the script warns and falls back to whatever
`src/script-data.generated.js` is already on disk (it's a real tracked
file here, not generated-and-gitignored) rather than failing outright -
so this still works standalone, just without picking up any
`ScriptMixin.js` changes since the last time someone with the monorepo
ran it.

**The WASM engine** (the Pyodide runtime plus the `aksharamukha` wheel)
comes from upstream: `aksharamukha-python/aksharamukha-wasm/pyodide/` and
`wheel/`, which is the source of truth - this repo never builds it, it
only copies it. The same build command compares upstream with `wasm/`
file by file (pass `--engine-from=<path>` if upstream lives elsewhere):

- **Nothing differs** (the usual case): `wasm/` is left untouched.
- **Something differs:** it copies the changed files into `wasm/` (and
  removes ones upstream dropped), writes a `.br` for each, and **stops**
  with "commit `wasm/`, then run the build again". The bundle loads the
  engine from the commit that last changed `wasm/`, so that commit has to
  exist first. The second run then builds the bundle pointing at it.
- The build refuses to run while `wasm/` has uncommitted changes, for the
  same reason.

On jsDelivr, the plugin loads the engine from that commit
(`…aksharamukha-web-plugin@<commit>/wasm/`), not from next to the script.
So a plugin release that doesn't change the engine doesn't make visitors
download the ~9MB engine again. Self-hosted copies (and `?wasmbase=`) are
unaffected. The wheel's file name (e.g. a new version number) is picked up
from `wasm/wheel/` automatically; the few extra wheels the plugin installs
itself are listed in `DEP_WHEELS` in `src/v5-plugin.js`, and the build
fails if any of them is missing from `wasm/pyodide/`.

The build needs this repo's git history (not a shallow clone) to find the
engine's commit. There's no build step that *writes to* the monorepo or
upstream - it only ever reads from them.

## Serving pre-compressed assets

The build writes a `.br` (Brotli) sibling at maximum quality for every
file it copies into `wasm/` and for `aksharamukha-v5.js` itself (Node's
built-in `zlib` Brotli codec) - the bundle is plain JS text and
compresses just as well as the other JS glue files below. Pass
`--skip-compression` to skip the bundle's (engine files are always
compressed when copied).
Measured effect on the real files:

| File | Original | `.br` | Reduction |
|---|---|---|---|
| `aksharamukha-v5.js` | 233 KB | 46 KB | 80% |
| `pyodide.asm.wasm` | 10.09 MB | 2.26 MB | 78% |
| `pyodide.asm.js` | 1.23 MB | 193 KB | 84% |
| `pyodide.js` | 16.5 KB | 5.8 KB | 65% |
| `python_stdlib.zip` + all `.whl` files | ~7.6 MB combined | ~7.5 MB combined | 2-10% |
| **`wasm/` total** | **~19 MB** | **~8 MB** | **~58%** |

The raw `.wasm`/`.js` compress dramatically; the `.zip`/`.whl` files barely
shrink, since they're already-compressed archives and Brotli has little
left to squeeze out of them. Don't expect the whole payload to drop to
4-6MB - **~8MB total is the realistic floor** for this asset set.

Generating the `.br` files does nothing by itself - **your web server or
CDN has to be configured to serve them** in place of the original when a
client's `Accept-Encoding` header allows it, with a `Content-Encoding: br`
response header on the reply. How to do that depends on where you host
`wasm/`:

- **nginx**: the `brotli_static on;` directive (via the `ngx_brotli`
  module) serves a `.br` sibling automatically when present, with no
  per-request compression cost.
- **Static hosts / CDNs** (Netlify, Vercel, CloudFront, etc.): check
  whether they auto-detect and serve pre-compressed siblings, or need a
  build/deploy config to declare it (varies by provider - some instead
  compress on the fly, which is also fine, just don't skip checking).
  jsDelivr does its own on-the-fly Brotli/gzip compression already for
  eligible file types, so `.br` siblings hosted there specifically are
  redundant (harmless, just unused) rather than required.
- Verify with `curl -H "Accept-Encoding: br" -D - -o /dev/null <url>`
  once deployed - look for `Content-Encoding: br` in the response.
  Without it, every visitor is silently downloading the full uncompressed
  originals and the `.br` files are dead weight in your deployment.

Verified locally with a small server that serves the `.br` sibling when
`Accept-Encoding` allows it: a full plugin load + conversion completed
correctly, with the browser receiving ~8.3MB over the wire for the whole
page instead of the ~19MB uncompressed cold start.

(Considered `wasm-opt -Oz` too, re-optimizing `pyodide.asm.wasm` itself -
confirmed it still works if applied, but only shrinks the file by ~3%,
since Pyodide's official build is already well-optimized. Not worth the
added Binaryen build dependency for that little.)

## Releasing a new version

**⚠️ Read this before pushing to `master` and telling anyone to embed a new
version.**

`wasm/` (the ~19MB Pyodide runtime + wheels, plus their `.br` siblings) is
committed to this repo, not gitignored - that's deliberate: it's what
makes `<script src=".../aksharamukha-v5.js">` a genuine **one-line, drop-in**
embed with the WASM engine working out of the box, the same experience
this project has always promised for `v2`/`v3`/`v4`. jsDelivr's `gh/` CDN
serves a repo's file tree at a given ref - it can't reach into a GitHub
Release's attached assets - so there's no way to keep `wasm/` out of the
git tree and still get that one-link experience through jsDelivr.

That means **every commit here changes what a `master`-tracking jsDelivr
link serves**, `wasm/` included. jsDelivr also gives unpinned/branch paths
a much shorter cache lifetime than a pinned tag or commit (which it treats
as immutable and caches long-term, since the content there can never
change) - so an embed that tracks `master` can end up re-downloading the
full payload far more often than one pinned to a tag, on top of serving
whatever's newest (possibly untested) at any given moment. Both defeat
the point of the caching work in this repo (Cache Storage, `.br`
pre-compression). **Real embeds - anything you'd actually tell someone to
paste into their site - must pin a tag, not track `master`:**

```html
<script src="https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha-web-plugin@v5.0.15/aksharamukha-v5.js"></script>
```

jsDelivr treats a tag-pinned path as immutable and caches it long-term,
exactly like a pinned npm/CDN package version. `@master` (or no `@` at
all, which jsDelivr treats the same way) is fine for **your own** testing
of the latest commit, never for a snippet you hand to someone else.

**Checklist for every release** (i.e. whenever you want the public embed
snippet to move forward):

1. Land whatever changes you're releasing on `master` as normal.
2. Run `node build-scripts/build-web-plugin-v5.js` - **without**
   `--skip-compression`, so `aksharamukha-v5.js.br` is rebuilt to match
   (CI fails if the two differ, or if the committed bundle isn't what the
   build produces). The build needs the `aksharamukha` monorepo and
   `aksharamukha-python` checked out as siblings, and network access (to
   pin `fonts.css`'s font import to the `aksharamukha-fonts` repo's current
   commit); without them it keeps the existing files and warns.
3. **If it says the engine changed upstream:** review the `wasm/` changes
   (the one step that can meaningfully bloat repo history - binary
   replacements, not diffable text), commit `wasm/`, and run the build
   again. If the Pyodide runtime itself changed, also bump
   `WASM_CACHE_NAME` in `src/v5-plugin.js` (e.g. `aksharamukha-wasm-v1` →
   `-v2`), and update `DEP_WHEELS` there if the build says those file names
   changed. Visitors' browsers keep engine files in Cache Storage by URL and
   never re-check them; jsDelivr embeds get new URLs when the engine
   changes anyway, but a self-hosted copy keeps the same URLs.
4. Commit the resulting `aksharamukha-v5.js`, `aksharamukha-v5.js.br`,
   `fonts.css` and `src/script-data.generated.js` if they changed. Push
   the commits before or with the tag - the bundle points visitors at the
   engine's commit, which has to be on GitHub.
5. Tag the commit: `git tag -a v5.1.0 -m "..."` (bump the version
   sensibly; these don't have to map 1:1 to semver, just be unique and
   ordered) and `git push origin v5.1.0` (and `git push` the commits too).
6. Update embed snippets that should move to the new version - in this
   README, the root README, and anywhere else you've told people to
   paste a snippet from - to the new `@vX.Y.Z` tag.
7. Leave old tags (`@v5.0.3`, etc.) in place, forever - anyone who pinned
   one is relying on it never changing, same principle as `v2.js`/`v3.js`
   staying frozen.

If you ever forget this list: it's `git log -- README-v5-plugin.md` away,
right here in this repo, not in any conversation history.
