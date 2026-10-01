import type { Testimonial } from '@/types/testimonial'
import sarah from '@/assets/images/testimonials/sarah.png'
import james from '@/assets/images/testimonials/james.png'
import alex from '@/assets/images/testimonials/alex.png'

export const testimonials: readonly Testimonial[] = [
  {
    id: 'sarah',
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatar: sarah,
    quote:
      'ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.',
  },
  {
    id: 'james',
    name: 'James L.',
    role: 'Lifelong Learner',
    avatar: james,
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    id: 'alex',
    name: 'Alex B.',
    role: 'Inspired Creator',
    avatar: alex,
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
]