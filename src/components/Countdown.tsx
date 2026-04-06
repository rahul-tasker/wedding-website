'use client'

import { useEffect, useState } from 'react'

const WEDDING_DATE = new Date('2027-05-15T15:00:00-06:00')

function getTimeLeft() {
  const now = new Date()
  const diff = WEDDING_DATE.getTime() - now.getTime()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export default function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    setTime(getTimeLeft())
    const interval = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(interval)
  }, [])

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
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
