import { cn } from '@/lib/cn'

export function OrDivider({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-4 text-muted', className)}>
      <span aria-hidden="true" className="h-px flex-1 bg-gray-300" />
      <span className="text-base">or</span>
      <span aria-hidden="true" className="h-px flex-1 bg-gray-300" />
    </div>
  )
}