import { CheckCircle2, Lock, PlayCircle, Timer } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function MissionCard({ mission, unlocked, completed, attempt }) {
  return (
    <motion.div
      whileHover={unlocked ? { y: -4, scale: 1.01 } : {}}
      className={`rounded-lg border p-5 transition ${
        unlocked
          ? 'border-cyan/25 bg-panel/90 shadow-glow'
          : 'border-white/10 bg-panel/45 opacity-60'
      }`}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Mission {mission.order}</p>
          <h3 className="mt-1 text-lg font-semibold text-white">{mission.title}</h3>
          <p className="mt-1 text-sm text-slate-400">{mission.subtitle}</p>
        </div>
        <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg border ${completed ? 'border-mint/40 bg-mint/10 text-mint' : unlocked ? 'border-cyan/35 bg-cyan/10 text-cyan' : 'border-white/10 bg-white/5 text-slate-500'}`}>
          {completed ? <CheckCircle2 className="h-5 w-5" /> : unlocked ? <PlayCircle className="h-5 w-5" /> : <Lock className="h-5 w-5" />}
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-white/10 pt-4 text-sm text-slate-400">
        <span className="flex items-center gap-2">
          <Timer className="h-4 w-4" />
          {mission.estimatedMinutes} min
        </span>
        {attempt ? <span>{attempt.accuracy}% best run</span> : <span>{mission.questions.length} rounds</span>}
      </div>
      <Link
        to={unlocked ? `/mission/${mission.id}` : '#'}
        className={`mt-4 flex h-11 items-center justify-center rounded-lg text-sm font-semibold transition ${
          unlocked ? 'bg-cyan text-slate-950 hover:bg-cyan/90' : 'pointer-events-none bg-white/5 text-slate-500'
        }`}
      >
        {completed ? 'Replay Mission' : unlocked ? 'Start Mission' : 'Locked'}
      </Link>
    </motion.div>
  )
}
