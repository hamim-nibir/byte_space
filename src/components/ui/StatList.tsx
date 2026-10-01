import { cn } from '@/lib/cn'
import type { Stat } from '@/types/stat'

interface StatListProps {
  stats: readonly Stat[]
  className?: string
}

export function StatList({ stats, className }: StatListProps) {
  return (
    <dl className={cn('flex flex-wrap gap-x-14 gap-y-4', className)}>
      {stats.map((stat) => (
        <div key={stat.id} className="flex flex-col-reverse">
          <dt className="text-[18px] leading-[160%] text-ink-soft/80">{stat.label}</dt>
          <dd className="text-4xl font-medium leading-[120%] text-primary">{stat.value}</dd>
        </div>
      ))}
    </dl>
  )
}