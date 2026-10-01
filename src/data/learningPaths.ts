import { Building2, Camera, CodeXml, Laptop, Megaphone, PencilRuler } from 'lucide-react'
import type { LearningPath } from '@/types/learningPath'

export const learningPaths: readonly LearningPath[] = [
  { id: 'design', label: 'Design', icon: PencilRuler, href: '#courses' },
  { id: 'development', label: 'Development', icon: CodeXml, href: '#courses' },
  { id: 'it-software', label: 'IT & Software', icon: Laptop, href: '#courses' },
  { id: 'business', label: 'Business', icon: Building2, href: '#courses' },
  { id: 'marketing', label: 'Marketing', icon: Megaphone, href: '#courses' },
  { id: 'photography', label: 'Photography', icon: Camera, href: '#courses' },
]