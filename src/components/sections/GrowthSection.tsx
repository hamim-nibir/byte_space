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
    <section aria-labelledby="growth-heading" className="overflow-x-clip py-16 lg:py-24 xl:py-0">
      <Container className="grid max-w-[1264px] items-center gap-12 lg:grid-cols-2 xl:grid-cols-[637px_576px] xl:items-start xl:gap-0 xl:pt-[127px]">
        <div className="xl:pt-[73px]">
          <SectionHeading
            id="growth-heading"
            align="left"
            className="max-w-[600px]"
            titleClassName="leading-[120%] lg:text-[44px]"
            descriptionClassName="mt-10 max-w-[480px] text-[18px] leading-[160%] text-ink-soft/80"
            title={
              <>
                Your Path to Professional
                <br className="hidden lg:block" /> Growth Starts Here!
              </>
            }
            description="Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need."
          />
          <StatList stats={stats} className="mt-10" />
        </div>

        {/* 576 x 626 box from Figma. Every layer is a percentage of it. */}
        <div className="relative mx-auto aspect-[576/626] w-full max-w-[576px] xl:mx-0">
          {featuredCourse && (
            <div className="absolute left-0 top-0 z-0 hidden w-[64.6%] sm:block">
              <CourseCard course={featuredCourse} />
            </div>
          )}

          <img
            src={growthPerson}
            alt="Smiling student with headphones holding a laptop"
            loading="lazy"
            className="absolute -bottom-[11.3%] -left-[3.8%] z-10 w-[123.3%] max-w-none"
          />

          <ProgressCard
            label="Learning Progress"
            value={55}
            className="absolute right-0 top-[34%] z-20 hidden w-[40.3%] sm:block"
          />

          <Shape3D src={squiggle} tone="lime" className="left-[71%] top-[10.2%] z-30 w-[34.4%]" />
        </div>
      </Container>
    </section>
  )
}