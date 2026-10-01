import { cn } from '@/lib/cn'

type Tone = 'lime' | 'white'

interface Shape3DProps {
  src: string
  tone: Tone
  className?: string
}

/* Tune these two strings until the shapes match Figma */
const toneFilters: Record<Tone, string> = {
  white: 'brightness(1.6) contrast(0.9)',
  lime: 'brightness(1.4) sepia(1) hue-rotate(28deg) saturate(6)',
}

export function Shape3D({ src, tone, className }: Shape3DProps) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      draggable={false}
      style={{ filter: toneFilters[tone] }}
      className={cn('pointer-events-none absolute z-[1] hidden select-none lg:block', className)}
    />
  )
}