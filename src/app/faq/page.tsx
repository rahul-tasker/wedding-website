'use client'

import { useState } from 'react'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'

const faqs = [
  {
    q: 'What is the dress code?',
    a: 'Cocktail attire. Come looking and feeling your best — wear whatever makes you feel most like yourself.',
  },
  {
    q: 'Are children welcome?',
    a: 'We love your little ones! However, we have decided to keep our celebration adults-only (18+) so everyone can relax and enjoy the evening. We hope you can arrange childcare and celebrate with us.',
  },
  {
    q: 'Can I bring a plus one?',
    a: "Due to venue capacity, we are only able to accommodate guests specifically listed on your invitation. If your invite says 'and guest,' please feel free to bring someone. If not, we ask that you attend solo.",
  },
  {
    q: 'Will the ceremony be indoors or outdoors?',
    a: 'The ceremony will be held outdoors in the estate gardens, weather permitting. The reception will be indoors in the grand ballroom. We recommend bringing a light wrap for the evening.',
  },
  {
    q: 'Is there parking at the venue?',
    a: 'Yes, complimentary parking is available on-site. However, we strongly encourage guests to use the shuttle or rideshare if you plan to drink. Please do not drink and drive.',
  },
  {
    q: 'What time should I arrive?',
    a: 'Please arrive by 2:45 PM. Seating begins at 2:30 PM and the ceremony will start promptly at 3:00 PM. Latecomers will need to wait until after the processional to be seated.',
  },
  {
    q: 'Will there be an open bar?',
    a: 'Yes! We will have a full open bar during cocktail hour and reception, including wine, beer, spirits, and non-alcoholic options.',
  },
  {
    q: 'Can I take photos during the ceremony?',
    a: "We are having an unplugged ceremony — we ask that all phones and cameras be put away during the ceremony so you can be fully present. Our photographer will capture everything beautifully. Feel free to take photos during cocktail hour and reception!",
  },
  {
    q: 'What should I do if I have dietary restrictions?',
    a: 'Please note any dietary restrictions on your RSVP form. We will do our best to accommodate all needs. Please also feel free to contact us directly if you have severe allergies.',
  },
  {
    q: 'Where should I stay?',
    a: 'We have arranged room blocks at nearby hotels. Please visit our Travel page for details and special rates.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#E8C4B8]/50 last:border-0">
      <button
        className="w-full text-left py-6 flex items-center justify-between gap-4 hover:text-[#C9A84C] transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-serif text-lg text-[#3D3D3D]">{q}</span>
        <span className="text-[#C9A84C] text-2xl shrink-0 transition-transform" style={{ transform: open ? 'rotate(45deg)' : 'none' }}>
          +
        </span>
      </button>
      {open && (
        <div className="pb-6 text-[#6B6B6B] leading-relaxed">
          {a}
        </div>
      )}
    </div>
  )
}

export default function FaqPage() {
  return (
    <div className="pt-24">
      <Section narrow>
        <SectionHeader
          script="FAQ"
          title="Frequently Asked Questions"
          subtitle="Can't find your answer here? Reach out to us directly."
        />
        <div className="bg-white rounded-2xl border border-[#E8C4B8]/40 shadow-sm px-8 py-4">
          {faqs.map(({ q, a }) => (
            <FaqItem key={q} q={q} a={a} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#6B6B6B] mb-4">Still have questions?</p>
          <a
            href="mailto:danny.rahul.wedding2027@gmail.com"
            className="inline-block bg-[#C9A84C] hover:bg-[#E2C87A] text-white px-8 py-3 rounded-lg text-sm uppercase tracking-widest transition-colors"
          >
            Email Us
          </a>
        </div>
      </Section>
    </div>
  )
}
