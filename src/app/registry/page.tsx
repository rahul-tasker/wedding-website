import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import Link from 'next/link'

const funds = [
  {
    name: "Rett Syndrome Research",
    description: "The Rett Syndrome Research Trust funds the most promising research to develop treatments and a cure for Rett syndrome.",
    icon: '🎗️',
    url: 'https://www.rettsyndrome.org/get-involved/donate/',
    color: '#F5E6C8',
  },
  {
    name: 'Lymphoma Research',
    description: 'Support the American Cancer Society\'s efforts to fund research and provide resources for those affected by lymphoma.',
    icon: '🔬',
    url: 'https://donate.cancer.org/?campaign=Lymphomamedia',
    color: '#E8F0E8',
  },
  {
    name: 'Colorado Cattle Dog Rescue',
    description: 'Help Colorado Heelers — Sophie rescue and rehome Australian Cattle Dogs in need across Colorado.',
    icon: '🐾',
    url: 'https://coloradoheelers-sophie.com/public/ViewPage.aspx?Page=Support%20Us%20Landing%20Page',
    color: '#E8C4B8',
  },
  {
    name: 'Honeymoon Fund',
    description: 'Help us celebrate our first adventure as a married couple. Contributions can be sent via Venmo.',
    icon: '🌍',
    url: 'https://venmo.com/Rahul-Tasker',
    color: '#EAE8F5',
  },
]

export default function RegistryPage() {
  return (
    <div className="pt-24">
      <Section>
        <SectionHeader
          script="Give"
          title="In Lieu of Gifts"
          subtitle="Your presence is truly the greatest gift. If you'd like to give something, we'd be honored if you considered donating to one of these causes — or contributing to our honeymoon fund."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {funds.map(({ name, description, icon, url, color }) => (
            <div
              key={name}
              className="rounded-2xl border border-[#E8C4B8]/40 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-24 flex items-center justify-center text-5xl" style={{ background: color }}>
                {icon}
              </div>
              <div className="bg-white p-6">
                <h3 className="font-serif text-xl text-[#3D3D3D] mb-2">{name}</h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">{description}</p>
                <Link
                  href={url}
                  target="_blank"
                  className="inline-block text-sm border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-white px-5 py-2 rounded-lg transition-colors"
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
