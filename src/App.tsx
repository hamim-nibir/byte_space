import { Navbar } from '@/components/ui/Navbar'
import { Hero } from '@/components/sections/Hero'
import { PartnersStrip } from '@/components/sections/PartnersStrip'
import { CoursesSection } from './components/sections/CoursesSection'
import { LearningPathsSection } from './components/sections/LearningPathsSection'
import { ManageSection } from './components/sections/ManageSection'
import { GrowthSection } from './components/sections/GrowthSection'
import { CreatorCtaSection } from './components/sections/CreatorCtaSection'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PartnersStrip />
        <CoursesSection />
        <LearningPathsSection />
        <div className="bg-soft">
          <GrowthSection />
          <ManageSection />
        </div>
        <CreatorCtaSection />
      </main>
    </>
  )
}