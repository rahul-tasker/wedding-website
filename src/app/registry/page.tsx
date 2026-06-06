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
    description: "The Rett Syndrome Research Trust funds the most promising research to develop treatments and a cure for Rett syndrome.",
    image: '/retts-logo.jpg',
    url: 'https://www.rettsyndrome.org/get-involved/donate/',
    color: '#F7E6C4',
  },
  {
    name: 'Blood Cancer United',
    description: 'Support Blood Cancer United in funding lifesaving research and providing resources for patients and families facing blood cancers.',
    image: '/bcu-logo.png',
    url: 'https://www.bloodcancerunited.org/donate',
    color: '#DDE7F0',
  },
  {
    name: 'Honeymoon Fund',
    description: 'Help us celebrate our first adventure as a married couple. Contributions can be sent via Venmo.',
    icon: '🌙',
    url: 'https://venmo.com/Rahul-Tasker',
    color: '#ECEBD6',
  },
]

export default function RegistryPage() {
  return (
    <div className="pt-24">
      <Section>
        <SectionHeader
          script="Registry"
          title="In Lieu of Gifts"
          subtitle="Your presence is truly the greatest gift. If you'd like to give something, we'd be honored if you considered donating to one of these causes — or contributing to our honeymoon fund."
          light
        />

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
                <p className="text-sm text-[#767B39] leading-relaxed mb-4">{description}</p>
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
