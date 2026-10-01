import type { Course } from '@/types/course'
import learnFigma from '@/assets/images/courses/learn-figma.png'
import digitalAsset from '@/assets/images/courses/digital-asset.png'
import bigData from '@/assets/images/courses/big-data.png'
import productivity from '@/assets/images/courses/productivity.png'
import moneyManagement from '@/assets/images/courses/money-management.png'
import startupSuccess from '@/assets/images/courses/startup-success.png'

const base = {
  creator: 'purepearl studio',
  rating: 4.5,
  level: 'Beginner',
  price: 25,
  priceUnit: 'lifetime',
  studentCount: '26+',
} as const

export const courses: readonly Course[] = [
  { ...base, id: 'learn-figma', title: 'Learn Figma from Basic', thumbnail: learnFigma, categories: ['Featured', 'UI/UX Design', 'Graphic Design'] },
  { ...base, id: 'digital-asset', title: 'Build Digital Asset', thumbnail: digitalAsset, categories: ['Featured', 'Music', 'Digital Illustration'] },
  { ...base, id: 'big-data', title: 'the Power of Big Data', thumbnail: bigData, categories: ['Featured', 'Data Science'] },
  { ...base, id: 'productivity', title: 'Balancing Productivity and Life', thumbnail: productivity, categories: ['Featured', 'Productivity'] },
  { ...base, id: 'money-management', title: 'Mastering Money Management', thumbnail: moneyManagement, categories: ['Featured', 'Freelance & Entrepreneurship'] },
  { ...base, id: 'startup-success', title: 'From Idea to Startup Success', thumbnail: startupSuccess, categories: ['Featured', 'Marketing', 'Freelance & Entrepreneurship'] },
]