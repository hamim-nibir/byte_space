import { AvatarStack } from '@/components/ui/AvatarStack'
import { FloatingCard } from '@/components/ui/FloatingCard'
import { avatars } from '@/data/avatars'
import starIcon from '@/assets/icons/star.svg'

export function HeroFloatingCards() {
  return (
    <div className="absolute left-1/2 top-0 z-20 hidden h-full lg:block">
      <FloatingCard className="absolute -left-[317px] top-[637px] w-[206px]">
        <p className="text-sm font-medium">UI/UX Design</p>
        <p className="mt-1 text-[10px] text-muted">200 Courses · 1000+ Students</p>
      </FloatingCard>

      <FloatingCard className="absolute left-[122px] top-[650px] w-[230px]">
        <p className="text-xs">Learning Progress</p>
        <p className="mt-1 text-4xl font-semibold">55%</p>
        <div
          role="progressbar"
          aria-label="Learning progress"
          aria-valuenow={55}
          aria-valuemin={0}
          aria-valuemax={100}
          className="mt-2 h-1.5 rounded-full bg-surface"
        >
          <div className="h-full w-[55%] rounded-full bg-accent" />
        </div>
      </FloatingCard>

      <FloatingCard className="absolute -left-[392px] top-[835px] w-[255px]">
        <p className="text-sm font-medium">Happy Students</p>
        <p className="flex items-center gap-1 text-xs">
          4.5 <span className="text-muted">(240)</span>
          <img src={starIcon} alt="" className="size-3" />
        </p>
        <AvatarStack
          avatars={avatars}
          extra="2K+"
          className="mt-2"
          extraClassName="bg-accent text-ink"
        />
      </FloatingCard>
    </div>
  )
}