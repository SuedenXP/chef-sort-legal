// One brief decorative star animation; no storage, cookies, or external assets.
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
const star = document.querySelector('[data-holiday-motion="star"]');

if (star) {
  let animation = null;
  let seen = false;
  let inView = false;

  const play = () => {
    if (reduceMotion.matches || animation) return;
    animation = star.animate([
      { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
      { transform: 'translateY(-2px) rotate(-6deg)', opacity: .7, offset: .25 },
      { transform: 'translateY(0) rotate(4deg)', opacity: 1, offset: .5 },
      { transform: 'translateY(-1px) rotate(-2deg)', opacity: .85, offset: .75 },
      { transform: 'translateY(0) rotate(0deg)', opacity: 1 }
    ], {
      duration: 2000,
      easing: getComputedStyle(star).getPropertyValue('--ease-in-out').trim(),
      iterations: 1
    });
    animation.onfinish = () => { animation = null; };
  };

  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      inView = entry.isIntersecting;
      if (inView && !seen && !document.hidden && !reduceMotion.matches) {
        seen = true;
        play();
      }
    }
    if (document.hidden || !inView) animation?.pause();
    else if (!reduceMotion.matches && animation?.playState === 'paused') animation.play();
  }, { threshold: .25 });

  const atlas = new Image();
  atlas.src = new URL('./images/christmas-sprites-v1.png', import.meta.url).href;
  atlas.decode().catch(() => {}).then(() => observer.observe(star));
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) animation?.pause();
    else if (inView && !reduceMotion.matches && animation?.playState === 'paused') animation.play();
  });
  reduceMotion.addEventListener('change', () => {
    if (reduceMotion.matches) {
      animation?.cancel();
      animation = null;
    }
  });
}
