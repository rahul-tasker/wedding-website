import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'

const bridesmaids = [
  { name: 'Emily Chen', role: 'Maid of Honor', relation: 'Best Friend since college' },
  { name: 'Olivia Torres', role: 'Bridesmaid', relation: 'Sister' },
  { name: 'Mia Johnson', role: 'Bridesmaid', relation: 'College roommate' },
  { name: 'Ava Williams', role: 'Bridesmaid', relation: 'Friend from work' },
]

const groomsmen = [
  { name: 'Michael Park', role: 'Best Man', relation: 'Brother' },
  { name: 'Daniel Lee', role: 'Groomsman', relation: 'College roommate' },
  { name: 'Tyler Brown', role: 'Groomsman', relation: 'Childhood friend' },
  { name: 'Ryan Davis', role: 'Groomsman', relation: 'Friend from work' },
]

function PartyCard({ name, role, relation, seed }: { name: string; role: string; relation: string; seed: string }) {
  return (
    <div className="text-center group">
      <div className="relative mb-4 mx-auto w-36 h-36 rounded-full overflow-hidden border-4 border-[#E8C4B8] shadow-md">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://picsum.photos/seed/${seed}/200/200`}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h3 className="font-serif text-lg text-[#3D3D3D]">{name}</h3>
      <p className="text-xs uppercase tracking-widest text-[#C9A84C] font-semibold mb-1">{role}</p>
      <p className="text-sm text-[#6B6B6B]">{relation}</p>
    </div>
  )
}

export default function WeddingPartyPage() {
  return (
    <div className="pt-24">
      <Section>
        <SectionHeader
          script="Wedding Party"
          title="Meet the Crew"
          subtitle="The incredible people who have stood by us every step of the way."
        />

        {/* Bridesmaids */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl text-center text-[#3D3D3D] mb-10">
            <span className="font-script text-4xl text-[#C9A84C] block mb-2">Danny&apos;s Side</span>
            Bridesmaids
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {bridesmaids.map((person) => (
              <PartyCard key={person.name} {...person} seed={person.name.replace(' ', '')} />
            ))}
          </div>
        </div>

        <div className="divider w-64 mx-auto my-12">
          <span className="text-[#C9A84C] text-xl">✦</span>
        </div>

        {/* Groomsmen */}
        <div>
          <h2 className="font-serif text-2xl text-center text-[#3D3D3D] mb-10">
            <span className="font-script text-4xl text-[#C9A84C] block mb-2">Rahul&apos;s Side</span>
            Groomsmen
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {groomsmen.map((person) => (
              <PartyCard key={person.name} {...person} seed={person.name.replace(' ', '')} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
