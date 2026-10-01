import { useMemo, useState } from 'react'
import { CategoryTabs } from '@/components/ui/CategoryTabs'
import { Container } from '@/components/ui/Container'
import { CourseCard } from '@/components/ui/CourseCard'
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
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="courses-heading" className="text-3xl font-semibold leading-tight lg:text-4xl">
            Discover Your Passion,
            <br className="hidden sm:block" /> Build Your Skills
          </h2>
          <p className="mt-4 text-sm text-muted">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of
            courses across different fields, from technology to the arts, and make a difference in your
            career and life.
          </p>
        </div>

        <CategoryTabs
          label="Course categories"
          categories={courseCategories}
          active={active}
          onChange={setActive}
          className="mx-auto mt-10 max-w-5xl"
        />

        {visibleCourses.length > 0 ? (
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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