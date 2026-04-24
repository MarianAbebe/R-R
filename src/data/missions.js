import { bodyArchitectureCurriculum } from './bodyArchitecture/curriculum'

const mcq = (id, prompt, options, answerIndex, explanation, mistakeTag) => ({
  id,
  type: 'mcq',
  prompt,
  options,
  answerIndex,
  explanation,
  mistakeTag,
})

const imposter = (id, prompt, options, answerIndex, explanation, mistakeTag) => ({
  id,
  type: 'imposter',
  prompt,
  options,
  answerIndex,
  explanation,
  mistakeTag,
})

const caseQ = (id, scenario, prompt, options, answerIndex, explanation, mistakeTag) => ({
  id,
  type: 'case',
  scenario,
  prompt,
  options,
  answerIndex,
  explanation,
  mistakeTag,
})

export const legacyMissions = [
  {
    id: 'anatomical-planes',
    order: 1,
    title: 'Anatomical Planes',
    subtitle: 'Slice the body with precision.',
    estimatedMinutes: 10,
    questions: [
      mcq('planes-1', 'Which plane divides the body into left and right portions?', ['Coronal', 'Sagittal', 'Transverse', 'Oblique'], 1, 'A sagittal plane divides the body into left and right portions.', 'Plane identification'),
      mcq('planes-2', 'Which plane divides the body into superior and inferior portions?', ['Sagittal', 'Frontal', 'Transverse', 'Parasagittal'], 2, 'A transverse plane separates upper and lower portions.', 'Transverse plane'),
      mcq('planes-3', 'Which plane divides the body into anterior and posterior portions?', ['Coronal', 'Midsagittal', 'Transverse', 'Oblique'], 0, 'The coronal or frontal plane separates front and back portions.', 'Coronal plane'),
      mcq('planes-4', 'What is a midsagittal plane?', ['A horizontal section', 'An angled section', 'A sagittal section through the midline', 'A posterior section only'], 2, 'Midsagittal means a sagittal plane through the body midline.', 'Midsagittal concept'),
      mcq('planes-5', 'Which plane is angled relative to standard planes?', ['Oblique', 'Coronal', 'Median', 'Transverse'], 0, 'An oblique plane cuts at an angle.', 'Oblique plane'),
      imposter('planes-6', 'Identify the false statement about anatomical planes.', ['Sagittal divides left and right.', 'Coronal divides anterior and posterior.', 'Transverse divides superior and inferior.', 'Oblique is always parallel to the midline.'], 3, 'Oblique planes are angled, not necessarily parallel to the midline.', 'Oblique plane'),
      imposter('planes-7', 'Identify the incorrect imaging description.', ['Axial images often represent transverse slices.', 'Coronal images show anterior-posterior relationships.', 'Sagittal images show left-right divisions.', 'Midsagittal images divide superior and inferior halves.'], 3, 'Midsagittal divides equal left and right halves, not superior and inferior halves.', 'Imaging planes'),
      imposter('planes-8', 'Identify the false oral-exam statement.', ['Median plane is a midsagittal plane.', 'Parasagittal planes are off midline.', 'Transverse planes are vertical.', 'Frontal and coronal refer to the same plane.'], 2, 'Transverse planes are horizontal.', 'Plane terminology'),
      caseQ('planes-9', 'A CT image shows a horizontal section through the thorax.', 'Which plane is shown?', ['Sagittal', 'Coronal', 'Transverse', 'Median'], 2, 'A horizontal thoracic slice is transverse.', 'Imaging planes'),
      caseQ('planes-10', 'An examiner asks how to section the body to compare anterior and posterior abdominal wall structures.', 'Which plane is best?', ['Coronal', 'Transverse', 'Midsagittal', 'Oblique'], 0, 'A coronal plane separates anterior from posterior structures.', 'Coronal plane'),
    ],
  },
  {
    id: 'body-cavities',
    order: 2,
    title: 'Body Cavities',
    subtitle: 'Locate organs by their protective spaces.',
    estimatedMinutes: 10,
    questions: [
      mcq('cavities-1', 'Which cavity contains the brain?', ['Cranial', 'Thoracic', 'Pelvic', 'Abdominal'], 0, 'The cranial cavity houses the brain.', 'Cranial cavity'),
      mcq('cavities-2', 'Which cavity contains the spinal cord?', ['Pleural', 'Vertebral', 'Pericardial', 'Peritoneal'], 1, 'The vertebral canal contains the spinal cord.', 'Vertebral cavity'),
      mcq('cavities-3', 'Which cavity contains the lungs?', ['Pleural cavities', 'Pericardial cavity', 'Pelvic cavity', 'Cranial cavity'], 0, 'Each lung is in a pleural cavity.', 'Pleural cavities'),
      mcq('cavities-4', 'Which cavity contains the heart?', ['Abdominal cavity', 'Pericardial cavity', 'Vertebral cavity', 'Pelvic cavity'], 1, 'The heart lies in the pericardial cavity within the mediastinum.', 'Pericardial cavity'),
      mcq('cavities-5', 'Which structure separates thoracic and abdominal cavities?', ['Sternum', 'Diaphragm', 'Pelvic floor', 'Pericardium'], 1, 'The diaphragm separates thorax from abdomen.', 'Diaphragm'),
      imposter('cavities-6', 'Identify the false cavity-content pairing.', ['Cranial cavity - brain', 'Vertebral cavity - spinal cord', 'Pleural cavity - lung', 'Pelvic cavity - heart'], 3, 'The heart is in the pericardial cavity, not the pelvic cavity.', 'Cavity contents'),
      imposter('cavities-7', 'Identify the incorrect statement about serous cavities.', ['Pleura surrounds lungs.', 'Pericardium surrounds heart.', 'Peritoneum relates to abdominal organs.', 'Meninges line the pleural cavity.'], 3, 'Meninges surround the brain and spinal cord.', 'Serous membranes'),
      imposter('cavities-8', 'Identify the false statement about the mediastinum.', ['It is in the thorax.', 'It lies between pleural cavities.', 'It contains the heart.', 'It is the same as the pelvic cavity.'], 3, 'The mediastinum is a thoracic region, not pelvic.', 'Mediastinum'),
      caseQ('cavities-9', 'A patient has fluid around the lung but outside lung tissue.', 'Which cavity is involved?', ['Pleural cavity', 'Pericardial cavity', 'Cranial cavity', 'Vertebral cavity'], 0, 'The pleural cavity is the potential space around each lung.', 'Pleural cavities'),
      caseQ('cavities-10', 'A stab wound enters the anterior chest and injures the sac around the heart.', 'Which cavity is affected?', ['Peritoneal', 'Pericardial', 'Pelvic', 'Vertebral'], 1, 'The pericardial cavity surrounds the heart.', 'Pericardial cavity'),
    ],
  },
  {
    id: 'directional-terms',
    order: 3,
    title: 'Anatomical Directional Terms',
    subtitle: 'Navigate the body with exact language.',
    estimatedMinutes: 10,
    questions: [
      mcq('direction-1', 'The sternum is ___ to the vertebral column.', ['Posterior', 'Anterior', 'Distal', 'Lateral'], 1, 'The sternum is in front of the vertebral column.', 'Anterior/posterior'),
      mcq('direction-2', 'The heart is ___ to the lungs.', ['Lateral', 'Medial', 'Distal', 'Superficial'], 1, 'The heart is closer to the midline than the lungs.', 'Medial/lateral'),
      mcq('direction-3', 'The wrist is ___ to the elbow.', ['Proximal', 'Distal', 'Superior', 'Deep'], 1, 'The wrist is farther from the upper limb attachment than the elbow.', 'Proximal/distal'),
      mcq('direction-4', 'Skin is ___ to skeletal muscle.', ['Deep', 'Superficial', 'Inferior', 'Medial'], 1, 'Skin is closer to the body surface.', 'Superficial/deep'),
      mcq('direction-5', 'The nose is ___ to the mouth.', ['Inferior', 'Superior', 'Posterior', 'Lateral'], 1, 'The nose is above the mouth.', 'Superior/inferior'),
      imposter('direction-6', 'Identify the false directional statement.', ['The thumb is lateral in anatomical position.', 'The heart is medial to the lungs.', 'The knee is proximal to the hip.', 'The skin is superficial to muscle.'], 2, 'The knee is distal to the hip.', 'Proximal/distal'),
      imposter('direction-7', 'Identify the incorrect term definition.', ['Ipsilateral means same side.', 'Contralateral means opposite side.', 'Deep means closer to the surface.', 'Bilateral means both sides.'], 2, 'Deep means farther from the surface.', 'Directional definitions'),
      imposter('direction-8', 'Identify the false statement in anatomical position.', ['Palms face anteriorly.', 'Feet point forward.', 'Arms rest at sides.', 'Thumbs are medial to the little fingers.'], 3, 'Thumbs are lateral to the little fingers in anatomical position.', 'Anatomical position'),
      caseQ('direction-9', 'A clinician compares the patella with the popliteal fossa.', 'The patella is which direction relative to the popliteal fossa?', ['Posterior', 'Anterior', 'Deep', 'Proximal'], 1, 'The patella is on the anterior knee; the popliteal fossa is posterior.', 'Anterior/posterior'),
      caseQ('direction-10', 'A student describes the liver as being on the same side as the right kidney.', 'Which term describes same-side location?', ['Contralateral', 'Ipsilateral', 'Bilateral', 'Medial'], 1, 'Ipsilateral means on the same side.', 'Laterality terms'),
    ],
  },
  {
    id: 'body-regions',
    order: 4,
    title: 'Body Regions',
    subtitle: 'Map surface anatomy into usable regions.',
    estimatedMinutes: 10,
    questions: [
      mcq('body-regions-1', 'Which region refers to the head?', ['Cephalic', 'Cervical', 'Thoracic', 'Brachial'], 0, 'Cephalic refers to the head.', 'Head region'),
      mcq('body-regions-2', 'Which region refers to the neck?', ['Lumbar', 'Cervical', 'Sacral', 'Coxal'], 1, 'Cervical refers to the neck.', 'Neck region'),
      mcq('body-regions-3', 'Which region refers to the chest?', ['Thoracic', 'Abdominal', 'Pelvic', 'Inguinal'], 0, 'Thoracic refers to the chest.', 'Thoracic region'),
      mcq('body-regions-4', 'Which region is the anterior elbow?', ['Olecranal', 'Antecubital', 'Popliteal', 'Patellar'], 1, 'Antecubital refers to the front of the elbow.', 'Upper limb regions'),
      mcq('body-regions-5', 'Which region is the posterior knee?', ['Popliteal', 'Patellar', 'Femoral', 'Crural'], 0, 'Popliteal refers to the back of the knee.', 'Lower limb regions'),
      imposter('body-regions-6', 'Identify the false regional pairing.', ['Patellar - anterior knee', 'Calcaneal - heel', 'Carpal - wrist', 'Coxal - wrist'], 3, 'Coxal refers to the hip; carpal refers to the wrist.', 'Regional pairings'),
      imposter('body-regions-7', 'Identify the incorrect upper limb region.', ['Brachial - arm', 'Antebrachial - forearm', 'Acromial - shoulder', 'Tarsal - hand'], 3, 'Tarsal refers to the ankle region.', 'Upper limb regions'),
      imposter('body-regions-8', 'Identify the false trunk region statement.', ['Lumbar means lower back.', 'Sacral is posterior pelvis.', 'Sternal is anterior midline chest.', 'Buccal is lower back.'], 3, 'Buccal refers to the cheek.', 'Trunk regions'),
      caseQ('body-regions-9', 'A patient reports pain in the groin crease.', 'Which region is involved?', ['Inguinal', 'Gluteal', 'Popliteal', 'Orbital'], 0, 'The inguinal region is the groin.', 'Trunk and limb junctions'),
      caseQ('body-regions-10', 'An examiner points to the sole of the foot.', 'Which regional term is most appropriate?', ['Palmar', 'Plantar', 'Dorsal', 'Crural'], 1, 'Plantar refers to the sole of the foot.', 'Foot regions'),
    ],
  },
  {
    id: 'three-d-body-organization',
    order: 5,
    title: '3D Body Organization',
    subtitle: 'Connect cells, tissues, organs, and spaces.',
    estimatedMinutes: 10,
    questions: [
      mcq('organization-1', 'Which level of organization is simplest?', ['Tissue', 'Cell', 'Organ', 'Organ system'], 1, 'Cells are the basic living units.', 'Levels of organization'),
      mcq('organization-2', 'Which tissue lines body surfaces and cavities?', ['Epithelial', 'Muscle', 'Nervous', 'Bone'], 0, 'Epithelial tissue covers surfaces and lines cavities.', 'Epithelial tissue'),
      mcq('organization-3', 'Which tissue supports, binds, and protects structures?', ['Epithelial', 'Connective', 'Nervous', 'Smooth muscle'], 1, 'Connective tissue provides support, binding, and protection.', 'Connective tissue'),
      mcq('organization-4', 'What is a lumen?', ['Outer organ wall', 'Internal space of a hollow structure', 'Blood supply entry only', 'Connective tissue sheet'], 1, 'A lumen is the internal open space of a hollow organ or vessel.', '3D anatomy terms'),
      mcq('organization-5', 'Which term describes a structure entering or leaving an organ at a specific depression?', ['Hilum', 'Lumen', 'Fascia', 'Serosa'], 0, 'A hilum is a region where vessels, nerves, or ducts enter or leave an organ.', 'Hilum'),
      imposter('organization-6', 'Identify the false tissue statement.', ['Muscle contracts.', 'Nervous tissue conducts signals.', 'Epithelial tissue lines surfaces.', 'Connective tissue has no extracellular matrix.'], 3, 'Connective tissue typically has abundant extracellular matrix.', 'Tissue types'),
      imposter('organization-7', 'Identify the incorrect organization sequence.', ['Cells form tissues.', 'Tissues form organs.', 'Organs form organ systems.', 'Organ systems form cells.'], 3, 'Cells are lower-level units; organ systems do not form cells in this hierarchy.', 'Levels of organization'),
      imposter('organization-8', 'Identify the false 3D anatomy statement.', ['A wall surrounds a lumen in hollow organs.', 'A cavity is a space.', 'A membrane can line a space.', 'A solid organ always has a lumen.'], 3, 'Solid organs do not necessarily have lumens.', '3D anatomy terms'),
      caseQ('organization-9', 'A tubular organ has a mucosal lining facing the inside space.', 'What is the inside space called?', ['Hilum', 'Lumen', 'Septum', 'Fascia'], 1, 'The inner space of a tubular organ is the lumen.', 'Lumen'),
      caseQ('organization-10', 'A first-year student sees vessels entering the medial kidney indentation.', 'Which term describes this entry region?', ['Hilum', 'Pleura', 'Cartilage', 'Foramen'], 0, 'The kidney hilum is where vessels and the ureter pass.', 'Hilum'),
    ],
  },
  {
    id: 'skeletal-system-overview',
    order: 6,
    title: 'Skeletal System Overview',
    subtitle: 'High-yield bone functions and organization.',
    estimatedMinutes: 10,
    questions: [
      mcq('skeletal-overview-1', 'Which skeleton division includes skull, vertebral column, ribs, and sternum?', ['Appendicular', 'Axial', 'Visceral', 'Sesamoid'], 1, 'The axial skeleton forms the central axis.', 'Axial skeleton'),
      mcq('skeletal-overview-2', 'Which skeleton division includes limbs and girdles?', ['Axial', 'Appendicular', 'Cranial', 'Thoracic'], 1, 'The appendicular skeleton includes limbs plus pectoral and pelvic girdles.', 'Appendicular skeleton'),
      mcq('skeletal-overview-3', 'Which cell resorbs bone?', ['Osteoblast', 'Osteoclast', 'Osteocyte', 'Chondroblast'], 1, 'Osteoclasts break down bone matrix.', 'Bone cells'),
      mcq('skeletal-overview-4', 'Which cell builds bone matrix?', ['Osteoblast', 'Osteoclast', 'Osteocyte', 'Fibroblast'], 0, 'Osteoblasts produce bone matrix.', 'Bone cells'),
      mcq('skeletal-overview-5', 'Which is a sesamoid bone?', ['Patella', 'Femur', 'Sternum', 'Parietal bone'], 0, 'The patella is a sesamoid bone within a tendon.', 'Bone classification'),
      imposter('skeletal-overview-6', 'Identify the false skeletal function.', ['Support', 'Protection', 'Mineral storage', 'Primary gas exchange'], 3, 'Gas exchange is a respiratory function.', 'Skeletal functions'),
      imposter('skeletal-overview-7', 'Identify the incorrect bone example.', ['Femur - long bone', 'Scapula - flat bone', 'Vertebra - irregular bone', 'Humerus - cranial bone'], 3, 'The humerus is a long bone of the upper limb.', 'Bone classification'),
      imposter('skeletal-overview-8', 'Identify the false statement about compact and spongy bone.', ['Compact bone is dense.', 'Spongy bone contains trabeculae.', 'Spongy bone is always outside compact bone.', 'Bone architecture reflects mechanical load.'], 2, 'Spongy bone is typically internal, with compact bone external.', 'Bone structure'),
      caseQ('skeletal-overview-9', 'A child has active blood cell production in red marrow.', 'Which skeletal function is represented?', ['Hematopoiesis', 'Gas exchange', 'Hormone-only signaling', 'Urine production'], 0, 'Red marrow supports hematopoiesis.', 'Hematopoiesis'),
      caseQ('skeletal-overview-10', 'An X-ray shows a fracture through the shaft of a long bone.', 'Which region is the shaft?', ['Epiphysis', 'Diaphysis', 'Metaphysis', 'Articular cartilage'], 1, 'The diaphysis is the shaft of a long bone.', 'Long bone anatomy'),
    ],
  },
  {
    id: 'skull-and-vertebral-column',
    order: 7,
    title: 'Skull and Vertebral Column',
    subtitle: 'Orient the axial skeleton and neural protection.',
    estimatedMinutes: 10,
    questions: [
      mcq('skull-vertebrae-1', 'Which bone forms the forehead?', ['Frontal', 'Occipital', 'Temporal', 'Zygomatic'], 0, 'The frontal bone forms the forehead.', 'Skull bones'),
      mcq('skull-vertebrae-2', 'Which bone contains the foramen magnum?', ['Sphenoid', 'Occipital', 'Maxilla', 'Nasal'], 1, 'The foramen magnum is in the occipital bone.', 'Occipital bone'),
      mcq('skull-vertebrae-3', 'Which vertebra is the atlas?', ['C1', 'C2', 'T1', 'L5'], 0, 'C1 is the atlas.', 'Cervical vertebrae'),
      mcq('skull-vertebrae-4', 'Which vertebra is the axis?', ['C1', 'C2', 'T12', 'S1'], 1, 'C2 is the axis and has the dens.', 'Cervical vertebrae'),
      mcq('skull-vertebrae-5', 'How many thoracic vertebrae are typical?', ['7', '12', '5', '4'], 1, 'There are typically 12 thoracic vertebrae.', 'Vertebral regions'),
      imposter('skull-vertebrae-6', 'Identify the false skull statement.', ['Parietal bones form superior-lateral skull.', 'Temporal bones are lateral skull bones.', 'Mandible is the lower jaw.', 'Occipital bone forms the forehead.'], 3, 'The frontal bone forms the forehead.', 'Skull bones'),
      imposter('skull-vertebrae-7', 'Identify the incorrect vertebral region count.', ['Cervical - 7', 'Thoracic - 12', 'Lumbar - 5', 'Sacral - 12'], 3, 'The sacrum is formed by fused sacral vertebrae, typically 5.', 'Vertebral regions'),
      imposter('skull-vertebrae-8', 'Identify the false vertebral statement.', ['Thoracic vertebrae articulate with ribs.', 'Lumbar vertebrae are large for weight bearing.', 'Cervical vertebrae are in the neck.', 'The coccyx is in the skull.'], 3, 'The coccyx is the tailbone at the inferior vertebral column.', 'Vertebral column'),
      caseQ('skull-vertebrae-9', 'A patient nods yes at the atlanto-occipital joint.', 'Which vertebra supports this skull movement?', ['C1 atlas', 'C2 axis', 'T1', 'L1'], 0, 'The atlas participates in nodding with the occipital condyles.', 'Atlanto-occipital joint'),
      caseQ('skull-vertebrae-10', 'A patient rotates the head side to side at the joint involving the dens.', 'Which vertebra has the dens?', ['Atlas', 'Axis', 'T12', 'Sacrum'], 1, 'The dens is a projection of the axis (C2).', 'Atlantoaxial joint'),
    ],
  },
]

const addMission = (mission) => legacyMissions.push(mission)

addMission({
  id: 'thoracic-cage',
  order: 8,
  title: 'Thoracic Cage',
  subtitle: 'Ribs, sternum, and thoracic protection.',
  estimatedMinutes: 10,
  questions: [
    mcq('thoracic-cage-1', 'Which bone forms the anterior midline of the thoracic cage?', ['Sternum', 'Scapula', 'Clavicle', 'Humerus'], 0, 'The sternum is the anterior midline thoracic bone.', 'Sternum'),
    mcq('thoracic-cage-2', 'How many pairs of ribs are typical?', ['10', '11', '12', '13'], 2, 'Humans typically have 12 pairs of ribs.', 'Rib count'),
    mcq('thoracic-cage-3', 'Which ribs are true ribs?', ['1-7', '8-10', '11-12', 'All ribs'], 0, 'Ribs 1-7 attach directly to the sternum through costal cartilage.', 'True ribs'),
    mcq('thoracic-cage-4', 'Which ribs are floating ribs?', ['1-2', '3-5', '8-10', '11-12'], 3, 'Ribs 11-12 are floating ribs.', 'Floating ribs'),
    mcq('thoracic-cage-5', 'What cartilage connects ribs to the sternum?', ['Costal cartilage', 'Articular cartilage', 'Elastic cartilage', 'Meniscus'], 0, 'Costal cartilages connect ribs to the sternum directly or indirectly.', 'Costal cartilage'),
    imposter('thoracic-cage-6', 'Identify the false thoracic cage statement.', ['It protects heart and lungs.', 'It includes ribs and sternum.', 'It contributes to breathing mechanics.', 'It contains the cranial cavity.'], 3, 'The cranial cavity is in the skull.', 'Thoracic cage'),
    imposter('thoracic-cage-7', 'Identify the incorrect rib classification.', ['Ribs 1-7 true', 'Ribs 8-10 false', 'Ribs 11-12 floating', 'Ribs 1-7 floating'], 3, 'Ribs 1-7 are true ribs.', 'Rib classification'),
    imposter('thoracic-cage-8', 'Identify the false sternum component.', ['Manubrium', 'Body', 'Xiphoid process', 'Dens'], 3, 'The dens belongs to C2, not the sternum.', 'Sternum'),
    caseQ('thoracic-cage-9', 'A clinician palpates the superior part of the sternum near the clavicles.', 'Which part is palpated?', ['Manubrium', 'Xiphoid process', 'Sternal body', 'Costal groove'], 0, 'The manubrium is the superior sternum.', 'Manubrium'),
    caseQ('thoracic-cage-10', 'A fracture affects a rib with no anterior attachment to the sternum.', 'Which rib is most likely?', ['Rib 2', 'Rib 5', 'Rib 8', 'Rib 12'], 3, 'Rib 12 is a floating rib with no anterior sternal attachment.', 'Floating ribs'),
  ],
})

addMission({
  id: 'upper-limb-bones',
  order: 9,
  title: 'Upper Limb Bones',
  subtitle: 'Pectoral girdle, arm, forearm, and hand.',
  estimatedMinutes: 10,
  questions: [
    mcq('upper-bones-1', 'Which bones form the pectoral girdle?', ['Clavicle and scapula', 'Humerus and radius', 'Ulna and carpals', 'Sternum and ribs'], 0, 'The clavicle and scapula form the pectoral girdle.', 'Pectoral girdle'),
    mcq('upper-bones-2', 'Which bone is in the arm?', ['Humerus', 'Radius', 'Ulna', 'Scaphoid'], 0, 'The humerus is the arm bone.', 'Humerus'),
    mcq('upper-bones-3', 'Which forearm bone is lateral in anatomical position?', ['Ulna', 'Radius', 'Humerus', 'Scapula'], 1, 'The radius lies laterally on the thumb side.', 'Radius/ulna'),
    mcq('upper-bones-4', 'Which forearm bone forms the olecranon?', ['Radius', 'Ulna', 'Clavicle', 'Metacarpal'], 1, 'The olecranon is part of the ulna.', 'Ulna'),
    mcq('upper-bones-5', 'Which bones form the wrist?', ['Carpals', 'Metacarpals', 'Phalanges', 'Tarsals'], 0, 'Carpals form the wrist.', 'Hand bones'),
    imposter('upper-bones-6', 'Identify the false upper limb statement.', ['The humerus articulates with the scapula.', 'The radius is lateral in anatomical position.', 'The ulna forms the olecranon.', 'Tarsals form the wrist.'], 3, 'Carpals form the wrist; tarsals form the ankle.', 'Hand bones'),
    imposter('upper-bones-7', 'Identify the incorrect bone-region pairing.', ['Clavicle - pectoral girdle', 'Scapula - shoulder girdle', 'Humerus - arm', 'Femur - forearm'], 3, 'The femur is the thigh bone.', 'Upper limb bones'),
    imposter('upper-bones-8', 'Identify the false hand statement.', ['Metacarpals form the palm.', 'Phalanges form fingers.', 'Carpals form the wrist.', 'The scaphoid is a metacarpal.'], 3, 'The scaphoid is a carpal bone.', 'Carpal bones'),
    caseQ('upper-bones-9', 'A fall on an outstretched hand injures a lateral wrist carpal near the thumb.', 'Which bone is classically at risk?', ['Scaphoid', 'Talus', 'Patella', 'Fibula'], 0, 'The scaphoid is a lateral carpal commonly injured in falls.', 'Scaphoid'),
    caseQ('upper-bones-10', 'A student palpates the point of the elbow posteriorly.', 'Which bone forms it?', ['Radius', 'Ulna', 'Humerus', 'Scapula'], 1, 'The olecranon of the ulna forms the point of the elbow.', 'Olecranon'),
  ],
})

addMission({
  id: 'lower-limb-bones',
  order: 10,
  title: 'Lower Limb Bones',
  subtitle: 'Pelvic girdle, thigh, leg, and foot.',
  estimatedMinutes: 10,
  questions: [
    mcq('lower-bones-1', 'Which bone is the thigh bone?', ['Femur', 'Tibia', 'Fibula', 'Talus'], 0, 'The femur is the thigh bone.', 'Femur'),
    mcq('lower-bones-2', 'Which leg bone is medial and weight-bearing?', ['Fibula', 'Tibia', 'Patella', 'Calcaneus'], 1, 'The tibia is medial and bears most body weight in the leg.', 'Tibia'),
    mcq('lower-bones-3', 'Which leg bone is lateral and slender?', ['Tibia', 'Fibula', 'Femur', 'Ilium'], 1, 'The fibula is the lateral slender leg bone.', 'Fibula'),
    mcq('lower-bones-4', 'Which bone is the heel bone?', ['Talus', 'Calcaneus', 'Navicular', 'Cuboid'], 1, 'The calcaneus forms the heel.', 'Foot bones'),
    mcq('lower-bones-5', 'Which bone is embedded in the quadriceps tendon?', ['Patella', 'Talus', 'Ilium', 'Fibula'], 0, 'The patella is a sesamoid bone in the quadriceps tendon.', 'Patella'),
    imposter('lower-bones-6', 'Identify the false lower limb statement.', ['Femur is thigh.', 'Tibia is medial leg.', 'Fibula is lateral leg.', 'Carpals form the ankle.'], 3, 'Tarsals form the ankle region.', 'Foot bones'),
    imposter('lower-bones-7', 'Identify the incorrect pairing.', ['Ilium - hip bone part', 'Ischium - hip bone part', 'Pubis - hip bone part', 'Humerus - hip bone part'], 3, 'The humerus is an upper limb bone.', 'Pelvic bone'),
    imposter('lower-bones-8', 'Identify the false foot statement.', ['Metatarsals form part of the foot.', 'Phalanges form toes.', 'Tarsals include calcaneus.', 'Metacarpals form toes.'], 3, 'Metacarpals are in the hand.', 'Foot bones'),
    caseQ('lower-bones-9', 'A patient has pain over the medial shin bone after impact.', 'Which bone is most likely involved?', ['Tibia', 'Fibula', 'Femur', 'Talus'], 0, 'The tibia is the medial shin bone.', 'Tibia'),
    caseQ('lower-bones-10', 'A clinician palpates the lateral ankle prominence.', 'Which bone forms the lateral malleolus?', ['Tibia', 'Fibula', 'Calcaneus', 'Femur'], 1, 'The distal fibula forms the lateral malleolus.', 'Fibula'),
  ],
})

addMission({
  id: 'joint-classification',
  order: 11,
  title: 'Joint Classification',
  subtitle: 'Classify joints by structure and movement.',
  estimatedMinutes: 10,
  questions: [
    mcq('joint-class-1', 'Which structural joint class has a joint cavity?', ['Fibrous', 'Cartilaginous', 'Synovial', 'Suture'], 2, 'Synovial joints have a joint cavity.', 'Joint classification'),
    mcq('joint-class-2', 'Which functional class is freely movable?', ['Synarthrosis', 'Amphiarthrosis', 'Diarthrosis', 'Suture'], 2, 'Diarthroses are freely movable joints.', 'Functional joint classes'),
    mcq('joint-class-3', 'Which joint type is a skull suture?', ['Fibrous', 'Synovial', 'Cartilaginous', 'Ball-and-socket'], 0, 'Sutures are fibrous joints.', 'Fibrous joints'),
    mcq('joint-class-4', 'Which tissue connects bones in a synchondrosis?', ['Hyaline cartilage', 'Skeletal muscle', 'Dense regular tendon only', 'Nervous tissue'], 0, 'A synchondrosis is a cartilaginous joint united by hyaline cartilage.', 'Cartilaginous joints'),
    mcq('joint-class-5', 'Which feature is typical of synovial joints?', ['Articular cartilage', 'No movement ever', 'No capsule', 'No fluid'], 0, 'Synovial joints have articular cartilage, capsule, and synovial fluid.', 'Synovial joints'),
    imposter('joint-class-6', 'Identify the false joint statement.', ['Synovial joints are usually diarthroses.', 'Sutures are fibrous joints.', 'Cartilaginous joints include symphyses.', 'All fibrous joints have a synovial cavity.'], 3, 'Fibrous joints do not have a synovial cavity.', 'Joint classification'),
    imposter('joint-class-7', 'Identify the incorrect example.', ['Skull suture - fibrous', 'Pubic symphysis - cartilaginous', 'Shoulder - synovial', 'Knee - suture'], 3, 'The knee is a synovial joint.', 'Joint examples'),
    imposter('joint-class-8', 'Identify the false synovial feature.', ['Joint cavity', 'Synovial fluid', 'Articular cartilage', 'Epidermal lining'], 3, 'Synovial joints are lined by synovial membrane, not epidermis.', 'Synovial joints'),
    caseQ('joint-class-9', 'A radiology report describes a joint with a capsule, synovial fluid, and articular cartilage.', 'Which structural class is it?', ['Synovial', 'Fibrous', 'Cartilaginous', 'Suture'], 0, 'Those are synovial joint features.', 'Synovial joints'),
    caseQ('joint-class-10', 'A student examines the immovable joints between adult cranial bones.', 'Which class best fits?', ['Fibrous suture', 'Ball-and-socket', 'Plane synovial', 'Pivot synovial'], 0, 'Cranial sutures are fibrous joints.', 'Sutures'),
  ],
})

addMission({
  id: 'synovial-joint-movements',
  order: 12,
  title: 'Synovial Joint Movements',
  subtitle: 'Name the motions that describe clinical movement.',
  estimatedMinutes: 10,
  questions: [
    mcq('movement-1', 'Which movement decreases the angle between bones?', ['Extension', 'Flexion', 'Abduction', 'Rotation'], 1, 'Flexion decreases the angle at a joint.', 'Flexion/extension'),
    mcq('movement-2', 'Which movement increases the angle between bones?', ['Flexion', 'Extension', 'Inversion', 'Pronation'], 1, 'Extension increases the angle at a joint.', 'Flexion/extension'),
    mcq('movement-3', 'Which movement takes a limb away from the midline?', ['Adduction', 'Abduction', 'Supination', 'Opposition'], 1, 'Abduction moves away from the midline.', 'Abduction/adduction'),
    mcq('movement-4', 'Which forearm movement turns the palm posteriorly from anatomical position?', ['Supination', 'Pronation', 'Dorsiflexion', 'Eversion'], 1, 'Pronation turns the palm posteriorly or downward.', 'Pronation/supination'),
    mcq('movement-5', 'Which movement lifts the foot toward the shin?', ['Plantarflexion', 'Dorsiflexion', 'Inversion', 'Eversion'], 1, 'Dorsiflexion raises the foot toward the shin.', 'Foot movements'),
    imposter('movement-6', 'Identify the false movement statement.', ['Abduction moves away from midline.', 'Adduction moves toward midline.', 'Flexion increases joint angle.', 'Extension increases joint angle.'], 2, 'Flexion decreases joint angle.', 'Movement terms'),
    imposter('movement-7', 'Identify the incorrect foot movement.', ['Inversion turns sole medially.', 'Eversion turns sole laterally.', 'Dorsiflexion lifts foot upward.', 'Plantarflexion lifts toes toward shin.'], 3, 'Plantarflexion points the foot downward.', 'Foot movements'),
    imposter('movement-8', 'Identify the false forearm statement.', ['Supination can hold soup.', 'Pronation turns palm down.', 'Radius crosses ulna during pronation.', 'Supination is the same as dorsiflexion.'], 3, 'Supination is forearm rotation; dorsiflexion is at the ankle.', 'Pronation/supination'),
    caseQ('movement-9', 'A patient raises the arm laterally away from the trunk.', 'Which movement is occurring?', ['Adduction', 'Abduction', 'Pronation', 'Flexion'], 1, 'Moving the arm away from the midline is abduction.', 'Abduction/adduction'),
    caseQ('movement-10', 'A patient points the toes downward like pressing a gas pedal.', 'Which movement is occurring?', ['Dorsiflexion', 'Plantarflexion', 'Inversion', 'Extension of knee'], 1, 'Plantarflexion points the foot downward.', 'Foot movements'),
  ],
})

addMission({
  id: 'major-upper-limb-joints',
  order: 13,
  title: 'Major Upper Limb Joints',
  subtitle: 'Shoulder, elbow, wrist, and hand mechanics.',
  estimatedMinutes: 10,
  questions: [
    mcq('upper-joints-1', 'What type of synovial joint is the glenohumeral joint?', ['Hinge', 'Ball-and-socket', 'Pivot', 'Saddle'], 1, 'The shoulder is a ball-and-socket joint.', 'Shoulder joint'),
    mcq('upper-joints-2', 'Which bones form the elbow joint region?', ['Humerus, ulna, radius', 'Scapula and clavicle only', 'Carpals and metacarpals', 'Femur and tibia'], 0, 'The elbow region involves humerus, ulna, and radius.', 'Elbow joint'),
    mcq('upper-joints-3', 'Which joint allows pronation and supination proximally?', ['Proximal radioulnar', 'Glenohumeral', 'Radiocarpal', 'Interphalangeal'], 0, 'The proximal radioulnar joint is a pivot joint for forearm rotation.', 'Radioulnar joints'),
    mcq('upper-joints-4', 'What type of joint is the first carpometacarpal joint?', ['Saddle', 'Hinge', 'Pivot', 'Suture'], 0, 'The thumb carpometacarpal joint is a saddle joint.', 'Thumb joint'),
    mcq('upper-joints-5', 'Which joint primarily permits wrist flexion and extension?', ['Radiocarpal', 'Glenohumeral', 'Humeroulnar', 'Sternoclavicular only'], 0, 'The radiocarpal joint is the wrist joint.', 'Wrist joint'),
    imposter('upper-joints-6', 'Identify the false upper limb joint statement.', ['Shoulder permits wide mobility.', 'Elbow includes hinge movement.', 'Radioulnar joints allow forearm rotation.', 'Wrist is a skull suture.'], 3, 'The wrist is a synovial joint region, not a skull suture.', 'Upper limb joints'),
    imposter('upper-joints-7', 'Identify the incorrect joint-action pairing.', ['Elbow - flexion/extension', 'Radioulnar - pronation/supination', 'Shoulder - circumduction', 'Thumb CMC - knee flexion'], 3, 'The thumb CMC allows thumb movements such as opposition, not knee flexion.', 'Thumb joint'),
    imposter('upper-joints-8', 'Identify the false shoulder statement.', ['The humeral head articulates with the glenoid cavity.', 'Mobility is high.', 'Stability depends partly on rotator cuff muscles.', 'It is a hinge-only joint.'], 3, 'The shoulder is ball-and-socket, not hinge-only.', 'Shoulder joint'),
    caseQ('upper-joints-9', 'A patient cannot rotate the palm upward after a forearm injury.', 'Which movement is impaired?', ['Supination', 'Dorsiflexion', 'Abduction of hip', 'Inversion'], 0, 'Turning the palm upward/anteriorly is supination.', 'Pronation/supination'),
    caseQ('upper-joints-10', 'A patient dislocates the joint between the humeral head and glenoid cavity.', 'Which joint is injured?', ['Glenohumeral', 'Radiocarpal', 'Proximal radioulnar', 'Interphalangeal'], 0, 'The glenohumeral joint is the shoulder joint.', 'Shoulder joint'),
  ],
})

addMission({
  id: 'major-lower-limb-joints',
  order: 14,
  title: 'Major Lower Limb Joints',
  subtitle: 'Hip, knee, ankle, and foot mechanics.',
  estimatedMinutes: 10,
  questions: [
    mcq('lower-joints-1', 'What type of synovial joint is the hip?', ['Ball-and-socket', 'Hinge', 'Pivot', 'Saddle'], 0, 'The hip is a ball-and-socket joint.', 'Hip joint'),
    mcq('lower-joints-2', 'Which bones form the knee joint primarily?', ['Femur and tibia', 'Femur and humerus', 'Tibia and radius', 'Fibula and ulna'], 0, 'The knee primarily involves femur and tibia, with the patella anteriorly.', 'Knee joint'),
    mcq('lower-joints-3', 'Which joint permits dorsiflexion and plantarflexion?', ['Talocrural ankle joint', 'Hip joint', 'Proximal tibiofibular joint', 'Pubic symphysis'], 0, 'The talocrural joint is the ankle joint for dorsiflexion and plantarflexion.', 'Ankle joint'),
    mcq('lower-joints-4', 'Which structure deepens the hip socket?', ['Acetabular labrum', 'Meniscus', 'Olecranon', 'Costal cartilage'], 0, 'The acetabular labrum deepens the acetabulum.', 'Hip joint'),
    mcq('lower-joints-5', 'Which structures improve congruence in the knee?', ['Menisci', 'Carpals', 'Fontanelles', 'Costal cartilages only'], 0, 'Menisci help distribute load and improve congruence in the knee.', 'Knee menisci'),
    imposter('lower-joints-6', 'Identify the false lower limb joint statement.', ['Hip is ball-and-socket.', 'Knee permits flexion and extension.', 'Ankle permits dorsiflexion and plantarflexion.', 'Knee is a cranial suture.'], 3, 'The knee is a synovial joint, not a suture.', 'Lower limb joints'),
    imposter('lower-joints-7', 'Identify the incorrect joint-action pairing.', ['Hip - flexion/extension', 'Knee - flexion/extension', 'Ankle - dorsiflexion/plantarflexion', 'Hip - pronation/supination'], 3, 'Pronation/supination are forearm movements.', 'Lower limb movements'),
    imposter('lower-joints-8', 'Identify the false ankle statement.', ['Talocrural joint includes tibia, fibula, and talus.', 'Dorsiflexion lifts the foot.', 'Plantarflexion points the foot.', 'The ankle is formed by radius and ulna.'], 3, 'Radius and ulna are forearm bones.', 'Ankle joint'),
    caseQ('lower-joints-9', 'A patient tears a crescent-shaped fibrocartilage in the knee.', 'Which structure is injured?', ['Meniscus', 'Labrum of shoulder', 'Costal cartilage', 'Intervertebral disc only'], 0, 'The knee has medial and lateral menisci.', 'Knee menisci'),
    caseQ('lower-joints-10', 'A patient has pain at the joint between femoral head and acetabulum.', 'Which joint is involved?', ['Hip', 'Knee', 'Ankle', 'Subtalar'], 0, 'The femoral head articulates with the acetabulum at the hip.', 'Hip joint'),
  ],
})

addMission({
  id: 'muscle-fundamentals',
  order: 15,
  title: 'Muscle Fundamentals',
  subtitle: 'Muscle types, attachments, and actions.',
  estimatedMinutes: 10,
  questions: [
    mcq('muscle-fund-1', 'Which muscle type is voluntary and striated?', ['Skeletal', 'Smooth', 'Cardiac', 'Epithelial'], 0, 'Skeletal muscle is voluntary and striated.', 'Muscle tissue types'),
    mcq('muscle-fund-2', 'Which muscle type is found in the heart?', ['Skeletal', 'Cardiac', 'Smooth', 'Dense connective'], 1, 'Cardiac muscle forms the myocardium.', 'Muscle tissue types'),
    mcq('muscle-fund-3', 'What is the prime mover called?', ['Agonist', 'Antagonist', 'Fixator', 'Ligament'], 0, 'The agonist is the prime mover.', 'Muscle roles'),
    mcq('muscle-fund-4', 'Which attachment is usually more fixed?', ['Insertion', 'Origin', 'Tendon sheath', 'Bursa'], 1, 'The origin is usually the more fixed attachment.', 'Origin/insertion'),
    mcq('muscle-fund-5', 'What connects muscle to bone?', ['Tendon', 'Ligament', 'Cartilage', 'Synovial fluid'], 0, 'Tendons attach muscle to bone.', 'Tendons'),
    imposter('muscle-fund-6', 'Identify the false muscle role statement.', ['Agonist produces main action.', 'Antagonist opposes action.', 'Synergist assists action.', 'Fixator always forms a joint cavity.'], 3, 'Fixators stabilize structures; they do not form joint cavities.', 'Muscle roles'),
    imposter('muscle-fund-7', 'Identify the incorrect connective tissue layer.', ['Endomysium surrounds fibers.', 'Perimysium surrounds fascicles.', 'Epimysium surrounds whole muscle.', 'Periosteum surrounds each muscle fiber.'], 3, 'Endomysium surrounds muscle fibers; periosteum covers bone.', 'Muscle connective tissue'),
    imposter('muscle-fund-8', 'Identify the false contraction statement.', ['Concentric contraction shortens muscle.', 'Eccentric contraction lengthens under tension.', 'Isometric contraction maintains length.', 'All contractions require joint movement.'], 3, 'Isometric contraction can generate force without joint movement.', 'Contraction types'),
    caseQ('muscle-fund-9', 'During elbow flexion, biceps brachii provides the main force.', 'What role is biceps playing?', ['Agonist', 'Antagonist', 'Fixator', 'Ligament'], 0, 'The main force-producing muscle is the agonist.', 'Muscle roles'),
    caseQ('muscle-fund-10', 'A tendon is inflamed near a muscle attachment to bone.', 'What tissue connects the muscle to bone?', ['Tendon', 'Ligament', 'Meniscus', 'Cartilage'], 0, 'Tendons connect muscle to bone.', 'Tendons'),
  ],
})

addMission({
  id: 'upper-limb-muscles',
  order: 16,
  title: 'Upper Limb Muscles',
  subtitle: 'Major movers of shoulder, arm, forearm, and hand.',
  estimatedMinutes: 10,
  questions: [
    mcq('upper-muscles-1', 'Which muscle is a major shoulder abductor?', ['Deltoid', 'Biceps femoris', 'Gastrocnemius', 'Rectus abdominis'], 0, 'The deltoid is a major shoulder abductor.', 'Shoulder muscles'),
    mcq('upper-muscles-2', 'Which muscle flexes the elbow and supinates the forearm?', ['Biceps brachii', 'Triceps brachii', 'Deltoid', 'Latissimus dorsi'], 0, 'Biceps brachii flexes the elbow and supinates the forearm.', 'Arm muscles'),
    mcq('upper-muscles-3', 'Which muscle extends the elbow?', ['Triceps brachii', 'Brachialis', 'Biceps brachii', 'Pronator teres'], 0, 'Triceps brachii is the main elbow extensor.', 'Arm muscles'),
    mcq('upper-muscles-4', 'Which rotator cuff muscle begins with supraspinatus?', ['Supraspinatus', 'Sartorius', 'Soleus', 'Serratus anterior'], 0, 'Supraspinatus is one of the rotator cuff muscles.', 'Rotator cuff'),
    mcq('upper-muscles-5', 'Which muscle protracts the scapula and helps hold it against the thoracic wall?', ['Serratus anterior', 'Triceps brachii', 'Flexor carpi radialis', 'Thenar muscles'], 0, 'Serratus anterior protracts and stabilizes the scapula.', 'Scapular muscles'),
    imposter('upper-muscles-6', 'Identify the false upper limb muscle statement.', ['Deltoid abducts shoulder.', 'Triceps extends elbow.', 'Biceps supinates forearm.', 'Gastrocnemius abducts shoulder.'], 3, 'Gastrocnemius is a calf muscle.', 'Upper limb muscles'),
    imposter('upper-muscles-7', 'Identify the incorrect rotator cuff muscle.', ['Supraspinatus', 'Infraspinatus', 'Teres minor', 'Biceps femoris'], 3, 'Biceps femoris is a hamstring, not rotator cuff.', 'Rotator cuff'),
    imposter('upper-muscles-8', 'Identify the false forearm statement.', ['Anterior forearm muscles often flex wrist/fingers.', 'Posterior forearm muscles often extend wrist/fingers.', 'Pronator teres assists pronation.', 'Forearm muscles primarily move the hip.'], 3, 'Forearm muscles act on wrist, hand, fingers, and forearm rotation.', 'Forearm muscles'),
    caseQ('upper-muscles-9', 'A patient cannot abduct the arm from roughly 15 to 90 degrees effectively.', 'Which muscle is most implicated?', ['Deltoid', 'Gastrocnemius', 'Rectus femoris', 'Tibialis anterior'], 0, 'Deltoid is the main abductor through much of this range.', 'Shoulder muscles'),
    caseQ('upper-muscles-10', 'A patient has winging of the scapula after injury affecting the muscle that holds the scapula to the thoracic wall.', 'Which muscle is involved?', ['Serratus anterior', 'Triceps brachii', 'Brachialis', 'Flexor pollicis longus'], 0, 'Serratus anterior stabilizes the scapula against the thoracic wall.', 'Scapular muscles'),
  ],
})

addMission({
  id: 'lower-limb-muscles',
  order: 17,
  title: 'Lower Limb Muscles',
  subtitle: 'Major movers for gait and posture.',
  estimatedMinutes: 10,
  questions: [
    mcq('lower-muscles-1', 'Which muscle group extends the knee?', ['Quadriceps femoris', 'Hamstrings', 'Gluteals', 'Gastrocnemius only'], 0, 'Quadriceps femoris extends the knee.', 'Quadriceps'),
    mcq('lower-muscles-2', 'Which muscle group flexes the knee and extends the hip?', ['Hamstrings', 'Quadriceps', 'Tibialis anterior', 'Fibularis muscles'], 0, 'Hamstrings flex the knee and extend the hip.', 'Hamstrings'),
    mcq('lower-muscles-3', 'Which muscle is a powerful hip extensor?', ['Gluteus maximus', 'Sartorius', 'Tibialis anterior', 'Rectus abdominis'], 0, 'Gluteus maximus is a powerful hip extensor.', 'Gluteal muscles'),
    mcq('lower-muscles-4', 'Which muscle dorsiflexes the ankle?', ['Tibialis anterior', 'Gastrocnemius', 'Soleus', 'Biceps femoris'], 0, 'Tibialis anterior dorsiflexes the ankle.', 'Anterior leg muscles'),
    mcq('lower-muscles-5', 'Which muscles plantarflex the ankle strongly?', ['Gastrocnemius and soleus', 'Quadriceps', 'Hamstrings', 'Adductors'], 0, 'Gastrocnemius and soleus form the major calf plantarflexors.', 'Calf muscles'),
    imposter('lower-muscles-6', 'Identify the false lower limb muscle statement.', ['Quadriceps extend knee.', 'Hamstrings flex knee.', 'Gluteus maximus extends hip.', 'Tibialis anterior plantarflexes strongly.'], 3, 'Tibialis anterior dorsiflexes the ankle.', 'Anterior leg muscles'),
    imposter('lower-muscles-7', 'Identify the incorrect muscle-region pairing.', ['Quadriceps - anterior thigh', 'Hamstrings - posterior thigh', 'Gastrocnemius - posterior leg', 'Deltoid - posterior thigh'], 3, 'Deltoid is a shoulder muscle.', 'Lower limb muscles'),
    imposter('lower-muscles-8', 'Identify the false gait-related statement.', ['Hip abductors stabilize the pelvis.', 'Calf muscles contribute to push-off.', 'Tibialis anterior helps clear toes during swing.', 'Biceps brachii is the main knee extensor.'], 3, 'Quadriceps extend the knee; biceps brachii is in the arm.', 'Gait muscles'),
    caseQ('lower-muscles-9', 'A patient has foot drop and cannot dorsiflex the ankle well.', 'Which muscle is most relevant?', ['Tibialis anterior', 'Soleus', 'Gluteus maximus', 'Rectus femoris'], 0, 'Tibialis anterior is a major dorsiflexor.', 'Anterior leg muscles'),
    caseQ('lower-muscles-10', 'A patient rises from a chair and needs strong hip extension.', 'Which muscle is especially important?', ['Gluteus maximus', 'Tibialis anterior', 'Biceps brachii', 'Deltoid'], 0, 'Gluteus maximus is important for powerful hip extension.', 'Gluteal muscles'),
  ],
})

addMission({
  id: 'trunk-and-back-muscles',
  order: 18,
  title: 'Trunk and Back Muscles',
  subtitle: 'Posture, breathing, and abdominal wall support.',
  estimatedMinutes: 10,
  questions: [
    mcq('trunk-back-1', 'Which muscle is the primary muscle of inspiration?', ['Diaphragm', 'Rectus abdominis', 'Trapezius', 'Gluteus maximus'], 0, 'The diaphragm is the primary muscle of inspiration.', 'Diaphragm'),
    mcq('trunk-back-2', 'Which muscle flexes the trunk?', ['Rectus abdominis', 'Erector spinae', 'Deltoid', 'Soleus'], 0, 'Rectus abdominis flexes the trunk.', 'Abdominal wall'),
    mcq('trunk-back-3', 'Which muscle group extends the vertebral column?', ['Erector spinae', 'Quadriceps', 'Hamstrings', 'Thenar muscles'], 0, 'Erector spinae extends and helps maintain posture.', 'Back muscles'),
    mcq('trunk-back-4', 'Which muscle elevates and rotates the scapula?', ['Trapezius', 'Rectus femoris', 'Tibialis anterior', 'Brachialis'], 0, 'Trapezius acts on the scapula and neck.', 'Superficial back muscles'),
    mcq('trunk-back-5', 'Which abdominal muscle has horizontally oriented fibers?', ['Transversus abdominis', 'Rectus abdominis', 'External oblique', 'Erector spinae'], 0, 'Transversus abdominis fibers run mostly horizontally.', 'Abdominal wall'),
    imposter('trunk-back-6', 'Identify the false trunk muscle statement.', ['Diaphragm aids inspiration.', 'Rectus abdominis flexes trunk.', 'Erector spinae extends spine.', 'Soleus rotates the scapula.'], 3, 'Soleus is a calf muscle.', 'Trunk muscles'),
    imposter('trunk-back-7', 'Identify the incorrect abdominal wall muscle.', ['External oblique', 'Internal oblique', 'Transversus abdominis', 'Biceps femoris'], 3, 'Biceps femoris is a hamstring.', 'Abdominal wall'),
    imposter('trunk-back-8', 'Identify the false back statement.', ['Trapezius is superficial.', 'Latissimus dorsi acts on the humerus.', 'Erector spinae supports posture.', 'Rectus abdominis is a deep back extensor.'], 3, 'Rectus abdominis is an anterior abdominal wall muscle.', 'Back muscles'),
    caseQ('trunk-back-9', 'A patient takes a quiet breath in and the dome-shaped muscle contracts downward.', 'Which muscle is contracting?', ['Diaphragm', 'Trapezius', 'Rectus abdominis', 'Masseter'], 0, 'The diaphragm contracts and descends during inspiration.', 'Diaphragm'),
    caseQ('trunk-back-10', 'A student performs a sit-up emphasizing trunk flexion.', 'Which anterior muscle is especially active?', ['Rectus abdominis', 'Erector spinae', 'Deltoid', 'Soleus'], 0, 'Rectus abdominis flexes the trunk.', 'Abdominal wall'),
  ],
})

addMission({
  id: 'head-and-neck-overview',
  order: 19,
  title: 'Head and Neck Overview',
  subtitle: 'High-yield landmarks, muscles, and spaces.',
  estimatedMinutes: 10,
  questions: [
    mcq('head-neck-1', 'Which muscle closes the jaw?', ['Masseter', 'Sternocleidomastoid', 'Platysma', 'Diaphragm'], 0, 'Masseter is a major muscle of mastication that elevates the mandible.', 'Mastication muscles'),
    mcq('head-neck-2', 'Which muscle turns the head to the opposite side and flexes the neck bilaterally?', ['Sternocleidomastoid', 'Masseter', 'Deltoid', 'Soleus'], 0, 'Sternocleidomastoid rotates the head contralaterally and flexes the neck bilaterally.', 'Neck muscles'),
    mcq('head-neck-3', 'Which bone forms the lower jaw?', ['Mandible', 'Maxilla', 'Zygomatic', 'Frontal'], 0, 'The mandible is the lower jaw.', 'Skull bones'),
    mcq('head-neck-4', 'Which region is the cheek?', ['Buccal', 'Orbital', 'Nasal', 'Mental'], 0, 'Buccal refers to the cheek.', 'Head regions'),
    mcq('head-neck-5', 'Which region is the chin?', ['Mental', 'Buccal', 'Temporal', 'Occipital'], 0, 'Mental refers to the chin region.', 'Head regions'),
    imposter('head-neck-6', 'Identify the false head and neck statement.', ['Masseter elevates mandible.', 'Mandible is lower jaw.', 'SCM is a neck muscle.', 'Calcaneus forms the chin.'], 3, 'The calcaneus is the heel bone.', 'Head and neck basics'),
    imposter('head-neck-7', 'Identify the incorrect regional pairing.', ['Orbital - eye region', 'Nasal - nose', 'Oral - mouth', 'Popliteal - cheek'], 3, 'Popliteal refers to the posterior knee.', 'Head regions'),
    imposter('head-neck-8', 'Identify the false skull statement.', ['Maxilla forms upper jaw.', 'Mandible forms lower jaw.', 'Zygomatic contributes to cheekbone.', 'Femur forms the orbit.'], 3, 'The femur is the thigh bone.', 'Skull bones'),
    caseQ('head-neck-9', 'A patient clenches the jaw and a strong muscle is palpated at the angle of the mandible.', 'Which muscle is this?', ['Masseter', 'Trapezius', 'Platysma', 'Orbicularis oculi only'], 0, 'Masseter is palpable during jaw clenching.', 'Mastication muscles'),
    caseQ('head-neck-10', 'A patient turns the face to the left using the right sternocleidomastoid.', 'What action is demonstrated?', ['Contralateral rotation', 'Ipsilateral elbow flexion', 'Plantarflexion', 'Inversion'], 0, 'SCM rotates the head to the opposite side.', 'Neck muscles'),
  ],
})

addMission({
  id: 'thorax-regional-anatomy',
  order: 20,
  title: 'Thorax Regional Anatomy',
  subtitle: 'Chest wall, mediastinum, lungs, and heart layout.',
  estimatedMinutes: 10,
  questions: [
    mcq('thorax-region-1', 'Which region lies between the pleural cavities?', ['Mediastinum', 'Pelvis', 'Cranial cavity', 'Popliteal fossa'], 0, 'The mediastinum is between the pleural cavities.', 'Mediastinum'),
    mcq('thorax-region-2', 'Which organ is in the pericardial cavity?', ['Heart', 'Lung', 'Stomach', 'Kidney'], 0, 'The heart is within the pericardial cavity.', 'Pericardial cavity'),
    mcq('thorax-region-3', 'Which membrane is associated with the lungs?', ['Pleura', 'Peritoneum', 'Meninges', 'Periosteum'], 0, 'Pleura surrounds the lungs and lines the thoracic wall.', 'Pleura'),
    mcq('thorax-region-4', 'Which muscle forms the floor of the thoracic cavity?', ['Diaphragm', 'Masseter', 'Deltoid', 'Biceps brachii'], 0, 'The diaphragm forms the floor of the thoracic cavity.', 'Diaphragm'),
    mcq('thorax-region-5', 'Which structures occupy intercostal spaces?', ['Intercostal muscles and neurovascular bundles', 'Carpals', 'Cranial sutures', 'Menisci'], 0, 'Intercostal spaces contain intercostal muscles, vessels, and nerves.', 'Intercostal spaces'),
    imposter('thorax-region-6', 'Identify the false thorax statement.', ['Lungs occupy pleural cavities.', 'Heart lies in mediastinum.', 'Diaphragm separates thorax and abdomen.', 'Kidneys are inside pleural cavities.'], 3, 'Kidneys are retroperitoneal abdominal organs.', 'Thorax contents'),
    imposter('thorax-region-7', 'Identify the incorrect membrane pairing.', ['Lung - pleura', 'Heart - pericardium', 'Abdominal organs - peritoneum', 'Spinal cord - pleura'], 3, 'The spinal cord is covered by meninges.', 'Serous membranes'),
    imposter('thorax-region-8', 'Identify the false statement about ribs.', ['Ribs protect thoracic organs.', 'Ribs articulate posteriorly with thoracic vertebrae.', 'Ribs assist breathing mechanics.', 'Ribs form the cranial vault.'], 3, 'Cranial bones form the cranial vault.', 'Ribs'),
    caseQ('thorax-region-9', 'A clinician drains fluid from the space around a lung.', 'Which serous space is targeted?', ['Pleural cavity', 'Pericardial cavity', 'Cranial cavity', 'Vertebral canal'], 0, 'Fluid around a lung is in the pleural cavity.', 'Pleural cavity'),
    caseQ('thorax-region-10', 'A student is asked where the heart sits relative to the lungs.', 'Which answer is best?', ['In the mediastinum between lungs', 'In the pelvic cavity', 'Posterior to vertebral column', 'Inside each pleural cavity'], 0, 'The heart sits in the mediastinum between pleural cavities.', 'Mediastinum'),
  ],
})

addMission({
  id: 'abdomen-regional-anatomy',
  order: 21,
  title: 'Abdomen Regional Anatomy',
  subtitle: 'Quadrants, peritoneum, and major organs.',
  estimatedMinutes: 10,
  questions: [
    mcq('abdomen-1', 'Which quadrant contains most of the liver?', ['Right upper quadrant', 'Left upper quadrant', 'Right lower quadrant', 'Left lower quadrant'], 0, 'Most of the liver is in the right upper quadrant.', 'Abdominal quadrants'),
    mcq('abdomen-2', 'Which quadrant commonly contains the spleen?', ['Right upper', 'Left upper', 'Right lower', 'Left lower'], 1, 'The spleen is mainly in the left upper quadrant.', 'Abdominal quadrants'),
    mcq('abdomen-3', 'Which membrane lines much of the abdominal cavity?', ['Peritoneum', 'Pleura', 'Pericardium', 'Meninges'], 0, 'Peritoneum lines the abdominal cavity and covers many organs.', 'Peritoneum'),
    mcq('abdomen-4', 'Which organ is retroperitoneal?', ['Kidney', 'Stomach', 'Transverse colon mostly', 'Spleen'], 0, 'Kidneys are retroperitoneal.', 'Retroperitoneal organs'),
    mcq('abdomen-5', 'Which abdominal region is around the navel?', ['Umbilical', 'Hypogastric', 'Epigastric', 'Lumbar'], 0, 'The umbilical region surrounds the navel.', 'Abdominal regions'),
    imposter('abdomen-6', 'Identify the false abdominal statement.', ['Liver is mostly RUQ.', 'Spleen is LUQ.', 'Kidneys are retroperitoneal.', 'Lungs are peritoneal organs.'], 3, 'Lungs are thoracic organs associated with pleura.', 'Abdominal contents'),
    imposter('abdomen-7', 'Identify the incorrect membrane pairing.', ['Abdomen - peritoneum', 'Lung - pleura', 'Heart - pericardium', 'Abdomen - meninges'], 3, 'Meninges cover CNS structures.', 'Serous membranes'),
    imposter('abdomen-8', 'Identify the false quadrant statement.', ['RUQ includes much liver.', 'LUQ includes spleen.', 'RLQ may include appendix.', 'LLQ contains the brain.'], 3, 'The brain is in the cranial cavity.', 'Abdominal quadrants'),
    caseQ('abdomen-9', 'A patient has pain near the navel before it localizes elsewhere.', 'Which abdominal region is near the navel?', ['Umbilical', 'Cervical', 'Popliteal', 'Acromial'], 0, 'Umbilical refers to the navel region.', 'Abdominal regions'),
    caseQ('abdomen-10', 'A posterior abdominal organ lies behind the peritoneum and filters blood.', 'Which organ is described?', ['Kidney', 'Stomach', 'Spleen', 'Gallbladder'], 0, 'Kidneys are retroperitoneal organs that filter blood.', 'Retroperitoneal organs'),
  ],
})

addMission({
  id: 'pelvis-regional-anatomy',
  order: 22,
  title: 'Pelvis Regional Anatomy',
  subtitle: 'Pelvic bones, organs, and boundaries.',
  estimatedMinutes: 10,
  questions: [
    mcq('pelvis-1', 'Which bones fuse to form each hip bone?', ['Ilium, ischium, pubis', 'Femur, tibia, fibula', 'Radius, ulna, humerus', 'Frontal, parietal, occipital'], 0, 'Each hip bone forms from ilium, ischium, and pubis.', 'Hip bone'),
    mcq('pelvis-2', 'Which structure is the socket for the femoral head?', ['Acetabulum', 'Glenoid cavity', 'Foramen magnum', 'Olecranon'], 0, 'The acetabulum receives the femoral head.', 'Acetabulum'),
    mcq('pelvis-3', 'Which organ is in the pelvic cavity?', ['Urinary bladder', 'Lung', 'Brain', 'Heart'], 0, 'The urinary bladder lies in the pelvic cavity.', 'Pelvic contents'),
    mcq('pelvis-4', 'Which joint is anterior between pubic bones?', ['Pubic symphysis', 'Glenohumeral', 'Elbow', 'Atlantoaxial'], 0, 'The pubic symphysis joins the pubic bones anteriorly.', 'Pubic symphysis'),
    mcq('pelvis-5', 'Which bone is posterior midline in the pelvis?', ['Sacrum', 'Sternum', 'Scapula', 'Patella'], 0, 'The sacrum forms the posterior pelvic wall.', 'Sacrum'),
    imposter('pelvis-6', 'Identify the false pelvic statement.', ['Pelvis transmits weight to lower limbs.', 'Acetabulum receives femur.', 'Bladder is a pelvic organ.', 'Pleural cavities are in the pelvis.'], 3, 'Pleural cavities are thoracic.', 'Pelvic anatomy'),
    imposter('pelvis-7', 'Identify the incorrect hip bone component.', ['Ilium', 'Ischium', 'Pubis', 'Radius'], 3, 'Radius is a forearm bone.', 'Hip bone'),
    imposter('pelvis-8', 'Identify the false pelvic joint statement.', ['Sacroiliac joints link sacrum and ilia.', 'Pubic symphysis is anterior.', 'Hip joint includes acetabulum.', 'Atlantoaxial joint is in the pelvis.'], 3, 'Atlantoaxial joint is between C1 and C2.', 'Pelvic joints'),
    caseQ('pelvis-9', 'A patient fractures the socket of the hip joint.', 'Which pelvic structure is fractured?', ['Acetabulum', 'Olecranon', 'Glenoid cavity', 'Radial head'], 0, 'The acetabulum is the hip socket.', 'Acetabulum'),
    caseQ('pelvis-10', 'A clinician palpates the anterior midline cartilaginous joint of the pelvis.', 'Which joint is this?', ['Pubic symphysis', 'Knee joint', 'Shoulder joint', 'Radiocarpal joint'], 0, 'The pubic symphysis is the anterior midline pelvic joint.', 'Pubic symphysis'),
  ],
})

addMission({
  id: 'cardiovascular-overview',
  order: 23,
  title: 'Cardiovascular Overview',
  subtitle: 'Heart, vessels, and circulation basics.',
  estimatedMinutes: 10,
  questions: [
    mcq('cardio-1', 'Which chamber pumps blood to the body?', ['Left ventricle', 'Right ventricle', 'Right atrium', 'Left atrium'], 0, 'The left ventricle pumps oxygenated blood to systemic circulation.', 'Heart chambers'),
    mcq('cardio-2', 'Which chamber pumps blood to the lungs?', ['Right ventricle', 'Left ventricle', 'Left atrium', 'Right atrium'], 0, 'The right ventricle pumps blood to pulmonary circulation.', 'Heart chambers'),
    mcq('cardio-3', 'Which vessels carry blood away from the heart?', ['Arteries', 'Veins', 'Venules only', 'Lymphatic trunks'], 0, 'Arteries carry blood away from the heart.', 'Vessels'),
    mcq('cardio-4', 'Which vessels return blood to the heart?', ['Veins', 'Arteries', 'Capillaries only', 'Bronchi'], 0, 'Veins return blood toward the heart.', 'Vessels'),
    mcq('cardio-5', 'Where does exchange with tissues primarily occur?', ['Capillaries', 'Aorta', 'Vena cava', 'Pulmonary trunk only'], 0, 'Capillaries are the main exchange vessels.', 'Capillaries'),
    imposter('cardio-6', 'Identify the false cardiovascular statement.', ['Heart is in mediastinum.', 'Arteries carry blood away.', 'Veins carry blood toward heart.', 'Capillaries are airways.'], 3, 'Capillaries are blood vessels, not airways.', 'Cardiovascular basics'),
    imposter('cardio-7', 'Identify the incorrect circulation pairing.', ['Pulmonary circulation - lungs', 'Systemic circulation - body tissues', 'Coronary circulation - heart muscle', 'Portal circulation - cranial sutures'], 3, 'Portal circulation refers to blood passing through a second capillary bed, classically hepatic portal flow.', 'Circulation pathways'),
    imposter('cardio-8', 'Identify the false heart chamber statement.', ['Right atrium receives systemic venous blood.', 'Right ventricle pumps to lungs.', 'Left atrium receives pulmonary venous blood.', 'Left ventricle pumps to lungs only.'], 3, 'The left ventricle pumps to systemic circulation.', 'Heart chambers'),
    caseQ('cardio-9', 'A vessel has thick walls and carries blood away from the heart under higher pressure.', 'Which vessel type is it?', ['Artery', 'Vein', 'Lymph vessel', 'Bronchus'], 0, 'Arteries carry blood away from the heart.', 'Arteries'),
    caseQ('cardio-10', 'Blood leaves the right ventricle to reach gas exchange surfaces.', 'Which circuit is beginning?', ['Pulmonary', 'Systemic', 'Coronary venous only', 'Lymphatic'], 0, 'The right ventricle pumps into pulmonary circulation.', 'Pulmonary circulation'),
  ],
})

addMission({
  id: 'respiratory-overview',
  order: 24,
  title: 'Respiratory Overview',
  subtitle: 'Airways, lungs, and gas exchange.',
  estimatedMinutes: 10,
  questions: [
    mcq('resp-1', 'Where does gas exchange primarily occur?', ['Alveoli', 'Trachea', 'Nasal cavity', 'Larynx'], 0, 'Alveoli are the primary gas exchange surfaces.', 'Alveoli'),
    mcq('resp-2', 'Which airway lies anterior to the esophagus?', ['Trachea', 'Aorta', 'Vertebral canal', 'Ureter'], 0, 'The trachea lies anterior to the esophagus.', 'Trachea'),
    mcq('resp-3', 'Which structure contains vocal folds?', ['Larynx', 'Pharynx', 'Alveolus', 'Pleura'], 0, 'The larynx contains the vocal folds.', 'Larynx'),
    mcq('resp-4', 'Which membrane surrounds lungs?', ['Pleura', 'Pericardium', 'Peritoneum', 'Meninges'], 0, 'Pleura surrounds lungs.', 'Pleura'),
    mcq('resp-5', 'Which muscle is primary for quiet inspiration?', ['Diaphragm', 'Masseter', 'Biceps', 'Rectus femoris'], 0, 'The diaphragm is the main muscle of inspiration.', 'Diaphragm'),
    imposter('resp-6', 'Identify the false respiratory statement.', ['Alveoli exchange gases.', 'Trachea conducts air.', 'Larynx houses vocal folds.', 'Kidneys are air sacs.'], 3, 'Kidneys are urinary organs.', 'Respiratory basics'),
    imposter('resp-7', 'Identify the incorrect airway sequence.', ['Nasal cavity', 'Pharynx', 'Larynx', 'Femur'], 3, 'Femur is a bone, not an airway.', 'Airway anatomy'),
    imposter('resp-8', 'Identify the false pleural statement.', ['Pleura relates to lungs.', 'Pleural cavity is a potential space.', 'Pleura helps reduce friction.', 'Pleura lines the cranial cavity.'], 3, 'Meninges line CNS spaces; pleura is thoracic.', 'Pleura'),
    caseQ('resp-9', 'A patient inhales quietly and the main inspiratory muscle descends.', 'Which muscle is active?', ['Diaphragm', 'Trapezius', 'Deltoid', 'Soleus'], 0, 'The diaphragm contracts and descends during inspiration.', 'Diaphragm'),
    caseQ('resp-10', 'A bronchoscope passes through the windpipe before entering bronchi.', 'Which structure is the windpipe?', ['Trachea', 'Esophagus', 'Aorta', 'Ureter'], 0, 'The trachea is the windpipe.', 'Trachea'),
  ],
})

addMission({
  id: 'digestive-overview',
  order: 25,
  title: 'Digestive Overview',
  subtitle: 'Gut tube, accessory organs, and peritoneal layout.',
  estimatedMinutes: 10,
  questions: [
    mcq('digestive-1', 'Which organ receives food directly from the esophagus?', ['Stomach', 'Duodenum', 'Liver', 'Spleen'], 0, 'The esophagus empties into the stomach.', 'Digestive tract'),
    mcq('digestive-2', 'Which organ produces bile?', ['Liver', 'Stomach', 'Spleen', 'Kidney'], 0, 'The liver produces bile.', 'Liver'),
    mcq('digestive-3', 'Which organ stores and concentrates bile?', ['Gallbladder', 'Pancreas', 'Jejunum', 'Appendix'], 0, 'The gallbladder stores and concentrates bile.', 'Gallbladder'),
    mcq('digestive-4', 'Which organ produces many digestive enzymes and endocrine hormones?', ['Pancreas', 'Spleen', 'Lung', 'Bladder'], 0, 'The pancreas has exocrine digestive and endocrine functions.', 'Pancreas'),
    mcq('digestive-5', 'Where does most nutrient absorption occur?', ['Small intestine', 'Esophagus', 'Stomach only', 'Rectum'], 0, 'Most nutrient absorption occurs in the small intestine.', 'Small intestine'),
    imposter('digestive-6', 'Identify the false digestive statement.', ['Small intestine absorbs nutrients.', 'Liver produces bile.', 'Gallbladder stores bile.', 'Lungs produce bile.'], 3, 'The liver produces bile.', 'Digestive organs'),
    imposter('digestive-7', 'Identify the incorrect tract sequence.', ['Mouth', 'Esophagus', 'Stomach', 'Femur'], 3, 'The femur is a bone, not digestive tract.', 'Digestive tract'),
    imposter('digestive-8', 'Identify the false peritoneal statement.', ['Peritoneum lines abdominal cavity.', 'Mesentery carries vessels to gut.', 'Some organs are retroperitoneal.', 'Pleura suspends the intestines.'], 3, 'Mesentery/peritoneum relates to intestines; pleura relates to lungs.', 'Peritoneum'),
    caseQ('digestive-9', 'A gallstone blocks bile leaving the storage organ under the liver.', 'Which organ stores bile?', ['Gallbladder', 'Stomach', 'Kidney', 'Spleen'], 0, 'The gallbladder stores bile.', 'Gallbladder'),
    caseQ('digestive-10', 'An examiner asks where most absorption of digested nutrients occurs.', 'Which answer is best?', ['Small intestine', 'Trachea', 'Urinary bladder', 'Esophagus only'], 0, 'The small intestine is the major site of nutrient absorption.', 'Small intestine'),
  ],
})

addMission({
  id: 'urinary-reproductive-overview',
  order: 26,
  title: 'Urinary and Reproductive Overview',
  subtitle: 'Pelvic systems and organ functions.',
  estimatedMinutes: 10,
  questions: [
    mcq('uro-repro-1', 'Which organ filters blood to produce urine?', ['Kidney', 'Bladder', 'Urethra', 'Uterus'], 0, 'Kidneys filter blood and form urine.', 'Kidneys'),
    mcq('uro-repro-2', 'Which tube carries urine from kidney to bladder?', ['Ureter', 'Urethra', 'Bronchus', 'Esophagus'], 0, 'Ureters carry urine from kidneys to bladder.', 'Ureters'),
    mcq('uro-repro-3', 'Which organ stores urine?', ['Urinary bladder', 'Kidney', 'Ureter', 'Prostate'], 0, 'The bladder stores urine.', 'Bladder'),
    mcq('uro-repro-4', 'Which tube carries urine from bladder to outside?', ['Urethra', 'Ureter', 'Trachea', 'Vas deferens'], 0, 'The urethra carries urine out of the body.', 'Urethra'),
    mcq('uro-repro-5', 'Which system produces gametes?', ['Reproductive', 'Respiratory', 'Skeletal', 'Lymphatic'], 0, 'The reproductive system produces gametes.', 'Reproductive function'),
    imposter('uro-repro-6', 'Identify the false urinary statement.', ['Kidneys produce urine.', 'Ureters drain to bladder.', 'Bladder stores urine.', 'Urethra carries urine from kidney to bladder.'], 3, 'Ureters carry urine from kidney to bladder; urethra exits bladder.', 'Urinary pathway'),
    imposter('uro-repro-7', 'Identify the incorrect organ-system pairing.', ['Kidney - urinary', 'Ovary - reproductive', 'Testis - reproductive', 'Larynx - urinary'], 3, 'The larynx is respiratory.', 'System organs'),
    imposter('uro-repro-8', 'Identify the false pelvic statement.', ['Bladder lies in pelvis.', 'Internal reproductive organs are pelvic.', 'Rectum is pelvic.', 'Lungs are pelvic organs.'], 3, 'Lungs are thoracic organs.', 'Pelvic contents'),
    caseQ('uro-repro-9', 'A stone travels from kidney toward the bladder.', 'Which tube does it enter?', ['Ureter', 'Urethra', 'Trachea', 'Bronchus'], 0, 'The ureter carries urine from kidney to bladder.', 'Ureters'),
    caseQ('uro-repro-10', 'A patient feels urgency as a hollow pelvic organ fills with urine.', 'Which organ is filling?', ['Urinary bladder', 'Spleen', 'Lung', 'Gallbladder'], 0, 'The urinary bladder stores urine.', 'Bladder'),
  ],
})

addMission({
  id: 'nervous-system-overview',
  order: 27,
  title: 'Nervous System Overview',
  subtitle: 'Central and peripheral organization.',
  estimatedMinutes: 10,
  questions: [
    mcq('nervous-1', 'Which structures form the central nervous system?', ['Brain and spinal cord', 'Cranial nerves only', 'Spinal nerves only', 'Muscles and tendons'], 0, 'The CNS includes brain and spinal cord.', 'CNS/PNS'),
    mcq('nervous-2', 'Which structures are part of the peripheral nervous system?', ['Nerves outside CNS', 'Brain only', 'Spinal cord only', 'Cranial cavity only'], 0, 'The PNS includes nerves and ganglia outside the CNS.', 'CNS/PNS'),
    mcq('nervous-3', 'Which cells conduct electrical signals?', ['Neurons', 'Osteoclasts', 'Chondrocytes', 'Erythrocytes only'], 0, 'Neurons conduct electrical signals.', 'Neurons'),
    mcq('nervous-4', 'Which division controls voluntary skeletal muscle?', ['Somatic motor', 'Autonomic', 'Endocrine', 'Lymphatic'], 0, 'Somatic motor pathways control skeletal muscle voluntarily.', 'Somatic nervous system'),
    mcq('nervous-5', 'Which division regulates smooth muscle, cardiac muscle, and glands?', ['Autonomic nervous system', 'Somatic sensory only', 'Skeletal system', 'Digestive tract lumen'], 0, 'The autonomic nervous system regulates involuntary effectors.', 'Autonomic nervous system'),
    imposter('nervous-6', 'Identify the false nervous system statement.', ['Brain is CNS.', 'Spinal cord is CNS.', 'Peripheral nerves are PNS.', 'Femur is CNS tissue.'], 3, 'Femur is bone.', 'CNS/PNS'),
    imposter('nervous-7', 'Identify the incorrect function pairing.', ['Somatic motor - skeletal muscle', 'Autonomic - smooth muscle and glands', 'Sensory - detects stimuli', 'Osteoclast - nerve impulse conduction'], 3, 'Osteoclasts resorb bone.', 'Nervous functions'),
    imposter('nervous-8', 'Identify the false protection statement.', ['Cranium protects brain.', 'Vertebral canal protects spinal cord.', 'Meninges cover CNS.', 'Pleural cavity contains the spinal cord.'], 3, 'The vertebral canal contains the spinal cord.', 'Neural protection'),
    caseQ('nervous-9', 'A reflex requires sensory input and motor output through spinal nerves.', 'Which nervous system division contains spinal nerves?', ['Peripheral nervous system', 'Cranial cavity only', 'Skeletal system', 'Endocrine system'], 0, 'Spinal nerves are part of the PNS.', 'Peripheral nerves'),
    caseQ('nervous-10', 'A patient voluntarily flexes the elbow using skeletal muscle.', 'Which motor division is most direct?', ['Somatic motor', 'Autonomic', 'Enteric only', 'Endocrine'], 0, 'Voluntary skeletal muscle control is somatic motor.', 'Somatic nervous system'),
  ],
})

addMission({
  id: 'lymphatic-endocrine-overview',
  order: 28,
  title: 'Lymphatic and Endocrine Overview',
  subtitle: 'Fluid return, immunity, and hormone control.',
  estimatedMinutes: 10,
  questions: [
    mcq('lymph-endo-1', 'Which system returns excess interstitial fluid to blood?', ['Lymphatic', 'Skeletal', 'Respiratory', 'Muscular'], 0, 'The lymphatic system returns excess tissue fluid to venous blood.', 'Lymphatic function'),
    mcq('lymph-endo-2', 'Which cells are central to adaptive immune responses?', ['Lymphocytes', 'Osteocytes', 'Chondrocytes', 'Myocytes only'], 0, 'Lymphocytes are key adaptive immune cells.', 'Immune cells'),
    mcq('lymph-endo-3', 'Which organ filters lymph?', ['Lymph node', 'Lung alveolus', 'Femur', 'Ureter'], 0, 'Lymph nodes filter lymph.', 'Lymph nodes'),
    mcq('lymph-endo-4', 'Which system uses hormones carried in blood?', ['Endocrine', 'Skeletal', 'Integumentary only', 'Respiratory only'], 0, 'The endocrine system uses blood-borne hormones.', 'Endocrine function'),
    mcq('lymph-endo-5', 'Which gland is often called the master endocrine gland?', ['Pituitary', 'Spleen', 'Thymus only', 'Gallbladder'], 0, 'The pituitary regulates multiple endocrine organs.', 'Pituitary gland'),
    imposter('lymph-endo-6', 'Identify the false lymphatic statement.', ['Lymphatics return fluid.', 'Lymph nodes filter lymph.', 'Lymphocytes support immunity.', 'Lymphatic vessels carry air to alveoli.'], 3, 'Air travels through respiratory airways, not lymphatic vessels.', 'Lymphatic function'),
    imposter('lymph-endo-7', 'Identify the incorrect endocrine statement.', ['Hormones can travel in blood.', 'Endocrine glands are ductless.', 'Target tissues respond to hormones.', 'Endocrine glands primarily form synovial fluid.'], 3, 'Synovial fluid is associated with synovial joints.', 'Endocrine function'),
    imposter('lymph-endo-8', 'Identify the false organ pairing.', ['Thyroid - endocrine', 'Adrenal gland - endocrine', 'Lymph node - lymphatic', 'Patella - endocrine gland'], 3, 'Patella is a sesamoid bone.', 'System organs'),
    caseQ('lymph-endo-9', 'A swollen structure in the neck filters lymph during infection.', 'Which structure is most likely enlarged?', ['Lymph node', 'Carpal bone', 'Alveolus', 'Ureter'], 0, 'Lymph nodes can enlarge when filtering lymph during immune responses.', 'Lymph nodes'),
    caseQ('lymph-endo-10', 'A hormone released into blood affects distant target cells.', 'Which system is most directly involved?', ['Endocrine', 'Skeletal', 'Respiratory mechanical only', 'Urinary drainage only'], 0, 'Blood-borne hormones are endocrine signals.', 'Endocrine function'),
  ],
})

addMission({
  id: 'mixed-regional-anatomy-recall',
  order: 29,
  title: 'Mixed Regional Anatomy Recall',
  subtitle: 'Rapid integration of regions, bones, joints, and muscles.',
  estimatedMinutes: 10,
  questions: [
    mcq('mixed-regional-1', 'Which pairing is correct?', ['Popliteal - posterior knee', 'Patellar - heel', 'Cervical - chest', 'Carpal - ankle'], 0, 'Popliteal refers to the posterior knee.', 'Mixed regional recall'),
    mcq('mixed-regional-2', 'Which bone and region pairing is correct?', ['Femur - thigh', 'Humerus - leg', 'Tibia - arm', 'Scapula - foot'], 0, 'The femur is the thigh bone.', 'Bone-region recall'),
    mcq('mixed-regional-3', 'Which movement and joint pairing is correct?', ['Elbow flexion', 'Skull dorsiflexion', 'Knee pronation', 'Ankle supination'], 0, 'The elbow commonly performs flexion and extension.', 'Joint movement recall'),
    mcq('mixed-regional-4', 'Which muscle and action pairing is correct?', ['Quadriceps - knee extension', 'Triceps brachii - knee flexion', 'Masseter - plantarflexion', 'Soleus - jaw closure'], 0, 'Quadriceps extend the knee.', 'Muscle action recall'),
    mcq('mixed-regional-5', 'Which cavity and organ pairing is correct?', ['Cranial - brain', 'Pleural - urinary bladder', 'Pelvic - lung', 'Vertebral - heart'], 0, 'The brain is in the cranial cavity.', 'Cavity recall'),
    imposter('mixed-regional-6', 'Identify the false mixed statement.', ['The heart is medial to lungs.', 'The sternum is anterior to vertebral column.', 'The wrist is proximal to elbow.', 'The skin is superficial to muscle.'], 2, 'The wrist is distal to the elbow.', 'Directional recall'),
    imposter('mixed-regional-7', 'Identify the incorrect body map statement.', ['Thoracic region is chest.', 'Lumbar region is lower back.', 'Inguinal region is groin.', 'Acromial region is heel.'], 3, 'Acromial refers to the shoulder point.', 'Regional recall'),
    imposter('mixed-regional-8', 'Identify the false musculoskeletal statement.', ['Patella is sesamoid.', 'Hip is ball-and-socket.', 'Diaphragm aids inspiration.', 'Biceps femoris is a rotator cuff muscle.'], 3, 'Biceps femoris is a hamstring.', 'Mixed musculoskeletal recall'),
    caseQ('mixed-regional-9', 'An examiner asks for the region, bone, and movement at the anterior knee during straightening.', 'Which answer is best?', ['Patellar, patella, extension', 'Popliteal, calcaneus, dorsiflexion', 'Carpal, femur, pronation', 'Buccal, tibia, supination'], 0, 'The anterior knee is patellar, the patella is there, and straightening is extension.', 'Oral regional recall'),
    caseQ('mixed-regional-10', 'A patient points to the posterior elbow and then extends the elbow.', 'Which terms fit?', ['Olecranal region and elbow extension', 'Antecubital region and ankle eversion', 'Popliteal region and wrist flexion', 'Calcaneal region and jaw closure'], 0, 'Olecranal is posterior elbow; extension increases elbow angle.', 'Mixed regional recall'),
  ],
})

addMission({
  id: 'oral-exam-final-mixed-review',
  order: 30,
  title: 'Oral Exam Final Mixed Review',
  subtitle: 'Final integrated recall across Body Architecture.',
  estimatedMinutes: 10,
  questions: [
    mcq('oral-final-1', 'Best oral answer: where is the heart relative to the lungs?', ['Medial', 'Lateral', 'Distal', 'Superficial only'], 0, 'The heart is medial to the lungs.', 'Oral directional recall'),
    mcq('oral-final-2', 'Best oral answer: what plane separates superior and inferior portions?', ['Transverse', 'Sagittal', 'Coronal', 'Midsagittal'], 0, 'The transverse plane separates superior and inferior portions.', 'Oral plane recall'),
    mcq('oral-final-3', 'Best oral answer: which system includes bones, cartilage, and joints?', ['Skeletal', 'Respiratory', 'Endocrine', 'Urinary'], 0, 'The skeletal system includes bones, cartilage, joints, and ligaments.', 'Skeletal recall'),
    mcq('oral-final-4', 'Best oral answer: which muscle is primary for quiet inspiration?', ['Diaphragm', 'Deltoid', 'Masseter', 'Biceps brachii'], 0, 'The diaphragm is the primary inspiratory muscle.', 'Respiratory muscle recall'),
    mcq('oral-final-5', 'Best oral answer: which movement moves a limb away from midline?', ['Abduction', 'Adduction', 'Flexion', 'Pronation'], 0, 'Abduction moves away from the midline.', 'Movement recall'),
    imposter('oral-final-6', 'Identify the false oral-exam statement.', ['Synovial joints have cavities.', 'Quadriceps extend the knee.', 'Kidneys are retroperitoneal.', 'The cranial cavity contains the urinary bladder.'], 3, 'The cranial cavity contains the brain; the bladder is pelvic.', 'Mixed oral recall'),
    imposter('oral-final-7', 'Identify the incorrect explanation.', ['Ipsilateral means same side.', 'Contralateral means opposite side.', 'Superficial means closer to surface.', 'Distal means closer to trunk.'], 3, 'Distal means farther from the trunk or attachment point.', 'Terminology recall'),
    imposter('oral-final-8', 'Identify the false integrated statement.', ['Alveoli exchange gas.', 'Capillaries exchange with tissues.', 'Small intestine absorbs nutrients.', 'Patella forms the upper jaw.'], 3, 'The maxilla forms the upper jaw; patella is the kneecap.', 'Systems recall'),
    caseQ('oral-final-9', 'An examiner asks you to describe a lesion on the same side as right shoulder pain.', 'Which word should you use?', ['Ipsilateral', 'Contralateral', 'Deep', 'Inferior'], 0, 'Ipsilateral means on the same side.', 'Oral terminology recall'),
    caseQ('oral-final-10', 'An examiner asks you to identify the posterior knee region and the muscle group that flexes the knee.', 'Which answer is best?', ['Popliteal and hamstrings', 'Patellar and quadriceps', 'Carpal and rotator cuff', 'Buccal and masseter'], 0, 'The posterior knee is popliteal, and hamstrings flex the knee.', 'Final mixed recall'),
  ],
})

export const getMissionById = (missionId) => missions.find((mission) => mission.id === missionId)

export const missions = bodyArchitectureCurriculum
  .filter((unit) => unit.id !== 'oral-exam-review')
  .map((unit, index) => ({
    id: unit.id,
    order: index + 1,
    title: unit.title,
    subtitle: 'Full topic Q&A bank from the Body Architecture content pack.',
    estimatedMinutes: Math.max(6, Math.ceil(unit.questions.length * 1.2)),
    questions: unit.questions,
  }))
