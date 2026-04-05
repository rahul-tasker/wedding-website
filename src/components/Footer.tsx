import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[var(--charcoal)] text-white py-12 px-6 mt-auto">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-script text-4xl text-[var(--gold-light)] mb-3">Danny & Rahul</p>
        <p className="text-sm text-gray-400 tracking-widest uppercase mb-6">May 15, 2027</p>

        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-400">
          {[
            { href: '/our-story', label: 'Our Story' },
            { href: '/details', label: 'Details' },
            { href: '/rsvp', label: 'RSVP' },
            { href: '/registry', label: 'Registry' },
            { href: '/travel', label: 'Travel' },
            { href: '/faq', label: 'FAQ' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-[var(--gold-light)] transition-colors">
              {label}
            </Link>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-6 text-xs text-gray-600">
          Made with love ♡
        </div>
      </div>
    </footer>
  )
}
