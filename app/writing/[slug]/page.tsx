import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Clock, Calendar, Linkedin, Twitter, Link2 } from 'lucide-react'
import RevealSection from '@/components/RevealSection'
import NewsletterForm from '@/components/NewsletterForm'
import { articles } from '@/lib/data'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  const currentIndex = articles.findIndex((a) => a.slug === slug)
  const relatedArticles = articles.filter((a) => a.slug !== slug).slice(0, 3)
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null

  return (
    <>
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.excerpt,
            author: { '@type': 'Person', name: 'Joseph Aro', url: 'https://josepharo.me' },
            datePublished: article.date,
            publisher: { '@type': 'Person', name: 'Joseph Aro' },
          }),
        }}
      />

      {/* ─── ARTICLE HERO ────────────────────────────────── */}
      <section className="bg-ink pt-24 pb-0">
        {/* Full-bleed cover */}
        <div className="relative aspect-video md:aspect-[21/6] bg-gradient-to-br from-ink-mid to-ink overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-mono text-xs text-text-muted opacity-30">[ARTICLE COVER IMAGE]</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />

          {/* Headline overlay on large screens */}
          <div className="absolute bottom-0 left-0 right-0 max-w-[1280px] mx-auto px-6 md:px-10 pb-10 hidden md:block">
            <div className="flex items-center gap-3 mb-4">
              <span className="badge badge-teal">{article.category}</span>
              <span className="font-mono text-xs text-text-muted flex items-center gap-1.5">
                <Calendar size={11} />
                {new Date(article.date).toLocaleDateString('en-CA', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="font-mono text-xs text-text-muted flex items-center gap-1.5">
                <Clock size={11} /> {article.readTime} min read
              </span>
            </div>
            <h1 className="font-display font-light text-h1 text-text-primary max-w-3xl leading-tight">
              {article.title}
            </h1>
          </div>
        </div>

        {/* Mobile headline */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 pt-8 pb-4 md:hidden">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="badge badge-teal">{article.category}</span>
            <span className="font-mono text-xs text-text-muted">{article.readTime} min read</span>
          </div>
          <h1 className="font-display font-light text-h1 text-text-primary">{article.title}</h1>
        </div>
      </section>

      {/* ─── ARTICLE BODY ────────────────────────────────── */}
      <section className="reading-mode">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main content */}
            <div className="lg:col-span-3">
              {/* Author */}
              <div className="flex items-center gap-4 mb-10 pb-8 border-b border-surface-border">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-ink-mid flex-shrink-0">
                  <Image
                    src="/images/headshot-author.jpg"
                    alt="Joseph Aro"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-sans font-semibold text-sm text-gray-900">Joseph Aro</p>
                  <p className="font-mono text-xs text-gray-500">Geospatial Intelligence · Remote Sensing</p>
                </div>
                <div className="ml-auto flex items-center gap-3">
                  <button
                    aria-label="Share on LinkedIn"
                    className="w-8 h-8 rounded-sm border border-surface-border flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-600 transition-colors duration-200"
                  >
                    <Linkedin size={14} />
                  </button>
                  <button
                    aria-label="Share on Twitter"
                    className="w-8 h-8 rounded-sm border border-surface-border flex items-center justify-center text-gray-400 hover:text-sky-500 hover:border-sky-500 transition-colors duration-200"
                  >
                    <Twitter size={14} />
                  </button>
                  <button
                    aria-label="Copy link"
                    className="w-8 h-8 rounded-sm border border-surface-border flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors duration-200"
                  >
                    <Link2 size={14} />
                  </button>
                </div>
              </div>

              {/* Body placeholder */}
              <div className="prose-editorial">
                {article.body ? (
                  <div dangerouslySetInnerHTML={{ __html: article.body }} />
                ) : (
                  <div className="space-y-6">
                    <p className="text-gray-400 italic border border-dashed border-gray-200 rounded p-6">
                      [ARTICLE BODY PLACEHOLDER — Content for &ldquo;{article.title}&rdquo; to be provided by Joseph Aro. This page is structurally complete and ready to receive the full article text.]
                    </p>
                  </div>
                )}
              </div>

              {/* Subscribe CTA inline */}
              <div className="my-12 p-8 rounded-sm" style={{ background: 'var(--ink)', color: 'var(--text-primary)' }}>
                <p className="font-display font-light text-xl mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Enjoyed this?</p>
                <p className="text-text-secondary text-sm mb-5" style={{ color: 'var(--text-secondary)' }}>Get future essays and field notes delivered direct. No spam.</p>
                <NewsletterForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div>
                  <p className="font-mono text-xs text-gray-400 tracking-widest uppercase mb-3">Category</p>
                  <span className="badge badge-teal">{article.category}</span>
                </div>
                <div>
                  <p className="font-mono text-xs text-gray-400 tracking-widest uppercase mb-3">More Writing</p>
                  <Link href="/writing" className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1.5 transition-colors">
                    All Articles <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RELATED ARTICLES ────────────────────────────── */}
      {relatedArticles.length > 0 && (
        <section className="bg-ink border-t border-ink-light">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-section">
            <RevealSection>
              <h2 className="font-display font-light text-h3 text-text-primary mb-8">More to read</h2>
            </RevealSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedArticles.map((a, i) => (
                <RevealSection key={a.id} delay={i * 60}>
                  <Link href={`/writing/${a.slug}`} className="group block h-full">
                    <div className="bg-ink-mid border border-ink-light rounded-sm p-5 h-full card-interactive">
                      <span className="badge badge-teal mb-3 block w-fit">{a.category}</span>
                      <h3 className="font-display font-light text-text-primary text-base group-hover:text-gold-DEFAULT transition-colors duration-200">
                        {a.title}
                      </h3>
                      <p className="font-mono text-xs text-text-muted mt-3">{a.readTime} min read</p>
                    </div>
                  </Link>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── PREV / NEXT ─────────────────────────────────── */}
      <section className="border-t border-ink-light">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-8 grid grid-cols-2 gap-4">
          {prevArticle ? (
            <Link href={`/writing/${prevArticle.slug}`} className="group">
              <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-2 flex items-center gap-1.5">
                <ArrowLeft size={12} /> Previous
              </p>
              <p className="font-display font-light text-text-primary text-sm group-hover:text-gold-DEFAULT transition-colors duration-200">
                {prevArticle.title}
              </p>
            </Link>
          ) : <div />}

          {nextArticle && (
            <Link href={`/writing/${nextArticle.slug}`} className="group text-right ml-auto">
              <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-2 flex items-center gap-1.5 justify-end">
                Next <ArrowRight size={12} />
              </p>
              <p className="font-display font-light text-text-primary text-sm group-hover:text-gold-DEFAULT transition-colors duration-200">
                {nextArticle.title}
              </p>
            </Link>
          )}
        </div>
      </section>
    </>
  )
}
