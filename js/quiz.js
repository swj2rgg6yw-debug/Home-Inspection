const QuizEngine = {
  questions: [],
  index: 0,
  answered: false,
  selectedChoice: null,
  correctCount: 0,
  timed: false,
  secondsPerQuestion: 72,
  timeRemaining: 0,
  timerHandle: null,
  mode: 'practice',
  domainLabel: 'Mixed',
  onTick: null,
  onTimeUp: null,

  shuffle(arr) {
    return arr.map(x => x).sort(() => Math.random() - 0.5);
  },

  // Build a plain practice set: one domain (or 'all'), optional missed-only filter.
  buildPracticeSet(domainId, length, missedOnlyFlag) {
    let pool = QUESTIONS;
    if (domainId && domainId !== 'all') pool = pool.filter(q => q.domain === domainId);
    if (missedOnlyFlag) {
      const missed = new Set(Store.missedQuestionIds());
      pool = pool.filter(q => missed.has(q.id));
    }
    pool = this.shuffle(pool);
    if (length !== 'all') pool = pool.slice(0, Math.min(Number(length), pool.length));
    this.domainLabel = domainId && domainId !== 'all' ? domainName(domainId) : 'Mixed';
    this.start(pool, 'practice');
  },

  // Build a full weighted mock exam proportional to real NHIE domain weightings.
  buildMockExam(targetCount) {
    const total = targetCount || Math.min(120, QUESTIONS.length);
    let selected = [];
    DOMAINS.forEach(d => {
      const domainPool = this.shuffle(QUESTIONS.filter(q => q.domain === d.id));
      const share = Math.max(1, Math.round((d.weight / 100) * total));
      selected = selected.concat(domainPool.slice(0, Math.min(share, domainPool.length)));
    });
    selected = this.shuffle(selected).slice(0, total);
    this.domainLabel = 'Full Mock Exam';
    this.start(selected, 'mock');
  },

  start(questionSet, mode) {
    this.questions = questionSet;
    this.index = 0;
    this.correctCount = 0;
    this.answered = false;
    this.selectedChoice = null;
    this.mode = mode;
    this.missedIds = [];
  },

  current() {
    return this.questions[this.index];
  },

  total() {
    return this.questions.length;
  },

  isLastQuestion() {
    return this.index >= this.questions.length - 1;
  },

  isDone() {
    return this.index >= this.questions.length;
  },

  submitAnswer(choiceIndex) {
    if (this.answered) return null;
    this.answered = true;
    this.selectedChoice = choiceIndex;
    const q = this.current();
    const wasCorrect = choiceIndex === q.answerIndex;
    if (wasCorrect) this.correctCount += 1;
    else this.missedIds.push(q.id);
    Store.recordQuestionResult(q.id, wasCorrect);
    return wasCorrect;
  },

  advance() {
    this.index += 1;
    this.answered = false;
    this.selectedChoice = null;
  },

  finish() {
    Store.recordQuizResult(this.mode, this.domainLabel, this.total(), this.correctCount);
  },

  // --- Timer (used for timed practice + mock exams) ---
  startTimer(onTick, onTimeUp) {
    this.timeRemaining = this.secondsPerQuestion;
    this.onTick = onTick;
    this.onTimeUp = onTimeUp;
    this.clearTimer();
    this.timerHandle = setInterval(() => {
      this.timeRemaining -= 1;
      if (this.onTick) this.onTick(this.timeRemaining);
      if (this.timeRemaining <= 0) {
        this.clearTimer();
        if (this.onTimeUp) this.onTimeUp();
      }
    }, 1000);
  },

  clearTimer() {
    if (this.timerHandle) clearInterval(this.timerHandle);
    this.timerHandle = null;
  },
};
