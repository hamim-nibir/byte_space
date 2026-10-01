import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { navLinks } from '@/data/navigation'

const linkClass = 'text-sm text-white/90 transition hover:text-white'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <Container className="grid h-30 grid-cols-2 items-center md:grid-cols-[1fr_auto_1fr]">
        <Link to="/" aria-label="ByteSpace home" onClick={close}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className={linkClass}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 justify-self-end md:flex">
          <Link to="/login" className={linkClass}>Sign In</Link>
          <Link to="/register" className={linkClass}>Join Us</Link>
          <button type="button" aria-label="Cart" className="transition hover:text-accent">
            <ShoppingBag size={20} />
          </button>
        </div>

        <button
          type="button"
          className="justify-self-end md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {open && (
        <div id="mobile-menu" className="bg-primary-dark px-4 pb-6 pt-2 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="py-1 text-white" onClick={close}>
                {l.label}
              </a>
            ))}
            <Link to="/login" className="py-1 text-white" onClick={close}>Sign In</Link>
            <Link to="/register" className="py-1 text-white" onClick={close}>Join Us</Link>
          </nav>
        </div>
      )}
    </header>
  )
}