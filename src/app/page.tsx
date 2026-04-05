import Link from 'next/link'
import Countdown from '@/components/Countdown'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center px-6"
        style={{
          background: 'linear-gradient(135deg, #3D3D3D 0%, #5a4a3a 50%, #3D3D3D 100%)',
        }}
      >
        {/* Decorative overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #E8C4B8 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, #C9A84C 0%, transparent 50%)`,
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[#E2C87A] tracking-[0.3em] uppercase text-sm mb-6 opacity-0 animate-fade-in-up">
            Together with their families
          </p>
          <h1 className="font-script text-7xl md:text-9xl text-white mb-4 opacity-0 animate-fade-in-up animate-delay-100">
            Danny & Rahul
          </h1>
          <div className="divider w-64 mx-auto my-6 opacity-0 animate-fade-in-up animate-delay-200">
            <span className="text-[#C9A84C] text-xl">✦</span>
          </div>
          <p className="text-white/80 text-lg md:text-xl tracking-widest uppercase mb-2 opacity-0 animate-fade-in-up animate-delay-200">
            May 15, 2027
          </p>
          <p className="text-white/60 text-base mb-12 opacity-0 animate-fade-in-up animate-delay-300">
            Balistreri Vineyards, Denver, CO
          </p>

          <div className="mb-12 opacity-0 animate-fade-in-up animate-delay-300">
            <Countdown />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animate-delay-400">
            <Link
              href="/rsvp"
              className="bg-[#C9A84C] hover:bg-[#E2C87A] text-white px-10 py-4 rounded-lg text-sm uppercase tracking-widest font-semibold transition-colors"
            >
              RSVP Now
            </Link>
            <Link
              href="/details"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-10 py-4 rounded-lg text-sm uppercase tracking-widest transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/30" />
        </div>
      </section>

      {/* Quick info strip */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { icon: '📅', label: 'Date', value: 'May 15, 2027' },
            { icon: '📍', label: 'Venue', value: 'Balistreri Vineyards, Denver' },
            { icon: '🕒', label: 'Ceremony', value: '6:00 PM' },
          ].map(({ icon, label, value }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <span className="text-3xl">{icon}</span>
              <p className="text-xs uppercase tracking-widest text-[#6B6B6B]">{label}</p>
              <p className="font-serif text-lg text-[#3D3D3D]">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Details teaser */}
      <section className="py-24 px-6 text-center bg-[#FAF7F2]">
        <p className="font-script text-5xl text-[#C9A84C] mb-6">The Details</p>
        <p className="max-w-xl mx-auto text-[#6B6B6B] text-lg leading-relaxed mb-10">
          Everything you need to know for the big day — ceremony, reception, and more.
        </p>
        <Link
          href="/details"
          className="inline-block border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-white px-8 py-3 rounded-lg text-sm uppercase tracking-widest transition-colors"
        >
          View Details
        </Link>
      </section>
    </>
  )
}
