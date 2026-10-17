(() => {
  'use strict';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('[data-showcase]').forEach(root => {
    const slides = [...root.querySelectorAll('[data-slide]')];
    const cards = [...root.querySelectorAll('[data-card]')];
    const carousel = root.dataset.showcase === 'carousel';
    let index = 0, progress = null, visible = false, hovering = false, focused = false, touching = false;
    const interval = 4000;
    const autoEnabled = () => carousel && !reduced.matches;
    let start = null, suppressClick = false;
    root.classList.add('is-ready');
    let stackCaption=null;
    if(!carousel){stackCaption=document.createElement('p');stackCaption.className='stack-caption';root.querySelector('.stack-stage').after(stackCaption);}
    root.querySelectorAll('.showcase-controls,.showcase-dots,.showcase-image-controls').forEach(el => el.hidden = false);
    root.querySelectorAll('[data-go] > span').forEach(dot=>{const fill=document.createElement('span');fill.className='dot-progress';fill.setAttribute('aria-hidden','true');dot.append(fill);});
    function schedule() {
      if(!autoEnabled()){
        progress?.cancel();progress=null;root.removeAttribute('data-progress');return;
      }
      if(!progress){
        const fill=root.querySelector(`[data-go="${index}"] .dot-progress`);
        if(!fill)return;
        const animation=fill.animate([{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{duration:interval,easing:'linear',fill:'both'});
        progress=animation;
        progress.pause();
        root.setAttribute('data-progress','');
        animation.onfinish=()=>{if(progress===animation)show(index+1);};
      }
      if(visible&&!hovering&&!focused&&!touching&&!document.hidden&&!document.querySelector('dialog[open]'))progress.play();
      else progress.pause();
    }
    function render() {
      slides.forEach((slide,i) => {
        const active = i === index;
        if(carousel) { slide.dataset.active=String(active); slide.inert=!active; slide.setAttribute('aria-hidden',String(!active)); }
        else { slide.dataset.depth = String((i-index+slides.length)%slides.length); slide.inert = !active; slide.setAttribute('aria-hidden',String(!active)); }
      });
      cards.forEach((card,i)=>{
        card.dataset.depth=String((i-index+cards.length)%cards.length);
        card.inert=i!==index;
        card.setAttribute('aria-hidden',String(i!==index));
      });
      root.querySelectorAll('[data-go]').forEach((button,i) => button.setAttribute('aria-pressed',String(i===index)));
      const count = root.querySelector('[data-count]');
      count.textContent = `${index+1} / ${slides.length}`;
      count.setAttribute('aria-live', autoEnabled()&&!focused&&!touching?'off':'polite');
      if(stackCaption){const lang=document.documentElement.lang==='en'?'en':'de';stackCaption.textContent=slides[index].querySelector(`figcaption [data-lang="${lang}"]`).textContent;}
      schedule();
    }
    function show(next, manual=false, instant=false) {
      const focusedSlide=[...slides,...cards].find(s=>s.contains(document.activeElement));
      progress?.cancel();progress=null;
      root.toggleAttribute('data-instant',instant);
      index = (next+slides.length)%slides.length;
      render();
      if(manual&&focusedSlide&&focusedSlide!==slides[index]&&focusedSlide!==cards[index]){
        const next=root.querySelector('[data-slide][data-active="true"] [data-step="1"]')||root.querySelector('[data-step="1"]');
        next.focus({preventScroll:true});
      }
    }
    root.querySelectorAll('[data-step]').forEach(b=>b.addEventListener('click',e=>show(index+Number(b.dataset.step),true,e.detail===0)));
    root.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',e=>show(Number(b.dataset.go),true,e.detail===0)));
    root.addEventListener('focusin',()=>{focused=true;schedule();});
    root.addEventListener('focusout',e=>{focused=root.contains(e.relatedTarget);schedule();});
    root.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse'){touching=true;schedule();}});
    root.addEventListener('pointerup',()=>{touching=false;schedule();});
    root.addEventListener('pointercancel',()=>{touching=false;schedule();});
    root.addEventListener('mouseenter',()=>{hovering=true;schedule();});
    root.addEventListener('mouseleave',()=>{hovering=false;schedule();});
    root.addEventListener('keydown',e=>{
      if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();show(index+(e.key==='ArrowLeft'?-1:1),true,true);}
    });
    root.addEventListener('touchstart',e=>{const t=e.touches[0];start={x:t.clientX,y:t.clientY};},{passive:true});
    root.addEventListener('touchcancel',()=>{start=null;touching=false;schedule();},{passive:true});
    root.addEventListener('touchend',e=>{
      touching=false;
      if(!start){schedule();return;}
      const t=e.changedTouches[0],dx=t.clientX-start.x,dy=t.clientY-start.y;
      start=null;
      if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.5){suppressClick=true;setTimeout(()=>{suppressClick=false;},400);show(index+(dx<0?1:-1),true);}
      else schedule();
    },{passive:true});
    root.addEventListener('click',e=>{if(suppressClick){e.preventDefault();e.stopPropagation();suppressClick=false;}},true);
    new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;schedule();},{threshold:.25}).observe(root);
    document.addEventListener('visibilitychange',schedule);
    document.querySelectorAll('dialog').forEach(d=>{new MutationObserver(schedule).observe(d,{attributes:true,attributeFilter:['open']});});
    reduced.addEventListener('change',render);
    new MutationObserver(render).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
    render();
  });
})();
