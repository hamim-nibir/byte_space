import { cn } from '@/lib/cn'

interface AvatarStackProps {
  avatars: string[]
  extra?: string
  size?: 'sm' | 'md'
  className?: string
  extraClassName?: string
}

const sizes = { sm: 'size-7', md: 'size-9' }

export function AvatarStack({ avatars, extra, size = 'sm', className, extraClassName }: AvatarStackProps) {
  return (
    <div className={cn('flex items-center -space-x-2', className)}>
      {avatars.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className={cn('rounded-full border-2 border-white object-cover', sizes[size])}
        />
      ))}
      {extra && (
        <span
          className={cn(
            'grid place-items-center rounded-full border-2 border-white bg-ink text-xs font-medium text-white',
            sizes[size],
            extraClassName,
          )}
        >
          {extra}
        </span>
      )}
    </div>
  )
}