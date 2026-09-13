#!/usr/bin/env node
// One-time build step: merges the batch JSON files written by content-generation
// agents into js/data.js as plain JS arrays (so the app can load them via a
// <script> tag with no fetch/CORS issues when opened straight from disk).
const fs = require('fs');
const path = require('path');

const scratchDir = process.argv[2];
if (!scratchDir) {
  console.error('Usage: node merge-content.js <scratchpad-dir>');
  process.exit(1);
}

const batchFiles = ['content-batch-A.json', 'content-batch-B.json', 'content-batch-C.json', 'content-batch-D.json'];

let allQuestions = [];
let allFlashcards = [];

batchFiles.forEach(f => {
  const p = path.join(scratchDir, f);
  if (!fs.existsSync(p)) {
    console.error(`Missing ${p}`);
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));
  allQuestions = allQuestions.concat(data.questions);
  allFlashcards = allFlashcards.concat(data.flashcards);
});

// Assign stable ids per domain (domain-001, domain-002, ...)
const qCounters = {};
allQuestions.forEach(q => {
  qCounters[q.domain] = (qCounters[q.domain] || 0) + 1;
  q.id = `${q.domain}-q${String(qCounters[q.domain]).padStart(3, '0')}`;
});

const fCounters = {};
allFlashcards.forEach(c => {
  fCounters[c.domain] = (fCounters[c.domain] || 0) + 1;
  c.id = `${c.domain}-f${String(fCounters[c.domain]).padStart(3, '0')}`;
});

const dataJsPath = path.join(__dirname, '..', 'js', 'data.js');
let contents = fs.readFileSync(dataJsPath, 'utf8');

contents = contents.replace(
  /const QUESTIONS = \[\];/,
  `const QUESTIONS = ${JSON.stringify(allQuestions, null, 2)};`
);
contents = contents.replace(
  /const FLASHCARDS = \[\];/,
  `const FLASHCARDS = ${JSON.stringify(allFlashcards, null, 2)};`
);

fs.writeFileSync(dataJsPath, contents);
console.log(`Merged ${allQuestions.length} questions and ${allFlashcards.length} flashcards into js/data.js`);

// Per-domain counts for a sanity check
const byDomainQ = {};
allQuestions.forEach(q => { byDomainQ[q.domain] = (byDomainQ[q.domain] || 0) + 1; });
console.log('Questions per domain:', byDomainQ);
const byDomainF = {};
allFlashcards.forEach(c => { byDomainF[c.domain] = (byDomainF[c.domain] || 0) + 1; });
console.log('Flashcards per domain:', byDomainF);
