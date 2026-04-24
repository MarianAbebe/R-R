import { ArrowRight, CheckCircle2, Gamepad2, XCircle } from 'lucide-react'
import { Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import { getMissionById } from '../data/missions'
import { oralExamReviewQuestions } from '../data/bodyArchitecture/questions/oral-exam-review'
import { useProgress } from '../state/ProgressContext'

export default function ReviewTest() {
  const { progress, recordReviewAnswer } = useProgress()
  const [reviewQueue] = useState(() => buildReviewQueue(progress))
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [feedback, setFeedback] = useState(null)
  const [results, setResults] = useState([])
  const currentItem = reviewQueue[questionIndex]
  const isFinished = reviewQueue.length > 0 && questionIndex >= reviewQueue.length

  if (!progress.mistakes.length) return <Navigate to="/mistakes" replace />

  const chooseAnswer = (optionIndex) => {
    if (feedback || !currentItem) return

    const isCorrect = optionIndex === currentItem.answerIndex
    const result = {
      mistakeId: currentItem.mistake.id,
      mistakeTag: currentItem.mistake.mistakeTag,
      isCorrect,
    }

    setSelectedIndex(optionIndex)
    setResults((currentResults) => [...currentResults, result])
    setFeedback({
      isCorrect,
      explanation: currentItem.question.explanation,
      correctAnswer: currentItem.options[currentItem.answerIndex],
    })
    recordReviewAnswer({ mistake: currentItem.mistake, isCorrect })
  }

  const nextQuestion = () => {
    setSelectedIndex(null)
    setFeedback(null)
    setQuestionIndex((current) => current + 1)
  }

  if (!reviewQueue.length) {
    return (
      <PageTransition>
        <div className="rounded-lg border border-mint/25 bg-panel/80 p-8 text-center">
          <p className="text-sm uppercase tracking-[0.22em] text-mint">Review Test</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">All active mistakes are mastered.</h1>
          <Link to="/mistakes" className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-cyan px-5 font-semibold text-slate-950">
            Back to Mistakes
          </Link>
        </div>
      </PageTransition>
    )
  }

  if (isFinished) {
    const correctCount = results.filter((result) => result.isCorrect).length
    const accuracy = Math.round((correctCount / results.length) * 100)
    const improved = uniqueTags(results.filter((result) => result.isCorrect))
    const stillWeak = uniqueTags(results.filter((result) => !result.isCorrect))

    return (
      <PageTransition>
        <div className="mx-auto max-w-4xl rounded-lg border border-cyan/20 bg-panel/90 p-6 shadow-glow">
          <p className="text-sm uppercase tracking-[0.22em] text-cyan">Review Complete</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Mistake Test Results</h1>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <ResultCard label="Accuracy" value={`${accuracy}%`} />
            <ResultCard label="Correct" value={`${correctCount}/${results.length}`} />
            <ResultCard label="Reviewed" value={results.length} />
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <TopicPanel title="Concepts improved" topics={improved} tone="mint" empty="No concepts improved yet." />
            <TopicPanel title="Still weak" topics={stillWeak} tone="danger" empty="No weak concepts remain from this test." />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/map" className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-cyan px-5 font-semibold text-slate-950">
              Return to Study Mode
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/arcade" className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-mint/30 bg-mint/10 px-5 font-semibold text-mint">
              Arcade Reinforcement
              <Gamepad2 className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl">
        <div className="mb-5 rounded-lg border border-cyan/20 bg-panel/80 p-5">
          <p className="text-sm uppercase tracking-[0.22em] text-cyan">Review Test</p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-2xl font-semibold text-white">{currentItem.missionTitle}</h1>
            <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
              {questionIndex + 1}/{reviewQueue.length}
            </span>
          </div>
        </div>

        <section className="rounded-lg border border-white/10 bg-panel/90 p-6">
          <span className="inline-flex rounded-md border border-danger/25 bg-danger/10 px-3 py-1 text-sm text-danger">{currentItem.mistake.mistakeTag}</span>
          {currentItem.question.scenario && <p className="mt-4 rounded-lg border border-violet/25 bg-violet/10 p-4 text-slate-200">{currentItem.question.scenario}</p>}
          <h2 className="mt-4 text-2xl font-semibold text-white">{currentItem.prompt}</h2>

          <div className="mt-6 grid gap-3">
            {currentItem.options.map((option, optionIndex) => {
              const revealCorrect = feedback && optionIndex === currentItem.answerIndex
              const revealWrong = feedback && selectedIndex === optionIndex && !revealCorrect
              return (
                <motion.button
                  key={option}
                  type="button"
                  whileTap={{ scale: 0.99 }}
                  onClick={() => chooseAnswer(optionIndex)}
                  className={`flex min-h-14 items-center justify-between rounded-lg border px-4 py-3 text-left transition ${
                    revealCorrect
                      ? 'border-mint/50 bg-mint/10 text-mint'
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
        </section>

        {feedback && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-5 rounded-lg border border-white/10 bg-panel2 p-5">
            <div className="flex items-center gap-2">
              {feedback.isCorrect ? <CheckCircle2 className="h-5 w-5 text-mint" /> : <XCircle className="h-5 w-5 text-danger" />}
              <h3 className="font-semibold text-white">{feedback.isCorrect ? 'Improving' : 'Still weak'}</h3>
            </div>
            <p className="mt-3 text-slate-300">{feedback.explanation}</p>
            {!feedback.isCorrect && <p className="mt-3 rounded-lg border border-mint/25 bg-mint/10 p-4 text-mint">Correct answer: {feedback.correctAnswer}</p>}
            <button type="button" onClick={nextQuestion} className="mt-5 h-11 rounded-lg bg-cyan px-5 font-semibold text-slate-950">
              {questionIndex === reviewQueue.length - 1 ? 'Show Results' : 'Next Review'}
            </button>
          </motion.div>
        )}
      </div>
    </PageTransition>
  )
}

function buildReviewQueue(progress) {
  return progress.mistakes
    .filter((mistake) => !progress.mistakeReviewStats?.[mistake.id]?.mastered)
    .map((mistake) => buildReviewItem(mistake, progress))
    .filter(Boolean)
    .sort((first, second) => {
      const firstWeight = progress.mistakeTagCounts[first.mistake.mistakeTag] ?? 0
      const secondWeight = progress.mistakeTagCounts[second.mistake.mistakeTag] ?? 0
      return secondWeight - firstWeight
    })
    .slice(0, 10)
}

function buildReviewItem(mistake) {
  if (mistake.missionId === 'mock-final') {
    const originalQuestion = oralExamReviewQuestions.find((question) => question.id === mistake.questionId)
    if (!originalQuestion) return null

    return {
      mistake,
      missionTitle: 'Mock Final',
      question: originalQuestion,
      prompt: originalQuestion.prompt,
      options: originalQuestion.options,
      answerIndex: originalQuestion.answerIndex,
    }
  }

  const mission = getMissionById(mistake.missionId)
  const originalQuestion = mission?.questions.find((question) => question.id === mistake.questionId)
  if (!originalQuestion) return null

  if (originalQuestion.type === 'order') {
    return {
      mistake,
      missionTitle: mission.title,
      question: originalQuestion,
      prompt: `${originalQuestion.prompt} Select the first item in the correct sequence.`,
      options: originalQuestion.items,
      answerIndex: originalQuestion.items.indexOf(originalQuestion.answerOrder[0]),
    }
  }

  return {
    mistake,
    missionTitle: mission.title,
    question: originalQuestion,
    prompt: originalQuestion.prompt,
    options: originalQuestion.options,
    answerIndex: originalQuestion.answerIndex,
  }
}

function uniqueTags(results) {
  return Array.from(new Set(results.map((result) => result.mistakeTag)))
}

function ResultCard({ label, value }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-5">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 text-3xl font-semibold text-white">{value}</p>
    </div>
  )
}

function TopicPanel({ title, topics, tone, empty }) {
  const toneClass = tone === 'mint' ? 'border-mint/25 bg-mint/10 text-mint' : 'border-danger/25 bg-danger/10 text-danger'

  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-5">
      <h2 className="font-semibold text-white">{title}</h2>
      {topics.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {topics.map((topic) => (
            <span key={topic} className={`rounded-md border px-3 py-1 text-sm ${toneClass}`}>{topic}</span>
          ))}
        </div>
      ) : (
        <p className="mt-4 text-sm text-slate-400">{empty}</p>
      )}
    </div>
  )
}
