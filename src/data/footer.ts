import type { NavItem } from '@/types/navigation'

export const footerLinkGroups: readonly (readonly NavItem[])[] = [
  [
    { label: 'Featured Courses', href: '#courses' },
    { label: 'Featured Categories', href: '#courses' },
    { label: 'Business', href: '#courses' },
    { label: 'IT', href: '#courses' },
    { label: 'Design', href: '#courses' },
  ],
  [
    { label: 'Development', href: '#courses' },
    { label: 'Marketing', href: '#courses' },
    { label: 'Photography', href: '#courses' },
    { label: 'Finance', href: '#courses' },
    { label: 'Sport', href: '#courses' },
  ],
  [
    { label: 'Become a Creator', href: '/register' },
    { label: 'Affiliate Program', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Help', href: '#' },
    { label: 'About', href: '#' },
  ],
]

export const legalLinks: readonly NavItem[] = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookies Settings', href: '#' },
]