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
    <section
      aria-labelledby="manage-heading"
      className="overflow-x-clip pb-16 lg:pb-24 xl:pb-16 xl:pt-[43px]"
    >
      <Container className="grid max-w-[1264px] items-center gap-12 lg:grid-cols-2 xl:grid-cols-[621px_1fr] xl:items-start xl:gap-0">
        {/* 540 x 600 box from Figma. Every layer is a percentage of it. */}
        <div className="relative isolate mx-auto aspect-[540/600] w-full max-w-[540px] xl:mx-0">
          <MetricCard
            title="Total Revenue"
            caption="July 1-28"
            value="$120.29"
            progress={55}
            className="absolute left-0 top-0 z-[5] w-[43%]"
          />
          <MetricCard
            title="Year to Date"
            caption="2023"
            value="$1,200.38"
            badge="+12$"
            className="absolute left-0 top-[25.5%] z-[5] w-[33.3%]"
          />

          <img
            src={creatorPerson}
            alt="Smiling course creator wearing a headset and holding a tablet"
            loading="lazy"
            className="absolute -bottom-[13.2%] left-[8.3%] z-10 w-[108.1%] max-w-none"
          />

          <Shape3D src={squiggle} tone="lime" className="left-[58.7%] top-[12.8%] z-[15] w-[36.7%]" />

          <HappyStudentsCard className="absolute right-0 top-[61.5%] z-20 w-[47.8%]" />
        </div>

        <div className="xl:pt-[61px]">
          <SectionHeading
            id="manage-heading"
            align="left"
            className="max-w-[570px]"
            titleClassName="leading-[120%] lg:text-[44px]"
            descriptionClassName="mt-10 max-w-[570px] text-[18px] leading-[160%] text-ink-soft/80"
            title={
              <>
                Create &amp; Manage
                <br className="hidden lg:block" /> Courses Easily.
              </>
            }
            description={
              <>
                <strong className="font-semibold text-ink">ByteSpace</strong> supports individuals or
                entities in the creation, publication, and administration of educational courses.
              </>
            }
          />
          <CheckList items={creatorBenefits} className="mt-10" />
        </div>
      </Container>
    </section>
  )
}