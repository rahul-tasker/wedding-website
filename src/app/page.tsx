import Link from 'next/link'
import Countdown from '@/components/Countdown'
import DetailsContent from '@/components/sections/DetailsContent'
import RsvpContent from '@/components/sections/RsvpContent'
import RegistryContent from '@/components/sections/RegistryContent'
import FaqContent from '@/components/sections/FaqContent'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen flex flex-col items-center text-center px-6 pt-28 md:pt-32 bg-cover bg-center md:bg-fixed"
        style={{
          backgroundImage: 'url(/hero.jpg)',
        }}
      >
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

        {/* Title + countdown — near the top */}
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-[#EC9A52] tracking-[0.3em] uppercase text-sm mb-6 opacity-0 animate-fade-in-up">
            Together with their Families & Friends
          </p>
          <h1 className="font-script text-6xl md:text-8xl text-white mb-4 whitespace-nowrap opacity-0 animate-fade-in-up animate-delay-100">
            Danny & Rahul
          </h1>

          <div className="opacity-0 animate-fade-in-up animate-delay-200">
            <Countdown />
          </div>

          <div className="mt-8 opacity-0 animate-fade-in-up animate-delay-300">
            <Link
              href="/rsvp"
              className="inline-block bg-[#E27921] hover:bg-[#EC9A52] text-white px-10 py-4 rounded-lg text-sm uppercase tracking-widest font-semibold transition-colors"
            >
              RSVP Now
            </Link>
          </div>
        </div>

        {/* When / Where — bottom (stacks on mobile, anchors left/right on larger screens) */}
        <div className="absolute bottom-8 inset-x-6 z-10 flex flex-col items-center gap-5 sm:flex-row sm:items-end sm:justify-between opacity-0 animate-fade-in-up animate-delay-400">
          <div className="text-center sm:text-left">
            <p className="text-[#EC9A52] text-xs tracking-[0.25em] uppercase mb-1">When</p>
            <p className="text-white/90 text-base md:text-lg tracking-wide uppercase">May 15, 2027</p>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-[#EC9A52] text-xs tracking-[0.25em] uppercase mb-1">Where</p>
            <p className="text-white/90 text-base md:text-lg tracking-wide">Balistreri Vineyards, Denver, CO</p>
          </div>
        </div>
      </section>

      {/* Stacked sections — scroll through the whole site (no images here) */}
      <div id="details" className="scroll-mt-20"><DetailsContent /></div>
      <div id="rsvp" className="scroll-mt-20"><RsvpContent /></div>
      <div id="registry" className="scroll-mt-20"><RegistryContent /></div>
      <div id="faq" className="scroll-mt-20"><FaqContent /></div>
    </>
  )
}
