import { FacebookIcon, GoogleIcon } from '@/components/ui/BrandIcons'
import { cn } from '@/lib/cn'

export type SocialProvider = 'facebook' | 'google'

const providers = [
  { id: 'facebook', label: 'Continue with Facebook', Icon: FacebookIcon },
  { id: 'google', label: 'Continue with Google', Icon: GoogleIcon },
] as const

interface SocialAuthButtonsProps {
  onSelect?: (provider: SocialProvider) => void
  className?: string
}

export function SocialAuthButtons({ onSelect, className }: SocialAuthButtonsProps) {
  return (
    <ul className={cn('flex justify-center gap-6', className)}>
      {providers.map(({ id, label, Icon }) => (
        <li key={id}>
          <button
            type="button"
            aria-label={label}
            onClick={() => onSelect?.(id)}
            className="grid size-[72px] place-items-center rounded-3xl border border-gray-200 text-ink transition hover:border-primary hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Icon className="size-8" />
          </button>
        </li>
      ))}
    </ul>
  )
}