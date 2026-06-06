export const dynamic = 'force-dynamic'

import SectionHeader from '@/components/ui/SectionHeader'
import RsvpForm from '@/components/RsvpForm'

export default function RsvpPage() {
  return (
    <div
      className="min-h-screen bg-[#767B39] bg-center bg-no-repeat pt-32 pb-20 px-6"
      style={{ backgroundImage: 'url(/rsvp-bg.jpg)', backgroundSize: '64rem auto' }}
    >
      <div className="max-w-2xl mx-auto">
        <SectionHeader
          script="RSVP"
          subtitle="Please respond by March 1, 2027 so we can ensure everyone has a seat at the table."
          light
        />
        <div className="bg-white/80 rounded-2xl border border-[#980204]/50 shadow-sm p-8 md:p-12">
          <RsvpForm />
        </div>
      </div>
    </div>
  )
}
