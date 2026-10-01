import { CourseCard } from '@/components/ui/CourseCard'
import { HappyStudentsCard } from '@/components/ui/HappyStudentsCard'
import { Shape3D } from '@/components/ui/Shape3D'
import { courses } from '@/data/courses'
import { cn } from '@/lib/cn'
import ring from '@/assets/images/shapes/ring.png'
import cone from '@/assets/images/shapes/cone.png'
import squiggle from '@/assets/images/shapes/squiggle-vertical.png'

export function AuthShowcase({ className }: { className?: string }) {
  const backCourse = courses.find((c) => c.id === 'digital-asset')
  const frontCourse = courses.find((c) => c.id === 'big-data')

  return (
    <div
      aria-hidden="true"
      className={cn('relative hidden aspect-[787/885] w-full max-w-[500px] lg:block', className)}
    >
      {backCourse && (
        <div className="absolute left-0 top-[16%] z-0 w-[75%]">
          <CourseCard course={backCourse} />
        </div>
      )}
      {frontCourse && (
        <div className="absolute left-[22.5%] top-0 z-10 w-[75%]">
          <CourseCard course={frontCourse} />
        </div>
      )}

      <Shape3D src={ring} tone="lime" className="left-[10%] top-[7%] z-20 w-[20%]" />
      <Shape3D src={cone} tone="lime" className="left-0 top-[75%] z-20 w-[25%]" />
      <HappyStudentsCard className="absolute left-[45.6%] top-[78%] z-20 w-[52%]" />
      <Shape3D src={squiggle} tone="white" className="left-[77%] top-[63%] z-30 w-[23%]" />
    </div>
  )
}