import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MapPin, ArrowUpRight, Linkedin } from 'lucide-react'
import RevealSection from '@/components/RevealSection'
import ContactForm from '@/components/ContactForm'
import { contactConfig, siteConfig } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Joseph Aro for consulting, advisory, research collaboration, speaking, or strategic inquiries.',
}

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-ink pt-28 pb-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <RevealSection>
            <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-5">Contact</p>
            <h1 className="font-display font-light text-h1 text-text-primary mb-6">
              {contactConfig.headline}
            </h1>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl">
              {contactConfig.intro}
            </p>
          </RevealSection>
        </div>
      </section>

      <div className="signal-divider" />

      {/* Main contact section */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-section">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            <RevealSection>
              <h2 className="font-display font-light text-h3 text-text-primary mb-8">Send a message</h2>
              <ContactForm />
            </RevealSection>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <RevealSection delay={80}>
              {/* Direct contact */}
              <div className="bg-ink-mid border border-ink-light rounded-sm p-6">
                <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-5">Direct</p>
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="flex items-center gap-3 group mb-3"
                >
                  <Mail size={16} className="text-gold-DEFAULT flex-shrink-0" />
                  <span className="text-text-secondary text-sm group-hover:text-gold-DEFAULT transition-colors duration-200 break-all">
                    {contactConfig.email}
                  </span>
                </a>
                {contactConfig.phone && (
                  <a href={`tel:${contactConfig.phone}`} className="flex items-center gap-3 group">
                    <span className="text-gold-DEFAULT text-sm flex-shrink-0">📞</span>
                    <span className="text-text-secondary text-sm group-hover:text-text-primary transition-colors duration-200">
                      {contactConfig.phone}
                    </span>
                  </a>
                )}
              </div>

              {/* Locations */}
              <div className="bg-ink-mid border border-ink-light rounded-sm p-6">
                <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-5">Locations</p>
                {siteConfig.location.map((loc) => (
                  <div key={loc} className="flex items-center gap-3 mb-3 last:mb-0">
                    <MapPin size={15} className="text-gold-DEFAULT flex-shrink-0" />
                    <span className="text-text-secondary text-sm">{loc}</span>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="bg-ink-mid border border-ink-light rounded-sm p-6">
                <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-5">Connect</p>
                {siteConfig.social.linkedin && (
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group mb-3"
                  >
                    <Linkedin size={15} className="text-text-muted group-hover:text-gold-DEFAULT transition-colors duration-200" />
                    <span className="text-text-secondary text-sm group-hover:text-gold-DEFAULT transition-colors duration-200">
                      LinkedIn
                    </span>
                    <ArrowUpRight size={13} className="text-text-muted ml-auto group-hover:text-gold-DEFAULT transition-colors duration-200" />
                  </a>
                )}
                <p className="font-mono text-xs text-text-muted">
                  {/* PLACEHOLDER: Add Twitter, GitHub, ResearchGate when URLs confirmed */}
                  More profiles coming soon.
                </p>
              </div>

              {/* Inquiry types */}
              <div className="bg-ink-mid border border-ink-light rounded-sm p-6">
                <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-5">Open to</p>
                <ul className="space-y-2">
                  {contactConfig.inquiryTypes.map((type) => (
                    <li key={type} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gold-DEFAULT flex-shrink-0" />
                      <span className="text-text-secondary text-sm">{type}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Closing note */}
              {contactConfig.closingLine && (
                <div className="border border-gold-subtle rounded-sm p-5">
                  <p className="font-display font-light text-text-primary text-sm leading-relaxed italic">
                    &ldquo;{contactConfig.closingLine}&rdquo;
                  </p>
                </div>
              )}
            </RevealSection>
          </div>
        </div>
      </section>
    </>
  )
}
