'use client'

import { contactConfig } from '@/lib/data'

export default function ContactForm() {
  return (
    <form
      className="space-y-5"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Contact form"
    >
      <div className="grid grid-cols-1 gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <div>
          <label htmlFor="name" className="font-mono text-xs text-text-muted tracking-widest uppercase block mb-2" style={{ color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.63rem', letterSpacing: '0.07em' }}>
            Name *
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="Your full name"
            style={{ width: '100%', background: 'var(--ink-mid)', border: '1px solid var(--ink-light)', color: 'var(--text-primary)', fontSize: '0.875rem', padding: '0.75rem 1rem', borderRadius: '2px', outline: 'none' }}
          />
        </div>
        <div>
          <label htmlFor="email" className="font-mono text-xs text-text-muted tracking-widest uppercase block mb-2" style={{ color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.63rem', letterSpacing: '0.07em' }}>
            Email *
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="your@email.com"
            style={{ width: '100%', background: 'var(--ink-mid)', border: '1px solid var(--ink-light)', color: 'var(--text-primary)', fontSize: '0.875rem', padding: '0.75rem 1rem', borderRadius: '2px', outline: 'none' }}
          />
        </div>
      </div>

      <div>
        <label htmlFor="org" style={{ display: 'block', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.63rem', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Organisation
        </label>
        <input
          id="org"
          type="text"
          placeholder="Company or institution (optional)"
          style={{ width: '100%', background: 'var(--ink-mid)', border: '1px solid var(--ink-light)', color: 'var(--text-primary)', fontSize: '0.875rem', padding: '0.75rem 1rem', borderRadius: '2px', outline: 'none' }}
        />
      </div>

      <div>
        <label htmlFor="type" style={{ display: 'block', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.63rem', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Inquiry type *
        </label>
        <select
          id="type"
          required
          style={{ width: '100%', background: 'var(--ink-mid)', border: '1px solid var(--ink-light)', color: 'var(--text-primary)', fontSize: '0.875rem', padding: '0.75rem 1rem', borderRadius: '2px', outline: 'none' }}
        >
          <option value="">Select type…</option>
          {contactConfig.inquiryTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" style={{ display: 'block', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.63rem', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={6}
          placeholder="Briefly describe your project, question, or inquiry…"
          style={{ width: '100%', background: 'var(--ink-mid)', border: '1px solid var(--ink-light)', color: 'var(--text-primary)', fontSize: '0.875rem', padding: '0.75rem 1rem', borderRadius: '2px', outline: 'none', resize: 'none' }}
        />
      </div>

      <div style={{ paddingTop: '0.5rem' }}>
        <button type="submit" className="btn-primary">
          Send Message
        </button>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
          {contactConfig.responseTime}
        </p>
      </div>
    </form>
  )
}
