'use client'

import { useState } from 'react'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'

const faqs = [
  {
    q: 'What is the dress code?',
    a: 'Cocktail attire — come looking and feeling your best. Wear whatever makes you feel most like yourself.',
  },
  {
    q: 'Are children welcome?',
    a: 'Absolutely! We love your little ones and welcome them to celebrate with us. And if you need a quiet place to step away, our home is just 15 minutes from the venue.',
  },
  {
    q: 'Can I bring a plus one?',
    a: "We are only able to accommodate guests listed on your invitation. If your invite includes '& Guest,' please feel free to bring someone along. If not, we kindly ask that you attend solo — but if you have a special circumstance, don't hesitate to reach out and we'll do our best to work something out.",
  },
  {
    q: 'Will the ceremony be indoors or outdoors?',
    a: 'The ceremony will be held outdoors, weather permitting — if Mother Nature has other plans, we will move inside. The reception will flow between indoor and outdoor spaces so you can enjoy both.',
  },
  {
    q: 'Is there parking at the venue?',
    a: 'Yes, parking is available on-site. If you plan to drink, please arrange a rideshare or designate a driver.',
  },
  {
    q: 'What time should I arrive?',
    a: 'Please plan to arrive by 6:00 PM so we can get the celebration started on time.',
  },
  {
    q: 'Will there be an open bar?',
    a: 'Yes! We will have a full open bar throughout the evening, including wine, beer, spirits, and non-alcoholic options.',
  },
  {
    q: 'Can I take photos during the ceremony?',
    a: 'Yes, feel free to capture the moment! We just ask that you stay seated and keep phones on silent so everyone can be fully present.',
  },
  {
    q: 'What should I do if I have dietary restrictions?',
    a: 'Please note any dietary restrictions or allergies on your RSVP form and we will make sure you are taken care of.',
  },
  {
    q: 'Where should I stay?',
    a: 'We are currently working on arranging hotel blocks for our guests and will update this page as soon as details are confirmed. Check back soon!',
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
            href="mailto:rahultasker@gmail.com,danielle.kang97@gmail.com"
            className="inline-block bg-[#C9A84C] hover:bg-[#E2C87A] text-white px-8 py-3 rounded-lg text-sm uppercase tracking-widest transition-colors"
          >
            Email Us
          </a>
        </div>
      </Section>
    </div>
  )
}
