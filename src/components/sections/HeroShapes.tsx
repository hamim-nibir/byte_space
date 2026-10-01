import { Shape3D } from '@/components/ui/Shape3D'
import squiggleLarge from '@/assets/images/shapes/squiggle-large.png'
import squiggleSmall from '@/assets/images/shapes/squiggle-small.png'
import squiggleVertical from '@/assets/images/shapes/squiggle-vertical.png'
import ring from '@/assets/images/shapes/ring.png'
import cone from '@/assets/images/shapes/cone.png'
import cylinder from '@/assets/images/shapes/cylinder.png'

const shapes = [
  { src: squiggleLarge, tone: 'lime', className: 'left-0 top-[235px] w-[200px]' },
  { src: squiggleSmall, tone: 'white', className: 'left-[185px] top-[475px] w-[170px]' },
  { src: ring, tone: 'white', className: 'left-[29px] top-[727px] w-[254px]' },
  { src: cone, tone: 'white', className: 'right-[153px] top-[466px] w-[185px]' },
  { src: cylinder, tone: 'lime', className: 'right-0 top-[220px] w-[216px]' },
  { src: squiggleVertical, tone: 'white', className: 'right-[30px] top-[671px] w-[278px]' },
] as const

export function HeroShapes() {
  return (
    <>
      {shapes.map((s) => (
        <Shape3D key={s.className} {...s} />
      ))}
    </>
  )
}