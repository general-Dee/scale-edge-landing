"use client"

import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { SocialProofBar } from "@/components/SocialProofBar"
import { Problem } from "@/components/Problem"
import { Solution } from "@/components/Solution"
import { Services } from "@/components/Services"
import { Process } from "@/components/Process"
import { Testimonials } from "@/components/Testimonials"
import { Urgency } from "@/components/Urgency"
import { FAQ } from "@/components/FAQ"
import { CTABlock } from "@/components/CTABlock"
import { StickyMobileCTA } from "@/components/StickyMobileCTA"
import { Footer } from "@/components/Footer"
import { ExitIntentModal } from "@/components/ExitIntentModal"

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProofBar />
      <Problem />
      <Solution />
      <Services />
      <Process />
      <Testimonials />
      <Urgency />
      <FAQ />
      <CTABlock />
      <Footer />
      <StickyMobileCTA />
      <ExitIntentModal />
    </main>
  )
}
