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
  const title = sanityPost?.title ?? staticArticle!.title
  const excerpt = sanityPost?.excerpt ?? staticArticle!.excerpt
  const category = sanityPost?.category?.title ?? staticArticle!.category
  const publishedAt = sanityPost?.publishedAt ?? staticArticle!.date
  const readTime = sanityPost?.estimatedReadingTime ?? staticArticle!.readTime
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
        <div className="relative aspect-video md:aspect-[21/6] bg-gradient-to-br from-ink-mid to-ink overflow-hidden">
          {coverUrl ? (
            <Image src={coverUrl} alt={coverAlt} fill className="object-cover opacity-60" />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-ink-mid to-ink" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />

          {/* Headline overlay — desktop */}
          <div className="absolute bottom-0 left-0 right-0 max-w-[1280px] mx-auto px-6 md:px-10 pb-10 hidden md:block">
            <div className="flex items-center gap-3 mb-4">
              <span className="badge badge-teal">{category}</span>
              <span className="font-mono text-xs text-text-muted flex items-center gap-1.5">
                <Calendar size={11} />
                {new Date(publishedAt).toLocaleDateString('en-CA', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="font-mono text-xs text-text-muted flex items-center gap-1.5">
                <Clock size={11} /> {readTime} min read
              </span>
            </div>
            <h1 className="font-display font-light text-h1 text-text-primary max-w-3xl leading-tight">{title}</h1>
          </div>
        </div>

        {/* Mobile headline */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 pt-8 pb-4 md:hidden">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="badge badge-teal">{category}</span>
            <span className="font-mono text-xs text-text-muted">{readTime} min read</span>
          </div>
          <h1 className="font-display font-light text-h1 text-text-primary">{title}</h1>
        </div>
      </section>

      {/* ─── ARTICLE BODY ────────────────────────────────── */}
      <section className="bg-ink">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

            {/* ── Main content ── */}
            <div className="lg:col-span-3">
              {/* Author row + share */}
              <div className="flex items-center gap-4 mb-10 pb-8 border-b border-ink-light">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-ink-mid flex-shrink-0">
                  <Image src="/images/headshot-author.jpg" alt="Joseph Aro" fill className="object-cover" />
                </div>
                <div>
                  <p className="font-sans font-semibold text-sm text-text-primary">Joseph Aro</p>
                  <p className="font-mono text-xs text-text-muted">Geospatial Intelligence · Remote Sensing</p>
                </div>
                <div className="ml-auto">
                  <ShareButtons url={articleUrl} title={title} crossPostLinks={crossPostLinks} />
                </div>
              </div>

              {/* Body content */}
              {sanityPost?.body ? (
                <PortableTextRenderer value={sanityPost.body} />
              ) : staticArticle?.body ? (
                <div className="prose-editorial" dangerouslySetInnerHTML={{ __html: staticArticle.body }} />
              ) : (
                <div className="prose-editorial">
                  <p className="text-text-muted italic border border-dashed border-ink-light rounded-sm p-6 text-sm">
                    Full article content for &ldquo;{title}&rdquo; is coming soon. Subscribe below to be notified when it&apos;s live.
                  </p>
                </div>
              )}

              {/* Subscribe CTA */}
              <div className="my-12 p-8 bg-ink-mid border border-ink-light rounded-sm">
                <p className="font-display font-light text-xl text-text-primary mb-3">Enjoyed this?</p>
                <p className="text-text-secondary text-sm mb-5">Get future essays and field notes delivered direct. No spam.</p>
                <NewsletterForm />
              </div>

              {/* Bottom share */}
              <div className="pt-6 border-t border-ink-light">
                <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-4">Share this article</p>
                <ShareButtons url={articleUrl} title={title} crossPostLinks={crossPostLinks} />
              </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div>
                  <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-3">Category</p>
                  <span className="badge badge-teal">{category}</span>
                </div>

                {tags.length > 0 && (
                  <div>
                    <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-3 flex items-center gap-1.5">
                      <Tag size={10} /> Tags
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map((tag) => (
                        <span key={tag} className="badge badge-default text-xs">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-3">More Writing</p>
                  <Link href="/writing" className="text-sm text-text-secondary hover:text-text-primary flex items-center gap-1.5 transition-colors">
                    All Articles <ArrowRight size={13} />
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
              <h2 className="font-display font-light text-h3 text-text-primary mb-8">More to read</h2>
            </RevealSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedPosts.map((post: any, i: number) => {
                const pSlug = post.slug?.current ?? post.slug
                const pTitle = post.title
                const pCategory = post.category?.title ?? post.category
                const pRead = post.estimatedReadingTime ?? post.readTime
                return (
                  <RevealSection key={post._id ?? post.id} delay={i * 60}>
                    <Link href={`/writing/${pSlug}`} className="group block h-full">
                      <div className="bg-ink border border-ink-light rounded-sm p-5 h-full card-interactive">
                        <span className="badge badge-teal mb-3 block w-fit">{pCategory}</span>
                        <h3 className="font-display font-light text-text-primary text-base group-hover:text-gold-DEFAULT transition-colors duration-200">
                          {pTitle}
                        </h3>
                        <p className="font-mono text-xs text-text-muted mt-3">{pRead} min read</p>
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
