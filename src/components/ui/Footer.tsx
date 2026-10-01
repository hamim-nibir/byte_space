import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { NewsletterForm } from '@/components/ui/NewsletterForm'
import { footerLinkGroups, legalLinks } from '@/data/footer'

const linkClass =
  'block text-[14px] font-normal leading-[160%] text-ink-soft transition hover:text-primary'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white font-satoshi">
      <Container className="max-w-[1264px] pt-[72px]">
        <Link to="/" aria-label="ByteSpace home" className="inline-block">
          <Logo className="text-ink" />
        </Link>

        <div className="mt-4 grid gap-12 lg:grid-cols-2 lg:gap-x-12 xl:grid-cols-[528px_1fr] xl:gap-x-[92px]">
          <div>
            <p className="text-[14px] text-ink">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <NewsletterForm className="mt-[46px] max-w-[504px]" />
            <p className="mt-6 max-w-[470px] text-[12px] leading-[160%] text-ink">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our
              company.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 xl:-mt-1.5 xl:gap-x-[41px]"
          >
            {footerLinkGroups.map((group, i) => (
              <ul key={i} className="flex flex-col gap-4">
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

        <div className="mt-16 flex flex-col gap-4 border-t border-gray-200 py-6 sm:flex-row sm:items-center sm:justify-between lg:mt-[124px]">
          <p className="text-xs leading-4 text-ink">
            © {new Date().getFullYear()} ByteSpace. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="block text-xs leading-4 text-ink transition hover:text-primary">
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