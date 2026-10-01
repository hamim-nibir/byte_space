import { Footer } from '@/components/ui/Footer'
import { Navbar } from '@/components/ui/Navbar'
import { CoursesSection } from '@/components/sections/CoursesSection'
import { CreatorCtaSection } from '@/components/sections/CreatorCtaSection'
import { GrowthSection } from '@/components/sections/GrowthSection'
import { Hero } from '@/components/sections/Hero'
import { LearningPathsSection } from '@/components/sections/LearningPathsSection'
import { ManageSection } from '@/components/sections/ManageSection'
import { PartnersStrip } from '@/components/sections/PartnersStrip'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'


export function LandingPage() {
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
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  )
}