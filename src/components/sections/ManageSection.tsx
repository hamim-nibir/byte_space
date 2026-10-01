import { CheckList } from '@/components/ui/CheckList'
import { Container } from '@/components/ui/Container'
import { HappyStudentsCard } from '@/components/ui/HappyStudentsCard'
import { MetricCard } from '@/components/ui/MetricCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Shape3D } from '@/components/ui/Shape3D'
import { creatorBenefits } from '@/data/features'
import creatorPerson from '@/assets/images/creator-person.png'
import squiggle from '@/assets/images/shapes/squiggle-vertical.png'

export function ManageSection() {
  return (
    <section aria-labelledby="manage-heading" className="pb-16 lg:pb-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative mx-auto h-[420px] w-full max-w-[520px] sm:h-[520px]">
          <Shape3D src={squiggle} tone="lime" className="right-[8%] top-[22%] w-[18%]" />

          <MetricCard
            title="Total Revenue"
            caption="July 1-28"
            value="$120.29"
            progress={55}
            className="absolute left-0 top-[4%] z-[5] w-[46%]"
          />
          <MetricCard
            title="Year to Date"
            caption="2023"
            value="$1,200.38"
            badge="+12$"
            className="absolute left-0 top-[28%] z-[5] w-[36%]"
          />

          <img
            src={creatorPerson}
            alt="Smiling course creator wearing a headset and holding a tablet"
            loading="lazy"
            className="absolute bottom-0 left-[16%] z-10 w-[68%]"
          />

          <HappyStudentsCard className="absolute bottom-[4%] right-0 z-20 w-[56%]" />
        </div>

        <div>
          <SectionHeading
            id="manage-heading"
            align="left"
            className="max-w-md"
            title="Create & Manage Courses Easily."
            description={
              <>
                <strong className="font-semibold text-ink">ByteSpace</strong> supports individuals or
                entities in the creation, publication, and administration of educational courses.
              </>
            }
          />
          <CheckList items={creatorBenefits} className="mt-8" />
        </div>
      </Container>
    </section>
  )
}