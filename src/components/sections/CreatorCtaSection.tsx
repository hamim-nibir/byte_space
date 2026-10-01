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

const shapes = [
  { src: squiggleLarge, tone: 'lime', className: 'left-0 top-0 w-[170px]' },
  { src: squiggleSmall, tone: 'white', className: 'left-[205px] top-[25px] w-[135px]' },
  { src: cone, tone: 'white', className: 'left-0 top-[235px] w-[135px]' },
  { src: ring, tone: 'lime', className: 'left-[55px] top-[345px] w-[270px]' },
  { src: cone, tone: 'lime', className: 'right-[200px] top-[10px] w-[145px]' },
  { src: cylinder, tone: 'white', className: 'right-0 top-[40px] w-[190px]' },
  { src: squiggleVertical, tone: 'lime', className: 'right-[90px] top-[320px] w-[180px]' },
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