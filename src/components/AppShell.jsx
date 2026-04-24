import { Activity, BrainCircuit, ClipboardCheck, ClipboardList, Gamepad2, Map, NotebookTabs, RotateCcw, Sparkles } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import FocusBar from './FocusBar'
import { useProgress } from '../state/ProgressContext'

const navItems = [
  { to: '/', label: 'Dashboard', icon: Activity },
  { to: '/notes', label: 'Notes', icon: NotebookTabs },
  { to: '/map', label: 'Course Map', icon: Map },
  { to: '/arcade', label: 'Arcade Mode', icon: Gamepad2 },
  { to: '/mock-final', label: 'Mock Final', icon: ClipboardCheck },
  { to: '/mistakes', label: 'Mistakes', icon: ClipboardList },
]

export default function AppShell({ children }) {
  const { progress, resetProgress } = useProgress()

  return (
    <div className="min-h-screen bg-ink text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.12),transparent_28%)]" />
      <header className="sticky top-0 z-20 border-b border-white/10 bg-ink/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-lg border border-cyan/30 bg-cyan/10 shadow-glow">
              <BrainCircuit className="h-6 w-6 text-cyan" />
            </div>
            <div>
              <p className="text-xl font-semibold tracking-wide">RecallRounds</p>
              <p className="text-sm text-slate-400">Body Architecture study missions</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <nav className="flex rounded-lg border border-white/10 bg-white/5 p-1">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center gap-2 rounded-md px-3 py-2 text-sm transition ${
                        isActive ? 'bg-cyan/15 text-cyan' : 'text-slate-300 hover:bg-white/10 hover:text-white'
                      }`
                    }
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </NavLink>
                )
              })}
            </nav>
            <div className="flex items-center gap-3">
              <div className="rounded-lg border border-white/10 bg-panel px-4 py-2">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Sparkles className="h-4 w-4 text-amber" />
                  <span>{progress.xp} XP</span>
                </div>
              </div>
              <button
                type="button"
                onClick={resetProgress}
                className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:border-danger/40 hover:bg-danger/10 hover:text-danger"
                aria-label="Reset progress"
                title="Reset progress"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
          <FocusBar value={progress.focus} />
        </div>
      </header>
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">{children}</main>
    </div>
  )
}
