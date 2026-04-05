import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import Link from 'next/link'

const events = [
  {
    type: 'Ceremony',
    icon: '💒',
    time: 'Saturday, May 15, 2027 at 6:00 PM',
    venue: 'Balistreri Vineyards',
    address: '1946 W 65th Ave, Denver, CO 80221',
    notes: 'Please arrive by 5:45 PM. The ceremony will begin promptly at 6:00 PM.',
    mapsUrl: 'https://maps.google.com',
  },
  {
    type: 'Cocktail Hour',
    icon: '🥂',
    time: '7:00 PM – 8:00 PM',
    venue: 'Balistreri Vineyards — Outdoor Terrace',
    address: 'Same venue — outdoor vineyard terrace',
    notes: 'Light bites and drinks will be served in the garden following the ceremony.',
    mapsUrl: null,
  },
  {
    type: 'Reception',
    icon: '🎉',
    time: '8:00 PM – 11:00 PM',
    venue: 'Balistreri Vineyards — Main Hall',
    address: 'Same venue — main ballroom',
    notes: 'Dinner, dancing, and celebration.',
    mapsUrl: null,
  },
]

export default function DetailsPage() {
  return (
    <div className="pt-24">
      <Section>
        <SectionHeader
          script="The Details"
          title="Wedding Day Information"
          subtitle="Everything you need to know to celebrate with us."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {events.map(({ type, icon, time, venue, address, notes, mapsUrl }) => (
            <div key={type} className="bg-white rounded-2xl border border-[var(--blush)]/50 p-8 shadow-sm">
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="font-serif text-2xl text-[var(--charcoal)] mb-1">{type}</h3>
              <div className="divider w-24 my-4">
                <span className="text-[var(--gold)] text-sm">✦</span>
              </div>
              <p className="text-sm font-semibold text-[var(--gold)] uppercase tracking-wide mb-2">{time}</p>
              <p className="font-serif text-lg text-[var(--charcoal)] mb-1">{venue}</p>
              <p className="text-sm text-[var(--charcoal-light)] mb-4">{address}</p>
              <p className="text-sm text-[var(--charcoal-light)] leading-relaxed mb-4">{notes}</p>
              {mapsUrl && (
                <Link
                  href={mapsUrl}
                  target="_blank"
                  className="inline-block text-sm text-[var(--gold)] border border-[var(--gold)] px-4 py-2 rounded-lg hover:bg-[var(--gold)] hover:text-white transition-colors"
                >
                  View on Map →
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Dress Code */}
        <div className="mt-16 bg-[var(--blush)]/20 border border-[var(--blush)] rounded-2xl p-10 text-center">
          <span className="text-4xl">👗</span>
          <h3 className="font-serif text-2xl text-[var(--charcoal)] mt-4 mb-3">Dress Code</h3>
          <p className="text-[var(--charcoal-light)] max-w-lg mx-auto">
            <strong>Cocktail Attire.</strong> Come looking and feeling your best — we want you to wear whatever makes you feel most like yourself.
          </p>
        </div>
      </Section>
    </div>
  )
}
