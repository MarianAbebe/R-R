export const anatomicalTerminologyQuestions = [
  {
    "id": "anatomy-term-1",
    "type": "mcq",
    "prompt": "A patient is lying supine, but the question asks which surface of the hand is anterior in anatomical position. What is the best answer?",
    "options": [
      "The palm, because anatomical position assumes palms face anteriorly regardless of current posture.",
      "The thumb side, because lateral structures are considered anterior in the upper limb.",
      "The fingertips, because distal structures are anterior when the limb is extended.",
      "The back of the hand, because supine posture makes the dorsal hand face upward."
    ],
    "answerIndex": 0,
    "explanation": "Correct (A): Directional terms are interpreted from anatomical position unless otherwise stated; the palmar surface faces anteriorly. Why the others are weaker (B/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "anatomical-position"
  },
  {
    "id": "anatomy-term-2",
    "type": "mcq",
    "prompt": "Which statement best distinguishes a midsagittal from a parasagittal section?",
    "options": [
      "Midsagittal divides anterior/posterior; parasagittal divides superior/inferior.",
      "Midsagittal divides equal left/right halves; parasagittal divides unequal left/right portions.",
      "Midsagittal is used only for limbs; parasagittal is used only for trunk.",
      "Midsagittal is any sagittal cut; parasagittal is specifically through the midline."
    ],
    "answerIndex": 1,
    "explanation": "Correct (B): Both are sagittal, but midsagittal passes exactly through the midline while parasagittal is offset. Why the others are weaker (A/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "planes"
  },
  {
    "id": "anatomy-term-3",
    "type": "mcq",
    "prompt": "Which relation is described most precisely?",
    "options": [
      "The lungs are proximal to the heart.",
      "The heart is distal to the sternum.",
      "The sternum is anterior to the heart.",
      "The stomach is ipsilateral to the liver."
    ],
    "answerIndex": 2,
    "explanation": "Correct (C): Anterior/posterior describes front-back relationships in the trunk. Proximal/distal is mainly for limbs; ipsilateral compares sides. Why the others are weaker (A/B/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "directional-terms"
  },
  {
    "id": "anatomy-term-4",
    "type": "mcq",
    "prompt": "Which option correctly uses proximal/distal?",
    "options": [
      "The lungs are distal to the heart.",
      "The nose is proximal to the ears.",
      "The sternum is proximal to the vertebral column.",
      "The elbow is proximal to the wrist."
    ],
    "answerIndex": 3,
    "explanation": "Correct (D): Proximal/distal are best used along limbs relative to the limb origin. Why the others are weaker (A/B/C): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "proximal-distal"
  },
  {
    "id": "anatomy-term-5",
    "type": "mcq",
    "prompt": "Choose the strongest answer: What plane is most commonly used in CT axial images?",
    "options": [
      "Transverse plane, because it divides superior and inferior portions and produces axial sections.",
      "Oblique plane, because CT scanners always cut at an angle to the body axis.",
      "Sagittal plane, because all medical imaging sections are sagittal unless stated otherwise.",
      "Coronal plane, because it divides anterior and posterior portions and is also called axial."
    ],
    "answerIndex": 0,
    "explanation": "Correct (A): Axial CT images are transverse/horizontal sections. Why the others are weaker (B/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "planes"
  },
  {
    "id": "anatomy-term-6",
    "type": "imposter",
    "prompt": "Which statement is the false/imposter statement?",
    "options": [
      "Lateral means farther from the midline.",
      "Contralateral means on the same side of the body.",
      "Medial means closer to the midline.",
      "Superficial means closer to the body surface."
    ],
    "answerIndex": 1,
    "explanation": "Correct (B): Contralateral means opposite side; ipsilateral means same side. Why the others are weaker (A/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "laterality"
  },
  {
    "id": "anatomy-term-7",
    "type": "imposter",
    "prompt": "Which statement is the false/imposter statement?",
    "options": [
      "A plane is an imaginary flat surface used to divide the body.",
      "Oblique sections are angled relative to standard planes.",
      "A section is the surface exposed by a cut through a plane.",
      "Coronal sections divide superior and inferior parts."
    ],
    "answerIndex": 3,
    "explanation": "Correct (D): Coronal/frontal sections divide anterior and posterior portions; transverse divides superior and inferior. Why the others are weaker (A/B/C): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "planes"
  },
  {
    "id": "anatomy-term-8",
    "type": "mcq",
    "prompt": "A surgeon describes a lesion as deep to the skin but superficial to the ribs. What does this mean?",
    "options": [
      "The lesion lies inside the thoracic cavity.",
      "The lesion is distal to the ribs.",
      "The lesion is closer to the midline than the ribs.",
      "The lesion lies between the skin and ribs."
    ],
    "answerIndex": 3,
    "explanation": "Correct (D): Deep/superficial describe distance from the body surface. Why the others are weaker (A/B/C): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "superficial-deep"
  },
  {
    "id": "anatomy-term-9",
    "type": "mcq",
    "prompt": "In anatomical position, which pair is correct?",
    "options": [
      "Palm faces posteriorly; dorsum of hand faces anteriorly.",
      "Little finger is lateral because it is farther from the trunk.",
      "Thumb is lateral to little finger; palm faces anteriorly.",
      "Thumb is medial to little finger; palm faces posteriorly."
    ],
    "answerIndex": 2,
    "explanation": "Correct (C): With palms anterior, the thumb lies lateral and the little finger medial. Why the others are weaker (A/B/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "upper-limb-orientation"
  },
  {
    "id": "anatomy-term-10",
    "type": "mcq",
    "prompt": "Which answer best explains why anatomical terminology reduces error?",
    "options": [
      "It fixes body description to standard position and precise relational language.",
      "It avoids using directional terms for internal organs.",
      "It allows each clinician to describe position from their own viewpoint.",
      "It replaces all Greek/Latin roots with everyday English."
    ],
    "answerIndex": 0,
    "explanation": "Correct (A): Standard position and precise terms reduce ambiguity. Why the others are weaker (B/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "anatomical-language"
  },
  {
    "id": "anatomy-term-11",
    "type": "mcq",
    "prompt": "Which statement is most complete for superior/inferior?",
    "options": [
      "Superior means toward the front; inferior means toward the back.",
      "Superior means closer to the surface; inferior means deeper.",
      "Superior means toward the head; inferior means toward the feet in the body axis.",
      "Superior means closer to a limb origin; inferior means farther away."
    ],
    "answerIndex": 2,
    "explanation": "Correct (C): Superior/inferior refer to cranial-caudal direction. Why the others are weaker (A/B/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "directional-terms"
  },
  {
    "id": "anatomy-term-12",
    "type": "mcq",
    "prompt": "Which is the best example of a bilateral structure?",
    "options": [
      "The kidneys, because one is normally present on each side.",
      "The heart, because it has right and left chambers.",
      "The spleen, because it is located on the left.",
      "The liver, because it has right and left lobes."
    ],
    "answerIndex": 0,
    "explanation": "Correct (A): Bilateral means paired structures on both sides of the body; kidneys are a clean example. Why the others are weaker (B/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "laterality"
  },
  {
    "id": "anatomy-term-13",
    "type": "mcq",
    "prompt": "A radiology report says a mass is posterior to the sternum and anterior to the vertebral bodies. Which region is most likely being described?",
    "options": [
      "Cranial cavity",
      "Dorsal body wall",
      "Pelvic cavity",
      "Mediastinum"
    ],
    "answerIndex": 3,
    "explanation": "Correct (D): The mediastinum lies behind the sternum and in front of the vertebral column within the thorax. Why the others are weaker (A/B/C): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "regional-orientation"
  },
  {
    "id": "anatomy-term-14",
    "type": "mcq",
    "prompt": "Which option best describes anatomical position for the upper limb?",
    "options": [
      "Upper limbs abducted to 90 degrees, palms posterior.",
      "Upper limbs pronated with thumbs medial.",
      "Upper limbs at sides, elbows extended, palms facing forward.",
      "Upper limbs crossed, palms against the trunk."
    ],
    "answerIndex": 2,
    "explanation": "Correct (C): Anatomical position uses upper limbs at sides with palms anterior, causing thumbs to be lateral. Why the others are weaker (A/B/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "anatomical-position"
  },
  {
    "id": "anatomy-term-15",
    "type": "mcq",
    "prompt": "Which option is the best oral-exam answer for sagittal plane?",
    "options": [
      "A sagittal plane is any angled cut through the body.",
      "A sagittal plane divides the body into left and right portions; if exactly at midline it is midsagittal, otherwise parasagittal.",
      "A sagittal plane divides anterior from posterior and is used mainly for chest imaging.",
      "A sagittal plane divides superior from inferior and is the same as axial."
    ],
    "answerIndex": 1,
    "explanation": "Correct (B): This answer includes definition and important subdivision. Why the others are weaker (A/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "planes"
  },
  {
    "id": "anatomy-term-16",
    "type": "mcq",
    "prompt": "Which is the best distinction between hollow and solid organs?",
    "options": [
      "Hollow organs have a lumen and layered wall; solid organs have parenchyma supported by stroma.",
      "Hollow organs are always in thorax; solid organs are always in pelvis.",
      "Hollow organs contain no blood vessels; solid organs contain no ducts.",
      "Hollow and solid organs differ only by size."
    ],
    "answerIndex": 0,
    "explanation": "Correct (A): This distinction is structural and functional. Why the others are weaker (B/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "hollow-solid"
  },
  {
    "id": "anatomy-term-17",
    "type": "mcq",
    "prompt": "Which cavity directly contains the brain?",
    "options": [
      "Pleural cavity",
      "Peritoneal cavity",
      "Pelvic cavity",
      "Cranial cavity"
    ],
    "answerIndex": 3,
    "explanation": "Correct (D): The brain lies in the cranial cavity. Why the others are weaker (A/B/C): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "cavities"
  },
  {
    "id": "anatomy-term-18",
    "type": "imposter",
    "prompt": "Which statement is false about serous membranes?",
    "options": [
      "The visceral layer covers organ surface.",
      "Serous fluid reduces friction.",
      "The visceral layer lines the body wall.",
      "The parietal layer lines cavity wall."
    ],
    "answerIndex": 2,
    "explanation": "Correct (C): Visceral covers organ; parietal lines wall. Why the others are weaker (A/B/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "serous-membranes"
  },
  {
    "id": "anatomy-term-19",
    "type": "mcq",
    "prompt": "Where is the heart located most precisely?",
    "options": [
      "Peritoneal cavity within pelvis only.",
      "Pericardial cavity within the mediastinum of the thoracic cavity.",
      "Pleural cavity within the abdomen.",
      "Vertebral canal within dorsal cavity."
    ],
    "answerIndex": 1,
    "explanation": "Correct (B): Precise location uses nested cavities. Why the others are weaker (A/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "thoracic-cavity"
  },
  {
    "id": "anatomy-term-20",
    "type": "mcq",
    "prompt": "Which organ is solid?",
    "options": [
      "Stomach",
      "Urinary bladder",
      "Ureter",
      "Liver"
    ],
    "answerIndex": 3,
    "explanation": "Correct (D): Liver is a solid parenchymal organ. Why the others are weaker (A/B/C): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "hollow-solid"
  },
  {
    "id": "anatomy-term-21",
    "type": "mcq",
    "prompt": "Which organ is hollow?",
    "options": [
      "Small intestine",
      "Liver",
      "Thyroid gland",
      "Spleen"
    ],
    "answerIndex": 0,
    "explanation": "Correct (A): Small intestine has a lumen and layered wall. Why the others are weaker (B/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "hollow-solid"
  },
  {
    "id": "anatomy-term-22",
    "type": "mcq",
    "prompt": "Which statement best describes systematic anatomy?",
    "options": [
      "Study of all structures in one region only.",
      "Study of one body system across regions.",
      "Study of disease without structure.",
      "Study of only microscopic tissues."
    ],
    "answerIndex": 1,
    "explanation": "Correct (B): Systematic anatomy organizes by systems. Why the others are weaker (A/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "systematic-anatomy"
  },
  {
    "id": "anatomy-term-23",
    "type": "mcq",
    "prompt": "Which statement best describes topographic anatomy?",
    "options": [
      "Study of only embryology.",
      "Study of only bone classification.",
      "Study of structures together in a region.",
      "Study of only blood tests."
    ],
    "answerIndex": 2,
    "explanation": "Correct (C): Regional/topographic anatomy integrates structures in place. Why the others are weaker (A/B/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "topographic-anatomy"
  },
  {
    "id": "anatomy-term-24",
    "type": "mcq",
    "prompt": "Which quadrant contains much of the liver?",
    "options": [
      "Right lower quadrant only",
      "Left upper quadrant only",
      "Left lower quadrant",
      "Right upper quadrant"
    ],
    "answerIndex": 3,
    "explanation": "Correct (D): Liver is mainly RUQ. Why the others are weaker (A/B/C): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "abdominal-regions"
  },
  {
    "id": "anatomy-term-25",
    "type": "mcq",
    "prompt": "Which cavity contains the spinal cord?",
    "options": [
      "Vertebral canal",
      "Abdominal cavity",
      "Pleural cavity",
      "Pericardial cavity"
    ],
    "answerIndex": 0,
    "explanation": "Correct (A): Spinal cord lies in vertebral canal. Why the others are weaker (B/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "dorsal-cavity"
  },
  {
    "id": "anatomy-term-26",
    "type": "imposter",
    "prompt": "Which is the false/imposter statement?",
    "options": [
      "The dorsal cavity includes cranial cavity.",
      "The ventral cavity includes thoracic cavity.",
      "The dorsal cavity includes the thoracic cavity.",
      "The dorsal cavity includes vertebral canal."
    ],
    "answerIndex": 2,
    "explanation": "Correct (C): Thoracic cavity is ventral, not dorsal. Why the others are weaker (A/B/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "cavities"
  },
  {
    "id": "anatomy-term-27",
    "type": "mcq",
    "prompt": "Which answer best explains why cavities matter clinically?",
    "options": [
      "They organize organs, membranes, spread of fluid/infection, and trauma localization.",
      "They replace organ system knowledge entirely.",
      "They are only naming conventions with no clinical use.",
      "They apply only to cadaveric anatomy."
    ],
    "answerIndex": 0,
    "explanation": "Correct (A): Cavities provide spatial and clinical organization. Why the others are weaker (B/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "cavities"
  },
  {
    "id": "anatomy-term-28",
    "type": "mcq",
    "prompt": "Which membrane pair is correctly matched?",
    "options": [
      "Pericardium-kidneys",
      "Meninges-stomach",
      "Peritoneum-brain",
      "Pleura-lungs"
    ],
    "answerIndex": 3,
    "explanation": "Correct (D): Pleura surrounds lungs. Why the others are weaker (A/B/C): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "serous-membranes"
  },
  {
    "id": "anatomy-term-29",
    "type": "mcq",
    "prompt": "Which is most complete for mediastinum contents?",
    "options": [
      "Only liver and stomach.",
      "Only spinal cord.",
      "Heart, great vessels, trachea, esophagus, thymus, nerves, lymphatics.",
      "Only lungs."
    ],
    "answerIndex": 2,
    "explanation": "Correct (C): Mediastinum is the central thoracic compartment. Why the others are weaker (A/B/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "mediastinum"
  },
  {
    "id": "anatomy-term-30",
    "type": "mcq",
    "prompt": "Which region contains the umbilicus?",
    "options": [
      "Umbilical region",
      "Hypochondriac region",
      "Iliac region",
      "Cervical region"
    ],
    "answerIndex": 0,
    "explanation": "Correct (A): Umbilical region centers around navel. Why the others are weaker (B/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "abdominal-regions"
  },
  {
    "id": "anatomy-term-31",
    "type": "case",
    "scenario": "Applied anatomy scenario. Choose the most precise answer.",
    "prompt": "A patient is lying supine, but the question asks which surface of the hand is anterior in anatomical position. What is the best answer?",
    "options": [
      "The back of the hand, because supine posture makes the dorsal hand face upward.",
      "The fingertips, because distal structures are anterior when the limb is extended.",
      "The thumb side, because lateral structures are considered anterior in the upper limb.",
      "The palm, because anatomical position assumes palms face anteriorly regardless of current posture."
    ],
    "answerIndex": 3,
    "explanation": "Correct (D): Directional terms are interpreted from anatomical position unless otherwise stated; the palmar surface faces anteriorly. Why the others are weaker (A/B/C): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "anatomical-position"
  },
  {
    "id": "anatomy-term-32",
    "type": "case",
    "scenario": "Applied anatomy scenario. Choose the most precise answer.",
    "prompt": "Which statement best distinguishes a midsagittal from a parasagittal section?",
    "options": [
      "Midsagittal is any sagittal cut; parasagittal is specifically through the midline.",
      "Midsagittal is used only for limbs; parasagittal is used only for trunk.",
      "Midsagittal divides equal left/right halves; parasagittal divides unequal left/right portions.",
      "Midsagittal divides anterior/posterior; parasagittal divides superior/inferior."
    ],
    "answerIndex": 2,
    "explanation": "Correct (C): Both are sagittal, but midsagittal passes exactly through the midline while parasagittal is offset. Why the others are weaker (A/B/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "planes"
  },
  {
    "id": "anatomy-term-33",
    "type": "case",
    "scenario": "Applied anatomy scenario. Choose the most precise answer.",
    "prompt": "Which relation is described most precisely?",
    "options": [
      "The stomach is ipsilateral to the liver.",
      "The sternum is anterior to the heart.",
      "The heart is distal to the sternum.",
      "The lungs are proximal to the heart."
    ],
    "answerIndex": 1,
    "explanation": "Correct (B): Anterior/posterior describes front-back relationships in the trunk. Proximal/distal is mainly for limbs; ipsilateral compares sides. Why the others are weaker (A/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "directional-terms"
  },
  {
    "id": "anatomy-term-34",
    "type": "case",
    "scenario": "Applied anatomy scenario. Choose the most precise answer.",
    "prompt": "Which option correctly uses proximal/distal?",
    "options": [
      "The elbow is proximal to the wrist.",
      "The sternum is proximal to the vertebral column.",
      "The lungs are distal to the heart.",
      "The nose is proximal to the ears."
    ],
    "answerIndex": 0,
    "explanation": "Correct (A): Proximal/distal are best used along limbs relative to the limb origin. Why the others are weaker (B/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "proximal-distal"
  },
  {
    "id": "anatomy-term-35",
    "type": "case",
    "scenario": "Applied anatomy scenario. Choose the most precise answer.",
    "prompt": "Choose the strongest answer: What plane is most commonly used in CT axial images?",
    "options": [
      "Coronal plane, because it divides anterior and posterior portions and is also called axial.",
      "Sagittal plane, because all medical imaging sections are sagittal unless stated otherwise.",
      "Oblique plane, because CT scanners always cut at an angle to the body axis.",
      "Transverse plane, because it divides superior and inferior portions and produces axial sections."
    ],
    "answerIndex": 3,
    "explanation": "Correct (D): Axial CT images are transverse/horizontal sections. Why the others are weaker (A/B/C): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "planes"
  },
  {
    "id": "anatomy-term-36",
    "type": "case",
    "scenario": "Applied anatomy scenario. Choose the most precise answer.",
    "prompt": "Which is the best distinction between hollow and solid organs?",
    "options": [
      "Hollow organs have a lumen and layered wall; solid organs have parenchyma supported by stroma.",
      "Hollow organs contain no blood vessels; solid organs contain no ducts.",
      "Hollow and solid organs differ only by size.",
      "Hollow organs are always in thorax; solid organs are always in pelvis."
    ],
    "answerIndex": 0,
    "explanation": "Correct (A): This distinction is structural and functional. Why the others are weaker (B/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "hollow-solid"
  },
  {
    "id": "anatomy-term-37",
    "type": "case",
    "scenario": "Applied anatomy scenario. Choose the most precise answer.",
    "prompt": "Which cavity directly contains the brain?",
    "options": [
      "Pleural cavity",
      "Cranial cavity",
      "Pelvic cavity",
      "Peritoneal cavity"
    ],
    "answerIndex": 1,
    "explanation": "Correct (B): The brain lies in the cranial cavity. Why the others are weaker (A/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "cavities"
  },
  {
    "id": "anatomy-term-38",
    "type": "imposter",
    "prompt": "Which statement is false about serous membranes?",
    "options": [
      "The visceral layer covers organ surface.",
      "The parietal layer lines cavity wall.",
      "The visceral layer lines the body wall.",
      "Serous fluid reduces friction."
    ],
    "answerIndex": 2,
    "explanation": "Correct (C): Visceral covers organ; parietal lines wall. Why the others are weaker (A/B/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "serous-membranes"
  },
  {
    "id": "anatomy-term-39",
    "type": "case",
    "scenario": "Applied anatomy scenario. Choose the most precise answer.",
    "prompt": "Where is the heart located most precisely?",
    "options": [
      "Vertebral canal within dorsal cavity.",
      "Peritoneal cavity within pelvis only.",
      "Pleural cavity within the abdomen.",
      "Pericardial cavity within the mediastinum of the thoracic cavity."
    ],
    "answerIndex": 3,
    "explanation": "Correct (D): Precise location uses nested cavities. Why the others are weaker (A/B/C): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "thoracic-cavity"
  },
  {
    "id": "anatomy-term-40",
    "type": "case",
    "scenario": "Applied anatomy scenario. Choose the most precise answer.",
    "prompt": "Which organ is solid?",
    "options": [
      "Stomach",
      "Ureter",
      "Liver",
      "Urinary bladder"
    ],
    "answerIndex": 2,
    "explanation": "Correct (C): Liver is a solid parenchymal organ. Why the others are weaker (A/B/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "hollow-solid"
  },
  {
    "id": "anatomy-term-41",
    "type": "mcq",
    "prompt": "A patient is lying supine, but the question asks which surface of the hand is anterior in anatomical position. What is the best answer?",
    "options": [
      "The palm, because anatomical position assumes palms face anteriorly regardless of current posture.",
      "The thumb side, because lateral structures are considered anterior in the upper limb.",
      "The back of the hand, because supine posture makes the dorsal hand face upward.",
      "The fingertips, because distal structures are anterior when the limb is extended."
    ],
    "answerIndex": 0,
    "explanation": "Correct (A): Directional terms are interpreted from anatomical position unless otherwise stated; the palmar surface faces anteriorly. Why the others are weaker (B/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "anatomical-position"
  },
  {
    "id": "anatomy-term-42",
    "type": "mcq",
    "prompt": "Which statement best distinguishes a midsagittal from a parasagittal section?",
    "options": [
      "Midsagittal divides anterior/posterior; parasagittal divides superior/inferior.",
      "Midsagittal is used only for limbs; parasagittal is used only for trunk.",
      "Midsagittal is any sagittal cut; parasagittal is specifically through the midline.",
      "Midsagittal divides equal left/right halves; parasagittal divides unequal left/right portions."
    ],
    "answerIndex": 3,
    "explanation": "Correct (D): Both are sagittal, but midsagittal passes exactly through the midline while parasagittal is offset. Why the others are weaker (A/B/C): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "planes"
  },
  {
    "id": "anatomy-term-43",
    "type": "mcq",
    "prompt": "Which relation is described most precisely?",
    "options": [
      "The sternum is anterior to the heart.",
      "The stomach is ipsilateral to the liver.",
      "The lungs are proximal to the heart.",
      "The heart is distal to the sternum."
    ],
    "answerIndex": 0,
    "explanation": "Correct (A): Anterior/posterior describes front-back relationships in the trunk. Proximal/distal is mainly for limbs; ipsilateral compares sides. Why the others are weaker (B/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "directional-terms"
  },
  {
    "id": "anatomy-term-44",
    "type": "mcq",
    "prompt": "Which option correctly uses proximal/distal?",
    "options": [
      "The sternum is proximal to the vertebral column.",
      "The nose is proximal to the ears.",
      "The elbow is proximal to the wrist.",
      "The lungs are distal to the heart."
    ],
    "answerIndex": 2,
    "explanation": "Correct (C): Proximal/distal are best used along limbs relative to the limb origin. Why the others are weaker (A/B/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "proximal-distal"
  },
  {
    "id": "anatomy-term-45",
    "type": "mcq",
    "prompt": "Choose the strongest answer: What plane is most commonly used in CT axial images?",
    "options": [
      "Transverse plane, because it divides superior and inferior portions and produces axial sections.",
      "Sagittal plane, because all medical imaging sections are sagittal unless stated otherwise.",
      "Coronal plane, because it divides anterior and posterior portions and is also called axial.",
      "Oblique plane, because CT scanners always cut at an angle to the body axis."
    ],
    "answerIndex": 0,
    "explanation": "Correct (A): Axial CT images are transverse/horizontal sections. Why the others are weaker (B/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "planes"
  },
  {
    "id": "anatomy-term-46",
    "type": "imposter",
    "prompt": "Which statement is the false/imposter statement?",
    "options": [
      "Lateral means farther from the midline.",
      "Contralateral means on the same side of the body.",
      "Superficial means closer to the body surface.",
      "Medial means closer to the midline."
    ],
    "answerIndex": 1,
    "explanation": "Correct (B): Contralateral means opposite side; ipsilateral means same side. Why the others are weaker (A/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "laterality"
  },
  {
    "id": "anatomy-term-47",
    "type": "imposter",
    "prompt": "Which statement is the false/imposter statement?",
    "options": [
      "Oblique sections are angled relative to standard planes.",
      "Coronal sections divide superior and inferior parts.",
      "A plane is an imaginary flat surface used to divide the body.",
      "A section is the surface exposed by a cut through a plane."
    ],
    "answerIndex": 1,
    "explanation": "Correct (B): Coronal/frontal sections divide anterior and posterior portions; transverse divides superior and inferior. Why the others are weaker (A/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "planes"
  },
  {
    "id": "anatomy-term-48",
    "type": "mcq",
    "prompt": "A surgeon describes a lesion as deep to the skin but superficial to the ribs. What does this mean?",
    "options": [
      "The lesion is distal to the ribs.",
      "The lesion lies between the skin and ribs.",
      "The lesion lies inside the thoracic cavity.",
      "The lesion is closer to the midline than the ribs."
    ],
    "answerIndex": 1,
    "explanation": "Correct (B): Deep/superficial describe distance from the body surface. Why the others are weaker (A/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "superficial-deep"
  },
  {
    "id": "anatomy-term-49",
    "type": "mcq",
    "prompt": "In anatomical position, which pair is correct?",
    "options": [
      "Thumb is lateral to little finger; palm faces anteriorly.",
      "Thumb is medial to little finger; palm faces posteriorly.",
      "Palm faces posteriorly; dorsum of hand faces anteriorly.",
      "Little finger is lateral because it is farther from the trunk."
    ],
    "answerIndex": 0,
    "explanation": "Correct (A): With palms anterior, the thumb lies lateral and the little finger medial. Why the others are weaker (B/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "upper-limb-orientation"
  },
  {
    "id": "anatomy-term-50",
    "type": "mcq",
    "prompt": "Which answer best explains why anatomical terminology reduces error?",
    "options": [
      "It fixes body description to standard position and precise relational language.",
      "It allows each clinician to describe position from their own viewpoint.",
      "It avoids using directional terms for internal organs.",
      "It replaces all Greek/Latin roots with everyday English."
    ],
    "answerIndex": 0,
    "explanation": "Correct (A): Standard position and precise terms reduce ambiguity. Why the others are weaker (B/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "anatomical-language"
  },
  {
    "id": "anatomy-term-51",
    "type": "mcq",
    "prompt": "Which statement is most complete for superior/inferior?",
    "options": [
      "Superior means toward the front; inferior means toward the back.",
      "Superior means toward the head; inferior means toward the feet in the body axis.",
      "Superior means closer to the surface; inferior means deeper.",
      "Superior means closer to a limb origin; inferior means farther away."
    ],
    "answerIndex": 1,
    "explanation": "Correct (B): Superior/inferior refer to cranial-caudal direction. Why the others are weaker (A/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "directional-terms"
  },
  {
    "id": "anatomy-term-52",
    "type": "mcq",
    "prompt": "Which is the best example of a bilateral structure?",
    "options": [
      "The heart, because it has right and left chambers.",
      "The spleen, because it is located on the left.",
      "The kidneys, because one is normally present on each side.",
      "The liver, because it has right and left lobes."
    ],
    "answerIndex": 2,
    "explanation": "Correct (C): Bilateral means paired structures on both sides of the body; kidneys are a clean example. Why the others are weaker (A/B/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "laterality"
  },
  {
    "id": "anatomy-term-53",
    "type": "mcq",
    "prompt": "A radiology report says a mass is posterior to the sternum and anterior to the vertebral bodies. Which region is most likely being described?",
    "options": [
      "Pelvic cavity",
      "Dorsal body wall",
      "Cranial cavity",
      "Mediastinum"
    ],
    "answerIndex": 3,
    "explanation": "Correct (D): The mediastinum lies behind the sternum and in front of the vertebral column within the thorax. Why the others are weaker (A/B/C): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "regional-orientation"
  },
  {
    "id": "anatomy-term-54",
    "type": "mcq",
    "prompt": "Which option best describes anatomical position for the upper limb?",
    "options": [
      "Upper limbs at sides, elbows extended, palms facing forward.",
      "Upper limbs pronated with thumbs medial.",
      "Upper limbs abducted to 90 degrees, palms posterior.",
      "Upper limbs crossed, palms against the trunk."
    ],
    "answerIndex": 0,
    "explanation": "Correct (A): Anatomical position uses upper limbs at sides with palms anterior, causing thumbs to be lateral. Why the others are weaker (B/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "anatomical-position"
  },
  {
    "id": "anatomy-term-55",
    "type": "mcq",
    "prompt": "Which option is the best oral-exam answer for sagittal plane?",
    "options": [
      "A sagittal plane divides anterior from posterior and is used mainly for chest imaging.",
      "A sagittal plane divides the body into left and right portions; if exactly at midline it is midsagittal, otherwise parasagittal.",
      "A sagittal plane is any angled cut through the body.",
      "A sagittal plane divides superior from inferior and is the same as axial."
    ],
    "answerIndex": 1,
    "explanation": "Correct (B): This answer includes definition and important subdivision. Why the others are weaker (A/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "planes"
  },
  {
    "id": "anatomy-term-56",
    "type": "mcq",
    "prompt": "Which is the best distinction between hollow and solid organs?",
    "options": [
      "Hollow organs contain no blood vessels; solid organs contain no ducts.",
      "Hollow organs are always in thorax; solid organs are always in pelvis.",
      "Hollow organs have a lumen and layered wall; solid organs have parenchyma supported by stroma.",
      "Hollow and solid organs differ only by size."
    ],
    "answerIndex": 2,
    "explanation": "Correct (C): This distinction is structural and functional. Why the others are weaker (A/B/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "hollow-solid"
  },
  {
    "id": "anatomy-term-57",
    "type": "mcq",
    "prompt": "Which cavity directly contains the brain?",
    "options": [
      "Peritoneal cavity",
      "Pelvic cavity",
      "Pleural cavity",
      "Cranial cavity"
    ],
    "answerIndex": 3,
    "explanation": "Correct (D): The brain lies in the cranial cavity. Why the others are weaker (A/B/C): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "cavities"
  },
  {
    "id": "anatomy-term-58",
    "type": "imposter",
    "prompt": "Which statement is false about serous membranes?",
    "options": [
      "The visceral layer lines the body wall.",
      "Serous fluid reduces friction.",
      "The visceral layer covers organ surface.",
      "The parietal layer lines cavity wall."
    ],
    "answerIndex": 0,
    "explanation": "Correct (A): Visceral covers organ; parietal lines wall. Why the others are weaker (B/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "serous-membranes"
  },
  {
    "id": "anatomy-term-59",
    "type": "mcq",
    "prompt": "Where is the heart located most precisely?",
    "options": [
      "Pleural cavity within the abdomen.",
      "Peritoneal cavity within pelvis only.",
      "Pericardial cavity within the mediastinum of the thoracic cavity.",
      "Vertebral canal within dorsal cavity."
    ],
    "answerIndex": 2,
    "explanation": "Correct (C): Precise location uses nested cavities. Why the others are weaker (A/B/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "thoracic-cavity"
  },
  {
    "id": "anatomy-term-60",
    "type": "mcq",
    "prompt": "Which organ is solid?",
    "options": [
      "Stomach",
      "Ureter",
      "Urinary bladder",
      "Liver"
    ],
    "answerIndex": 3,
    "explanation": "Correct (D): Liver is a solid parenchymal organ. Why the others are weaker (A/B/C): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "hollow-solid"
  },
  {
    "id": "anatomy-term-61",
    "type": "mcq",
    "prompt": "Which organ is hollow?",
    "options": [
      "Liver",
      "Thyroid gland",
      "Small intestine",
      "Spleen"
    ],
    "answerIndex": 2,
    "explanation": "Correct (C): Small intestine has a lumen and layered wall. Why the others are weaker (A/B/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "hollow-solid"
  },
  {
    "id": "anatomy-term-62",
    "type": "mcq",
    "prompt": "Which statement best describes systematic anatomy?",
    "options": [
      "Study of disease without structure.",
      "Study of one body system across regions.",
      "Study of all structures in one region only.",
      "Study of only microscopic tissues."
    ],
    "answerIndex": 1,
    "explanation": "Correct (B): Systematic anatomy organizes by systems. Why the others are weaker (A/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "systematic-anatomy"
  },
  {
    "id": "anatomy-term-63",
    "type": "mcq",
    "prompt": "Which statement best describes topographic anatomy?",
    "options": [
      "Study of structures together in a region.",
      "Study of only bone classification.",
      "Study of only embryology.",
      "Study of only blood tests."
    ],
    "answerIndex": 0,
    "explanation": "Correct (A): Regional/topographic anatomy integrates structures in place. Why the others are weaker (B/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "topographic-anatomy"
  },
  {
    "id": "anatomy-term-64",
    "type": "mcq",
    "prompt": "Which quadrant contains much of the liver?",
    "options": [
      "Left lower quadrant",
      "Right lower quadrant only",
      "Left upper quadrant only",
      "Right upper quadrant"
    ],
    "answerIndex": 3,
    "explanation": "Correct (D): Liver is mainly RUQ. Why the others are weaker (A/B/C): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "abdominal-regions"
  },
  {
    "id": "anatomy-term-65",
    "type": "mcq",
    "prompt": "Which cavity contains the spinal cord?",
    "options": [
      "Vertebral canal",
      "Pleural cavity",
      "Abdominal cavity",
      "Pericardial cavity"
    ],
    "answerIndex": 0,
    "explanation": "Correct (A): Spinal cord lies in vertebral canal. Why the others are weaker (B/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "dorsal-cavity"
  },
  {
    "id": "anatomy-term-66",
    "type": "imposter",
    "prompt": "Which is the false/imposter statement?",
    "options": [
      "The dorsal cavity includes cranial cavity.",
      "The dorsal cavity includes the thoracic cavity.",
      "The ventral cavity includes thoracic cavity.",
      "The dorsal cavity includes vertebral canal."
    ],
    "answerIndex": 1,
    "explanation": "Correct (B): Thoracic cavity is ventral, not dorsal. Why the others are weaker (A/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "cavities"
  },
  {
    "id": "anatomy-term-67",
    "type": "mcq",
    "prompt": "Which answer best explains why cavities matter clinically?",
    "options": [
      "They organize organs, membranes, spread of fluid/infection, and trauma localization.",
      "They are only naming conventions with no clinical use.",
      "They replace organ system knowledge entirely.",
      "They apply only to cadaveric anatomy."
    ],
    "answerIndex": 0,
    "explanation": "Correct (A): Cavities provide spatial and clinical organization. Why the others are weaker (B/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "cavities"
  },
  {
    "id": "anatomy-term-68",
    "type": "mcq",
    "prompt": "Which membrane pair is correctly matched?",
    "options": [
      "Pericardium-kidneys",
      "Peritoneum-brain",
      "Meninges-stomach",
      "Pleura-lungs"
    ],
    "answerIndex": 3,
    "explanation": "Correct (D): Pleura surrounds lungs. Why the others are weaker (A/B/C): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "serous-membranes"
  },
  {
    "id": "anatomy-term-69",
    "type": "mcq",
    "prompt": "Which is most complete for mediastinum contents?",
    "options": [
      "Heart, great vessels, trachea, esophagus, thymus, nerves, lymphatics.",
      "Only liver and stomach.",
      "Only spinal cord.",
      "Only lungs."
    ],
    "answerIndex": 0,
    "explanation": "Correct (A): Mediastinum is the central thoracic compartment. Why the others are weaker (B/C/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "mediastinum"
  },
  {
    "id": "anatomy-term-70",
    "type": "mcq",
    "prompt": "Which region contains the umbilicus?",
    "options": [
      "Iliac region",
      "Hypochondriac region",
      "Umbilical region",
      "Cervical region"
    ],
    "answerIndex": 2,
    "explanation": "Correct (C): Umbilical region centers around navel. Why the others are weaker (A/B/D): they either reverse the defined relationship, use the wrong anatomical region/classification, or omit the key criterion tested by this prompt.",
    "mistakeTag": "abdominal-regions"
  }
]
