'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import JaLogo from '@/components/JaLogo'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Writing', href: '/writing' },
  { label: 'Speaking', href: '/speaking' },
  { label: 'Contact', href: '/contact' },
]

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen ? 'nav-glass' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 text-text-primary hover:text-gold-DEFAULT transition-colors duration-200 group"
            aria-label="Joseph Aro — Home"
          >
            <JaLogo height={36} className="text-gold-DEFAULT group-hover:text-gold-dim transition-colors duration-200" />
            <div className="flex flex-col leading-none">
              <span className="font-display text-base font-medium tracking-tight">Joseph Aro</span>
              <span className="font-mono text-[0.58rem] text-text-muted tracking-widest uppercase mt-0.5">
                Geospatial Intelligence
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  pathname === link.href || pathname.startsWith(link.href + '/')
                    ? 'text-gold-DEFAULT'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-gold-DEFAULT transition-all duration-300 ${
                    pathname === link.href || pathname.startsWith(link.href + '/')
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
            <Link href="/contact" className="btn-primary text-xs py-2 px-4">
              Get in Touch
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-text-primary p-2 -mr-2"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-ink flex flex-col pt-20 px-6 transition-all duration-400 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col gap-1 mt-8" aria-label="Mobile navigation">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-display text-4xl font-light py-3 border-b border-ink-light transition-colors duration-200 ${
                pathname === link.href ? 'text-gold-DEFAULT' : 'text-text-primary hover:text-gold-DEFAULT'
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-10 flex flex-col gap-4">
          <Link href="/contact" className="btn-primary justify-center">
            Get in Touch
          </Link>
          <Link href="/writing" className="btn-secondary justify-center">
            Read My Writing
          </Link>
        </div>

        <div className="mt-auto pb-10 flex items-center gap-4">
          <JaLogo height={32} className="text-gold-DEFAULT opacity-50" />
          <p className="font-mono text-xs text-text-muted tracking-widest uppercase">
            BC, Canada · Lagos, Nigeria
          </p>
        </div>
      </div>
    </>
  )
}
