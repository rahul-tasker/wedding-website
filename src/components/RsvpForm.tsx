'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { supabase } from '@/lib/supabase'

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  attending: z.enum(['yes', 'no']),
  all_guests_attending: z.enum(['yes', 'no']).optional(),
  guest_count: z.number().min(1).max(6).optional(),
  dietary_restrictions: z.string().optional(),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function RsvpForm() {
  const [status, setStatus] = useState<Status>('idle')

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const attending = watch('attending')
  const allGuestsAttending = watch('all_guests_attending')

  const onSubmit = async (data: FormData) => {
    setStatus('submitting')
    const { error } = await supabase.from('rsvps').insert({
      name: data.name,
      email: data.email || null,
      attending: data.attending === 'yes',
      guest_count: data.attending === 'yes'
        ? (data.all_guests_attending === 'no' ? (data.guest_count ?? null) : null)
        : null,
      dietary_restrictions: data.dietary_restrictions || null,
      message: data.message || null,
    })

    if (error) {
      console.error('Supabase error:', JSON.stringify(error))
      setStatus('error')
    } else {
      setStatus('success')
      reset()
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-16">
        <p className="font-script text-5xl text-[var(--gold)] mb-4">Thank you!</p>
        <p className="text-[var(--charcoal)] text-lg">
          Your RSVP has been received. We can&apos;t wait to celebrate with you!
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 text-sm text-[var(--charcoal-light)] underline underline-offset-4 hover:text-[var(--gold)] transition-colors"
        >
          Submit another RSVP
        </button>
      </div>
    )
  }

  const inputClass = (hasError?: boolean) =>
    `w-full border rounded-lg px-4 py-3 text-sm outline-none transition-colors bg-white ${
      hasError
        ? 'border-red-400 focus:border-red-500'
        : 'border-[var(--blush)] focus:border-[var(--gold)]'
    }`

  const labelClass = 'block text-sm font-semibold text-[var(--charcoal)] mb-1.5 uppercase tracking-wide'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label className={labelClass}>Full Name *</label>
        <input {...register('name')} placeholder="Jane Smith" className={inputClass(!!errors.name)} />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label className={labelClass}>Email</label>
        <input {...register('email')} type="email" placeholder="jane@example.com" className={inputClass(!!errors.email)} />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      {/* Attending */}
      <div>
        <label className={labelClass}>Will you be attending? *</label>
        <div className="flex gap-4">
          {['yes', 'no'].map((val) => (
            <label key={val} className="flex items-center gap-2 cursor-pointer">
              <input
                {...register('attending')}
                type="radio"
                value={val}
                className="accent-[var(--gold)] w-4 h-4"
              />
              <span className="text-sm text-[var(--charcoal)]">
                {val === 'yes' ? 'Joyfully accepts' : 'Regretfully declines'}
              </span>
            </label>
          ))}
        </div>
        {errors.attending && <p className="text-red-500 text-xs mt-1">Please select an option</p>}
      </div>

      {attending === 'yes' && (
        <>
          {/* All guests attending */}
          <div>
            <label className={labelClass}>Will all invited guests be attending? *</label>
            <div className="flex gap-4">
              {['yes', 'no'].map((val) => (
                <label key={val} className="flex items-center gap-2 cursor-pointer">
                  <input
                    {...register('all_guests_attending')}
                    type="radio"
                    value={val}
                    className="accent-[var(--gold)] w-4 h-4"
                  />
                  <span className="text-sm text-[var(--charcoal)]">
                    {val === 'yes' ? 'Yes' : 'No'}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Guest count — only if not all attending */}
          {allGuestsAttending === 'no' && (
            <div>
              <label className={labelClass}>How many guests will be attending? *</label>
              <select {...register('guest_count', { valueAsNumber: true })} className={inputClass()}>
                <option value="">Select</option>
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
          )}

          {/* Dietary */}
          <div>
            <label className={labelClass}>Dietary Restrictions / Allergies</label>
            <input {...register('dietary_restrictions')} placeholder="Nut allergy, gluten-free, etc." className={inputClass()} />
          </div>
        </>
      )}

      {/* Message */}
      <div>
        <label className={labelClass}>Leave a message for the couple</label>
        <textarea
          {...register('message')}
          rows={4}
          placeholder="We're so happy for you both!"
          className={inputClass()}
        />
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-sm text-center">
          Something went wrong. Please try again or contact us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-[var(--gold)] hover:bg-[var(--gold-light)] text-white font-semibold py-4 rounded-lg uppercase tracking-widest text-sm transition-colors disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending...' : 'Send RSVP'}
      </button>
    </form>
  )
}
