'use client'

import { useState } from 'react'

type State = 'idle' | 'loading' | 'success' | 'error'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<State>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) {
        setErrorMsg(data.error ?? 'Something went wrong.')
        setState('error')
      } else {
        setState('success')
        setEmail('')
      }
    } catch {
      setErrorMsg('Network error. Please try again.')
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <p className="font-mono text-xs text-teal tracking-wide">
        You're in. I'll only write when I have something genuinely worth sending.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3" aria-label="Newsletter signup">
      <input
        type="email"
        placeholder="your@email.com"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={state === 'loading'}
        className="bg-ink border border-ink-light text-text-primary placeholder-text-muted text-sm px-4 py-2.5 rounded-sm focus:outline-none focus:border-gold-DEFAULT transition-colors duration-200 disabled:opacity-50"
      />
      {errorMsg && (
        <p className="font-mono text-xs text-red-400">{errorMsg}</p>
      )}
      <button
        type="submit"
        disabled={state === 'loading'}
        className="btn-primary justify-center text-xs py-2.5 disabled:opacity-50"
      >
        {state === 'loading' ? 'Subscribing…' : 'Subscribe'}
      </button>
    </form>
  )
}
