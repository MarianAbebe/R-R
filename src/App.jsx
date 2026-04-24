import { AnimatePresence } from 'framer-motion'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import AppShell from './components/AppShell'
import Dashboard from './pages/Dashboard'
import CourseMap from './pages/CourseMap'
import MissionPlayer from './pages/MissionPlayer'
import Results from './pages/Results'
import MistakeLog from './pages/MistakeLog'
import ArcadeMode from './pages/ArcadeMode'
import ReviewTest from './pages/ReviewTest'
import NotesPath from './pages/NotesPath'
import MockFinal from './pages/MockFinal'

export default function App() {
  const location = useLocation()

  return (
    <AppShell>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/map" element={<CourseMap />} />
          <Route path="/mission/:missionId" element={<MissionPlayer />} />
          <Route path="/results/:missionId" element={<Results />} />
          <Route path="/mistakes" element={<MistakeLog />} />
          <Route path="/arcade" element={<ArcadeMode />} />
          <Route path="/review-test" element={<ReviewTest />} />
          <Route path="/notes" element={<NotesPath />} />
          <Route path="/mock-final" element={<MockFinal />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </AppShell>
  )
}
