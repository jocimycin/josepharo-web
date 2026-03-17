'use client'

import { Fragment, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'
import HeroCanvas from './HeroCanvas'
import { hero } from '@/lib/data'

// Drone photo first, speech photo second — cycle every 8s
const HERO_PHOTOS = [
  { src: '/images/flying drone.jpg', position: 'object-center' },
  { src: '/images/Keynote Speaker at 2023 ESRI Nigeria GIS Day.jpg', position: 'object-top' },
]

function WordReveal({ text, baseDelay }: { text: string; baseDelay: number }) {
  const words = text.split(' ')
  return (
    <>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span
            className="inline-block overflow-hidden"
            style={{ verticalAlign: 'bottom', lineHeight: 'inherit' }}
          >
            <motion.span
              className="inline-block"
              initial={{ y: '108%' }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.78,
                delay: baseDelay + i * 0.085,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 && <span> </span>}
        </Fragment>
      ))}
    </>
  )
}

export default function HeroSection() {
  const [photoIndex, setPhotoIndex] = useState(0)
  const { scrollY } = useScroll()
  const canvasY = useTransform(scrollY, [0, 900], [0, -200])
  const contentY = useTransform(scrollY, [0, 900], [0, -75])
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 300], [1, 0])

  const currentPhoto = HERO_PHOTOS[photoIndex]

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-ink">

      {/* ── Photo layer — materialises behind the canvas ──────── */}
      <motion.div
        className="absolute inset-0 z-[0]"
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Swap between drone + speaking photos every 8s */}
        {HERO_PHOTOS.map((photo, i) => (
          <motion.div
            key={photo.src}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: i === photoIndex ? 1 : 0 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            onAnimationComplete={() => {
              if (i === photoIndex) {
                setTimeout(() => {
                  setPhotoIndex((prev) => (prev + 1) % HERO_PHOTOS.length)
                }, 8000)
              }
            }}
          >
            <Image
              src={photo.src}
              alt=""
              fill
              className={`object-cover ${photo.position}`}
              priority={i === 0}
              aria-hidden="true"
              sizes="100vw"
            />
          </motion.div>
        ))}

        {/* Layered gradients — keep left text area dark, blend edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-transparent to-ink/85 z-10" />
        {/* Extra dark vignette behind text column */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-ink/60 to-transparent z-10" />
      </motion.div>

      {/* ── Canvas — parallax faster than content ─────────────── */}
      <motion.div className="absolute inset-0 z-[1]" style={{ y: canvasY }}>
        <HeroCanvas />
      </motion.div>

      {/* ── Content — parallax slower ──────────────────────────── */}
      <motion.div
        className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 pt-32 pb-24 flex flex-col"
        style={{ y: contentY }}
      >
        {/* Eyebrow */}
        <motion.p
          className="font-mono text-[0.65rem] text-text-muted tracking-[0.12em] uppercase mb-10 md:mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {hero.eyebrow}
        </motion.p>

        {/* Headline — word-by-word */}
        <h1
          className="font-display font-light text-text-primary mb-6 max-w-3xl"
          style={{
            fontSize: 'clamp(2.4rem, 6.5vw, 5.5rem)',
            lineHeight: 1.08,
            letterSpacing: '-0.025em',
          }}
        >
          <span className="block mb-1">
            <WordReveal text={hero.headline} baseDelay={0.28} />
          </span>
          <span className="block text-gold-DEFAULT">
            <WordReveal text={hero.subheadline} baseDelay={0.62} />
          </span>
        </h1>

        {/* Supporting copy */}
        <motion.p
          className="text-text-secondary text-base md:text-lg max-w-xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {hero.supporting}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link href={hero.ctaPrimary.href} className="btn-primary">
            {hero.ctaPrimary.label} <ArrowRight size={16} />
          </Link>
          <Link href={hero.ctaSecondary.href} className="btn-secondary">
            {hero.ctaSecondary.label}
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: scrollIndicatorOpacity }}
      >
        <ChevronDown size={18} className="text-text-muted animate-bounce" />
      </motion.div>
    </section>
  )
}
