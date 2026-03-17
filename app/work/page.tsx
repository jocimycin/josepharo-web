import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import RevealSection from '@/components/RevealSection'
import { projects } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected geospatial, remote sensing, hydrographic, and UAV mapping projects by Joseph Aro — spanning mining, waterways, infrastructure, and environmental intelligence.',
}

const domains = ['All', 'Mining & Exploration', 'Waterways & Infrastructure', 'UAV & Drone Mapping', 'Data Strategy', 'Climate & Environment', 'Infrastructure & Planning']

export default function WorkPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-ink pt-28 pb-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <RevealSection>
            <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-5">Selected Work</p>
            <h1 className="font-display font-light text-h1 text-text-primary mb-6 max-w-2xl">
              Projects across domains, disciplines, and geographies.
            </h1>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl">
              From mining exploration in Canada to waterways intelligence in Lagos — a selection of geospatial, hydrographic, remote sensing, and data strategy work across a decade of practice.
            </p>
          </RevealSection>
        </div>
      </section>

      <div className="signal-divider" />

      {/* Filter (visual only — category filter needs JS, keeping static for SSR) */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-8">
        <div className="flex flex-wrap gap-2" role="navigation" aria-label="Project categories">
          {domains.map((d) => (
            <span
              key={d}
              className={`badge cursor-default ${d === 'All' ? 'badge-gold' : 'badge-default'}`}
            >
              {d}
            </span>
          ))}
        </div>
      </section>

      {/* Project grid */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 pb-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <RevealSection key={project.id} delay={i * 50}>
              <Link href={`/work/${project.slug}`} className="group block h-full">
                <article className="bg-ink-mid border border-ink-light rounded-sm overflow-hidden h-full card-interactive">
                  {/* Image area */}
                  <div className="relative aspect-video bg-gradient-to-br from-ink-light to-ink overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                      <div className="w-16 h-16 border border-gold-DEFAULT rounded-full" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="badge badge-teal">{project.domain}</span>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <ArrowUpRight size={18} className="text-gold-DEFAULT" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="font-display font-light text-text-primary text-base md:text-lg mb-2 leading-tight group-hover:text-gold-DEFAULT transition-colors duration-200">
                      {project.title}
                    </h2>
                    <p className="text-text-muted text-sm leading-relaxed mb-5 line-clamp-2">
                      {project.summary}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-mono text-xs text-text-muted">{project.client}</p>
                        <p className="font-mono text-xs text-text-muted mt-0.5">{project.period}</p>
                      </div>
                      <span className="badge badge-default">{project.category}</span>
                    </div>
                  </div>
                </article>
              </Link>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* Approach section */}
      <section className="bg-ink-mid border-t border-ink-light">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-section">
          <RevealSection>
            <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-3">How I approach projects</p>
            <h2 className="font-display font-light text-h2 text-text-primary mb-12 max-w-xl">
              From problem to intelligence.
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Understand the decision', body: 'Every engagement starts with the decision it needs to support — not the data. Defining the right question shapes everything downstream.' },
              { step: '02', title: 'Design the intelligence', body: 'Selecting methods, sensors, workflows, and tools that match the problem — not the other way around. Rigorous, field-tested, and cost-aware.' },
              { step: '03', title: 'Deliver usable insight', body: 'Output that reaches the people who need it, in the format they can act on. Intelligence stops at the analyst\'s desk if the communication fails.' },
            ].map((item, i) => (
              <RevealSection key={item.step} delay={i * 80}>
                <div>
                  <p className="font-mono text-xs text-gold-DEFAULT tracking-widest uppercase mb-4">{item.step}</p>
                  <h3 className="font-display font-light text-text-primary text-xl mb-3">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.body}</p>
                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection className="mt-14">
            <Link href="/contact" className="btn-primary inline-flex">
              Start a conversation
            </Link>
          </RevealSection>
        </div>
      </section>
    </>
  )
}
