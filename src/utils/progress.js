import { missions } from '../data/missions'

export const STORAGE_KEY = 'recallrounds-progress-v1'

export const createInitialProgress = () => ({
  xp: 0,
  focus: 100,
  completedMissionIds: [],
  unlockedMissionIds: [missions[0].id],
  attempts: {},
  mistakes: [],
  mistakeTagCounts: {},
  mistakeReviewStats: {},
  lastMissionId: missions[0].id,
})

export const loadProgress = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) return createInitialProgress()

    const parsed = JSON.parse(saved)
    const unlockedMissionIds = Array.from(new Set([missions[0].id, ...(parsed.unlockedMissionIds ?? [])]))
    return {
      ...createInitialProgress(),
      ...parsed,
      unlockedMissionIds,
      completedMissionIds: parsed.completedMissionIds ?? [],
      mistakes: parsed.mistakes ?? [],
      mistakeTagCounts: parsed.mistakeTagCounts ?? {},
      mistakeReviewStats: parsed.mistakeReviewStats ?? {},
      attempts: parsed.attempts ?? {},
    }
  } catch {
    return createInitialProgress()
  }
}

export const saveProgress = (progress) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

export const getNextMissionId = (missionId) => {
  const missionIndex = missions.findIndex((mission) => mission.id === missionId)
  return missions[missionIndex + 1]?.id ?? null
}

export const isMissionUnlocked = (progress, missionId) => progress.unlockedMissionIds.includes(missionId)

export const isMissionCompleted = (progress, missionId) => progress.completedMissionIds.includes(missionId)

export const buildMissionResult = ({ mission, answers }) => {
  const totalQuestions = mission.questions.length
  const correctCount = answers.filter((answer) => answer.isCorrect).length
  const xpEarned = answers.reduce((total, answer) => total + (answer.xpEarned ?? (answer.isCorrect ? 15 : 0)), 0)
  const focusDelta = answers.reduce((total, answer) => total + (answer.focusDelta ?? (answer.isCorrect ? 5 : -15)), 0)
  const finalFocus = answers.at(-1)?.focusAfter ?? Math.max(0, Math.min(125, 100 + focusDelta))
  const weakTopics = Object.entries(
    answers
      .filter((answer) => !answer.isCorrect)
      .reduce((counts, answer) => {
        const tag = answer.question.mistakeTag
        return { ...counts, [tag]: (counts[tag] ?? 0) + 1 }
      }, {}),
  )
    .sort((first, second) => second[1] - first[1])
    .slice(0, 2)
    .map(([tag, count]) => ({ tag, count }))

  return {
    totalQuestions,
    correctCount,
    xpEarned,
    focusDelta,
    finalFocus,
    weakTopics,
    accuracy: Math.round((correctCount / totalQuestions) * 100),
  }
}

const getSelectedAnswerLabel = (answer) => {
  if (answer.selectedLabel) return answer.selectedLabel
  if (Array.isArray(answer.selectedOrder)) return answer.selectedOrder.join(' -> ')
  return answer.question.options?.[answer.selectedIndex] ?? 'No answer'
}

const getCorrectAnswerLabel = (answer) => {
  if (answer.correctLabel) return answer.correctLabel
  if (Array.isArray(answer.question.answerOrder)) return answer.question.answerOrder.join(' -> ')
  return answer.question.options?.[answer.question.answerIndex] ?? 'Correct answer unavailable'
}

const buildMistakeEntry = ({ mission, answer }) => ({
  id: `${answer.question.id}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
  missionId: mission.id,
  missionTitle: mission.title,
  questionId: answer.question.id,
  prompt: answer.question.prompt,
  selectedAnswer: getSelectedAnswerLabel(answer),
  correctAnswer: getCorrectAnswerLabel(answer),
  explanation: answer.question.explanation,
  mistakeTag: answer.question.mistakeTag,
  createdAt: new Date().toISOString(),
})

export const applyAnswerProgress = ({ progress, mission, answer }) => {
  const mistakes = answer.isCorrect ? progress.mistakes : [buildMistakeEntry({ mission, answer }), ...progress.mistakes]
  const mistakeTagCounts = answer.isCorrect
    ? progress.mistakeTagCounts
    : {
        ...progress.mistakeTagCounts,
        [answer.question.mistakeTag]: (progress.mistakeTagCounts[answer.question.mistakeTag] ?? 0) + 1,
      }

  return {
    ...progress,
    xp: progress.xp + (answer.xpEarned ?? 0),
    focus: Math.max(0, Math.min(125, answer.focusAfter ?? progress.focus + (answer.focusDelta ?? 0))),
    mistakeTagCounts,
    mistakes,
  }
}

export const applyReviewAnswerProgress = ({ progress, mistake, isCorrect }) => {
  const currentStats = progress.mistakeReviewStats?.[mistake.id] ?? { correctStreak: 0, mastered: false }
  const correctStreak = isCorrect ? currentStats.correctStreak + 1 : 0
  const mastered = currentStats.mastered || correctStreak >= 2
  const currentTagCount = progress.mistakeTagCounts[mistake.mistakeTag] ?? 0

  return {
    ...progress,
    mistakeTagCounts: {
      ...progress.mistakeTagCounts,
      [mistake.mistakeTag]: isCorrect ? Math.max(0, currentTagCount - 1) : currentTagCount + 1,
    },
    mistakeReviewStats: {
      ...progress.mistakeReviewStats,
      [mistake.id]: {
        correctStreak,
        mastered,
        lastReviewedAt: new Date().toISOString(),
      },
    },
  }
}

export const finalizeMissionAttempt = ({ progress, mission, answers }) => {
  const result = buildMissionResult({ mission, answers })
  const nextMissionId = getNextMissionId(mission.id)
  const completedMissionIds = Array.from(new Set([...progress.completedMissionIds, mission.id]))
  const unlockedMissionIds = nextMissionId
    ? Array.from(new Set([...progress.unlockedMissionIds, nextMissionId]))
    : progress.unlockedMissionIds

  return {
    ...progress,
    completedMissionIds,
    unlockedMissionIds,
    lastMissionId: nextMissionId ?? mission.id,
    attempts: {
      ...progress.attempts,
      [mission.id]: {
        completedAt: new Date().toISOString(),
        correctCount: result.correctCount,
        totalQuestions: result.totalQuestions,
        accuracy: result.accuracy,
        xpEarned: result.xpEarned,
        focusDelta: result.focusDelta,
        finalFocus: result.finalFocus,
        weakTopics: result.weakTopics,
      },
    },
  }
}

export const applyMissionResult = ({ progress, mission, answers }) => {
  const result = buildMissionResult({ mission, answers })
  const nextMissionId = getNextMissionId(mission.id)
  const completedMissionIds = Array.from(new Set([...progress.completedMissionIds, mission.id]))
  const unlockedMissionIds = nextMissionId
    ? Array.from(new Set([...progress.unlockedMissionIds, nextMissionId]))
    : progress.unlockedMissionIds

  const mistakes = answers
    .filter((answer) => !answer.isCorrect)
    .map((answer) => buildMistakeEntry({ mission, answer }))
  const mistakeTagCounts = answers
    .filter((answer) => !answer.isCorrect)
    .reduce(
      (counts, answer) => ({
        ...counts,
        [answer.question.mistakeTag]: (counts[answer.question.mistakeTag] ?? 0) + 1,
      }),
      { ...progress.mistakeTagCounts },
    )

  return {
    ...progress,
    xp: progress.xp + result.xpEarned,
    focus: result.finalFocus,
    completedMissionIds,
    unlockedMissionIds,
    lastMissionId: nextMissionId ?? mission.id,
    attempts: {
      ...progress.attempts,
      [mission.id]: {
        completedAt: new Date().toISOString(),
        correctCount: result.correctCount,
        totalQuestions: result.totalQuestions,
        accuracy: result.accuracy,
        xpEarned: result.xpEarned,
        focusDelta: result.focusDelta,
        finalFocus: result.finalFocus,
        weakTopics: result.weakTopics,
      },
    },
    mistakeTagCounts,
    mistakes: [...mistakes, ...progress.mistakes],
  }
}
