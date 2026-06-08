'use client'

import { useEffect, useState } from 'react'

const WEDDING_DATE = new Date('2027-05-15T15:00:00-06:00')
// Start and end of the wedding day (local to the venue, -06:00)
const WEDDING_DAY_START = new Date('2027-05-15T00:00:00-06:00')
const WEDDING_DAY_END = new Date('2027-05-16T00:00:00-06:00')

type CountdownState =
  | { phase: 'counting'; days: number; hours: number; minutes: number; seconds: number }
  | { phase: 'today' }
  | { phase: 'married' }

function getCountdownState(): CountdownState {
  const now = new Date()
  if (now.getTime() >= WEDDING_DAY_END.getTime()) return { phase: 'married' }
  if (now.getTime() >= WEDDING_DAY_START.getTime()) return { phase: 'today' }
  const diff = WEDDING_DATE.getTime() - now.getTime()
  return {
    phase: 'counting',
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export default function Countdown() {
  // Start in the 'counting' phase so server and first client render match (avoids hydration mismatch)
  const [state, setState] = useState<CountdownState>({
    phase: 'counting',
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    setState(getCountdownState())
    const interval = setInterval(() => setState(getCountdownState()), 1000)
    return () => clearInterval(interval)
  }, [])

  if (state.phase === 'today') {
    return (
      <div className="text-center text-3xl md:text-4xl font-serif text-white font-bold">
        Today&apos;s the day! 💍
      </div>
    )
  }

  if (state.phase === 'married') {
    return (
      <div className="text-center text-3xl md:text-4xl font-serif text-white font-bold">
        Just Married!
      </div>
    )
  }

  const units = [
    { label: 'Days', value: state.days },
    { label: 'Hours', value: state.hours },
    { label: 'Minutes', value: state.minutes },
    { label: 'Seconds', value: state.seconds },
  ]

  return (
    <div className="flex gap-4 md:gap-8 justify-center">
      {units.map(({ label, value }) => (
        <div key={label} className="text-center">
          <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-3 md:px-6 md:py-4 min-w-[64px] md:min-w-[80px]">
            <span className="block text-3xl md:text-4xl font-serif text-white font-bold">
              {String(value).padStart(2, '0')}
            </span>
          </div>
          <span className="block text-xs uppercase tracking-widest text-white/70 mt-2">{label}</span>
        </div>
      ))}
    </div>
  )
}
