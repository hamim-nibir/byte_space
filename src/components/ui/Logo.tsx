import { cn } from '@/lib/cn'

interface LogoProps {
  className?: string
  iconOnly?: boolean
  dark?: boolean
}

export function Logo({ className, iconOnly = false, dark = false }: LogoProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-[5.5px]',
        dark ? 'text-ink' : 'text-white',
        className,
      )}
    >
      <svg
        viewBox="0 0 28.875 31.5"
        className="h-[31.5px] w-[28.88px] shrink-0 fill-accent"
        aria-hidden="true"
      >
        <path d="M10.5 10.5C10.5 4.70101 5.79899 0 0 0V21C0 26.799 4.70101 31.5 10.5 31.5V10.5Z" />
        <path d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21H21C15.201 21 10.5 16.299 10.5 10.5L18.375 10.5Z" />
        <path d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21H21C15.201 21 10.5 25.701 10.5 31.5L18.375 31.5Z" />
      </svg>
      {!iconOnly && (
        <span className="translate-y-[7px] font-display text-2xl font-bold leading-none">
          ByteSpace
        </span>
      )}
    </span>
  )
}