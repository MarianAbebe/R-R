import { CheckCircle2, Flame, RotateCcw, Sparkles, XCircle } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useMemo, useState } from 'react'
import FocusBar from '../components/FocusBar'
import PageTransition from '../components/PageTransition'
import { getMissionById } from '../data/missions'
import { useProgress } from '../state/ProgressContext'
import { buildMissionResult, isMissionUnlocked } from '../utils/progress'

const QUESTION_LABELS = {
  mcq: 'Recall Round',
  imposter: 'Find the Imposter',
  order: 'Sequence Challenge',
  case: 'Case Round',
}

export default function MissionPlayer() {
  const { missionId } = useParams()
  const navigate = useNavigate()
  const { progress, completeMission } = useProgress()
  const mission = getMissionById(missionId)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [selectedOrder, setSelectedOrder] = useState([])
  const [answers, setAnswers] = useState([])
  const [feedback, setFeedback] = useState(null)
  const [localFocus, setLocalFocus] = useState(100)
  const [streak, setStreak] = useState(0)
  const [sessionMistakeCounts, setSessionMistakeCounts] = useState({})
  const [reaction, setReaction] = useState(null)
  const question = mission?.questions[questionIndex]
  const questionType = question?.type ?? 'mcq'
  const isLastQuestion = questionIndex === (mission?.questions.length ?? 0) - 1

  const answeredQuestionIds = useMemo(() => new Set(answers.map((answer) => answer.question.id)), [answers])

  if (!mission) return <Navigate to="/map" replace />
  if (!isMissionUnlocked(progress, mission.id)) return <Navigate to="/map" replace />

  const completeAnswer = ({ isCorrect, selectedIndex: answerIndex = null, selectedOrder: answerOrder = null }) => {
    if (feedback || answeredQuestionIds.has(question.id)) return

    const nextStreak = isCorrect ? streak + 1 : 0
    const multiplier = nextStreak >= 3 ? 2 : nextStreak === 2 ? 1.5 : 1
    const xpEarned = Math.round((isCorrect ? 15 : 0) * multiplier)
    const focusDelta = isCorrect ? 5 : -15
    const focusAfter = Math.max(0, Math.min(125, localFocus + focusDelta))
    const mistakeCount = isCorrect ? 0 : (progress.mistakeTagCounts[question.mistakeTag] ?? 0) + (sessionMistakeCounts[question.mistakeTag] ?? 0) + 1
    const selectedLabel = answerOrder?.join(' -> ') ?? question.options?.[answerIndex]
    const correctLabel = question.answerOrder?.join(' -> ') ?? question.options?.[question.answerIndex]

    const answer = {
      question,
      selectedIndex: answerIndex,
      selectedOrder: answerOrder,
      selectedLabel,
      correctLabel,
      isCorrect,
      xpEarned,
      focusDelta,
      focusAfter,
      streakAfter: nextStreak,
      multiplier,
    }

    setSelectedIndex(answerIndex)
    setAnswers((current) => [...current, answer])
    setLocalFocus(focusAfter)
    setStreak(nextStreak)
    setReaction(isCorrect ? 'correct' : 'wrong')
    if (!isCorrect) {
      setSessionMistakeCounts((counts) => ({
        ...counts,
        [question.mistakeTag]: (counts[question.mistakeTag] ?? 0) + 1,
      }))
    }
    setFeedback({
      isCorrect,
      explanation: question.explanation,
      mistakeTag: isCorrect ? null : question.mistakeTag,
      mistakeCount,
      xpEarned,
      multiplier,
      focusDelta,
      title: getFeedbackTitle(questionType, isCorrect),
    })
  }

  const chooseOption = (optionIndex) => {
    const isCorrect = optionIndex === question.answerIndex
    completeAnswer({ isCorrect, selectedIndex: optionIndex })
  }

  const chooseOrderItem = (item) => {
    if (feedback || selectedOrder.includes(item)) return

    const nextOrder = [...selectedOrder, item]
    setSelectedOrder(nextOrder)

    if (nextOrder.length === question.items.length) {
      const isCorrect = nextOrder.every((selectedItem, index) => selectedItem === question.answerOrder[index])
      completeAnswer({ isCorrect, selectedOrder: nextOrder })
    }
  }

  const resetOrder = () => {
    if (!feedback) setSelectedOrder([])
  }

  const continueMission = () => {
    if (isLastQuestion) {
      const finalAnswers = answers
      const result = buildMissionResult({ mission, answers: finalAnswers })
      completeMission({ mission, answers: finalAnswers })
      navigate(`/results/${mission.id}`, { state: { result } })
      return
    }

    setQuestionIndex((current) => current + 1)
    setSelectedIndex(null)
    setSelectedOrder([])
    setFeedback(null)
    setReaction(null)
  }

  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 rounded-lg border border-white/10 bg-panel/70 p-5">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-cyan">Mission {mission.order}</p>
              <h1 className="text-2xl font-semibold text-white">{mission.title}</h1>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm ${streak >= 2 ? 'border-amber/40 bg-amber/10 text-amber' : 'border-white/10 bg-white/5 text-slate-400'}`}>
                <Flame className="h-4 w-4" />
                <span>{streak} streak</span>
                {streak >= 3 && <span className="font-semibold">2x</span>}
                {streak === 2 && <span className="font-semibold">1.5x</span>}
              </div>
              <p className="text-sm text-slate-400">Round {questionIndex + 1} of {mission.questions.length}</p>
            </div>
          </div>
          <FocusBar value={localFocus} label="Mission Focus" />
        </div>

        <AnimatePresence mode="wait">
          <motion.section
            key={question.id}
            layout
            initial={{ opacity: 0, x: 18 }}
            animate={{
              opacity: 1,
              x: reaction === 'wrong' ? [0, -7, 7, -4, 4, 0] : 0,
              boxShadow: reaction === 'correct' ? '0 0 34px rgba(134, 239, 172, 0.24)' : '0 0 28px rgba(103, 232, 249, 0.18)',
            }}
            exit={{ opacity: 0, x: -18 }}
            transition={{ duration: 0.24 }}
            className={`rounded-lg border p-6 ${reaction === 'correct' ? 'border-mint/35 bg-mint/5' : 'border-cyan/20 bg-panel/90 shadow-glow'}`}
          >
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <p className="rounded-md border border-cyan/25 bg-cyan/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan">
                {QUESTION_LABELS[questionType]}
              </p>
              {questionType === 'order' && (
                <button
                  type="button"
                  onClick={resetOrder}
                  disabled={feedback || selectedOrder.length === 0}
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300 transition hover:bg-white/10 disabled:pointer-events-none disabled:opacity-40"
                >
                  <RotateCcw className="h-4 w-4" />
                  Reset order
                </button>
              )}
            </div>

            {question.scenario && <p className="mb-4 rounded-lg border border-violet/25 bg-violet/10 p-4 text-slate-200">{question.scenario}</p>}
            <h2 className="text-2xl font-semibold leading-snug text-white">{question.prompt}</h2>

            {questionType === 'order' ? (
              <OrderRound question={question} selectedOrder={selectedOrder} feedback={feedback} onChooseItem={chooseOrderItem} />
            ) : (
              <ChoiceRound question={question} selectedIndex={selectedIndex} feedback={feedback} onChooseOption={chooseOption} />
            )}
          </motion.section>
        </AnimatePresence>

        {feedback && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-5 rounded-lg border border-white/10 bg-panel2 p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                {feedback.isCorrect ? <CheckCircle2 className="h-5 w-5 text-mint" /> : <XCircle className="h-5 w-5 text-danger" />}
                <h3 className="font-semibold text-white">{feedback.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className={`inline-flex items-center gap-1 rounded-md border px-3 py-1 ${feedback.isCorrect ? 'border-mint/30 bg-mint/10 text-mint' : 'border-danger/30 bg-danger/10 text-danger'}`}>
                  {feedback.focusDelta > 0 ? '+' : ''}{feedback.focusDelta} Focus
                </span>
                <span className="inline-flex items-center gap-1 rounded-md border border-amber/30 bg-amber/10 px-3 py-1 text-amber">
                  <Sparkles className="h-3.5 w-3.5" />
                  +{feedback.xpEarned} XP
                  {feedback.multiplier > 1 && ` (${feedback.multiplier}x)`}
                </span>
              </div>
            </div>
            <p className="mt-3 text-slate-300">{feedback.explanation}</p>
            {feedback.mistakeTag && (
              <div className="mt-4 rounded-lg border border-danger/25 bg-danger/10 p-4">
                <p className="font-semibold text-danger">Weakness detected: {feedback.mistakeTag}</p>
                <p className="mt-1 text-sm text-slate-300">You&apos;ve missed this concept {feedback.mistakeCount} {feedback.mistakeCount === 1 ? 'time' : 'times'}.</p>
              </div>
            )}
            <button type="button" onClick={continueMission} className="mt-5 h-11 rounded-lg bg-cyan px-5 font-semibold text-slate-950 transition hover:bg-cyan/90">
              {isLastQuestion ? 'Finish Mission' : 'Next Round'}
            </button>
          </motion.div>
        )}
      </div>
    </PageTransition>
  )
}

function ChoiceRound({ question, selectedIndex, feedback, onChooseOption }) {
  return (
    <div className="mt-6 grid gap-3">
      {question.options.map((option, optionIndex) => {
        const isSelected = selectedIndex === optionIndex
        const isCorrectOption = question.answerIndex === optionIndex
        const revealCorrect = feedback && isCorrectOption
        const revealWrong = feedback && isSelected && !isCorrectOption

        return (
          <motion.button
            key={option}
            type="button"
            onClick={() => onChooseOption(optionIndex)}
            whileTap={{ scale: 0.99 }}
            className={`flex min-h-14 items-center justify-between rounded-lg border px-4 py-3 text-left transition ${
              revealCorrect
                ? 'border-mint/50 bg-mint/10 text-mint shadow-[0_0_18px_rgba(134,239,172,0.18)]'
                : revealWrong
                  ? 'border-danger/50 bg-danger/10 text-danger'
                  : 'border-white/10 bg-white/5 text-slate-100 hover:border-cyan/30 hover:bg-cyan/10'
            }`}
          >
            <span>{option}</span>
            {revealCorrect && <CheckCircle2 className="h-5 w-5" />}
            {revealWrong && <XCircle className="h-5 w-5" />}
          </motion.button>
        )
      })}
    </div>
  )
}

function OrderRound({ question, selectedOrder, feedback, onChooseItem }) {
  return (
    <div className="mt-6 grid gap-5">
      <div className="rounded-lg border border-white/10 bg-black/20 p-4">
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-slate-500">Your sequence</p>
        <div className="grid gap-2">
          {question.items.map((_, index) => {
            const selectedItem = selectedOrder[index]
            const isCorrectSlot = feedback && selectedItem === question.answerOrder[index]
            const isWrongSlot = feedback && selectedItem && selectedItem !== question.answerOrder[index]
            return (
              <div
                key={`${index}-${selectedItem ?? 'empty'}`}
                className={`flex min-h-12 items-center gap-3 rounded-lg border px-4 py-2 ${
                  isCorrectSlot
                    ? 'border-mint/40 bg-mint/10 text-mint'
                    : isWrongSlot
                      ? 'border-danger/40 bg-danger/10 text-danger'
                      : 'border-white/10 bg-white/5 text-slate-400'
                }`}
              >
                <span className="grid h-7 w-7 place-items-center rounded-md bg-white/10 text-sm text-slate-300">{index + 1}</span>
                <span>{selectedItem ?? 'Select an item'}</span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {question.items.map((item) => {
          const isUsed = selectedOrder.includes(item)
          return (
            <motion.button
              key={item}
              type="button"
              onClick={() => onChooseItem(item)}
              whileTap={{ scale: 0.98 }}
              disabled={feedback || isUsed}
              className={`min-h-12 rounded-lg border px-4 py-3 text-left transition ${
                isUsed
                  ? 'border-cyan/25 bg-cyan/10 text-cyan'
                  : 'border-white/10 bg-white/5 text-slate-100 hover:border-cyan/30 hover:bg-cyan/10'
              } disabled:pointer-events-none`}
            >
              {item}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

function getFeedbackTitle(questionType, isCorrect) {
  if (questionType === 'imposter') return isCorrect ? 'Imposter found' : 'Wrong suspect'
  if (questionType === 'order') return isCorrect ? 'Sequence locked' : 'Sequence unstable'
  if (questionType === 'case') return isCorrect ? 'Decision confirmed' : 'Decision needs review'
  return isCorrect ? 'Correct' : 'Needs review'
}
