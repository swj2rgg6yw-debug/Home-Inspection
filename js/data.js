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
const QUESTIONS = [
  {
    "domain": "structural",
    "question": "An inspector is trying to determine whether a two-story house was built using platform framing or balloon framing. Which observation would confirm balloon framing?",
    "choices": [
      "Each floor is built as a separate, complete platform with wall studs running only one story tall",
      "Wall studs run continuously from the sill plate at the foundation all the way up to the roof line, passing uninterrupted through the floor framing",
      "The floor joists rest directly on top of the foundation sill with no rim joist present",
      "The subfloor is installed before the exterior walls are framed on the level above"
    ],
    "answerIndex": 1,
    "explanation": "Balloon framing is defined by continuous studs running from the foundation to the roof, with floor framing hung off the side of the studs rather than sitting on top of a platform. Platform framing, the modern standard, builds each floor as its own complete deck before walls for that level go up.",
    "id": "structural-q001"
  },
  {
    "domain": "structural",
    "question": "Why do most inspectors and code officials treat balloon-framed walls as a fire safety concern compared to platform framing?",
    "choices": [
      "Balloon-framed studs are typically undersized compared to platform-framed studs",
      "The continuous open stud bays can act as a chimney, allowing fire to spread quickly from a lower floor into the attic unless fireblocking has been installed",
      "Balloon framing always uses green, unseasoned lumber that ignites more easily",
      "Platform framing is never permitted to have insulation inside the wall cavity"
    ],
    "answerIndex": 1,
    "explanation": "Because balloon-framed stud bays run uninterrupted from foundation to attic, they create a vertical channel that can draw fire upward rapidly if fireblocking was omitted or has since been compromised. This is one reason inspectors note the absence of fireblocking as a life-safety concern in older balloon-framed homes.",
    "id": "structural-q002"
  },
  {
    "domain": "structural",
    "question": "During a basement inspection, the inspector notices horizontal cracking running along a concrete block foundation wall, with the wall appearing to bow slightly inward. What should the inspector conclude?",
    "choices": [
      "This is a normal shrinkage crack pattern and requires no further comment",
      "This pattern suggests lateral soil or hydrostatic pressure pushing against the wall, and warrants recommending evaluation by a structural engineer",
      "This is evidence of termite damage and should be referred to a pest control operator only",
      "This indicates the wall was poured with too much water in the concrete mix"
    ],
    "answerIndex": 1,
    "explanation": "Horizontal cracking combined with inward bowing in a block or poured wall is a classic sign of lateral pressure from expansive soil or accumulated groundwater, and it is far more serious than typical vertical shrinkage cracking. This condition is outside a general inspector's scope to diagnose further and should be referred out.",
    "id": "structural-q003"
  },
  {
    "domain": "structural",
    "question": "A general home inspector observes a vertical, hairline crack in a poured concrete foundation wall that is uniform in width from top to bottom. This is most consistent with:",
    "choices": [
      "Active structural failure requiring immediate engineering evaluation",
      "Normal concrete curing shrinkage, which is common and typically not a structural concern",
      "Differential settlement caused by expansive clay soil",
      "Frost heave actively lifting one corner of the foundation"
    ],
    "answerIndex": 1,
    "explanation": "Narrow, uniform vertical cracks in poured concrete are usually the result of ordinary shrinkage as the concrete cures and are common in foundations of all ages. Inspectors still note them but distinguish them from stair-step or widening cracks that suggest ongoing movement.",
    "id": "structural-q004"
  },
  {
    "domain": "structural",
    "question": "In late fall and winter, a homeowner notices a gap opening up between the ceiling drywall and the top of an interior partition wall, which then closes again by summer. This recurring seasonal pattern is best described as:",
    "choices": [
      "Truss uplift, caused by moisture differences between the top and bottom chords of attic trusses",
      "Foundation settlement that reverses itself seasonally",
      "A sign of an undersized ridge beam",
      "Normal deflection from live loads such as furniture and foot traffic"
    ],
    "answerIndex": 0,
    "explanation": "Truss uplift is a well-documented seasonal phenomenon where the bottom chord of a truss stays warm and dry while the top chord absorbs moisture in cold weather, causing the truss to arch slightly and pull away from non-load-bearing partition walls below. It typically self-corrects and is considered a cosmetic, not structural, issue.",
    "id": "structural-q005"
  },
  {
    "domain": "structural",
    "question": "White, powdery, chalk-like deposits are found on the surface of a concrete block foundation wall in a crawl space. What does this indicate?",
    "choices": [
      "Active wood decay fungus growing on the masonry",
      "Efflorescence, a sign that moisture has been moving through the masonry and depositing dissolved mineral salts on the surface as it evaporates",
      "A prior fire that scorched the surface of the block",
      "Carbonation, meaning the concrete has fully cured and is now stronger than average"
    ],
    "answerIndex": 1,
    "explanation": "Efflorescence forms when water migrates through masonry, dissolving salts along the way, and then evaporates at the surface, leaving the mineral deposits behind. It is not a structural defect itself, but it is a strong indicator of ongoing or past moisture intrusion that should be investigated further.",
    "id": "structural-q006"
  },
  {
    "domain": "structural",
    "question": "While inspecting an unfinished basement, an inspector finds a section of floor joist that has been notched by a plumber. The notch is located at the middle of the joist's span and removes about one-third of the joist's total depth. What is the correct assessment?",
    "choices": [
      "This is acceptable because holes and notches are treated the same way under residential building code",
      "This is a defect: notches in the middle third of the span are not permitted at all, regardless of depth",
      "This is acceptable as long as the notch is on the top edge of the joist",
      "This is only a concern if the joist is made of engineered lumber rather than solid sawn lumber"
    ],
    "answerIndex": 1,
    "explanation": "Under the IRC, notches in solid-sawn joists are prohibited entirely in the middle third of the span, where bending stress is highest; where permitted near the ends, notches are limited to about one-fourth of the member's depth and never on the tension edge. A notch in the middle third, regardless of size, is a coded defect that weakens the joist.",
    "id": "structural-q007"
  },
  {
    "domain": "structural",
    "question": "A floor joist has a circular hole drilled through it for a plumbing vent pipe. Which statement about hole placement and size is generally correct for sawn dimensional lumber joists?",
    "choices": [
      "Holes are never allowed anywhere in a joist under any circumstances",
      "Holes may be located in the middle third of the span, but the hole diameter should not exceed about one-third of the joist's depth and should keep roughly 2 inches of clearance from the edges",
      "Holes are only a concern if they are drilled through engineered I-joists, never through solid lumber",
      "Any size hole is fine as long as it is centered vertically on the joist"
    ],
    "answerIndex": 1,
    "explanation": "Unlike notches, holes bored through the middle of a joist's depth are permitted in the middle third of the span because that area sees less concentrated edge stress, but the hole diameter is still capped at roughly one-third of the joist depth with minimum edge clearance maintained. Oversized or poorly placed holes reduce the joist's load-carrying capacity.",
    "id": "structural-q008"
  },
  {
    "domain": "structural",
    "question": "An inspector notices that several interior door frames throughout a house are visibly out of square, doors no longer latch properly, and there are diagonal cracks radiating from the upper corners of window openings. What do these clues, taken together, most likely suggest?",
    "choices": [
      "Normal wood shrinkage that occurs in every newly built home",
      "The house has settled or is settling unevenly, distorting the wall framing",
      "The doors and windows were installed incorrectly at the factory",
      "The home has excessive attic insulation causing ceiling joists to sag"
    ],
    "answerIndex": 1,
    "explanation": "Racked (out-of-square) door and window frames combined with diagonal cracking at opening corners are classic secondary indicators of differential settlement, since uneven movement in the foundation distorts the framed openings above it. A single symptom might be explained by minor causes, but this combination points toward foundation movement.",
    "id": "structural-q009"
  },
  {
    "domain": "structural",
    "question": "Per the International Residential Code, what is the minimum required clearance between the ground and the bottom of wood floor joists in a crawl space?",
    "choices": [
      "6 inches",
      "12 inches",
      "18 inches",
      "24 inches"
    ],
    "answerIndex": 2,
    "explanation": "The IRC requires a minimum of 18 inches of clearance between the ground and the bottom of wood floor joists (12 inches is the minimum to the bottom of wood girders/beams). Adequate clearance allows for inspection access and reduces the risk of moisture and wood-destroying organisms reaching the framing.",
    "id": "structural-q010"
  },
  {
    "domain": "structural",
    "question": "In a crawl space, a support post beneath a girder is a short section of lumber sitting directly on bare soil, with no concrete footing or moisture barrier. What should the inspector flag?",
    "choices": [
      "Nothing, since a footing is only required for posts supporting exterior walls",
      "The post lacks a proper footing and is in direct contact with soil, creating a decay and support-adequacy concern that should be corrected",
      "This is acceptable as long as the post is pressure-treated lumber",
      "This is only a concern in homes built after 2015"
    ],
    "answerIndex": 1,
    "explanation": "A post resting on bare soil has no defined bearing capacity and is highly susceptible to wood decay and insect attack from direct soil contact; proper practice requires a concrete footing or pier and a moisture break between wood and soil (or an approved non-wood post). This is a common and reportable crawl space defect.",
    "id": "structural-q011"
  },
  {
    "domain": "structural",
    "question": "What is the primary structural function of a header (lintel) installed above a window or door opening in a load-bearing wall?",
    "choices": [
      "To provide a nailing surface for interior trim",
      "To transfer the load from above the opening around it and down into the adjacent wall studs, since the opening interrupted the normal load path",
      "To prevent air infiltration around the window unit",
      "To serve as the attachment point for the window's weep screed"
    ],
    "answerIndex": 1,
    "explanation": "Cutting an opening in a load-bearing wall removes the studs that would normally carry loads straight down, so a header spans the opening and redirects that load to the jack studs and king studs on either side. An undersized or missing header can lead to sagging over the opening and cracked drywall or masonry above it.",
    "id": "structural-q012"
  },
  {
    "domain": "structural",
    "question": "An inspector is evaluating a floor system that uses engineered wood I-joists rather than solid sawn lumber. A previous contractor cut a large notch into the top flange of one I-joist to route ductwork. What is the concern?",
    "choices": [
      "There is no concern, since I-joists are stronger than sawn lumber and can be notched anywhere",
      "I-joist flanges should never be notched or drilled; doing so can severely compromise the joist's strength, and any modification should follow the manufacturer's specifications",
      "The notch is only a problem if it is deeper than 6 inches",
      "I-joists are not rated for structural use and should never be found supporting a floor"
    ],
    "answerIndex": 1,
    "explanation": "Engineered I-joists rely on their flanges to resist bending forces, and manufacturers strictly prohibit cutting or notching them; only the web (the thin center section) may have holes cut in it, and only within manufacturer-specified zones and sizes. Field modifications outside those guidelines are a significant structural red flag.",
    "id": "structural-q013"
  },
  {
    "domain": "structural",
    "question": "A floor near the center of a room has a noticeable dip, and a straightedge check confirms sagging roughly midway along the span of the supporting beam below. What is the most likely explanation?",
    "choices": [
      "The beam is undersized or overspanned for the load it carries, allowing it to deflect under load over time",
      "The floor joists were installed upside down",
      "This is always caused by a plumbing leak beneath the slab",
      "This is a normal condition found in all wood-framed floors regardless of age"
    ],
    "answerIndex": 0,
    "explanation": "Noticeable deflection concentrated at the midpoint of a beam's span is a hallmark of a beam that is undersized, overspanned, or has lost some load capacity (from decay, notching, or added load) relative to what it is being asked to carry. Additional support, sistering, or engineering evaluation is typically recommended.",
    "id": "structural-q014"
  },
  {
    "domain": "structural",
    "question": "An inspector notices that a masonry chimney on the exterior of the house has pulled away from the adjacent wall, leaving a widening vertical gap, and the chimney itself appears to be leaning slightly away from the structure. What should the inspector do?",
    "choices": [
      "Caulk the gap and consider the issue resolved",
      "Note the separation as a possible sign of differential settlement or foundation movement affecting the chimney, and recommend further evaluation by a qualified professional",
      "Ignore it since chimneys are not part of the structural inspection",
      "Assume it is only a cosmetic issue since the chimney is brick rather than wood-framed"
    ],
    "answerIndex": 1,
    "explanation": "Chimneys often have separate, shallower footings than the main house foundation, so differential settlement between the two can cause a visible and widening separation. Because this can indicate an ongoing structural issue rather than a stable, historical condition, it falls outside the general inspector's scope to diagnose and should be referred to a structural engineer or mason.",
    "id": "structural-q015"
  },
  {
    "domain": "structural",
    "question": "What is the function of a rafter tie (or ceiling joist acting as a rafter tie) in a conventional stick-framed gable roof?",
    "choices": [
      "To provide a nailing surface for attic insulation baffles",
      "To resist the outward thrust that sloped rafters place on the top of the exterior walls, preventing the walls from spreading apart",
      "To support the ridge board's full weight independently of the rafters",
      "To ventilate the attic space between the roof deck and insulation"
    ],
    "answerIndex": 1,
    "explanation": "Sloped rafters push outward and downward on the top wall plates; a rafter tie (often the ceiling joist itself) connects opposing rafters low in the attic to resist that outward thrust in tension, keeping the walls from bowing outward. Removing or cutting these ties without an alternative is a common and serious framing defect.",
    "id": "structural-q016"
  },
  {
    "domain": "structural",
    "question": "An inspector observes that the ridge line of a roof sags visibly when viewed from the street, and in the attic the ridge board appears to be deflecting downward between rafter pairs. What is the most likely cause?",
    "choices": [
      "Normal truss uplift that will resolve itself seasonally",
      "Insufficient support for the ridge, such as an undersized ridge board/beam or missing rafter ties, allowing the roof structure to settle over time",
      "Excessive attic ventilation",
      "The shingles were installed with the wrong exposure"
    ],
    "answerIndex": 1,
    "explanation": "A visibly sagging ridge usually points to a structural framing deficiency, such as an undersized ridge board not designed to carry load, missing or cut rafter ties allowing the rafters to spread and the ridge to drop, or undersized rafters themselves. This is a structural concern warranting further evaluation, not a cosmetic issue.",
    "id": "structural-q017"
  },
  {
    "domain": "structural",
    "question": "During an inspection, a general home inspector finds active wood-destroying insect damage in a support beam beneath the house. According to standard scope-of-practice guidelines, what is the most appropriate course of action?",
    "choices": [
      "Attempt to repair the damaged beam personally to keep the report clear",
      "Document and report the visible damage and its apparent effect on structural members, while recommending evaluation by a licensed pest control operator and/or structural specialist for extent and repair",
      "Ignore the finding since wood-destroying insects fall entirely outside a home inspection",
      "Assume the damage is cosmetic since the insects are no longer active"
    ],
    "answerIndex": 1,
    "explanation": "General home inspection standards of practice call for reporting visible signs of damage to structural components, but determining the extent of an active infestation and appropriate treatment is typically outside a general inspector's scope and should be referred to a licensed pest control specialist, with structural repair evaluated separately if members are compromised.",
    "id": "structural-q018"
  },
  {
    "domain": "structural",
    "question": "A house exhibits several stair-step cracks running diagonally through mortar joints near the corners of window and door openings on one side of the foundation, with the cracks wider at the top than at the bottom. This pattern is most consistent with:",
    "choices": [
      "Uniform settlement of the entire foundation at the same rate",
      "Differential settlement, where one area of the foundation has moved down relative to another, often linked to expansive or inconsistently compacted soil",
      "Normal curing shrinkage unrelated to soil conditions",
      "Wind-driven racking from a recent storm"
    ],
    "answerIndex": 1,
    "explanation": "Stair-step cracking that is wider at one end than the other, especially concentrated near openings on one portion of the foundation, indicates differential (uneven) settlement rather than the whole foundation moving uniformly. Expansive clay soils that swell and shrink unevenly with moisture changes are a common underlying cause.",
    "id": "structural-q019"
  },
  {
    "domain": "structural",
    "question": "When a general home inspector identifies a foundation crack pattern that could indicate active structural movement, what is the standard, appropriate way to report this within the limits of the inspector's scope of practice?",
    "choices": [
      "State definitively that the foundation has failed and requires full replacement",
      "Describe the observed condition factually and recommend further evaluation by a qualified structural engineer, without diagnosing the exact cause or prescribing a repair method",
      "Leave the finding out of the report since diagnosing cracks is outside the inspector's role entirely",
      "Tell the client verbally but omit it from the written report to avoid liability"
    ],
    "answerIndex": 1,
    "explanation": "Standards of practice generally require inspectors to report observed conditions and their potential implications, then recommend further evaluation by a specialist (such as a structural engineer) when a finding is beyond the general inspector's ability to diagnose definitively. Overstating certainty about the cause or extent of structural damage exceeds the inspector's qualifications and scope.",
    "id": "structural-q020"
  },
  {
    "domain": "exterior",
    "question": "What is the minimum clearance the International Residential Code requires between untreated wood siding and the finished grade below it?",
    "choices": [
      "2 inches",
      "4 inches",
      "6 inches",
      "12 inches"
    ],
    "answerIndex": 2,
    "explanation": "The IRC requires at least 6 inches of clearance between wood siding (or untreated wall framing) and the ground, and at least 2 inches above horizontal surfaces like patios and steps, unless naturally durable or preservative-treated wood is used. Less clearance invites splashback moisture and wood decay at the base of the wall.",
    "id": "exterior-q001"
  },
  {
    "domain": "exterior",
    "question": "An inspector notices that vinyl siding panels have been face-nailed tightly against the sheathing, with the nail heads snug against the nailing flange rather than left slightly loose. What is the concern?",
    "choices": [
      "There is no concern, since tight nailing improves wind resistance",
      "Vinyl siding needs to move freely with temperature changes; nailing it too tightly restricts expansion and contraction and can cause buckling, oil-canning, or cracking",
      "Tight nailing voids the manufacturer's warranty only if the siding is white",
      "This only matters on the north-facing side of the house"
    ],
    "answerIndex": 1,
    "explanation": "Vinyl siding expands and contracts significantly with temperature swings, so manufacturers specify that fasteners be centered in the nailing slot and left slightly loose (not snugged tight) to allow the panel to move. Nailing it tight is a common installation defect that leads to visible waviness or cracked panels.",
    "id": "exterior-q002"
  },
  {
    "domain": "exterior",
    "question": "During the exterior walk-around, the inspector finds that the ground slopes toward the foundation instead of away from it on one side of the house. What is the general grading standard the inspector should reference in the report?",
    "choices": [
      "The ground should be perfectly flat within 10 feet of the foundation",
      "The ground should slope away from the foundation at least 6 inches over the first 10 feet",
      "The ground should slope away from the foundation at least 6 inches over the first 2 feet only",
      "Grading has no effect on foundation performance and is not typically commented on"
    ],
    "answerIndex": 1,
    "explanation": "The IRC calls for the finished grade to fall a minimum of 6 inches within the first 10 feet away from the foundation to direct surface water away from the building. Negative grading (sloping toward the house) is a very common and important defect to flag because it drives water toward the foundation.",
    "id": "exterior-q003"
  },
  {
    "domain": "exterior",
    "question": "An inspector is evaluating a wood deck and finds that the ledger board is attached to the house's rim joist using only common nails, with no visible flashing where the ledger meets the siding. What should the inspector report?",
    "choices": [
      "This is standard, acceptable practice for all deck ledger attachments",
      "The ledger attachment and flashing are deficient; ledgers should be through-bolted or lag-screwed (not just nailed) and flashed to prevent water intrusion, since nail-only connections have been linked to deck collapses",
      "Only the missing flashing is a concern; nails are always acceptable for ledger attachment",
      "This is only a concern if the deck is more than 20 feet long"
    ],
    "answerIndex": 1,
    "explanation": "Deck ledger boards carry significant load and must be attached with lag screws or through-bolts per code, since nailed connections can pull away from the house, a failure mode implicated in serious deck collapses. Proper metal flashing at the ledger is also required to keep water from rotting the rim joist and ledger connection.",
    "id": "exterior-q004"
  },
  {
    "domain": "exterior",
    "question": "At what height above grade does the IRC generally require a guard (guardrail) along the open side of a deck or porch walking surface?",
    "choices": [
      "Any deck regardless of height above grade requires a guard",
      "Decks more than 30 inches above grade require a guard, typically at least 36 inches tall",
      "Decks more than 42 inches above grade require a guard",
      "Guards are only required on the stairs, never on the deck surface itself"
    ],
    "answerIndex": 1,
    "explanation": "The IRC requires guards on open-sided walking surfaces (including decks and porches) that are more than 30 inches above grade or the floor below, and the guard must generally be at least 36 inches high for residential construction. Inspectors should measure both the drop-off height and the existing rail height when evaluating compliance.",
    "id": "exterior-q005"
  },
  {
    "domain": "exterior",
    "question": "While examining a deck guard, the inspector tries to pass a 4-inch diameter sphere through the gap between balusters. Why does this test matter?",
    "choices": [
      "It is a manufacturer marketing test with no code basis",
      "It approximates whether the opening is small enough to prevent a young child from slipping through or getting a head trapped between balusters",
      "It measures whether the guard meets minimum load requirements",
      "It is used only to test gaps in stair treads, not guards"
    ],
    "answerIndex": 1,
    "explanation": "Code limits most guard openings so that a 4-inch sphere cannot pass through, a benchmark sized to prevent small children from squeezing through or becoming entrapped between balusters. Wider gaps than this are a common and reportable safety defect on older or DIY-built railings.",
    "id": "exterior-q006"
  },
  {
    "domain": "exterior",
    "question": "What is the primary purpose of kick-out flashing installed where a roof edge meets a sidewall near a gutter?",
    "choices": [
      "To hold the gutter in place at the corner",
      "To divert roof runoff away from the wall and into the gutter, preventing water from running behind the siding and into the wall cavity",
      "To provide a decorative transition between roofing and siding materials",
      "To ventilate the wall cavity at the roof-wall intersection"
    ],
    "answerIndex": 1,
    "explanation": "Without kick-out flashing, water running down a roof-to-wall intersection can be directed behind the siding instead of into the gutter, leading to hidden rot and moisture damage inside the wall. Its absence at these transitions is a frequently cited and costly defect in exterior and roofing inspections.",
    "id": "exterior-q007"
  },
  {
    "domain": "exterior",
    "question": "An inspector observes small, evenly spaced open joints in the mortar near the base of a brick veneer wall, roughly every 24 to 33 inches. What are these most likely, and what is their purpose?",
    "choices": [
      "Construction defects that should be sealed with mortar immediately",
      "Weep holes, which allow moisture that gets behind the veneer to drain out and allow air circulation to help the wall cavity dry",
      "Vent openings for the home's HVAC return air",
      "Evidence of a settling foundation causing mortar to fall out"
    ],
    "answerIndex": 1,
    "explanation": "Brick veneer is not waterproof; it relies on an air gap and drainage plane behind it, with weep holes at the base to let collected moisture drain out and allow airflow for drying. Sealing or blocking weep holes traps moisture behind the veneer and can accelerate hidden damage.",
    "id": "exterior-q008"
  },
  {
    "domain": "exterior",
    "question": "A homeowner built a retaining wall roughly 5 feet tall to level a sloped backyard. What should the inspector note about this wall in the report?",
    "choices": [
      "Nothing, retaining walls are outside the scope of a home inspection regardless of height",
      "Walls over about 4 feet in height typically require engineering design and a permit due to the significant soil loads involved, so the inspector should recommend verifying it was properly engineered and permitted",
      "This is only a concern if the wall is made of unreinforced masonry",
      "All retaining walls must be reported as defective regardless of height or condition"
    ],
    "answerIndex": 1,
    "explanation": "Retaining walls above roughly 4 feet in height are generally required to be designed by an engineer and permitted, because of the substantial lateral soil pressure involved; taller unengineered walls are at meaningfully higher risk of failure. An inspector who observes a tall retaining wall should flag it for verification even if it currently appears stable.",
    "id": "exterior-q009"
  },
  {
    "domain": "exterior",
    "question": "Which sequencing of a window's flashing components correctly follows the principle of shingle-fashion (gravity-friendly) water drainage?",
    "choices": [
      "The weather-resistant barrier (house wrap) is installed over the window's nailing flange, and the flange is installed over the sill pan flashing",
      "The sill pan flashing is installed first, the window flange laps over the sill pan, and the weather-resistant barrier is layered over the head and side flanges last, so upper layers always overlap lower layers",
      "It does not matter what order flashing layers are installed as long as sealant is used at every joint",
      "The head flashing is installed first, followed by the sill pan, with the side flanges taped last"
    ],
    "answerIndex": 1,
    "explanation": "Proper flashing follows a shingle-lap principle, working from the bottom up, so that each higher layer overlaps the one below it and water is always directed outward and down, never into a seam. A sill pan goes in first to catch and direct any water out, and the housewrap is dressed over the top and side flanges last so it sheds water onto the layers beneath it.",
    "id": "exterior-q010"
  },
  {
    "domain": "exterior",
    "question": "An inspector is comparing wood, vinyl, and fiber-cement siding on a home built in a humid climate. Which statement about fiber-cement siding is accurate?",
    "choices": [
      "It cannot be painted and is only available in factory colors that never fade",
      "It is resistant to rot and insect damage, but its cut edges must be sealed or primed and it still requires periodic painting or caulk maintenance at joints",
      "It expands and contracts more than vinyl siding and requires the same loose-nailing technique",
      "It is not manufactured to meet any fire rating and should never be used near a chimney"
    ],
    "answerIndex": 1,
    "explanation": "Fiber-cement siding resists rot, insects, and fire better than wood, but it is not maintenance-free: cut edges and fastener penetrations need to be sealed or primed per manufacturer instructions, and painted finishes and caulked joints still need periodic upkeep. Inspectors should look for unsealed cut edges and failed caulk joints as common defects.",
    "id": "exterior-q011"
  },
  {
    "domain": "exterior",
    "question": "A deck's ledger board shows dark staining and soft, spongy wood where it meets the house, and the inspector finds no metal flashing above the ledger. What is the most likely explanation and appropriate finding?",
    "choices": [
      "This is cosmetic weathering only and requires no action",
      "The missing flashing has allowed water to collect at the ledger-to-house connection, likely causing wood decay in a structurally critical connection that should be further evaluated and repaired",
      "The staining indicates the deck was recently pressure-washed and is not a concern",
      "This is only a concern if the deck lacks a guard along its open sides"
    ],
    "answerIndex": 1,
    "explanation": "The ledger connection carries substantial structural load from the deck, and without proper flashing, water is repeatedly driven into the ledger-to-rim-joist connection, leading to decay that can silently weaken the very fasteners holding the deck to the house. Soft or discolored wood at this joint, combined with missing flashing, should be reported as a priority safety item.",
    "id": "exterior-q012"
  },
  {
    "domain": "exterior",
    "question": "A poured concrete retaining wall shows a horizontal band of white mineral staining near its base and appears to have no visible weep holes or drain pipe. What is the concern?",
    "choices": [
      "No concern, since retaining walls do not require drainage provisions",
      "Without weep holes or a drainage system, hydrostatic pressure can build up behind the wall over time, increasing the risk of cracking, bowing, or failure",
      "The white staining indicates the wall was recently sealed and is functioning properly",
      "This is a decorative feature and unrelated to wall performance"
    ],
    "answerIndex": 1,
    "explanation": "Retaining walls need a way to relieve water pressure that builds up in the soil behind them, typically through weep holes, a perforated drain pipe, and free-draining backfill; without it, hydrostatic pressure accumulates and significantly raises the risk of the wall cracking or tipping. The mineral staining also suggests water has already been moving through the wall.",
    "id": "exterior-q013"
  },
  {
    "domain": "exterior",
    "question": "Which of the following is generally the correct scope for a general home inspector when evaluating exterior grading and drainage during a residential inspection?",
    "choices": [
      "Perform a full soil percolation and drainage engineering study and report exact water flow calculations",
      "Visually observe and report on grading, drainage patterns, and downspout discharge near the foundation, and recommend further evaluation when conditions suggest inadequate drainage",
      "Only inspect drainage if the client specifically requests it in writing beforehand",
      "Grading and drainage are considered part of the roofing inspection, not the exterior inspection"
    ],
    "answerIndex": 1,
    "explanation": "Standards of practice call for a visual assessment of grading and surface drainage conditions near the foundation as part of the exterior inspection, noting conditions like negative slope or downspouts discharging near the foundation, without performing engineering-level soil or hydrology studies. Concerns beyond visual observation are referred to specialists.",
    "id": "exterior-q014"
  },
  {
    "domain": "exterior",
    "question": "A downspout on the corner of the house discharges directly onto a splash block that is tilted so water flows back toward the foundation, and the splash block sits only about 12 inches from the wall. What should the inspector recommend?",
    "choices": [
      "No action is needed, since any splash block satisfies drainage requirements regardless of orientation or distance",
      "Extending or redirecting the downspout discharge further from the foundation and correcting the splash block's tilt so water flows away from the house, consistent with good drainage practice",
      "Removing the downspout entirely, since gutters are not required by code",
      "Rerouting the downspout to discharge directly into the crawl space vents for better airflow"
    ],
    "answerIndex": 1,
    "explanation": "Concentrated roof runoff discharged close to the foundation is one of the most common, easily corrected sources of basement and crawl space moisture problems; good practice generally calls for directing downspout discharge several feet away from the foundation and ensuring splash blocks or extensions slope away from the house, not toward it.",
    "id": "exterior-q015"
  },
  {
    "domain": "roofing",
    "question": "What is the typical expected service life of standard 3-tab asphalt shingles under average conditions?",
    "choices": [
      "5 to 10 years",
      "About 20 years",
      "40 to 50 years",
      "75 to 100 years"
    ],
    "answerIndex": 1,
    "explanation": "Standard 3-tab asphalt shingles are generally rated and expected to perform for roughly 20 years, while thicker architectural (dimensional) asphalt shingles typically last longer, often in the 25 to 30 year range. Actual lifespan varies with climate, ventilation, and installation quality, but this is the commonly cited baseline for exam purposes.",
    "id": "roofing-q001"
  },
  {
    "domain": "roofing",
    "question": "Compared to standard 3-tab asphalt shingles, architectural (dimensional) asphalt shingles are generally expected to last:",
    "choices": [
      "A shorter amount of time, due to their added weight trapping moisture",
      "About the same amount of time, since both are made from asphalt",
      "Longer, often around 25 to 30 years, due to their thicker, multi-layer construction",
      "Only half as long, since they are more prone to wind uplift"
    ],
    "answerIndex": 2,
    "explanation": "Architectural shingles are made with more layers of material and are heavier and thicker than 3-tab shingles, which generally gives them better durability and a longer expected service life, often in the 25 to 30 year range versus about 20 years for 3-tab shingles.",
    "id": "roofing-q002"
  },
  {
    "domain": "roofing",
    "question": "Which roofing material generally has the longest expected service life, often exceeding 75 to 100 years with proper installation and maintenance?",
    "choices": [
      "Wood shakes",
      "Standard 3-tab asphalt shingles",
      "Natural slate",
      "Mineral-surfaced roll roofing"
    ],
    "answerIndex": 2,
    "explanation": "Natural slate is among the longest-lasting common roofing materials, with a well-installed slate roof often exceeding 75 to 100 years of service, far outlasting asphalt shingles or wood shakes. Its high cost and weight, however, mean it is far less common on typical residential re-roofs.",
    "id": "roofing-q003"
  },
  {
    "domain": "roofing",
    "question": "What is the primary function of step flashing installed along a roof-to-sidewall intersection, such as where a roof plane meets a dormer or chimney side wall?",
    "choices": [
      "To anchor the shingles more securely against wind uplift",
      "To provide an individual, overlapping piece of flashing at each shingle course that directs water away from the wall and down the roof surface",
      "To ventilate the attic space near the wall intersection",
      "To serve as a decorative trim piece hiding the shingle edge"
    ],
    "answerIndex": 1,
    "explanation": "Step flashing consists of individual L-shaped metal pieces installed one per shingle course, each overlapping the piece below it and tucked under the siding or counter-flashing above, so that water is continuously shed down and away from the wall-roof joint. A continuous single piece of flashing bent to fit the slope, instead of step flashing, is a common and significant defect at these intersections.",
    "id": "roofing-q004"
  },
  {
    "domain": "roofing",
    "question": "What distinguishes counter-flashing from base (step) flashing at a chimney or wall intersection?",
    "choices": [
      "Counter-flashing is installed only on flat roofs, never on sloped roofs",
      "Counter-flashing is a separate piece set into the masonry or wall above the step or base flashing, overlapping it to keep water from getting behind the flashing system",
      "Counter-flashing and step flashing are two names for the exact same component",
      "Counter-flashing is only required on metal roofs"
    ],
    "answerIndex": 1,
    "explanation": "Base or step flashing is tied into the roofing surface, while counter-flashing is a separate piece embedded into a mortar joint or wall cladding above it, lapping down over the top edge of the base flashing to shed water over it rather than behind it. Missing or deteriorated counter-flashing at a chimney is a frequent source of hidden leaks.",
    "id": "roofing-q005"
  },
  {
    "domain": "roofing",
    "question": "An inspector is comparing open and closed valley flashing methods on an asphalt shingle roof. Which statement is accurate?",
    "choices": [
      "An open valley exposes a metal channel down the center of the valley with shingles trimmed back on each side, while a closed valley has shingles woven or overlapped across the valley, concealing the metal or underlayment beneath",
      "A closed valley always uses exposed metal flashing, while an open valley uses only shingles",
      "Open and closed valleys are only used on tile roofs, never on asphalt shingle roofs",
      "There is no functional difference between the two; the terms only describe color choices"
    ],
    "answerIndex": 0,
    "explanation": "In an open valley, shingles are cut back on each side to expose a metal (or reinforced membrane) channel that carries water down the valley, while in a closed (woven or cut) valley, the shingles themselves cross the valley and conceal the underlying flashing. Both methods are used on asphalt shingle roofs, and each has different maintenance and leak-risk characteristics.",
    "id": "roofing-q006"
  },
  {
    "domain": "roofing",
    "question": "Per the IRC, when is a cricket (saddle) required on the ridge side of a chimney?",
    "choices": [
      "Whenever the chimney is made of brick rather than metal",
      "When the chimney's width, measured perpendicular to the roof slope, exceeds 30 inches",
      "Only on roofs with a slope greater than 8:12",
      "Crickets are never required by code and are purely optional aesthetic features"
    ],
    "answerIndex": 1,
    "explanation": "The IRC requires a cricket or saddle on the high (ridge) side of a chimney or other roof penetration when its width perpendicular to the slope exceeds 30 inches, since wide penetrations without a cricket tend to trap water and debris behind them. A missing cricket on an oversized chimney is a defect worth noting even if no active leak is visible at the time of inspection.",
    "id": "roofing-q007"
  },
  {
    "domain": "roofing",
    "question": "What is the default minimum net free ventilating area required for an enclosed attic under the IRC, expressed as a ratio to the attic floor area?",
    "choices": [
      "1/50 of the attic floor area",
      "1/150 of the attic floor area",
      "1/500 of the attic floor area",
      "1/1000 of the attic floor area"
    ],
    "answerIndex": 1,
    "explanation": "The IRC's default minimum net free ventilating area for an attic is 1/150 of the vented floor area; this can be reduced to 1/300 only when specific conditions are met, such as a vapor retarder in colder climate zones and a balanced 40 to 50 percent split of ventilation area between the upper and lower portions of the attic.",
    "id": "roofing-q008"
  },
  {
    "domain": "roofing",
    "question": "Under what condition can an attic's minimum ventilation ratio be reduced from 1/150 to 1/300 of the attic floor area under the IRC?",
    "choices": [
      "Whenever the roof is covered in architectural shingles instead of 3-tab shingles",
      "When at least 40 to 50 percent of the ventilating area is located in the upper portion of the attic (balancing intake and exhaust), along with a vapor retarder where required by climate zone",
      "Whenever the attic has spray foam insulation installed anywhere in the structure",
      "The ratio can never be reduced below 1/150 under any circumstances"
    ],
    "answerIndex": 1,
    "explanation": "The reduced 1/300 ratio is only allowed when the ventilating area is reasonably balanced between low (soffit/eave) and high (ridge/gable) locations, generally with 40 to 50 percent of the total area near the top of the attic, and in colder climate zones, a vapor retarder on the ceiling. Without these conditions, the full 1/150 ratio applies.",
    "id": "roofing-q009"
  },
  {
    "domain": "roofing",
    "question": "In a region with a documented history of ice damming, how far must an ice barrier (ice-and-water shield) extend from the lowest edge of the roof, per the IRC?",
    "choices": [
      "6 inches",
      "12 inches",
      "At least 24 inches inside the exterior wall line of the building",
      "The full length of the roof slope, regardless of building width"
    ],
    "answerIndex": 2,
    "explanation": "In areas with a history of ice-dam related water backup, code requires an ice barrier to extend from the eave edge to a point at least 24 inches inside the exterior wall line, measured on the roof plane, so that if an ice dam forms and backs water up the roof, the barrier still extends past the dam to protect the deck.",
    "id": "roofing-q010"
  },
  {
    "domain": "roofing",
    "question": "During a roof inspection, the roof pitch is very steep and the shingle surface is wet from recent rain. What is the appropriate and expected approach for the inspector to take under standard home inspection practice?",
    "choices": [
      "Walk the roof anyway, since standards of practice always require walking every roof regardless of conditions",
      "Inspect the roof from the ground or another vantage point (such as with binoculars, a drone, or from an accessible window) and disclose in the report that the roof could not be safely walked and the method of observation used",
      "Refuse to inspect the roof at all and omit it from the report entirely",
      "Wait for the client to climb onto the roof and describe what they see"
    ],
    "answerIndex": 1,
    "explanation": "Standards of practice recognize that inspectors are not required to walk a roof when doing so would be unsafe (due to steep slope, wet or fragile conditions, or height), but the inspector must still make a reasonable effort to observe the roof by another method and disclose the inspection method and any resulting limitations in the report.",
    "id": "roofing-q011"
  },
  {
    "domain": "roofing",
    "question": "An attic inspection reveals that soffit vents around the entire perimeter of the house have been blocked from the inside by insulation pushed against the roof deck, while the ridge vent is unobstructed. What problem is this likely to cause?",
    "choices": [
      "No problem, since the ridge vent alone can still fully ventilate the attic",
      "Reduced or reversed airflow, since blocked soffit (intake) vents starve the ridge (exhaust) vent of the intake air it needs, undermining the balanced ventilation system and increasing moisture and heat buildup",
      "Increased attic ventilation, since air will simply enter through the ridge vent instead",
      "This only affects cooling costs and has no connection to moisture-related roof problems"
    ],
    "answerIndex": 1,
    "explanation": "Attic ventilation depends on balanced intake (low, at the soffits/eaves) and exhaust (high, at the ridge or gables); blocking the soffit intake starves the system of the air the ridge vent needs to work properly, which can lead to trapped moisture, condensation, mold, and even reduced shingle life from heat buildup. Inspectors commonly find insulation baffles missing or insulation piled against the roof deck blocking soffit vents.",
    "id": "roofing-q012"
  },
  {
    "domain": "roofing",
    "question": "What is the primary purpose of drip edge flashing installed along the eaves and rakes of a shingle roof?",
    "choices": [
      "To hold the ridge vent in place",
      "To direct water off the roof edge and away from the fascia and underlying roof sheathing, rather than allowing it to curl back underneath the shingles",
      "To provide the primary structural attachment for the roof decking",
      "To serve only a decorative purpose with no functional benefit"
    ],
    "answerIndex": 1,
    "explanation": "Drip edge is a metal flashing installed at the eaves and rakes that extends slightly beyond the roof edge, directing water away from the fascia, soffit, and sheathing edge rather than letting it wick back underneath the shingles by capillary action. Its absence, especially at the eaves, is a commonly cited and relatively low-cost-to-correct defect.",
    "id": "roofing-q013"
  },
  {
    "domain": "roofing",
    "question": "A roof section has a low slope of about 3:12, right at the edge of what asphalt shingles are rated for. What underlayment practice does this low slope typically call for compared to a standard-slope roof?",
    "choices": [
      "No underlayment is required at all on low-slope sections",
      "A single layer of standard felt underlayment is always sufficient regardless of slope",
      "Low-slope sections (roughly 2:12 up to 4:12) typically require an enhanced underlayment approach, such as two layers of underlayment or a fully adhered ice-and-water membrane, because shingles alone are less effective at shedding water on shallow slopes",
      "Low-slope roofs require less underlayment than steep-slope roofs since water drains faster"
    ],
    "answerIndex": 2,
    "explanation": "Asphalt shingles rely on gravity and slope to shed water effectively, so on low-slope sections roughly between 2:12 and 4:12, code and manufacturer instructions typically call for a doubled underlayment application or a self-adhered waterproof membrane to provide backup protection against wind-driven rain and slow drainage. Below about 2:12, asphalt shingles are generally not an approved roof covering at all.",
    "id": "roofing-q014"
  },
  {
    "domain": "plumbing",
    "question": "An inspector is identifying supply piping in a 1975 home's basement. One line is rigid, silver-gray metal pipe with visible threaded joints and some surface corrosion near the fittings. What material is this most likely to be?",
    "choices": [
      "Type L copper",
      "Galvanized steel",
      "CPVC",
      "PEX"
    ],
    "answerIndex": 1,
    "explanation": "Galvanized steel supply pipe is rigid, threaded, and dull gray, and it commonly shows rust-colored corrosion at joints as the zinc coating wears away over decades. Copper is reddish and usually soldered rather than threaded, and CPVC/PEX are plastic, not metal.",
    "id": "plumbing-q001"
  },
  {
    "domain": "plumbing",
    "question": "A home inspector sees flexible plastic tubing with a red outer jacket feeding a water heater and a similar tubing with a blue jacket feeding a nearby fixture. What can the inspector conclude?",
    "choices": [
      "The red line is a gas line and must be reported as an immediate hazard",
      "The colors indicate PEX tubing, with red conventionally used for hot water and blue for cold",
      "The colors indicate the pipe is rated for potable water only if red",
      "The tubing is CPVC, which is always color-coded by temperature"
    ],
    "answerIndex": 1,
    "explanation": "PEX tubing is commonly color-coded red for hot and blue for cold as an installer convenience, but this coloring is not itself a code requirement and white/gray PEX can be used for either. It is a plumbing water line, not a gas line, and CPVC is rigid, not flexible.",
    "id": "plumbing-q002"
  },
  {
    "domain": "plumbing",
    "question": "During a plumbing inspection, an inspector notes that the home's main water distribution piping is galvanized steel that is original to the 1962 house, and static water pressure at a hose bib measures noticeably lower than typical. What should the inspector report?",
    "choices": [
      "The low pressure is unrelated to pipe material and should not be mentioned",
      "The galvanized piping is beyond its typical service life and internal corrosion/scale buildup is a likely contributor to reduced flow; recommend further evaluation by a licensed plumber",
      "The pipe should be immediately condemned and the water shut off",
      "Galvanized pipe never corrodes internally, so another cause must be found"
    ],
    "answerIndex": 1,
    "explanation": "Galvanized steel pipe has a typical service life of roughly 40-50 years, and interior corrosion/mineral scale progressively restricts the pipe's inside diameter, which is a classic cause of reduced flow in older homes. A reasonably diligent inspector flags the aged material and reduced pressure together and recommends further evaluation rather than either ignoring it or overstating the severity.",
    "id": "plumbing-q003"
  },
  {
    "domain": "plumbing",
    "question": "Which statement about CPVC supply piping is accurate for a home inspector to know?",
    "choices": [
      "CPVC is rated only for cold water and must never be connected to a water heater",
      "CPVC is a rigid plastic pipe approved for both hot and cold potable water supply lines",
      "CPVC is flexible tubing typically used only for drain, waste, and vent piping",
      "CPVC is a metal alloy pipe used mainly in commercial fire sprinkler systems"
    ],
    "answerIndex": 1,
    "explanation": "CPVC (chlorinated polyvinyl chloride) is a rigid plastic specifically formulated to withstand higher temperatures, so it is approved for both hot and cold potable water distribution, unlike standard PVC. It is not the flexible tubing used for PEX applications and it is a supply material, not a DWV material.",
    "id": "plumbing-q004"
  },
  {
    "domain": "plumbing",
    "question": "What is the primary function of the main water shutoff valve that a home inspector should locate and test for operation during an inspection?",
    "choices": [
      "It regulates water pressure entering the home",
      "It allows the entire home's water supply to be shut off in an emergency or for repairs",
      "It prevents backflow of water into the municipal supply",
      "It filters sediment from the incoming water line"
    ],
    "answerIndex": 1,
    "explanation": "The main shutoff valve, typically located where the water service enters the building, lets the occupant stop all water flow to the house for emergencies or repairs. Pressure regulation, backflow prevention, and sediment filtration are handled by separate dedicated devices.",
    "id": "plumbing-q005"
  },
  {
    "domain": "plumbing",
    "question": "A home inspector hears a loud banging noise in the pipes each time the washing machine's solenoid valve shuts off quickly. What device is designed to address this condition?",
    "choices": [
      "Backwater valve",
      "Water hammer arrestor",
      "Vacuum breaker",
      "Expansion tank"
    ],
    "answerIndex": 1,
    "explanation": "A water hammer arrestor contains an air cushion or piston that absorbs the pressure spike created when a fast-closing valve abruptly stops moving water, preventing the banging noise and pipe stress known as water hammer. Backwater valves stop sewage backflow, vacuum breakers stop backsiphonage, and expansion tanks absorb thermal expansion, so none of those address hammer.",
    "id": "plumbing-q006"
  },
  {
    "domain": "plumbing",
    "question": "A garden hose is left connected to an outdoor spigot with its other end submerged in a bucket of soapy water. Which concept describes the hazard this creates for the home's potable water system?",
    "choices": [
      "Water hammer",
      "Cross-connection creating a risk of backflow/backsiphonage into the potable supply",
      "Thermal expansion",
      "Trap siphonage"
    ],
    "answerIndex": 1,
    "explanation": "A cross-connection is any point where a potable water line could connect to a non-potable source; here, a drop in supply pressure could siphon the soapy water back into the house piping. This is why hose bibs are required to have vacuum breakers, an inexpensive backflow prevention device.",
    "id": "plumbing-q007"
  },
  {
    "domain": "plumbing",
    "question": "Why must every plumbing fixture trap maintain a proper water seal, generally between 2 and 4 inches deep?",
    "choices": [
      "To increase drainage speed through the fixture",
      "To block sewer gases from entering the living space while still allowing normal drainage",
      "To reduce the fixture's water consumption",
      "To prevent the fixture from overflowing during heavy use"
    ],
    "answerIndex": 1,
    "explanation": "The trap's water seal acts as a barrier that keeps sewer gas from entering the building through the drain, while remaining shallow enough not to impede normal flow. A seal that is too shallow can be lost to evaporation or siphoning, and one that is too deep restricts drainage and traps debris.",
    "id": "plumbing-q008"
  },
  {
    "domain": "plumbing",
    "question": "An inspector examines the drain under a bathroom sink and finds an S-trap rather than a P-trap. Why is this typically called out as a defect in modern practice?",
    "choices": [
      "S-traps use more water than P-traps",
      "S-traps are prone to self-siphoning, which can pull the water seal out of the trap and allow sewer gas into the home",
      "S-traps are illegal to manufacture in the United States",
      "S-traps require a larger drain pipe diameter than P-traps"
    ],
    "answerIndex": 1,
    "explanation": "An S-trap's shape allows fast-draining water to create a siphoning action that can suck the protective water seal entirely out of the trap, unlike a properly vented P-trap. Modern plumbing codes require a vent positioned to prevent this, which is why S-traps are generally flagged as outdated or improper.",
    "id": "plumbing-q009"
  },
  {
    "domain": "plumbing",
    "question": "What is the main purpose of the vent piping connected to a home's drain, waste, and vent (DWV) system?",
    "choices": [
      "To supply fresh water to fixtures during peak demand",
      "To equalize air pressure in the drainage system so trap seals are not siphoned or blown out, and to vent sewer gases to the outdoors",
      "To filter solids out of wastewater before it reaches the sewer",
      "To heat wastewater so it drains more easily in cold weather"
    ],
    "answerIndex": 1,
    "explanation": "Vent piping admits air into the drainage system so that draining fixtures do not create enough negative pressure to siphon water out of nearby traps, and it also routes sewer gases safely above the roofline. It plays no role in supplying water, filtering solids, or heating wastewater.",
    "id": "plumbing-q010"
  },
  {
    "domain": "plumbing",
    "question": "During a walkthrough, an inspector flushes an upstairs toilet and notices the water in a nearby bathroom sink's P-trap gurgles and the level visibly drops. What does this most likely indicate?",
    "choices": [
      "The sink's faucet aerator is clogged",
      "A venting deficiency is allowing the toilet's discharge to create suction that partially siphons the sink trap",
      "The home's water pressure is set too high",
      "The sink drain pipe is oversized for the fixture"
    ],
    "answerIndex": 1,
    "explanation": "Gurgling and a dropping trap water level when another fixture drains is a classic sign of inadequate or blocked venting, which lets the draining fixture pull air (and trap water) from connected drain lines. This should be reported as a plumbing venting concern warranting evaluation, since a lost trap seal allows sewer gas into the home.",
    "id": "plumbing-q011"
  },
  {
    "domain": "plumbing",
    "question": "What is the primary purpose of the temperature and pressure relief (TPR or T&P) valve installed on a residential water heater?",
    "choices": [
      "To regulate the temperature of water delivered to fixtures",
      "To automatically release water and pressure if the tank overheats or builds excessive pressure, preventing a tank explosion",
      "To filter sediment out of the tank before it enters the distribution piping",
      "To shut off the gas or electric supply when the tank is full"
    ],
    "answerIndex": 1,
    "explanation": "The TPR valve is a critical safety device that opens to relieve excess temperature or pressure inside the tank, preventing a dangerous buildup that could otherwise rupture or explode the tank. It does not regulate normal delivery temperature, filter sediment, or control the energy source.",
    "id": "plumbing-q012"
  },
  {
    "domain": "plumbing",
    "question": "An inspector finds a water heater's TPR valve discharge pipe terminating 30 inches above the floor with a threaded cap on the end. What should the inspector report?",
    "choices": [
      "This is an acceptable installation and requires no comment",
      "This is improper: the discharge pipe should terminate no more than 6 inches above the floor or receptor, flow by gravity, and have no threads, cap, or valve on its end",
      "The discharge pipe is too close to the floor and should be raised",
      "TPR discharge piping is only required on tankless water heaters, so this is not applicable"
    ],
    "answerIndex": 1,
    "explanation": "Code requires the TPR discharge pipe to terminate within about 6 inches of the floor or waste receptor (and by gravity flow) with no threaded end, cap, or valve, so that if the valve ever discharges, hot water and steam are directed safely downward and cannot be capped off. A cap or valve on the end defeats the safety function entirely and is considered a significant safety defect.",
    "id": "plumbing-q013"
  },
  {
    "domain": "plumbing",
    "question": "A standard residential TPR valve is typically factory-set to open at approximately what temperature and pressure?",
    "choices": [
      "150°F and 30 psi",
      "210°F and 150 psi",
      "250°F and 300 psi",
      "180°F and 60 psi"
    ],
    "answerIndex": 1,
    "explanation": "Most residential T&P valves are rated to relieve at around 210°F (just below the boiling point) or 150 psi, whichever occurs first, matching the typical maximum working pressure rating of residential water heater tanks. Knowing this baseline helps an inspector recognize a valve or tank mismatched to normal service conditions.",
    "id": "plumbing-q014"
  },
  {
    "domain": "plumbing",
    "question": "A home inspector notes a water heater installed with a check valve on the main water supply line but no expansion tank present. What concern should be raised?",
    "choices": [
      "No concern; expansion tanks are only decorative",
      "In a closed plumbing system, heated water has nowhere to expand without an expansion tank, which can cause excessive pressure and premature TPR valve discharge or tank stress",
      "The check valve should be removed to fix the issue",
      "Expansion tanks are only required on tankless water heaters"
    ],
    "answerIndex": 1,
    "explanation": "A check valve or pressure-reducing valve on the main line creates a 'closed system' where heated water cannot expand back into the municipal supply, so an expansion tank is needed to absorb that thermal expansion. Without one, pressure can spike enough to trigger nuisance TPR valve discharge or stress fittings and the tank over time.",
    "id": "plumbing-q015"
  },
  {
    "domain": "plumbing",
    "question": "A homeowner asks an inspector whether swapping a standard tank water heater for a tankless (on-demand) unit is a simple like-for-like replacement. What should the inspector explain?",
    "choices": [
      "Yes, tankless units always use the exact same gas line, venting, and electrical connections as tank units",
      "No; tankless units often require larger gas supply lines, different venting, and sometimes dedicated electrical circuits due to their higher instantaneous demand",
      "No, tankless water heaters cannot be used in residential applications",
      "Yes, but only if the home already has copper supply piping"
    ],
    "answerIndex": 1,
    "explanation": "Tankless water heaters draw much higher instantaneous gas or electrical input to heat water on demand, which frequently requires upsized gas piping, different venting materials/configuration, and sometimes added electrical capacity compared to a standard tank unit. This makes tankless conversions a system-level change, not a simple swap.",
    "id": "plumbing-q016"
  },
  {
    "domain": "plumbing",
    "question": "An inspector observes a short section of pipe with a capped fitting rising vertically just before the gas line enters a water heater's gas valve. What is this component and its purpose?",
    "choices": [
      "A backflow preventer that stops water from entering the gas system",
      "A sediment trap (drip leg) that collects debris and moisture from the gas line before it reaches the appliance's controls",
      "An expansion joint that absorbs thermal movement in the gas line",
      "A pressure relief valve for the gas supply"
    ],
    "answerIndex": 1,
    "explanation": "A sediment trap, or drip leg, is a short capped nipple installed at the low point just ahead of an appliance's gas controls to catch scale, debris, or condensate before it can damage the valve or burner. Its absence at gas-fired appliances is a commonly cited inspection defect.",
    "id": "plumbing-q017"
  },
  {
    "domain": "plumbing",
    "question": "An inspector notices a brass or plastic fitting installed at the point where a galvanized steel pipe connects to a copper pipe on a water heater's supply lines. What is this fitting and why is it used?",
    "choices": [
      "A shutoff valve used to isolate the water heater",
      "A dielectric union, used to separate dissimilar metals and reduce galvanic corrosion at the connection",
      "A backflow preventer required by code at every water heater",
      "A trap primer that keeps nearby floor drain traps full"
    ],
    "answerIndex": 1,
    "explanation": "When dissimilar metals like copper and galvanized steel are joined directly, an electrochemical reaction accelerates corrosion at the joint; a dielectric union isolates the two metals electrically to slow this process. Its absence at a metal transition point is worth noting, especially given the accelerated corrosion often seen at water heater connections.",
    "id": "plumbing-q018"
  },
  {
    "domain": "plumbing",
    "question": "While inspecting a kitchen, the inspector opens the cabinet under the sink and finds active dripping water pooling on the cabinet floor from the supply line connection. What is the most appropriate action and reporting language?",
    "choices": [
      "Ignore it since active leaks are outside the scope of a home inspection",
      "Note the active leak as a current deficiency needing repair, and recommend evaluation/repair by a licensed plumber, since the inspection should not represent that everything behind the leak is undamaged",
      "Repair the leak on-site before continuing the inspection",
      "Report only that the cabinet has water damage, without mentioning the leak"
    ],
    "answerIndex": 1,
    "explanation": "Standards of Practice call for inspectors to report readily observable active leaks as needing repair; the inspector should describe the condition, recommend correction by a qualified plumber, and note that hidden damage may exist behind or beneath the fixture. Fixing it themselves goes beyond the inspector's role and could create liability.",
    "id": "plumbing-q019"
  },
  {
    "domain": "plumbing",
    "question": "Which statement best describes code requirements for drain cleanouts in a home's DWV system?",
    "choices": [
      "Cleanouts are optional decorative fittings with no functional purpose",
      "Cleanouts must be accessible and are generally required at the base of the stack, at changes of direction greater than 45 degrees, and at intervals not exceeding about 100 feet on horizontal runs",
      "A single cleanout at the water meter satisfies all requirements for the entire home",
      "Cleanouts are only required on vent piping, not on drain piping"
    ],
    "answerIndex": 1,
    "explanation": "Cleanouts provide access points for clearing blockages and are required at specific intervals and locations, including significant direction changes and periodic points along horizontal drain runs, so that the entire system can be reasonably accessed for maintenance. An inspector who finds an inaccessible or missing cleanout where one would be expected should note it.",
    "id": "plumbing-q020"
  },
  {
    "domain": "plumbing",
    "question": "A home's lowest-level bathroom fixtures drain below the elevation of the street sewer main. What device helps protect the home from sewage backing up into these fixtures during a municipal sewer surcharge?",
    "choices": [
      "Air admittance valve",
      "Backwater valve",
      "Vacuum breaker",
      "Pressure-reducing valve"
    ],
    "answerIndex": 1,
    "explanation": "A backwater valve contains a flap that allows wastewater to flow out toward the main but closes if sewage tries to flow backward into the building, protecting low-elevation fixtures from backup. Air admittance valves address venting, vacuum breakers address backsiphonage on supply lines, and pressure-reducing valves manage incoming water pressure.",
    "id": "plumbing-q021"
  },
  {
    "domain": "plumbing",
    "question": "An inspector finds a small mushroom-cap vent fitting under a bathroom sink cabinet in place of a traditional roof-penetrating vent pipe. What is this device, and what limitation should the inspector be aware of?",
    "choices": [
      "A backwater valve; it only functions during a power outage",
      "An air admittance valve (AAV); it is a mechanical device that admits air to relieve negative pressure but does not vent sewer gas to the outdoors like a traditional vent",
      "A trap primer; it only works when the fixture is used daily",
      "A dielectric union; it only functions on metal piping systems"
    ],
    "answerIndex": 1,
    "explanation": "An air admittance valve is a one-way mechanical valve that opens to admit air and prevent trap siphoning but stays closed otherwise, so unlike a true vent stack it does not continuously exhaust sewer gas outdoors. Inspectors should recognize AAVs as an alternative venting method with specific installation and access requirements, not as a full substitute for conventional venting in every situation.",
    "id": "plumbing-q022"
  },
  {
    "domain": "electrical",
    "question": "An inspector is describing the path of electrical service into a home. Which sequence correctly lists the order components are typically encountered from the utility line to the branch circuits?",
    "choices": [
      "Main panel, meter, service entrance conductors, branch circuit breakers",
      "Service entrance conductors, meter, main panel (service disconnect), branch circuit breakers",
      "Branch circuit breakers, main panel, meter, service entrance conductors",
      "Meter, branch circuit breakers, main panel, service entrance conductors"
    ],
    "answerIndex": 1,
    "explanation": "Power flows from the utility through the service entrance conductors to the meter, which measures usage, and then to the main panel, where the main breaker serves as the service disconnect before power is distributed to individual branch circuit breakers. Understanding this order helps an inspector describe defects at the correct location in the system.",
    "id": "electrical-q001"
  },
  {
    "domain": "electrical",
    "question": "What is a key functional difference between a main electrical panel and a sub-panel that an inspector should verify?",
    "choices": [
      "A sub-panel always has a higher amperage rating than the main panel",
      "In the main panel, neutral and ground conductors are bonded together, while in a sub-panel they must be kept separate",
      "Sub-panels are never permitted to feed 240-volt circuits",
      "Main panels do not require a main disconnect breaker"
    ],
    "answerIndex": 1,
    "explanation": "The main panel (or first means of disconnect) is where the system neutral is bonded to ground and to the grounding electrode system, but any downstream sub-panel must keep neutrals and grounds on separate, isolated bars to avoid creating parallel paths for neutral current. Finding a bonded neutral/ground bar in a sub-panel is a common and important defect to flag.",
    "id": "electrical-q002"
  },
  {
    "domain": "electrical",
    "question": "An inspector is checking a home's grounding electrode system. Which of the following is NOT typically used as a grounding electrode?",
    "choices": [
      "A driven ground rod",
      "A metal underground water pipe in direct contact with earth",
      "A concrete-encased electrode (Ufer ground)",
      "A GFCI receptacle installed in the kitchen"
    ],
    "answerIndex": 3,
    "explanation": "Grounding electrodes connect the electrical system to the earth and include driven rods, qualifying metal water pipes, and concrete-encased electrodes, among others. A GFCI receptacle is a protective device that detects current imbalance; it is not a grounding electrode at all.",
    "id": "electrical-q003"
  },
  {
    "domain": "electrical",
    "question": "A home inspector observes cable with a flat outer plastic jacket containing an insulated hot conductor, an insulated neutral conductor, and a bare grounding conductor, run through wall framing. What is this wiring method commonly called?",
    "choices": [
      "Knob-and-tube wiring",
      "Non-metallic sheathed cable (NM cable, often called Romex)",
      "Metal-clad (MC) cable",
      "Service entrance cable"
    ],
    "answerIndex": 1,
    "explanation": "NM cable, widely known by the trade name Romex, is the flat plastic-jacketed cable containing insulated conductors plus a bare or insulated ground that has been the standard residential wiring method since the mid-20th century. Knob-and-tube uses individual conductors on ceramic insulators, and MC cable has a metal armor jacket.",
    "id": "electrical-q004"
  },
  {
    "domain": "electrical",
    "question": "An inspector finds knob-and-tube wiring in the attic of an older home, with blown-in cellulose insulation covering portions of it. What is the primary concern to report?",
    "choices": [
      "Knob-and-tube wiring is illegal and must be entirely removed before the sale can close",
      "Knob-and-tube wiring has no ground conductor, and covering it with insulation can trap heat and increase fire risk, so this should be evaluated by an electrician",
      "The insulation should be removed only because it reduces attic ventilation",
      "Knob-and-tube wiring is actually safer than modern NM cable because the conductors are spaced apart"
    ],
    "answerIndex": 1,
    "explanation": "Knob-and-tube wiring is a two-wire system with no equipment ground, and it was designed to dissipate heat in open air, so burying it under insulation can cause overheating and is widely considered a fire safety hazard as well as an insurance concern. An inspector should describe the condition and recommend further evaluation rather than declaring the wiring illegal outright.",
    "id": "electrical-q005"
  },
  {
    "domain": "electrical",
    "question": "A home was wired in 1971 with solid-strand aluminum branch circuit conductors, and the inspector finds standard copper-rated devices at several receptacles. What should the inspector report?",
    "choices": [
      "No concern, since aluminum wiring performs identically to copper at all connections",
      "This combination is a recognized fire risk because aluminum wiring is prone to loosening, oxidizing, and overheating at connections unless it uses approved connectors, antioxidant compound, or CO/ALR-rated devices; recommend evaluation by a qualified electrician",
      "The wiring must be entirely replaced with copper before any further use",
      "Aluminum wiring was never used for branch circuits, so this must be a misidentification"
    ],
    "answerIndex": 1,
    "explanation": "Solid aluminum branch circuit wiring installed roughly between 1965 and 1973 is associated with loose connections and overheating due to oxidation and differing expansion rates, and it requires devices specifically rated CO/ALR or approved remediation methods like pigtailing with listed connectors. This is a well-documented issue inspectors are expected to recognize and flag for further evaluation.",
    "id": "electrical-q006"
  },
  {
    "domain": "electrical",
    "question": "What is the primary function of a ground-fault circuit interrupter (GFCI) device?",
    "choices": [
      "To prevent circuit overload from too many devices plugged in",
      "To detect a small imbalance between the hot and neutral current and quickly cut power to prevent electric shock",
      "To detect arcing conditions in damaged wiring and prevent fires",
      "To regulate voltage delivered to sensitive electronics"
    ],
    "answerIndex": 1,
    "explanation": "A GFCI continuously compares the current flowing out on the hot conductor to the current returning on the neutral; even a tiny imbalance (as little as a few milliamps), which suggests current is leaking through a person or water, causes it to trip within milliseconds. This distinguishes it from an AFCI, which targets arc faults, and from standard breakers, which target overcurrent.",
    "id": "electrical-q007"
  },
  {
    "domain": "electrical",
    "question": "What type of hazard is an arc-fault circuit interrupter (AFCI) primarily designed to detect and address?",
    "choices": [
      "Ground faults that pose a shock hazard to people",
      "Dangerous arcing conditions in damaged or degraded wiring that can ignite a fire",
      "Voltage sags caused by starting large motors",
      "Overloaded circuits caused by too many appliances"
    ],
    "answerIndex": 1,
    "explanation": "AFCI devices monitor the electrical waveform for the signature of arcing, such as from a nicked wire, loose connection, or damaged cord, and interrupt the circuit before the arc can generate enough heat to start a fire. This is a different hazard than the shock protection provided by a GFCI.",
    "id": "electrical-q008"
  },
  {
    "domain": "electrical",
    "question": "During an inspection of a home with a 2021 electrical permit, the inspector finds a standard (non-GFCI) receptacle installed within 3 feet of the kitchen sink. What should be reported?",
    "choices": [
      "This is compliant since GFCI protection is only required in bathrooms",
      "This is a deficiency; GFCI protection is required for kitchen countertop receptacles, and this receptacle should be upgraded or evaluated",
      "This is compliant because 3 feet exceeds the minimum required clearance",
      "GFCI protection is only required for kitchen receptacles installed after 2023"
    ],
    "answerIndex": 1,
    "explanation": "Current electrical code requires GFCI protection for receptacles serving kitchen countertops, and modern code editions extend this to essentially all kitchen receptacles regardless of distance from the sink. An inspector should note the missing protection as a safety item, especially in a recently permitted installation where it would be expected.",
    "id": "electrical-q009"
  },
  {
    "domain": "electrical",
    "question": "An inspector is evaluating a finished basement family room built under a recent permit. Which statement about AFCI protection is most accurate?",
    "choices": [
      "AFCI protection is required only in bedrooms, so the family room needs no protection",
      "Modern code requires AFCI protection on nearly all 120-volt, 15- and 20-amp branch circuits serving living areas, including family rooms, not just bedrooms",
      "AFCI protection applies only to circuits installed before 2000",
      "AFCI protection is required only for outdoor circuits"
    ],
    "answerIndex": 1,
    "explanation": "AFCI requirements have expanded over successive code cycles well beyond bedrooms to cover most habitable living areas, including family rooms, living rooms, dens, and similar spaces, on standard 120-volt 15- and 20-amp circuits. An inspector evaluating a recently finished space should expect AFCI protection there.",
    "id": "electrical-q010"
  },
  {
    "domain": "electrical",
    "question": "Using a standard three-light receptacle tester, an inspector gets a light pattern indicating the receptacle has power but no functioning equipment ground. What does this finding describe, and what should the inspector do?",
    "choices": [
      "This indicates reversed polarity; recommend rewiring the receptacle immediately",
      "This indicates an open ground; the receptacle lacks a functioning ground path back to the panel, which should be reported as a safety concern warranting evaluation",
      "This indicates a tripped GFCI device somewhere on the circuit",
      "This is a normal reading for any two-prong outlet and requires no comment"
    ],
    "answerIndex": 1,
    "explanation": "An 'open ground' reading means the receptacle's grounding conductor is missing, broken, or not connected, so metal appliance frames plugged into it lack a safe path to clear a fault, increasing shock risk. This is a distinct finding from reversed polarity, which involves the hot and neutral conductors being swapped rather than a missing ground.",
    "id": "electrical-q011"
  },
  {
    "domain": "electrical",
    "question": "What does 'reversed polarity' mean when found at a standard household receptacle?",
    "choices": [
      "The receptacle's ground and neutral conductors have been swapped",
      "The receptacle's hot and neutral conductors have been swapped, which can energize parts of a connected appliance that are normally not live",
      "The receptacle is wired to the wrong circuit breaker",
      "The receptacle is receiving reversed current from a nearby GFCI device"
    ],
    "answerIndex": 1,
    "explanation": "Reversed polarity occurs when the hot and neutral conductors are connected to the wrong terminals, which can leave the neutral side of a lamp socket or appliance chassis energized even when a switch is off, creating an unexpected shock hazard. It is a wiring error distinct from a missing ground.",
    "id": "electrical-q012"
  },
  {
    "domain": "electrical",
    "question": "While opening a panel cover, an inspector finds two separate branch circuit conductors installed under a single breaker terminal that is stamped by the manufacturer for only one wire. What is this condition called, and why is it a concern?",
    "choices": [
      "A bonding jumper; it is required for proper grounding",
      "A double-tapped breaker; the terminal was not designed to securely clamp two conductors, so connections can loosen over time and cause overheating or arcing",
      "A tandem breaker; it is a normal and approved configuration in every panel",
      "A sub-feed lug; it is used to power an approved sub-panel"
    ],
    "answerIndex": 1,
    "explanation": "A double-tapped breaker exists when a terminal rated for a single conductor has two conductors forced under it, risking an insecure connection that can loosen, arc, and overheat regardless of the circuit's actual load. The fix is typically to move one conductor to its own breaker or to pigtail the conductors together with an approved connector.",
    "id": "electrical-q013"
  },
  {
    "domain": "electrical",
    "question": "An inspector identifies a Federal Pacific Electric (FPE) Stab-Lok panel during an inspection. What is the most accurate way to describe this finding in the report?",
    "choices": [
      "No comment is needed since the panel brand does not affect safety",
      "These panels have been associated with a documented tendency for breakers to fail to trip under overload or short-circuit conditions, and evaluation or replacement by a qualified electrician is recommended",
      "The panel must be reported as a fire in progress and the home should be evacuated",
      "FPE panels are functionally identical to all modern panels and simply look different"
    ],
    "answerIndex": 1,
    "explanation": "Independent testing has found a significant percentage of FPE Stab-Lok breakers fail to trip as designed during overload or fault conditions, which undermines the panel's basic safety function even though it may appear to operate normally day-to-day. Because there's no practical field test to verify which individual breakers are compromised, evaluation or replacement is the standard recommendation.",
    "id": "electrical-q014"
  },
  {
    "domain": "electrical",
    "question": "What is the generally required clear working space in front of a residential electrical panel that an inspector should note if it is obstructed?",
    "choices": [
      "A clear space at least 12 inches wide and 12 inches deep",
      "A clear space at least 30 inches wide, 36 inches deep, and roughly 6.5 feet high in front of the panel",
      "No clear space is required as long as the panel door can open fully",
      "A clear space at least 6 feet wide and 6 feet deep"
    ],
    "answerIndex": 1,
    "explanation": "Electrical code requires a dedicated working clearance in front of panels, generally at least 30 inches wide, 36 inches deep, and about 6.5 feet high, so that a person can safely access and work on the equipment. Storage, shelving, or furniture placed within this zone should be noted as an access/safety concern.",
    "id": "electrical-q015"
  },
  {
    "domain": "electrical",
    "question": "An inspector finds a 20-amp circuit breaker connected to what appears to be 14-gauge NM cable. Why is this combination a concern?",
    "choices": [
      "It is not a concern; wire gauge and breaker amperage are unrelated",
      "The 14-gauge conductor is undersized for a 20-amp breaker and could overheat before the breaker trips, since 14 AWG is rated for 15-amp circuits and 12 AWG is the minimum for 20-amp circuits",
      "The breaker should be replaced with a 30-amp breaker to match the wire's true rating",
      "This combination is required by code for kitchen circuits"
    ],
    "answerIndex": 1,
    "explanation": "Overcurrent protection must match the ampacity of the conductor it protects; 14 AWG copper is rated for 15-amp circuits, while 12 AWG is the minimum for 20-amp circuits, so pairing a 20-amp breaker with 14-gauge wire allows the conductor to carry more current than it can safely handle. This is a classic mismatch inspectors are trained to catch, whether at the panel or at an outlet with the wrong receptacle rating.",
    "id": "electrical-q016"
  },
  {
    "domain": "electrical",
    "question": "An inspector traces the feeder supplying a detached garage sub-panel and finds only three conductors: two hots and a single conductor serving as both neutral and ground. What should be noted?",
    "choices": [
      "This is correct, since sub-panels only ever need three conductors",
      "A four-wire feeder (two hots, an insulated neutral, and a separate equipment grounding conductor) is generally required for a sub-panel, and combining neutral and ground on one conductor is a bonding/grounding deficiency that should be evaluated",
      "The garage does not need a grounding conductor because it is a detached structure",
      "This is only a problem if the garage has GFCI-protected outlets"
    ],
    "answerIndex": 1,
    "explanation": "Modern code requires sub-panels, including those feeding detached structures, to be supplied with a separate equipment grounding conductor in addition to an insulated neutral, keeping neutral and ground current paths independent except at the main bonding point. Combining these functions on one wire at a sub-panel bypasses that separation and is a common and important defect.",
    "id": "electrical-q017"
  },
  {
    "domain": "electrical",
    "question": "What is the purpose of the bonding jumper that connects a home's metal water piping system to the electrical grounding system?",
    "choices": [
      "To increase water pressure throughout the home",
      "To ensure the metal piping system is at the same electrical potential as the grounding system, reducing shock hazard if the piping becomes energized",
      "To prevent pipes from freezing in winter",
      "To meet plumbing code requirements only, with no electrical function"
    ],
    "answerIndex": 1,
    "explanation": "Bonding equalizes electrical potential across metal systems in a building, so if metal water piping were ever to become accidentally energized (for example, by a fault in an appliance), the bonding jumper provides a path back to the system ground rather than leaving the pipe energized and hazardous to touch. Its absence, especially where a plastic section has been spliced into metal piping, is a notable inspection finding.",
    "id": "electrical-q018"
  },
  {
    "domain": "electrical",
    "question": "An inspector needs to identify the service disconnect for a home. What best describes this component's role?",
    "choices": [
      "It is the device that measures the home's electricity usage for billing",
      "It is the main breaker or switch that allows all power to the building to be shut off in one operation, and it must be readily accessible",
      "It is a small breaker devoted only to the water heater",
      "It is a device found only in commercial buildings, not homes"
    ],
    "answerIndex": 1,
    "explanation": "The service disconnect (commonly the main breaker) provides a single point where all incoming power to the building can be shut off, and code requires it to be readily accessible, not blocked or hidden. This is distinct from the meter, which only measures usage rather than controlling power flow.",
    "id": "electrical-q019"
  },
  {
    "domain": "electrical",
    "question": "An inspector opens a panel and finds narrow, half-height circuit breakers occupying spaces designed for full-size single breakers. What should the inspector verify?",
    "choices": [
      "Nothing; all panels are compatible with any tandem breaker on the market",
      "Whether the panel manufacturer specifically lists and approves that panel for tandem/twin breakers in those slots, since using them in an unlisted panel can overload the bus and cause overheating",
      "Whether the breakers are the correct color for the utility company",
      "Whether the breakers are rated for 240 volts only"
    ],
    "answerIndex": 1,
    "explanation": "Tandem (twin/double-pole-width) breakers are only permitted in panels specifically designed and labeled by the manufacturer to accept them in designated slots; using them elsewhere can exceed the panel's design current capacity and lead to overheating. An inspector should check panel labeling or documentation rather than assume compatibility.",
    "id": "electrical-q020"
  },
  {
    "domain": "electrical",
    "question": "In an older home with no visible electrical upgrades, an inspector finds two-prong (ungrounded) receptacles throughout the house, all functioning normally with correct polarity and no signs of damage. What is the most appropriate way to report this?",
    "choices": [
      "Report that the entire house must be rewired immediately as an unsafe condition",
      "Describe the ungrounded receptacles as consistent with the home's original wiring era, note the lack of equipment grounding as a safety limitation for grounded appliances, and mention that GFCI protection (properly labeled) is an accepted alternative in some cases",
      "Ignore the finding since two-prong outlets were once standard and are therefore not worth mentioning",
      "State that the outlets are hazardous and must be capped and abandoned"
    ],
    "answerIndex": 1,
    "explanation": "Two-prong outlets without a ground are typical of a home's original, non-updated wiring and are not automatically an emergency, but an inspector should still explain the practical limitation of no equipment ground and note that GFCI protection with appropriate labeling is a recognized way to add shock protection without rewiring the whole circuit. Overstating this as requiring an immediate full rewire goes beyond what the finding actually supports.",
    "id": "electrical-q021"
  },
  {
    "domain": "electrical",
    "question": "A home has a single 100-amp main breaker serving a panel with numerous large 240-volt appliance circuits, including central air conditioning, an electric range, an electric dryer, and an electric water heater, plus standard lighting and receptacle circuits. What should the inspector consider reporting?",
    "choices": [
      "Nothing, since the panel's main breaker size does not need to relate to the connected loads",
      "The combined electrical demand of these loads may approach or exceed what a 100-amp service can safely support, so the inspector should note this as worth an electrical load evaluation, especially if any circuits show signs of strain",
      "A 100-amp service is always oversized for any home, regardless of the loads connected",
      "This is only a concern if the home has fewer than three bedrooms"
    ],
    "answerIndex": 1,
    "explanation": "While inspectors do not typically perform a full electrical load calculation, recognizing when a home's combined major appliance loads are pushing against the limits of an older, smaller service is a reasonable, scenario-based judgment call that should prompt a recommendation for further evaluation. This reflects real-world practice of flagging potentially inadequate service capacity rather than assuming it is always fine or always a problem.",
    "id": "electrical-q022"
  },
  {
    "domain": "electrical",
    "question": "An inspector finds a Zinsco (or Zinsco/Sylvania) branded panel with breakers original to the 1970s installation. What concern is this panel associated with, similar to Federal Pacific Stab-Lok panels?",
    "choices": [
      "Zinsco panels are known only for cosmetic labeling defects with no functional issues",
      "Zinsco panels have a documented history of breakers failing to trip during overload or short-circuit conditions and of breaker contacts fusing to the aluminum bus bar, so evaluation or replacement by a qualified electrician is recommended",
      "Zinsco panels are only a concern if installed outdoors",
      "Zinsco panels are approved replacements for Federal Pacific panels and resolve the safety issue"
    ],
    "answerIndex": 1,
    "explanation": "Like FPE Stab-Lok panels, Zinsco (later branded Sylvania-Zinsco) panels have a documented history of breakers failing to trip when needed and of breaker contacts overheating and fusing to the panel's aluminum bus bar, masking the failure until a fault occurs. Both brands are treated similarly by inspectors: described as a known safety concern warranting evaluation, since no reliable field test exists to confirm which individual breakers are compromised.",
    "id": "electrical-q023"
  },
  {
    "domain": "electrical",
    "question": "An inspector traces exposed wiring in a basement and finds rigid metal conduit near the panel transitioning to a flexible metal conduit with individual insulated conductors pulled through it near a furnace. What best describes this second wiring method?",
    "choices": [
      "NM cable (Romex), identifiable by its flat plastic jacket",
      "Flexible metal conduit (often called Greenfield or, with an integral bonding conductor, AC/BX-style), which allows conductors to be pulled through a bendable metal raceway",
      "Knob-and-tube wiring, identifiable by ceramic insulators",
      "Service entrance cable, used only for the utility connection"
    ],
    "answerIndex": 1,
    "explanation": "Flexible metal conduit is a bendable metal raceway through which individual insulated conductors are pulled, commonly used where some flexibility is needed near equipment like furnaces or motors, distinct from NM cable's factory-assembled flat jacket and from knob-and-tube's open-air ceramic supports. Recognizing the wiring method helps an inspector evaluate whether it is appropriately rated and grounded for its application.",
    "id": "electrical-q024"
  },
  {
    "domain": "hvac",
    "question": "A homeowner mentions their furnace has a 90+ AFUE rating. What does the AFUE rating actually measure?",
    "choices": [
      "The percentage of fuel energy converted to usable heat over a year",
      "The furnace's maximum blower speed in cubic feet per minute",
      "The amount of refrigerant charge required for the system",
      "The BTU output of the furnace at the moment of ignition"
    ],
    "answerIndex": 0,
    "explanation": "AFUE (Annual Fuel Utilization Efficiency) compares annual heat output to the annual fuel energy consumed. A 90% AFUE furnace converts 90% of the fuel's energy into delivered heat, with the remainder lost up the flue.",
    "id": "hvac-q001"
  },
  {
    "domain": "hvac",
    "question": "On a standard 24-volt residential thermostat wiring scheme, which terminal letter energizes the cooling compressor contactor?",
    "choices": [
      "Y",
      "W",
      "G",
      "C"
    ],
    "answerIndex": 0,
    "explanation": "Y calls for cooling (the compressor/condenser). W calls for heat, G runs the indoor blower independent of heating or cooling, and C is the common wire that completes the 24V circuit.",
    "id": "hvac-q002"
  },
  {
    "domain": "hvac",
    "question": "During a fall inspection, an inspector runs a gas furnace and notices the burner flame is mostly yellow/orange rather than blue, with soot visible around the burner compartment. What should the inspector do?",
    "choices": [
      "Recommend evaluation and service by a qualified HVAC technician before further use, noting possible incomplete combustion and a carbon monoxide hazard",
      "Note it as a cosmetic issue only, since the furnace is still heating the home",
      "Replace the furnace filter and consider the issue resolved",
      "Increase the thermostat setpoint to see if the flame color changes"
    ],
    "answerIndex": 0,
    "explanation": "A yellow, sooty flame points to incomplete combustion, which can generate elevated carbon monoxide. Diagnosing and adjusting burner combustion is outside an inspector's scope, so referral to a qualified technician before further use is the appropriate call.",
    "id": "hvac-q003"
  },
  {
    "domain": "hvac",
    "question": "An inspector finds a natural-draft gas water heater still venting into a masonry chimney that a newer high-efficiency furnace once shared, but the furnace has since been converted to sidewall PVC venting. What is the main concern with the water heater now venting alone into that chimney?",
    "choices": [
      "The chimney may now be oversized ('orphaned') for the water heater alone, causing flue gases to cool, condense, and fail to draft properly, risking backdrafting",
      "The chimney will draft too strongly and blow out the water heater's pilot light",
      "The furnace conversion has no effect on the water heater's venting performance",
      "The water heater will need a larger gas valve to compensate"
    ],
    "answerIndex": 0,
    "explanation": "Removing one appliance's flue gas contribution often leaves a chimney oversized for the appliance still using it. The reduced volume of hot gas can cool and condense before exiting, and the chimney may fail to draft properly, allowing combustion gases to spill back into the home.",
    "id": "hvac-q004"
  },
  {
    "domain": "hvac",
    "question": "During a winter inspection, a heat pump's outdoor unit periodically emits what looks like steam for a few minutes before returning to normal operation. This is most likely:",
    "choices": [
      "A normal defrost cycle, where the system briefly reverses to melt frost or ice off the outdoor coil",
      "A refrigerant leak requiring immediate system shutdown",
      "Evidence that the compressor is failing",
      "A sign the unit is oversized for the home"
    ],
    "answerIndex": 0,
    "explanation": "In cold, humid weather, heat pumps periodically run a defrost cycle, briefly reversing refrigerant flow so the outdoor coil warms and sheds frost. The visible plume is condensing water vapor, and this is normal, expected operation.",
    "id": "hvac-q005"
  },
  {
    "domain": "hvac",
    "question": "After running the air conditioning system, the inspector notices ice forming on the refrigerant line set near the outdoor condenser. Which of the following is the LEAST likely cause?",
    "choices": [
      "An oversized condensate drain line",
      "Low refrigerant charge",
      "A dirty or restricted air filter reducing airflow across the evaporator coil",
      "A failing blower motor reducing indoor airflow"
    ],
    "answerIndex": 0,
    "explanation": "Condensate line sizing has nothing to do with refrigerant line icing. Icing typically results from reduced airflow across the indoor coil (dirty filter, weak blower) or low refrigerant charge, both of which drop the coil's surface temperature below freezing.",
    "id": "hvac-q006"
  },
  {
    "domain": "hvac",
    "question": "A central air conditioning system cycles on and off every few minutes rather than running a full cooling cycle. Besides a malfunctioning control, which condition commonly causes this 'short cycling'?",
    "choices": [
      "An air conditioner that is oversized relative to the home's cooling load",
      "A thermostat located in a hallway",
      "A properly charged refrigerant system",
      "A clean air filter"
    ],
    "answerIndex": 0,
    "explanation": "An oversized AC unit cools the space quickly and satisfies the thermostat before completing a full dehumidification cycle, leading to frequent short cycling, poor humidity control, and added compressor wear.",
    "id": "hvac-q007"
  },
  {
    "domain": "hvac",
    "question": "An inspector notices dark, sooty residue around an oil furnace's burner door and on nearby basement surfaces. This is most consistent with:",
    "choices": [
      "A 'puffback,' a minor delayed-ignition combustion event inside the firebox",
      "Normal condensation on the burner assembly",
      "A wiring issue with the digital thermostat",
      "Overfilling of the oil storage tank"
    ],
    "answerIndex": 0,
    "explanation": "A puffback occurs when unburned oil vapor accumulates and ignites suddenly, forcing soot out through cabinet seams and cracks. It signals a combustion or ignition problem needing service and can leave costly soot damage throughout the house.",
    "id": "hvac-q008"
  },
  {
    "domain": "hvac",
    "question": "On a hydronic (hot water) boiler system, what is the primary function of the expansion tank?",
    "choices": [
      "To absorb the increase in water volume as the system heats up, preventing excessive pressure buildup",
      "To store extra fuel oil for the burner",
      "To remove dissolved oxygen from the boiler water",
      "To provide combustion air to the burner"
    ],
    "answerIndex": 0,
    "explanation": "Water expands as it heats. The expansion tank provides a cushion of compressible air (or a bladder) to absorb that volume increase, keeping system pressure within a safe range and protecting the relief valve from constantly weeping.",
    "id": "hvac-q009"
  },
  {
    "domain": "hvac",
    "question": "A furnace and water heater share a small mechanical closet. After a new, tightly sealed exterior door is installed nearby, the inspector detects flue gas spillage at the water heater's draft hood whenever the furnace blower runs. What is the most likely explanation?",
    "choices": [
      "The furnace blower is depressurizing the space enough to overcome the water heater's weak natural draft, pulling flue gases back into the room",
      "The water heater's anode rod has failed",
      "The new door has increased the chimney's draft",
      "The furnace's AFUE rating is too high for the water heater to function alongside it"
    ],
    "answerIndex": 0,
    "explanation": "Air-handler operation, exhaust fans, or a tightened building envelope can depressurize a house relative to outdoors. A naturally vented appliance like a standard water heater has very little draft force to overcome that pressure difference, so it can backdraft and spill combustion gases into the room.",
    "id": "hvac-q010"
  },
  {
    "domain": "hvac",
    "question": "A gas furnace and water heater sit in a small, enclosed mechanical closet with no direct outdoor combustion air connection. Using typical fuel gas code sizing for two permanent openings (one high, one low) to the outdoors, how much free vent area is required per 1,000 Btu/h of total appliance input?",
    "choices": [
      "1 square inch per opening",
      "4 square inches per opening",
      "1 square inch total, split evenly between the two openings",
      "Openings are not required as long as the appliances are properly vented"
    ],
    "answerIndex": 0,
    "explanation": "For a confined space communicating directly with the outdoors, code typically requires two permanent openings, one within 12 inches of the ceiling and one within 12 inches of the floor, each sized at a minimum of 1 square inch of free area per 1,000 Btu/h of combined appliance input.",
    "id": "hvac-q011"
  },
  {
    "domain": "hvac",
    "question": "Which statement about split-system central air conditioners is correct?",
    "choices": [
      "The refrigerant suction line (the larger, insulated line) should remain fully insulated along its accessible length to prevent efficiency loss and condensation",
      "Refrigerant lines never need insulation because refrigerant does not conduct heat",
      "The liquid line is always the larger of the two refrigerant lines",
      "Line set insulation is purely cosmetic and has no effect on performance"
    ],
    "answerIndex": 0,
    "explanation": "The suction line carries cool refrigerant gas back to the compressor. Missing or damaged insulation lets the line sweat, wastes cooling capacity, and can drip condensation, potentially causing water damage or mold growth.",
    "id": "hvac-q012"
  },
  {
    "domain": "hvac",
    "question": "A split-system air handler sits in an attic above finished living space, with no secondary drain pan or float/safety switch on the condensate system. Why is this a significant concern?",
    "choices": [
      "If the primary condensate line clogs, water can overflow with no automatic shutoff, causing ceiling and drywall damage below",
      "It only affects the unit's cooling efficiency, not water damage risk",
      "Attic air handlers are exempt from condensate management requirements",
      "It means the refrigerant charge cannot be checked"
    ],
    "answerIndex": 0,
    "explanation": "Attic-installed air handlers carry elevated water-damage risk, since any clogged primary drain can overflow directly onto ceilings below. A secondary pan with a float switch (or a safety switch in the primary line) shuts the unit down before that overflow occurs, so its absence is worth flagging.",
    "id": "hvac-q013"
  },
  {
    "domain": "hvac",
    "question": "An inspector observes a condensate drain line running nearly level, with a slight upward pitch in one section, from the evaporator coil to its termination point. What is the concern?",
    "choices": [
      "Standing water in the line can cause slow drainage, clogs, and potential overflow at the coil's drain pan",
      "There is no concern, since gravity always finds a path eventually",
      "It indicates the refrigerant charge is low",
      "It means the system is oversized for the space"
    ],
    "answerIndex": 0,
    "explanation": "Condensate lines should maintain a continuous downward slope (commonly cited at roughly 1/8 inch of fall per foot) to their termination point. Level or back-pitched sections trap water, encouraging algae growth, clogs, and pan overflows.",
    "id": "hvac-q014"
  },
  {
    "domain": "hvac",
    "question": "What is the primary safety purpose of a furnace's limit switch?",
    "choices": [
      "To shut off the burner and/or blower if the furnace's internal temperature rises above a safe threshold, preventing heat exchanger damage or fire",
      "To control the thermostat's cooling setpoint",
      "To regulate gas pressure at the manifold",
      "To ignite the pilot light or hot surface igniter"
    ],
    "answerIndex": 0,
    "explanation": "The limit switch senses excessive plenum or heat exchanger temperature, usually from restricted airflow, and shuts down the burner to prevent overheating, a cracked heat exchanger, or fire.",
    "id": "hvac-q015"
  },
  {
    "domain": "hvac",
    "question": "An inspector finds a cracked primary heat exchanger in a forced-air gas furnace during a visual inspection. What is the appropriate course of action?",
    "choices": [
      "Recommend evaluation, and likely replacement, by a qualified HVAC contractor, since cracks can allow combustion gases including carbon monoxide into the supply air stream",
      "Note it as a minor cosmetic defect requiring no further action",
      "Recommend simply cleaning the heat exchanger",
      "Recommend increasing the furnace filter change frequency"
    ],
    "answerIndex": 0,
    "explanation": "A cracked heat exchanger can let flue gases, including carbon monoxide, mix with the conditioned air the blower distributes through the house. This is a safety hazard requiring prompt evaluation, not a cosmetic issue.",
    "id": "hvac-q016"
  },
  {
    "domain": "hvac",
    "question": "A two-story home has one central return-air grille on the first floor and no return ducts upstairs. The inspector notices upstairs bedroom doors are barely undercut and stay mostly closed. What performance issue does this design tend to cause?",
    "choices": [
      "Pressure imbalances between rooms that reduce airflow and comfort, and can even affect draft on combustion appliances in pressurized or depressurized spaces",
      "Improved overall efficiency, since closed doors conserve conditioned air",
      "No effect, since supply registers alone determine comfort",
      "Lower humidity levels throughout the home"
    ],
    "answerIndex": 0,
    "explanation": "Without adequate return air pathways, closed doors trap supply air in a room, pressurizing it while depressurizing central return areas. This starves rooms of proper airflow and can create pressure differentials strong enough to affect draft on nearby combustion appliances.",
    "id": "hvac-q017"
  },
  {
    "domain": "hvac",
    "question": "Which of the following is NOT a typical inspection limitation regarding HVAC systems under standard home inspection Standards of Practice?",
    "choices": [
      "Inspectors are expected to determine the exact remaining useful life of a compressor",
      "Inspectors are not required to perform a Manual J heating/cooling load calculation",
      "Inspectors are not required to disassemble equipment or measure refrigerant charge with gauges",
      "Inspectors are not required to inspect the interior of flues or chimneys that are not readily accessible"
    ],
    "answerIndex": 0,
    "explanation": "Standards of Practice such as InterNACHI's and ASHI's explicitly state inspectors are not required to determine the remaining life of any system or component; predicting exact remaining service life falls outside a visual, non-invasive inspection's scope.",
    "id": "hvac-q018"
  },
  {
    "domain": "hvac",
    "question": "A heat pump's thermostat shows an 'AUX' or 'EM HEAT' indicator illuminated for extended periods during moderately cold, not extreme, weather. What should the inspector suspect?",
    "choices": [
      "The heat pump may not be adequately meeting the heating load on its own, possibly due to low refrigerant charge, a failing compressor, or misadjusted controls, causing excessive reliance on backup electric resistance heat",
      "The system is operating exactly as designed regardless of outdoor temperature",
      "The thermostat batteries need replacement",
      "The condensate line is clogged"
    ],
    "answerIndex": 0,
    "explanation": "Auxiliary/emergency heat strips are meant to supplement the heat pump only in very cold weather or during defrost. Frequent or extended auxiliary heat use in mild conditions suggests the heat pump itself isn't keeping up, which can point to a refrigerant, compressor, or control problem, and drives up electric bills.",
    "id": "hvac-q019"
  },
  {
    "domain": "hvac",
    "question": "An inspector is evaluating a gas-fired furnace's vent connector, the pipe running from the furnace draft hood to the chimney or B-vent. Which condition would be considered a defect?",
    "choices": [
      "The vent connector pitches downward, away from the furnace, toward the chimney",
      "The vent connector pitches upward at least 1/4 inch per foot toward the chimney",
      "The vent connector is the same diameter as the furnace's draft hood outlet",
      "The vent connector is supported so that it does not sag"
    ],
    "answerIndex": 0,
    "explanation": "Vent connectors for natural-draft appliances must slope upward toward the chimney or vent termination, typically at least 1/4 inch per foot, so flue gases rise naturally by buoyancy. A downward pitch away from the appliance defeats natural draft and can allow flue gas spillage or condensate to run back into the appliance.",
    "id": "hvac-q020"
  },
  {
    "domain": "insulation",
    "question": "What is the general rule-of-thumb minimum net free ventilating area for an attic under most residential building codes?",
    "choices": [
      "1/150 of the attic floor area",
      "1/10 of the attic floor area",
      "1/1000 of the attic floor area",
      "No ventilation is required if the attic is insulated"
    ],
    "answerIndex": 0,
    "explanation": "The baseline code ratio is 1 square foot of net free vent area for every 150 square feet of attic floor area, split between intake (soffit) and exhaust (ridge/gable) vents; this can be relaxed to 1/300 when specific conditions are met.",
    "id": "insulation-q001"
  },
  {
    "domain": "insulation",
    "question": "Under the IRC, when may attic ventilation be reduced from the 1/150 ratio to 1/300 instead?",
    "choices": [
      "When 40-50% of the ventilating area is located in the upper portion of the attic, and in colder climate zones a Class I or II vapor retarder is installed on the ceiling",
      "Whenever the roof covering is asphalt shingle",
      "Whenever soffit vents are continuous along the eave",
      "The ratio can never be reduced below 1/150"
    ],
    "answerIndex": 0,
    "explanation": "The more lenient 1/300 ratio requires a balanced split of roughly 40-50% of the vent area located high (ridge/gable) and, in colder climate zones, a vapor retarder installed on the warm-in-winter side of the ceiling to limit moisture migration into the attic.",
    "id": "insulation-q002"
  },
  {
    "domain": "insulation",
    "question": "A crawlspace has bare, uncovered earth, and the inspector calculates that the vent openings only meet the reduced 1/1500 ratio rather than 1/150. What should the inspector note?",
    "choices": [
      "The vent openings are undersized for this crawlspace, because the 1/1500 reduced ratio only applies when the ground is covered with an approved vapor retarder",
      "This is compliant, since 1/1500 is always an acceptable ratio",
      "Crawlspace ventilation ratios do not depend on ground cover",
      "The crawlspace needs no vents at all in this condition"
    ],
    "answerIndex": 0,
    "explanation": "The reduced 1/1500 ventilation ratio is only permitted when the ground surface is covered by an approved vapor retarder. Bare soil without ground cover requires the full 1/150 ratio, since uncovered earth releases far more moisture vapor into the crawlspace.",
    "id": "insulation-q003"
  },
  {
    "domain": "insulation",
    "question": "Compressing fiberglass batt insulation into a space narrower than its designed thickness, such as stuffing an R-19 batt into a shallow 2x4 wall cavity, has what effect?",
    "choices": [
      "It reduces the batt's effective R-value, since compression decreases the trapped air layer that provides thermal resistance",
      "It increases the R-value because more fiberglass is packed into the space",
      "It has no effect on thermal performance",
      "It converts the batt into a vapor barrier"
    ],
    "answerIndex": 0,
    "explanation": "Fiberglass batts insulate largely through trapped air pockets between fibers. Compressing the material reduces that air volume, lowering the actual installed R-value below the batt's rated value.",
    "id": "insulation-q004"
  },
  {
    "domain": "insulation",
    "question": "What is a key difference between open-cell and closed-cell spray polyurethane foam insulation that an inspector should understand?",
    "choices": [
      "Closed-cell foam has a higher R-value per inch and acts as its own vapor retarder, while open-cell foam has a lower R-value per inch and is more vapor-permeable",
      "Open-cell foam always has a higher R-value per inch than closed-cell foam",
      "Both types are equally vapor-permeable",
      "Closed-cell foam cannot legally be used in exterior wall cavities"
    ],
    "answerIndex": 0,
    "explanation": "Closed-cell spray foam is denser, with a higher R-value per inch (roughly R-6 to R-7) and low permeability, functioning as its own vapor retarder, while open-cell foam is lighter, has a lower R-value per inch (roughly R-3.5 to R-3.7), and is more vapor-open.",
    "id": "insulation-q005"
  },
  {
    "domain": "insulation",
    "question": "In an attic, the inspector finds blown-in insulation piled up against and covering the soffit vents, with no baffles installed. What is the most likely consequence?",
    "choices": [
      "Blocked intake airflow at the soffits, potentially leading to moisture buildup, reduced attic ventilation, and ice-damming risk in colder climates",
      "Improved R-value with no downside",
      "No effect, since ridge vents alone provide sufficient airflow",
      "The insulation will settle away from the vents on its own over time"
    ],
    "answerIndex": 0,
    "explanation": "Without baffles (rafter or wind vent chutes) to hold insulation back from the eaves, loose-fill or batt insulation can block soffit vents, cutting off the airflow path attic ventilation depends on and contributing to moisture problems or ice damming.",
    "id": "insulation-q006"
  },
  {
    "domain": "insulation",
    "question": "Where should the kraft paper facing on a faced fiberglass batt generally be installed in most U.S. climates?",
    "choices": [
      "Facing the warm-in-winter side of the assembly (typically the interior/conditioned side), so it acts as a vapor retarder",
      "Facing the exterior sheathing in all cases",
      "It does not matter which direction it faces",
      "Facing outward, toward the attic ventilation airstream"
    ],
    "answerIndex": 0,
    "explanation": "In most of the U.S., a heating-dominated climate, the vapor retarder facing should point toward the warm-in-winter side, generally the interior/conditioned space, to limit moisture-laden interior air from migrating into the cavity and condensing.",
    "id": "insulation-q007"
  },
  {
    "domain": "insulation",
    "question": "During a cold-weather inspection, frost or ice crystals are visible on the underside of the roof sheathing in an unconditioned attic. What does this most likely indicate?",
    "choices": [
      "Warm, moist household air is bypassing into the attic (through recessed lights, plumbing penetrations, an unsealed hatch, etc.) and/or attic ventilation is inadequate to remove that moisture",
      "The attic insulation R-value is too high",
      "The roof shingles are defective",
      "This is a normal, harmless seasonal occurrence requiring no comment"
    ],
    "answerIndex": 0,
    "explanation": "Frost on cold roof sheathing points to warm, humid interior air reaching the attic through air-leakage pathways faster than ventilation can exhaust it. This should be reported, since it can lead to wood rot, mold, and reduced insulation performance over time.",
    "id": "insulation-q008"
  },
  {
    "domain": "insulation",
    "question": "What is the main idea behind an 'unvented' or conditioned (encapsulated) crawlspace design, as opposed to a traditional vented crawlspace?",
    "choices": [
      "The crawlspace walls and ground are sealed and insulated, bringing the space inside the home's thermal and moisture boundary instead of venting it to the outdoors",
      "It requires more vent openings than a standard crawlspace",
      "It eliminates the need for any ground vapor retarder",
      "It is only used in hot, dry climates"
    ],
    "answerIndex": 0,
    "explanation": "In an encapsulated crawlspace, foundation vents are closed, the walls are insulated, and the ground is covered with a sealed vapor retarder, effectively moving the crawlspace inside the building's conditioned envelope instead of exposing it to variable outdoor humidity.",
    "id": "insulation-q009"
  },
  {
    "domain": "insulation",
    "question": "Approximately how does the R-value per inch of standard fiberglass batt insulation compare to closed-cell spray foam?",
    "choices": [
      "Fiberglass batt is roughly R-3 to R-3.5 per inch, while closed-cell spray foam is roughly R-6 to R-7 per inch",
      "They are essentially identical, around R-5 per inch",
      "Fiberglass batt has a much higher R-value per inch than closed-cell spray foam",
      "Neither material has a meaningful R-value per inch"
    ],
    "answerIndex": 0,
    "explanation": "Closed-cell spray foam's dense, gas-filled cell structure gives it roughly double the R-value per inch of standard fiberglass batt, which is a common reason it's chosen for cavities where thickness is limited.",
    "id": "insulation-q010"
  },
  {
    "domain": "insulation",
    "question": "An attic has continuous soffit and ridge vents that appear to meet the 1/150 ventilation ratio, yet the inspector finds significant mold growth on the roof sheathing. What should the inspector investigate further as the most likely explanation?",
    "choices": [
      "Air-sealing bypasses, such as an unsealed attic hatch or a bath fan duct that disconnects in the attic, dumping conditioned, humid air into the attic faster than ventilation can remove it",
      "The vent ratio calculation must be wrong, since adequate ventilation always prevents mold",
      "Mold cannot grow in a properly ventilated attic regardless of other conditions",
      "The roof sheathing material is the sole cause, and ventilation is irrelevant"
    ],
    "answerIndex": 0,
    "explanation": "Meeting the code ventilation ratio doesn't guarantee moisture control if large air-leakage pathways are dumping humid interior air directly into the attic. Ventilation dilutes ambient moisture but cannot overcome a large, concentrated moisture source like a disconnected exhaust duct.",
    "id": "insulation-q011"
  },
  {
    "domain": "insulation",
    "question": "A non-IC-rated recessed light fixture is installed in an insulated ceiling. What clearance does it typically require from insulation?",
    "choices": [
      "A minimum airspace clearance (commonly around 3 inches) must be maintained between the fixture and insulation to prevent overheating and fire risk",
      "Insulation may be piled directly on top of any recessed fixture",
      "No clearance is required if the fixture uses an LED bulb",
      "Clearance requirements only apply to fixtures in bathrooms"
    ],
    "answerIndex": 0,
    "explanation": "Non-IC (not insulation-contact) rated recessed fixtures generate heat that needs to dissipate; burying them directly in insulation can cause overheating and is a recognized fire hazard, so a clear air gap must be maintained unless the fixture is specifically rated for insulation contact.",
    "id": "insulation-q012"
  },
  {
    "domain": "interior",
    "question": "Per the IRC, what is the minimum height typically required for a guard protecting an open-sided walking surface, such as a balcony or landing, more than 30 inches above the grade or floor below, in a one- or two-family dwelling?",
    "choices": [
      "36 inches",
      "30 inches",
      "42 inches",
      "24 inches"
    ],
    "answerIndex": 0,
    "explanation": "The IRC generally sets 36 inches as the minimum guard height for one- and two-family dwellings (commercial and multi-family code often requires 42 inches), measured vertically from the walking surface to the top of the guard.",
    "id": "interior-q001"
  },
  {
    "domain": "interior",
    "question": "An inspector measures a stairway and finds a maximum riser height of 8-1/4 inches and a minimum tread depth of 9 inches. How should this be characterized?",
    "choices": [
      "Both dimensions fall outside common code limits (roughly 7-3/4 inch max riser, 10-inch min tread), representing a potential trip and fall hazard worth reporting",
      "This is compliant with all standard residential stair codes",
      "Only the riser height is a problem; tread depth has no standard minimum",
      "Only the tread depth is a problem; riser height has no standard maximum"
    ],
    "answerIndex": 0,
    "explanation": "Typical residential code limits maximum riser height to about 7-3/4 inches and requires a minimum tread depth around 10 inches. A riser of 8-1/4 inches and a tread of only 9 inches both exceed/fall short of these common thresholds and represent a fall hazard worth flagging.",
    "id": "interior-q002"
  },
  {
    "domain": "interior",
    "question": "Building codes commonly limit the variation between the largest and smallest riser height within a single stair flight to what maximum difference?",
    "choices": [
      "3/8 inch",
      "2 inches",
      "1 inch",
      "There is no limit as long as the average riser height is within range"
    ],
    "answerIndex": 0,
    "explanation": "Consistency between risers and treads is critical because people unconsciously expect a uniform step rhythm; codes commonly cap the variation at about 3/8 inch between the largest and smallest riser in a flight to reduce trip hazards.",
    "id": "interior-q003"
  },
  {
    "domain": "interior",
    "question": "A guard's vertical balusters are spaced so that a 6-inch sphere can pass through the gap. What should the inspector report?",
    "choices": [
      "The spacing is excessive; most residential guards must prevent passage of a sphere approximately 4 inches in diameter, primarily to keep young children from slipping through or becoming entrapped",
      "The spacing is acceptable under all residential codes",
      "Baluster spacing only matters for guards taller than 10 feet",
      "The 6-inch sphere rule always applies to guards, so this is compliant"
    ],
    "answerIndex": 0,
    "explanation": "Most residential guard openings are limited to a 4-inch sphere passage to prevent small children from squeezing through or becoming entrapped; a gap that passes a 6-inch sphere is noticeably wider than code typically allows.",
    "id": "interior-q004"
  },
  {
    "domain": "interior",
    "question": "Where a stair handrail must be graspable, what is a typical minimum and maximum mounting height (measured vertically from the nosing line) required by residential code?",
    "choices": [
      "34 inches to 38 inches",
      "20 inches to 28 inches",
      "42 inches to 48 inches",
      "There is no height requirement, only a continuous-grip requirement"
    ],
    "answerIndex": 0,
    "explanation": "Residential stair handrails are typically required to be mounted between 34 and 38 inches above the nosing line, a range chosen so most adults can grasp it effectively during a fall-arrest grab.",
    "id": "interior-q005"
  },
  {
    "domain": "interior",
    "question": "An interior stairway is measured and found to have only 6 feet 4 inches of headroom clearance at its lowest point. What should the inspector note?",
    "choices": [
      "This is below the commonly required minimum headroom clearance (typically 6 feet 8 inches), presenting a head-strike hazard",
      "6 feet 4 inches exceeds all code minimums for stair headroom",
      "Headroom clearance is not addressed by residential building codes",
      "This measurement only matters for spiral stairways"
    ],
    "answerIndex": 0,
    "explanation": "Standard residential code typically requires a minimum stairway headroom of 6 feet 8 inches, measured vertically from the nosing line. A clearance of only 6 feet 4 inches is below that threshold and could cause taller occupants to strike their head.",
    "id": "interior-q006"
  },
  {
    "domain": "interior",
    "question": "A basement bedroom's only window measures 22 inches wide by 26 inches high in its clear opening, with a sill height of 40 inches above the floor, giving a net clear opening area of roughly 4 square feet. What should the inspector conclude about this window as an emergency escape and rescue opening?",
    "choices": [
      "It likely does not meet the minimum 5.7 square foot net clear opening area typically required for a below-grade sleeping room, even though its width, height, and sill height individually pass",
      "It fully complies, since both width and height individually exceed the minimum dimensions",
      "Sill height is the only relevant factor, and 40 inches is compliant, so the window passes",
      "Basement bedrooms are not required to have any egress window"
    ],
    "answerIndex": 0,
    "explanation": "Meeting the individual minimum width (20 in) and height (24 in) alone doesn't guarantee compliance. The combined net clear opening area must also generally reach at least 5.7 square feet (5.0 sq ft at grade-level openings); a window with only about 4 square feet of clear opening falls short despite passing the individual dimension checks.",
    "id": "interior-q007"
  },
  {
    "domain": "interior",
    "question": "Which of these locations is generally considered a 'hazardous location' requiring safety glazing (tempered or laminated glass) under residential building codes?",
    "choices": [
      "A window pane larger than 9 square feet whose lowest edge is within 18 inches of the floor, located near a walking surface",
      "A small fixed transom window located 8 feet above the floor",
      "Any window on the second floor of a home",
      "A window more than 5 feet from any door or walking surface, regardless of size"
    ],
    "answerIndex": 0,
    "explanation": "Building codes identify specific hazardous locations for glazing based on proximity to the floor, doors, and walking or wet areas like tubs and showers. A large pane low to the floor near a walkway is a classic example requiring impact-resistant safety glazing to reduce injury risk if someone falls into it.",
    "id": "interior-q008"
  },
  {
    "domain": "interior",
    "question": "During a winter inspection, the inspector notices hairline drywall cracks along the ceiling where it meets several interior partition walls, but not at the exterior wall/ceiling joints. What is this pattern most consistent with?",
    "choices": [
      "Truss uplift, a seasonal condition where roof trusses bow upward in cold, dry weather and separate from interior partition top plates, cracking the drywall joint; generally cosmetic rather than structural",
      "Foundation settlement requiring immediate structural engineering evaluation",
      "An undersized ceiling joist causing structural failure",
      "Water damage from a roof leak directly above the cracks"
    ],
    "answerIndex": 0,
    "explanation": "Truss uplift occurs when the top and bottom chords of engineered roof trusses experience different moisture and temperature conditions in winter, causing the truss to bow upward in the middle. Because interior partitions don't move with the truss, the drywall joint at that connection cracks, a cosmetic, seasonal issue rather than a sign of structural failure.",
    "id": "interior-q009"
  },
  {
    "domain": "interior",
    "question": "Walking across a second-floor room, the inspector notices a noticeable 'bounce' or deflection in the floor underfoot, along with related cracking in the ceiling below. What should the inspector recommend?",
    "choices": [
      "Further evaluation by a qualified professional, such as a structural engineer, to assess whether the floor framing is undersized, overspanned, or otherwise compromised",
      "No action, since floor bounce is always purely cosmetic",
      "Simply adding carpet padding to reduce the sensation of movement",
      "Reporting it as termite damage without further evaluation"
    ],
    "answerIndex": 0,
    "explanation": "Noticeable floor deflection combined with related cracking can indicate undersized or overspanned joists, notched or bored framing members, or other structural deficiencies. Since a home inspection is visual and non-invasive, the appropriate step is recommending further evaluation rather than diagnosing the exact cause.",
    "id": "interior-q010"
  },
  {
    "domain": "interior",
    "question": "What is the minimum fire-rated door assembly commonly required between an attached garage and the living space of a dwelling, where a door serves as the separation?",
    "choices": [
      "A solid wood door at least 1-3/8 inches thick, a solid or honeycomb-core steel door of the same thickness, or a 20-minute fire-rated door",
      "Any hollow-core interior door is acceptable",
      "A door is not required if the garage has its own separate exterior entrance",
      "Only a self-closing hinge is required, with no minimum door construction"
    ],
    "answerIndex": 0,
    "explanation": "Attached garages present fire and carbon monoxide risks from vehicles and stored chemicals, so codes commonly require the door between the garage and living space to be solid-core or fire-rated (often specified as 1-3/8 inch solid wood/steel or 20-minute rated), rather than a lightweight hollow-core interior door.",
    "id": "interior-q011"
  },
  {
    "domain": "interior",
    "question": "An inspector notices a hazy film or fogging between the panes of a double-glazed (insulated glass) window. This is most likely due to:",
    "choices": [
      "Failure of the perimeter seal between the glass panes, allowing moisture to enter and condense inside the sealed air space",
      "A crack in the interior pane only",
      "Normal indoor humidity condensing on the interior glass surface",
      "UV damage to the window frame"
    ],
    "answerIndex": 0,
    "explanation": "Insulated glass units rely on a sealed, gas- or air-filled space between panes to reduce heat transfer. When the perimeter seal fails, humid air enters and condenses on the inner glass surfaces, producing a permanent foggy appearance that cleaning cannot fix, a common defect signaling the unit needs replacement.",
    "id": "interior-q012"
  },
  {
    "domain": "interior",
    "question": "What is meant by a handrail having a 'graspable' profile, and what is a commonly cited dimension for a circular handrail's cross-section to meet this standard?",
    "choices": [
      "An outside diameter between 1-1/4 inches and 2 inches, allowing fingers to wrap around it securely",
      "An outside diameter of at least 4 inches for a firmer grip",
      "Any shape is acceptable as long as it is mounted at the correct height",
      "A flat, rectangular profile is always preferred over a round one"
    ],
    "answerIndex": 0,
    "explanation": "A graspable handrail profile lets a hand wrap around and grip it firmly in a fall-arrest situation. For circular handrails, a commonly cited code dimension is an outside diameter between 1-1/4 and 2 inches; non-circular profiles have their own perimeter and cross-section requirements.",
    "id": "interior-q013"
  },
  {
    "domain": "interior",
    "question": "An inspector notices diagonal drywall cracking radiating from the upper corners of an interior door frame, and the door has begun sticking in its frame. Beyond a simple cosmetic drywall crack, what should the inspector consider?",
    "choices": [
      "Possible structural movement or settlement affecting the framing around the opening, warranting further evaluation, since door/frame racking combined with directional cracking can be more significant than an isolated hairline crack",
      "This is always normal drywall shrinkage and requires no further comment",
      "The cracks indicate a plumbing leak inside the wall",
      "This pattern is only cosmetic if the home is more than 20 years old"
    ],
    "answerIndex": 0,
    "explanation": "An isolated hairline crack is often just cosmetic drywall shrinkage, but diagonal cracking at a door or window header combined with a door that now sticks or is out of square can indicate the framing around that opening has racked or shifted, a pattern worth flagging for further structural evaluation rather than dismissing as cosmetic.",
    "id": "interior-q014"
  },
  {
    "domain": "fireplaces",
    "question": "During a general home inspection, an inspector opens and closes a fireplace damper and finds it will not fully close. According to the InterNACHI Standards of Practice, what should the inspector do?",
    "choices": [
      "Report it as a deficiency, since manually operated dampers that fail to open and close properly must be reported",
      "Say nothing, since damper operation is outside the scope of a general home inspection",
      "Disassemble the damper mechanism to determine the cause of the malfunction",
      "Recommend the client have the chimney swept before closing"
    ],
    "answerIndex": 0,
    "explanation": "The SOP requires inspectors to operate readily accessible manually operated dampers and to report as a deficiency any damper that does not open and close. It does not require diagnosing the internal cause, only reporting the condition observed.",
    "id": "fireplaces-q001"
  },
  {
    "domain": "fireplaces",
    "question": "A client asks the inspector to climb onto the roof and look down the flue with a flashlight to check for creosote buildup inside the chimney. What is the correct response?",
    "choices": [
      "Explain that inspecting the interior of chimneys and flues is outside the scope of a general home inspection and recommend a certified chimney sweep",
      "Perform the inspection as requested since the client is paying for the service",
      "Refuse to inspect the fireplace at all once the request is made",
      "Insert a camera into the flue at an additional undisclosed fee"
    ],
    "answerIndex": 0,
    "explanation": "InterNACHI and ASHI SOPs both exclude the interior of chimneys and flues from the general inspection; a reasonably diligent inspector explains the limitation and refers the client to a qualified chimney specialist rather than attempting it.",
    "id": "fireplaces-q002"
  },
  {
    "domain": "fireplaces",
    "question": "Which condition at a wood-burning fireplace is an inspector required to report as needing correction under the InterNACHI Standards of Practice?",
    "choices": [
      "Absence of a smoke detector in the room containing the fireplace",
      "A chimney cap style the inspector personally would not have chosen",
      "The absence of a gas log lighter",
      "A wood stove installed in a different room than the fireplace"
    ],
    "answerIndex": 0,
    "explanation": "The SOP specifically requires inspectors to report the lack of a smoke detector (and lack of a carbon monoxide detector) in the room containing the fireplace, since this is a life-safety item directly tied to the fireplace's use.",
    "id": "fireplaces-q003"
  },
  {
    "domain": "fireplaces",
    "question": "A masonry fireplace hearth extension shows a visible crack running through the surface material. Per the SOP, what is the inspector's obligation?",
    "choices": [
      "Report the damage or deterioration of the hearth as observed",
      "Repair the crack with mortar so the defect does not affect the sale",
      "Ignore it since hearth cosmetics are not part of the SOP",
      "Require the seller to replace the entire hearth before closing"
    ],
    "answerIndex": 0,
    "explanation": "Inspectors must report damage or deterioration of the hearth. They report observed conditions; they do not perform repairs or dictate remedies, which are matters between the parties to the transaction.",
    "id": "fireplaces-q004"
  },
  {
    "domain": "fireplaces",
    "question": "What is the primary purpose of a spark arrestor installed at the top of a chimney?",
    "choices": [
      "To prevent embers and sparks from exiting the flue and landing on a combustible roof or nearby vegetation",
      "To increase the draft so smoke exits faster",
      "To filter carbon monoxide from the flue gases before they are released",
      "To seal the flue completely when the fireplace is not in use"
    ],
    "answerIndex": 0,
    "explanation": "A spark arrestor is a mesh screen that stops sparks and embers from escaping the chimney, reducing fire risk to the roof and surrounding combustible materials; it does not filter gases or seal the flue.",
    "id": "fireplaces-q005"
  },
  {
    "domain": "fireplaces",
    "question": "During inspection of a direct-vent gas fireplace, the inspector notices the glass viewing panel is missing its required safety screen or barrier. What is the most appropriate action?",
    "choices": [
      "Report the missing safety barrier as a burn hazard, since the glass can reach very high surface temperatures",
      "Light the unit to confirm whether the glass actually gets hot before reporting anything",
      "Disregard it because gas fireplace components are entirely excluded from the SOP",
      "Replace the barrier before completing the report so the hazard is resolved"
    ],
    "answerIndex": 0,
    "explanation": "A reasonably diligent inspector reports visible safety hazards such as a missing protective barrier on a gas fireplace, since the glass can reach temperatures capable of causing serious burns. Inspectors describe conditions found; they do not perform repairs, and they are not required to ignite appliances to test them.",
    "id": "fireplaces-q006"
  },
  {
    "domain": "fireplaces",
    "question": "Under the InterNACHI Standards of Practice, which of the following is NOT something an inspector is required to do regarding fireplaces and chimneys?",
    "choices": [
      "Determine whether the chimney needs to be swept or cleaned",
      "Inspect the readily accessible and visible portions of the chimney exterior",
      "Describe the type of fireplace",
      "Inspect the lintel above the fireplace opening"
    ],
    "answerIndex": 0,
    "explanation": "The SOP explicitly states inspectors are not required to determine the need for a chimney sweep. Describing the fireplace type, inspecting visible chimney portions, and inspecting the lintel are all required tasks.",
    "id": "fireplaces-q007"
  },
  {
    "domain": "fireplaces",
    "question": "A free-standing wood stove is installed close to a wall with no visible clearance reduction system (such as a listed heat shield) and no manufacturer's installation tag is present. What should the inspector do?",
    "choices": [
      "Report the installation as a potential clearance-to-combustibles concern and recommend evaluation by a qualified specialist since proper clearance cannot be verified",
      "Measure the wall temperature during a live fire to determine if the clearance is adequate",
      "Assume the installation is correct since the stove is manufactured and pre-approved",
      "Require the homeowner to remove the wood stove immediately"
    ],
    "answerIndex": 0,
    "explanation": "Without a visible listing plate or documented clearance-reduction system, the inspector cannot verify the installation meets manufacturer or code clearance requirements, so the correct action is to flag the concern and refer it to a qualified specialist rather than assume compliance or attempt to test it.",
    "id": "fireplaces-q008"
  },
  {
    "domain": "fireplaces",
    "question": "What is the function of a damper in a wood-burning fireplace?",
    "choices": [
      "To control airflow through the flue, allowing it to be closed when the fireplace is not in use to reduce heat loss and open during use to vent smoke",
      "To trap creosote so it does not build up further up the flue",
      "To arrest sparks before they reach the chimney cap",
      "To ignite the gas log lighter automatically"
    ],
    "answerIndex": 0,
    "explanation": "The damper is a movable plate that regulates airflow through the flue: opened during a fire to allow smoke to vent, and closed when not in use to prevent conditioned air from escaping up the chimney.",
    "id": "fireplaces-q009"
  },
  {
    "domain": "safety",
    "question": "Which of the following is included in the scope of a general home inspection under both the InterNACHI and ASHI Standards of Practice?",
    "choices": [
      "Inspecting the readily accessible and visible structural components, electrical system, and roof",
      "Determining the presence of pests such as termites or rodents",
      "Verifying compliance with local building codes",
      "Predicting the remaining useful life of every system in the home"
    ],
    "answerIndex": 0,
    "explanation": "General home inspections cover visible, accessible systems and components including structure, electrical, plumbing, HVAC, and roofing. Pest determinations, code compliance verification, and life-expectancy predictions are explicitly excluded under both standards.",
    "id": "safety-q001"
  },
  {
    "domain": "safety",
    "question": "While inspecting an attic, the inspector notices the only access is a pull-down ladder leading to insulation that appears to conceal the joists, with no visible walking surface. What is the appropriate course of action?",
    "choices": [
      "Inspect from the accessible entry point only and note in the report that full access was limited due to unsafe walking conditions",
      "Walk carefully between the joists anyway to complete a full inspection",
      "Skip any mention of the attic in the report since it wasn't accessible",
      "Ask the client to clear the insulation before the inspector will proceed"
    ],
    "answerIndex": 0,
    "explanation": "The SOP does not require inspectors to enter areas that are unsafe or not readily accessible. The correct practice is to inspect what can be safely observed and clearly disclose the limitation, rather than risk injury or omit the area from the report entirely.",
    "id": "safety-q002"
  },
  {
    "domain": "safety",
    "question": "An inspector arrives at a property and finds the main electrical panel cover is difficult to remove because prior paint has sealed it shut. What is the best practice?",
    "choices": [
      "Attempt removal using reasonable care with basic tools; if it cannot be safely removed, report the panel as not fully accessible rather than forcing it",
      "Force the cover off with a pry bar and hammer to ensure a complete inspection",
      "Skip the electrical panel entirely and say nothing about it in the report",
      "Cut the paint seal with a utility knife directly against the energized panel"
    ],
    "answerIndex": 0,
    "explanation": "Inspectors use reasonable, non-destructive methods to gain access. When a panel cannot be safely opened, the SOP allows it to be reported as restricted or not inspected rather than requiring the inspector to force it open, which risks damage or injury.",
    "id": "safety-q003"
  },
  {
    "domain": "safety",
    "question": "According to standard safety practice for inspectors, under what condition should an inspector decline to walk on a roof?",
    "choices": [
      "When the roof pitch, wet conditions, height, or material (such as slate or deteriorated shingles) make walking unsafe",
      "Whenever the roof is more than one story tall, regardless of conditions",
      "Only if the client specifically forbids it",
      "Only when it is actively raining at the moment of inspection"
    ],
    "answerIndex": 0,
    "explanation": "Both InterNACHI and ASHI SOPs allow inspectors to examine the roof from the ground or via other means (such as binoculars or a drone) when walking it would be unsafe due to pitch, height, wetness, fragile materials, or other hazardous conditions, and to disclose that limitation.",
    "id": "safety-q004"
  },
  {
    "domain": "safety",
    "question": "A general home inspection contract typically excludes which of the following?",
    "choices": [
      "Determining the presence of environmental hazards such as mold, asbestos, or radon",
      "Inspecting the visible portions of the foundation",
      "Testing GFCI and AFCI protection devices for proper operation",
      "Operating the primary heating system using normal controls"
    ],
    "answerIndex": 0,
    "explanation": "Environmental hazard testing (mold, asbestos, radon, lead, etc.) requires specialized testing and certification and is explicitly excluded from the general home inspection scope, though inspectors may recommend further evaluation if they observe conditions suggesting a concern.",
    "id": "safety-q005"
  },
  {
    "domain": "safety",
    "question": "An inspector notices exposed, energized knob-and-tube wiring splices in an unfinished basement with no visible junction box. What is the correct response under the SOP?",
    "choices": [
      "Report it as a safety hazard requiring evaluation and correction by a licensed electrician",
      "Cover the splices with electrical tape to make the area temporarily safer",
      "Turn off the breaker to the circuit before continuing the inspection",
      "Note it only if the client specifically asks about the wiring type"
    ],
    "answerIndex": 0,
    "explanation": "Exposed splices without a proper junction box are a recognized fire and shock hazard. The SOP requires inspectors to report observed safety hazards; they do not perform repairs or alter the property's systems, such as tripping breakers or taping wiring themselves.",
    "id": "safety-q006"
  },
  {
    "domain": "safety",
    "question": "Which of the following best describes the proper use of personal protective equipment (PPE) during a home inspection?",
    "choices": [
      "PPE such as gloves, eye protection, a respirator mask, and sturdy footwear should be used as conditions warrant, particularly in crawlspaces, attics, and around electrical panels",
      "PPE is only necessary when the client requests it",
      "A hard hat is required only when inspecting commercial buildings, never residential",
      "PPE use is discouraged because it slows down the inspection process"
    ],
    "answerIndex": 0,
    "explanation": "Professional inspectors use PPE appropriate to the hazards present in a given space (confined crawlspaces, dusty attics, electrical panels, etc.) to protect themselves; this is a matter of professional safety practice, not client preference.",
    "id": "safety-q007"
  },
  {
    "domain": "safety",
    "question": "A crawlspace has standing water and a strong sewage odor. What is the most appropriate action for the inspector?",
    "choices": [
      "Decline to enter the crawlspace, report the observed conditions and the reason for limited access, and recommend further evaluation",
      "Enter without PPE since the inspection must be completed regardless of conditions",
      "Pump out the water personally so a full inspection can be performed",
      "Complete the inspection as if the crawlspace were normal and unremarkable"
    ],
    "answerIndex": 0,
    "explanation": "The SOP does not require inspectors to enter areas that pose a safety or health hazard. The correct approach is to note the hazardous condition, explain why full access was not obtained, and recommend a qualified contractor investigate further.",
    "id": "safety-q008"
  },
  {
    "domain": "safety",
    "question": "Which statement about the limitations of a general home inspection is most accurate?",
    "choices": [
      "A general home inspection is a visual, non-invasive examination of a home's condition at the time of inspection and is not a guarantee, warranty, or code-compliance inspection",
      "A general home inspection guarantees that all major systems will function properly for at least one year",
      "A general home inspection is equivalent to a municipal code-compliance inspection",
      "A general home inspection includes destructive testing of any component the inspector deems necessary"
    ],
    "answerIndex": 0,
    "explanation": "Both InterNACHI and ASHI define the general home inspection as a visual, non-invasive snapshot of observable conditions at the time of the inspection. It is not a warranty, guarantee, or code-compliance certification, and it does not involve destructive testing.",
    "id": "safety-q009"
  },
  {
    "domain": "safety",
    "question": "Why do the Standards of Practice generally exclude assessing systems and components hidden behind finished walls, under insulation, or below grade?",
    "choices": [
      "Because a general home inspection is non-invasive and limited to what is visible and readily accessible without dismantling, moving personal property, or destructive testing",
      "Because those areas are never relevant to a buyer's decision",
      "Because inspectors are not trained to understand what those areas contain",
      "Because liability insurance prohibits inspectors from mentioning hidden defects"
    ],
    "answerIndex": 0,
    "explanation": "The non-invasive nature of the inspection is the foundational limitation described in the SOP: inspectors examine what is visible and accessible without removing finishes, insulation, or personal property, and without performing destructive or invasive testing.",
    "id": "safety-q010"
  },
  {
    "domain": "safety",
    "question": "During an inspection, the client's real estate agent, who is present, asks the inspector to \"go easy\" on a cosmetic issue so it doesn't complicate the deal. What is the appropriate response?",
    "choices": [
      "Politely decline and report the condition accurately and objectively, since the inspector's duty is to the client, not the agent",
      "Agree to soften the report since the agent brings repeat business",
      "Report the issue but only verbally, leaving it out of the written report",
      "Ask the client's permission to omit the finding as a professional courtesy"
    ],
    "answerIndex": 0,
    "explanation": "An inspector's ethical duty is to report findings accurately and objectively to the client who hired them, regardless of pressure from third parties such as agents. Altering or omitting findings under outside pressure violates the inspector's duty of independence and accuracy.",
    "id": "safety-q011"
  },
  {
    "domain": "business",
    "question": "An inspector regularly receives referrals from a specific real estate agent. The agent asks to be paid a percentage of each inspection fee for referrals sent. According to InterNACHI's Code of Ethics, what should the inspector do?",
    "choices": [
      "Decline, since paying referral fees to parties with a financial interest in the transaction is prohibited and creates a conflict of interest",
      "Agree, but only disclose the arrangement to the client verbally",
      "Agree, as long as the fee is less than 10% of the inspection cost",
      "Agree, since building relationships with agents is standard business practice"
    ],
    "answerIndex": 0,
    "explanation": "The Code of Ethics prohibits compensating real estate agents or other parties with a financial interest in the transaction for referrals, because it creates a conflict of interest that could compromise the inspector's objectivity and exposes the inspector to claims of bias.",
    "id": "business-q001"
  },
  {
    "domain": "business",
    "question": "After completing an inspection, a client asks the inspector to also provide a bid to repair the deficient deck railing found during the inspection. What is the correct response under the Code of Ethics?",
    "choices": [
      "Decline to perform or bid on repairs to items covered by the inspection, since doing so creates a conflict of interest",
      "Provide the repair bid since the inspector is already familiar with the issue",
      "Perform the repair personally at a discounted rate as a courtesy",
      "Refer the client to a family member who does deck repairs without disclosing the relationship"
    ],
    "answerIndex": 0,
    "explanation": "The Code of Ethics generally prohibits inspectors from repairing or offering to repair items they identified as deficient in their own inspection report for a defined period, since profiting from the repair of a defect they reported is a direct conflict of interest.",
    "id": "business-q002"
  },
  {
    "domain": "business",
    "question": "Which of the following is the primary purpose of a pre-inspection (client services) agreement?",
    "choices": [
      "To clearly define the scope, limitations, and terms of the inspection so both the inspector and client understand what is and is not included before the inspection begins",
      "To legally waive the client's right to ever dispute the inspection report",
      "To guarantee that the inspector will find every defect in the home",
      "To transfer liability for the home's condition from the seller to the inspector"
    ],
    "answerIndex": 0,
    "explanation": "A pre-inspection agreement sets expectations up front: what will be inspected, what is excluded, and the terms of the engagement, which is essential for managing client expectations and limiting misunderstandings that lead to disputes.",
    "id": "business-q003"
  },
  {
    "domain": "business",
    "question": "Why do most professional home inspectors carry Errors & Omissions (E&O) insurance in addition to general liability insurance?",
    "choices": [
      "E&O insurance covers claims arising from mistakes, omissions, or negligent acts in professional judgment during the inspection, which general liability does not cover",
      "E&O insurance replaces the need for a pre-inspection agreement",
      "E&O insurance guarantees payment to the client if any defect is later found in the home",
      "E&O insurance is only required for inspectors who also perform repairs"
    ],
    "answerIndex": 0,
    "explanation": "General liability typically covers bodily injury and property damage, while E&O (professional liability) insurance specifically covers claims that the inspector's professional judgment, findings, or omissions in the report were negligent.",
    "id": "business-q004"
  },
  {
    "domain": "business",
    "question": "A client calls the inspector two months after the inspection, upset that a roof leak has appeared that was not noted in the report. What is the most appropriate initial response?",
    "choices": [
      "Listen to the client's concern, review the report and photos, and explain findings professionally, noting the inspection reflected conditions visible at the time and was not a guarantee against future issues",
      "Immediately admit fault and offer a full refund to avoid conflict",
      "Refuse to discuss the matter and refer the client directly to legal counsel",
      "Blame the roofing contractor without reviewing the original report first"
    ],
    "answerIndex": 0,
    "explanation": "Professional communication starts with listening and reviewing the actual documentation. A home inspection is a snapshot in time and not a warranty; explaining this calmly and factually, backed by the report and photos, is the appropriate first step before any further action.",
    "id": "business-q005"
  },
  {
    "domain": "business",
    "question": "An inspector is asked by a client to inspect a home owned by the inspector's sibling, who is selling it. What does the Code of Ethics require in this situation?",
    "choices": [
      "The inspector must disclose the relationship to the client and, in most cases, decline or ensure both parties knowingly consent to the arrangement",
      "The inspector may proceed without mentioning the relationship since siblings are not considered a conflict of interest",
      "The inspector must automatically decline all inspections involving any family member's property, with no exceptions",
      "The inspector should perform the inspection but omit the relationship from the written report only"
    ],
    "answerIndex": 0,
    "explanation": "Any relationship that could reasonably be seen as compromising objectivity, such as inspecting a family member's property for sale, must be disclosed. The Code of Ethics requires transparency about conflicts of interest so the client can make an informed decision about proceeding.",
    "id": "business-q006"
  },
  {
    "domain": "business",
    "question": "A home inspection report describes a deficiency but the inspector fails to include supporting photos or a clear location. Later, a dispute arises over whether the item was actually inspected. What professional practice would have best protected the inspector?",
    "choices": [
      "Consistent use of clear photographs, specific locations, and detailed descriptions for every reported deficiency",
      "Avoiding written reports altogether and only giving verbal summaries to reduce liability",
      "Including a blanket disclaimer that overrides the need for specific findings",
      "Limiting the report to a simple pass/fail checklist with no narrative detail"
    ],
    "answerIndex": 0,
    "explanation": "Thorough documentation, including photos and specific descriptions, is one of the strongest protections against liability disputes because it provides objective evidence of what was observed and reported at the time of inspection.",
    "id": "business-q007"
  },
  {
    "domain": "business",
    "question": "Under the InterNACHI Code of Ethics, an inspector's primary duty of honesty and objectivity is owed to whom?",
    "choices": [
      "The client who engaged the inspector for the inspection",
      "The real estate agent facilitating the transaction",
      "The seller of the property, to ensure a smooth closing",
      "The lender financing the purchase"
    ],
    "answerIndex": 0,
    "explanation": "The Code of Ethics establishes that the inspector's core duty is to the client who retained their services, not to any third party in the transaction, even though other parties may benefit from or read the report.",
    "id": "business-q008"
  },
  {
    "domain": "business",
    "question": "A prospective client asks the inspector for a firm guarantee, in writing, that no problems will arise with the home's systems for the next five years. What should the inspector do?",
    "choices": [
      "Explain that a home inspection is not a warranty and decline to provide such a guarantee, directing the client to separate home warranty products if desired",
      "Provide the guarantee to secure the job, then rely on the pre-inspection agreement to avoid ever honoring it",
      "Provide the guarantee only for major systems like HVAC and plumbing",
      "Refuse to perform the inspection at all because the client asked"
    ],
    "answerIndex": 0,
    "explanation": "A home inspection reflects conditions observed at a single point in time and is explicitly not a warranty or guarantee of future performance. Inspectors should clarify this distinction and, if the client wants ongoing protection, refer them to a separate home warranty product.",
    "id": "business-q009"
  },
  {
    "domain": "business",
    "question": "An inspector wants to advertise \"licensed, bonded, and insured\" but currently only carries general liability insurance and has let their E&O policy lapse. What is the ethical concern?",
    "choices": [
      "Advertising insurance coverage the inspector does not actually maintain is misleading to clients and violates the duty of honest representation",
      "There is no concern, since E&O insurance is optional in every jurisdiction",
      "The concern only applies if a client specifically asks about insurance before hiring",
      "This is acceptable as long as the inspector plans to renew the policy eventually"
    ],
    "answerIndex": 0,
    "explanation": "The Code of Ethics requires inspectors to represent their qualifications, services, and coverage truthfully. Advertising insurance coverage that has lapsed misrepresents the inspector's actual protections to the client and is a breach of professional honesty.",
    "id": "business-q010"
  }
];
const FLASHCARDS = [
  {
    "domain": "structural",
    "term": "Platform Framing",
    "definition": "A wood framing method where each floor is built as a complete, separate platform (subfloor deck) before the walls for that level are erected on top of it. It is the dominant residential framing method used today and naturally interrupts stud bays at each floor line.",
    "id": "structural-f001"
  },
  {
    "domain": "structural",
    "term": "Balloon Framing",
    "definition": "An older wood framing method in which wall studs run continuously from the foundation sill plate all the way to the roof, with floor joists attached to the sides of the studs rather than resting on a platform. Its continuous stud bays can allow fire to spread quickly between floors unless fireblocking is present.",
    "id": "structural-f002"
  },
  {
    "domain": "structural",
    "term": "Bearing Wall",
    "definition": "A wall that carries structural load from the roof or floors above down to the foundation, in addition to its own weight. Removing or altering a bearing wall without proper support (such as a header or beam) can cause sagging or collapse of the structure above it.",
    "id": "structural-f003"
  },
  {
    "domain": "structural",
    "term": "Header (Lintel)",
    "definition": "A horizontal structural member placed above a door, window, or other opening in a wall to carry the load that would otherwise pass through the missing studs, transferring it to the framing on either side of the opening.",
    "id": "structural-f004"
  },
  {
    "domain": "structural",
    "term": "Sistering",
    "definition": "A repair technique in which a new joist, rafter, or beam is fastened alongside an existing damaged or undersized member to add strength and stiffness, effectively sharing the load between the old and new pieces.",
    "id": "structural-f005"
  },
  {
    "domain": "structural",
    "term": "Truss Uplift",
    "definition": "A seasonal condition in which the bottom chord of an attic truss stays warmer and drier than the top chord, causing the truss to arch slightly and create a gap between the ceiling and interior partition walls in cold weather. It is typically cosmetic and self-corrects with the seasons.",
    "id": "structural-f006"
  },
  {
    "domain": "structural",
    "term": "Efflorescence",
    "definition": "A white, powdery mineral deposit that forms on the surface of masonry when water carrying dissolved salts migrates through the material and evaporates, leaving the salts behind. It signals past or ongoing moisture movement through the masonry, not a structural defect by itself.",
    "id": "structural-f007"
  },
  {
    "domain": "structural",
    "term": "Differential Settlement",
    "definition": "Uneven settling of a foundation in which one section sinks more than another, often due to inconsistent soil bearing capacity, expansive clay soils, or poor compaction, resulting in diagonal or stair-step cracking and racked door and window frames.",
    "id": "structural-f008"
  },
  {
    "domain": "structural",
    "term": "Rafter Tie",
    "definition": "A horizontal framing member (often the ceiling joist) that connects opposing rafters near the top of the wall plates to resist the outward thrust that sloped rafters exert, preventing the exterior walls from spreading apart.",
    "id": "structural-f009"
  },
  {
    "domain": "structural",
    "term": "Girder (Beam)",
    "definition": "A large horizontal structural member, often supported by posts or piers, that carries the load of floor joists framing into it from both sides and transfers that load down to the foundation.",
    "id": "structural-f010"
  },
  {
    "domain": "structural",
    "term": "Engineered I-Joist",
    "definition": "A manufactured floor or roof joist with top and bottom flanges (often laminated veneer lumber) connected by a thin web (often OSB), designed for long, straight spans with minimal deflection. Flanges must never be notched or drilled, and web penetrations must follow the manufacturer's published specifications.",
    "id": "structural-f011"
  },
  {
    "domain": "structural",
    "term": "Notching (framing member)",
    "definition": "Cutting a rectangular section out of the edge of a joist, rafter, or beam, typically to route pipes or ducts. Code strictly limits notch depth and location because notching in the middle third of a span, or on the tension edge, removes material where bending stress is highest.",
    "id": "structural-f012"
  },
  {
    "domain": "exterior",
    "term": "Kick-out Flashing",
    "definition": "A small, diverting piece of flashing installed at the bottom termination of a roof-to-sidewall intersection, typically near a gutter, that directs roof runoff outward into the gutter instead of letting it flow behind the siding into the wall.",
    "id": "exterior-f001"
  },
  {
    "domain": "exterior",
    "term": "Weep Holes",
    "definition": "Small, intentional gaps left in the mortar joints near the base of a masonry veneer wall that allow moisture trapped in the wall cavity to drain out and allow air circulation for drying. Blocking or sealing them traps moisture behind the veneer.",
    "id": "exterior-f002"
  },
  {
    "domain": "exterior",
    "term": "Ledger Board",
    "definition": "The horizontal framing member bolted to a house's rim joist that supports one end of an attached deck. It must be through-bolted or lag-screwed (never just nailed) and properly flashed, since it is a critical structural connection prone to water intrusion and past collapse failures.",
    "id": "exterior-f003"
  },
  {
    "domain": "exterior",
    "term": "Guard (Guardrail)",
    "definition": "A protective barrier required along open-sided walking surfaces, such as decks and porches, more than 30 inches above grade, generally required to be at least 36 inches tall with openings that prevent a 4-inch sphere from passing through.",
    "id": "exterior-f004"
  },
  {
    "domain": "exterior",
    "term": "Positive Drainage (Grading)",
    "definition": "Ground graded so that it slopes away from the foundation, typically falling at least 6 inches over the first 10 feet, so surface water flows away from the building rather than pooling against or soaking into the foundation area.",
    "id": "exterior-f005"
  },
  {
    "domain": "exterior",
    "term": "Retaining Wall",
    "definition": "A wall built to hold back soil at a change in grade. Walls above roughly 4 feet in height generally require engineered design and a permit due to the substantial lateral soil (and often hydrostatic) pressure involved, and should include drainage provisions such as weep holes or a drain pipe.",
    "id": "exterior-f006"
  },
  {
    "domain": "exterior",
    "term": "Fiber-Cement Siding",
    "definition": "A composite siding material made from cement, sand, and cellulose fibers, valued for its resistance to rot, insects, and fire compared to wood. Cut edges and fastener penetrations must be sealed or primed per manufacturer instructions to prevent moisture absorption.",
    "id": "exterior-f007"
  },
  {
    "domain": "exterior",
    "term": "Drainage Plane",
    "definition": "The water-resistive layer (such as housewrap or building paper) installed behind exterior cladding, shingled from the bottom up so each layer overlaps the one below it, designed to intercept any moisture that gets past the siding and direct it back out of the wall assembly.",
    "id": "exterior-f008"
  },
  {
    "domain": "exterior",
    "term": "Fascia",
    "definition": "The horizontal trim board that runs along the lower edge of the roofline, covering the ends of the rafters or trusses and typically providing the mounting surface for gutters.",
    "id": "exterior-f009"
  },
  {
    "domain": "exterior",
    "term": "Soffit",
    "definition": "The finished underside of a roof overhang, connecting the fascia to the exterior wall. Soffits are frequently vented to provide intake air for attic ventilation and are a common location for missing or blocked vents.",
    "id": "exterior-f010"
  },
  {
    "domain": "roofing",
    "term": "Step Flashing",
    "definition": "A series of individual, L-shaped metal flashing pieces installed one per shingle course along a roof-to-sidewall intersection, each overlapping the piece below it so water is shed continuously down the roof and away from the wall.",
    "id": "roofing-f001"
  },
  {
    "domain": "roofing",
    "term": "Counter-Flashing",
    "definition": "A separate piece of flashing set into a mortar joint or wall cladding above base or step flashing, lapping down over it to keep water from getting behind the flashing system at a chimney or wall intersection.",
    "id": "roofing-f002"
  },
  {
    "domain": "roofing",
    "term": "Valley Flashing",
    "definition": "Flashing installed where two roof planes meet at an internal angle. An open valley exposes a metal or membrane channel with shingles trimmed back on each side, while a closed valley conceals the flashing beneath overlapping or woven shingles.",
    "id": "roofing-f003"
  },
  {
    "domain": "roofing",
    "term": "Cricket (Saddle)",
    "definition": "A small, peaked structure built on the ridge (uphill) side of a chimney or other wide roof penetration to divert water and debris around it rather than letting them accumulate against it. Required by the IRC when the penetration's width exceeds 30 inches.",
    "id": "roofing-f004"
  },
  {
    "domain": "roofing",
    "term": "Drip Edge",
    "definition": "A metal flashing installed along the eaves and rakes of a roof that extends past the roof deck edge, directing water off the roof and away from the fascia and sheathing instead of allowing it to wick back underneath the roofing material.",
    "id": "roofing-f005"
  },
  {
    "domain": "roofing",
    "term": "Ice Barrier (Ice-and-Water Shield)",
    "definition": "A self-adhering waterproof membrane (or doubled underlayment) installed along the eaves in regions with a history of ice damming, required to extend at least 24 inches inside the exterior wall line so it still protects the deck if an ice dam backs water up the roof.",
    "id": "roofing-f006"
  },
  {
    "domain": "roofing",
    "term": "Net Free Ventilating Area (NFVA)",
    "definition": "The actual open, unobstructed area of a vent available for airflow, after accounting for louvers and insect screening. The IRC's default minimum attic ventilation requirement is 1/150 of the attic floor area, reducible to 1/300 only when intake and exhaust are balanced and other conditions are met.",
    "id": "roofing-f007"
  },
  {
    "domain": "roofing",
    "term": "Underlayment",
    "definition": "A water-resistive layer (such as asphalt-saturated felt or synthetic sheet material) installed directly on the roof deck beneath the finished roofing material, providing a secondary barrier against moisture intrusion and often required in extra layers on low-slope sections.",
    "id": "roofing-f008"
  },
  {
    "domain": "roofing",
    "term": "Granule Loss",
    "definition": "The shedding of the protective mineral granules from the surface of asphalt shingles, often visible as bald or shiny spots or as grit accumulating in gutters. Significant granule loss exposes the asphalt layer to UV degradation and typically signals a shingle nearing the end of its service life.",
    "id": "roofing-f009"
  },
  {
    "domain": "roofing",
    "term": "Balanced Attic Ventilation",
    "definition": "A ventilation design that pairs low intake vents (typically at the soffit or eave) with high exhaust vents (typically at the ridge or gables) so air flows continuously across the underside of the roof deck. Blocking intake vents, often with insulation, undermines the whole system even if exhaust vents remain clear.",
    "id": "roofing-f010"
  },
  {
    "domain": "plumbing",
    "term": "Trap",
    "definition": "A curved section of drainpipe, such as a P-trap, installed beneath a fixture that holds standing water to block sewer gases from entering the living space while still allowing wastewater to drain.",
    "id": "plumbing-f001"
  },
  {
    "domain": "plumbing",
    "term": "Trap seal",
    "definition": "The depth of standing water retained in a trap, generally required to be between 2 and 4 inches, deep enough to block sewer gas but shallow enough not to impede drainage.",
    "id": "plumbing-f002"
  },
  {
    "domain": "plumbing",
    "term": "Vent stack",
    "definition": "Piping connected to the drainage system that admits air to relieve pressure differences, preventing trap seals from being siphoned or blown out, and that carries sewer gases safely above the roofline.",
    "id": "plumbing-f003"
  },
  {
    "domain": "plumbing",
    "term": "Cross-connection",
    "definition": "Any actual or potential connection between a potable water supply and a source of contamination or non-potable water, creating a risk of backflow into the drinking water system.",
    "id": "plumbing-f004"
  },
  {
    "domain": "plumbing",
    "term": "Backflow preventer / RPZ",
    "definition": "A device, such as a reduced pressure zone (RPZ) assembly or vacuum breaker, installed to stop contaminated water from flowing backward into the potable water supply.",
    "id": "plumbing-f005"
  },
  {
    "domain": "plumbing",
    "term": "Air gap",
    "definition": "A physical, unobstructed vertical space between a water outlet and the flood-level rim of a fixture, considered the most reliable form of backflow prevention because no mechanical parts can fail.",
    "id": "plumbing-f006"
  },
  {
    "domain": "plumbing",
    "term": "TPR valve",
    "definition": "Temperature and pressure relief valve installed on a water heater tank; it opens automatically to release water if the tank exceeds safe temperature (commonly around 210°F) or pressure (commonly around 150 psi) limits, preventing tank rupture.",
    "id": "plumbing-f007"
  },
  {
    "domain": "plumbing",
    "term": "Cleanout",
    "definition": "An accessible fitting installed in drain piping, such as at the base of a stack or at major direction changes, that allows a plumber to insert equipment to clear blockages.",
    "id": "plumbing-f008"
  },
  {
    "domain": "plumbing",
    "term": "Dielectric union",
    "definition": "A fitting used to join dissimilar metal pipes, such as copper and galvanized steel, that electrically isolates them to slow galvanic corrosion at the joint.",
    "id": "plumbing-f009"
  },
  {
    "domain": "plumbing",
    "term": "Water hammer arrestor",
    "definition": "A device containing a cushioned air chamber or piston installed near quick-closing valves to absorb the pressure surge that causes banging noises in supply piping.",
    "id": "plumbing-f010"
  },
  {
    "domain": "plumbing",
    "term": "Sediment trap (drip leg)",
    "definition": "A short, capped vertical section of gas piping installed just ahead of an appliance's gas controls to catch scale, rust, and moisture before they reach the burner or valve.",
    "id": "plumbing-f011"
  },
  {
    "domain": "plumbing",
    "term": "Expansion tank",
    "definition": "A small tank with an internal air bladder connected to a water heater supply line that absorbs the increased volume of heated water in a closed plumbing system, preventing excess pressure buildup.",
    "id": "plumbing-f012"
  },
  {
    "domain": "plumbing",
    "term": "PEX",
    "definition": "Cross-linked polyethylene tubing, a flexible plastic supply piping material commonly color-coded red (hot), blue (cold), or white/gray (either), joined with crimp, clamp, or push-fit fittings.",
    "id": "plumbing-f013"
  },
  {
    "domain": "plumbing",
    "term": "Galvanized steel pipe",
    "definition": "Rigid, threaded steel supply piping coated with zinc, common in homes built before the 1960s-70s, prone to internal corrosion and scale buildup that restricts flow as it ages beyond its typical 40-50 year service life.",
    "id": "plumbing-f014"
  },
  {
    "domain": "electrical",
    "term": "Service entrance",
    "definition": "The conductors and equipment, including the point of attachment and service entrance conductors, that bring electrical power from the utility's line to the building's meter and main panel.",
    "id": "electrical-f001"
  },
  {
    "domain": "electrical",
    "term": "Main panel",
    "definition": "The primary electrical panel containing the service disconnect, where the system neutral is bonded to ground and to the grounding electrode system before power is distributed to branch circuits.",
    "id": "electrical-f002"
  },
  {
    "domain": "electrical",
    "term": "Sub-panel",
    "definition": "A secondary distribution panel fed from the main panel that must keep its neutral and equipment grounding conductors on separate, unbonded bars, unlike the main panel.",
    "id": "electrical-f003"
  },
  {
    "domain": "electrical",
    "term": "Grounding electrode",
    "definition": "A conductive element, such as a driven ground rod, qualifying metal underground water pipe, or concrete-encased electrode (Ufer ground), that connects the electrical system to the earth.",
    "id": "electrical-f004"
  },
  {
    "domain": "electrical",
    "term": "Bonding",
    "definition": "The practice of electrically connecting metal parts of a building's systems, such as water piping and equipment enclosures, to ensure they share a common electrical potential and provide a safe path back to ground during a fault.",
    "id": "electrical-f005"
  },
  {
    "domain": "electrical",
    "term": "GFCI",
    "definition": "Ground-fault circuit interrupter; a protective device that detects a small imbalance between hot and neutral current and rapidly cuts power to reduce the risk of electric shock, required in areas like kitchens, bathrooms, garages, and outdoor locations.",
    "id": "electrical-f006"
  },
  {
    "domain": "electrical",
    "term": "AFCI",
    "definition": "Arc-fault circuit interrupter; a protective device that detects the electrical signature of dangerous arcing in damaged or degraded wiring and interrupts the circuit to reduce fire risk, required on most residential living-area branch circuits.",
    "id": "electrical-f007"
  },
  {
    "domain": "electrical",
    "term": "Knob-and-tube wiring",
    "definition": "An early wiring method using individual insulated conductors supported through ceramic knobs and tubes, lacking an equipment ground, and considered a fire hazard risk when covered by insulation.",
    "id": "electrical-f008"
  },
  {
    "domain": "electrical",
    "term": "Aluminum branch circuit wiring",
    "definition": "Solid aluminum conductors used for branch circuits mainly from about 1965 to 1973, associated with loosening, oxidation, and overheating at connections unless properly remediated with approved connectors, antioxidant compound, or CO/ALR-rated devices.",
    "id": "electrical-f009"
  },
  {
    "domain": "electrical",
    "term": "Double-tapped breaker",
    "definition": "A condition where two conductors are installed under a single breaker terminal not designed or listed to secure more than one wire, risking a loose connection, arcing, and overheating.",
    "id": "electrical-f010"
  },
  {
    "domain": "electrical",
    "term": "Reversed polarity",
    "definition": "A wiring error in which the hot and neutral conductors are connected to the wrong terminals of a receptacle, potentially energizing parts of a connected device that are normally not live.",
    "id": "electrical-f011"
  },
  {
    "domain": "electrical",
    "term": "Open ground",
    "definition": "A condition in which a receptacle or circuit lacks a functioning equipment grounding conductor connection, removing a safe fault-current path and increasing shock risk from connected metal appliance frames.",
    "id": "electrical-f012"
  },
  {
    "domain": "electrical",
    "term": "Federal Pacific Stab-Lok panel",
    "definition": "A brand of electrical panel widely installed from the 1950s through 1980s, documented in independent testing to have breakers that frequently fail to trip under overload or short-circuit conditions, a recognized safety concern with no reliable field test to identify which breakers are affected.",
    "id": "electrical-f013"
  },
  {
    "domain": "electrical",
    "term": "NM cable (Romex)",
    "definition": "Non-metallic sheathed cable, the standard modern residential wiring method consisting of insulated hot and neutral conductors plus a ground conductor within a flat plastic outer jacket.",
    "id": "electrical-f014"
  },
  {
    "domain": "electrical",
    "term": "Tandem breaker",
    "definition": "A narrow, half-height circuit breaker that fits two circuits into the space of one standard breaker slot, permitted only in panels specifically listed by the manufacturer to accept them in designated locations.",
    "id": "electrical-f015"
  },
  {
    "domain": "hvac",
    "term": "AFUE (Annual Fuel Utilization Efficiency)",
    "definition": "A ratio of annual heat output to annual fuel energy input for a furnace or boiler; higher percentages mean more of the fuel's energy becomes usable heat rather than being lost up the flue.",
    "id": "hvac-f001"
  },
  {
    "domain": "hvac",
    "term": "Heat Exchanger",
    "definition": "The component in a furnace that transfers heat from combustion gases to the circulating air stream without letting the two mix; a cracked heat exchanger can leak carbon monoxide into the supply air and is a serious safety hazard.",
    "id": "hvac-f002"
  },
  {
    "domain": "hvac",
    "term": "Backdrafting",
    "definition": "When combustion gases from a naturally vented appliance spill into the living space instead of exiting through the flue, often caused by depressurization from exhaust fans, a clothes dryer, or air handlers.",
    "id": "hvac-f003"
  },
  {
    "domain": "hvac",
    "term": "Category I Vent",
    "definition": "A venting system for a natural-draft, non-condensing gas appliance that operates with negative vent pressure and flue gas temperatures high enough to avoid sustained condensation in the vent.",
    "id": "hvac-f004"
  },
  {
    "domain": "hvac",
    "term": "Defrost Cycle",
    "definition": "A heat pump's periodic reversal into cooling mode to melt frost or ice off the outdoor coil during cold weather; the resulting steam-like vapor from the outdoor unit is normal, expected behavior.",
    "id": "hvac-f005"
  },
  {
    "domain": "hvac",
    "term": "Short Cycling",
    "definition": "Repeated on/off operation of HVAC equipment in short intervals, often caused by an oversized unit, a dirty filter, a faulty thermostat, or a safety control repeatedly tripping.",
    "id": "hvac-f006"
  },
  {
    "domain": "hvac",
    "term": "Condensate Line",
    "definition": "The drain line carrying water removed from the air by an evaporator coil (or produced by a condensing furnace) to a suitable disposal point; it should maintain a continuous downward slope to avoid standing water and clogs.",
    "id": "hvac-f007"
  },
  {
    "domain": "hvac",
    "term": "Float Switch (Condensate Safety Switch)",
    "definition": "A safety device that shuts down an HVAC unit if condensate backs up in the primary drain line or overflows into a secondary pan, preventing water damage to the surrounding structure.",
    "id": "hvac-f008"
  },
  {
    "domain": "hvac",
    "term": "Puffback",
    "definition": "A minor delayed-ignition combustion event inside an oil furnace's firebox that forces soot out through cabinet seams and into the surrounding space, signaling a combustion or ignition problem.",
    "id": "hvac-f009"
  },
  {
    "domain": "hvac",
    "term": "Expansion Tank",
    "definition": "A tank on a hydronic (hot water) heating system that absorbs the volume increase of heated water, preventing excessive system pressure and constant weeping from the pressure relief valve.",
    "id": "hvac-f010"
  },
  {
    "domain": "hvac",
    "term": "Combustion Air",
    "definition": "Outdoor or indoor air supplied to a fuel-burning appliance to support proper combustion; confined mechanical spaces often require dedicated permanent openings sized to the appliance's Btu input rating.",
    "id": "hvac-f011"
  },
  {
    "domain": "hvac",
    "term": "Limit Switch",
    "definition": "A furnace safety control that shuts down the burner (and sometimes locks on the blower) if internal temperatures exceed a safe threshold, typically due to restricted airflow.",
    "id": "hvac-f012"
  },
  {
    "domain": "hvac",
    "term": "Refrigerant Line Set",
    "definition": "The pair of copper lines, an insulated suction line and an uninsulated liquid line, connecting a split system's indoor and outdoor units; damaged suction-line insulation causes efficiency loss and condensation.",
    "id": "hvac-f013"
  },
  {
    "domain": "insulation",
    "term": "Net Free Area (NFA)",
    "definition": "The unobstructed open area of a vent opening through which air can actually pass, always smaller than the vent's overall physical size due to louvers, mesh, or screening.",
    "id": "insulation-f001"
  },
  {
    "domain": "insulation",
    "term": "Vapor Retarder (Class I/II/III)",
    "definition": "A material that slows the movement of water vapor through an assembly; Class I (e.g., polyethylene sheeting) is least permeable, Class III (e.g., standard latex paint) is most permeable, with Class II (e.g., kraft paper) in between.",
    "id": "insulation-f002"
  },
  {
    "domain": "insulation",
    "term": "Batt Insulation",
    "definition": "Pre-cut blankets of fiberglass or mineral wool insulation sized to fit standard framing cavities; performance depends on a proper, uncompressed fit with no gaps.",
    "id": "insulation-f003"
  },
  {
    "domain": "insulation",
    "term": "Blown-In (Loose-Fill) Insulation",
    "definition": "Insulation material such as cellulose, fiberglass, or mineral wool that is mechanically blown into attics or wall cavities; it can settle over time and needs an even, undisturbed depth to perform as rated.",
    "id": "insulation-f004"
  },
  {
    "domain": "insulation",
    "term": "Spray Polyurethane Foam (SPF)",
    "definition": "A two-part liquid insulation sprayed in place that expands and cures into rigid or semi-rigid foam; available as open-cell (lower R-value per inch, vapor-permeable) or closed-cell (higher R-value per inch, low permeability, added rigidity).",
    "id": "insulation-f005"
  },
  {
    "domain": "insulation",
    "term": "Soffit Vent",
    "definition": "An intake ventilation opening located under the roof eave/overhang that draws outside air into the attic to be exhausted higher up, typically at the ridge.",
    "id": "insulation-f006"
  },
  {
    "domain": "insulation",
    "term": "Ridge Vent",
    "definition": "An exhaust ventilation opening running along the peak of the roof that allows warm, moist attic air to escape as part of a balanced intake/exhaust ventilation system.",
    "id": "insulation-f007"
  },
  {
    "domain": "insulation",
    "term": "Baffle (Rafter/Wind Vent Chute)",
    "definition": "A rigid channel installed at the eaves to keep loose-fill or batt insulation from blocking soffit vents while preserving an open airflow path into the attic.",
    "id": "insulation-f008"
  },
  {
    "domain": "interior",
    "term": "Guard",
    "definition": "A protective barrier (railing) installed along open-sided walking surfaces, stairs, and landings to prevent falls from an elevated area; residential code commonly requires a minimum height of 36 inches.",
    "id": "interior-f001"
  },
  {
    "domain": "interior",
    "term": "Handrail",
    "definition": "A graspable rail mounted along a stairway for a hand to grip for stability and fall arrest, distinct from a guard, which is a fall-protection barrier rather than a grip rail.",
    "id": "interior-f002"
  },
  {
    "domain": "interior",
    "term": "Nosing",
    "definition": "The rounded, projecting front edge of a stair tread that extends beyond the riser below it; missing or inconsistent nosing dimensions can create a trip hazard.",
    "id": "interior-f003"
  },
  {
    "domain": "interior",
    "term": "Truss Uplift",
    "definition": "A seasonal condition where engineered roof trusses bow upward due to differential moisture and temperature between their top and bottom chords, sometimes cracking drywall where the truss meets interior partition walls; generally cosmetic, not structural.",
    "id": "interior-f004"
  },
  {
    "domain": "interior",
    "term": "Safety (Tempered/Laminated) Glazing",
    "definition": "Impact-resistant glass required in defined hazardous locations, such as near doors and tubs/showers or low to the floor, that breaks into small, less-dangerous fragments (tempered) or stays bonded to an interlayer (laminated) rather than shattering into sharp shards.",
    "id": "interior-f005"
  },
  {
    "domain": "interior",
    "term": "Egress Window",
    "definition": "A window in a sleeping room or basement designed to serve as an emergency escape and rescue opening, with minimum requirements for net clear opening area, width, height, and maximum sill height above the floor.",
    "id": "interior-f006"
  },
  {
    "domain": "interior",
    "term": "Winder Stair",
    "definition": "A stairway in which the treads are wedge- or pie-shaped to change direction within a landing-limited space rather than using a straight landing; tread depth is measured at a specific walk line rather than at the narrow end.",
    "id": "interior-f007"
  },
  {
    "domain": "interior",
    "term": "Newel Post",
    "definition": "The main vertical support post anchoring the bottom (and often the top) of a stair railing/guard assembly, providing structural support for the handrail run.",
    "id": "interior-f008"
  },
  {
    "domain": "interior",
    "term": "Header (Lintel)",
    "definition": "A horizontal structural member spanning above a door, window, or other wall opening to carry the load from above around the opening; an undersized or damaged header can lead to cracking or sagging over the opening.",
    "id": "interior-f009"
  },
  {
    "domain": "fireplaces",
    "term": "Damper",
    "definition": "A movable metal plate inside a fireplace flue that regulates airflow, opened during use to vent smoke and closed when not in use to prevent heat loss up the chimney.",
    "id": "fireplaces-f001"
  },
  {
    "domain": "fireplaces",
    "term": "Spark Arrestor",
    "definition": "A mesh screen installed at the top of a chimney that prevents sparks and embers from escaping the flue and igniting the roof or nearby combustible materials.",
    "id": "fireplaces-f002"
  },
  {
    "domain": "fireplaces",
    "term": "Clearance to Combustibles",
    "definition": "The minimum required distance between a heat-producing appliance, such as a wood stove or fireplace, and any combustible material (framing, furnishings, walls), set by the manufacturer or applicable code to prevent fire.",
    "id": "fireplaces-f003"
  },
  {
    "domain": "fireplaces",
    "term": "Hearth Extension",
    "definition": "The non-combustible floor area extending in front of and to the sides of a fireplace opening, designed to protect the surrounding floor from sparks, embers, and radiant heat.",
    "id": "fireplaces-f004"
  },
  {
    "domain": "fireplaces",
    "term": "Direct-Vent Gas Fireplace",
    "definition": "A sealed-combustion gas fireplace that draws outside air for combustion and exhausts flue gases directly outside through a dedicated vent pipe, without using room air.",
    "id": "fireplaces-f005"
  },
  {
    "domain": "fireplaces",
    "term": "Lintel",
    "definition": "The structural beam or masonry unit spanning the top of a fireplace opening that supports the masonry above it; inspectors check for cracking or deterioration here.",
    "id": "fireplaces-f006"
  },
  {
    "domain": "safety",
    "term": "Readily Accessible",
    "definition": "A term used in the Standards of Practice describing areas or components an inspector can reach and observe without risk, without requiring the removal of personal property, or without unsafe effort.",
    "id": "safety-f001"
  },
  {
    "domain": "safety",
    "term": "Non-Invasive Inspection",
    "definition": "An inspection method limited to visual observation of accessible components, without dismantling, disassembling, or performing destructive testing on any system or structure.",
    "id": "safety-f002"
  },
  {
    "domain": "safety",
    "term": "PPE (Personal Protective Equipment)",
    "definition": "Protective gear, such as gloves, eye protection, respirators, and sturdy footwear, that inspectors use to reduce injury risk in hazardous areas like crawlspaces, attics, and around electrical panels.",
    "id": "safety-f003"
  },
  {
    "domain": "safety",
    "term": "Scope of Inspection",
    "definition": "The defined boundaries of what a general home inspection covers, as established by the Standards of Practice and the pre-inspection agreement, distinguishing included systems from excluded ones.",
    "id": "safety-f004"
  },
  {
    "domain": "safety",
    "term": "Limitation (in a Home Inspection Report)",
    "definition": "A documented condition that prevented full inspection of an area or component, such as blocked access, hazardous conditions, or stored personal property, disclosed so the client understands what was not evaluated.",
    "id": "safety-f005"
  },
  {
    "domain": "safety",
    "term": "GFCI (Ground-Fault Circuit Interrupter)",
    "definition": "An electrical safety device that shuts off power when it detects a current imbalance indicating a ground fault, commonly required near water sources such as kitchens, bathrooms, and exteriors; inspectors test these for proper operation.",
    "id": "safety-f006"
  },
  {
    "domain": "safety",
    "term": "Environmental Hazard Exclusion",
    "definition": "The SOP provision excluding testing for hazards such as mold, radon, asbestos, and lead paint from a general home inspection, since these require specialized sampling, equipment, or certification beyond a visual inspection.",
    "id": "safety-f007"
  },
  {
    "domain": "safety",
    "term": "Duty to Disclose Limited Access",
    "definition": "The inspector's obligation to note in the report when a system or area could not be fully inspected due to safety concerns, blocked access, or other restrictions, rather than remaining silent about the gap.",
    "id": "safety-f008"
  },
  {
    "domain": "business",
    "term": "Code of Ethics",
    "definition": "The set of professional conduct rules governing a home inspector's integrity, objectivity, and duty to the client, covering conflicts of interest, referral fee prohibitions, and honest representation of services.",
    "id": "business-f001"
  },
  {
    "domain": "business",
    "term": "Conflict of Interest",
    "definition": "A situation in which an inspector's personal, financial, or relational interests could reasonably compromise their objectivity or independence in performing or reporting on an inspection.",
    "id": "business-f002"
  },
  {
    "domain": "business",
    "term": "Referral Fee Prohibition",
    "definition": "The Code of Ethics rule barring inspectors from paying or accepting compensation from real estate agents or other transaction parties in exchange for client referrals, to preserve unbiased reporting.",
    "id": "business-f003"
  },
  {
    "domain": "business",
    "term": "Pre-Inspection Agreement",
    "definition": "A written contract signed before the inspection begins that defines the scope of services, exclusions, fee, and terms of the engagement between inspector and client.",
    "id": "business-f004"
  },
  {
    "domain": "business",
    "term": "Errors & Omissions (E&O) Insurance",
    "definition": "Professional liability insurance that covers claims arising from an inspector's negligent acts, mistakes, or omissions in professional judgment, distinct from general liability coverage for physical injury or property damage.",
    "id": "business-f005"
  },
  {
    "domain": "business",
    "term": "Duty to the Client",
    "definition": "The inspector's primary ethical obligation to report findings honestly and objectively to the party who engaged their services, independent of pressure from agents, sellers, or other third parties.",
    "id": "business-f006"
  },
  {
    "domain": "business",
    "term": "Report as a Warranty (Misconception)",
    "definition": "A common client misunderstanding that a home inspection report guarantees future performance of systems; in fact, the report reflects only the visible condition of the home at the time of inspection and is not a warranty.",
    "id": "business-f007"
  }
];
