import { motion } from 'framer-motion'

export default function FocusBar({ value, label = 'Focus' }) {
  const clamped = Math.max(0, Math.min(125, value))
  const percent = Math.min(100, (clamped / 125) * 100)
  const isCritical = clamped < 40

  return (
    <div>
      <div className={`mb-2 flex items-center justify-between text-xs uppercase tracking-[0.18em] ${isCritical ? 'text-danger' : 'text-slate-400'}`}>
        <span>{isCritical ? 'Focus Critical' : label}</span>
        <span>{clamped}/125</span>
      </div>
      <motion.div
        className={`h-3 overflow-hidden rounded-full border bg-black/40 ${isCritical ? 'border-danger/45' : 'border-cyan/20'}`}
        animate={isCritical ? { boxShadow: '0 0 18px rgba(251, 113, 133, 0.32)' } : { boxShadow: '0 0 0 rgba(0, 0, 0, 0)' }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          key={clamped}
          className="h-full rounded-full bg-gradient-to-r from-danger via-amber to-cyan shadow-[0_0_18px_rgba(103,232,249,0.55)]"
          initial={false}
          animate={{ width: `${percent}%`, scaleY: [1, 1.35, 1] }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        />
      </motion.div>
      {isCritical && <p className="mt-2 text-sm text-danger">Focus Critical - stabilize your accuracy</p>}
    </div>
  )
}
