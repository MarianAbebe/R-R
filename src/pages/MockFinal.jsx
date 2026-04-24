import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardCheck, RotateCcw, XCircle } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import { oralExamReviewQuestions } from '../data/bodyArchitecture/questions/oral-exam-review'
import { useProgress } from '../state/ProgressContext'

const mockMission = {
  id: 'mock-final',
  title: 'Mock Final',
}

export default function MockFinal() {
  const { progress, recordAnswer } = useProgress()
  const questions = oralExamReviewQuestions
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null))
  const [submitted, setSubmitted] = useState(false)
  const currentQuestion = questions[questionIndex]
  const selectedIndex = selectedAnswers[questionIndex]
  const answeredCount = selectedAnswers.filter((answer) => answer !== null).length
  const score = useMemo(
    () => selectedAnswers.reduce((total, answerIndex, index) => total + (answerIndex === questions[index].answerIndex ? 1 : 0), 0),
    [questions, selectedAnswers],
  )
  const accuracy = Math.round((score / questions.length) * 100)

  const selectAnswer = (answerIndex) => {
    if (submitted) return
    setSelectedAnswers((answers) => answers.map((answer, index) => (index === questionIndex ? answerIndex : answer)))
  }

  const submitExam = () => {
    if (submitted) return

    questions.forEach((question, index) => {
      const answerIndex = selectedAnswers[index]
      if (answerIndex !== question.answerIndex) {
        recordAnswer({
          mission: mockMission,
          answer: {
            question,
            selectedIndex: answerIndex,
            selectedLabel: answerIndex === null ? 'No answer selected' : question.options[answerIndex],
            correctLabel: question.options[question.answerIndex],
            isCorrect: false,
            xpEarned: 0,
            focusDelta: 0,
            focusAfter: progress.focus,
          },
        })
      }
    })

    setSubmitted(true)
  }

  const resetExam = () => {
    setQuestionIndex(0)
    setSelectedAnswers(Array(questions.length).fill(null))
    setSubmitted(false)
  }

  if (submitted) {
    return <MockFinalResults questions={questions} selectedAnswers={selectedAnswers} score={score} accuracy={accuracy} onReset={resetExam} />
  }

  return (
    <PageTransition>
      <section className="rounded-lg border border-amber/20 bg-panel/85 p-6 shadow-[0_0_34px_rgba(251,191,36,0.12)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-amber">
              <ClipboardCheck className="h-4 w-4" />
              Mock Final
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-white">Body Architecture exam simulation</h1>
            <p className="mt-3 max-w-3xl text-slate-300">
              Answer all 80 oral-style prompts. Explanations and missed concepts appear after submission.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-black/25 p-4 text-right">
            <p className="text-sm text-slate-400">Progress</p>
            <p className="mt-1 text-2xl font-semibold text-white">{answeredCount}/{questions.length}</p>
          </div>
        </div>

        <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full bg-amber transition-all" style={{ width: `${(answeredCount / questions.length) * 100}%` }} />
        </div>
      </section>

      <section className="mt-6 rounded-lg border border-white/10 bg-panel2 p-6">
        <div className="mb-5 flex items-center justify-between gap-4">
          <p className="text-sm uppercase tracking-[0.18em] text-cyan">Question {questionIndex + 1} of {questions.length}</p>
          <p className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">{currentQuestion.mistakeTag}</p>
        </div>

        {currentQuestion.scenario && <p className="mb-4 rounded-lg border border-cyan/15 bg-cyan/5 p-4 text-slate-300">{currentQuestion.scenario}</p>}
        <h2 className="text-2xl font-semibold leading-snug text-white">{currentQuestion.prompt}</h2>

        <div className="mt-6 grid gap-3">
          {currentQuestion.options.map((option, optionIndex) => (
            <button
              key={option}
              type="button"
              onClick={() => selectAnswer(optionIndex)}
              className={`rounded-lg border p-4 text-left text-sm transition ${
                selectedIndex === optionIndex
                  ? 'border-amber/50 bg-amber/10 text-white'
                  : 'border-white/10 bg-white/[0.03] text-slate-300 hover:border-cyan/30 hover:bg-white/10'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={() => setQuestionIndex((index) => Math.max(0, index - 1))}
            disabled={questionIndex === 0}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 font-semibold text-slate-200 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </button>

          {questionIndex === questions.length - 1 ? (
            <button
              type="button"
              onClick={submitExam}
              className="inline-flex h-11 items-center justify-center rounded-lg bg-amber px-5 font-semibold text-slate-950 transition hover:bg-amber/90"
            >
              Submit Mock Final
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setQuestionIndex((index) => Math.min(questions.length - 1, index + 1))}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-cyan px-5 font-semibold text-slate-950 transition hover:bg-cyan/90"
            >
              Next
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </section>
    </PageTransition>
  )
}

function MockFinalResults({ questions, selectedAnswers, score, accuracy, onReset }) {
  const missedTags = questions.reduce((counts, question, index) => {
    if (selectedAnswers[index] === question.answerIndex) return counts
    return { ...counts, [question.mistakeTag]: (counts[question.mistakeTag] ?? 0) + 1 }
  }, {})
  const weakTopics = Object.entries(missedTags).sort((first, second) => second[1] - first[1]).slice(0, 4)

  return (
    <PageTransition>
      <section className="rounded-lg border border-amber/20 bg-panel/85 p-6 text-center shadow-[0_0_34px_rgba(251,191,36,0.12)]">
        <p className="text-sm uppercase tracking-[0.22em] text-amber">Final Review</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">{score}/{questions.length} correct</h1>
        <p className="mt-2 text-2xl font-semibold text-cyan">{accuracy}% accuracy</p>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">
          Missed mock final answers were added to the existing mistake log for later review.
        </p>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <button type="button" onClick={onReset} className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-amber px-5 font-semibold text-slate-950 transition hover:bg-amber/90">
            <RotateCcw className="h-4 w-4" />
            Retake Mock Final
          </button>
          <Link to="/map" className="inline-flex h-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 font-semibold text-slate-100 transition hover:bg-white/10">
            Return to Study Mode
          </Link>
          <Link to="/arcade" className="inline-flex h-11 items-center justify-center rounded-lg border border-mint/30 bg-mint/10 px-5 font-semibold text-mint transition hover:bg-mint/15">
            Arcade Reinforcement
          </Link>
        </div>
      </section>

      {weakTopics.length > 0 && (
        <section className="mt-6 rounded-lg border border-danger/20 bg-danger/5 p-5">
          <h2 className="text-xl font-semibold text-white">Concepts Still Weak</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {weakTopics.map(([tag, count]) => (
              <span key={tag} className="rounded-md border border-danger/30 bg-danger/10 px-3 py-1 text-sm text-danger">{tag}: {count}</span>
            ))}
          </div>
        </section>
      )}

      <section className="mt-6 space-y-4">
        {questions.map((question, index) => {
          const selectedIndex = selectedAnswers[index]
          const isCorrect = selectedIndex === question.answerIndex
          return (
            <article key={question.id} className="rounded-lg border border-white/10 bg-panel2 p-5">
              <div className="mb-3 flex items-center gap-2">
                {isCorrect ? <CheckCircle2 className="h-5 w-5 text-mint" /> : <XCircle className="h-5 w-5 text-danger" />}
                <p className={`text-sm font-semibold ${isCorrect ? 'text-mint' : 'text-danger'}`}>
                  Question {index + 1}: {isCorrect ? 'Correct' : 'Review'}
                </p>
              </div>
              <h3 className="text-lg font-semibold text-white">{question.prompt}</h3>
              <p className="mt-3 text-sm text-slate-400">Your answer: {selectedIndex === null ? 'No answer selected' : question.options[selectedIndex]}</p>
              <p className="mt-2 text-sm text-mint">Correct answer: {question.options[question.answerIndex]}</p>
              <p className="mt-3 text-slate-300">{question.explanation}</p>
            </article>
          )
        })}
      </section>
    </PageTransition>
  )
}
