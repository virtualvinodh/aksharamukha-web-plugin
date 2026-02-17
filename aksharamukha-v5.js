/**
 * Aksharamukha Web Plugin v5
 * Author: Vinodh Rajan vinodh@virtualvinodh.com
 * Website: http://www.aksharamukha.com
 */

(async () => {
  const DEFAULT_CONFIG = {
    source: 'autodetect',
    class: 'aksharamukha-text',
    btncolor: '#007bff',
    exclude: 'code, pre, .no-translit',
    server: false,
    changeurl: false,
    scriptlist: [],
    prelist: '',
    preoptions: [],
    hoverTooltip: false
  };

  function getScriptParams() {
    const scripts = document.getElementsByTagName('script');
    const currentScript = scripts[scripts.length - 1];
    const src = currentScript.src;
    const params = {};
    if (src.includes('?')) {
      const queryString = src.split('?')[1];
      const pairs = queryString.split('&');
      for (const pair of pairs) {
        const [key, value] = pair.split('=');
        if (key && value) {
          params[key] = decodeURIComponent(value);
        }
      }
    }
    return params;
  }

  async function loadSettingsJson() {
    try {
      const response = await fetch('/aksharamukha-settings.json');
      if (response.ok) return await response.json();
    } catch (e) {}

    try {
      // Fallback to GitHub for settings if needed
      const githubSettingsUrl = 'https://raw.githubusercontent.com/virtualvinodh/aksharamukha-web-plugin/master/aksharamukha-settings.json';
      const response = await fetch(githubSettingsUrl);
      if (response.ok) return await response.json();
    } catch (e) {}

    return {};
  }

  const urlParams = getScriptParams();
  const jsonSettings = await loadSettingsJson();

  const config = {
    ...DEFAULT_CONFIG,
    ...jsonSettings,
    ...urlParams
  };

  // Type Conversion & Normalization
  config.server = String(config.server) === 'true';
  config.changeurl = String(config.changeurl) === '1' || String(config.changeurl) === 'true';
  config.hoverTooltip = String(config.hoverTooltip) === 'true';

  if (typeof config.scriptlist === 'string' && config.scriptlist) {
    config.scriptlist = config.scriptlist.split(',');
  }
  if (typeof config.preoptions === 'string' && config.preoptions) {
    config.preoptions = config.preoptions.split(',');
  }

  // Predefined Script Lists
  if (config.prelist) {
    const prelists = {
      'majorindic': ['ISO', 'IAST', 'IPA', 'RomanReadable', 'RussianCyrillic', 'Assamese', 'Bengali', 'Devanagari', 'Grantha', 'Gujarati', 'Gurmukhi', 'Kannada', 'Malayalam', 'Oriya', 'Sharada', 'Tamil', 'TamilExtended', 'Telugu', 'Urdu'],
      'majorall': ['ISO', 'IAST', 'IPA', 'RomanReadable', 'RussianCyrillic', 'Assamese', 'Bengali', 'Burmese', 'Devanagari', 'Grantha', 'Gujarati', 'Gurmukhi', 'Kannada', 'Khmer', 'Malayalam', 'Oriya', 'Sharada', 'Sinhala', 'Tamil', 'TamilExtended', 'Telugu', 'Thai', 'Tibetan', 'Urdu'],
      'sansktradall': ['ISO', 'IAST', 'IPA', 'RomanReadable', 'RussianCyrillic', 'Assamese', 'Balinese', 'Bengali', 'Brahmi', 'Bhaikshuki', 'Burmese', 'Devanagari', 'Dogra', 'Grantha', 'GranthaPandya', 'Gujarati', 'Gurmukhi', 'Javanese', 'Kannada', 'Kharoshthi', 'KhomThai', 'Khmer', 'Malayalam', 'Mongolian', 'Newa', 'Oriya', 'PhagsPa', 'Ranjana', 'Saurashtra', 'Siddham', 'Sharada', 'Sinhala', 'Soyombo', 'TaiTham', 'Takri', 'Tamil', 'TamilExtended', 'Telugu', 'Thai', 'Tibetan', 'Tirhuta', 'Urdu', 'ZanabazarSquare'],
      'sanskall': ['ISO', 'IAST', 'IPA', 'RomanReadable', 'RussianCyrillic', 'Ariyaka', 'Assamese', 'Balinese', 'Bengali', 'Brahmi', 'Bhaikshuki', 'Burmese', 'Chakma', 'Devanagari', 'Dogra', 'GunjalaGondi', 'MasaramGondi', 'Grantha', 'GranthaPandya', 'Gujarati', 'Gurmukhi', 'Javanese', 'Kaithi', 'Kannada', 'Kharoshthi', 'KhomThai', 'Khmer', 'Khudawadi', 'LaoPali', 'Malayalam', 'Mongolian', 'Modi', 'Newa', 'Oriya', 'PhagsPa', 'Ranjana', 'Santali', 'Saurashtra', 'Siddham', 'Sharada', 'Sinhala', 'Soyombo', 'TaiTham', 'Takri', 'Tamil', 'TamilExtended', 'Telugu', 'Thai', 'Tibetan', 'Tirhuta', 'Urdu', 'ZanabazarSquare']
    };
    if (prelists[config.prelist]) {
      config.scriptlist = prelists[config.prelist];
    }
  }

  async function loadScriptMixin() {
    const url = 'https://raw.githubusercontent.com/virtualvinodh/aksharamukha/master/aksharamukha-front/src/mixins/ScriptMixin.js';
    console.log('Aksharamukha v5: Loading ScriptMixin from', url);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      let text = await response.text();
      // Use a more robust way to extract the object
      const match = text.match(/(?:const\s+ScriptMixin\s*=|export\s+default)\s*(\{[\s\S]*\})/);
      if (match) {
        console.log('Aksharamukha v5: ScriptMixin parsed successfully');
        return new Function('return ' + match[1])();
      }
      console.warn('Aksharamukha v5: ScriptMixin regex match failed');
    } catch (e) {
      console.error('Aksharamukha v5: Failed to load ScriptMixin from GitHub', e);
    }

    if (typeof ScriptMixin !== 'undefined') {
      console.log('Aksharamukha v5: Using local ScriptMixin');
      return ScriptMixin;
    }
    return null;
  }

  const mixin = await loadScriptMixin();
  console.log('Aksharamukha v5: ScriptMixin object obtained');
  let scriptData = {};
  try {
    scriptData = (mixin && typeof mixin.data === 'function') ? mixin.data.call({
      $axios: { create: () => ({}) } // Mock axios
    }) : {};
    console.log('Aksharamukha v5: scriptData obtained');
  } catch (e) {
    console.error('Aksharamukha v5: Failed to call mixin.data()', e);
  }
  const mixinMethods = (mixin && mixin.methods) ? mixin.methods : {};

  let aksharamukhaEngine = null;

  async function loadEngine() {
    if (config.server) {
      console.log('Aksharamukha v5: Server API forced.');
      return null;
    }

    try {
      if (typeof Aksharamukha === 'undefined') {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/aksharamukha@latest/dist/index.global.js';
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }

      if (typeof Aksharamukha !== 'undefined') {
        aksharamukhaEngine = await Aksharamukha.new();
        console.log('Aksharamukha v5: Local Engine Loaded.');
        return aksharamukhaEngine;
      }
    } catch (e) {
      console.warn('Aksharamukha v5: Local engine load failed, falling back to Server API.', e);
    }
    return null;
  }

  function loadFonts() {
    if (!document.querySelector('link[href*="fonts.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-front/src/statics/fonts.css';
      document.head.appendChild(link);
    }
  }

  async function transliterateText(text, source, target, postOptions = [], preOptions = []) {
    if (target === 'Original') return text;

    if (aksharamukhaEngine && !config.server) {
      try {
        const isArray = Array.isArray(text);
        const texts = isArray ? text : [text];
        const results = [];
        for (const t of texts) {
          const res = await aksharamukhaEngine.process(source, target, t, {
            nativize: true,
            postOptions,
            preOptions
          });
          results.push(res);
        }
        return isArray ? results : results[0];
      } catch (e) {
        console.error('Local transliteration failed', e);
      }
    }

    // Server Fallback
    try {
      const apiURL = "https://aksharamukha-plugin.appspot.com/api/plugin";
      const response = await fetch(apiURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source,
          target,
          text: Array.isArray(text) ? JSON.stringify(text) : text,
          nativize: true,
          postOptions,
          preOptions
        })
      });
      const resText = await response.text();
      try {
        return JSON.parse(resText);
      } catch (e) {
        return resText;
      }
    } catch (e) {
      console.error('Server transliteration failed', e);
      return text;
    }
  }

  class AksharamukhaUi {
    constructor(parent) {
      this.parent = parent;
      this.container = document.createElement('div');
      this.container.id = 'aksharamukha-v5-ui';
      document.body.appendChild(this.container);
      this.shadow = this.container.attachShadow({ mode: 'open' });

      this.allScripts = [
        { label: 'Original Script', value: 'Original' },
        ...(this.parent.scriptData.scriptsIndic || []),
        ...(this.parent.scriptData.scriptsLatin || [])
      ].filter((v, i, a) => a.findIndex(t => t.value === v.value) === i); // Unique

      this.allScripts.sort((a, b) => a.value === 'Original' ? -1 : b.value === 'Original' ? 1 : a.label.localeCompare(b.label));

      this.state = this.parent.state;
      this.config = this.parent.config;

      this.render();
      this.updateScriptList('');
    }

    getFilteredScripts() {
      let list = this.allScripts;
      if (this.config.scriptlist && this.config.scriptlist.length > 0) {
        list = list.filter(s => s.value === 'Original' || this.config.scriptlist.includes(s.value));
      }
      return list;
    }

    render() {
      const btnColor = this.config.btncolor;
      const { target, expanded, loading, hoverTooltip } = this.state;

      this.shadow.innerHTML = `
        <style>
          :host {
            --primary-color: ${btnColor};
            --glass-bg: rgba(255, 255, 255, 0.85);
            --text-color: #333;
            --border-color: rgba(0,0,0,0.1);
            --font-family: system-ui, -apple-system, sans-serif;
          }

          @media (prefers-color-scheme: dark) {
            :host {
              --glass-bg: rgba(30, 30, 30, 0.85);
              --text-color: #eee;
              --border-color: rgba(255,255,255,0.1);
            }
          }

          #fab {
            position: fixed;
            bottom: 24px;
            right: 24px;
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: var(--primary-color);
            box-shadow: 0 4px 16px rgba(0,0,0,0.3);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }

          #fab:hover { transform: scale(1.1); }
          #fab img { width: 28px; height: 28px; filter: brightness(0) invert(1); }

          #menu {
            position: fixed;
            bottom: 90px;
            right: 24px;
            width: 320px;
            max-height: 70vh;
            background: var(--glass-bg);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            box-shadow: 0 12px 40px rgba(0,0,0,0.25);
            display: ${expanded ? 'flex' : 'none'};
            flex-direction: column;
            padding: 20px;
            color: var(--text-color);
            font-family: var(--font-family);
            z-index: 9999;
            box-sizing: border-box;
          }

          .header { display: flex; align-items: center; margin-bottom: 16px; }
          .header h2 { margin: 0; font-size: 1.2rem; flex: 1; }

          .search-box {
            padding: 10px 12px;
            border-radius: 8px;
            border: 1px solid var(--border-color);
            margin-bottom: 12px;
            background: rgba(127,127,127,0.1);
            color: inherit;
            outline: none;
          }

          .section-title { font-size: 0.8rem; text-transform: uppercase; opacity: 0.6; margin: 8px 0 4px; }

          .script-list {
            overflow-y: auto;
            flex: 1;
            margin-right: -8px;
            padding-right: 8px;
          }

          .script-item {
            padding: 10px;
            cursor: pointer;
            border-radius: 8px;
            margin-bottom: 2px;
            display: flex;
            justify-content: space-between;
          }

          .script-item:hover { background: rgba(127,127,127,0.15); }
          .script-item.selected { background: var(--primary-color); color: white; }

          .options-section {
            margin-top: 16px;
            border-top: 1px solid var(--border-color);
            padding-top: 12px;
          }

          .btn-convert {
            background: var(--primary-color);
            color: white;
            border: none;
            padding: 12px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: bold;
            margin-top: 16px;
          }

          #progress-circle {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 4px solid transparent;
            border-top-color: rgba(255,255,255,0.8);
            display: ${loading ? 'block' : 'none'};
            animation: spin 1s linear infinite;
          }

          @keyframes spin { to { transform: rotate(360deg); } }
        </style>

        <div id="menu">
           <div class="header">
             <h2>Aksharamukha</h2>
             <small>v5</small>
           </div>
           <input type="text" id="search" class="search-box" placeholder="Search scripts...">

           <div id="recent-container"></div>

           <div class="section-title">Scripts</div>
           <div class="script-list" id="scripts"></div>

           <div id="options" class="options-section"></div>

           <div class="options-section" style="border-top: none; padding-top: 0;">
             <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
               <input type="checkbox" id="hover-toggle" ${hoverTooltip ? 'checked' : ''}>
               <span>Original on Hover</span>
             </label>
           </div>

           <button id="convert-btn" class="btn-convert">Convert Now</button>
        </div>

        <div id="fab">
           <div id="progress-circle"></div>
           <img src="https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha-web-plugin/icon.png">
        </div>
      `;

      this.attachListeners();
    }

    attachListeners() {
      const fab = this.shadow.getElementById('fab');
      const search = this.shadow.getElementById('search');
      const convertBtn = this.shadow.getElementById('convert-btn');
      const hoverToggle = this.shadow.getElementById('hover-toggle');

      fab.onclick = () => {
        this.state.expanded = !this.state.expanded;
        this.render();
      };

      search.oninput = (e) => this.updateScriptList(e.target.value);

      convertBtn.onclick = () => {
        this.parent.executeTransliteration();
        // Auto-collapse after choice
        this.state.expanded = false;
        this.render();
      };

      hoverToggle.onchange = (e) => {
        this.state.hoverTooltip = e.target.checked;
        localStorage.setItem('aksharamukha-hover', this.state.hoverTooltip);
      };
    }

    updateScriptList(query) {
      const container = this.shadow.getElementById('scripts');
      const recentContainer = this.shadow.getElementById('recent-container');
      const filtered = this.getFilteredScripts().filter(s =>
        s.label.toLowerCase().includes(query.toLowerCase())
      );

      container.innerHTML = filtered.map(s => `
        <div class="script-item ${this.state.target === s.value ? 'selected' : ''}" data-value="${s.value}">
          ${s.label}
        </div>
      `).join('');

      // Recent Scripts
      const recents = this.getFilteredScripts().filter(s => this.state.recentlyUsed.includes(s.value));
      if (recents.length > 0 && !query) {
        recentContainer.innerHTML = `
          <div class="section-title">Recently Used</div>
          ${recents.map(s => `
            <div class="script-item ${this.state.target === s.value ? 'selected' : ''}" data-value="${s.value}">
              ${s.label}
            </div>
          `).join('')}
        `;
      } else {
        recentContainer.innerHTML = '';
      }

      this.shadow.querySelectorAll('.script-item').forEach(el => {
        el.onclick = () => this.selectScript(el.dataset.value);
      });

      this.updateOptions();
    }

    selectScript(value) {
      this.state.target = value;
      localStorage.setItem('aksharamukha-target', value);

      // Update recently used
      if (value !== 'Original') {
        let recent = this.state.recentlyUsed.filter(v => v !== value);
        recent.unshift(value);
        this.state.recentlyUsed = recent.slice(0, 5);
        localStorage.setItem('aksharamukha-recent', JSON.stringify(this.state.recentlyUsed));
      }

      this.updateScriptList(this.shadow.getElementById('search').value);
    }

    updateOptions() {
      const container = this.shadow.getElementById('options');
      const target = this.state.target;
      const options = (this.parent.scriptData.postOptionsGroup && this.parent.scriptData.postOptionsGroup[target]) || [];

      if (options.length === 0) {
        container.style.display = 'none';
        return;
      }

      container.style.display = 'block';
      container.innerHTML = `
        <div class="section-title">Options for ${target}</div>
        ${options.map(opt => `
          <label style="display: flex; gap: 8px; margin-bottom: 4px; font-size: 0.9rem; cursor: pointer;">
            <input type="checkbox" class="opt-check" value="${opt.value}" ${this.state.options.includes(opt.value) ? 'checked' : ''}>
            <span>${opt.label}</span>
          </label>
        `).join('')}
      `;

      container.querySelectorAll('.opt-check').forEach(el => {
        el.onchange = () => {
          const checked = Array.from(container.querySelectorAll('.opt-check:checked')).map(c => c.value);
          this.state.options = checked;
          localStorage.setItem('aksharamukha-options-' + target, JSON.stringify(checked));
        };
      });
    }

    setLoading(isLoading) {
      this.state.loading = isLoading;
      const circle = this.shadow.getElementById('progress-circle');
      if (circle) circle.style.display = isLoading ? 'block' : 'none';
    }
  }

  const AksharamukhaV5 = {
    config,
    scriptData,
    mixinMethods,
    loadEngine,
    loadFonts,
    transliterateText,
    state: {
      target: localStorage.getItem('aksharamukha-target') || 'Original',
      recentlyUsed: JSON.parse(localStorage.getItem('aksharamukha-recent') || '[]'),
      options: JSON.parse(localStorage.getItem('aksharamukha-options-' + (localStorage.getItem('aksharamukha-target') || 'Original')) || '[]'),
      expanded: true,
      loading: false,
      hoverTooltip: localStorage.getItem('aksharamukha-hover') === 'true'
    },

    isExcluded(el) {
      if (!el || !el.matches) return false;
      if (el.matches(this.config.exclude)) return true;
      return this.isExcluded(el.parentElement);
    },

    async executeTransliteration() {
      if (this.state.loading) return;
      this.ui.setLoading(true);

      const target = this.state.target;
      const options = this.state.options;

      // Handle wrapping body if no target classes found
      let elements = document.querySelectorAll('.' + this.config.class);
      if (elements.length === 0 && target !== 'Original') {
        const wrapper = document.createElement('span');
        wrapper.className = this.config.class;
        while (document.body.firstChild) wrapper.appendChild(document.body.firstChild);
        document.body.appendChild(wrapper);
        elements = [wrapper];
      }

      for (const el of elements) {
        if (this.isExcluded(el)) continue;
        await this.processElement(el, target, options);
      }

      if (this.config.changeurl) this.updateUrl(target);
      this.ui.setLoading(false);
    },

    async processElement(element, target, options) {
      let elSource = this.config.source;
      let elPreOptions = this.config.preoptions;

      element.classList.forEach(cls => {
        if (cls.startsWith('inputscript-')) elSource = cls.replace('inputscript-', '');
        if (cls.startsWith('preoptions-')) elPreOptions = cls.replace('preoptions-', '').split(',');
      });

      if (element._aksh_wrapped) {
        element.innerHTML = element._aksh_inner_original;
        element._aksh_nodes = null;
        element._aksh_wrapped = false;
      }

      if (!element._aksh_nodes) {
        element._aksh_inner_original = element.innerHTML;
        element._aksh_nodes = [];
        const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
          acceptNode: (node) => {
            if (this.isExcluded(node.parentElement)) return NodeFilter.FILTER_REJECT;
            return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
          }
        });
        let node;
        while(node = walker.nextNode()) {
          element._aksh_nodes.push({ node, original: node.nodeValue });
        }
      }

      if (target === 'Original') {
        element._aksh_nodes.forEach(item => {
          item.node.nodeValue = item.original;
        });
        return;
      }

      const texts = element._aksh_nodes.map(item => item.original);
      const transliterated = await this.transliterateText(texts, elSource, target, options, elPreOptions);

      if (Array.isArray(transliterated)) {
        element._aksh_nodes.forEach((item, i) => {
          if (this.state.hoverTooltip) {
            this.wrapHover(item.node, item.original, transliterated[i]);
            element._aksh_wrapped = true;
          } else {
            item.node.nodeValue = transliterated[i];
          }
        });
      }

      const outClass = this.mixinMethods.getOutputClass(target, options);
      if (outClass) element.classList.add(outClass);
    },

    updateUrl(target) {
      const url = new URL(window.location);
      url.searchParams.set('akshrmkh', target);
      window.history.pushState({}, '', url);
    },

    initObserver() {
      this.observer = new MutationObserver(async (mutations) => {
        if (this.state.target === 'Original') return;

        for (const mutation of mutations) {
          for (const node of mutation.addedNodes) {
            if (node.nodeType === Node.ELEMENT_NODE) {
              if (node.classList.contains(this.config.class) && !this.isExcluded(node)) {
                await this.processElement(node, this.state.target, this.state.options);
              } else {
                const subElements = node.querySelectorAll('.' + this.config.class);
                for (const sub of subElements) {
                  if (!this.isExcluded(sub)) await this.processElement(sub, this.state.target, this.state.options);
                }
              }
            }
          }
        }
      });
      this.observer.observe(document.body, { childList: true, subtree: true });
    },

    initTabSync() {
      window.addEventListener('storage', (e) => {
        if (e.key === 'aksharamukha-target') {
          const newTarget = e.newValue || 'Original';
          if (newTarget !== this.state.target) {
            this.state.target = newTarget;
            this.state.options = JSON.parse(localStorage.getItem('aksharamukha-options-' + newTarget) || '[]');
            this.ui.render();
            this.ui.updateScriptList('');
            this.executeTransliteration();
          }
        }
      });
    },

    wrapHover(node, original, transliterated) {
      if (!this.state.hoverTooltip) {
        node.nodeValue = transliterated;
        return;
      }
      const wordsOrig = original.split(/(\s+)/);
      const wordsTrans = transliterated.split(/(\s+)/);
      const fragment = document.createDocumentFragment();
      wordsTrans.forEach((w, i) => {
        if (w.trim() && wordsOrig[i]) {
          const span = document.createElement('span');
          span.textContent = w;
          span.title = wordsOrig[i];
          span.style.borderBottom = '1px dotted rgba(127,127,127,0.5)';
          fragment.appendChild(span);
        } else {
          fragment.appendChild(document.createTextNode(w));
        }
      });
      node.parentNode.replaceChild(fragment, node);
    }
  };

  window.AksharamukhaV5 = AksharamukhaV5;

  async function init() {
    // Non-blocking engine load to allow UI to show up quickly
    loadEngine().then(() => {
      console.log('Aksharamukha v5: Engine load complete (Local or Fallback ready)');
    });
    loadFonts();

    if (document.readyState === 'loading') {
      window.addEventListener('DOMContentLoaded', () => finishInit());
    } else {
      finishInit();
    }
  }

  async function finishInit() {
    console.log('Aksharamukha v5: Finishing Init...');
    try {
      AksharamukhaV5.ui = new AksharamukhaUi(AksharamukhaV5);
    } catch (e) {
      console.error('Aksharamukha v5: UI Initialization failed', e);
    }
    AksharamukhaV5.initObserver();
    AksharamukhaV5.initTabSync();

    if (AksharamukhaV5.state.target !== 'Original') {
      await AksharamukhaV5.executeTransliteration();
    }

    console.log('Aksharamukha v5 Initialized', AksharamukhaV5);
  }

  init();
})();
