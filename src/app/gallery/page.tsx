import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'

const photos = [
  'DR_Proposal_CN1_9215.jpg',
  'DR_Proposal_CN1_9225.jpg',
  'DR_Proposal_CN1_9256.jpg',
  'DR_Proposal_CN1_9297.jpg',
  'DR_Proposal_CN1_9307.jpg',
  'DR_Proposal_CN1_9342.jpg',
  'DR_Proposal_CN1_9477.jpg',
  'DR_Proposal_CN1_9527.jpg',
  'DR_Proposal_CN1_9536.jpg',
  'DR_Proposal_CN1_9544.jpg',
  'DR_Proposal_CN1_9598.jpg',
  'DR_Proposal_CN1_9676.jpg',
  'DR_Proposal_CN1_9723.jpg',
  'DR_Proposal_CN1_9773.jpg',
  'DR_Proposal_CNP_3976.jpg',
  'DR_Proposal_CNP_3989.jpg',
  'DR_Proposal_CNP_4051.jpg',
  'DR_Proposal_CNP_4060.jpg',
  'DR_Proposal_CNP_4065.jpg',
  'DR_Proposal_CNP_4125.jpg',
].map((filename, i) => ({ id: i + 1, src: `/gallery/${filename}`, alt: `Proposal photo ${i + 1}` }))

export default function GalleryPage() {
  return (
    <div className="pt-24">
      <Section>
        <SectionHeader
          script="Gallery"
          title="Our Engagement Photos"
          subtitle="A few of our favorite moments captured by our photographer."
        />

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {photos.map(({ id, src, alt }) => (
            <div
              key={id}
              className="break-inside-avoid rounded-xl overflow-hidden bg-[#E8C4B8]/30 aspect-auto"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#6B6B6B] mt-12">
          Photos by <span className="font-semibold text-[#3D3D3D]">Emily Chen Photography</span>
        </p>
      </Section>
    </div>
  )
}
