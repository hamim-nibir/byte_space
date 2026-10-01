import { useId } from 'react'
import { cn } from '@/lib/cn'

type Tone = 'lime' | 'white'

interface Shape3DProps {
  src: string
  tone: Tone
  className?: string
}

/*
 * `color` is the exact Figma hex. `ramp` is how much of that color is kept at
 * five brightness levels of the gray render (darkest to lightest).
 * Highlights end at 1, so they land exactly on the hex.
 * Lower the first values for deeper shadows, raise them for a flatter look.
 */
const TONES: Record<Tone, { color: string; ramp: readonly number[] }> = {
  lime: { color: '#D4FB20', ramp: [0.1, 0.4, 0.7, 0.95, 1] },
  white: { color: '#F5F5F6', ramp: [0.55, 0.72, 0.86, 0.97, 1] },
}

function hexToUnitRgb(hex: string) {
  const n = parseInt(hex.slice(1), 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => v / 255)
}

export function Shape3D({ src, tone, className }: Shape3DProps) {
  const filterId = `shape-${useId().replace(/[^a-zA-Z0-9]/g, '')}`
  const { color, ramp } = TONES[tone]
  const [r, g, b] = hexToUnitRgb(color)
  const table = (channel: number) => ramp.map((m) => (channel * m).toFixed(4)).join(' ')

  return (
    <span
      aria-hidden="true"
      className={cn('pointer-events-none absolute z-[1] hidden select-none lg:block', className)}
    >
      <svg width="0" height="0" className="absolute" focusable="false">
        <filter id={filterId} colorInterpolationFilters="sRGB">
          <feComponentTransfer>
            <feFuncR type="table" tableValues={table(r)} />
            <feFuncG type="table" tableValues={table(g)} />
            <feFuncB type="table" tableValues={table(b)} />
          </feComponentTransfer>
        </filter>
      </svg>

      <img
        src={src}
        alt=""
        draggable={false}
        className="block h-auto w-full"
        style={{ filter: `url(#${filterId})` }}
      />
    </span>
  )
}