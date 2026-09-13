const FlashEngine = {
  deck: [],
  index: 0,
  flipped: false,

  buildDeck(domainId, mode) {
    let pool = FLASHCARDS;
    if (domainId && domainId !== 'all') pool = pool.filter(c => c.domain === domainId);
    if (mode === 'flagged') {
      const flagged = new Set(Store.flaggedCardIds());
      pool = pool.filter(c => flagged.has(c.id));
    }
    // shuffle
    this.deck = pool.map(c => c).sort(() => Math.random() - 0.5);
    this.index = 0;
    this.flipped = false;
  },

  current() {
    return this.deck[this.index];
  },

  isDone() {
    return this.index >= this.deck.length;
  },

  flip() {
    this.flipped = !this.flipped;
  },

  advance() {
    this.index += 1;
    this.flipped = false;
  },
};
