import type { Metadata } from 'next'

export const landingMetadata: Metadata = {
  title: 'Scale-Edge | Fix Leaking Sales Funnels → Free Audit',
  description: 'We fix leaking sales funnels so Meta ads convert. Book a free 30-min funnel audit. Most clients see 3.8x ROAS lift in 14 days.',
  openGraph: {
    title: 'Fix Your Leaking Sales Funnel (Free Audit)',
    description: 'Stop losing Meta ad leads. Get a done-for-you funnel fix that converts cold traffic into booked calls.',
    url: 'https://scale-edge.com',
    siteName: 'Scale-Edge Marketing LTD',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Scale-Edge Funnel Audit' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fix Leaking Sales Funnels',
    description: 'Free 30-min funnel audit. 120+ funnels fixed. 48hr go-live.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
}

// Separate viewport export for Next.js 14
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}
