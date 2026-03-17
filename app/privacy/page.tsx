import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
}

export default function PrivacyPage() {
  return (
    <section className="max-w-[760px] mx-auto px-6 md:px-10 pt-32 pb-section">
      <h1 className="font-display font-light text-h1 text-text-primary mb-8">Privacy Policy</h1>
      <div className="space-y-6 text-text-secondary text-base leading-relaxed">
        <p>This website (josepharo.me) is a personal professional website. It does not collect personal data beyond what is voluntarily submitted through the contact form.</p>
        <p><strong className="text-text-primary">Contact form:</strong> Information submitted via the contact form (name, email, message) is used solely to respond to your inquiry and is not shared with third parties.</p>
        <p><strong className="text-text-primary">Analytics:</strong> This site may use privacy-respecting analytics (no cookies, no cross-site tracking) to understand general traffic patterns.</p>
        <p><strong className="text-text-primary">Newsletter:</strong> Email addresses submitted for the newsletter are used only to send updates from Joseph Aro. You may unsubscribe at any time.</p>
        <p>For any privacy questions, contact: <a href="mailto:bidex99@gmail.com" className="text-gold-DEFAULT hover:underline">bidex99@gmail.com</a></p>
        <p className="font-mono text-xs text-text-muted">Last updated: March 2026</p>
      </div>
    </section>
  )
}
