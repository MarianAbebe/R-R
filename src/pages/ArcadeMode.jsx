import { Activity, Crosshair, Flame, Gamepad2, RotateCcw, Sparkles, Zap } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useCallback, useEffect, useMemo, useState } from 'react'
import FocusBar from '../components/FocusBar'
import PageTransition from '../components/PageTransition'
import ZombieEnemy from '../components/ZombieEnemy'
import { bodyArchitectureCurriculum } from '../data/bodyArchitecture/curriculum'
import { useProgress } from '../state/ProgressContext'
import { buildMissionResult } from '../utils/progress'

const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`

const ZOMBIE_IMAGES = [
  assetUrl('assets/arcade/z-1.png'),
  assetUrl('assets/arcade/z-2.png'),
  assetUrl('assets/arcade/z-3.png'),
  assetUrl('assets/arcade/z-4.png'),
]

const ARCADE_ARENA_STYLE = {
  '--arcade-bg-image': `url("${assetUrl('assets/arcade/bg-arena.jpg')}")`,
}

const WAVE_SECONDS = 10

const ENEMY_SLOTS = [
  { left: '13%', bottom: '10%', depth: 1, scale: 0.98, sway: '30px', bob: '34px', delay: '0s', duration: '9.4s' },
  { left: '39%', bottom: '3%', depth: 0, scale: 1.15, sway: '-24px', bob: '42px', delay: '0s', duration: '8.6s' },
  { left: '65%', bottom: '11%', depth: 1, scale: 0.96, sway: '24px', bob: '32px', delay: '0s', duration: '10s' },
  { left: '82%', bottom: '23%', depth: 2, scale: 0.78, sway: '-20px', bob: '26px', delay: '0s', duration: '10.6s' },
  { left: '25%', bottom: '25%', depth: 2, scale: 0.74, sway: '18px', bob: '24px', delay: '0s', duration: '10.3s' },
]

export default function ArcadeMode() {
  const { progress, recordAnswer } = useProgress()
  const mission = useMemo(() => buildArcadeMission(), [])
  const [waveIndex, setWaveIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [feedback, setFeedback] = useState(null)
  const [shotIndex, setShotIndex] = useState(null)
  const [streak, setStreak] = useState(0)
  const [localFocus, setLocalFocus] = useState(progress.focus)
  const [sessionComplete, setSessionComplete] = useState(false)
  const [completedMission, setCompletedMission] = useState(null)
  const [crosshair, setCrosshair] = useState({ x: 0, y: 0 })
  const [muzzleFlash, setMuzzleFlash] = useState(null)
  const [timer, setTimer] = useState(WAVE_SECONDS)
  const rawQuestion = mission.questions[waveIndex] ?? mission.questions[0]
  const question = useMemo(() => normalizeArcadeQuestion(rawQuestion), [rawQuestion])
  const isFinalWave = waveIndex === mission.questions.length - 1
  const resultMission = completedMission ?? mission
  const result = sessionComplete ? buildMissionResult({ mission: resultMission, answers }) : null

  const completeArcadeAnswer = useCallback(({ targetIndex, titleOverride }) => {
    if (feedback || sessionComplete) return

    const isTimeout = targetIndex === null
    const isCorrect = targetIndex === question.answerIndex
    const nextStreak = isCorrect ? streak + 1 : 0
    const multiplier = nextStreak >= 3 ? 2 : nextStreak === 2 ? 1.5 : 1
    const xpEarned = Math.round((isCorrect ? 15 : 0) * multiplier)
    const focusDelta = isCorrect ? 5 : -15
    const focusAfter = Math.max(0, Math.min(125, localFocus + focusDelta))
    const answer = {
      question,
      selectedIndex: targetIndex,
      selectedLabel: isTimeout ? 'No answer selected' : question.options[targetIndex],
      correctLabel: question.options[question.answerIndex],
      isCorrect,
      xpEarned,
      focusDelta,
      focusAfter,
      streakAfter: nextStreak,
      multiplier,
    }

    setShotIndex(targetIndex)
    setAnswers((current) => [...current, answer])
    setStreak(nextStreak)
    setLocalFocus(focusAfter)
    setFeedback({
      isCorrect,
      title: titleOverride ?? (isCorrect ? 'Zombie cleared' : 'Wrong target - review logged'),
      explanation: question.explanation,
      mistakeTag: isCorrect ? null : question.mistakeTag,
      xpEarned,
      focusDelta,
      multiplier,
      correctAnswer: question.options[question.answerIndex],
    })
    recordAnswer({ mission, answer })
  }, [feedback, localFocus, mission, question, recordAnswer, sessionComplete, streak])

  const shootTarget = (targetIndex, event) => {
    if (feedback || sessionComplete) return
    const arenaRect = event.currentTarget.closest('.arcade-arena')?.getBoundingClientRect()
    if (arenaRect) {
      setMuzzleFlash({
        id: `${targetIndex}-${Date.now()}`,
        x: event.clientX - arenaRect.left,
        y: event.clientY - arenaRect.top,
      })
    }

    completeArcadeAnswer({ targetIndex, titleOverride: null })
  }

  const handleTimeout = useCallback(() => {
    completeArcadeAnswer({ targetIndex: null, titleOverride: 'Too slow - review logged' })
  }, [completeArcadeAnswer])

  const nextWave = () => {
    if (isFinalWave) {
      setCompletedMission(mission)
      setSessionComplete(true)
      setFeedback(null)
      return
    }

    setWaveIndex((current) => current + 1)
    setFeedback(null)
    setShotIndex(null)
    setTimer(WAVE_SECONDS)
  }

  const restartRun = () => {
    setWaveIndex(0)
    setAnswers([])
    setFeedback(null)
    setShotIndex(null)
    setStreak(0)
    setLocalFocus(progress.focus)
    setSessionComplete(false)
    setCompletedMission(null)
    setTimer(WAVE_SECONDS)
  }

  const updateCrosshair = (event) => {
    const arenaRect = event.currentTarget.getBoundingClientRect()
    setCrosshair({
      x: event.clientX - arenaRect.left,
      y: event.clientY - arenaRect.top,
    })
  }

  useEffect(() => {
    if (!feedback) setLocalFocus(progress.focus)
  }, [feedback, progress.focus])

  useEffect(() => {
    if (!sessionComplete) setTimer(WAVE_SECONDS)
  }, [waveIndex, sessionComplete])

  useEffect(() => {
    if (feedback || sessionComplete) return undefined

    const intervalId = window.setInterval(() => {
      setTimer((currentTimer) => {
        if (currentTimer <= 1) {
          window.clearInterval(intervalId)
          window.setTimeout(handleTimeout, 0)
          return 0
        }
        return currentTimer - 1
      })
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [feedback, handleTimeout, sessionComplete, waveIndex])

  return (
    <PageTransition>
      <div className="arcade-cursor arcade-lab relative overflow-hidden rounded-lg border border-mint/20 bg-[#07100d] p-5 shadow-[0_0_42px_rgba(34,197,94,0.14)]">
        <div className="arcade-fog pointer-events-none absolute inset-0 z-0" />
        <div className="arcade-scanlines pointer-events-none absolute inset-0 z-10" />
        {feedback && !feedback.isCorrect && (
          <motion.div className="pointer-events-none absolute inset-0 z-20 bg-danger/20" initial={{ opacity: 0 }} animate={{ opacity: [0, 0.55, 0] }} transition={{ duration: 0.45 }} />
        )}

        <div className="relative z-10">
          <header className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 rounded-md border border-mint/30 bg-mint/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-mint">
                <Gamepad2 className="h-4 w-4" />
                Arcade Mode
              </p>
              <h1 className="mt-3 text-3xl font-semibold text-white">Infected Anatomy Lab</h1>
              <p className="mt-2 text-slate-400">{mission.title} uses the same Body Architecture questions as Study Mode.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-5">
              <HudChip icon={Sparkles} label="XP" value={progress.xp} tone="text-amber" />
              <HudChip icon={Zap} label="Wave" value={`${waveIndex + 1}/${mission.questions.length}`} tone="text-cyan" />
              <HudChip icon={Flame} label="Streak" value={streak} tone={streak >= 2 ? 'text-amber' : 'text-slate-300'} />
              <HudChip icon={Activity} label="Health" value={localFocus} tone={localFocus < 40 ? 'text-danger' : 'text-mint'} />
              <HudChip icon={Crosshair} label="Timer" value={`${timer}s`} tone={timer < 5 ? 'text-danger' : 'text-mint'} />
            </div>
          </header>

          <div className="mb-5 rounded-lg border border-white/10 bg-black/30 p-4">
            <FocusBar value={localFocus} label="Arcade Focus" />
          </div>

          {sessionComplete ? (
            <ArcadeComplete result={result} mission={resultMission} onRestart={restartRun} />
          ) : (
            <>
              <section className="arcade-objective mb-4 rounded-lg border border-mint/20 bg-black/45 px-4 py-3 shadow-[inset_0_0_24px_rgba(34,197,94,0.08)] backdrop-blur-md">
                <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-mint">
                  <Crosshair className="h-4 w-4" />
                  Mission Objective
                </div>
                {question.scenario && <p className="mb-2 line-clamp-2 text-sm text-slate-300">{question.scenario}</p>}
                <h2 className="line-clamp-2 text-base font-semibold leading-snug text-white md:text-lg">{question.arcadePrompt}</h2>
              </section>

              <div
                className={`arcade-arena ${feedback ? 'arcade-paused' : ''} ${feedback && !feedback.isCorrect ? 'arcade-screen-shake' : ''} ${timer < 5 && !feedback ? 'arcade-urgent' : ''}`}
                style={ARCADE_ARENA_STYLE}
                onMouseMove={updateCrosshair}
              >
                <div className="floor-perspective" />
                <div className="arcade-crosshair" style={{ left: crosshair.x, top: crosshair.y }} />
                <AnimatePresence>
                  {muzzleFlash && (
                    <motion.div
                      key={muzzleFlash.id}
                      className="muzzle-flash"
                      style={{ left: muzzleFlash.x, top: muzzleFlash.y }}
                      initial={{ opacity: 0, scale: 0.35 }}
                      animate={{ opacity: [0, 1, 0], scale: [0.35, 1.35, 1.9] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.22 }}
                    />
                  )}
                </AnimatePresence>
                <div className="zombie-wave">
                  {question.options.map((option, optionIndex) => (
                    <ZombieEnemy
                      key={`${question.id}-${option}`}
                      label={option}
                      imageSrc={getZombieImage({ waveIndex, optionIndex })}
                      disabled={Boolean(feedback)}
                      depth={getEnemySlot(optionIndex).depth}
                      style={getEnemyStyle(optionIndex)}
                      isShot={Boolean(feedback) && shotIndex === optionIndex}
                      shotResult={getShotResult({ feedback, shotIndex, optionIndex, answerIndex: question.answerIndex })}
                      onShoot={(event) => shootTarget(optionIndex, event)}
                    />
                  ))}
                </div>
              </div>

              <AnimatePresence>
                {feedback && (
                  <motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} className="mt-5 rounded-lg border border-white/10 bg-panel2 p-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className={`text-lg font-semibold ${feedback.isCorrect ? 'text-mint' : 'text-danger'}`}>{feedback.title}</h3>
                        <p className="mt-2 text-slate-300">{feedback.explanation}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 text-sm">
                        <span className={`rounded-md border px-3 py-1 ${feedback.isCorrect ? 'border-mint/30 bg-mint/10 text-mint' : 'border-danger/30 bg-danger/10 text-danger'}`}>
                          {feedback.focusDelta > 0 ? '+' : ''}{feedback.focusDelta} Focus
                        </span>
                        <span className="rounded-md border border-amber/30 bg-amber/10 px-3 py-1 text-amber">
                          +{feedback.xpEarned} XP{feedback.multiplier > 1 && ` (${feedback.multiplier}x)`}
                        </span>
                      </div>
                    </div>
                    {feedback.mistakeTag && <p className="mt-4 rounded-lg border border-danger/25 bg-danger/10 p-4 text-danger">Review logged: {feedback.mistakeTag}</p>}
                    {!feedback.isCorrect && <p className="mt-3 rounded-lg border border-mint/25 bg-mint/10 p-4 text-mint">Correct answer: {feedback.correctAnswer}</p>}
                    <button type="button" onClick={nextWave} className="mt-5 h-11 rounded-lg bg-mint px-5 font-semibold text-slate-950 transition hover:bg-mint/90">
                      {isFinalWave ? 'Complete Run' : 'Next Wave'}
                    </button>
                  </motion.section>
                )}
              </AnimatePresence>
            </>
          )}
        </div>
      </div>
    </PageTransition>
  )
}

function ArcadeComplete({ result, mission, onRestart }) {
  return (
    <section className="rounded-lg border border-mint/25 bg-black/40 p-6 text-center">
      <p className="text-sm uppercase tracking-[0.22em] text-mint">Run Complete</p>
      <h2 className="mt-2 text-3xl font-semibold text-white">{mission.title} cleared in Arcade Mode</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <SummaryMetric label="Accuracy" value={`${result.accuracy}%`} />
        <SummaryMetric label="XP gained" value={`+${result.xpEarned}`} />
        <SummaryMetric label="Final Focus" value={result.finalFocus} />
      </div>
      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <button type="button" onClick={onRestart} className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-mint px-5 font-semibold text-slate-950 transition hover:bg-mint/90">
          <RotateCcw className="h-4 w-4" />
          Next Arcade Run
        </button>
        <Link to="/map" className="inline-flex h-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 font-semibold text-slate-100 transition hover:bg-white/10">
          Course Map
        </Link>
      </div>
    </section>
  )
}

function HudChip({ icon: Icon, label, value, tone }) {
  return (
    <div className="rounded-lg border border-white/10 bg-black/35 px-4 py-3">
      <div className={`flex items-center gap-2 text-sm ${tone}`}>
        <Icon className="h-4 w-4" />
        <span>{label}</span>
      </div>
      <p className="mt-1 text-xl font-semibold text-white">{value}</p>
    </div>
  )
}

function SummaryMetric({ label, value }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-4">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
    </div>
  )
}

function normalizeArcadeQuestion(question) {
  if (question.type === 'order') {
    return {
      ...question,
      arcadePrompt: `${question.prompt} Shoot the first item in the correct sequence.`,
      options: question.items,
      answerIndex: question.items.indexOf(question.answerOrder[0]),
    }
  }

  return {
    ...question,
    arcadePrompt: question.prompt,
  }
}

function buildArcadeMission() {
  const arcadeQuestions = bodyArchitectureCurriculum
    .filter((unit) => unit.id !== 'oral-exam-review')
    .flatMap((unit) =>
      unit.questions.map((question) => ({
        ...question,
        id: `arcade-${unit.id}-${question.id}`,
        sourceUnitTitle: unit.title,
      })),
    )
    .filter((question) => question.options?.length >= 2)

  const highYieldQuestions = arcadeQuestions.filter((question) => {
    const promptLength = `${question.scenario ?? ''} ${question.prompt}`.length
    return promptLength <= 260
  })
  const pool = highYieldQuestions.length >= 8 ? highYieldQuestions : arcadeQuestions
  const selectedQuestions = shuffle(pool).slice(0, 8)

  return {
    id: 'arcade-qbank-run',
    title: 'High-Yield Q&A Reinforcement',
    questions: selectedQuestions,
  }
}

function shuffle(items) {
  return [...items]
    .map((item) => ({ item, sort: Math.random() }))
    .sort((first, second) => first.sort - second.sort)
    .map(({ item }) => item)
}

function getEnemySlot(optionIndex) {
  return ENEMY_SLOTS[optionIndex % ENEMY_SLOTS.length]
}

function getEnemyStyle(optionIndex) {
  const slot = getEnemySlot(optionIndex)
  return {
    left: slot.left,
    bottom: slot.bottom,
    '--zombie-scale': slot.scale,
    '--zombie-sway': slot.sway,
    '--zombie-bob': slot.bob,
    '--zombie-delay': slot.delay,
    '--zombie-duration': slot.duration,
  }
}

function getZombieImage({ waveIndex, optionIndex }) {
  const imageIndex = (waveIndex * 3 + optionIndex * 5) % ZOMBIE_IMAGES.length
  return ZOMBIE_IMAGES[imageIndex]
}

function getShotResult({ feedback, shotIndex, optionIndex, answerIndex }) {
  if (!feedback) return null
  if (shotIndex === optionIndex && feedback.isCorrect) return 'correct'
  if (shotIndex === optionIndex && !feedback.isCorrect) return 'wrong'
  if (optionIndex === answerIndex) return null
  return null
}
