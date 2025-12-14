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
    <div className='w-full flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
      <div className='w-full max-w-5xl mx-auto'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl'>Let's talk 😎</h2>
        <p className='mb-6 text-xs sm:text-sm opacity-70'>
          I usually reply withing 24 hours.
        </p>

        <form
          action='https://formspree.io/f/myzrvdyv'
          method='POST'
          onSubmit={handleSubmit}
          className='space-y-4 sm:space-y-5 max-w-2xl'
        >
          <input type='text' name='_gotcha' className='hidden' />
          <FormField label='name'>
            <input
              name='name'
              className='form-input focus-ring text-sm sm:text-base'
              placeholder='Your name'
            />
            {errors.name && (
              <p className='mt-1 text-xs text-error'>{errors.name}</p>
            )}
          </FormField>
          <FormField label='email'>
            <input
              name='email'
              type='email'
              required
              className={`form-input focus-ring text-sm sm:text-base ${
                errors.name ? 'border-error' : ''
              }`}
              placeholder='Your email'
            />
          </FormField>
          <FormField label='message'>
            <textarea
              name='message'
              rows={5}
              className='form-input focus-ring resize-none text-sm sm:text-base'
              placeholder='Write something...'
            />
            {errors.message && (
              <p className='mt-1 text-xs text-error'>{errors.message}</p>
            )}
          </FormField>

          <button
            type='submit'
            className='button focus-ring link-transition text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3'
          >
            Send message
          </button>

          {status === 'success' && (
            <p className='text-xs sm:text-sm text-primary'>
              Message sent successfully!
            </p>
          )}

          {status === 'error' && (
            <p className='text-xs sm:text-sm text-error'>
              Something went wrong. Try again please!
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default Index
