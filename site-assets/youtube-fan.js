// Image fan with visibility-aware automatic advance; no video autoplay or embeds.
(() => {
  'use strict';
  document.querySelectorAll('.youtube-fan').forEach(root => {
    const cards = [...root.querySelectorAll('.youtube-fan-card')];
    const controls = [...root.querySelectorAll('[data-youtube-step]')];
    const dots = [...root.querySelectorAll('[data-youtube-go]')];
    const status = root.querySelector('[data-youtube-status]');
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const interval = 4000;
    let index = 0;
    let timer = null, started = 0, remaining = interval;
    let progress = null;
    let visible = false, hovering = false, touching = false;
    function pause() {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
        remaining = Math.max(0, remaining - (performance.now() - started));
      }
      progress?.pause();
    }
    function schedule() {
      root.toggleAttribute('data-progress', !reduced.matches);
      if (reduced.matches) { progress?.cancel(); progress = null; }
      const keyboardFocused = root.contains(document.activeElement) && document.activeElement.matches(':focus-visible');
      const blocked = !visible || reduced.matches || hovering || touching ||
        keyboardFocused || document.hidden || document.querySelector('dialog[open]');
      if (blocked) { pause(); return; }
      if (timer !== null) return;
      if (!progress) {
        progress = dots[index].querySelector('.dot-progress').animate(
          [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }],
          { duration: interval, easing: 'linear', fill: 'both' }
        );
      }
      progress.currentTime = interval - remaining;
      progress.play();
      started = performance.now();
      timer = setTimeout(() => {
        timer = null;
        remaining = interval;
        progress?.cancel(); progress = null;
        root.removeAttribute('data-instant');
        index = (index + 1) % cards.length;
        render();
        schedule();
      }, remaining);
    }
    function render(announce = false) {
      cards.forEach((card,i) => {
        const depth = (i-index+cards.length)%cards.length;
        card.dataset.depth = String(depth);
        card.setAttribute('aria-hidden', String(depth !== 0));
      });
      dots.forEach((dot,i) => dot.setAttribute('aria-pressed', String(i === index)));
      if (announce) {
        const en = document.documentElement.lang === 'en';
        const image = cards[index].querySelector('img');
        status.textContent = `${en ? 'Image' : 'Bild'} ${index+1} ${en ? 'of' : 'von'} ${cards.length}: ${image.getAttribute(en ? 'data-alt-en' : 'data-alt-de')}`;
      }
    }
    function show(next, event) {
      pause();
      remaining = interval;
      progress?.cancel(); progress = null;
      root.toggleAttribute('data-instant', event.detail === 0);
      index = (next + cards.length) % cards.length;
      render(true);
      schedule();
    }
    controls.forEach(button => {
      button.hidden = false;
      button.addEventListener('click', event => {
        show(index + Number(button.dataset.youtubeStep), event);
      });
    });
    root.querySelector('.showcase-dots').hidden = false;
    dots.forEach(dot => dot.addEventListener('click', event => show(Number(dot.dataset.youtubeGo), event)));
    root.addEventListener('mouseenter', () => { hovering = matchMedia('(hover: hover) and (pointer: fine)').matches; schedule(); });
    root.addEventListener('mouseleave', () => { hovering = false; schedule(); });
    root.addEventListener('focusin', schedule);
    root.addEventListener('focusout', () => queueMicrotask(schedule));
    root.addEventListener('pointerdown', event => { if (event.pointerType !== 'mouse') { touching = true; schedule(); } });
    window.addEventListener('pointerup', () => { touching = false; schedule(); });
    window.addEventListener('pointercancel', () => { touching = false; schedule(); });
    document.addEventListener('visibilitychange', schedule);
    reduced.addEventListener('change', schedule);
    document.querySelectorAll('dialog').forEach(dialog => new MutationObserver(schedule).observe(dialog, { attributes: true, attributeFilter: ['open'] }));
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting && entries[0].intersectionRatio >= .25;
      schedule();
    }, { threshold: [0, .25] }).observe(root);
    render();
  });
})();
