import type { Metadata } from "next"
import { FunnelHero } from "@/components/FunnelHero"
import { FunnelStages } from "@/components/FunnelStages"
import { FunnelInvestment } from "@/components/FunnelInvestment"
import { FunnelFAQ } from "@/components/FunnelFAQ"
import { FunnelApplySection } from "@/components/FunnelApplySection"
import { FunnelFooter } from "@/components/FunnelFooter"

export const metadata: Metadata = {
  title: "Scale-Edge | Digital Funnel Engineering — Done-For-You Lead Funnels for Local Service Businesses",
  description:
    "An ongoing, done-for-you build-and-run engagement for local service businesses who want a real lead funnel — pages, follow-up, and reporting — behind their presence.",
  openGraph: {
    title: "Digital Funnel Engineering — Done-For-You Lead Funnels",
    description:
      "An ongoing, done-for-you build-and-run engagement for local service businesses who want a real lead funnel behind their presence, not just more posts.",
    url: "https://scale-edge.com/funnel-engineering",
    siteName: "Scale-Edge Marketing LTD",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Scale-Edge Marketing LTD — Digital Funnel Engineering" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Funnel Engineering — Done-For-You Lead Funnels",
    description:
      "An ongoing, done-for-you build-and-run engagement for local service businesses who want a real lead funnel behind their presence.",
    images: ["/og-image.svg"],
  },
  robots: { index: true, follow: true },
}

export default function FunnelEngineeringPage() {
  return (
    <main className="relative overflow-x-hidden">
      <FunnelHero />
      <FunnelStages />
      <FunnelInvestment />
      <FunnelFAQ />
      <FunnelApplySection />
      <FunnelFooter />
    </main>
  )
}
