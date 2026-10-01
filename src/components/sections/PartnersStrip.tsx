import { Container } from '@/components/ui/Container'
import { partners } from '@/data/partners'
import type { Partner } from '@/types/partner'
import { cn } from '@/lib/cn'

interface PartnersStripProps {
  items?: readonly Partner[]
  className?: string
}

export function PartnersStrip({ items = partners, className }: PartnersStripProps) {
  return (
    <section aria-label="Our partners" className={cn('bg-surface py-12 lg:py-20', className)}>
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 lg:flex-nowrap lg:justify-between">
          {items.map((partner) => (
            <li key={partner.id} className="shrink-0">
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                decoding="async"
                className="h-8 w-auto lg:h-10"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}