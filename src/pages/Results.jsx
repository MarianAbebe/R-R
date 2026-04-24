import { ArrowRight, CheckCircle2, Crosshair, Map, Target, Zap } from 'lucide-react'
import { Link, Navigate, useLocation, useParams } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import { getMissionById, missions } from '../data/missions'
import { useProgress } from '../state/ProgressContext'
import { getNextMissionId } from '../utils/progress'

export default function Results() {
  const { missionId } = useParams()
  const { state } = useLocation()
  const { progress } = useProgress()
  const mission = getMissionById(missionId)
  const nextMissionId = getNextMissionId(missionId)
  const nextMission = nextMissionId ? getMissionById(nextMissionId) : null
  const attempt = progress.attempts[missionId]
  const result = state?.result ?? attempt
  const globalWeakTopics = Object.entries(progress.mistakeTagCounts ?? {})
    .sort((first, second) => second[1] - first[1])
    .slice(0, 2)
    .map(([tag, count]) => ({ tag, count }))
  const weakTopics = result?.weakTopics?.length ? result.weakTopics : globalWeakTopics
  const suggestedMission = nextMission ?? mission

  if (!mission || !result) return <Navigate to="/map" replace />

  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl rounded-lg border border-cyan/20 bg-panel/90 p-6 shadow-glow">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-cyan">Mission complete</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">{mission.title}</h1>
            <p className="mt-2 text-slate-400">{nextMission ? `${nextMission.title} is now available.` : 'All current Body Architecture missions are complete.'}</p>
          </div>
          <CheckCircle2 className="h-16 w-16 text-mint" />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ResultMetric label="Accuracy" value={`${result.accuracy}%`} />
          <ResultMetric label="XP Earned" value={`+${result.xpEarned}`} />
          <ResultMetric label="Final Focus" value={result.finalFocus ?? progress.focus} />
          <ResultMetric label="Correct" value={`${result.correctCount}/${result.totalQuestions}`} />
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <section className="rounded-lg border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-2">
              <Crosshair className="h-5 w-5 text-danger" />
              <h2 className="font-semibold text-white">Top Weak Topics</h2>
            </div>
            {weakTopics.length ? (
              <div className="mt-4 space-y-3">
                {weakTopics.map((topic) => (
                  <div key={topic.tag} className="flex items-center justify-between rounded-lg border border-danger/20 bg-danger/5 px-4 py-3">
                    <span className="text-slate-100">{topic.tag}</span>
                    <span className="text-sm text-danger">{topic.count} missed</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-4 rounded-lg border border-mint/20 bg-mint/5 p-4 text-sm text-mint">No weak topics detected in this mission.</p>
            )}
          </section>

          <section className="rounded-lg border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-amber" />
              <h2 className="font-semibold text-white">Suggested Next Mission</h2>
            </div>
            <p className="mt-4 text-xl font-semibold text-white">{suggestedMission.title}</p>
            <p className="mt-2 text-sm text-slate-400">
              {nextMission ? suggestedMission.subtitle : 'Replay this mission to strengthen recall and reduce logged weak spots.'}
            </p>
          </section>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {nextMission && (
            <Link to={`/mission/${nextMission.id}`} className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-cyan px-5 font-semibold text-slate-950 transition hover:bg-cyan/90">
              Next Mission
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
          <Link to="/map" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 font-semibold text-slate-100 transition hover:bg-white/10">
            Course Map
            <Map className="h-4 w-4" />
          </Link>
          <Link to="/mistakes" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 font-semibold text-slate-100 transition hover:bg-white/10">
            Mistake Log
            <Target className="h-4 w-4" />
          </Link>
        </div>

        <p className="mt-6 text-sm text-slate-500">{progress.completedMissionIds.length} of {missions.length} missions cleared.</p>
      </div>
    </PageTransition>
  )
}

function ResultMetric({ label, value }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-5">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 text-3xl font-semibold text-white">{value}</p>
    </div>
  )
}
