import { cn } from '@/lib/cn'

interface MetricCardProps {
  title: string
  caption: string
  value: string
  progress?: number
  badge?: string
  className?: string
}

export function MetricCard({ title, caption, value, progress, badge, className }: MetricCardProps) {
  return (
    <div className={cn('rounded-2xl bg-primary p-4 text-white shadow-xl', className)}>
      <p className="text-sm">{title}</p>
      <p className="text-[10px] text-white/70">{caption}</p>
      <p className="mt-2 text-xl font-semibold sm:text-2xl">{value}</p>

      {progress !== undefined && (
        <div
          role="progressbar"
          aria-label={title}
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          className="mt-2 h-1.5 rounded-full bg-white/20"
        >
          <div
            className="h-full rounded-full bg-accent"
            style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          />
        </div>
      )}

      {badge && (
        <span className="mt-2 inline-block rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium text-ink">
          {badge}
        </span>
      )}
    </div>
  )
}