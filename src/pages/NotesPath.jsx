import { BookOpen, ChevronRight } from 'lucide-react'
import { useMemo, useState } from 'react'
import PageTransition from '../components/PageTransition'
import { bodyArchitectureCurriculum } from '../data/bodyArchitecture/curriculum'

const noteUnits = bodyArchitectureCurriculum.filter((unit) => unit.notes.length)

export default function NotesPath() {
  const [activeUnitId, setActiveUnitId] = useState(noteUnits[0]?.id)
  const activeUnit = noteUnits.find((unit) => unit.id === activeUnitId) ?? noteUnits[0]
  const activeNote = activeUnit?.notes[0]
  const sections = useMemo(() => activeNote?.sections ?? [], [activeNote])

  return (
    <PageTransition>
      <section className="mb-6 rounded-lg border border-cyan/20 bg-panel/80 p-6 shadow-glow">
        <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-cyan">
          <BookOpen className="h-4 w-4" />
          Notes Path
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-white">Body Architecture source notes</h1>
        <p className="mt-3 max-w-3xl text-slate-300">
          Topic notes built from the content layer. Use these before Study Path or Mock Final to tighten definitions, structure, and oral exam phrasing.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.36fr_1fr]">
        <aside className="space-y-3">
          {noteUnits.map((unit) => (
            <button
              key={unit.id}
              type="button"
              onClick={() => setActiveUnitId(unit.id)}
              className={`flex w-full items-center justify-between rounded-lg border p-4 text-left transition ${
                activeUnit?.id === unit.id
                  ? 'border-cyan/40 bg-cyan/10 text-white shadow-glow'
                  : 'border-white/10 bg-panel/70 text-slate-300 hover:border-cyan/25 hover:bg-white/10'
              }`}
            >
              <span>
                <span className="block font-semibold">{unit.title}</span>
                <span className="mt-1 block text-sm text-slate-400">{unit.questions.length} linked practice questions</span>
              </span>
              <ChevronRight className="h-4 w-4 text-cyan" />
            </button>
          ))}
        </aside>

        <article className="rounded-lg border border-white/10 bg-panel/80 p-6">
          <p className="text-sm uppercase tracking-[0.18em] text-cyan">{activeNote?.sourceFile}</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">{activeNote?.title ?? activeUnit?.title}</h2>
          <p className="mt-3 text-slate-400">{activeNote?.summary}</p>

          <div className="mt-6 space-y-5">
            {sections.map((section) => (
              <section key={section.heading} className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
                <h3 className="text-xl font-semibold text-white">{section.heading}</h3>
                <div className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                  {section.body.split('\n').map((line, index) => renderNoteLine(line, `${section.heading}-${index}`))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </section>
    </PageTransition>
  )
}

function renderNoteLine(line, key) {
  if (!line.trim()) return <div key={key} className="h-2" />
  if (line.startsWith('### ')) return <h4 key={key} className="pt-3 text-base font-semibold text-cyan">{line.replace('### ', '')}</h4>
  if (line.startsWith('- ')) return <p key={key} className="pl-4 text-slate-300">- {line.replace('- ', '')}</p>
  return <p key={key}>{line}</p>
}
