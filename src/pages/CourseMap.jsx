import PageTransition from '../components/PageTransition'
import MissionCard from '../components/MissionCard'
import { missions } from '../data/missions'
import { useProgress } from '../state/ProgressContext'
import { isMissionCompleted, isMissionUnlocked } from '../utils/progress'

export default function CourseMap() {
  const { progress } = useProgress()

  return (
    <PageTransition>
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.24em] text-cyan">Course Map</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Body Architecture Pathway</h1>
      </div>
      <div className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {missions.map((mission) => (
          <MissionCard
            key={mission.id}
            mission={mission}
            unlocked={isMissionUnlocked(progress, mission.id)}
            completed={isMissionCompleted(progress, mission.id)}
            attempt={progress.attempts[mission.id]}
          />
        ))}
      </div>
    </PageTransition>
  )
}
