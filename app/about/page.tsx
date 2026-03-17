import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import RevealSection from '@/components/RevealSection'
import AboutCanvas from '@/components/AboutCanvas'
import { roles, credentials, stats } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Joseph Aro is a senior geospatial and earth observation professional with 14 years spanning GIS, remote sensing, UAV mapping, hydrography, and data strategy.',
}

function CredentialIcon({ type }: { type: string }) {
  if (type === 'degree') return <span className="badge badge-gold">Degree</span>
  if (type === 'license') return <span className="badge badge-teal">License</span>
  return <span className="badge badge-default">Certificate</span>
}

const STACKS = [
  {
    label: 'CORE GIS',
    color: '#2DD4BF',
    skills: ['Advanced GIS', 'Geostatistics', 'Spatial Analysis'],
  },
  {
    label: 'EARTH OBSERVATION',
    color: '#4ADE80',
    skills: ['Remote Sensing', 'Hyperspectral', 'Satellite Imagery'],
  },
  {
    label: 'FIELD & SURVEY',
    color: '#FB923C',
    skills: ['Drones / UAV', 'LiDAR', 'Photogrammetry', 'Field Data Collection'],
  },
  {
    label: 'WATER SCIENCES',
    color: '#38BDF8',
    skills: ['Hydrographics', 'Bathymetry', 'Hydrology', 'Water Resources'],
  },
  {
    label: 'GEOSCIENCE',
    color: '#C084FC',
    skills: ['Mineral Prospectivity', 'Geophysics'],
  },
  {
    label: 'APPLIED DOMAINS',
    color: '#C9A84C',
    skills: ['Transport Networks', 'Urban Planning', 'Spatial Epidemiology'],
  },
  {
    label: 'DATA ENGINEERING',
    color: '#F87171',
    skills: ['Data Engineering', 'Databases', 'Data Analytics'],
  },
  {
    label: 'LEADERSHIP & BIZ',
    color: '#F5F0E8',
    skills: ['Business Development', 'Leadership', 'Design Thinking'],
  },
  {
    label: 'NEXT FRONTIER',
    color: '#FB923C',
    skills: ['Geospatial AI', 'RAGs / Embeddings', 'SAR Analytics', 'Programming'],
    isNext: true,
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ─── PAGE HERO — immersive close-up ────────────────── */}
      <section className="relative bg-ink overflow-hidden" style={{ minHeight: '88vh' }}>
        <AboutCanvas />

        {/* Close-up photo — bleeds into background */}
        <div className="absolute inset-0 z-[0]">
          <div className="absolute inset-y-0 right-0 w-full md:w-[62%]">
            <Image
              src="/images/headshot-secondary.jpg"
              alt="Joseph Aro"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 768px) 100vw, 62vw"
            />
            {/* Blend edges into dark background */}
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/55 to-ink/10" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/75" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
          </div>
        </div>

        {/* Text content */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col justify-end h-full pb-16 md:pb-20" style={{ paddingTop: '7rem' }}>
          <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-5">About</p>
          <h1
            className="font-display font-light text-text-primary mb-5"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: 1.04, letterSpacing: '-0.025em' }}
          >
            Joseph Aro
          </h1>
          <p className="font-mono text-xs text-gold-DEFAULT tracking-widest uppercase mb-8 max-w-lg leading-relaxed">
            Geospatial Intelligence Leader · Remote Sensing Specialist · Earth Observation Strategist · Licensed RPAS Pilot
          </p>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-lg">
            14 years translating raw earth data into decisions. From Lagos waterways to Canadian mining frontiers — field to insight, completely.
          </p>
        </div>
      </section>

      <div className="signal-divider" />

      {/* ─── LONG BIO ──────────────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-section">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <RevealSection>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                Joseph Aro is a senior geospatial and data professional working across earth observation, GIS, remote sensing, hydrography, UAV-based surveying, and environmental intelligence. His experience covers the full value chain from field acquisition and technical operations to enterprise data structures, spatial analytics, visualisation, and strategic decision support.
              </p>
            </RevealSection>

            <RevealSection delay={80}>
              <blockquote className="border-l-2 border-gold-DEFAULT pl-6 py-2 my-8">
                <p className="font-display font-light text-xl text-text-primary italic leading-relaxed">
                  &ldquo;The most valuable thing geospatial science can do is make the invisible legible — turning raw data from the earth into decisions that change it.&rdquo;
                </p>
              </blockquote>
            </RevealSection>

            <RevealSection delay={100}>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                He has led and contributed to major initiatives across mining, waterways, infrastructure, environmental assessment, urban development, and geospatial transformation. His work combines technical depth with systems thinking, helping organisations move from fragmented datasets and siloed workflows to integrated intelligence for planning, operations, and impact.
              </p>
            </RevealSection>

            <RevealSection delay={120}>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                Joseph&apos;s portfolio includes geospatial governance, mineral exploration mapping, permafrost change detection, hydrographic and hydrodynamic studies, drone mapping at scale, and the design of geospatial information platforms. He also brings a strong training and capacity-building dimension, having supported the development of hundreds of professionals in GIS, drones, and applied spatial intelligence.
              </p>
            </RevealSection>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <RevealSection delay={60}>
              <div className="bg-ink-mid border border-ink-light rounded-sm p-6 mb-6">
                <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-5">Based in</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-text-primary text-sm font-medium">BC, Canada</p>
                    <p className="font-mono text-xs text-text-muted">Primary</p>
                  </div>
                  <div>
                    <p className="text-text-primary text-sm font-medium">Lagos, Nigeria</p>
                    <p className="font-mono text-xs text-text-muted">Secondary</p>
                  </div>
                </div>
              </div>

              <div className="bg-ink-mid border border-ink-light rounded-sm p-6">
                <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-5">By the numbers</p>
                <div className="space-y-5">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-display text-gold-DEFAULT text-3xl font-light">{stat.value}</p>
                      <p className="font-mono text-xs text-text-muted tracking-wide uppercase mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      <div className="signal-divider max-w-[1280px] mx-auto px-6 md:px-10" />

      {/* ─── PHILOSOPHY ────────────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-section">
        <RevealSection>
          <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-3">Approach</p>
          <h2 className="font-display font-light text-h2 text-text-primary mb-12">
            How I work.
          </h2>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              num: '01',
              title: 'Intelligence before output',
              body: 'Every project starts with the decision it needs to enable. The data, the method, and the deliverable are all downstream of that question.',
            },
            {
              num: '02',
              title: 'Field to insight, completely',
              body: 'Operating across the full value chain — from sensor and survey to analytics and executive briefing — means understanding where information breaks down and fixing it.',
            },
            {
              num: '03',
              title: 'Systems over solutions',
              body: 'Sustainable geospatial capability requires governance, standards, and architecture — not just individual projects. The goal is to leave organisations more spatially intelligent than I found them.',
            },
          ].map((principle, i) => (
            <RevealSection key={principle.num} delay={i * 80}>
              <div className="border border-ink-light rounded-sm p-7 h-full">
                <p className="font-mono text-xs text-gold-DEFAULT tracking-widest uppercase mb-4">{principle.num}</p>
                <h3 className="font-display font-light text-text-primary text-lg mb-3">{principle.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{principle.body}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ─── 14 YEARS · 15 STACKS ──────────────────────────── */}
      <section className="bg-ink border-y border-ink-light">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-section">
          <RevealSection>
            {/* Headline */}
            <div className="mb-4">
              <h2 className="font-sans font-black text-text-primary leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
                <span className="text-text-primary">14 YEARS</span>
                <span className="text-text-muted mx-3 md:mx-5" style={{ fontWeight: 900 }}>·</span>
                <span style={{ color: '#38BDF8' }}>15 STACKS</span>
              </h2>
            </div>
            <p className="font-mono text-xs md:text-sm text-text-muted tracking-[0.15em] uppercase mb-16">
              ONE GEOSPATIAL ARC&nbsp;&nbsp;·&nbsp;&nbsp;SPECIALIST <span className="text-text-secondary">→</span> GENERALIST
            </p>
          </RevealSection>

          {/* Stack grid — 3 cols matching the graphic */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {STACKS.map((stack, i) => (
              <RevealSection key={stack.label} delay={i * 55}>
                <div>
                  {/* Category label + line */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="font-mono text-xs tracking-widest font-semibold"
                      style={{ color: stack.color }}
                    >
                      {stack.label}
                    </span>
                    {stack.isNext && (
                      <span
                        className="inline-block w-2 h-2 rounded-sm animate-pulse"
                        style={{ backgroundColor: stack.color }}
                      />
                    )}
                  </div>
                  <div className="h-px mb-4" style={{ backgroundColor: stack.color, opacity: 0.35 }} />

                  {/* Skill pills */}
                  <div className="flex flex-wrap gap-2">
                    {stack.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-sans text-xs text-text-secondary px-3 py-1.5 rounded-sm"
                        style={{
                          border: `1px solid ${stack.color}30`,
                          backgroundColor: `${stack.color}08`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>

          {/* Footer line matching the graphic */}
          <RevealSection className="mt-16">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-ink-light">
              <p className="font-mono text-xs text-text-muted tracking-widest">
                Joseph Aro&nbsp;&nbsp;·&nbsp;&nbsp;Lead, Data & Information (GIS & Remote Sensing)&nbsp;&nbsp;·&nbsp;&nbsp;Teck Resources&nbsp;&nbsp;·&nbsp;&nbsp;Vancouver
              </p>
              <span className="font-mono text-xs tracking-widest" style={{ color: '#FB923C' }}>
                ⬜ Next Frontier
              </span>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── CAREER TIMELINE ───────────────────────────────── */}
      <section className="bg-ink-mid border-y border-ink-light">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-section">
          <RevealSection>
            <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-3">Career</p>
            <h2 className="font-display font-light text-h2 text-text-primary mb-12">
              Professional journey.
            </h2>
          </RevealSection>

          <div className="relative">
            <div className="hidden md:block absolute left-[148px] top-0 bottom-0 w-px bg-ink-light" />
            <div className="space-y-10">
              {roles.map((role, i) => (
                <RevealSection key={role.id} delay={i * 60}>
                  <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                    <div className="md:w-36 flex-shrink-0">
                      <p className="font-mono text-xs text-gold-DEFAULT tracking-wide leading-relaxed">{role.period}</p>
                      <p className="font-mono text-xs text-text-muted mt-1">{role.location}</p>
                    </div>
                    <div className="hidden md:flex items-start justify-center w-4 flex-shrink-0 relative">
                      <div className="w-2 h-2 rounded-full bg-gold-DEFAULT mt-1.5 relative z-10" />
                    </div>
                    <div className="flex-1 pb-10 border-b border-ink-light last:border-b-0 last:pb-0">
                      <p className="font-sans font-semibold text-text-primary text-base mb-0.5">{role.title}</p>
                      <p className="font-mono text-xs text-teal-DEFAULT tracking-wide mb-3">{role.org}</p>
                      <p className="text-text-secondary text-sm leading-relaxed">{role.narrative}</p>
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CREDENTIALS ───────────────────────────────────── */}
      <section className="bg-ink border-b border-ink-light">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-section">
          <RevealSection>
            <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-3">Credentials</p>
            <h2 className="font-display font-light text-h2 text-text-primary mb-12">
              Education & Licenses.
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {credentials.map((cred, i) => (
              <RevealSection key={i} delay={i * 60}>
                <div className="bg-ink-mid border border-ink-light rounded-sm p-5 flex items-start gap-4">
                  <CredentialIcon type={cred.type} />
                  <div>
                    <p className="font-sans font-medium text-text-primary text-sm mb-1">{cred.title}</p>
                    <p className="font-mono text-xs text-text-muted">{cred.institution}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-section">
        <RevealSection>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/work" className="btn-primary">
              Explore My Work <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>
        </RevealSection>
      </section>
    </>
  )
}
