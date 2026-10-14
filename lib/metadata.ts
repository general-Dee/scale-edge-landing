import type { Metadata } from 'next'

export const landingMetadata: Metadata = {
  metadataBase: new URL('https://scale-edge.org'),
  title: 'Scale-Edge | Business Systems from ₦250,000 Setup',
  description:
    'We build your business system, then maintain and market it under one monthly retainer. ₦250,000 setup, then ₦50,000/month for 3 months, then ₦75,000/month.',
  openGraph: {
    title: 'Scale-Edge | Business Systems from ₦250,000 Setup + Monthly Retainer',
    description:
      'Build + maintenance + marketing under one monthly fee — ₦250,000 setup, then ₦50,000/month for 3 months, then ₦75,000/month.',
    url: 'https://scale-edge.org',
    siteName: 'Scale-Edge Marketing LTD',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Scale-Edge Marketing LTD — Done-For-You LinkedIn Marketing' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scale-Edge | Business Systems from ₦250,000 Setup',
    description: 'Build + maintenance + marketing under one monthly retainer. ₦250,000 setup, then ₦50,000/month for 3 months, then ₦75,000/month.',
    images: ['/og-image.svg'],
  },
  robots: { index: true, follow: true },
}

// Separate viewport export for Next.js 14
export const viewport = {
  width: 'device-width',
  initialScale: 1,
}
