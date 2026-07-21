"use client"

import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { SocialProofBar } from "@/components/SocialProofBar"
import { Problem } from "@/components/Problem"
import { Solution } from "@/components/Solution"
// FounderCredibility is temporarily hidden until real founder name/bio/LinkedIn
// content replaces the TBD placeholders in lib/data.ts.
// import { FounderCredibility } from "@/components/FounderCredibility"
import { Services } from "@/components/Services"
import { Process } from "@/components/Process"
import { ProofOfCraft } from "@/components/ProofOfCraft"
import { EmailCaptureSection } from "@/components/EmailCaptureSection"
import { GuaranteeRiskReversal } from "@/components/GuaranteeRiskReversal"
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
      {/* <FounderCredibility /> */}
      <Services />
      <Process />
      <ProofOfCraft />
      <EmailCaptureSection />
      <GuaranteeRiskReversal />
      <FAQ />
      <CTABlock />
      <Footer />
      <StickyMobileCTA />
      <ExitIntentModal />
    </main>
  )
}
