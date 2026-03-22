'use client'

import { useState } from 'react'
import { CheckCircle, Loader2 } from 'lucide-react'
import { contactConfig } from '@/lib/data'

type Status = 'idle' | 'sending' | 'success' | 'error'

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'var(--ink-mid)',
  border: '1px solid var(--ink-light)',
  color: 'var(--text-primary)',
  fontSize: '0.875rem',
  padding: '0.75rem 1rem',
  borderRadius: '2px',
  outline: 'none',
  fontFamily: 'inherit',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  color: 'var(--text-muted)',
  fontFamily: 'JetBrains Mono, monospace',
  fontSize: '0.63rem',
  letterSpacing: '0.07em',
  textTransform: 'uppercase',
  marginBottom: '0.5rem',
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [fields, setFields] = useState({
    name: '',
    email: '',
    org: '',
    type: '',
    message: '',
  })

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })

      const data = await res.json()

      if (!res.ok || data.error) {
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }

      setStatus('success')
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-start gap-5 py-10">
        <CheckCircle size={40} className="text-teal" />
        <div>
          <h3 className="font-display font-light text-text-primary text-2xl mb-2">Message sent.</h3>
          <p className="text-text-secondary text-base leading-relaxed max-w-md">
            Thanks for reaching out. You&apos;ll receive a confirmation email shortly, and Joseph will follow up directly within 48 hours.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} aria-label="Contact form" noValidate>
      <div className="grid grid-cols-1 gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <div>
          <label htmlFor="name" style={labelStyle}>Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={fields.name}
            onChange={onChange}
            placeholder="Your full name"
            style={inputStyle}
            disabled={status === 'sending'}
          />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={fields.email}
            onChange={onChange}
            placeholder="your@email.com"
            style={inputStyle}
            disabled={status === 'sending'}
          />
        </div>
      </div>

      <div>
        <label htmlFor="org" style={labelStyle}>Organisation</label>
        <input
          id="org"
          name="org"
          type="text"
          value={fields.org}
          onChange={onChange}
          placeholder="Company or institution (optional)"
          style={inputStyle}
          disabled={status === 'sending'}
        />
      </div>

      <div>
        <label htmlFor="type" style={labelStyle}>Inquiry type *</label>
        <select
          id="type"
          name="type"
          required
          value={fields.type}
          onChange={onChange}
          style={{ ...inputStyle, cursor: 'pointer' }}
          disabled={status === 'sending'}
        >
          <option value="">Select type…</option>
          {contactConfig.inquiryTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={fields.message}
          onChange={onChange}
          placeholder="Briefly describe your project, question, or inquiry…"
          style={{ ...inputStyle, resize: 'none' }}
          disabled={status === 'sending'}
        />
      </div>

      {status === 'error' && (
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: '#f87171' }}>
          {errorMsg}
        </p>
      )}

      <div style={{ paddingTop: '0.5rem' }}>
        <button
          type="submit"
          className="btn-primary"
          disabled={status === 'sending'}
          style={{ opacity: status === 'sending' ? 0.7 : 1, cursor: status === 'sending' ? 'not-allowed' : 'pointer' }}
        >
          {status === 'sending' ? (
            <span className="flex items-center gap-2">
              <Loader2 size={15} className="animate-spin" /> Sending…
            </span>
          ) : (
            'Send Message'
          )}
        </button>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
          {contactConfig.responseTime}
        </p>
      </div>
    </form>
  )
}
