import { AvatarStack } from '@/components/ui/AvatarStack'
import { FloatingCard } from '@/components/ui/FloatingCard'
import { avatars } from '@/data/avatars'
import starIcon from '@/assets/icons/Star.svg'

export function HappyStudentsCard({ className }: { className?: string }) {
  return (
    <FloatingCard className={className}>
      <p className="text-base font-medium leading-6">Happy Students</p>
      <p className="flex items-center gap-1 text-xs leading-4">
        4.5 <span className="text-muted">(240)</span>
        <img src={starIcon} alt="" className="size-3.5" />
      </p>
      <AvatarStack
        avatars={avatars}
        extra="2K+"
        size="lg"
        className="mt-2"
        extraClassName="bg-accent text-ink"
      />
    </FloatingCard>
  )
}