import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const projectId = (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '').trim()
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = '2024-01-01'

// Only create the Sanity client when a real project ID is configured.
// This prevents build-time crashes when the env var is not yet set.
const isSanityConfigured = /^[a-z0-9-]+$/.test(projectId)

export const sanityClient = isSanityConfigured
  ? createClient({ projectId, dataset, apiVersion, useCdn: false })
  : null

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  if (!sanityClient) return { url: () => null }
  return imageUrlBuilder(sanityClient).image(source)
}

// ── GROQ Queries ────────────────────────────────────────────────

export const postFields = `
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  category->{title, slug},
  tags[]->{title, slug},
  estimatedReadingTime,
  coverImage { asset->{url}, alt },
  featuredArticle,
  crossPostLinks,
`

export async function getAllPosts() {
  if (!sanityClient) return []
  return sanityClient.fetch(
    `*[_type == "post" && status == "published"] | order(publishedAt desc) {
      ${postFields}
    }`
  )
}

export async function getFeaturedPost() {
  if (!sanityClient) return null
  return sanityClient.fetch(
    `*[_type == "post" && status == "published" && featuredArticle == true][0] {
      ${postFields}
      body
    }`
  )
}

export async function getPostBySlug(slug: string) {
  if (!sanityClient) return null
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug && status == "published"][0] {
      ${postFields}
      body,
      "relatedPosts": *[_type == "post" && status == "published" && slug.current != $slug && category->slug.current == ^.category->slug.current][0...3] {
        ${postFields}
      }
    }`,
    { slug }
  )
}

export async function getAllPostSlugs() {
  if (!sanityClient) return []
  return sanityClient.fetch(
    `*[_type == "post" && status == "published"] { "slug": slug.current }`
  )
}

export async function getCategories() {
  if (!sanityClient) return []
  return sanityClient.fetch(`*[_type == "category"] | order(title asc) { _id, title, slug }`)
}
