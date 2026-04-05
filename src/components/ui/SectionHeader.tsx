interface SectionHeaderProps {
  script?: string
  title: string
  subtitle?: string
}

export default function SectionHeader({ script, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-14">
      {script && (
        <p className="font-script text-4xl text-[var(--gold)] mb-2">{script}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-serif text-[var(--charcoal)] mb-4">{title}</h2>
      <div className="divider w-48 mx-auto">
        <span className="text-[var(--gold)] text-lg">✦</span>
      </div>
      {subtitle && (
        <p className="text-[var(--charcoal-light)] mt-4 text-lg max-w-xl mx-auto">{subtitle}</p>
      )}
    </div>
  )
}
