import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import RevealSection from '@/components/RevealSection'
import { speaking } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Speaking & Events',
  description:
    'Joseph Aro speaks on geospatial intelligence, earth observation, remote sensing, UAV operations, environmental data systems, and data-led decision-making.',
}

const topics = [
  { title: 'Geospatial Intelligence & Strategy', desc: 'From data acquisition to executive decision support — building spatial intelligence systems that actually get used.' },
  { title: 'Earth Observation & Remote Sensing', desc: 'How satellite-derived and UAV-acquired data is changing what we know about our environment and infrastructure.' },
  { title: 'UAV Operations & Drone Mapping', desc: 'The state of drone-enabled data collection — from regulatory landscape to operational field practice.' },
  { title: 'Hydrography & Waterways Intelligence', desc: 'Mapping water: bathymetric surveys, hydrodynamic modelling, and geospatial intelligence for waterway systems.' },
  { title: 'Data Strategy & Geospatial Transformation', desc: 'Why most organisations have spatial data and no spatial intelligence — and how to close that gap.' },
  { title: 'Climate & Environmental GIS', desc: 'Applying geospatial methods to environmental change, permafrost dynamics, land cover shifts, and climate risk.' },
]

export default function SpeakingPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-ink pt-28 pb-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <RevealSection>
            <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-5">Speaking & Events</p>
            <h1 className="font-display font-light text-h1 text-text-primary mb-6 max-w-2xl">
              Turning spatial science into ideas worth hearing.
            </h1>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl mb-8">
              Joseph speaks on geospatial intelligence, earth observation, UAV operations, environmental data systems, and the strategic use of spatial data — for conferences, institutions, organisations, and leadership forums.
            </p>
            <Link href="/contact" className="btn-primary inline-flex">
              Invite Joseph to Speak <ArrowRight size={16} />
            </Link>
          </RevealSection>
        </div>
      </section>

      <div className="signal-divider" />

      {/* Past events */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-section">
        <RevealSection>
          <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-3">Past Events</p>
          <h2 className="font-display font-light text-h2 text-text-primary mb-12">
            Recent appearances.
          </h2>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {speaking.map((event, i) => (
            <RevealSection key={event.id} delay={i * 80}>
              <article className="bg-ink-mid border border-ink-light rounded-sm overflow-hidden h-full card-interactive">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.event}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="badge badge-gold">{event.role}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-mono text-xs text-text-muted mb-2">{event.year}</p>
                  <h3 className="font-sans font-semibold text-text-primary text-base mb-2">{event.event}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{event.topic}</p>
                </div>
              </article>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* Topics */}
      <section className="bg-ink-mid border-y border-ink-light">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-section">
          <RevealSection>
            <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-3">Topics</p>
            <h2 className="font-display font-light text-h2 text-text-primary mb-12">
              What Joseph speaks on.
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {topics.map((topic, i) => (
              <RevealSection key={topic.title} delay={i * 60}>
                <div className="border border-ink-light rounded-sm p-6 h-full">
                  <p className="font-mono text-xs text-gold-DEFAULT tracking-widest uppercase mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-display font-light text-text-primary text-lg mb-3">{topic.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{topic.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Field images strip */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-section">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { src: '/images/speaking-esri-2023-2.jpg', alt: 'Keynote at ESRI Nigeria GIS Day 2023' },
            { src: '/images/field-at-work.jpg', alt: 'Joseph Aro at work in the field' },
            { src: '/images/speaking-community.jpg', alt: 'Community engagement session' },
            { src: '/images/field-working.jpg', alt: 'Field operations' },
          ].map((img) => (
            <div key={img.src} className="relative aspect-square rounded-sm overflow-hidden bg-ink-mid">
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-mid border-t border-ink-light">
        <div className="max-w-[760px] mx-auto px-6 md:px-10 py-section text-center">
          <RevealSection>
            <p className="font-mono text-xs text-gold-DEFAULT tracking-widest uppercase mb-4">Invite Joseph</p>
            <h2 className="font-display font-light text-h2 text-text-primary mb-4">
              Bring geospatial intelligence to your audience.
            </h2>
            <p className="text-text-secondary text-base mb-8 max-w-md mx-auto">
              For keynotes, panel discussions, workshops, or institutional presentations — reach out to discuss availability and topic fit.
            </p>
            <Link href="/contact" className="btn-primary inline-flex">
              Get in Touch <ArrowRight size={16} />
            </Link>
          </RevealSection>
        </div>
      </section>
    </>
  )
}
