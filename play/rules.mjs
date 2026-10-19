// Chef Sort Level 7 rules, mirrored from the Unity KitchenBeltSystem:
// TryMoveSlotItem, ResolveMatch, CheckAndAdvanceLayer, CheckAllSetsCleared, CheckForOutOfSpace.
// Pure functions without DOM access, shared by the page and the QA scripts.

export const SLOTS_PER_SHELF = 3;

// level.shelves: [{ row, column, slots: [{ item, pending: [] }, x3] }]
export function createState(level) {
  return {
    shelves: level.shelves.map(shelf => ({
      row: shelf.row,
      column: shelf.column,
      slots: shelf.slots.map(slot => ({ item: slot.item ?? null, pending: [...slot.pending] })),
    })),
  };
}

export function cloneState(state) {
  return {
    shelves: state.shelves.map(shelf => ({
      row: shelf.row,
      column: shelf.column,
      slots: shelf.slots.map(slot => ({ item: slot.item, pending: [...slot.pending] })),
    })),
  };
}

const isShelfClear = shelf => shelf.slots.every(slot => slot.item === null);

function isTriple(shelf) {
  const first = shelf.slots[0].item;
  return first !== null && shelf.slots.every(slot => slot.item === first);
}

function clearMatch(state, shelfIndex, events) {
  const shelf = state.shelves[shelfIndex];
  events.push({ type: 'match', shelf: shelfIndex, item: shelf.slots[0].item });
  for (const slot of shelf.slots) slot.item = null;
}

// A cleared shelf reveals the next hidden item of every slot; a revealed triple matches at once.
function advanceLayer(state, shelfIndex, events) {
  const shelf = state.shelves[shelfIndex];
  while (isShelfClear(shelf) && shelf.slots.some(slot => slot.pending.length > 0)) {
    const revealed = [];
    shelf.slots.forEach((slot, index) => {
      if (slot.pending.length > 0) {
        slot.item = slot.pending.shift();
        revealed.push(index);
      }
    });
    events.push({ type: 'reveal', shelf: shelfIndex, slots: revealed });
    if (!isTriple(shelf)) break;
    clearMatch(state, shelfIndex, events);
  }
}

export function canMove(state, from, to) {
  if (from.shelf === to.shelf && from.slot === to.slot) return false;
  const source = state.shelves[from.shelf]?.slots[from.slot];
  const target = state.shelves[to.shelf]?.slots[to.slot];
  return Boolean(source && target && source.item !== null && target.item === null);
}

// Returns the ordered events of one move, or null when the move is not allowed.
export function move(state, from, to) {
  if (!canMove(state, from, to)) return null;
  const events = [{ type: 'move', from, to }];
  const source = state.shelves[from.shelf].slots[from.slot];
  const target = state.shelves[to.shelf].slots[to.slot];
  target.item = source.item;
  source.item = null;
  // Same order as Unity: source shelf advances first, then the target shelf is checked for a match.
  advanceLayer(state, from.shelf, events);
  if (isTriple(state.shelves[to.shelf])) {
    clearMatch(state, to.shelf, events);
    advanceLayer(state, to.shelf, events);
  }
  return events;
}

export function remainingItems(state) {
  let count = 0;
  for (const shelf of state.shelves) {
    for (const slot of shelf.slots) count += (slot.item === null ? 0 : 1) + slot.pending.length;
  }
  return count;
}

export const isWon = state => remainingItems(state) === 0;

// Every slot is occupied, so no item can move any more.
export const isOutOfSpace = state => state.shelves.every(shelf => shelf.slots.every(slot => slot.item !== null));

export function firstEmptySlot(state, shelfIndex) {
  return state.shelves[shelfIndex].slots.findIndex(slot => slot.item === null);
}
