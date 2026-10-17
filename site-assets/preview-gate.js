// Temporary client-side sight screen, not server authentication.
// Remove this file, preview-gate.css, the gate markup and the preview-site wrapper to retire it.
(() => {
  'use strict';
  const key = 'brainblooms-preview-access-v2';
  const gate = document.getElementById('preview-gate');
  const site = document.getElementById('preview-site');
  const form = document.getElementById('preview-gate-form');
  const user = document.getElementById('preview-user');
  const password = document.getElementById('preview-password');
  const error = document.getElementById('preview-gate-error');
  const lock = document.getElementById('preview-lock');
  function open(focus = true) {
    gate.hidden = true;
    site.hidden = false;
    password.value = '';
    if (focus) document.getElementById('inhalt').focus({ preventScroll: true });
    window.dispatchEvent(new Event('resize'));
  }
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (user.value.trim() === 'Suvi' && password.value === 'supersexy') {
      try { sessionStorage.setItem(key, 'open'); } catch { /* Access works without storage. */ }
      error.hidden = true;
      open();
    } else {
      error.hidden = false;
      password.value = '';
      password.focus();
    }
  });
  lock.addEventListener('click', () => {
    try { sessionStorage.removeItem(key); } catch { /* Optional persistence. */ }
    site.hidden = true;
    gate.hidden = false;
    error.hidden = true;
    form.reset();
    window.scrollTo(0, 0);
    user.focus();
  });
  document.getElementById('preview-gate-submit').disabled = false;
  try { if (sessionStorage.getItem(key) === 'open') open(false); } catch { /* Stay locked. */ }
})();
