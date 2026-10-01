import { FloatingCard } from '@/components/ui/FloatingCard'

interface ProgressCardProps {
  label: string
  value: number
  className?: string
}

export function ProgressCard({ label, value, className }: ProgressCardProps) {
  const percent = Math.min(100, Math.max(0, value))

  return (
    <FloatingCard className={className}>
      <p className="text-sm leading-5">{label}</p>
      <p className="mt-3 text-5xl font-medium leading-none">{percent}%</p>
      <div
        role="progressbar"
        aria-label={label}
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        className="mt-3 h-2 rounded-full bg-surface"
      >
        <div className="h-full rounded-full bg-accent" style={{ width: `${percent}%` }} />
      </div>
    </FloatingCard>
  )
}