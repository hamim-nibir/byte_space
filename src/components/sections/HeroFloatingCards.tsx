import { FloatingCard } from '@/components/ui/FloatingCard'
import { HappyStudentsCard } from '@/components/ui/HappyStudentsCard'
import { ProgressCard } from '@/components/ui/ProgressCard'

export function HeroFloatingCards() {
  return (
    <div className="absolute left-1/2 top-0 z-20 hidden h-full lg:block">
      <FloatingCard className="absolute -left-[316px] top-[640px] w-[208px]">
        <p className="text-sm font-medium">UI/UX Design</p>
        <p className="mt-1 text-[10px] text-muted">200 Courses · 1000+ Students</p>
      </FloatingCard>

      <ProgressCard
        label="Learning Progress"
        value={55}
        className="absolute left-[122px] top-[652px] w-[232px]"
      />

      <HappyStudentsCard className="absolute -left-[392px] top-[838px] w-[258px]" />
    </div>
  )
}