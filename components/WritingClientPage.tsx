'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Clock, Calendar } from 'lucide-react'
import RevealSection from '@/components/RevealSection'

type Post = {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: number | string | null
  featured: boolean
  coverUrl: string | null
  coverAlt: string | null
  hasBody: boolean
}

function fmt(date: string) {
  try {
    return new Date(date).toLocaleDateString('en-CA', { month: 'long', day: 'numeric', year: 'numeric' })
  } catch {
    return date
  }
}

function fmtShort(date: string) {
  try {
    return new Date(date).toLocaleDateString('en-CA', { month: 'short', year: 'numeric' })
  } catch {
    return date
  }
}

function FeaturedCard({ post }: { post: Post }) {
  return (
    <Link href={`/writing/${post.slug}`} className="group block cursor-pointer">
      <article className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] bg-ink-mid border border-ink-light rounded-sm overflow-hidden card-interactive">
        {/* Cover image */}
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[380px] overflow-hidden bg-ink">
          {post.coverUrl ? (
            <>
              <Image
                src={post.coverUrl}
                alt={post.coverAlt ?? post.title}
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
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="badge badge-teal">{post.category}</span>
            {post.date && (
              <span className="font-mono text-[0.68rem] text-text-muted">
                {fmt(post.date)}
              </span>
            )}
            {post.readTime && (
              <>
                <span className="w-px h-3 bg-ink-light" />
                <span className="font-mono text-[0.68rem] text-text-muted">
                  {post.readTime} min read
                </span>
              </>
            )}
            {!post.hasBody && (
              <span className="font-mono text-[0.65rem] text-gold-DEFAULT/60 border border-gold-DEFAULT/20 px-2 py-0.5 rounded-sm tracking-wide">
                Coming soon
              </span>
            )}
          </div>

          <h2
            className="font-display font-light text-text-primary leading-[1.15] tracking-[-0.015em] mb-5 group-hover:text-gold-DEFAULT transition-colors duration-300"
            style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)' }}
          >
            {post.title}
          </h2>

          <p className="text-text-secondary text-[0.95rem] leading-[1.75] mb-8 line-clamp-3">
            {post.excerpt}
          </p>

          {post.hasBody && (
            <div className="flex items-center gap-2 text-gold-DEFAULT text-sm font-medium group-hover:gap-3.5 transition-all duration-200">
              Read Essay <ArrowRight size={14} />
            </div>
          )}
        </div>
      </article>
    </Link>
  )
}

function ArticleCard({ post, delay = 0 }: { post: Post; delay?: number }) {
  return (
    <RevealSection delay={delay}>
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
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="badge badge-teal">{post.category}</span>
              {!post.hasBody && (
                <span className="font-mono text-[0.6rem] text-gold-DEFAULT/70 border border-gold-DEFAULT/20 bg-ink/60 px-1.5 py-0.5 rounded-sm">
                  Soon
                </span>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-center gap-2.5 mb-3">
              {post.date && (
                <span className="font-mono text-[0.65rem] text-text-muted flex items-center gap-1">
                  <Calendar size={9} />
                  {fmtShort(post.date)}
                </span>
              )}
              {post.readTime && (
                <>
                  <span className="w-px h-3 bg-ink-light flex-shrink-0" />
                  <span className="font-mono text-[0.65rem] text-text-muted flex items-center gap-1">
                    <Clock size={9} />
                    {post.readTime} min
                  </span>
                </>
              )}
            </div>

            <h2 className="font-display font-light text-text-primary text-[1.15rem] leading-[1.3] mb-2.5 group-hover:text-gold-DEFAULT transition-colors duration-200">
              {post.title}
            </h2>

            {post.excerpt && (
              <p className="text-text-muted text-[0.83rem] leading-relaxed line-clamp-2 mb-4">
                {post.excerpt}
              </p>
            )}

            <div className="flex items-center gap-1.5 text-text-muted text-[0.75rem] font-medium group-hover:text-gold-DEFAULT transition-colors duration-200 mt-auto pt-2">
              {post.hasBody ? (
                <>Read <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" /></>
              ) : (
                <span className="italic">Coming soon</span>
              )}
            </div>
          </div>
        </article>
      </Link>
    </RevealSection>
  )
}

export default function WritingClientPage({ posts }: { posts: Post[] }) {
  // Derive categories from actual posts
  const categories = ['All Topics', ...Array.from(new Set(posts.map((p) => p.category))).sort()]
  const [active, setActive] = useState('All Topics')

  const filtered = active === 'All Topics' ? posts : posts.filter((p) => p.category === active)
  const featured = filtered.find((p) => p.featured)
  const rest = filtered.filter((p) => !p.featured)

  return (
    <>
      {/* ─── CATEGORY TABS ──────────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 pt-10 pb-0">
        <div className="border-b border-ink-light">
          <nav className="flex flex-wrap gap-x-0 gap-y-0 -mb-px" role="navigation" aria-label="Article categories">
            {categories.map((cat) => {
              const isActive = cat === active
              const count = cat === 'All Topics'
                ? posts.length
                : posts.filter((p) => p.category === cat).length
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`relative pb-3 pt-1 px-4 mr-1 font-mono text-[0.65rem] tracking-[0.14em] uppercase transition-colors duration-150 cursor-pointer flex items-center gap-1.5 border-b-2 ${
                    isActive
                      ? 'text-gold-DEFAULT border-gold-DEFAULT'
                      : 'text-text-muted border-transparent hover:text-text-secondary hover:border-ink-light'
                  }`}
                >
                  {cat}
                  <span className={`text-[0.55rem] font-mono px-1 py-0.5 rounded ${isActive ? 'bg-gold-DEFAULT/15 text-gold-DEFAULT' : 'bg-ink-light/60 text-text-muted'}`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </nav>
        </div>
      </section>

      {/* ─── CONTENT ────────────────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 pt-10 pb-section">
        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-mono text-[0.7rem] text-text-muted tracking-widest uppercase">No articles yet</p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Featured card */}
            {featured && (
              <RevealSection>
                <div className="mb-2">
                  <div className="flex items-center gap-3 mb-6">
                    <p className="font-mono text-[0.62rem] text-gold-DEFAULT tracking-[0.2em] uppercase">
                      {active === 'All Topics' ? 'Featured Essay' : 'Featured'}
                    </p>
                    <div className="flex-1 h-px bg-ink-light max-w-16" />
                  </div>
                  <FeaturedCard post={featured} />
                </div>
              </RevealSection>
            )}

            {/* Rest of articles */}
            {rest.length > 0 && (
              <>
                {featured && (
                  <div className="flex items-center gap-3 pt-2">
                    <p className="font-mono text-[0.62rem] text-text-muted tracking-[0.2em] uppercase">
                      {active === 'All Topics' ? 'More Field Notes' : `All in ${active}`}
                    </p>
                    <div className="flex-1 h-px bg-ink-light/50 max-w-16" />
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {rest.map((post, i) => (
                    <ArticleCard key={post.id} post={post} delay={i * 70} />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </section>
    </>
  )
}
