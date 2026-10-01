import { useMemo, useState } from 'react'
import { CategoryTabs } from '@/components/ui/CategoryTabs'
import { Container } from '@/components/ui/Container'
import { CourseCard } from '@/components/ui/CourseCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { courseCategories, type CourseCategory } from '@/data/categories'
import { courses } from '@/data/courses'

export function CoursesSection() {
  const [active, setActive] = useState<CourseCategory>('Featured')

  const visibleCourses = useMemo(
    () => courses.filter((course) => course.categories.includes(active)),
    [active],
  )

  return (
    <section id="courses" aria-labelledby="courses-heading" className="bg-white py-16 lg:py-24">
      <Container>
        <SectionHeading
          id="courses-heading"
          title={
            <>
              Discover Your Passion,
              <br className="hidden sm:block" /> Build Your Skills
            </>
          }
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        <CategoryTabs
          label="Course categories"
          categories={courseCategories}
          active={active}
          onChange={setActive}
          className="mx-auto mt-10 max-w-6xl"
        />

        {visibleCourses.length > 0 ? (
          <ul className="mx-auto mt-12 grid max-w-[1200px] gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {visibleCourses.map((course) => (
              <li key={course.id}>
                <CourseCard course={course} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-12 text-center text-muted" role="status">
            No courses in this category yet.
          </p>
        )}
      </Container>
    </section>
  )
}