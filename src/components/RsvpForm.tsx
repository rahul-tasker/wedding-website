'use client'

import { useState } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { supabase } from '@/lib/supabase'

const schema = z
  .object({
    name: z.string().min(2, 'Please enter your full name'),
    email: z.string().email('Please enter a valid email').optional().or(z.literal('')),
    attending: z.enum(['yes', 'no']),
    guests: z
      .array(
        z.object({
          name: z.string().optional(),
          is_child: z.boolean().optional(),
          dietary: z.string().optional(),
        })
      )
      .optional(),
    message: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.attending === 'yes') {
      const named = (data.guests ?? []).filter((g) => g.name && g.name.trim())
      if (named.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['guests'],
          message: 'Please list at least one guest who will be attending',
        })
      }
    }
  })

type FormData = z.infer<typeof schema>

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function RsvpForm() {
  const [status, setStatus] = useState<Status>('idle')

  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { guests: [{ name: '', is_child: false, dietary: '' }] },
  })

  const { fields, append, remove } = useFieldArray({ control, name: 'guests' })

  const attending = watch('attending')

  const onSubmit = async (data: FormData) => {
    setStatus('submitting')

    const guests =
      data.attending === 'yes'
        ? (data.guests ?? [])
            .filter((g) => g.name && g.name.trim())
            .map((g) => ({
              name: g.name!.trim(),
              is_child: !!g.is_child,
              dietary: g.dietary?.trim() || null,
            }))
        : []

    const { error } = await supabase.from('rsvps').insert({
      name: data.name,
      email: data.email || null,
      attending: data.attending === 'yes',
      guests: data.attending === 'yes' ? guests : null,
      guest_count: data.attending === 'yes' ? guests.length : null,
      dietary_restrictions: data.attending === 'yes'
        ? guests
            .filter((g) => g.dietary)
            .map((g) => `${g.name}: ${g.dietary}`)
            .join('; ') || null
        : null,
      message: data.message || null,
    })

    if (error) {
      console.error('Supabase error:', JSON.stringify(error))
      setStatus('error')
    } else {
      setStatus('success')
      reset({ guests: [{ name: '', is_child: false, dietary: '' }] })
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
          {/* Who is attending */}
          <div>
            <label className={labelClass}>Who will be attending? *</label>
            <p className="text-xs text-[var(--charcoal-light)] mb-3 normal-case font-normal tracking-normal">
              List everyone in your party, including yourself and any children.
            </p>
            <div className="space-y-4">
              {fields.map((field, i) => (
                <div key={field.id} className="rounded-lg border border-[var(--blush)]/60 p-3 space-y-2">
                  <div className="flex items-center gap-3">
                    <input
                      {...register(`guests.${i}.name`)}
                      placeholder="Full name"
                      className={`${inputClass()} flex-1 min-w-0`}
                    />
                    <label className="flex items-center gap-2 text-sm text-[var(--charcoal)] whitespace-nowrap cursor-pointer">
                      <input
                        type="checkbox"
                        {...register(`guests.${i}.is_child`)}
                        className="accent-[var(--gold)] w-4 h-4"
                      />
                      Child
                    </label>
                    {fields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => remove(i)}
                        className="text-[var(--charcoal-light)] hover:text-red-500 text-2xl leading-none px-1"
                        aria-label="Remove guest"
                      >
                        ×
                      </button>
                    )}
                  </div>
                  <input
                    {...register(`guests.${i}.dietary`)}
                    placeholder="Dietary restrictions / allergies (optional)"
                    className={inputClass()}
                  />
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => append({ name: '', is_child: false, dietary: '' })}
              className="mt-3 text-sm font-semibold text-[var(--gold)] hover:underline underline-offset-4"
            >
              + Add another guest
            </button>
            {errors.guests && (
              <p className="text-red-500 text-xs mt-2">{errors.guests.message as string}</p>
            )}
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
