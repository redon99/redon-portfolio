'use client'
import { useState } from 'react'
import { FormField } from '../components/FormField'

interface Errors {
  name?: string
  message?: string
}

function Index() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Errors>({})

  const validateForm = (data: Record<string, FormDataEntryValue>) => {
    const errors: Errors = {}

    if (!data.name || String(data.name).trim().length < 2) {
      errors.name = 'Name must be at least 2 characters'
    }

    if (!data.message || String(data.message).trim().length < 10) {
      errors.message = 'Message must be at least 10 characters'
    }

    return errors
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('idle')
    setErrors({})

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    const validationErrors = validateForm(data)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (!res.ok) {
        setStatus('error')
        return
      }

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className='w-5xl mx-auto h-[600px]'>
      <h2>Let's talk 😎</h2>
      <p className='mb-6 text-sm opacity-70'>
        I usually reply withing 24 hours.
      </p>

      <form
        action='https://formspree.io/f/myzrvdyv'
        method='POST'
        onSubmit={handleSubmit}
        className='space-y-4'
      >
        <input type='text' name='_gotcha' className='hidden' />
        <FormField label='name'>
          <input
            name='name'
            className='form-input focus-ring'
            placeholder='Your name'
          />
          {errors.name && (
            <p className='mt-1 text-xs text-red-500'>{errors.name}</p>
          )}
        </FormField>
        <FormField label='email'>
          <input
            name='email'
            type='email'
            required
            className={`form-input focus-ring ${
              errors.name ? 'border-red-500/60' : ''
            }`}
            placeholder='Your email'
          />
        </FormField>
        <FormField label='message'>
          <textarea
            name='message'
            rows={5}
            className='form-input focus-ring resize-none'
            placeholder='Write something...'
          />
          {errors.message && (
            <p className='mt-1 text-xs text-red-500'>{errors.message}</p>
          )}
        </FormField>

        <button type='submit' className='button focus-ring link-transition'>
          Send message
        </button>

        {status === 'success' && (
          <p className='text-xs text-primary'>Message sent successfully!</p>
        )}

        {status === 'error' && (
          <p className='text-xs text-red-500'>
            Something went wrong. Try again please!
          </p>
        )}
      </form>
    </div>
  )
}

export default Index
