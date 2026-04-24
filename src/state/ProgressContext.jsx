import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { applyAnswerProgress, applyMissionResult, applyReviewAnswerProgress, createInitialProgress, finalizeMissionAttempt, loadProgress, saveProgress } from '../utils/progress'

const ProgressContext = createContext(null)

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(createInitialProgress)

  useEffect(() => {
    setProgress(loadProgress())
  }, [])

  useEffect(() => {
    saveProgress(progress)
  }, [progress])

  const value = useMemo(
    () => ({
      progress,
      completeMission: ({ mission, answers }) => {
        setProgress((currentProgress) => applyMissionResult({ progress: currentProgress, mission, answers }))
      },
      recordAnswer: ({ mission, answer }) => {
        setProgress((currentProgress) => applyAnswerProgress({ progress: currentProgress, mission, answer }))
      },
      finalizeMission: ({ mission, answers }) => {
        setProgress((currentProgress) => finalizeMissionAttempt({ progress: currentProgress, mission, answers }))
      },
      recordReviewAnswer: ({ mistake, isCorrect }) => {
        setProgress((currentProgress) => applyReviewAnswerProgress({ progress: currentProgress, mistake, isCorrect }))
      },
      resetProgress: () => setProgress(createInitialProgress()),
      clearMistakes: () => setProgress((currentProgress) => ({ ...currentProgress, mistakes: [], mistakeTagCounts: {}, mistakeReviewStats: {} })),
    }),
    [progress],
  )

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export const useProgress = () => {
  const value = useContext(ProgressContext)
  if (!value) {
    throw new Error('useProgress must be used inside ProgressProvider')
  }
  return value
}
