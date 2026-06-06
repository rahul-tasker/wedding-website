import Section from '@/components/ui/Section'
import Link from 'next/link'

const venue = {
  name: 'Balistreri Vineyards',
  address: '1946 W 65th Ave, Denver, CO 80221',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Balistreri+Vineyards+1946+W+65th+Ave+Denver+CO+80221',
  embedUrl:
    'https://maps.google.com/maps?q=Balistreri+Vineyards,+1946+W+65th+Ave,+Denver,+CO+80221&z=14&output=embed',
}

const events = [
  {
    type: 'Ceremony',
    time: '6:00 PM',
    notes: 'Guests can begin arriving at 5:30 PM when the bar opens. Please be seated by 5:50 PM so we can start the ceremony promptly at 6:00 PM.',
  },
  {
    type: 'Cocktail Hour',
    time: '6:30 – 7:30 PM',
    notes: 'Appetizers and drinks will circulate following the ceremony.',
  },
  {
    type: 'Reception',
    time: '7:30 – 11:00 PM',
    notes: 'Dinner is served at 7:30 PM, followed by toasts, cake cutting, and first dances at 8:25 PM. The dance floor opens at 9:10 PM and the last song plays at 11:00 PM.',
  },
]

function Divider() {
  return (
    <div className="flex items-center gap-4 w-48 mx-auto my-12">
      <span className="flex-1 h-px bg-white/60" />
      <span className="text-white text-lg">✦</span>
      <span className="flex-1 h-px bg-white/60" />
    </div>
  )
}

export default function DetailsPage() {
  return (
    <div>
      {/* Hero image */}
      <section
        className="relative h-screen flex items-center justify-center text-center px-6 bg-cover bg-center"
        style={{ backgroundImage: 'url(/details-hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 pt-24 pb-12">
          <h1 className="font-serif text-6xl md:text-7xl text-white mb-4">Details</h1>
          <p className="text-white/90 text-lg md:text-xl max-w-xl mx-auto">
            We are so excited to celebrate with you.
          </p>
        </div>
      </section>

      <Section>
        {/* Venue + map */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-center gap-8">
          {/* Address — left aligned */}
          <div className="text-left md:w-2/5">
            <p className="font-serif text-2xl text-white mb-1">Saturday, May 15, 2027</p>
            <p className="text-white mb-1">{venue.name}</p>
            <p className="text-sm text-white/80 mb-5">{venue.address}</p>
            <Link
              href={venue.mapsUrl}
              target="_blank"
              className="inline-block text-sm text-white border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-[#767B39] transition-colors"
            >
              Get Directions →
            </Link>
          </div>

          {/* Map — right */}
          <div className="md:w-3/5 w-full rounded-2xl overflow-hidden border-4 border-white shadow-lg">
            <iframe
              src={venue.embedUrl}
              title="Balistreri Vineyards location"
              width="100%"
              height="320"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <Divider />

        {/* Timeline */}
        <div className="flex flex-col items-center max-w-2xl mx-auto">
          {events.map(({ type, time, notes }, i) => (
            <div key={type} className="flex flex-col items-center text-center">
              {i > 0 && <div className="w-px h-14 bg-white/30 my-8" />}
              <p className="text-xs uppercase tracking-[0.25em] text-white/80 mb-2">{type}</p>
              <p className="font-serif text-3xl md:text-4xl text-white mb-3">{time}</p>
              <p className="text-sm text-white/90 leading-relaxed max-w-md mx-auto">{notes}</p>
            </div>
          ))}
        </div>

        <Divider />

        {/* Dress Code + Colors of the day */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-center gap-10">
          {/* Dress code — left aligned */}
          <div className="text-left md:w-1/2">
            <h3 className="font-serif text-2xl text-white mb-3">Dress Code</h3>
            <p className="text-white/90">
              <strong>Cocktail Attire.</strong> Come looking and feeling your best — we want you to wear whatever makes you feel most like yourself.
            </p>
          </div>

          {/* Colors of the day — right */}
          <div className="md:w-1/2 text-center">
            <p className="font-serif text-xl text-white mb-4">Colors of the Day</p>
            <div className="inline-flex items-center gap-3 sm:gap-4 bg-white rounded-full px-6 py-4 shadow-md">
              {['#045289', '#E27921', '#767B39', '#980204', '#3F0013'].map((color) => (
                <span
                  key={color}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>

        <Divider />

        {/* Where to stay */}
        <div className="text-center max-w-lg mx-auto">
          <h3 className="font-serif text-2xl text-white mb-3">Where to Stay</h3>
          <p className="text-white/90">
            We&apos;re looking into a hotel block at the Source Hotel in Denver and will update this page shortly. Check back soon!
          </p>
        </div>

        <Divider />

        {/* Entourage */}
        <div className="text-center">
          <h3 className="font-serif text-2xl text-white mb-3">Entourage</h3>
          <p className="max-w-xl mx-auto text-white/90 text-lg leading-relaxed mb-12">
            The two best dogs in the world, helping us celebrate the big day.
          </p>
          <div className="flex flex-wrap justify-center gap-16">
            {[
              { name: 'Georgia', img: '/georgia.jpg', imgClass: 'object-[38%_61%] scale-[1.51] group-hover:scale-[1.61]' },
              { name: 'Teddy', img: '/teddy.jpg', imgClass: 'group-hover:scale-110' },
            ].map(({ name, img, imgClass }) => (
              <div key={name} className="text-center group">
                <div className="relative mb-4 mx-auto w-40 h-40 rounded-full overflow-hidden shadow-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img}
                    alt={name}
                    className={`w-full h-full object-cover transition-transform duration-300 ${imgClass}`}
                  />
                </div>
                <h3 className="font-serif text-xl text-white">{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
