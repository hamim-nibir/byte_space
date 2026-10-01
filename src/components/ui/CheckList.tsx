import { Check } from 'lucide-react'
import { cn } from '@/lib/cn'

interface CheckListProps {
  items: readonly string[]
  className?: string
}

export function CheckList({ items, className }: CheckListProps) {
  return (
    <ul className={cn('space-y-4', className)}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-sm text-ink">
          <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary text-white">
            <Check size={12} strokeWidth={3} aria-hidden="true" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}