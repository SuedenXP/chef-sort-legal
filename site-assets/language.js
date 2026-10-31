// Extend the existing site's language switch without requiring browser storage.
(() => {
  'use strict';
  const storageKey = 'chef-sort-language';
  const titles = {
    de: 'BrainBlooms – Spiele, Malbücher & Videos',
    en: 'BrainBlooms – Games, coloring books & videos',
  };

  function setLanguage(language, remember = false) {
    const lang = language === 'en' ? 'en' : 'de';
    document.documentElement.lang = lang;
    document.title = titles[lang];
    document.querySelectorAll('[data-lang]').forEach(element => {
      element.hidden = element.dataset.lang !== lang;
    });
    document.querySelectorAll('[data-set-lang]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.setLang === lang));
    });
    document.querySelectorAll('[data-label-de]').forEach(element => {
      element.setAttribute('aria-label', element.getAttribute(`data-label-${lang}`));
    });
    document.querySelectorAll('a[data-href-de]').forEach(element => {
      element.setAttribute('href', element.getAttribute(`data-href-${lang}`));
    });
    document.querySelectorAll('[data-title-de]').forEach(element => {
      element.title = element.getAttribute(`data-title-${lang}`);
    });
    document.querySelectorAll('img[data-alt-de]').forEach(element => {
      element.alt = element.getAttribute(`data-alt-${lang}`);
    });
    document.querySelectorAll('img[data-src-de]').forEach(element => {
      const srcset = element.getAttribute(`data-srcset-${lang}`);
      if (srcset && element.getAttribute('srcset') !== srcset) element.setAttribute('srcset', srcset);
      const src = element.getAttribute(`data-src-${lang}`);
      if (element.getAttribute('src') !== src) element.setAttribute('src', src);
    });
    if (remember) {
      try { localStorage.setItem(storageKey, lang); } catch { /* A blocked preference store is optional. */ }
    }
  }

  // The synchronous head script already resolved saved choice / browser language.
  setLanguage(document.documentElement.lang);
  document.querySelectorAll('[data-set-lang]').forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.setLang, true));
  });
  document.getElementById('language-switch').hidden = false;
})();

// Optional scroll controls: native links, no animation or stored preference.
(() => {
  'use strict';
  const controls = document.querySelector('.page-jumps');
  if (!controls) return;
  const up = controls.querySelector('[href="#anfang"]');
  const down = controls.querySelector('[href="#seitenende"]');
  const hero = document.querySelector('.game-section');
  const footer = document.getElementById('seitenende');
  let pending = false;
  let focusDestination = null;

  function update() {
    pending = false;
    const maximum = Math.max(0, document.documentElement.scrollHeight - innerHeight);
    const position = Math.max(0, Math.min(maximum, scrollY));
    const atTop = position <= 1;
    const atBottom = maximum - position <= 1;
    // If a used link disappears on arrival, keep keyboard focus at its destination.
    if (atTop && (document.activeElement === up || focusDestination === 'top')) {
      document.querySelector('.site-header .main-nav a').focus({ preventScroll: true });
      focusDestination = null;
    }
    if (atBottom && (document.activeElement === down || focusDestination === 'bottom')) {
      footer.tabIndex = -1;
      footer.focus({ preventScroll: true });
      focusDestination = null;
    }
    up.hidden = atTop || maximum <= 1;
    down.hidden = atBottom || maximum <= 1;
    const heroBounds = hero.getBoundingClientRect();
    for (const link of [up, down]) {
      if (link.hidden) continue;
      const bounds = link.getBoundingClientRect();
      const center = bounds.top + bounds.height / 2;
      link.dataset.surface = center >= heroBounds.top && center <= heroBounds.bottom ? 'dark' : 'light';
    }
  }

  function schedule() {
    if (!pending) {
      pending = true;
      requestAnimationFrame(update);
    }
  }
  controls.hidden = false;
  update();
  controls.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link || event.defaultPrevented || event.button > 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    focusDestination = link === up ? 'top' : 'bottom';
    schedule();
  });
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
  addEventListener('pageshow', schedule);
  // Also follows text resizing, language changes and later image dimensions.
  if ('ResizeObserver' in window) new ResizeObserver(schedule).observe(document.body);
})();

// Pointer-only press feedback. Never intercepts scrolling, clicks or keyboard use.
(() => {
  'use strict';
  let pressed = null;
  let startX = 0;
  let startY = 0;
  const clear = () => {
    if (pressed) pressed.removeAttribute('data-pressed');
    pressed = null;
  };
  document.addEventListener('pointerdown', event => {
    clear();
    if (!event.isPrimary || event.button !== 0) return;
    pressed = event.target.closest('.book-link, .book-view, .youtube-preview, .button-link, .hero-game-view, .language-switch button');
    if (!pressed) return;
    startX = event.clientX;
    startY = event.clientY;
    pressed.setAttribute('data-pressed', '');
  }, { passive: true });
  document.addEventListener('pointermove', event => {
    if (pressed && Math.hypot(event.clientX - startX, event.clientY - startY) > 8) clear();
  }, { passive: true });
  document.addEventListener('pointerup', clear, { passive: true });
  document.addEventListener('pointercancel', clear, { passive: true });
  addEventListener('blur', clear);
  addEventListener('pagehide', clear);
})();
