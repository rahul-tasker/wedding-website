interface SectionHeaderProps {
  script?: string
  title?: string
  subtitle?: string
  light?: boolean
}

export default function SectionHeader({ script, title, subtitle, light = false }: SectionHeaderProps) {
  return (
    <div className="text-center mb-14">
      {script && (
        <p className={`font-script text-4xl mb-2 ${light ? 'text-white' : 'text-[var(--gold)]'}`}>{script}</p>
      )}
      {title && (
        <h2 className={`text-3xl md:text-4xl font-serif mb-4 ${light ? 'text-white' : 'text-[var(--charcoal)]'}`}>{title}</h2>
      )}
      {light ? (
        <div className="flex items-center gap-4 w-48 mx-auto">
          <span className="flex-1 h-px bg-white/60" />
          <span className="text-white text-lg">✦</span>
          <span className="flex-1 h-px bg-white/60" />
        </div>
      ) : (
        <div className="divider w-48 mx-auto">
          <span className="text-[var(--gold)] text-lg">✦</span>
        </div>
      )}
      {subtitle && (
        <p className={`mt-4 text-lg max-w-xl mx-auto ${light ? 'text-white/90' : 'text-[var(--charcoal-light)]'}`}>{subtitle}</p>
      )}
    </div>
  )
}
