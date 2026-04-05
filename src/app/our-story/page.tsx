import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'

const timeline = [
  {
    year: '2018',
    title: 'How We Met',
    description:
      'We met at a mutual friend\'s rooftop party in San Francisco on a warm July evening. Rahul was immediately drawn to Danny\'s laugh, and Danny was charmed by his terrible dancing. Neither of us wanted the night to end.',
  },
  {
    year: '2019',
    title: 'Our First Date',
    description:
      'A picnic in Golden Gate Park — Rahul planned the whole thing and even remembered that Danny had mentioned loving brie. It was the moment Danny knew this one was different.',
  },
  {
    year: '2020',
    title: 'Moving In Together',
    description:
      'After a year of dating through an unusual world, we decided life was too short. We moved into our little apartment in Noe Valley, complete with too many plants and a very opinionated cat named Biscuit.',
  },
  {
    year: '2022',
    title: 'The Proposal',
    description:
      'Rahul got down on one knee during a sunset hike in Point Reyes — the exact spot we had come to on our first big adventure together. Danny said yes before he even finished the question.',
  },
  {
    year: '2027',
    title: 'The Big Day',
    description:
      'And now here we are — ready to promise each other forever in front of all the people we love most. We can\'t wait to celebrate with you.',
  },
]

export default function OurStoryPage() {
  return (
    <div className="pt-24">
      <Section>
        <SectionHeader
          script="Our Story"
          title="How It All Began"
          subtitle="Every great love story has a beginning. Ours started on a rooftop in San Francisco."
        />

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-[var(--blush)] hidden md:block" />

          <div className="space-y-16">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white rounded-2xl shadow-sm border border-[var(--blush)]/40 p-8">
                    <span className="inline-block font-serif text-[var(--gold)] text-sm tracking-widest uppercase mb-2">
                      {item.year}
                    </span>
                    <h3 className="font-serif text-2xl text-[var(--charcoal)] mb-3">{item.title}</h3>
                    <p className="text-[var(--charcoal-light)] leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex items-center justify-center w-10 h-10 shrink-0">
                  <div className="w-4 h-4 rounded-full bg-[var(--gold)] border-4 border-[var(--cream)]" />
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
