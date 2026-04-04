import type { Metadata } from 'next'
import './globals.css'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import CustomCursor from '@/components/CustomCursor'
import { siteConfig } from '@/lib/data'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | Joseph Aro — Geospatial Intelligence`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: 'Joseph Aro',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Joseph Aro — Geospatial Intelligence' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  authors: [{ name: 'Joseph Aro', url: siteConfig.url }],
  keywords: [
    'geospatial intelligence', 'remote sensing', 'GIS', 'earth observation',
    'UAV mapping', 'hydrography', 'drone mapping', 'spatial analytics',
    'geospatial consultant', 'environmental GIS', 'LiDAR', 'photogrammetry',
    'Joseph Aro',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Joseph Aro',
              url: siteConfig.url,
              email: siteConfig.email,
              jobTitle: 'Geospatial Intelligence Leader | Remote Sensing Specialist',
              description: siteConfig.description,
              sameAs: Object.values(siteConfig.social).filter(Boolean),
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] btn-primary"
        >
          Skip to main content
        </a>
        <CustomCursor />
        <SiteNav />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  )
}
