import { ClipboardCheck, Eye, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import PageTransition from '../components/PageTransition'
import { useProgress } from '../state/ProgressContext'

export default function MistakeLog() {
  const { progress, clearMistakes } = useProgress()
  const [showMastered, setShowMastered] = useState(false)
  const visibleMistakes = progress.mistakes.filter((mistake) => showMastered || !progress.mistakeReviewStats?.[mistake.id]?.mastered)
  const activeMistakeCount = progress.mistakes.filter((mistake) => !progress.mistakeReviewStats?.[mistake.id]?.mastered).length

  return (
    <PageTransition>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-cyan">Mistake Log</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Targeted Recall Queue</h1>
          <p className="mt-2 text-slate-400">Every wrong answer becomes a review card with the exact concept tag.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/review-test"
            className={`inline-flex h-11 items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold transition ${
              activeMistakeCount ? 'bg-cyan text-slate-950 hover:bg-cyan/90' : 'pointer-events-none bg-white/5 text-slate-500'
            }`}
          >
            <ClipboardCheck className="h-4 w-4" />
            Generate Review Test
          </Link>
          <button
            type="button"
            onClick={() => setShowMastered((current) => !current)}
            disabled={!progress.mistakes.length}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 text-sm font-semibold text-slate-100 transition hover:bg-white/10 disabled:pointer-events-none disabled:opacity-40"
          >
            <Eye className="h-4 w-4" />
            {showMastered ? 'Hide Mastered' : 'View Mastered'}
          </button>
          <button
            type="button"
            onClick={clearMistakes}
            disabled={!progress.mistakes.length}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 text-sm font-semibold text-slate-100 transition hover:border-danger/40 hover:bg-danger/10 hover:text-danger disabled:pointer-events-none disabled:opacity-40"
          >
            <Trash2 className="h-4 w-4" />
            Clear Log
          </button>
        </div>
      </div>

      {visibleMistakes.length ? (
        <div className="grid gap-4">
          {visibleMistakes.map((mistake) => {
            const reviewStats = progress.mistakeReviewStats?.[mistake.id]
            return (
              <article key={mistake.id} className={`rounded-lg border p-5 ${reviewStats?.mastered ? 'border-mint/25 bg-mint/5' : 'border-white/10 bg-panel/80'}`}>
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm text-cyan">{mistake.missionTitle}</p>
                    <h2 className="mt-2 text-lg font-semibold text-white">{mistake.prompt}</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="w-fit rounded-md border border-danger/30 bg-danger/10 px-3 py-1 text-sm text-danger">{mistake.mistakeTag}</span>
                    {reviewStats?.correctStreak > 0 && !reviewStats?.mastered && <span className="w-fit rounded-md border border-amber/30 bg-amber/10 px-3 py-1 text-sm text-amber">Improving {reviewStats.correctStreak}/2</span>}
                    {reviewStats?.mastered && <span className="w-fit rounded-md border border-mint/30 bg-mint/10 px-3 py-1 text-sm text-mint">Mastered</span>}
                  </div>
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg border border-danger/20 bg-danger/5 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Your answer</p>
                    <p className="mt-2 text-danger">{mistake.selectedAnswer}</p>
                  </div>
                  <div className="rounded-lg border border-mint/20 bg-mint/5 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Correct answer</p>
                    <p className="mt-2 text-mint">{mistake.correctAnswer}</p>
                  </div>
                </div>
                <p className="mt-4 text-slate-300">{mistake.explanation}</p>
              </article>
            )
          })}
        </div>
      ) : (
        <div className="rounded-lg border border-white/10 bg-panel/75 p-8 text-center text-slate-400">
          {progress.mistakes.length ? 'All visible mistakes are mastered. Toggle mastered items to inspect them.' : 'No mistakes yet. Missed questions will appear here for focused review.'}
        </div>
      )}
    </PageTransition>
  )
}
