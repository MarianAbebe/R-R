import { ArrowRight, BookOpenCheck, BrainCircuit, ClipboardCheck, ClipboardList, Gamepad2, Map, NotebookTabs, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import MissionCard from '../components/MissionCard'
import PageTransition from '../components/PageTransition'
import { missions } from '../data/missions'
import { useProgress } from '../state/ProgressContext'
import { isMissionCompleted, isMissionUnlocked } from '../utils/progress'

export default function Dashboard() {
  const { progress } = useProgress()
  const completedCount = progress.completedMissionIds.length
  const nextMission = missions.find((mission) => isMissionUnlocked(progress, mission.id) && !isMissionCompleted(progress, mission.id)) ?? missions[0]
  const recentMistakes = progress.mistakes.slice(0, 3)

  return (
    <PageTransition>
      <section className="mb-8">
        <div className="mb-4">
          <p className="text-sm uppercase tracking-[0.24em] text-cyan">Choose Your Mode</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Four paths, one progress system.</h1>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <ModeCard
            icon={NotebookTabs}
            title="Notes Path"
            subtitle="Content-rich topic notes before recall"
            buttonLabel="Open Notes"
            to="/notes"
            tone="notes"
          />
          <ModeCard
            icon={BrainCircuit}
            title="Study Path"
            subtitle="Full topic Q&A banks for Body Architecture"
            buttonLabel="Continue Study"
            to="/map"
            tone="study"
          />
          <ModeCard
            icon={Gamepad2}
            title="Arcade Mode"
            subtitle="Shoot answers, protect Focus, and expose weak spots"
            buttonLabel="Enter Arcade"
            to="/arcade"
            tone="arcade"
          />
          <ModeCard
            icon={ClipboardCheck}
            title="Mock Final"
            subtitle="80-question oral-style exam simulation"
            buttonLabel="Start Final"
            to="/mock-final"
            tone="final"
          />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
        <div className="rounded-lg border border-cyan/20 bg-panel/90 p-6 shadow-glow">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-cyan">MVP study cockpit</p>
              <h1 className="mt-3 max-w-3xl text-4xl font-semibold text-white md:text-5xl">Turn Body Architecture into fast recall rounds.</h1>
              <p className="mt-4 max-w-2xl text-slate-300">
                Complete short missions, protect your Focus meter, and convert missed concepts into a review queue.
              </p>
            </div>
            <Link to={`/mission/${nextMission.id}`} className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-cyan px-5 font-semibold text-slate-950 transition hover:bg-cyan/90">
              Continue
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <StatCard icon={Target} label="Missions cleared" value={`${completedCount}/${missions.length}`} />
          <StatCard icon={BookOpenCheck} label="Unlocked" value={progress.unlockedMissionIds.length} />
          <StatCard icon={ClipboardList} label="Mistakes logged" value={progress.mistakes.length} />
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Next Mission</h2>
            <Link to="/map" className="inline-flex items-center gap-2 text-sm text-cyan hover:text-cyan/80">
              Course Map
              <Map className="h-4 w-4" />
            </Link>
          </div>
          <MissionCard mission={nextMission} unlocked completed={isMissionCompleted(progress, nextMission.id)} attempt={progress.attempts[nextMission.id]} />
        </div>

        <div className="rounded-lg border border-white/10 bg-panel/75 p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recent Mistakes</h2>
            <Link to="/mistakes" className="text-sm text-cyan hover:text-cyan/80">Review all</Link>
          </div>
          {recentMistakes.length ? (
            <div className="space-y-3">
              {recentMistakes.map((mistake) => (
                <div key={mistake.id} className="rounded-lg border border-danger/20 bg-danger/5 p-4">
                  <p className="text-sm font-medium text-white">{mistake.mistakeTag}</p>
                  <p className="mt-1 line-clamp-2 text-sm text-slate-400">{mistake.prompt}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-white/10 bg-white/5 p-5 text-sm text-slate-400">No mistakes logged yet. Start a mission to generate targeted review.</div>
          )}
        </div>
      </section>
    </PageTransition>
  )
}

function ModeCard({ icon: Icon, title, subtitle, buttonLabel, to, tone }) {
  const tones = {
    notes: {
      card: 'border-cyan/25 bg-[linear-gradient(135deg,rgba(8,47,73,0.3),rgba(15,23,42,0.8))] shadow-glow',
      icon: 'border-cyan/30 bg-cyan/10 text-cyan',
      button: 'bg-cyan text-slate-950 hover:bg-cyan/90',
    },
    study: {
      card: 'border-sky-300/25 bg-[linear-gradient(135deg,rgba(12,74,110,0.3),rgba(15,23,42,0.78))] shadow-glow',
      icon: 'border-sky-300/30 bg-sky-300/10 text-sky-200',
      button: 'bg-sky-300 text-slate-950 hover:bg-sky-300/90',
    },
    arcade: {
      card: 'border-mint/25 bg-[linear-gradient(135deg,rgba(20,83,45,0.28),rgba(127,29,29,0.16))] shadow-[0_0_30px_rgba(34,197,94,0.16)]',
      icon: 'border-mint/30 bg-mint/10 text-mint',
      button: 'bg-mint text-slate-950 hover:bg-mint/90',
    },
    final: {
      card: 'border-amber/25 bg-[linear-gradient(135deg,rgba(120,53,15,0.26),rgba(15,23,42,0.8))] shadow-[0_0_30px_rgba(251,191,36,0.12)]',
      icon: 'border-amber/30 bg-amber/10 text-amber',
      button: 'bg-amber text-slate-950 hover:bg-amber/90',
    },
  }
  const selectedTone = tones[tone] ?? tones.study

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`relative overflow-hidden rounded-lg border p-6 ${selectedTone.card}`}
    >
      <div className={`grid h-12 w-12 place-items-center rounded-lg border ${selectedTone.icon}`}>
        <Icon className="h-6 w-6" />
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-white">{title}</h2>
      <p className="mt-2 text-slate-300">{subtitle}</p>
      <Link
        to={to}
        className={`mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 font-semibold transition ${selectedTone.button}`}
      >
        {buttonLabel}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.div>
  )
}

function StatCard({ icon: Icon, label, value }) {
  return (
    <motion.div whileHover={{ y: -3 }} className="rounded-lg border border-white/10 bg-panel/75 p-5">
      <Icon className="h-5 w-5 text-cyan" />
      <p className="mt-4 text-3xl font-semibold text-white">{value}</p>
      <p className="mt-1 text-sm text-slate-400">{label}</p>
    </motion.div>
  )
}
