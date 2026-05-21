import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { cn } from '@/utils/cn'
import { landingMetadata, viewport as viewportConfig } from '@/lib/metadata'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
})

export const metadata: Metadata = landingMetadata
export const viewport: Viewport = viewportConfig

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(plusJakarta.variable, "bg-se-dark text-white antialiased")}>
        {children}
      </body>
    </html>
  )
}
