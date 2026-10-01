import { Link } from 'react-router-dom'
import { buttonStyles } from '@/components/ui/buttonStyles'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Shape3D } from '@/components/ui/Shape3D'
import squiggleLarge from '@/assets/images/shapes/squiggle-large.png'
import squiggleSmall from '@/assets/images/shapes/squiggle-small.png'
import squiggleVertical from '@/assets/images/shapes/squiggle-vertical.png'
import ring from '@/assets/images/shapes/ring.png'
import cone from '@/assets/images/shapes/cone.png'
import cylinder from '@/assets/images/shapes/cylinder.png'

/*
 * Offsets are measured from the section edges. Negative values push a shape
 * past the edge so it is cropped, as in the Figma frame.
 */
const shapes = [
  { src: squiggleLarge, tone: 'lime', className: '-top-[55px] left-0 w-[220px]' },
  { src: squiggleSmall, tone: 'white', className: 'left-[178px] top-[5px] w-[173px]' },
  { src: cone, tone: 'white', className: '-left-[32px] top-[222px] w-[180px]' },
  { src: ring, tone: 'lime', className: '-bottom-[163px] left-[15px] w-[344px]' },
  { src: cone, tone: 'lime', className: 'right-[172px] top-0 w-[190px]' },
  { src: cylinder, tone: 'white', className: 'right-0 top-[6px] w-[215px]' },
  { src: squiggleVertical, tone: 'lime', className: '-bottom-[123px] right-[17px] w-[314px]' },
] as const

export function CreatorCtaSection() {
  return (
    <section
      aria-labelledby="creator-cta-heading"
      className="relative overflow-hidden bg-primary bg-grid py-20 text-white lg:py-24"
    >
      {shapes.map((shape, i) => (
        <Shape3D key={i} {...shape} />
      ))}

      <Container className="relative z-10 flex flex-col items-center text-center">
        <SectionHeading
          id="creator-cta-heading"
          tone="light"
          className="max-w-5xl"
          descriptionClassName="mx-auto mt-14 max-w-[960px] leading-7"
          title={
            <>
              Unlock Your Potential as a
              <br className="hidden sm:block" /> Creator with ByteSpace
            </>
          }
          description="Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library."
        />

        <Link
          to="/register"
          className={buttonStyles('primary', 'mt-10 h-[46px] px-8 text-base')}
        >
          Join as Creator
        </Link>
      </Container>
    </section>
  )
}