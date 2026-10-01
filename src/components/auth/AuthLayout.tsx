import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { AuthShowcase } from '@/components/auth/AuthShowcase'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'

interface AuthLayoutProps {
  tagline: string
  description: string
  children: ReactNode
}

export function AuthLayout({ tagline, description, children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen overflow-x-clip bg-primary bg-grid text-white">
      <Container className="max-w-[1236px] pb-16 lg:pb-[120px]">
        <header className="flex h-24 items-center lg:h-[120px] lg:items-start lg:pt-8">
          <Link to="/" aria-label="ByteSpace home">
            <Logo iconOnly />
          </Link>
        </header>

        <main className="grid items-start gap-12 lg:grid-cols-[1fr_580px] lg:gap-16">
          <section aria-label="Introduction">
            <p className="text-xl font-semibold">{tagline}</p>
            <p className="mt-4 max-w-md text-base text-white/90">{description}</p>
            <AuthShowcase className="mt-16" />
          </section>

          <div>{children}</div>
        </main>
      </Container>
    </div>
  )
}