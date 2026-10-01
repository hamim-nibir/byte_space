import { cn } from '@/lib/cn'
import type { Stat } from '@/types/stat'

interface StatListProps {
  stats: readonly Stat[]
  className?: string
}

export function StatList({ stats, className }: StatListProps) {
  return (
    <dl className={cn('flex flex-wrap gap-x-10 gap-y-4', className)}>
      {stats.map((stat) => (
        <div key={stat.id} className="flex flex-col-reverse">
          <dt className="text-sm text-muted">{stat.label}</dt>
          <dd className="text-3xl font-medium text-primary">{stat.value}</dd>
        </div>
      ))}
    </dl>
  )
}