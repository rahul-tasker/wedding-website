# Wedding Website — Build Plan

## Overview
A complete guide to planning, designing, and building a wedding website from scratch.

---

## 1. Define Requirements

### Must-Have Pages
- [ ] **Home / Landing** — Hero image, names, wedding date, countdown timer
- [ ] **Our Story** — Timeline of the couple's journey
- [ ] **Details** — Ceremony and reception info (date, time, venue, address)
- [ ] **RSVP** — Form for guests to confirm attendance + meal preference
- [ ] **Registry** — Links to gift registries (Amazon, Zola, Crate & Barrel, etc.)
- [ ] **Travel & Accommodations** — Hotel blocks, travel tips, map embeds
- [ ] **Gallery** — Engagement photos / photo album
- [ ] **Wedding Party** — Bridesmaids, groomsmen with photos and bios
- [ ] **FAQ** — Common guest questions (dress code, parking, kids policy, etc.)

### Nice-to-Have Pages
- [ ] **Countdown page** — Live timer to the wedding day
- [ ] **Guestbook** — Comments/messages from guests
- [ ] **Song Requests** — Let guests request songs for the reception
- [ ] **Schedule** — Day-of timeline for guests

---

## 2. Choose a Tech Stack

### Option A — Simple & Fast (Recommended for most couples)
- **Framework:** Next.js (React) with App Router
- **Styling:** Tailwind CSS
- **Database/Backend:** Supabase (RSVP storage, guestbook)
- **Hosting:** Vercel (free tier works)
- **Domain:** Namecheap or Google Domains (~$12/yr)

### Option B — Static Only (No backend needed)
- **Framework:** Astro or plain HTML/CSS/JS
- **RSVP:** Formspree or Google Forms embed
- **Hosting:** Netlify or GitHub Pages (free)

### Option C — No-Code
- Zola, Joy, or Squarespace (fastest, least customizable)

---

## 3. Project Setup (Next.js + Tailwind + Supabase)

```bash
# 1. Bootstrap the project
npx create-next-app@latest wedding-website --typescript --tailwind --app --src-dir
cd wedding-website

# 2. Install dependencies
npm install @supabase/supabase-js
npm install @supabase/ssr
npm install react-hook-form zod @hookform/resolvers  # RSVP form validation
npm install framer-motion                             # Animations
npm install react-countup                            # Countdown timer
npm install react-leaflet leaflet                    # Map embed (optional)

# 3. Set up environment variables
cp .env.example .env.local
# Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
```

---

## 4. Supabase Setup

### Tables to Create

#### `rsvps`
```sql
create table rsvps (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  email text,
  attending boolean not null,
  guest_count integer default 1,
  meal_preference text,       -- 'chicken' | 'fish' | 'vegetarian'
  dietary_restrictions text,
  message text
);
```

#### `guestbook` (optional)
```sql
create table guestbook (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  message text not null,
  approved boolean default false  -- manual moderation
);
```

#### `song_requests` (optional)
```sql
create table song_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  song_title text not null,
  artist text,
  requested_by text
);
```

---

## 5. File Structure

```
wedding-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (fonts, nav, footer)
│   │   ├── page.tsx            # Home / Hero
│   │   ├── our-story/
│   │   │   └── page.tsx
│   │   ├── details/
│   │   │   └── page.tsx
│   │   ├── rsvp/
│   │   │   └── page.tsx
│   │   ├── registry/
│   │   │   └── page.tsx
│   │   ├── travel/
│   │   │   └── page.tsx
│   │   ├── gallery/
│   │   │   └── page.tsx
│   │   ├── wedding-party/
│   │   │   └── page.tsx
│   │   └── faq/
│   │       └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Section.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Countdown.tsx
│   │   ├── RsvpForm.tsx
│   │   ├── Gallery.tsx
│   │   ├── Timeline.tsx
│   │   └── WeddingPartyCard.tsx
│   ├── lib/
│   │   └── supabase.ts
│   └── types/
│       └── index.ts
├── public/
│   └── images/                 # Photos, venue images, couple photos
├── .env.local
└── PLAN.md
```

---

## 6. Build Order (Recommended)

### Phase 1 — Foundation
- [ ] Initialize Next.js project with Tailwind
- [ ] Set up fonts (Google Fonts — e.g., Playfair Display + Lato)
- [ ] Define color palette and Tailwind theme (cream, blush, gold, sage green)
- [ ] Build `Navbar` and `Footer` components
- [ ] Build root `layout.tsx`

### Phase 2 — Core Pages
- [ ] **Home page** — Hero section with names, date, countdown timer
- [ ] **Details page** — Ceremony + reception info, Google Maps embed
- [ ] **RSVP page** — Form connected to Supabase

### Phase 3 — Content Pages
- [ ] **Our Story** — Timeline component with photos
- [ ] **Wedding Party** — Grid of cards with photos
- [ ] **Gallery** — Photo grid / lightbox
- [ ] **Travel & Accommodations** — Hotel cards, map, travel tips

### Phase 4 — Extra Features
- [ ] **Registry** — Link cards to external registries
- [ ] **FAQ** — Accordion component
- [ ] **Guestbook** — Submission form + approved messages feed
- [ ] **Song Requests** — Simple form to Supabase

### Phase 5 — Polish & Launch
- [ ] Mobile responsiveness audit
- [ ] Accessibility (alt tags, contrast, keyboard nav)
- [ ] Performance (Next.js Image optimization, lazy loading)
- [ ] SEO (meta tags, og:image for sharing)
- [ ] Password protect the site (optional — for privacy)
- [ ] Custom domain setup on Vercel
- [ ] Test RSVP form end-to-end
- [ ] Share with wedding party for feedback

---

## 7. Design Guidelines

### Typography
- **Headings:** Playfair Display (serif) — elegant, romantic
- **Body:** Lato or Inter (sans-serif) — readable
- **Accent:** Great Vibes or Dancing Script (script) — for names/monogram

### Color Palette (customize to your theme)
```
--cream:      #FAF7F2
--blush:      #E8C4B8
--gold:       #C9A84C
--sage:       #8FAF8F
--charcoal:   #3D3D3D
```

### Aesthetic
- Lots of whitespace — let photos breathe
- Subtle fade-in animations (Framer Motion)
- Consistent rounded corners and soft shadows
- Monogram or floral divider elements between sections

---

## 8. RSVP Form Implementation

```tsx
// src/components/RsvpForm.tsx
'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { supabase } from '@/lib/supabase'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email().optional().or(z.literal('')),
  attending: z.boolean(),
  guest_count: z.number().min(1).max(4),
  meal_preference: z.enum(['chicken', 'fish', 'vegetarian']),
  dietary_restrictions: z.string().optional(),
  message: z.string().optional(),
})

export function RsvpForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data) => {
    const { error } = await supabase.from('rsvps').insert(data)
    if (!error) alert('RSVP submitted! We can\'t wait to see you.')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* fields */}
    </form>
  )
}
```

---

## 9. Deployment Checklist

- [ ] Push code to GitHub
- [ ] Connect repo to Vercel
- [ ] Add env vars to Vercel dashboard
- [ ] Set up custom domain (e.g., `john-and-jane.com`)
- [ ] Enable HTTPS (automatic on Vercel)
- [ ] Set Supabase RLS policies on `rsvps` table (allow insert, deny select for anon)
- [ ] Test on iOS Safari and Android Chrome
- [ ] Send test RSVP, confirm it appears in Supabase dashboard

---

## 10. Security & Privacy

- [ ] Enable Row Level Security (RLS) on all Supabase tables
- [ ] Only allow `INSERT` for anonymous users on `rsvps`
- [ ] Add admin view behind Supabase Auth (to read RSVPs)
- [ ] Optionally password-protect the entire site with Next.js middleware
- [ ] Don't expose venue address in page source if privacy is a concern

---

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Google Fonts](https://fonts.google.com)
- [Unsplash](https://unsplash.com) — placeholder photos during development
- [Zola Registry](https://www.zola.com) — popular registry to link to
