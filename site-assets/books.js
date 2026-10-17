(() => {
  'use strict';
  const cards = [...document.querySelectorAll('.book-entry[data-book]')];
  const dialog = document.getElementById('book-dialog');
  if (!cards.length || !dialog) return;
  const imageHost = document.getElementById('book-dialog-image');
  let activeCard = null;
  const english = () => document.documentElement.lang === 'en';
  const sideName = side => english() ? (side === 'back' ? 'Back cover' : 'Front cover') : (side === 'back' ? 'Rückseite' : 'Vorderseite');
  const imagePath = (card, side, small = false) => `site-assets/books/${card.dataset.book}-${side}${small ? '-thumb' : ''}.jpg`;

  function updateArrows(root, side, attribute) {
    const previous = root.querySelector(`[${attribute}="-1"]`);
    const next = root.querySelector(`[${attribute}="1"]`);
    const focused = document.activeElement;
    previous.hidden = side === 'front';
    next.hidden = side === 'back';
    if ((focused === previous && previous.hidden) || (focused === next && next.hidden)) {
      (side === 'front' ? next : previous).focus({ preventScroll: true });
    }
  }

  function updateLabels(card) {
    const side = card.dataset.side;
    const title = card.dataset.title;
    const image = card.querySelector('.book-cover');
    const view = card.querySelector('.book-view');
    image.dataset.altDe = `${title} – ${side === 'back' ? 'Rückseite' : 'Vorderseite'}`;
    image.dataset.altEn = `${title} – ${side === 'back' ? 'Back cover' : 'Front cover'}`;
    image.alt = english() ? image.dataset.altEn : image.dataset.altDe;
    view.dataset.labelDe = `${image.dataset.altDe} vergrößern`;
    view.dataset.labelEn = `${image.dataset.altEn} – Enlarge`;
    view.setAttribute('aria-label', english() ? view.dataset.labelEn : view.dataset.labelDe);
    card.querySelector('[data-current-side]').textContent = `${sideName(side)} · ${side === 'front' ? '1' : '2'} / 2`;
    updateArrows(card, side, 'data-book-step');
  }

  function updateDialog() {
    if (!activeCard) return;
    const side = activeCard.dataset.side;
    let image = imageHost.querySelector('img');
    if (!image) {
      image = document.createElement('img');
      image.decoding = 'async';
      imageHost.append(image);
    }
    const source = imagePath(activeCard, side);
    if (image.getAttribute('src') !== source) image.src = source;
    image.alt = `${activeCard.dataset.title} – ${sideName(side)}`;
    document.getElementById('book-dialog-title').textContent = activeCard.dataset.title;
    document.getElementById('book-dialog-status').textContent = `${sideName(side)} · ${side === 'front' ? '1' : '2'} / 2`;
    dialog.querySelectorAll('[data-dialog-side]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.dialogSide === side)));
    updateArrows(dialog, side, 'data-dialog-step');
  }

  function showSide(card, requestedSide) {
    const side = requestedSide === 'back' ? 'back' : 'front';
    card.dataset.side = side;
    card.querySelector('.book-cover').src = imagePath(card, side, true);
    card.querySelector('.book-view').href = imagePath(card, side);
    card.querySelectorAll('[data-book-side]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.bookSide === side)));
    updateLabels(card);
    if (activeCard === card) updateDialog();
  }

  const turn = card => showSide(card, card.dataset.side === 'front' ? 'back' : 'front');

  cards.forEach(card => {
    card.querySelector('.book-face-controls').hidden = false;
    card.querySelector('[data-current-side]').hidden = false;
    updateLabels(card);
    card.querySelectorAll('[data-book-side]').forEach(button => button.addEventListener('click', () => showSide(card, button.dataset.bookSide)));
    card.querySelectorAll('[data-book-step]').forEach(button => {
      button.addEventListener('click', () => { if (!button.hidden) turn(card); });
    });
    card.querySelector('.book-stage').addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        const requested = event.key === 'ArrowLeft' ? 'front' : 'back';
        if (card.dataset.side !== requested) showSide(card, requested);
      }
    });
    card.querySelector('.book-view').addEventListener('click', event => {
      if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey || typeof dialog.showModal !== 'function') return;
      event.preventDefault();
      activeCard = card;
      updateDialog();
      dialog.showModal();
      document.body.classList.add('book-dialog-open');
    });
  });
  dialog.querySelectorAll('[data-dialog-side]').forEach(button => button.addEventListener('click', () => showSide(activeCard, button.dataset.dialogSide)));
  dialog.querySelectorAll('[data-dialog-step]').forEach(button => button.addEventListener('click', () => { if (!button.hidden) turn(activeCard); }));
  document.getElementById('book-dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      const requested = event.key === 'ArrowLeft' ? 'front' : 'back';
      if (activeCard.dataset.side !== requested) showSide(activeCard, requested);
    }
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('book-dialog-open');
    imageHost.replaceChildren();
    activeCard = null;
  });
  new MutationObserver(() => {
    cards.forEach(updateLabels);
    if (dialog.open) updateDialog();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
})();
