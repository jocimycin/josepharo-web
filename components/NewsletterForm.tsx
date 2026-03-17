'use client'

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col gap-3"
      aria-label="Newsletter signup"
    >
      <input
        type="email"
        placeholder="your@email.com"
        required
        className="bg-ink border border-ink-light text-text-primary placeholder-text-muted text-sm px-4 py-2.5 rounded-sm focus:outline-none focus:border-gold-DEFAULT transition-colors duration-200"
        style={{ background: 'var(--ink)', borderColor: 'rgba(28,39,64,1)', color: 'var(--text-primary)' }}
      />
      <button type="submit" className="btn-primary justify-center text-xs py-2.5">
        Subscribe
      </button>
    </form>
  )
}
