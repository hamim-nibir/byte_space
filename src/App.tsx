import { Navbar } from '@/components/ui/Navbar'
import { Hero } from '@/components/sections/Hero'
import { PartnersStrip } from '@/components/sections/PartnersStrip'
import { CoursesSection } from './components/sections/CoursesSection'
import { LearningPathsSection } from './components/sections/LearningPathsSection'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PartnersStrip />
        <CoursesSection />
        <LearningPathsSection />
      </main>
    </>
  )
}