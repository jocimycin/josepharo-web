export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import RevealSection from '@/components/RevealSection'
import NewsletterForm from '@/components/NewsletterForm'
import WritingClientPage from '@/components/WritingClientPage'
import { articles } from '@/lib/data'
import { getAllPosts } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Field Notes',
  description:
    'Thoughts, methods, and observations from the intersection of geospatial intelligence, hydrography, earth observation, data systems, and strategic execution — by Joseph Aro.',
}

function normalise(post: any) {
  const isSanity = !!post._id
  return {
    id: post._id ?? post.id,
    slug: isSanity ? post.slug?.current : post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: isSanity ? post.category?.title : post.category,
    date: isSanity ? post.publishedAt : post.date,
    readTime: isSanity ? post.estimatedReadingTime : post.readTime,
    featured: isSanity ? post.featuredArticle : post.featured,
    coverUrl: isSanity && post.coverImage?.asset?.url ? post.coverImage.asset.url : (post.coverImage && !post.coverImage.startsWith('/images/blog-placeholder') ? post.coverImage : null),
    coverAlt: isSanity ? post.coverImage?.alt : null,
    hasBody: isSanity ? !!post.body : !!post.body,
  }
}

export default async function WritingPage() {
  // Fetch Sanity posts; always merge in static articles that aren't in Sanity yet
  let sanityPosts: any[] = []
  try {
    const fetched = await getAllPosts()
    if (fetched?.length) sanityPosts = fetched
  } catch {}

  const sanitySlugs = new Set(sanityPosts.map((p: any) => p.slug?.current))
  const staticFallbacks = articles.filter((a) => !sanitySlugs.has(a.slug))

  const posts = [...sanityPosts, ...staticFallbacks]
    .map(normalise)
    .filter((p) => p.slug && p.title)
    .sort((a, b) => new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime())

  const totalPublished = posts.length

  return (
    <>
      {/* ─── MASTHEAD ──────────────────────────────────────────── */}
      <section className="bg-ink pt-28 pb-0 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(201,168,76,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.18) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)',
            opacity: 0.035,
          }}
        />

        <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative">
          <RevealSection>
            <div className="flex items-center gap-2.5 mb-10">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-DEFAULT" />
              <p className="font-mono text-[0.65rem] text-gold-DEFAULT tracking-[0.22em] uppercase">
                Field Notes &amp; Intelligence
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-10 items-end pb-14">
              <div>
                <h1
                  className="font-display font-light text-text-primary leading-[1.05] tracking-[-0.025em] mb-7"
                  style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
                >
                  Thoughts<br />
                  from{' '}
                  <em className="italic text-text-secondary">the field.</em>
                </h1>
                <p className="text-text-secondary text-[1.05rem] md:text-lg leading-relaxed max-w-[520px]">
                  Methods, observations, and practical perspectives on geospatial
                  systems, hydrography, remote sensing, and data strategy — translating
                  complex spatial data into decisions that matter.
                </p>
              </div>

              <div className="hidden lg:flex flex-col gap-5 pb-1 self-end items-end text-right">
                <div>
                  <p className="font-mono text-[0.6rem] text-text-muted tracking-[0.18em] uppercase mb-1">Published</p>
                  <p className="font-display font-light text-text-primary" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)' }}>
                    {totalPublished}
                  </p>
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-gold-DEFAULT/30 via-gold-DEFAULT/10 to-transparent" />
          </RevealSection>
        </div>
      </section>

      {/* ─── ARTICLES (client — tabs + filtering) ──────────────── */}
      <WritingClientPage posts={posts} />

      {/* ─── SUBSCRIBE ─────────────────────────────────────────── */}
      <section className="bg-ink-mid border-t border-ink-light">
        <div className="max-w-[780px] mx-auto px-6 md:px-10 py-section text-center">
          <RevealSection>
            <p className="font-mono text-[0.62rem] text-gold-DEFAULT tracking-[0.22em] uppercase mb-7">Stay updated</p>
            <h2
              className="font-display font-light text-text-primary mb-4 leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.6rem)' }}
            >
              Geospatial insights<br />
              <em className="italic text-text-secondary">delivered direct.</em>
            </h2>
            <p className="text-text-secondary text-base mb-9 max-w-sm mx-auto leading-relaxed">
              No noise. When something worth reading is published — you&apos;ll get it.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm />
            </div>
            <p className="font-mono text-[0.62rem] text-text-muted mt-5 tracking-wide">
              No spam. Unsubscribe anytime.
            </p>
          </RevealSection>
        </div>
      </section>
    </>
  )
}
