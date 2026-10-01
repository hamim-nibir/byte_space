import { AvatarStack } from '@/components/ui/AvatarStack'
import { FloatingCard } from '@/components/ui/FloatingCard'
import { avatars } from '@/data/avatars'
import starIcon from '@/assets/icons/star.svg'

export function HappyStudentsCard({ className }: { className?: string }) {
  return (
    <FloatingCard className={className}>
      <p className="text-sm font-medium">Happy Students</p>
      <p className="flex items-center gap-1 text-xs">
        4.5 <span className="text-muted">(240)</span>
        <img src={starIcon} alt="" className="size-3" />
      </p>
      <AvatarStack avatars={avatars} extra="2K+" className="mt-2" extraClassName="bg-accent text-ink" />
    </FloatingCard>
  )
}