import SectionHeader from '@/components/ui/SectionHeader'
import RsvpForm from '@/components/RsvpForm'

export default function RsvpContent({ withImage = false }: { withImage?: boolean }) {
  return (
    <div
      className={`min-h-screen bg-[#205476] pb-20 px-6 ${withImage ? 'bg-center bg-no-repeat pt-32' : 'pt-24'}`}
      style={withImage ? { backgroundImage: 'url(/rsvp-bg.jpg)', backgroundSize: '70.4rem auto' } : undefined}
    >
      <div className="max-w-2xl mx-auto">
        <SectionHeader
          script="RSVP"
          subtitle="Please respond by March 1, 2027 so we can ensure everyone has a seat at the table."
          color="#F0C047"
        />
        <div className="bg-white/80 rounded-2xl shadow-sm p-8 md:p-12">
          <RsvpForm />
        </div>
      </div>
    </div>
  )
}
