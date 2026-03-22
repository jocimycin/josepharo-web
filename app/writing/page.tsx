export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import RevealSection from '@/components/RevealSection'
import NewsletterForm from '@/components/NewsletterForm'
import { articles, blogCategories } from '@/lib/data'
import { getAllPosts, urlFor } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Field Notes',
  description:
    'Thoughts, methods, and observations from the intersection of geospatial intelligence, hydrography, earth observation, data systems, and strategic execution — by Joseph Aro.',
}

// Normalise a Sanity post or a static article into one shape
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
  // Try Sanity; silently fall back to static data
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
      {/* Header */}
      <section className="bg-ink pt-28 pb-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <RevealSection>
            <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-5">Field Notes & Intelligence</p>
            <h1 className="font-display font-light text-h1 text-text-primary mb-6 max-w-2xl">
              Thoughts from the field.
            </h1>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl">
              Methods, observations, and practical perspectives on geospatial systems, hydrography, remote sensing, data strategy, and the translation of complex spatial data into real-world decisions.
            </p>
          </RevealSection>
        </div>
      </section>

      <div className="signal-divider" />

      {/* Featured article */}
      {featured && (
        <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-12">
          <RevealSection>
            <p className="font-mono text-xs text-gold-DEFAULT tracking-widest uppercase mb-6">Featured</p>
            <Link href={`/writing/${featured.slug}`} className="group block">
              <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-ink-mid border border-ink-light rounded-sm overflow-hidden card-interactive">
                {/* Cover image */}
                <div className="relative aspect-video lg:aspect-auto min-h-[240px] bg-gradient-to-br from-ink-light to-ink overflow-hidden">
                  {featured.coverUrl ? (
                    <Image src={featured.coverUrl} alt={featured.coverAlt ?? featured.title} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink-mid/60" />
                </div>
                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="badge badge-teal">{featured.category}</span>
                    <span className="font-mono text-xs text-text-muted">
                      {featured.date ? new Date(featured.date).toLocaleDateString('en-CA', { month: 'long', day: 'numeric', year: 'numeric' }) : ''}
                    </span>
                    <span className="font-mono text-xs text-text-muted">{featured.readTime} min read</span>
                  </div>
                  <h2 className="font-display font-light text-text-primary text-2xl md:text-3xl mb-4 leading-tight group-hover:text-gold-DEFAULT transition-colors duration-200">
                    {featured.title}
                  </h2>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-gold-DEFAULT text-sm font-medium">
                    Read Essay <ArrowRight size={15} />
                  </span>
                </div>
              </article>
            </Link>
          </RevealSection>
        </section>
      )}

      {/* Category filter */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-6">
        <div className="flex flex-wrap gap-2" role="navigation" aria-label="Blog categories">
          <span className="badge badge-gold cursor-default">All Topics</span>
          {blogCategories.map((cat) => (
            <span key={cat} className="badge badge-default cursor-default">{cat}</span>
          ))}
        </div>
      </section>

      {/* Article grid */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 pb-section">
        {rest.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post, i) => (
              <RevealSection key={post.id} delay={i * 60}>
                <Link href={`/writing/${post.slug}`} className="group block h-full">
                  <article className="bg-ink-mid border border-ink-light rounded-sm overflow-hidden h-full card-interactive">
                    {/* Cover */}
                    <div className="relative aspect-video bg-gradient-to-br from-ink-light to-ink overflow-hidden">
                      {post.coverUrl && (
                        <Image src={post.coverUrl} alt={post.coverAlt ?? post.title} fill className="object-cover opacity-75 group-hover:opacity-90 transition-opacity duration-300" />
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="badge badge-teal">{post.category}</span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-xs text-text-muted">
                          {post.date ? new Date(post.date).toLocaleDateString('en-CA', { month: 'short', year: 'numeric' }) : ''}
                        </span>
                        <span className="font-mono text-xs text-text-muted">{post.readTime} min</span>
                      </div>
                      <h2 className="font-display font-light text-text-primary text-lg mb-3 leading-tight group-hover:text-gold-DEFAULT transition-colors duration-200">
                        {post.title}
                      </h2>
                      <p className="text-text-muted text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                    </div>
                  </article>
                </Link>
              </RevealSection>
            ))}
          </div>
        ) : (
          <RevealSection>
            <div className="py-20 text-center">
              <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-4">Coming soon</p>
              <h2 className="font-display font-light text-h3 text-text-primary mb-4">Articles are on their way.</h2>
              <p className="text-text-secondary text-sm max-w-md mx-auto mb-8">
                Subscribe to be notified when the first essays and field notes are published.
              </p>
            </div>
          </RevealSection>
        )}
      </section>

      {/* Subscribe section */}
      <section className="bg-ink-mid border-t border-ink-light">
        <div className="max-w-[760px] mx-auto px-6 md:px-10 py-section text-center">
          <RevealSection>
            <p className="font-mono text-xs text-gold-DEFAULT tracking-widest uppercase mb-4">Stay updated</p>
            <h2 className="font-display font-light text-h2 text-text-primary mb-4">
              Geospatial insights delivered direct.
            </h2>
            <p className="text-text-secondary text-base mb-8">
              No noise. When something worth reading is published — you&apos;ll get it.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm />
            </div>
            <p className="font-mono text-xs text-text-muted mt-4">No spam. Unsubscribe anytime.</p>
          </RevealSection>
        </div>
      </section>
    </>
  )
}
