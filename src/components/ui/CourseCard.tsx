import { ChartNoAxesColumn, Star } from 'lucide-react'
import { AvatarStack } from '@/components/ui/AvatarStack'
import { Badge } from '@/components/ui/Badge'
import { avatars } from '@/data/avatars'
import type { Course } from '@/types/course'

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export function CourseCard({ course }: { course: Course }) {
  const { title, creator, rating, level, price, priceUnit, thumbnail, studentCount } = course

  return (
    <article className="rounded-3xl border border-gray-200 bg-white p-4 text-ink transition hover:shadow-lg">
      {/* Lessons, duration and comments are part of the exported image */}
      <img
        src={thumbnail}
        alt={`${title} course preview`}
        loading="lazy"
        decoding="async"
        className="aspect-[7/4] w-full rounded-2xl object-cover"
      />

      <div className="pt-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="truncate text-xl font-semibold" title={title}>
            {title}
          </h3>
          <p className="flex shrink-0 items-center gap-1 text-base text-muted">
            <span className="sr-only">Rating:</span>
            {rating}
            <Star size={20} className="fill-gray-300 text-gray-300" aria-hidden="true" />
          </p>
        </div>

        <p className="mt-1 text-xs text-muted">
          by <span className="text-primary">{creator}</span>
        </p>

        <div className="mt-4 flex items-center gap-3">
          <Badge className="gap-1.5 px-3 py-2 text-ink">
            <ChartNoAxesColumn size={14} aria-hidden="true" />
            {level}
          </Badge>
          <AvatarStack
            avatars={avatars.slice(0, 4)}
            extra={studentCount}
            extraClassName="bg-accent text-ink"
          />
        </div>

        <p className="mt-4 text-2xl font-semibold text-primary">
          {priceFormatter.format(price)}
          <span className="text-sm font-normal text-muted">/{priceUnit}</span>
        </p>
      </div>
    </article>
  )
}