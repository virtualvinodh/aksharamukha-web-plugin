# Aksharamukha Web Plugin v5

Aksharamukha Web Plugin v5 is a modern, framework-ready transliteration tool for websites. It allows site owners and users to instantly transliterate content into various Indic and other scripts.

## Key Features

- **Modern FAB UI**: A sleek, non-invasive Floating Action Button encapsulated in Shadow DOM.
- **Glassmorphism Menu**: A beautiful, semi-transparent interface with Dark/Light mode synchronization.
- **Local Transliteration**: Uses the AksharamukhaJS engine from CDN for fast, local processing.
- **Server Fallback**: Gracefully falls back to the Aksharamukha API if the local engine is unavailable.
- **Searchable Scripts**: Easily find your desired script with a built-in search box.
- **Recently Used Scripts**: Quick access to scripts you use most often.
- **Original on Hover**: Word-by-word tooltips showing original text when hovering over transliterated content.
- **Framework Ready**: Uses `TreeWalker` and direct node manipulation to work seamlessly with frameworks like React and Vue.
- **Tab Sync**: Automatically synchronizes your script selection across all open tabs of the same site.
- **Exclude Selector**: Protect specific areas (like code blocks) from being transliterated.
- **Dynamic Font Loading**: Loads required fonts only when they are needed.

## Installation

Add the following script tag to your HTML:

```html
<script src="https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha-web-plugin/aksharamukha-v5.js"></script>
```

## Configuration

You can customize the plugin via URL parameters or an `aksharamukha-settings.json` file at your site root.

### URL Parameters

- `class`: The CSS class of elements to transliterate (default: `aksharamukha-text`).
- `source`: The source script (default: `autodetect`).
- `scriptlist`: Comma-separated list of scripts to show in the menu.
- `prelist`: Predefined list of scripts (`majorindic`, `majorall`, `sanskall`, `sansktradall`).
- `btncolor`: HEX color for the FAB (e.g., `#ff0000`).
- `exclude`: CSS selector for elements to exclude (default: `code, pre, .no-translit`).
- `whitelist`: CSS selector for elements to force transliteration, even inside excluded areas (default: `.yes-translit`).
- `server`: Set to `true` to force use of the Server API instead of the local engine.
- `changeurl`: Set to `true` to append the selected script to the URL.

Example:
```html
<script src="aksharamukha-v5.js?btncolor=#e91e63&exclude=.ignore-me&prelist=majorindic"></script>
```

### aksharamukha-settings.json

Create a file named `aksharamukha-settings.json` in your site root:

```json
{
  "btncolor": "#4caf50",
  "exclude": ".no-transliterate, blockquote",
  "prelist": "majorall"
}
```

## Per-Element Overrides

You can override settings for specific elements using data classes:

- `inputscript-[script]`: Specify a different source script for this element.
- `preoptions-[options]`: Specify comma-separated pre-options.

```html
<div class="aksharamukha-text inputscript-Malayalam">...</div>
```

## Development

The plugin is written in modern JavaScript (ES6+) and uses Shadow DOM to avoid style conflicts with the host site.

### Author

Vinodh Rajan (vinodh@virtualvinodh.com)
[www.aksharamukha.com](http://www.aksharamukha.com)
