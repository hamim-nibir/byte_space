import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface SectionHeadingProps {
  id: string
  title: ReactNode
  description?: ReactNode
  align?: 'center' | 'left'
  tone?: 'dark' | 'light'
  className?: string
  descriptionClassName?: string
}

export function SectionHeading({
  id,
  title,
  description,
  align = 'center',
  tone = 'dark',
  className,
  descriptionClassName,
}: SectionHeadingProps) {
  const isLight = tone === 'light'

  return (
    <div className={cn('max-w-4xl', align === 'center' ? 'mx-auto text-center' : 'text-left', className)}>
      <h2
        id={id}
        className={cn(
          'text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl',
          isLight ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-base',
            isLight ? 'text-white/90' : 'text-muted',
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}