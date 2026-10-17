(() => {
  'use strict';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('[data-showcase]').forEach(root => {
    const slides = [...root.querySelectorAll('[data-slide]')];
    const carousel = root.dataset.showcase === 'carousel';
    const toggle = root.querySelector('[data-toggle]');
    let index = 0, timer = null, visible = false, hovering = false;
    let playing = carousel && !reduced.matches;
    let start = null, toggleWasPlaying = null, suppressClick = false;
    root.classList.add('is-ready');
    let stackCaption=null;
    if(!carousel){stackCaption=document.createElement('p');stackCaption.className='stack-caption';root.querySelector('.stack-stage').after(stackCaption);}
    root.querySelectorAll('.showcase-controls,.showcase-dots').forEach(el => el.hidden = false);
    function schedule() {
      clearTimeout(timer);
      if (playing && visible && !hovering && !document.hidden && !document.querySelector('dialog[open]')) timer = setTimeout(() => { show(index+1); }, 6000);
    }
    function render() {
      slides.forEach((slide,i) => {
        const active = i === index;
        if(carousel) { slide.dataset.active=String(active); slide.inert=!active; slide.setAttribute('aria-hidden',String(!active)); }
        else { slide.dataset.depth = String((i-index+slides.length)%slides.length); slide.inert = !active; slide.setAttribute('aria-hidden',String(!active)); }
      });
      root.querySelectorAll('[data-go]').forEach((button,i) => button.setAttribute('aria-pressed',String(i===index)));
      const count = root.querySelector('[data-count]');
      count.textContent = `${index+1} / ${slides.length}`;
      count.setAttribute('aria-live', playing?'off':'polite');
      if(stackCaption){const lang=document.documentElement.lang==='en'?'en':'de';stackCaption.textContent=slides[index].querySelector(`figcaption [data-lang="${lang}"]`).textContent;}
      if(toggle) {
        toggle.querySelector('[data-pause-label]').hidden = !playing;
        toggle.querySelector('[data-play-label]').hidden = playing;
        const en = document.documentElement.lang==='en';
        toggle.setAttribute('aria-label',en?(playing?'Pause slideshow':'Start slideshow'):(playing?'Bildfolge pausieren':'Bildfolge starten'));
      }
      schedule();
    }
    function show(next, manual=false, instant=false) {
      const focusedSlide=slides.find(s=>s.contains(document.activeElement));
      if(manual) playing=false;
      root.toggleAttribute('data-instant',instant);
      index = (next+slides.length)%slides.length;
      render();
      if(manual&&focusedSlide&&focusedSlide!==slides[index])root.querySelector('[data-step="1"]').focus({preventScroll:true});
    }
    root.querySelectorAll('[data-step]').forEach(b=>b.addEventListener('click',e=>show(index+Number(b.dataset.step),true,e.detail===0)));
    root.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',e=>show(Number(b.dataset.go),true,e.detail===0)));
    toggle?.addEventListener('pointerdown',()=>{toggleWasPlaying=playing;});
    toggle?.addEventListener('click',()=>{playing=!(toggleWasPlaying??playing);toggleWasPlaying=null;render();});
    root.addEventListener('focusin',()=>{if(playing){playing=false;render();}});
    root.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse'){playing=false;render();}});
    root.addEventListener('mouseenter',()=>{hovering=true;schedule();});
    root.addEventListener('mouseleave',()=>{hovering=false;schedule();});
    root.addEventListener('keydown',e=>{
      if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();show(index+(e.key==='ArrowLeft'?-1:1),true,true);}
    });
    root.addEventListener('touchstart',e=>{const t=e.touches[0];start={x:t.clientX,y:t.clientY};},{passive:true});
    root.addEventListener('touchcancel',()=>{start=null;},{passive:true});
    root.addEventListener('touchend',e=>{
      if(!start)return;
      const t=e.changedTouches[0],dx=t.clientX-start.x,dy=t.clientY-start.y;
      start=null;
      if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.5){suppressClick=true;setTimeout(()=>{suppressClick=false;},400);show(index+(dx<0?1:-1),true);}
    },{passive:true});
    root.addEventListener('click',e=>{if(suppressClick){e.preventDefault();e.stopPropagation();suppressClick=false;}},true);
    new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;schedule();},{threshold:.25}).observe(root);
    document.addEventListener('visibilitychange',schedule);
    document.querySelectorAll('dialog').forEach(d=>{new MutationObserver(schedule).observe(d,{attributes:true,attributeFilter:['open']});});
    reduced.addEventListener('change',()=>{if(reduced.matches){playing=false;render();}});
    new MutationObserver(render).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
    render();
  });
})();
