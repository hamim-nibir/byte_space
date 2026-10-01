import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface SectionHeadingProps {
  id: string
  title: ReactNode
  description?: string
  className?: string
}

export function SectionHeading({ id, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn('mx-auto max-w-4xl text-center', className)}>
      <h2 id={id} className="text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base text-muted">{description}</p>}
    </div>
  )
}