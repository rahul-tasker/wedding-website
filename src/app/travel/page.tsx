import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'

export default function TravelPage() {
  return (
    <div className="pt-24">
      <Section>
        <SectionHeader
          script="Travel"
          title="Getting Here"
          subtitle="We want to make your trip as easy as possible. Here's everything you need to know."
        />

        {/* Airports */}
        <div className="grid gap-6 md:grid-cols-2 mb-16">
          {[
            {
              icon: '✈️',
              name: 'Denver International Airport (DEN)',
              distance: '25 miles from venue — approximately 30 min drive',
            },
            {
              icon: '🚇',
              name: 'RTD University of Colorado A Line',
              distance: 'Train from DEN to Union Station downtown, then rideshare to venue',
            },
          ].map(({ icon, name, distance }) => (
            <div key={name} className="bg-white rounded-2xl border border-[#E8C4B8]/40 p-6 shadow-sm">
              <span className="text-3xl block mb-3">{icon}</span>
              <h3 className="font-serif text-lg text-[#3D3D3D] mb-1">{name}</h3>
              <p className="text-sm text-[#6B6B6B]">{distance}</p>
            </div>
          ))}
        </div>

        {/* Hotels */}
        <h2 className="font-serif text-2xl text-[#3D3D3D] text-center mb-8">Where to Stay</h2>
        <div className="bg-white rounded-2xl border border-[#E8C4B8]/40 p-10 shadow-sm text-center mb-16">
          <p className="font-serif text-xl text-[#C9A84C] mb-3">TBD</p>
          <p className="text-sm text-[#6B6B6B] max-w-lg mx-auto">
            We are looking into booking a hotel block at the Source Hotel in Denver and will update this page shortly. Check back soon!
          </p>
        </div>

        {/* Transportation */}
        <div className="bg-white rounded-2xl border border-[#E8C4B8]/40 p-10 shadow-sm">
          <h3 className="font-serif text-2xl text-[#3D3D3D] mb-6 text-center">Getting Around</h3>
          <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto text-center">
            {[
              { icon: '🚗', title: 'Driving', text: 'Parking is available at the venue. Please plan for a designated driver or rideshare if you plan to drink.' },
              { icon: '🚕', title: 'Rideshare', text: 'Uber and Lyft are widely available in Denver. We recommend pre-booking for late night pickup after the reception.' },
            ].map(({ icon, title, text }) => (
              <div key={title}>
                <span className="text-3xl block mb-3">{icon}</span>
                <h4 className="font-serif text-lg text-[#3D3D3D] mb-2">{title}</h4>
                <p className="text-sm text-[#6B6B6B]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
