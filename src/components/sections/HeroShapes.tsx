import { Shape3D } from '@/components/ui/Shape3D'
import squiggleLarge from '@/assets/images/shapes/squiggle-large.png'
import squiggleSmall from '@/assets/images/shapes/squiggle-small.png'
import squiggleVertical from '@/assets/images/shapes/squiggle-vertical.png'
import ring from '@/assets/images/shapes/ring.png'
import cone from '@/assets/images/shapes/cone.png'
import cylinder from '@/assets/images/shapes/cylinder.png'

/* Offsets are measured from the section edges in the 1440px Figma frame. */
const shapes = [
  { src: squiggleLarge, tone: 'lime', className: 'left-0 top-[222px] w-[264px]' },
  { src: squiggleSmall, tone: 'white', className: 'left-[185px] top-[479px] w-[177px]' },
  { src: ring, tone: 'white', className: 'left-[16px] top-[684px] w-[340px]' },
  { src: cone, tone: 'white', className: 'right-[145px] top-[466px] w-[188px]' },
  { src: cylinder, tone: 'lime', className: 'right-0 top-[223px] w-[210px]' },
  { src: squiggleVertical, tone: 'white', className: '-right-[3px] top-[676px] w-[314px]' },
] as const

export function HeroShapes() {
  return (
    <>
      {shapes.map((shape, i) => (
        <Shape3D key={i} {...shape} />
      ))}
    </>
  )
}