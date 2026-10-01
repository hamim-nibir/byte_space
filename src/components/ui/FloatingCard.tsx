import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

export function FloatingCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('rounded-2xl bg-white p-4 text-ink shadow-xl', className)} {...props} />
}