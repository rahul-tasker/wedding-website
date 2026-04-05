export const dynamic = 'force-dynamic'

import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import RsvpForm from '@/components/RsvpForm'

export default function RsvpPage() {
  return (
    <div className="pt-24">
      <Section narrow>
        <SectionHeader
          script="RSVP"
          title="Will You Join Us?"
          subtitle="Please respond by March 1, 2027 so we can ensure everyone has a seat at the table."
        />
        <div className="bg-white rounded-2xl border border-[#E8C4B8]/50 shadow-sm p-8 md:p-12">
          <RsvpForm />
        </div>
      </Section>
    </div>
  )
}
