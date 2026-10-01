import type { CourseCategory } from '@/data/categories'

export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced'

export interface Course {
  id: string
  title: string
  creator: string
  rating: number
  level: CourseLevel
  price: number
  priceUnit: string
  thumbnail: string
  studentCount: string
  categories: readonly CourseCategory[]
}