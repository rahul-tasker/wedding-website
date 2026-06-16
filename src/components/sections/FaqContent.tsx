import SectionHeader from '@/components/ui/SectionHeader'

const faqs = [
  {
    q: 'What is the dress code?',
    a: 'Cocktail attire — come looking and feeling your best. Wear whatever makes you feel most like yourself.',
  },
  {
    q: 'Are kids invited?',
    a: "While we love your little ones, we've chosen to keep our celebration adults-only as much as possible. For those who need it, we're arranging childcare at our home, just 15 minutes from the venue. If you'd like us to make an exception, please don't hesitate to reach out.",
  },
  {
    q: 'Can I bring a plus one?',
    a: "We are only able to accommodate guests listed on your invitation. If your invite includes '& Guest,' please feel free to bring someone along. If not, we kindly ask that you attend solo — but if you have a special circumstance, don't hesitate to reach out and we'll do our best to work something out.",
  },
  {
    q: 'Will the ceremony be indoors or outdoors?',
    a: 'The ceremony will be held outdoors, weather permitting — if Mother Nature has other plans, we will move inside. The reception will flow between indoor and outdoor spaces so you can enjoy both.',
  },
  {
    q: 'Is there parking at the venue?',
    a: 'Yes, parking is available on-site behind the venue. To access it, follow the dirt road to the right of the venue. If you plan to drink, please arrange a rideshare or designate a driver.',
  },
  {
    q: 'What time should I arrive?',
    a: 'Guests can begin arriving at 5:30 PM, when the bar opens. Please be seated by 5:50 PM so we can begin the ceremony promptly at 6:00 PM.',
  },
  {
    q: 'Will there be an open bar?',
    a: 'Yes! We will have a full open bar throughout the evening, including wine, beer, spirits, and non-alcoholic options.',
  },
  {
    q: 'Can I take photos during the ceremony?',
    a: 'We ask that you do not take any photos during the ceremony. If you feel you must, please ensure flash is off and your phone is on silent so everyone can be fully present.',
  },
  {
    q: 'What should I do if I have dietary restrictions?',
    a: 'Please note any dietary restrictions or allergies on your RSVP form and we will make sure you are taken care of.',
  },
  {
    q: 'Where should I stay?',
    a: 'We are currently working on arranging hotel blocks for our guests and will update this page as soon as details are confirmed. Check back soon!',
  },
]

export default function FaqContent({ withImage = false }: { withImage?: boolean }) {
  return (
    <div
      className={`min-h-screen bg-[#205476] pb-20 px-6 pt-24 ${withImage ? 'bg-center bg-no-repeat bg-cover' : ''}`}
      style={withImage ? { backgroundImage: 'url(/faq-bg.jpg)' } : undefined}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader script="FAQ" title="Frequently Asked Questions" color="#F0C047" />

        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map(({ q, a }) => (
            <div
              key={q}
              className="bg-white/80 rounded-2xl border border-[#980204]/40 shadow-sm p-6"
            >
              <h3 className="font-serif text-lg text-[#3F0013] mb-2">{q}</h3>
              <p className="text-sm text-black leading-relaxed">{a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#F0C047] mb-4">Still have questions?</p>
          <a
            href="mailto:rahultasker@gmail.com,danielle.kang97@gmail.com"
            className="inline-block bg-[#E27921] hover:bg-[#EC9A52] text-white px-8 py-3 rounded-lg text-sm uppercase tracking-widest transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  )
}
