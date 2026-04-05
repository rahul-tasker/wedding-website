import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  narrow?: boolean
}

export default function Section({ children, className = '', id, narrow = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 px-6 ${className}`}
    >
      <div className={`mx-auto ${narrow ? 'max-w-2xl' : 'max-w-5xl'}`}>
        {children}
      </div>
    </section>
  )
}
