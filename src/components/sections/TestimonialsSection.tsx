import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { testimonials } from '@/data/testimonials'

export function TestimonialsSection() {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-glow-right py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            id="testimonials-heading"
            align="left"
            className="max-w-lg"
            title={
              <>
                Discover What Our
                <br className="hidden sm:block" /> Community Is Saying
              </>
            }
          />
          <p className="text-base leading-7 text-muted">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear
            directly from those who have experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic
            learners and accomplished creators.
          </p>
        </div>

        <ul className="mt-12 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}