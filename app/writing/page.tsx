export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import RevealSection from '@/components/RevealSection'
import NewsletterForm from '@/components/NewsletterForm'
import { articles, blogCategories } from '@/lib/data'
import { getAllPosts, urlFor } from '@/lib/sanity'

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
    coverUrl: isSanity && post.coverImage?.asset?.url ? post.coverImage.asset.url : null,
    coverAlt: isSanity ? post.coverImage?.alt : null,
  }
}

export default async function WritingPage() {
  let rawPosts: any[] = []
  try {
    const fetched = await getAllPosts()
    if (fetched?.length) rawPosts = fetched
  } catch {}

  const posts = (rawPosts.length ? rawPosts : articles).map(normalise)
  const featured = posts.find((p) => p.featured)
  const rest = posts.filter((p) => !p.featured)

  return (
    <>
      {/* ─── MASTHEAD ──────────────────────────────────────────── */}
      <section className="bg-ink pt-28 pb-0 relative overflow-hidden">
        {/* Fine grid overlay */}
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
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-10">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-DEFAULT" />
              <p className="font-mono text-[0.65rem] text-gold-DEFAULT tracking-[0.22em] uppercase">
                Field Notes &amp; Intelligence
              </p>
            </div>

            {/* Two-column masthead */}
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

              {/* Stats column — desktop only */}
              <div className="hidden lg:flex flex-col gap-5 pb-1 self-end items-end text-right">
                <div>
                  <p className="font-mono text-[0.6rem] text-text-muted tracking-[0.18em] uppercase mb-1">
                    Topics
                  </p>
                  <p
                    className="font-display font-light text-text-primary"
                    style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)' }}
                  >
                    {blogCategories.length}
                  </p>
                </div>
                <div className="w-8 h-px bg-gold-DEFAULT/30" />
                <div>
                  <p className="font-mono text-[0.6rem] text-text-muted tracking-[0.18em] uppercase mb-1">
                    Published
                  </p>
                  <p
                    className="font-display font-light text-text-primary"
                    style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)' }}
                  >
                    {posts.length}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom rule */}
            <div className="h-px bg-gradient-to-r from-gold-DEFAULT/30 via-gold-DEFAULT/10 to-transparent" />
          </RevealSection>
        </div>
      </section>

      {/* ─── FEATURED ESSAY ────────────────────────────────────── */}
      {featured && (
        <section className="max-w-[1280px] mx-auto px-6 md:px-10 pt-14 pb-4">
          <RevealSection>
            {/* Section label */}
            <div className="flex items-center gap-3 mb-8">
              <p className="font-mono text-[0.62rem] text-gold-DEFAULT tracking-[0.2em] uppercase">
                Featured Essay
              </p>
              <div className="flex-1 h-px bg-ink-light max-w-16" />
            </div>

            <Link href={`/writing/${featured.slug}`} className="group block cursor-pointer">
              <article className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] bg-ink-mid border border-ink-light rounded-sm overflow-hidden card-interactive">

                {/* Cover image */}
                <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[380px] overflow-hidden bg-ink">
                  {featured.coverUrl ? (
                    <>
                      <Image
                        src={featured.coverUrl}
                        alt={featured.coverAlt ?? featured.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-[1.03]"
                        style={{ opacity: 0.75 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-ink-mid/70 hidden lg:block" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-mid/70 via-transparent to-transparent lg:hidden" />
                    </>
                  ) : (
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-gold-DEFAULT/[0.08] via-ink to-teal-DEFAULT/[0.06]" />
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            'repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(201,168,76,0.06) 20px, rgba(201,168,76,0.06) 21px)',
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="badge badge-teal">{featured.category}</span>
                    {featured.date && (
                      <span className="font-mono text-[0.68rem] text-text-muted">
                        {new Date(featured.date).toLocaleDateString('en-CA', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    )}
                    {featured.readTime && (
                      <>
                        <span className="w-px h-3 bg-ink-light" />
                        <span className="font-mono text-[0.68rem] text-text-muted">
                          {featured.readTime} min read
                        </span>
                      </>
                    )}
                  </div>

                  <h2
                    className="font-display font-light text-text-primary leading-[1.15] tracking-[-0.015em] mb-5 group-hover:text-gold-DEFAULT transition-colors duration-300"
                    style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)' }}
                  >
                    {featured.title}
                  </h2>

                  <p className="text-text-secondary text-[0.95rem] leading-[1.75] mb-8 line-clamp-3">
                    {featured.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-gold-DEFAULT text-sm font-medium group-hover:gap-3.5 transition-all duration-200">
                    Read Essay <ArrowRight size={14} />
                  </div>
                </div>
              </article>
            </Link>
          </RevealSection>
        </section>
      )}

      {/* ─── CATEGORY NAV ──────────────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 pt-10 pb-0">
        <div className="border-b border-ink-light">
          <nav
            className="flex flex-wrap gap-x-8 gap-y-0"
            role="navigation"
            aria-label="Blog categories"
          >
            {/* All Topics tab — active state */}
            <div className="relative pb-3 -mb-px border-b-2 border-gold-DEFAULT">
              <button className="font-mono text-[0.65rem] tracking-[0.14em] uppercase text-gold-DEFAULT cursor-pointer">
                All Topics
              </button>
            </div>

            {blogCategories.map((cat) => (
              <div key={cat} className="relative pb-3 -mb-px border-b-2 border-transparent hover:border-ink-light transition-colors duration-150">
                <button className="font-mono text-[0.65rem] tracking-[0.14em] uppercase text-text-muted hover:text-text-secondary transition-colors duration-150 cursor-pointer">
                  {cat}
                </button>
              </div>
            ))}
          </nav>
        </div>
      </section>

      {/* ─── ARTICLE GRID ──────────────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 pt-10 pb-section">
        {rest.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post, i) => (
              <RevealSection key={post.id} delay={i * 70}>
                <Link href={`/writing/${post.slug}`} className="group block h-full cursor-pointer">
                  <article className="bg-ink-mid border border-ink-light rounded-sm overflow-hidden h-full flex flex-col card-interactive">
                    {/* Cover */}
                    <div className="relative overflow-hidden bg-ink flex-shrink-0" style={{ aspectRatio: '16/9' }}>
                      {post.coverUrl ? (
                        <Image
                          src={post.coverUrl}
                          alt={post.coverAlt ?? post.title}
                          fill
                          className="object-cover transition-all duration-500 group-hover:scale-[1.04]"
                          style={{ opacity: 0.7 }}
                        />
                      ) : (
                        <div className="absolute inset-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-gold-DEFAULT/[0.06] via-ink to-teal-DEFAULT/[0.04]" />
                          <div
                            className="absolute inset-0"
                            style={{
                              backgroundImage:
                                'repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(201,168,76,0.04) 12px, rgba(201,168,76,0.04) 13px)',
                            }}
                          />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-mid via-transparent to-transparent opacity-80" />
                      <div className="absolute top-4 left-4">
                        <span className="badge badge-teal">{post.category}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2.5 mb-4">
                        {post.date && (
                          <span className="font-mono text-[0.65rem] text-text-muted">
                            {new Date(post.date).toLocaleDateString('en-CA', {
                              month: 'short',
                              year: 'numeric',
                            })}
                          </span>
                        )}
                        {post.readTime && (
                          <>
                            <span className="w-px h-3 bg-ink-light flex-shrink-0" />
                            <span className="font-mono text-[0.65rem] text-text-muted">
                              {post.readTime} min
                            </span>
                          </>
                        )}
                      </div>

                      <h2 className="font-display font-light text-text-primary text-[1.1rem] leading-[1.35] mb-3 group-hover:text-gold-DEFAULT transition-colors duration-200 flex-1">
                        {post.title}
                      </h2>

                      {post.excerpt && (
                        <p className="text-text-muted text-[0.85rem] leading-relaxed line-clamp-2 mb-5">
                          {post.excerpt}
                        </p>
                      )}

                      <div className="flex items-center gap-1.5 text-text-muted text-[0.75rem] font-medium group-hover:text-gold-DEFAULT transition-colors duration-200 mt-auto">
                        <span>Read</span>
                        <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                      </div>
                    </div>
                  </article>
                </Link>
              </RevealSection>
            ))}
          </div>
        ) : (
          <RevealSection>
            {/* Editorial empty state */}
            <div className="py-28 flex flex-col items-center text-center relative">
              {/* Decorative cross-hairs */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent to-gold-DEFAULT/30" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-t from-transparent to-gold-DEFAULT/30" />

              <div className="mb-8 relative">
                <div className="w-14 h-14 rounded-full border border-gold-DEFAULT/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-DEFAULT/60" />
                </div>
              </div>

              <p className="font-mono text-[0.62rem] text-gold-DEFAULT tracking-[0.22em] uppercase mb-5">
                Coming Soon
              </p>
              <h2
                className="font-display font-light text-text-primary mb-4 leading-[1.1] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
              >
                Essays are on their way.
              </h2>
              <p className="text-text-secondary text-[0.95rem] max-w-[380px] leading-relaxed mb-10">
                Subscribe to be notified when the first field notes and geospatial essays are published.
              </p>
              <div className="w-8 h-px bg-gold-DEFAULT/30" />
            </div>
          </RevealSection>
        )}
      </section>

      {/* ─── SUBSCRIBE ─────────────────────────────────────────── */}
      <section className="bg-ink-mid border-t border-ink-light">
        <div className="max-w-[780px] mx-auto px-6 md:px-10 py-section text-center">
          <RevealSection>
            <p className="font-mono text-[0.62rem] text-gold-DEFAULT tracking-[0.22em] uppercase mb-7">
              Stay updated
            </p>
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
