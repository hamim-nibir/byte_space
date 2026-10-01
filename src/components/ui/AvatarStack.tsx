import { cn } from '@/lib/cn'

type AvatarSize = 'sm' | 'md' | 'lg'

interface AvatarStackProps {
  avatars: string[]
  extra?: string
  size?: AvatarSize
  className?: string
  extraClassName?: string
}

const sizes: Record<AvatarSize, { box: string; overlap: string }> = {
  sm: { box: 'size-7', overlap: '-space-x-2' },
  md: { box: 'size-9', overlap: '-space-x-2' },
  lg: { box: 'size-10', overlap: '-space-x-3' },
}

export function AvatarStack({ avatars, extra, size = 'sm', className, extraClassName }: AvatarStackProps) {
  const { box, overlap } = sizes[size]

  return (
    <div className={cn('flex items-center', overlap, className)}>
      {avatars.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className={cn('rounded-full border-2 border-white object-cover', box)}
        />
      ))}
      {extra && (
        <span
          className={cn(
            'grid place-items-center rounded-full border-2 border-white bg-ink text-xs font-medium text-white',
            box,
            extraClassName,
          )}
        >
          {extra}
        </span>
      )}
    </div>
  )
}