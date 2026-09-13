# NHIE Study Companion

A self-contained study app for the National Home Inspector Examination (NHIE) — built for a 4-week study sprint. No build step, no backend, no account required: open `index.html` in a browser (or serve the folder with any static file server) and go.

## Features

- **Dashboard** — countdown to exam day, a mastery snapshot across all 11 NHIE content domains (weighted the same as the real exam), and one-tap shortcuts into your weakest domain, a mixed quiz, a full mock exam, or flagged flashcards.
- **Flashcards** — flip-card study by domain, a "flagged for review" pile, and a plain browse/search list for quick glossary lookups.
- **Quiz** — practice by domain or mixed, optional timed mode (paced like the real ~4-hour/~200-question exam), a "missed questions only" filter, and a full weighted mock exam that samples questions proportional to each domain's real exam share.
- **Progress** — overall accuracy, per-domain mastery, and quiz history. Everything is stored in your browser's local storage — nothing leaves your device.

## Content

Practice questions and flashcards are original content written to the official NHIE content outline and the InterNACHI/ASHI Standards of Practice and Code of Ethics — not reproductions of real, secure exam items. See `NHIE_Study_Plan.md`-style domain weighting inside `js/data.js` for how the content maps to the real exam's emphasis.

## Project structure

```
index.html          App shell and markup for all four views
css/styles.css       Styling
js/data.js            Domain metadata + all questions/flashcards
js/storage.js         localStorage-backed progress tracking
js/quiz.js            Quiz/mock-exam engine
js/flashcards.js       Flashcard deck engine
js/app.js             View wiring, rendering, event handlers
scripts/merge-content.js  Build step that merges generated content batches into js/data.js
```

## Adding more questions or flashcards

Append objects to the `QUESTIONS` or `FLASHCARDS` arrays in `js/data.js`:

```js
{ id: 'plumbing-q099', domain: 'plumbing', question: '...', choices: ['a','b','c','d'], answerIndex: 2, explanation: '...' }
{ id: 'plumbing-f099', domain: 'plumbing', term: '...', definition: '...' }
```

`domain` must match one of the ids in the `DOMAINS` array at the top of `js/data.js`.
