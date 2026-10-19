// Local legal-page presentation only; original legal copy remains unchanged.
(() => {
  'use strict';
  const key = 'chef-sort-language';
  function setLanguage(value, remember = false) {
    const lang = value === 'en' ? 'en' : 'de';
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang]').forEach(el => { el.hidden = el.dataset.lang !== lang; });
    document.querySelectorAll('[data-set-lang]').forEach(button => { button.setAttribute('aria-pressed', String(button.dataset.setLang === lang)); });
    document.querySelectorAll('[data-label-de]').forEach(el => { el.setAttribute('aria-label', el.dataset[lang === 'de' ? 'labelDe' : 'labelEn']); });
    const title = document.querySelector('.legal [data-lang="' + lang + '"] h1');
    if (title) document.title = title.textContent + ' – BrainBlooms';
    if (remember) { try { localStorage.setItem(key, lang); } catch { /* Language selection works without browser storage. */ } }
  }
  // Use the same initial choice as the homepage, resolved before page rendering.
  const requested = new URLSearchParams(location.search).get('lang');
  setLanguage(requested === 'de' || requested === 'en' ? requested : document.documentElement.lang);
  const controls = document.querySelector('.language-switch');
  controls.hidden = false;
  controls.addEventListener('click', event => {
    const button = event.target.closest('[data-set-lang]');
    if (button) setLanguage(button.dataset.setLang, true);
  });
})();
