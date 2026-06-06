import Link from 'next/link'
import Countdown from '@/components/Countdown'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen flex flex-col items-center text-center px-6 pt-28 md:pt-32 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(/hero.jpg)',
        }}
      >
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

        {/* Title + countdown — near the top */}
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-[#EC9A52] tracking-[0.3em] uppercase text-sm mb-6 opacity-0 animate-fade-in-up">
            Together with their families
          </p>
          <h1 className="font-script text-6xl md:text-8xl text-white mb-4 whitespace-nowrap opacity-0 animate-fade-in-up animate-delay-100">
            Danny & Rahul
          </h1>

          <div className="opacity-0 animate-fade-in-up animate-delay-200">
            <Countdown />
          </div>
        </div>

        {/* Buttons — at the bottom, centered */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animate-delay-300">
          <Link
            href="/rsvp"
            className="bg-[#E27921] hover:bg-[#EC9A52] text-white px-10 py-4 rounded-lg text-sm uppercase tracking-widest font-semibold transition-colors"
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

        {/* When — bottom left */}
        <div className="absolute bottom-8 left-8 z-10 text-left opacity-0 animate-fade-in-up animate-delay-400">
          <p className="text-[#EC9A52] text-xs tracking-[0.25em] uppercase mb-1">When</p>
          <p className="text-white/90 text-base md:text-lg tracking-wide uppercase">May 15, 2027</p>
        </div>

        {/* Where — bottom right */}
        <div className="absolute bottom-8 right-8 z-10 text-right opacity-0 animate-fade-in-up animate-delay-400">
          <p className="text-[#EC9A52] text-xs tracking-[0.25em] uppercase mb-1">Where</p>
          <p className="text-white/90 text-base md:text-lg tracking-wide">Balistreri Vineyards, Denver, CO</p>
        </div>
      </section>
    </>
  )
}
