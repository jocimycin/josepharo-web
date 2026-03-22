import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import RevealSection from '@/components/RevealSection'
import {
  credibilityStrip,
  positioningSection,
  expertise,
  projects,
  articles,
  stats,
} from '@/lib/data'


export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 5)
  const mainProject = featuredProjects[0]
  const sideProjects = featuredProjects.slice(1, 3)
  const bottomProjects = featuredProjects.slice(3, 5)

  const doubleStrip = [...credibilityStrip, ...credibilityStrip]

  return (
    <>
      <HeroSection />

      {/* ─── SIGNAL STRIP ──────────────────────────────────── */}
      <section className="bg-ink-mid border-y border-ink-light py-4 overflow-hidden" aria-label="Credentials">
        <div className="ticker-track select-none" aria-hidden="true">
          {doubleStrip.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 px-8 font-mono text-xs text-text-muted tracking-widest uppercase whitespace-nowrap"
            >
              {item}
              <span className="w-1 h-1 rounded-full bg-gold-DEFAULT/40 inline-block" />
            </span>
          ))}
        </div>
      </section>

      {/* ─── POSITIONING ───────────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-section">
        <RevealSection>
          <div className="max-w-[760px]">
            <h2 className="font-display font-light text-h2 text-text-primary mb-8">
              {positioningSection.headline}
            </h2>
            {positioningSection.body.map((para, i) => (
              <p key={i} className="text-text-secondary text-base md:text-lg leading-relaxed mb-5 last:mb-0">
                {para}
              </p>
            ))}
            <Link href={positioningSection.cta.href} className="inline-flex items-center gap-2 mt-8 text-gold-DEFAULT text-sm font-medium hover:gap-3 transition-all duration-200">
              {positioningSection.cta.label} <ArrowRight size={15} />
            </Link>
          </div>
        </RevealSection>
      </section>

      <div className="signal-divider max-w-[1280px] mx-auto px-6 md:px-10" />

      {/* ─── EXPERTISE ─────────────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-section" aria-labelledby="expertise-heading">
        <RevealSection>
          <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-3">Core Expertise</p>
          <h2 id="expertise-heading" className="font-display font-light text-h2 text-text-primary mb-14 md:mb-20">
            Five domains. One integrated practice.
          </h2>
        </RevealSection>

        <div className="divide-y divide-ink-light">
          {expertise.map((item, i) => (
            <RevealSection key={item.id} delay={i * 60}>
              <div className="group flex flex-col md:flex-row md:items-baseline gap-3 md:gap-12 py-7 md:py-9 hover:bg-ink-mid/40 transition-colors duration-300 -mx-4 px-4 rounded-sm">
                <span className="font-mono text-xs text-gold-DEFAULT/50 tracking-widest flex-shrink-0 w-6">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display font-light text-text-primary text-xl md:text-2xl flex-shrink-0 md:w-64 group-hover:text-gold-DEFAULT transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-text-muted leading-relaxed flex-1">
                  {item.points.join(' · ')}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ─── STATS STRIP ───────────────────────────────────── */}
      <section className="bg-ink-mid border-y border-ink-light">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x divide-ink-light gap-y-12 md:gap-y-0">
            {stats.map((stat, i) => (
              <RevealSection key={stat.label} delay={i * 80}>
                <div className="md:px-10 first:pl-0 last:pr-0">
                  <p className="font-display text-gold-DEFAULT font-light leading-none mb-3" style={{ fontSize: 'clamp(3rem, 5.5vw, 5rem)' }}>
                    {stat.value}
                  </p>
                  <p className="font-mono text-xs text-text-muted tracking-widest uppercase leading-snug max-w-[120px]">
                    {stat.label}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SELECTED WORK ─────────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-section" aria-labelledby="work-heading">
        <RevealSection>
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-3">Selected Work</p>
              <h2 id="work-heading" className="font-display font-light text-h2 text-text-primary">
                Selected systems and strategic engagements.
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden md:inline-flex items-center gap-2 text-text-secondary text-sm hover:text-gold-DEFAULT transition-colors duration-200"
            >
              All Projects <ArrowRight size={15} />
            </Link>
          </div>
        </RevealSection>

        {/* Main asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4">
          {/* Featured large card */}
          {mainProject && (
            <RevealSection className="lg:col-span-3">
              <Link href={`/work/${mainProject.slug}`} className="group block h-full">
                <div className="bg-ink-mid border border-ink-light rounded-sm overflow-hidden h-full min-h-[320px] card-interactive relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/20 to-ink/80 z-10" />
                  {/* Cover image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-ink-light to-ink" />
                  {mainProject.coverImage && (
                    <Image src={mainProject.coverImage} alt={mainProject.title} fill className="object-cover opacity-60" />
                  )}
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-7">
                    <span className="badge badge-teal mb-3 w-fit">{mainProject.domain}</span>
                    <h3 className="font-display font-light text-text-primary text-xl md:text-2xl mb-2 leading-tight group-hover:text-gold-DEFAULT transition-colors duration-200">
                      {mainProject.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4 line-clamp-2">{mainProject.summary}</p>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-text-muted">{mainProject.client}</span>
                      <span className="text-text-muted">·</span>
                      <span className="font-mono text-xs text-text-muted">{mainProject.period}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </RevealSection>
          )}

          {/* Two stacked cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {sideProjects.map((project, i) => (
              <RevealSection key={project.id} delay={i * 100} className="flex-1">
                <Link href={`/work/${project.slug}`} className="group block h-full">
                  <div className="bg-ink-mid border border-ink-light rounded-sm overflow-hidden h-full min-h-[148px] card-interactive relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-ink-light/50 to-ink" />
                    <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                      <div>
                        <span className="badge badge-teal mb-3 w-fit">{project.domain}</span>
                        <h3 className="font-display font-light text-text-primary text-base mb-2 leading-tight group-hover:text-gold-DEFAULT transition-colors duration-200">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        <span className="font-mono text-xs text-text-muted">{project.client}</span>
                        <ArrowUpRight size={13} className="text-text-muted group-hover:text-gold-DEFAULT transition-colors duration-200 ml-auto" />
                      </div>
                    </div>
                  </div>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        {bottomProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bottomProjects.map((project, i) => (
              <RevealSection key={project.id} delay={i * 80}>
                <Link href={`/work/${project.slug}`} className="group block">
                  <div className="bg-ink-mid border border-ink-light rounded-sm p-6 card-interactive flex items-start gap-5">
                    <div className="flex-1">
                      <span className="badge badge-default mb-3 w-fit">{project.domain}</span>
                      <h3 className="font-display font-light text-text-primary text-base mb-2 group-hover:text-gold-DEFAULT transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-text-muted text-sm line-clamp-2">{project.summary}</p>
                    </div>
                    <ArrowUpRight size={18} className="text-text-muted group-hover:text-gold-DEFAULT transition-colors duration-200 mt-1 flex-shrink-0" />
                  </div>
                </Link>
              </RevealSection>
            ))}
          </div>
        )}

        <RevealSection className="mt-8 md:hidden">
          <Link href="/work" className="btn-secondary w-full justify-center">
            All Projects <ArrowRight size={15} />
          </Link>
        </RevealSection>
      </section>

      {/* ─── WRITING PREVIEW ───────────────────────────────── */}
      <section className="bg-ink-mid border-y border-ink-light">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: header */}
            <RevealSection>
              <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-3">Field Notes & Intelligence</p>
              <h2 className="font-display font-light text-h2 text-text-primary mb-6">
                Field Notes and Intelligence.
              </h2>
              <p className="text-text-secondary text-base leading-relaxed mb-8 max-w-md">
                Thoughts, methods, and observations from the intersection of geospatial intelligence, hydrography, earth observation, data systems, and strategic execution.
              </p>
              <Link href="/writing" className="btn-primary inline-flex">
                Read Field Notes <ArrowRight size={16} />
              </Link>
            </RevealSection>

            {/* Right: article list */}
            <RevealSection delay={100}>
              <div className="flex flex-col divide-y divide-ink-light">
                {articles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/writing/${article.slug}`}
                    className="group flex items-center justify-between py-5 hover:text-gold-DEFAULT transition-colors duration-200"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-1.5">
                        <span className="font-mono text-xs text-text-muted">
                          {new Date(article.date).toLocaleDateString('en-CA', { month: 'short', year: 'numeric' })}
                        </span>
                        <span className="badge badge-teal">{article.category}</span>
                      </div>
                      <p className="font-display font-light text-text-primary text-base group-hover:text-gold-DEFAULT transition-colors duration-200">
                        {article.title}
                      </p>
                    </div>
                    <ArrowRight size={16} className="text-text-muted group-hover:text-gold-DEFAULT transition-colors duration-200 ml-4 flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ─── NOW SECTION ───────────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-section">
        <RevealSection>
          <div className="flex items-start gap-4 mb-6">
            <span className="badge badge-gold mt-1">Now</span>
            <h2 className="font-display font-light text-h3 text-text-primary">
              What I&apos;m Working On
            </h2>
          </div>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-[640px]">
            {/* PLACEHOLDER — update with Joseph's current focus note */}
            Currently based in BC, Canada, leading geospatial data transformation and remote sensing initiatives at Teck Resources. Simultaneously continuing hydrographic consultancy work in Lagos, Nigeria, and building out OEA Consults&apos; enterprise drone mapping capabilities.
          </p>
          <div className="mt-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-DEFAULT animate-pulse" />
            <span className="font-mono text-xs text-text-muted tracking-widest uppercase">Active · March 2026</span>
          </div>
        </RevealSection>
      </section>
    </>
  )
}
