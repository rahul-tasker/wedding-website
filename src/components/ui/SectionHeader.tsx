interface SectionHeaderProps {
  script?: string
  title?: string
  subtitle?: string
  light?: boolean
  /** Custom hex color for all header text + divider (overrides light). */
  color?: string
}

export default function SectionHeader({ script, title, subtitle, light = false, color }: SectionHeaderProps) {
  const tinted = !!color
  const textStyle = color ? { color } : undefined
  const lineStyle = color ? { backgroundColor: color, opacity: 0.6 } : undefined

  return (
    <div className="text-center mb-14">
      {script && (
        <p
          className={`font-script text-4xl mb-2 ${tinted ? '' : light ? 'text-white' : 'text-[var(--gold)]'}`}
          style={textStyle}
        >
          {script}
        </p>
      )}
      {title && (
        <h2
          className={`text-3xl md:text-4xl font-serif mb-4 ${tinted ? '' : light ? 'text-white' : 'text-[var(--charcoal)]'}`}
          style={textStyle}
        >
          {title}
        </h2>
      )}
      {tinted || light ? (
        <div className="flex items-center gap-4 w-48 mx-auto">
          <span className={`flex-1 h-px ${tinted ? '' : 'bg-white/60'}`} style={lineStyle} />
          <span className={`text-lg ${tinted ? '' : 'text-white'}`} style={textStyle}>✦</span>
          <span className={`flex-1 h-px ${tinted ? '' : 'bg-white/60'}`} style={lineStyle} />
        </div>
      ) : (
        <div className="divider w-48 mx-auto">
          <span className="text-[var(--gold)] text-lg">✦</span>
        </div>
      )}
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-xl mx-auto ${tinted ? 'opacity-90' : light ? 'text-white/90' : 'text-[var(--charcoal-light)]'}`}
          style={textStyle}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
