import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { NewsletterForm } from '@/components/ui/NewsletterForm'
import { footerLinkGroups, legalLinks } from '@/data/footer'

const linkClass = 'text-sm text-ink transition hover:text-primary'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container className="max-w-[1236px] pt-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-[520px]">
            <Link to="/" aria-label="ByteSpace home">
              <Logo className="text-ink" />
            </Link>
            <p className="mt-4 text-sm text-ink">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <NewsletterForm className="mt-10" />
            <p className="mt-6 max-w-sm text-xs leading-5 text-ink">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our
              company.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
            {footerLinkGroups.map((group, i) => (
              <ul key={i} className="space-y-5">
                {group.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={linkClass}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-gray-200 py-8 sm:flex-row sm:items-center sm:justify-between lg:mt-24">
          <p className="text-xs text-ink">© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-xs text-ink transition hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}