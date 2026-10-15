import type { Metadata } from 'next'

export const landingMetadata: Metadata = {
  metadataBase: new URL('https://scale-edge.org'),
  title: 'Scale-Edge Marketing | Custom Business Systems Built Free, ₦300,000/month',
  description: 'We build your ordering site or business system free of charge, worth ₦10 million, and run your Meta ads for ₦300,000 a month. Live within two weeks.',
  openGraph: {
    title: 'Scale-Edge Marketing | Custom Business Systems Built Free, ₦300,000/month',
    description: 'We build your ordering site or business system free of charge, worth ₦10 million, and run your Meta ads for ₦300,000 a month. Live within two weeks.',
    url: 'https://scale-edge.org',
    siteName: 'Scale-Edge Marketing LTD',
    images: [{ url: 'https://scale-edge.org/og-image.png', width: 1200, height: 630, type: 'image/png', alt: 'Scale-Edge Marketing: Custom business systems built free, ₦300,000/month' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scale-Edge Marketing | Custom Business Systems Built Free, ₦300,000/month',
    description: 'We build your ordering site or business system free of charge, worth ₦10 million, and run your Meta ads for ₦300,000 a month. Live within two weeks.',
    images: [{ url: 'https://scale-edge.org/og-image.png', width: 1200, height: 630, type: 'image/png', alt: 'Scale-Edge Marketing: Custom business systems built free, ₦300,000/month' }],
  },
  robots: { index: true, follow: true },
}

// Separate viewport export for Next.js 14
export const viewport = {
  width: 'device-width',
  initialScale: 1,
}
