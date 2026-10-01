import { cn } from '@/lib/cn'

interface CategoryTabsProps<T extends string> {
  categories: readonly T[]
  active: T
  onChange: (category: T) => void
  label: string
  className?: string
}

export function CategoryTabs<T extends string>({
  categories,
  active,
  onChange,
  label,
  className,
}: CategoryTabsProps<T>) {
  return (
    <div role="group" aria-label={label} className={cn('flex flex-wrap justify-center gap-3', className)}>
      {categories.map((category) => {
        const isActive = category === active
        return (
          <button
            key={category}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(category)}
            className={cn(
              'rounded-full px-4 py-2 text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
              isActive ? 'bg-accent font-medium text-ink' : 'bg-surface text-ink/80 hover:bg-gray-200',
            )}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}