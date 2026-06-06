import type { Metadata } from 'next'
import { Jost, Abril_Fatface } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

// Main / body font. Futura isn't on Google Fonts (licensed), so we prefer it in
// the CSS font stack and fall back to Jost — a free, near-identical geometric sans.
const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
})

// Display / accent ("subtext") font.
const abril = Abril_Fatface({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-abril',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Danny & Rahul — Wedding',
  description: 'Join us for the wedding of Danny & Rahul on May 15, 2027.',
  icons: { icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💍</text></svg>' },
  openGraph: {
    title: 'Danny & Rahul — Wedding',
    description: 'Join us for the wedding of Danny & Rahul on May 15, 2027.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jost.variable} ${abril.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}
