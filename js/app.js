// ---------- Navigation ----------
function showView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + viewId).classList.add('active');
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.view === viewId);
  });
  if (viewId === 'dashboard') renderDashboard();
  if (viewId === 'progress') renderProgress();
}

document.getElementById('main-nav').addEventListener('click', e => {
  if (e.target.matches('.tab-btn')) showView(e.target.dataset.view);
});

// ---------- Shared: domain progress bars ----------
function masteryClass(pct) {
  if (pct === null) return '';
  if (pct < 60) return 'weak';
  if (pct >= 85) return 'strong';
  return '';
}

function renderDomainList(container, { sortWeakestFirst } = {}) {
  let domains = DOMAINS.map(d => ({ ...d, mastery: Store.domainMastery(d.id) }));
  if (sortWeakestFirst) {
    domains = domains.sort((a, b) => {
      const av = a.mastery === null ? -1 : a.mastery;
      const bv = b.mastery === null ? -1 : b.mastery;
      return av - bv;
    });
  }
  container.innerHTML = domains.map(d => {
    const pct = d.mastery === null ? 0 : d.mastery;
    const label = d.mastery === null ? '—' : d.mastery + '%';
    return `
      <div class="domain-row">
        <span class="domain-name">${d.name}<span class="domain-weight">${d.weight}% of exam</span></span>
        <div class="bar-track"><div class="bar-fill ${masteryClass(d.mastery)}" style="width:${pct}%"></div></div>
        <span class="domain-pct">${label}</span>
      </div>`;
  }).join('');
}

// ---------- Dashboard ----------
function renderDashboard() {
  const days = Store.daysUntilExam();
  document.getElementById('countdown-number').textContent = days >= 0 ? days : 0;
  document.getElementById('exam-date-input').value = Store.state.examDate;

  const attempted = Object.keys(Store.state.questionStats).length;
  let summary;
  if (attempted === 0) {
    summary = `${QUESTIONS.length} practice questions and ${FLASHCARDS.length} flashcards are loaded and waiting. Start with a mixed quiz or a flashcard pass to get a baseline.`;
  } else {
    const overall = overallAccuracy();
    summary = `You've answered ${attempted} unique question${attempted === 1 ? '' : 's'} at ${overall}% overall accuracy. ${days} day${days === 1 ? '' : 's'} until exam day — keep chipping at your weakest domains below.`;
  }
  document.getElementById('dashboard-summary').textContent = summary;

  renderDomainList(document.getElementById('domain-snapshot'), { sortWeakestFirst: true });
}

document.getElementById('exam-date-input').addEventListener('change', e => {
  Store.setExamDate(e.target.value);
  renderDashboard();
});

document.getElementById('countdown-chip').addEventListener('click', () => {
  document.getElementById('exam-date-input').focus();
  document.getElementById('exam-date-input').showPicker?.();
});

function overallAccuracy() {
  let seen = 0, correct = 0;
  Object.values(Store.state.questionStats).forEach(s => { seen += s.seen; correct += s.correct; });
  if (seen === 0) return 0;
  return Math.round((correct / seen) * 100);
}

document.querySelectorAll('.action-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const action = btn.dataset.action;
    if (action === 'weakest-quiz') {
      const domains = DOMAINS.map(d => ({ ...d, mastery: Store.domainMastery(d.id) }))
        .sort((a, b) => (a.mastery ?? -1) - (b.mastery ?? -1));
      showView('quiz');
      QuizEngine.buildPracticeSet(domains[0].id, 15, false);
      renderQuizQuestion();
      document.getElementById('quiz-setup-card').hidden = true;
      document.getElementById('quiz-area').hidden = false;
    } else if (action === 'mixed-quiz') {
      showView('quiz');
      QuizEngine.buildPracticeSet('all', 20, false);
      renderQuizQuestion();
      document.getElementById('quiz-setup-card').hidden = true;
      document.getElementById('quiz-area').hidden = false;
    } else if (action === 'mock-exam') {
      showView('quiz');
      startMockExam();
    } else if (action === 'flash-review') {
      showView('flashcards');
      document.getElementById('flash-domain-select').value = 'all';
      document.getElementById('flash-mode-select').value = 'flagged';
      startFlashcards();
    }
  });
});

// ---------- Flashcards view ----------
function populateDomainSelect(selectEl, includeAll) {
  let html = includeAll ? '<option value="all">All domains</option>' : '';
  html += DOMAINS.map(d => `<option value="${d.id}">${d.name}</option>`).join('');
  selectEl.innerHTML = html;
}
populateDomainSelect(document.getElementById('flash-domain-select'), true);
populateDomainSelect(document.getElementById('quiz-domain-select'), true);

document.getElementById('flash-start-btn').addEventListener('click', startFlashcards);

function startFlashcards() {
  const domain = document.getElementById('flash-domain-select').value;
  const mode = document.getElementById('flash-mode-select').value;

  if (mode === 'browse') {
    document.getElementById('flash-study-area').hidden = true;
    document.getElementById('flash-browse-area').hidden = false;
    renderBrowseList(domain);
    return;
  }

  document.getElementById('flash-browse-area').hidden = true;
  FlashEngine.buildDeck(domain, mode);
  if (FlashEngine.deck.length === 0) {
    alert('No flashcards match that selection yet. Try "All domains" or a different mode.');
    return;
  }
  document.getElementById('flash-study-area').hidden = false;
  renderFlashcard();
}

function renderBrowseList(domain) {
  let pool = FLASHCARDS;
  if (domain !== 'all') pool = pool.filter(c => c.domain === domain);
  const list = document.getElementById('flash-browse-list');
  list.innerHTML = pool.map(c => `
    <div class="browse-item">
      <span class="domain-tag">${domainName(c.domain)}</span>
      <div class="term">${c.term}</div>
      <div>${c.definition}</div>
    </div>`).join('') || '<p class="hint">No flashcards in this domain yet.</p>';
}

function renderFlashcard() {
  if (FlashEngine.isDone()) {
    document.getElementById('flash-study-area').hidden = true;
    alert('Deck complete! Nice work — start again or try another domain.');
    return;
  }
  const card = FlashEngine.current();
  document.getElementById('flash-position').textContent =
    `Card ${FlashEngine.index + 1} of ${FlashEngine.deck.length} · ${domainName(card.domain)}`;
  document.getElementById('flashcard-front').textContent = card.term;
  document.getElementById('flashcard-back').textContent = card.definition;
  document.getElementById('flashcard-inner').classList.remove('flipped');
  FlashEngine.flipped = false;
  document.getElementById('flash-flag-btn').textContent =
    Store.flashFlagged(card.id) ? '🚩 Flagged (click to unflag)' : '🚩 Flag for review';
}

document.getElementById('flashcard-inner').addEventListener('click', () => {
  FlashEngine.flip();
  document.getElementById('flashcard-inner').classList.toggle('flipped', FlashEngine.flipped);
});

document.getElementById('flash-flag-btn').addEventListener('click', () => {
  const card = FlashEngine.current();
  if (!card) return;
  Store.toggleFlashFlag(card.id);
  document.getElementById('flash-flag-btn').textContent =
    Store.flashFlagged(card.id) ? '🚩 Flagged (click to unflag)' : '🚩 Flag for review';
});

document.querySelectorAll('[data-rating]').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = FlashEngine.current();
    if (!card) return;
    Store.rateFlashcard(card.id, btn.dataset.rating);
    FlashEngine.advance();
    renderFlashcard();
  });
});

document.getElementById('flash-exit-btn').addEventListener('click', () => {
  document.getElementById('flash-study-area').hidden = true;
});

// ---------- Quiz view ----------
document.getElementById('quiz-start-btn').addEventListener('click', () => {
  const domain = document.getElementById('quiz-domain-select').value;
  const length = document.getElementById('quiz-length-select').value;
  const timed = document.getElementById('quiz-timed-check').checked;
  const missedOnly = document.getElementById('quiz-missed-only-check').checked;

  QuizEngine.timed = timed;
  QuizEngine.buildPracticeSet(domain, length, missedOnly);

  if (QuizEngine.total() === 0) {
    alert('No questions match that selection yet (e.g. no missed questions logged yet). Try different options.');
    return;
  }
  document.getElementById('quiz-setup-card').hidden = true;
  document.getElementById('quiz-results').hidden = true;
  document.getElementById('quiz-area').hidden = false;
  renderQuizQuestion();
});

document.getElementById('mock-exam-btn').addEventListener('click', startMockExam);

function startMockExam() {
  QuizEngine.timed = true;
  QuizEngine.buildMockExam(Math.min(120, QUESTIONS.length));
  document.getElementById('quiz-setup-card').hidden = true;
  document.getElementById('quiz-results').hidden = true;
  document.getElementById('quiz-area').hidden = false;
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const q = QuizEngine.current();
  document.getElementById('quiz-progress-label').textContent =
    `Question ${QuizEngine.index + 1} of ${QuizEngine.total()} · ${QuizEngine.domainLabel}`;
  document.getElementById('quiz-progress-bar').style.width =
    `${Math.round((QuizEngine.index / QuizEngine.total()) * 100)}%`;
  document.getElementById('quiz-question-domain').textContent = domainName(q.domain);
  document.getElementById('quiz-question-text').textContent = q.question;

  const choicesEl = document.getElementById('quiz-choices');
  choicesEl.innerHTML = '';
  q.choices.forEach((choice, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = choice;
    btn.addEventListener('click', () => handleChoice(i));
    choicesEl.appendChild(btn);
  });

  document.getElementById('quiz-explanation').hidden = true;
  document.getElementById('quiz-next-btn').disabled = true;
  document.getElementById('quiz-next-btn').textContent =
    QuizEngine.isLastQuestion() ? 'See results' : 'Next';

  const timerEl = document.getElementById('quiz-timer');
  if (QuizEngine.timed) {
    timerEl.hidden = false;
    QuizEngine.startTimer(
      remaining => { timerEl.textContent = `⏱ ${remaining}s`; },
      () => handleChoice(-1)
    );
  } else {
    timerEl.hidden = true;
  }
}

function handleChoice(choiceIndex) {
  if (QuizEngine.answered) return;
  QuizEngine.clearTimer();
  const wasCorrect = QuizEngine.submitAnswer(choiceIndex);
  const q = QuizEngine.current();

  document.querySelectorAll('#quiz-choices .choice-btn').forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answerIndex) btn.classList.add('correct');
    else if (i === choiceIndex) btn.classList.add('incorrect');
  });

  const explanationEl = document.getElementById('quiz-explanation');
  explanationEl.hidden = false;
  explanationEl.textContent = (wasCorrect ? '✅ Correct. ' : '❌ Not quite. ') + q.explanation;

  document.getElementById('quiz-next-btn').disabled = false;
}

document.getElementById('quiz-next-btn').addEventListener('click', () => {
  if (QuizEngine.isLastQuestion()) {
    finishQuiz();
  } else {
    QuizEngine.advance();
    renderQuizQuestion();
  }
});

document.getElementById('quiz-quit-btn').addEventListener('click', () => {
  if (confirm('End this quiz early? Your progress on answered questions will still be saved.')) {
    QuizEngine.clearTimer();
    finishQuiz();
  }
});

function finishQuiz() {
  QuizEngine.clearTimer();
  // Trim to only the questions actually answered if quit early
  const answeredCount = QuizEngine.index + (QuizEngine.answered ? 1 : 0);
  const attempted = QuizEngine.questions.slice(0, answeredCount);
  QuizEngine.questions = attempted.length ? attempted : QuizEngine.questions;
  QuizEngine.finish();

  document.getElementById('quiz-area').hidden = true;
  document.getElementById('quiz-results').hidden = false;

  const pct = QuizEngine.total() ? Math.round((QuizEngine.correctCount / QuizEngine.total()) * 100) : 0;
  document.getElementById('quiz-results-summary').innerHTML =
    `<p style="font-size:1.4rem;font-weight:700;color:var(--navy)">${QuizEngine.correctCount} / ${QuizEngine.total()} (${pct}%)</p>
     <p class="hint">${QuizEngine.domainLabel}</p>`;

  // Per-domain breakdown for this quiz (correctness derived from missedIds,
  // since that's the only per-question outcome QuizEngine tracks for this run)
  const byDomain = {};
  QuizEngine.questions.forEach(q => {
    if (!byDomain[q.domain]) byDomain[q.domain] = { correct: 0, total: 0 };
    byDomain[q.domain].total += 1;
  });
  const missedSet = new Set(QuizEngine.missedIds);
  QuizEngine.questions.forEach(q => {
    if (!missedSet.has(q.id)) byDomain[q.domain].correct += 1;
  });

  const breakdownEl = document.getElementById('quiz-results-breakdown');
  breakdownEl.innerHTML = Object.entries(byDomain).map(([domainId, s]) => {
    const p = Math.round((s.correct / s.total) * 100);
    return `
      <div class="domain-row">
        <span class="domain-name">${domainName(domainId)}</span>
        <div class="bar-track"><div class="bar-fill ${masteryClass(p)}" style="width:${p}%"></div></div>
        <span class="domain-pct">${s.correct}/${s.total}</span>
      </div>`;
  }).join('');
}

document.getElementById('quiz-review-missed-btn').addEventListener('click', () => {
  const missedIds = new Set(QuizEngine.missedIds);
  const reviewSet = QUESTIONS.filter(q => missedIds.has(q.id));
  if (reviewSet.length === 0) {
    alert('Nothing missed in that quiz — great job!');
    return;
  }
  QuizEngine.timed = false;
  QuizEngine.start(reviewSet, 'review');
  document.getElementById('quiz-results').hidden = true;
  document.getElementById('quiz-area').hidden = false;
  renderQuizQuestion();
});

document.getElementById('quiz-retake-btn').addEventListener('click', () => {
  document.getElementById('quiz-results').hidden = true;
  document.getElementById('quiz-setup-card').hidden = false;
});

// ---------- Progress view ----------
function renderProgress() {
  const attempted = Object.keys(Store.state.questionStats).length;
  const overall = overallAccuracy();
  document.getElementById('progress-overview').innerHTML = `
    <p><strong>${attempted}</strong> unique questions attempted out of <strong>${QUESTIONS.length}</strong> in the bank.</p>
    <p><strong>${overall}%</strong> overall accuracy across all attempts.</p>
    <p><strong>${Store.flaggedCardIds().length}</strong> flashcards currently flagged for review.</p>
  `;

  renderDomainList(document.getElementById('progress-domains'), { sortWeakestFirst: true });

  const historyEl = document.getElementById('progress-history');
  if (Store.state.quizHistory.length === 0) {
    historyEl.innerHTML = '<p class="hint">No quizzes taken yet.</p>';
  } else {
    historyEl.innerHTML = Store.state.quizHistory.slice(0, 20).map(h => {
      const date = new Date(h.date);
      const pct = h.total ? Math.round((h.correct / h.total) * 100) : 0;
      return `<div class="history-item">
        <span>${date.toLocaleDateString()} · ${h.domain} (${h.mode})</span>
        <span><strong>${h.correct}/${h.total}</strong> (${pct}%)</span>
      </div>`;
    }).join('');
  }
}

document.getElementById('reset-progress-btn').addEventListener('click', () => {
  if (confirm('This clears all quiz history and flashcard progress on this device. Continue?')) {
    Store.reset();
    renderDashboard();
    renderProgress();
  }
});

// ---------- Init ----------
renderDashboard();
