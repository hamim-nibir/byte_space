import { Container } from '@/components/ui/Container'
import { CourseCard } from '@/components/ui/CourseCard'
import { ProgressCard } from '@/components/ui/ProgressCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Shape3D } from '@/components/ui/Shape3D'
import { StatList } from '@/components/ui/StatList'
import { courses } from '@/data/courses'
import { stats } from '@/data/stats'
import growthPerson from '@/assets/images/growth-person.png'
import squiggle from '@/assets/images/shapes/squiggle-vertical.png'

const featuredCourse = courses[0]

export function GrowthSection() {
  return (
    <section aria-labelledby="growth-heading" className="overflow-x-clip py-16 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            id="growth-heading"
            align="left"
            className="max-w-lg"
            title="Your Path to Professional Growth Starts Here!"
            description="Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need."
          />
          <StatList stats={stats} className="mt-10" />
        </div>

        {/* Fixed aspect ratio keeps every percentage position in proportion */}
        <div className="relative mx-auto aspect-[21/20] w-full max-w-[600px] xl:w-[600px] xl:max-w-none xl:translate-x-7">
          {featuredCourse && (
            <div className="absolute left-0 top-0 z-0 hidden w-[64%] sm:block">
              <CourseCard course={featuredCourse} />
            </div>
          )}

          <Shape3D src={squiggle} tone="lime" className="right-[1%] top-[17%] z-[15] w-[21%]" />

          <img
            src={growthPerson}
            alt="Smiling student with headphones holding a laptop"
            loading="lazy"
            className="absolute bottom-0 right-0 z-10 w-[89%]"
          />

          <ProgressCard
            label="Learning Progress"
            value={55}
            className="absolute right-0 top-[39%] z-20 hidden w-[41%] sm:block"
          />
        </div>
      </Container>
    </section>
  )
}