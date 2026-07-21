import type { Metadata } from 'next'

export const landingMetadata: Metadata = {
  metadataBase: new URL('https://scale-edge.com'),
  title: 'Scale-Edge | Done-For-You LinkedIn Marketing for Local Service Businesses',
  description:
    'Done-for-you LinkedIn content, outbound lead gen, and strategy for real estate agents, dentists, contractors, and law firms. Month-to-month, no long-term contract.',
  openGraph: {
    title: 'Done-For-You LinkedIn Marketing for Business Owners Who Don’t Have Time to Post',
    description:
      'Content, outbound DM lead gen, strategy, and reporting — built for real estate agents, dental practices, contractors, and law firms.',
    url: 'https://scale-edge.com',
    siteName: 'Scale-Edge Marketing LTD',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Scale-Edge Marketing LTD — Done-For-You LinkedIn Marketing' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Done-For-You LinkedIn Marketing for Local Service Businesses',
    description: 'Content, outbound lead gen, and strategy — month-to-month, no long-term contract.',
    images: ['/og-image.svg'],
  },
  robots: { index: true, follow: true },
}

// Separate viewport export for Next.js 14
export const viewport = {
  width: 'device-width',
  initialScale: 1,
}
