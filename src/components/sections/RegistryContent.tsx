import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import Link from 'next/link'

const funds: {
  name: string
  description: string
  icon?: string
  image?: string
  url: string
  color: string
}[] = [
  {
    name: "Rett Syndrome Research",
    description:
      'In honor of our goddaughter, Vera, who lives with Rett\'s Syndrome.\n\nThe Rett Syndrome Research Trust funds the most promising research to develop treatments and a cure for Rett syndrome.',
    image: '/retts-logo.jpg',
    url: 'https://give.rettsyndrome.org/Cure4Vera',
    color: '#F7E6C4',
  },
  {
    name: 'Blood Cancer United',
    description:
      "In loving memory of Danny's mother, Michelle Eunkyung Kang, whose life and family were profoundly impacted by leukemia.\n\nBlood Cancer United funds lifesaving research and provides resources for patients and families facing blood cancers.",
    image: '/bcu-logo.png',
    url: 'https://diy.bloodcancerunited.org/fundraiser/7347874',
    color: '#DDE7F0',
  },
  {
    name: 'Honeymoon Fund',
    description: 'Help us celebrate our first adventure as a married couple! Contributions can be sent via Venmo.',
    icon: '🌙',
    url: 'https://venmo.com/Rahul-Tasker',
    color: '#9CBCC4',
  },
]

const subtitle =
  "Your presence is truly the greatest gift. If you'd like to give something, we'd be honored if you considered donating to one of these causes, or contributing to our honeymoon fund."

export default function RegistryContent({ withHero = false }: { withHero?: boolean }) {
  return (
    <div className={`bg-[#205476] min-h-screen ${withHero ? '' : 'pt-24'}`}>
      {withHero && (
        <section
          className="relative aspect-[3/2] md:aspect-auto md:h-screen flex items-center justify-center text-center px-6 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/registry-hero.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/30 md:bg-black/40" />
          <div className="relative z-10 pt-16 pb-8 md:pt-24 md:pb-12">
            <h1 className="font-serif text-6xl md:text-7xl text-[#F0C047] mb-4">Registry</h1>
            <p className="text-[#F0C047]/90 text-lg md:text-xl max-w-xl mx-auto">In Lieu of Gifts</p>
          </div>
        </section>
      )}

      <Section>
        {withHero ? (
          <p className="text-center text-[#F0C047]/90 text-lg max-w-2xl mx-auto mb-12">{subtitle}</p>
        ) : (
          <SectionHeader
            script="Registry"
            title="In Lieu of Gifts"
            subtitle={subtitle}
            color="#F0C047"
          />
        )}

        <div className="grid gap-8 md:grid-cols-3">
          {funds.map(({ name, description, icon, image, url, color }) => (
            <div
              key={name}
              className="flex flex-col rounded-2xl border border-[#980204]/40 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-24 flex items-center justify-center text-5xl" style={{ background: color }}>
                {image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover" />
                ) : (
                  icon
                )}
              </div>
              <div className="flex-1 bg-white p-6">
                <h3 className="font-serif text-xl text-[#3F0013] mb-2">{name}</h3>
                <p className="text-sm text-black leading-relaxed mb-4 whitespace-pre-line">{description}</p>
                <Link
                  href={url}
                  target="_blank"
                  className="inline-block text-sm border border-[#E27921] text-[#E27921] hover:bg-[#E27921] hover:text-white px-5 py-2 rounded-lg transition-colors"
                >
                  {name === 'Honeymoon Fund' ? 'Send via Venmo →' : 'Donate →'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
