export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Clock, Calendar, Tag } from 'lucide-react'
import RevealSection from '@/components/RevealSection'
import NewsletterForm from '@/components/NewsletterForm'
import ShareButtons from '@/components/ShareButtons'
import PortableTextRenderer from '@/components/PortableTextRenderer'
import { getPostBySlug, getAllPostSlugs, urlFor } from '@/lib/sanity'
import { articles } from '@/lib/data'
import { siteConfig } from '@/lib/data'

interface Props {
  params: Promise<{ slug: string }>
}

// Try Sanity first; fall back to static data slugs for generateStaticParams
export async function generateStaticParams() {
  try {
    const slugs = await getAllPostSlugs()
    if (slugs?.length) return slugs.map((s: { slug: string }) => ({ slug: s.slug }))
  } catch {}
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  // Try Sanity
  try {
    const post = await getPostBySlug(slug)
    if (post) {
      const coverUrl = post.coverImage?.asset?.url
      return {
        title: post.seo?.metaTitle || post.title,
        description: post.seo?.metaDescription || post.excerpt,
        openGraph: {
          type: 'article',
          title: post.title,
          description: post.excerpt,
          publishedTime: post.publishedAt,
          ...(coverUrl ? { images: [{ url: coverUrl }] } : {}),
        },
      }
    }
  } catch {}

  // Static fallback
  const article = articles.find((a) => a.slug === slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: { type: 'article', title: article.title, description: article.excerpt, publishedTime: article.date },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params

  // ── Try Sanity CMS ──────────────────────────────────────────
  let sanityPost: Record<string, any> | null = null
  try {
    sanityPost = await getPostBySlug(slug)
  } catch {}

  // ── Static fallback ─────────────────────────────────────────
  const staticArticle = !sanityPost ? articles.find((a) => a.slug === slug) : null
  if (!sanityPost && !staticArticle) notFound()

  // Unified view model
  const title = sanityPost?.title ?? staticArticle?.title ?? ''
  const excerpt = sanityPost?.excerpt ?? staticArticle?.excerpt ?? ''
  const category = sanityPost?.category?.title ?? staticArticle?.category ?? ''
  const publishedAt = sanityPost?.publishedAt ?? staticArticle?.date ?? ''
  const readTime = sanityPost?.estimatedReadingTime ?? staticArticle?.readTime ?? null
  const tags: string[] = sanityPost?.tags?.map((t: any) => t.title) ?? []
  const coverUrl = sanityPost?.coverImage?.asset?.url ?? null
  const coverAlt = sanityPost?.coverImage?.alt ?? title
  const crossPostLinks = sanityPost?.crossPostLinks ?? undefined
  const articleUrl = `${siteConfig.url}/writing/${slug}`

  const relatedPosts: any[] = sanityPost?.relatedPosts ?? articles.filter((a) => a.slug !== slug).slice(0, 3)
  const staticIdx = staticArticle ? articles.findIndex((a) => a.slug === slug) : -1
  const prevArticle = staticIdx > 0 ? articles[staticIdx - 1] : null
  const nextArticle = staticIdx >= 0 && staticIdx < articles.length - 1 ? articles[staticIdx + 1] : null

  return (
    <>
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: title,
            description: excerpt,
            author: { '@type': 'Person', name: 'Joseph Aro', url: siteConfig.url },
            datePublished: publishedAt,
            publisher: { '@type': 'Person', name: 'Joseph Aro' },
            ...(coverUrl ? { image: coverUrl } : {}),
          }),
        }}
      />

      {/* ─── ARTICLE HERO ────────────────────────────────── */}
      <section className="bg-ink pt-24 pb-0">
        <div className="relative aspect-video md:aspect-[21/6] overflow-hidden">
          {coverUrl ? (
            <>
              <Image src={coverUrl} alt={coverAlt} fill className="object-cover opacity-55" />
              {/* Gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/30 via-transparent to-ink/30" />
            </>
          ) : (
            /* Atmospheric no-cover fallback */
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-ink-mid" />
              <div className="absolute inset-0 bg-gradient-to-br from-gold-DEFAULT/[0.07] via-transparent to-teal-DEFAULT/[0.07]" />
              {/* Topographic line texture */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(0deg, transparent, transparent 22px, rgba(201,168,76,0.6) 22px, rgba(201,168,76,0.6) 23px)',
                }}
              />
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(90deg, transparent, transparent 22px, rgba(45,212,191,0.6) 22px, rgba(45,212,191,0.6) 23px)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            </div>
          )}

          {/* Headline overlay — desktop */}
          <div className="absolute bottom-0 left-0 right-0 max-w-[1280px] mx-auto px-6 md:px-10 pb-12 hidden md:block">
            <div className="flex flex-wrap items-center gap-4 mb-5">
              <span className="badge badge-teal">{category}</span>
              {publishedAt && (
                <span className="font-mono text-[0.7rem] text-text-muted flex items-center gap-1.5">
                  <Calendar size={11} />
                  {new Date(publishedAt).toLocaleDateString('en-CA', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
              )}
              {readTime && (
                <span className="font-mono text-[0.7rem] text-text-muted flex items-center gap-1.5">
                  <Clock size={11} /> {readTime} min read
                </span>
              )}
            </div>
            <h1 className="font-display font-light text-text-primary max-w-3xl leading-[1.1] tracking-[-0.02em]" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
              {title}
            </h1>
          </div>
        </div>

        {/* Mobile headline */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 pt-8 pb-4 md:hidden">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="badge badge-teal">{category}</span>
            {readTime && <span className="font-mono text-[0.7rem] text-text-muted">{readTime} min read</span>}
          </div>
          <h1 className="font-display font-light text-h1 text-text-primary leading-tight tracking-[-0.02em]">{title}</h1>
        </div>
      </section>

      {/* ─── ARTICLE BODY ────────────────────────────────── */}
      <section className="bg-ink">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 xl:gap-16">

            {/* ── Main content ── */}
            <div className="lg:col-span-3">
              {/* Author row */}
              <div className="flex items-center gap-4 mb-10 pb-8 border-b border-ink-light">
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-ink-mid flex-shrink-0 ring-1 ring-gold-DEFAULT/20">
                  <Image src="/images/headshot-author.jpg" alt="Joseph Aro" fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-sans font-semibold text-sm text-text-primary">Joseph Aro</p>
                  <p className="font-mono text-[0.68rem] text-text-muted tracking-wide">
                    Geospatial Intelligence · Remote Sensing
                  </p>
                </div>
                <div className="ml-auto flex-shrink-0">
                  <ShareButtons url={articleUrl} title={title} crossPostLinks={crossPostLinks} />
                </div>
              </div>

              {/* Lead excerpt — shown when body exists */}
              {(sanityPost?.body || staticArticle?.body) && excerpt && (
                <p className="font-display font-light text-text-secondary text-xl md:text-2xl leading-relaxed mb-10 pb-10 border-b border-ink-light/50 italic">
                  {excerpt}
                </p>
              )}

              {/* Body content */}
              {sanityPost?.body ? (
                <PortableTextRenderer value={sanityPost.body} />
              ) : staticArticle?.body ? (
                <div className="prose-editorial" dangerouslySetInnerHTML={{ __html: staticArticle.body }} />
              ) : (
                <div>
                  {/* Styled lead excerpt when no body */}
                  <p className="font-display font-light text-text-secondary text-xl md:text-2xl leading-relaxed mb-10 italic">
                    {excerpt}
                  </p>
                  <div className="my-8 p-7 border border-dashed border-ink-light rounded-sm flex items-start gap-4">
                    <div className="w-1 h-full min-h-[3rem] bg-gold-DEFAULT/30 flex-shrink-0 self-stretch rounded-full" />
                    <p className="text-text-muted text-sm leading-relaxed italic">
                      Full article content for &ldquo;{title}&rdquo; is coming soon. Subscribe below to be notified when it&apos;s live.
                    </p>
                  </div>
                </div>
              )}

              {/* Subscribe CTA */}
              <div className="my-14 p-8 md:p-10 bg-ink-mid border border-ink-light rounded-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-20 h-[2px] bg-gold-DEFAULT" />
                <p className="font-display font-light text-xl md:text-2xl text-text-primary mb-3">Enjoyed this?</p>
                <p className="text-text-secondary text-sm mb-6 max-w-sm">
                  Get future essays and field notes delivered direct. No spam.
                </p>
                <NewsletterForm />
              </div>

              {/* Bottom share */}
              <div className="pt-8 border-t border-ink-light">
                <p className="font-mono text-[0.68rem] text-text-muted tracking-[0.15em] uppercase mb-4">Share this article</p>
                <ShareButtons url={articleUrl} title={title} crossPostLinks={crossPostLinks} />
              </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Back link */}
                <Link
                  href="/writing"
                  className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary text-sm transition-colors duration-150 group"
                >
                  <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform duration-150" />
                  All articles
                </Link>

                {/* Divider */}
                <div className="h-px bg-ink-light" />

                {/* Category */}
                <div>
                  <p className="font-mono text-[0.65rem] text-text-muted tracking-[0.15em] uppercase mb-3">Category</p>
                  <span className="badge badge-teal">{category}</span>
                </div>

                {/* Tags */}
                {tags.length > 0 && (
                  <div>
                    <p className="font-mono text-[0.65rem] text-text-muted tracking-[0.15em] uppercase mb-3 flex items-center gap-1.5">
                      <Tag size={10} /> Tags
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map((tag) => (
                        <span key={tag} className="badge badge-default text-xs">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reading time */}
                {readTime && (
                  <div>
                    <p className="font-mono text-[0.65rem] text-text-muted tracking-[0.15em] uppercase mb-2">Reading time</p>
                    <p className="font-mono text-sm text-text-secondary">{readTime} min</p>
                  </div>
                )}

                {/* Published */}
                {publishedAt && (
                  <div>
                    <p className="font-mono text-[0.65rem] text-text-muted tracking-[0.15em] uppercase mb-2">Published</p>
                    <p className="font-mono text-[0.78rem] text-text-secondary">
                      {new Date(publishedAt).toLocaleDateString('en-CA', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                )}

                {/* Divider */}
                <div className="h-px bg-ink-light" />

                {/* More writing */}
                <div>
                  <p className="font-mono text-[0.65rem] text-text-muted tracking-[0.15em] uppercase mb-3">More Writing</p>
                  <Link
                    href="/writing"
                    className="text-sm text-text-secondary hover:text-gold-DEFAULT flex items-center gap-1.5 transition-colors duration-150 group"
                  >
                    Browse all articles
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-150" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RELATED ARTICLES ────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <section className="bg-ink-mid border-t border-ink-light">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-section">
            <RevealSection>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-6 bg-gold-DEFAULT/50" />
                <h2 className="font-mono text-[0.7rem] text-gold-DEFAULT tracking-[0.18em] uppercase">More to Read</h2>
              </div>
            </RevealSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedPosts.map((post: any, i: number) => {
                const pSlug = post.slug?.current ?? post.slug
                const pTitle = post.title
                const pCategory = post.category?.title ?? post.category
                const pRead = post.estimatedReadingTime ?? post.readTime
                const pExcerpt = post.excerpt
                return (
                  <RevealSection key={post._id ?? post.id} delay={i * 70}>
                    <Link href={`/writing/${pSlug}`} className="group block h-full">
                      <div className="bg-ink border border-ink-light rounded-sm p-6 h-full flex flex-col card-interactive">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="badge badge-teal">{pCategory}</span>
                          {pRead && (
                            <span className="font-mono text-[0.65rem] text-text-muted">{pRead} min</span>
                          )}
                        </div>
                        <h3 className="font-display font-light text-text-primary text-base mb-3 leading-snug group-hover:text-gold-DEFAULT transition-colors duration-200 flex-1">
                          {pTitle}
                        </h3>
                        {pExcerpt && (
                          <p className="text-text-muted text-[0.8rem] leading-relaxed line-clamp-2 mb-4">
                            {pExcerpt}
                          </p>
                        )}
                        <span className="font-mono text-[0.68rem] text-text-muted group-hover:text-gold-DEFAULT flex items-center gap-1 transition-colors duration-150 mt-auto">
                          Read <ArrowRight size={11} />
                        </span>
                      </div>
                    </Link>
                  </RevealSection>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ─── PREV / NEXT ─────────────────────────────────── */}
      {(prevArticle || nextArticle) && (
        <section className="border-t border-ink-light bg-ink">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-10 grid grid-cols-2 gap-6">
            {prevArticle ? (
              <Link href={`/writing/${prevArticle.slug}`} className="group">
                <p className="font-mono text-[0.65rem] text-text-muted tracking-[0.15em] uppercase mb-3 flex items-center gap-1.5">
                  <ArrowLeft size={11} /> Previous
                </p>
                <p className="font-display font-light text-text-secondary text-base group-hover:text-text-primary transition-colors duration-150 leading-snug">
                  {prevArticle.title}
                </p>
              </Link>
            ) : <div />}

            {nextArticle && (
              <Link href={`/writing/${nextArticle.slug}`} className="group text-right ml-auto">
                <p className="font-mono text-[0.65rem] text-text-muted tracking-[0.15em] uppercase mb-3 flex items-center gap-1.5 justify-end">
                  Next <ArrowRight size={11} />
                </p>
                <p className="font-display font-light text-text-secondary text-base group-hover:text-text-primary transition-colors duration-150 leading-snug">
                  {nextArticle.title}
                </p>
              </Link>
            )}
          </div>
        </section>
      )}
    </>
  )
}
