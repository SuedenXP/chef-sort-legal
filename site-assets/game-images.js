// Local screenshot enlargement; ordinary image links remain available without JS.
(() => {
  'use strict';
  const dialog = document.getElementById('game-dialog');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const host = document.getElementById('game-dialog-image');
  let active = null;
  function update() {
    if (!active) return;
    const source = active.querySelector('img');
    const lang = document.documentElement.lang === 'en' ? 'en' : 'de';
    active.href = active.getAttribute(`data-full-${lang}`) || source.getAttribute(`data-src-${lang}`);
    let image = host.querySelector('img');
    if (!image) { image = document.createElement('img'); host.append(image); }
    if (image.getAttribute('src') !== active.getAttribute('href')) image.src = active.href;
    image.alt = source.alt;
    document.getElementById('game-dialog-title').textContent = source.alt;
  }
  document.querySelectorAll('.game-view').forEach(link => {
    link.addEventListener('click', event => {
      if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;
      event.preventDefault();
      active = link;
      update();
      dialog.showModal();
      document.body.classList.add('game-dialog-open');
    });
  });
  document.getElementById('game-dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    document.body.classList.remove('game-dialog-open');
    const previous = active;
    host.replaceChildren();
    active = null;
    previous?.focus({ preventScroll: true });
  });
  const syncLanguage = () => {
    const lang = document.documentElement.lang === 'en' ? 'en' : 'de';
    document.querySelectorAll('.game-view').forEach(link => {
      link.href = link.getAttribute(`data-full-${lang}`) || link.querySelector('img').getAttribute(`data-src-${lang}`);
    });
    if (dialog.open) update();
  };
  syncLanguage();
  new MutationObserver(syncLanguage).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
})();
