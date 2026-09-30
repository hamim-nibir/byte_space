import { cn } from '@/lib/cn'

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2 text-white', className)}>
      <svg viewBox="0 0 29 32" className="h-6 w-auto fill-accent" aria-hidden="true">
        <path d="M10.5 10.5C10.5 4.70101 5.79899 0 0 0V21C0 26.799 4.70101 31.5 10.5 31.5V10.5Z" />
        <path d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21H21C15.201 21 10.5 16.299 10.5 10.5L18.375 10.5Z" />
        <path d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21H21C15.201 21 10.5 25.701 10.5 31.5L18.375 31.5Z" />
      </svg>
      <span className="font-display text-2xl font-bold leading-none">ByteSpace</span>
    </span>
  )
}