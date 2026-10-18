// Detect locally before rendering. Detection never writes cookies or storage.
(() => {
  'use strict';
  let lang;
  try {
    const saved = localStorage.getItem('chef-sort-language');
    if (saved === 'de' || saved === 'en') lang = saved;
  } catch { /* Detection also works when browser storage is blocked. */ }
  if (!lang) {
    const preferred = navigator.language || navigator.languages?.[0] || '';
    lang = /^de(?:-|$)/i.test(preferred) ? 'de' : 'en';
  }
  document.documentElement.lang = lang;
})();
