import type { Testimonial } from '@/types/testimonial'

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { name, role, quote, avatar } = testimonial

  return (
    <figure className="rounded-3xl bg-white p-6">
      <img
        src={avatar}
        alt={`Portrait of ${name}`}
        loading="lazy"
        decoding="async"
        className="size-20 rounded-full object-cover"
      />

      <figcaption className="mt-6">
        <p className="text-lg font-semibold text-ink">{name}</p>
        <p className="text-base text-primary">{role}</p>
      </figcaption>

      <blockquote className="mt-6 text-base leading-7 text-muted">
        <p>{`"${quote}"`}</p>
      </blockquote>
    </figure>
  )
}