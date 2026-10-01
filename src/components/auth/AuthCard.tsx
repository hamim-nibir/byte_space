import type { ReactNode } from 'react'

interface AuthCardProps {
  eyebrow: string
  title: ReactNode
  footer: ReactNode
  children: ReactNode
}

export function AuthCard({ eyebrow, title, footer, children }: AuthCardProps) {
  return (
    <div className="flex min-h-[620px] flex-col rounded-[32px] bg-white p-8 text-ink sm:p-12 lg:min-h-[784px]">
      <p className="text-lg text-primary">{eyebrow}</p>
      <h1 className="mt-1 text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1>
      <div className="mt-10">{children}</div>
      <p className="mt-auto pt-10 text-center text-base text-muted">{footer}</p>
    </div>
  )
}