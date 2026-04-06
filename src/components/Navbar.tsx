'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/details', label: 'Details' },
  { href: '/rsvp', label: 'RSVP' },
  { href: '/registry', label: 'Give' },
  { href: '/travel', label: 'Travel' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/faq', label: 'FAQ' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[var(--cream)] shadow-sm border-b border-[var(--blush)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-script text-3xl text-[var(--gold)] hover:opacity-80 transition-opacity">
          D & R
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.slice(1).map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm tracking-wide uppercase transition-colors hover:text-[var(--gold)] ${
                pathname === href
                  ? 'text-[var(--gold)] font-semibold'
                  : !scrolled && pathname === '/' ? 'text-white/90' : 'text-[var(--charcoal)]'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[var(--charcoal)] transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[var(--charcoal)] transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[var(--charcoal)] transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[var(--cream)] border-t border-[var(--blush)] px-6 py-4">
          <nav className="flex flex-col gap-4">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm tracking-wide uppercase transition-colors hover:text-[var(--gold)] ${
                  pathname === href ? 'text-[var(--gold)] font-semibold' : 'text-[var(--charcoal)]'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
