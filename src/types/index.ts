export type MealPreference = 'chicken' | 'fish' | 'vegetarian' | 'vegan'

export interface Rsvp {
  id: string
  created_at: string
  name: string
  email: string | null
  attending: boolean
  guest_count: number
  meal_preference: MealPreference | null
  dietary_restrictions: string | null
  message: string | null
}

export interface GuestbookEntry {
  id: string
  created_at: string
  name: string
  message: string
  approved: boolean
}

export interface SongRequest {
  id: string
  created_at: string
  song_title: string
  artist: string | null
  requested_by: string | null
}

export type Database = {
  public: {
    Tables: {
      rsvps: {
        Row: Rsvp
        Insert: Omit<Rsvp, 'id' | 'created_at'>
        Update: Partial<Omit<Rsvp, 'id' | 'created_at'>>
      }
      guestbook: {
        Row: GuestbookEntry
        Insert: Omit<GuestbookEntry, 'id' | 'created_at' | 'approved'>
        Update: Partial<Omit<GuestbookEntry, 'id' | 'created_at'>>
      }
      song_requests: {
        Row: SongRequest
        Insert: Omit<SongRequest, 'id' | 'created_at'>
        Update: Partial<Omit<SongRequest, 'id' | 'created_at'>>
      }
    }
  }
}
