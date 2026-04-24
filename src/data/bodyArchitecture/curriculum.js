import { anatomicalTerminologyNotes } from './notes/anatomical-terminology'
import { skeletalSystemNotes } from './notes/skeletal-system'
import { jointsNotes } from './notes/joints'
import { muscularSystemNotes } from './notes/muscular-system'
import { regionalAnatomyNotes } from './notes/regional-anatomy'
import { bodySystemsNotes } from './notes/body-systems'
import { anatomicalTerminologyQuestions } from './questions/anatomical-terminology'
import { skeletalSystemQuestions } from './questions/skeletal-system'
import { jointsQuestions } from './questions/joints'
import { muscularSystemQuestions } from './questions/muscular-system'
import { regionalAnatomyQuestions } from './questions/regional-anatomy'
import { bodySystemsQuestions } from './questions/body-systems'
import { oralExamReviewQuestions } from './questions/oral-exam-review'

export const bodyArchitectureCurriculum = [
  {
    id: 'anatomical-terminology',
    title: 'Anatomical Terminology',
    notes: anatomicalTerminologyNotes,
    questions: anatomicalTerminologyQuestions,
  },
  {
    id: 'skeletal-system',
    title: 'Skeletal System',
    notes: skeletalSystemNotes,
    questions: skeletalSystemQuestions,
  },
  {
    id: 'joints',
    title: 'Joints',
    notes: jointsNotes,
    questions: jointsQuestions,
  },
  {
    id: 'muscular-system',
    title: 'Muscular System',
    notes: muscularSystemNotes,
    questions: muscularSystemQuestions,
  },
  {
    id: 'regional-anatomy',
    title: 'Regional Anatomy',
    notes: regionalAnatomyNotes,
    questions: regionalAnatomyQuestions,
  },
  {
    id: 'body-systems',
    title: 'Body Systems',
    notes: bodySystemsNotes,
    questions: bodySystemsQuestions,
  },
  {
    id: 'oral-exam-review',
    title: 'Oral Exam Review',
    notes: [],
    questions: oralExamReviewQuestions,
  },
]

export const getBodyArchitectureUnit = (unitId) =>
  bodyArchitectureCurriculum.find((unit) => unit.id === unitId)
