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
      <p className="mb-7 text-[#C8C3BB] text-lg leading-[1.85]">{children}</p>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="font-display font-light text-text-primary mt-14 mb-5 leading-[1.15] tracking-[-0.02em]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="font-display italic text-text-primary mt-10 mb-4 leading-snug" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.45rem)', fontWeight: 400 }}>
        {children}
      </h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="font-mono text-[0.75rem] font-semibold tracking-[0.1em] uppercase text-gold-DEFAULT mt-8 mb-3">
        {children}
      </h4>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-2 border-gold-DEFAULT pl-7 my-10 font-display italic text-text-primary leading-[1.65]" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.45rem)', fontWeight: 300 }}>
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="mb-7 pl-5 space-y-2.5 list-disc marker:text-gold-DEFAULT text-[#C8C3BB] text-lg">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="mb-7 pl-5 space-y-2.5 list-decimal marker:text-gold-DEFAULT marker:font-mono marker:text-sm text-[#C8C3BB] text-lg">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => <li className="leading-[1.75]">{children}</li>,
    number: ({ children }: { children?: React.ReactNode }) => <li className="leading-[1.75]">{children}</li>,
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-text-primary">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic text-text-secondary">{children}</em>
    ),
    code: ({ children }: { children?: React.ReactNode }) => (
      <code className="font-mono text-[0.88em] text-teal-DEFAULT bg-teal-DEFAULT/[0.06] border border-teal-DEFAULT/20 px-[0.45em] py-[0.15em] rounded-[2px]">
        {children}
      </code>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    link: ({ value, children }: { value?: any; children?: React.ReactNode }) => (
      <a
        href={value?.href}
        target={value?.blank ? '_blank' : undefined}
        rel={value?.blank ? 'noopener noreferrer' : undefined}
        className="text-gold-DEFAULT underline underline-offset-[3px] decoration-gold-DEFAULT/40 hover:text-[#dabb67] hover:decoration-gold-DEFAULT/90 transition-colors duration-200"
      >
        {children}
      </a>
    ),
  },
  types: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: ({ value }: { value: any }) => {
      const builder = value?.asset ? urlFor(value) : null
      const src = builder ? builder.width(1200).url() : null
      if (!src) return null
      return (
        <figure className="my-12 -mx-0">
          <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-ink-mid border border-ink-light">
            <Image src={src} alt={value.alt || ''} fill className="object-cover" />
          </div>
          {value.caption && (
            <figcaption className="font-mono text-xs text-text-muted mt-3 text-center tracking-[0.03em]">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pullQuote: ({ value }: { value: any }) => (
      <div className="my-12 py-8 border-y border-gold-DEFAULT/20 relative">
        <div className="absolute top-0 left-0 w-16 h-[2px] bg-gold-DEFAULT" />
        <p className="font-display font-light text-text-primary leading-[1.5] italic" style={{ fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)' }}>
          &ldquo;{value.quote}&rdquo;
        </p>
        {value.attribution && (
          <p className="font-mono text-xs text-text-muted tracking-widest uppercase mt-4">
            — {value.attribution}
          </p>
        )}
      </div>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callout: ({ value }: { value: any }) => (
      <div className="my-8 p-6 bg-ink-mid border-l-2 border-teal-DEFAULT rounded-r-sm">
        <p className="text-[#C8C3BB] text-base leading-relaxed">{value.text}</p>
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
