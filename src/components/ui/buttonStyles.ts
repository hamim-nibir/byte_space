import { cn } from '@/lib/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'outline'

const base =
  'inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-ink hover:brightness-95',
  secondary: 'bg-primary text-white hover:bg-primary-dark',
  outline: 'border border-white/60 text-white hover:bg-white/10',
}

export function buttonStyles(variant: ButtonVariant = 'primary', className?: string) {
  return cn(base, variants[variant], className)
}