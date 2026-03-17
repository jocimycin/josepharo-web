import Link from 'next/link'
import { siteConfig, blogCategories } from '@/lib/data'
import { ArrowUpRight, Mail, Linkedin } from 'lucide-react'
import NewsletterForm from '@/components/NewsletterForm'
import JaLogo from '@/components/JaLogo'

const footerNav = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Writing', href: '/writing' },
  { label: 'Contact', href: '/contact' },
]

const writingCategories = blogCategories.slice(0, 6)

export default function SiteFooter() {
  return (
    <footer className="bg-ink-mid border-t border-ink-light">
      {/* CTA Band */}
      <div className="bg-ink-light">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 text-center">
          <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-4">Open to collaboration</p>
          <h2 className="font-display text-h2 text-text-primary font-light mb-4">
            Working on something complex?
          </h2>
          <p className="text-text-secondary text-base mb-8 max-w-md mx-auto">
            For consulting, research collaboration, speaking, or strategic advisory — let&apos;s talk.
          </p>
          <Link href="/contact" className="btn-primary inline-flex">
            Get in Touch <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* Footer grid */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group w-fit">
              <JaLogo height={44} className="text-gold-DEFAULT opacity-80 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="flex flex-col leading-none">
                <span className="font-display text-base text-text-primary">Joseph Aro</span>
                <span className="font-mono text-[0.58rem] text-text-muted tracking-widest uppercase mt-0.5">
                  Geospatial Intelligence
                </span>
              </div>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Geospatial Intelligence · Remote Sensing · Earth Observation · Data Strategy
            </p>
            <div className="flex gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-9 h-9 rounded-sm border border-ink-light flex items-center justify-center text-text-muted hover:text-gold-DEFAULT hover:border-gold-subtle transition-colors duration-200"
                aria-label="Email Joseph"
              >
                <Mail size={15} />
              </a>
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-sm border border-ink-light flex items-center justify-center text-text-muted hover:text-gold-DEFAULT hover:border-gold-subtle transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={15} />
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-5">Navigation</p>
            <ul className="space-y-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Writing categories */}
          <div>
            <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-5">Topics</p>
            <ul className="space-y-3">
              {writingCategories.map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/writing?category=${encodeURIComponent(cat)}`}
                    className="text-text-secondary text-sm hover:text-text-primary transition-colors duration-200"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-5">Stay in the loop</p>
            <p className="text-text-muted text-sm mb-5 leading-relaxed">
              Geospatial insights, field notes, and ideas — delivered when it matters.
            </p>
            <NewsletterForm />
            <p className="text-text-muted text-xs mt-3">No spam. Unsubscribe anytime.</p>
          </div>
        </div>

        <div className="signal-divider mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-mono text-xs text-text-muted tracking-wide">
            © {new Date().getFullYear()} Joseph Aro. BC, Canada · Lagos, Nigeria.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="font-mono text-xs text-text-muted hover:text-text-secondary transition-colors duration-200">
              Privacy
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-mono text-xs text-text-muted hover:text-gold-DEFAULT transition-colors duration-200"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
