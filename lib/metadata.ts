import type { Metadata } from 'next'

export const landingMetadata: Metadata = {
  metadataBase: new URL('https://scale-edge.com'),
  title: 'Scale-Edge | $147 Growth Snapshot — Done-For-You LinkedIn Audit for Local Service Businesses',
  description:
    'A one-time, done-for-you audit of your LinkedIn presence for real estate agents, dentists, contractors, and law firms — what’s working, what’s costing you leads, and what to fix first. $147 one-time, no subscription.',
  openGraph: {
    title: 'The $147 Growth Snapshot — Done-For-You LinkedIn Audit for Business Owners Who Don’t Have Time to Post',
    description:
      'A one-time LinkedIn audit — what’s working, what’s costing you leads, and what to fix first — built for real estate agents, dental practices, contractors, and law firms. No subscription, no long-term contract.',
    url: 'https://scale-edge.com',
    siteName: 'Scale-Edge Marketing LTD',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Scale-Edge Marketing LTD — Done-For-You LinkedIn Marketing' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The $147 Growth Snapshot — Done-For-You LinkedIn Audit for Local Service Businesses',
    description: 'A one-time, done-for-you LinkedIn audit — no subscription, no long-term contract.',
    images: ['/og-image.svg'],
  },
  robots: { index: true, follow: true },
}

// Separate viewport export for Next.js 14
export const viewport = {
  width: 'device-width',
  initialScale: 1,
}
