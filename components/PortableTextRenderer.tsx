import { PortableText } from 'next-sanity'
import Image from 'next/image'
import { sanityClient } from '@/lib/sanity'
import imageUrlBuilder from '@sanity/image-url'

function urlFor(source: any) {
  if (!sanityClient) return null
  return imageUrlBuilder(sanityClient).image(source)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PortableTextValue = any[]

const components = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-5 text-text-secondary leading-relaxed">{children}</p>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="font-display font-light text-h3 text-text-primary mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="font-display font-light text-xl text-text-primary mt-8 mb-3">{children}</h3>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-2 border-gold-DEFAULT pl-5 my-8 italic text-text-secondary">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="mb-5 pl-5 space-y-2 list-disc marker:text-gold-DEFAULT text-text-secondary">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="mb-5 pl-5 space-y-2 list-decimal marker:text-gold-DEFAULT text-text-secondary">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }: { children?: React.ReactNode }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-text-primary">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => <em className="italic">{children}</em>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    link: ({ value, children }: { value?: any; children?: React.ReactNode }) => (
      <a
        href={value?.href}
        target={value?.blank ? '_blank' : undefined}
        rel={value?.blank ? 'noopener noreferrer' : undefined}
        className="text-gold-DEFAULT underline underline-offset-2 hover:text-gold-dim transition-colors duration-200"
      >
        {children}
      </a>
    ),
  },
  types: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: ({ value }: { value: any }) => {
      const builder = value?.asset ? urlFor(value) : null
      const src = builder ? builder.width(900).url() : null
      if (!src) return null
      return (
        <figure className="my-10">
          <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-ink-mid">
            <Image src={src} alt={value.alt || ''} fill className="object-cover" />
          </div>
          {value.caption && (
            <figcaption className="font-mono text-xs text-text-muted mt-3 text-center">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pullQuote: ({ value }: { value: any }) => (
      <div className="my-10 px-8 py-6 border-y border-gold-subtle">
        <p className="font-display font-light text-2xl text-text-primary leading-relaxed italic">
          &ldquo;{value.quote}&rdquo;
        </p>
      </div>
    ),
  },
}

export default function PortableTextRenderer({ value }: { value: PortableTextValue }) {
  return (
    <div className="prose-editorial">
      <PortableText value={value} components={components} />
    </div>
  )
}
