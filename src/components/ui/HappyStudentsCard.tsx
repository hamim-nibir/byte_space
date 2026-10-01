import { AvatarStack } from '@/components/ui/AvatarStack'
import { FloatingCard } from '@/components/ui/FloatingCard'
import { avatars } from '@/data/avatars'
import { cn } from '@/lib/cn'
import starIcon from '@/assets/icons/Star.svg'

/*
 * The card is a container, so the avatar row adapts to the card's own width
 * (it is sized as a percentage of its parent in some layouts), not the screen's.
 * Each avatar after the first adds ~26px to the overlapping row; the number in
 * each class is the card content width (px) at which that avatar still fits
 * next to the "2K+" chip. Keep this list as long as the avatar set.
 */
const avatarReveal = [
  undefined,
  'hidden @min-[92px]:block',
  'hidden @min-[118px]:block',
  'hidden @min-[144px]:block',
  'hidden @min-[170px]:block',
  'hidden @min-[196px]:block',
  'hidden @min-[222px]:block',
]

export function HappyStudentsCard({ className }: { className?: string }) {
  return (
    <FloatingCard className={cn('@container', className)}>
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
        itemClassName={(i) => avatarReveal[i]}
      />
    </FloatingCard>
  )
}