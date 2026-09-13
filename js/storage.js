// All persistence lives in localStorage, scoped to this browser/device.
const STORAGE_KEY = 'nhie-study-v1';

function defaultState() {
  const d = new Date();
  d.setDate(d.getDate() + 28);
  return {
    examDate: d.toISOString().slice(0, 10),
    // questionStats[questionId] = { seen, correct, lastMissed }
    questionStats: {},
    // flashcardStats[cardId] = { seen, known, flagged }
    flashcardStats: {},
    // array of { date, mode, domain, total, correct }
    quizHistory: [],
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return Object.assign(defaultState(), parsed);
  } catch (e) {
    return defaultState();
  }
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    // storage unavailable (private mode, quota) — fail silently, app still works this session
  }
}

const Store = {
  state: loadState(),

  save() { saveState(this.state); },

  reset() {
    this.state = defaultState();
    this.save();
  },

  setExamDate(dateStr) {
    this.state.examDate = dateStr;
    this.save();
  },

  daysUntilExam() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const exam = new Date(this.state.examDate + 'T00:00:00');
    const diff = Math.round((exam - today) / 86400000);
    return diff;
  },

  recordQuestionResult(questionId, wasCorrect) {
    const s = this.state.questionStats[questionId] || { seen: 0, correct: 0, lastMissed: false };
    s.seen += 1;
    if (wasCorrect) s.correct += 1;
    s.lastMissed = !wasCorrect;
    this.state.questionStats[questionId] = s;
    this.save();
  },

  recordQuizResult(mode, domain, total, correct) {
    this.state.quizHistory.unshift({
      date: new Date().toISOString(),
      mode, domain, total, correct,
    });
    this.state.quizHistory = this.state.quizHistory.slice(0, 50);
    this.save();
  },

  // Mastery for a domain: % correct across all attempts, null if unattempted.
  domainMastery(domainId) {
    const ids = QUESTIONS.filter(q => q.domain === domainId).map(q => q.id);
    let seen = 0, correct = 0;
    ids.forEach(id => {
      const s = this.state.questionStats[id];
      if (s) { seen += s.seen; correct += s.correct; }
    });
    if (seen === 0) return null;
    return Math.round((correct / seen) * 100);
  },

  missedQuestionIds() {
    return Object.keys(this.state.questionStats)
      .filter(id => this.state.questionStats[id].lastMissed);
  },

  flashKnown(cardId) {
    const s = this.state.flashcardStats[cardId];
    return s ? s.known : false;
  },

  flashFlagged(cardId) {
    const s = this.state.flashcardStats[cardId];
    return s ? !!s.flagged : false;
  },

  rateFlashcard(cardId, rating) {
    const s = this.state.flashcardStats[cardId] || { seen: 0, known: false, flagged: false };
    s.seen += 1;
    s.known = rating === 'good';
    this.state.flashcardStats[cardId] = s;
    this.save();
  },

  toggleFlashFlag(cardId) {
    const s = this.state.flashcardStats[cardId] || { seen: 0, known: false, flagged: false };
    s.flagged = !s.flagged;
    this.state.flashcardStats[cardId] = s;
    this.save();
    return s.flagged;
  },

  flaggedCardIds() {
    return Object.keys(this.state.flashcardStats)
      .filter(id => this.state.flashcardStats[id].flagged);
  },
};
