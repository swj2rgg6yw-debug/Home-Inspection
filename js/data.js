// Domain metadata drawn from the NHIE content outline (see NHIE_Study_Plan.md).
// `weight` is the approximate share of the real exam devoted to that domain,
// used to size mock exams and to weight the dashboard's mastery snapshot.
const DOMAINS = [
  { id: 'structural', name: 'Structural Systems', weight: 13 },
  { id: 'exterior', name: 'Exterior', weight: 10 },
  { id: 'roofing', name: 'Roofing', weight: 9 },
  { id: 'plumbing', name: 'Plumbing', weight: 12 },
  { id: 'electrical', name: 'Electrical', weight: 13 },
  { id: 'hvac', name: 'Heating & Cooling (HVAC)', weight: 12 },
  { id: 'insulation', name: 'Insulation & Ventilation', weight: 7 },
  { id: 'interior', name: 'Interior', weight: 9 },
  { id: 'fireplaces', name: 'Fireplaces & Fuel-Burning Appliances', weight: 4 },
  { id: 'safety', name: 'General/Safety/Standards of Practice', weight: 6 },
  { id: 'business', name: 'Inspector Business/Professional Practice', weight: 5 },
];

function domainName(id) {
  const d = DOMAINS.find(d => d.id === id);
  return d ? d.name : id;
}

// QUESTIONS and FLASHCARDS are populated below by build/merge-content.js output.
// Each question: { id, domain, question, choices[4], answerIndex, explanation }
// Each flashcard: { id, domain, term, definition }
const QUESTIONS = [];
const FLASHCARDS = [];
