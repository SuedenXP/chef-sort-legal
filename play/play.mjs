// Chef Sort Level 7 web prototype: rendering, drag and drop, keyboard play and timer.
// Game rules live in rules.mjs; the fixed board in level-07.mjs.
import { level } from './level-07.mjs';
import { createState, move, isWon, isOutOfSpace, remainingItems, firstEmptySlot } from './rules.mjs';

const ITEM_NAMES = {
  orange: ['Orange', 'Orange'],
  carrotbunchorange: ['Karottenbund', 'Carrot bunch'],
  bellpepperorange: ['Paprika', 'Bell pepper'],
  fryingpanorange: ['Bratpfanne', 'Frying pan'],
  menuhoneygold: ['Speisekarte', 'Menu'],
  cashregisterhoneygold: ['Kasse', 'Cash register'],
  blueberrymuffin: ['Blaubeermuffin', 'Blueberry muffin'],
  blueberrypancakestack: ['Blaubeerpfannkuchen', 'Blueberry pancakes'],
  ketchupcobaltblue: ['Ketchup', 'Ketchup'],
  coffeecupcobaltblue: ['Kaffeetasse', 'Coffee cup'],
  ladlecobaltblue: ['Schöpfkelle', 'Ladle'],
  sodacanleafgreen: ['Getränkedose', 'Soda can'],
  coinsleafgreen: ['Münzen', 'Coins'],
  herbplanter: ['Kräutertopf', 'Herb planter'],
  tablebelliceteal: ['Tischglocke', 'Table bell'],
  toasteroveniceteal: ['Minibackofen', 'Toaster oven'],
  spaghetti: ['Spaghetti', 'Spaghetti'],
  espressomachine: ['Espressomaschine', 'Espresso machine'],
};
const TEXT = {
  de: {
    title: 'Chef Sort – Level ausprobieren',
    slot: (shelf, slot, item) => `Regal ${shelf}, Platz ${slot}: ${item ?? 'leer'}`,
    selected: item => `${item} ausgewählt. Wähle ein Regal als Ziel, Escape bricht ab.`,
    cancelled: 'Auswahl aufgehoben.',
    full: 'Dieses Regal ist voll.',
    moved: (item, shelf) => `${item} in Regal ${shelf} gelegt.`,
    matched: item => `Drei ${item} kombiniert!`,
    won: ['Geschafft!', time => `Level 7 geschafft in ${time}. Im Spiel warten noch viele weitere Level auf dich.`],
    timeUp: ['Zeit vorbei', left => `Noch ${left} Teile übrig. Versuch es gleich nochmal!`],
    noSpace: ['Kein Platz mehr', left => `Alle Plätze sind belegt, noch ${left} Teile übrig. Versuch es gleich nochmal!`],
  },
  en: {
    title: 'Chef Sort – Try a level',
    slot: (shelf, slot, item) => `Shelf ${shelf}, slot ${slot}: ${item ?? 'empty'}`,
    selected: item => `${item} selected. Choose a target shelf, Escape cancels.`,
    cancelled: 'Selection cleared.',
    full: 'This shelf is full.',
    moved: (item, shelf) => `${item} placed on shelf ${shelf}.`,
    matched: item => `Matched three ${item}!`,
    won: ['Level complete!', time => `You cleared level 7 in ${time}. Many more levels are waiting in the game.`],
    timeUp: ["Time's up", left => `${left} items left. Give it another try!`],
    noSpace: ['Out of space', left => `Every slot is taken, ${left} items left. Give it another try!`],
  },
};
// Values from KitchenBeltSortController (seconds) and the 28 px drop padding at the 1920 px reference width.
const DROP_PADDING_UNITS = 28;
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const duration = seconds => (reducedMotion.matches ? 0 : seconds * 1000);

const board = document.querySelector('[data-board]');
const timerChip = document.querySelector('[data-timer]');
const timerText = document.querySelector('[data-timer-text]');
const status = document.querySelector('[data-status]');
const result = document.querySelector('[data-result]');
const resultTitle = document.querySelector('[data-result-title]');
const resultText = document.querySelector('[data-result-text]');

let lang = document.documentElement.lang === 'en' ? 'en' : 'de';
let state;
let remaining;
let running = false;
let ended = false;
let lastTick = null;
let selected = null;
let drag = null;
const slotElements = [];

const itemName = item => (item ? ITEM_NAMES[item][lang === 'en' ? 1 : 0] : null);
const itemSource = item => `img/item-${item}.webp`;
const formatTime = seconds => {
  const whole = Math.max(0, Math.ceil(seconds));
  return `${String(Math.floor(whole / 60)).padStart(2, '0')}:${String(whole % 60).padStart(2, '0')}`;
};
const announce = message => { status.textContent = message; };

// ---------- Language (same attributes and storage key as the home page) ----------
function setLanguage(language, remember = false) {
  lang = language === 'en' ? 'en' : 'de';
  document.documentElement.lang = lang;
  document.title = TEXT[lang].title;
  document.querySelectorAll('[data-lang]').forEach(element => { element.hidden = element.dataset.lang !== lang; });
  document.querySelectorAll('[data-set-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.setLang === lang)));
  document.querySelectorAll('[data-label-de]').forEach(element => element.setAttribute('aria-label', element.getAttribute(`data-label-${lang}`)));
  if (remember) {
    try { localStorage.setItem('chef-sort-language', lang); } catch { /* The preference is optional. */ }
  }
  if (state) render();
  if (!result.hidden) showResult(result.dataset.kind);
}

// ---------- Board ----------
function buildBoard() {
  board.replaceChildren();
  level.shelves.forEach((shelf, shelfIndex) => {
    const cell = document.createElement('div');
    cell.className = 'play-shelf';
    cell.style.gridRow = String(shelf.row + 1);
    cell.style.gridColumn = String(shelf.column + 1);
    cell.dataset.shelf = String(shelfIndex);
    for (const part of ['board-top', 'board-bottom', 'wall-left', 'wall-right']) {
      const piece = document.createElement('div');
      piece.className = `shelf-part ${part}`;
      piece.setAttribute('aria-hidden', 'true');
      cell.append(piece);
    }
    const area = document.createElement('div');
    area.className = 'shelf-items';
    slotElements[shelfIndex] = [0, 1, 2].map(slotIndex => {
      const slot = document.createElement('button');
      slot.type = 'button';
      slot.className = 'play-slot';
      slot.dataset.shelf = String(shelfIndex);
      slot.dataset.slot = String(slotIndex);
      const back = document.createElement('span');
      back.className = 'slot-back';
      const pending = document.createElement('img');
      pending.className = 'slot-pending';
      pending.alt = '';
      pending.draggable = false;
      back.append(pending);
      const item = document.createElement('img');
      item.className = 'slot-item';
      item.alt = '';
      item.draggable = false;
      slot.append(back, item);
      area.append(slot);
      return { slot, pending, item };
    });
    cell.append(area);
    board.append(cell);
  });
}

function render(reveals = new Map()) {
  state.shelves.forEach((shelf, shelfIndex) => {
    shelf.slots.forEach((data, slotIndex) => {
      const view = slotElements[shelfIndex][slotIndex];
      setImage(view.item, data.item);
      setImage(view.pending, data.pending[0] ?? null);
      view.slot.classList.toggle('is-empty', data.item === null);
      view.slot.classList.toggle('is-selected', Boolean(selected && selected.shelf === shelfIndex && selected.slot === slotIndex));
      view.slot.setAttribute('aria-label', TEXT[lang].slot(shelfIndex + 1, slotIndex + 1, itemName(data.item)));
      const delay = reveals.get(`${shelfIndex}:${slotIndex}`);
      if (delay !== undefined && !reducedMotion.matches) {
        view.item.animate(
          [{ transform: 'translateY(calc(-13 * var(--u)))', filter: 'brightness(.353)' }, { transform: 'none', filter: 'none' }],
          { duration: 260, delay, easing: 'cubic-bezier(.23,1,.32,1)', fill: 'backwards' },
        );
      }
    });
  });
}

function setImage(image, item) {
  if (item) {
    const source = itemSource(item);
    if (image.getAttribute('src') !== source) image.src = source;
    image.classList.remove('is-none');
  } else {
    // Keep the box so its position stays measurable for animations.
    image.classList.add('is-none');
  }
}

// ---------- Timer ----------
function startTimer() {
  if (running || ended) return;
  running = true;
  lastTick = null;
  requestAnimationFrame(tick);
}

function tick(now) {
  if (!running) return;
  if (document.visibilityState === 'visible') {
    if (lastTick !== null) remaining -= (now - lastTick) / 1000;
    lastTick = now;
  } else {
    lastTick = null;
  }
  updateTimer();
  if (remaining <= 0) {
    endRound('timeUp');
    return;
  }
  requestAnimationFrame(tick);
}

function updateTimer() {
  timerText.textContent = formatTime(remaining);
  timerChip.classList.toggle('is-urgent', remaining <= 10);
}

// ---------- Moves ----------
function attemptMove(from, to) {
  const before = slotSnapshot();
  const movedItem = state.shelves[from.shelf].slots[from.slot].item;
  const events = move(state, from, to);
  if (!events) return null;
  startTimer();
  const reveals = new Map();
  let delay = 0;
  for (const event of events) {
    if (event.type === 'match') {
      playMatch(event, before, from, to);
      delay = duration(0.58);
      announce(TEXT[lang].matched(itemName(event.item)));
    }
    if (event.type === 'reveal') event.slots.forEach(slot => reveals.set(`${event.shelf}:${slot}`, delay));
  }
  if (!events.some(event => event.type === 'match')) announce(TEXT[lang].moved(itemName(movedItem), to.shelf + 1));
  render(reveals);
  if (isWon(state)) setTimeout(() => endRound('won'), duration(0.7));
  else if (isOutOfSpace(state)) setTimeout(() => endRound('noSpace'), duration(0.4));
  return events;
}

const key = (shelf, slot) => `${shelf}:${slot}`;

// Positions and items of every visible slot before a move, used for overlay animations.
function slotSnapshot() {
  const snapshot = new Map();
  state.shelves.forEach((shelf, shelfIndex) => shelf.slots.forEach((data, slotIndex) => {
    snapshot.set(key(shelfIndex, slotIndex), { item: data.item, rect: slotElements[shelfIndex][slotIndex].item.getBoundingClientRect() });
  }));
  return snapshot;
}

// Unity match juice, shortened: hold, pull to the centre, pop and fade.
function playMatch(event, before, from, to) {
  if (reducedMotion.matches) return;
  const shelf = event.shelf;
  const targetRect = slotElements[to.shelf][to.slot].item.getBoundingClientRect();
  const rects = [0, 1, 2].map(slot => {
    if (shelf === to.shelf && slot === to.slot) return targetRect;
    const previous = before.get(key(shelf, slot));
    return previous?.item ? previous.rect : slotElements[shelf][slot].item.getBoundingClientRect();
  });
  const centre = rects[1];
  rects.forEach(rect => {
    const clone = floatingImage(event.item, rect);
    const dx = centre.left - rect.left;
    clone.animate([
      { transform: 'translate(0,0) scale(1)', opacity: 1, offset: 0 },
      { transform: 'translate(0,0) scale(1)', opacity: 1, offset: 0.31 },
      { transform: `translate(${dx * 0.35}px,0) scale(.88)`, opacity: 1, offset: 0.52 },
      { transform: `translate(${dx * 0.35}px,0) scale(1.22)`, opacity: 1, offset: 0.75 },
      { transform: `translate(${dx * 0.35}px,0) scale(.05)`, opacity: 0, offset: 1 },
    ], { duration: 580, easing: 'ease-out' }).finished.finally(() => clone.remove());
  });
}

function floatingImage(item, rect) {
  const image = document.createElement('img');
  image.className = 'play-floating';
  image.src = itemSource(item);
  image.alt = '';
  image.style.left = `${rect.left}px`;
  image.style.top = `${rect.top}px`;
  image.style.width = `${rect.width}px`;
  image.style.height = `${rect.height}px`;
  document.body.append(image);
  return image;
}

// ---------- Pointer drag ----------
function unitPixels() {
  return board.getBoundingClientRect().width * 0.32 / 600;
}

function findDropTarget(x, y, from) {
  const padding = DROP_PADDING_UNITS * unitPixels();
  for (const cell of board.querySelectorAll('.play-shelf')) {
    const rect = cell.getBoundingClientRect();
    if (x < rect.left - padding || x > rect.right + padding || y < rect.top - padding || y > rect.bottom + padding) continue;
    const shelf = Number(cell.dataset.shelf);
    let best = null;
    let bestDistance = Infinity;
    state.shelves[shelf].slots.forEach((data, slot) => {
      if (data.item !== null || (shelf === from.shelf && slot === from.slot)) return;
      const slotRect = slotElements[shelf][slot].slot.getBoundingClientRect();
      const distance = Math.abs(x - (slotRect.left + slotRect.width / 2));
      if (distance < bestDistance) { bestDistance = distance; best = { shelf, slot }; }
    });
    return best;
  }
  return null;
}

board.addEventListener('pointerdown', event => {
  const slot = event.target.closest('.play-slot');
  if (!slot || ended || drag || !event.isPrimary || event.button > 0) return;
  const from = { shelf: Number(slot.dataset.shelf), slot: Number(slot.dataset.slot) };
  const item = state.shelves[from.shelf].slots[from.slot].item;
  if (!item) return;
  event.preventDefault();
  clearSelection(false);
  const source = slotElements[from.shelf][from.slot].item;
  const rect = source.getBoundingClientRect();
  const ghost = floatingImage(item, rect);
  ghost.classList.add('is-dragging');
  source.classList.add('is-lifted');
  slot.setPointerCapture(event.pointerId);
  drag = { from, item, ghost, source, rect, pointerId: event.pointerId, dx: event.clientX - rect.left, dy: event.clientY - rect.top, x: rect.left, y: rect.top };
  if (!reducedMotion.matches) {
    // Pick-up wobble: scale = 1 + (1 - t) * 0.12 * sin(2 pi t) over 0.18 s.
    const frames = Array.from({ length: 9 }, (_, i) => {
      const t = i / 8;
      return { scale: String(1 + (1 - t) * 0.12 * Math.sin(2 * Math.PI * t)) };
    });
    ghost.animate(frames, { duration: 180 });
  }
});

board.addEventListener('pointermove', event => {
  if (!drag || event.pointerId !== drag.pointerId) return;
  drag.x = event.clientX - drag.dx;
  drag.y = event.clientY - drag.dy;
  drag.ghost.style.transform = `translate(${drag.x - drag.rect.left}px, ${drag.y - drag.rect.top}px)`;
});

function finishDrag(event, cancelled) {
  if (!drag || event.pointerId !== drag.pointerId) return;
  const current = drag;
  drag = null;
  const to = cancelled || ended ? null : findDropTarget(event.clientX, event.clientY, current.from);
  const offset = `translate(${current.x - current.rect.left}px, ${current.y - current.rect.top}px)`;
  if (!to) {
    current.ghost.animate([{ transform: offset }, { transform: `${offset} scale(.96)`, offset: 0.5 }, { transform: 'translate(0,0)' }], { duration: duration(0.16), easing: 'ease-out' })
      .finished.finally(() => { current.ghost.remove(); current.source.classList.remove('is-lifted'); });
    return;
  }
  const targetImage = slotElements[to.shelf][to.slot].item;
  const targetBox = targetImage.parentElement.getBoundingClientRect();
  const sourceBox = current.source.parentElement.getBoundingClientRect();
  // Item images share the slot geometry, so the slot offset equals the image offset.
  const landing = `translate(${targetBox.left - sourceBox.left}px, ${targetBox.top - sourceBox.top}px)`;
  current.source.classList.remove('is-lifted');
  const events = attemptMove(current.from, to);
  const matched = events?.some(e => e.type === 'match');
  if (!matched) targetImage.classList.add('is-lifted');
  current.ghost.animate([
    { transform: offset },
    { transform: `${landing} scale(1.04)`, offset: 0.6 },
    { transform: landing },
  ], { duration: duration(0.22), easing: 'cubic-bezier(.33,1,.68,1)', fill: 'forwards' })
    .finished.finally(() => {
      current.ghost.remove();
      targetImage.classList.remove('is-lifted');
    });
}

board.addEventListener('pointerup', event => finishDrag(event, false));
board.addEventListener('pointercancel', event => finishDrag(event, true));
board.addEventListener('contextmenu', event => { if (event.target.closest('.play-slot')) event.preventDefault(); });

// ---------- Keyboard and assistive technology ----------
board.addEventListener('click', event => {
  const slot = event.target.closest('.play-slot');
  if (!slot || ended || event.detail !== 0) return; // Pointer clicks are handled by drag.
  const target = { shelf: Number(slot.dataset.shelf), slot: Number(slot.dataset.slot) };
  const item = state.shelves[target.shelf].slots[target.slot].item;
  if (!selected) {
    if (!item) return;
    selected = target;
    render();
    announce(TEXT[lang].selected(itemName(item)));
    return;
  }
  if (selected.shelf === target.shelf && selected.slot === target.slot) {
    clearSelection(true);
    return;
  }
  const to = state.shelves[target.shelf].slots[target.slot].item === null
    ? target
    : { shelf: target.shelf, slot: firstEmptySlot(state, target.shelf) };
  if (to.slot < 0) {
    announce(TEXT[lang].full);
    return;
  }
  const from = selected;
  selected = null;
  attemptMove(from, to);
  slotElements[to.shelf][to.slot].slot.focus();
});

function clearSelection(speak) {
  if (!selected) return;
  selected = null;
  render();
  if (speak) announce(TEXT[lang].cancelled);
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') clearSelection(true);
});

// ---------- Round flow ----------
function endRound(kind) {
  if (ended) return;
  ended = true;
  running = false;
  showResult(kind);
}

function showResult(kind) {
  const [title, text] = TEXT[lang][kind];
  result.dataset.kind = kind;
  resultTitle.textContent = title;
  resultText.textContent = kind === 'won' ? text(formatTime(level.durationSeconds - remaining)) : text(remainingItems(state));
  const wasHidden = result.hidden;
  result.hidden = false;
  if (wasHidden) result.querySelector('[data-restart]').focus();
}

function restart() {
  state = createState(level);
  remaining = level.durationSeconds;
  running = false;
  ended = false;
  selected = null;
  result.hidden = true;
  updateTimer();
  render();
}

document.querySelectorAll('[data-restart]').forEach(button => button.addEventListener('click', () => {
  const fromResult = !result.hidden;
  restart();
  if (fromResult) slotElements[0][0].slot.focus();
}));
result.addEventListener('keydown', event => {
  if (event.key !== 'Tab') return;
  const controls = [...result.querySelectorAll('button, a')];
  const first = controls[0];
  const last = controls[controls.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
});

document.querySelectorAll('[data-set-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.setLang, true)));
document.getElementById('language-switch').hidden = false;

buildBoard();
restart();
setLanguage(lang);
// Local QA only: lets the browser check replay a known winning move list.
if (location.hostname === '127.0.0.1') window.chefSortPlay = { attemptMove, state: () => state, remaining: () => remaining, setRemaining: seconds => { remaining = seconds; } };
