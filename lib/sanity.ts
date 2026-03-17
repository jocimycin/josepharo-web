import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'PLACEHOLDER'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = '2024-01-01'

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

const builder = imageUrlBuilder(sanityClient)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source)
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
`

export async function getAllPosts() {
  return sanityClient.fetch(
    `*[_type == "post" && status == "published"] | order(publishedAt desc) {
      ${postFields}
    }`
  )
}

export async function getFeaturedPost() {
  return sanityClient.fetch(
    `*[_type == "post" && status == "published" && featuredArticle == true][0] {
      ${postFields}
      body
    }`
  )
}

export async function getPostBySlug(slug: string) {
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
  return sanityClient.fetch(
    `*[_type == "post" && status == "published"] { "slug": slug.current }`
  )
}

export async function getCategories() {
  return sanityClient.fetch(`*[_type == "category"] | order(title asc) { _id, title, slug }`)
}
