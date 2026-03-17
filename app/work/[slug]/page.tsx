import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import RevealSection from '@/components/RevealSection'
import { projects } from '@/lib/data'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.summary,
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <>
      {/* ─── CASE STUDY HERO ─────────────────────────────── */}
      <section className="bg-ink pt-28 pb-12">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-text-muted text-sm hover:text-text-primary transition-colors duration-200 mb-10"
          >
            <ArrowLeft size={15} /> All Work
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="badge badge-teal">{project.domain}</span>
                <span className="badge badge-default">{project.category}</span>
              </div>
              <h1 className="font-display font-light text-h1 text-text-primary mb-4">
                {project.title}
              </h1>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* Metadata card */}
            <div className="lg:col-span-1">
              <div className="bg-ink-mid border border-ink-light rounded-sm p-6">
                {[
                  { label: 'Client', value: project.client },
                  { label: 'Role', value: project.role },
                  { label: 'Period', value: project.period },
                  { label: 'Domain', value: project.domain },
                ].map((item) => (
                  <div key={item.label} className="py-3 border-b border-ink-light last:border-0">
                    <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-1">{item.label}</p>
                    <p className="text-text-primary text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cover image area */}
      <div className="bg-ink-mid border-y border-ink-light">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-0">
          <div className="relative aspect-video md:aspect-[21/7] bg-gradient-to-br from-ink-light to-ink flex items-center justify-center">
            <p className="font-mono text-xs text-text-muted tracking-widest uppercase opacity-50">
              [IMAGE PLACEHOLDER — Project cover image]
            </p>
          </div>
        </div>
      </div>

      {/* ─── CASE STUDY BODY ─────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-section">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            <RevealSection>
              <h2 className="font-display font-light text-h3 text-text-primary mb-4">The Challenge</h2>
              <p className="text-text-secondary text-base leading-relaxed">{project.challenge}</p>
            </RevealSection>

            <div className="signal-divider" />

            <RevealSection>
              <h2 className="font-display font-light text-h3 text-text-primary mb-4">Approach & Methods</h2>
              <p className="text-text-secondary text-base leading-relaxed mb-6">{project.approach}</p>
              <div className="flex flex-wrap gap-2">
                {project.methods.map((m) => (
                  <span key={m} className="badge badge-default">{m}</span>
                ))}
              </div>
            </RevealSection>

            <div className="signal-divider" />

            {/* Visual asset placeholder */}
            <RevealSection>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2].map((n) => (
                  <div key={n} className="aspect-video bg-ink-mid border border-ink-light rounded-sm flex items-center justify-center">
                    <p className="font-mono text-xs text-text-muted opacity-50">[PROJECT IMAGE {n}]</p>
                  </div>
                ))}
              </div>
            </RevealSection>

            <div className="signal-divider" />

            <RevealSection>
              <h2 className="font-display font-light text-h3 text-text-primary mb-4">Outcomes & Impact</h2>
              <p className="text-text-secondary text-base leading-relaxed">{project.outcomes}</p>
            </RevealSection>

            <div className="signal-divider" />

            <RevealSection>
              <h2 className="font-display font-light text-h3 text-text-primary mb-4">Reflection</h2>
              <blockquote className="border-l-2 border-gold-DEFAULT pl-6 py-1">
                <p className="font-display font-light text-text-primary text-lg italic leading-relaxed">
                  &ldquo;{project.reflection}&rdquo;
                </p>
              </blockquote>
            </RevealSection>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <RevealSection delay={120}>
              <div className="sticky top-24 space-y-5">
                <div className="bg-ink-mid border border-ink-light rounded-sm p-6">
                  <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-4">Interested in similar work?</p>
                  <p className="text-text-secondary text-sm mb-5">
                    For consulting, research collaboration, or advisory inquiries — get in touch.
                  </p>
                  <Link href="/contact" className="btn-primary w-full justify-center text-xs">
                    Get in Touch
                  </Link>
                </div>

                <div className="bg-ink-mid border border-ink-light rounded-sm p-6">
                  <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-4">Explore More Work</p>
                  <Link href="/work" className="btn-secondary w-full justify-center text-xs">
                    All Projects
                  </Link>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ─── PREV / NEXT ─────────────────────────────────── */}
      <section className="border-t border-ink-light">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-8 grid grid-cols-2 gap-4">
          {prevProject ? (
            <Link href={`/work/${prevProject.slug}`} className="group">
              <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-2">Previous</p>
              <p className="text-text-primary text-sm group-hover:text-gold-DEFAULT transition-colors duration-200 font-display font-light">
                {prevProject.title}
              </p>
            </Link>
          ) : <div />}

          {nextProject && (
            <Link href={`/work/${nextProject.slug}`} className="group text-right ml-auto">
              <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-2">Next</p>
              <p className="text-text-primary text-sm group-hover:text-gold-DEFAULT transition-colors duration-200 font-display font-light">
                {nextProject.title}
              </p>
            </Link>
          )}
        </div>
      </section>
    </>
  )
}
