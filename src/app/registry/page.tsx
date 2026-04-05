import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import Link from 'next/link'

const registries = [
  {
    name: 'Zola',
    description: 'Our main registry with everything from kitchen essentials to experiences.',
    icon: '💍',
    url: 'https://www.zola.com',
    color: '#F5E6C8',
  },
  {
    name: 'Amazon',
    description: 'A mix of everyday items and home goods.',
    icon: '📦',
    url: 'https://www.amazon.com',
    color: '#E8F0E8',
  },
  {
    name: 'Crate & Barrel',
    description: 'Home decor and entertaining essentials we love.',
    icon: '🏡',
    url: 'https://www.crateandbarrel.com',
    color: '#E8C4B8',
  },
]

export default function RegistryPage() {
  return (
    <div className="pt-24">
      <Section>
        <SectionHeader
          script="Registry"
          title="Gift Registry"
          subtitle="Your presence at our wedding is the greatest gift of all. If you'd like to give something, we're registered at the following stores."
        />

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {registries.map(({ name, description, icon, url, color }) => (
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
                  View Registry →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#E8C4B8]/20 border border-[#E8C4B8] rounded-2xl p-10 text-center">
          <span className="text-3xl mb-4 block">💌</span>
          <h3 className="font-serif text-xl text-[#3D3D3D] mb-3">A Note on Gifts</h3>
          <p className="text-[#6B6B6B] max-w-lg mx-auto">
            We are also gratefully accepting contributions to our honeymoon fund. If you prefer to give cash,
            please place it in the card box at the reception. Thank you so much for your generosity!
          </p>
        </div>
      </Section>
    </div>
  )
}
