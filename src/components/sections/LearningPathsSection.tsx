import { Container } from '@/components/ui/Container'
import { LearningPathCard } from '@/components/ui/LearningPathCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { learningPaths } from '@/data/learningPaths'

export function LearningPathsSection() {
  return (
    <section aria-labelledby="paths-heading" className="bg-white pb-16 lg:pb-24">
      <Container>
        <SectionHeading
          id="paths-heading"
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
          className="max-w-5xl"
        />

        <ul className="mx-auto mt-12 grid max-w-[1200px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-10">
          {learningPaths.map((path) => (
            <li key={path.id}>
              <LearningPathCard path={path} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}