import { Users } from "lucide-react"
import { SnapshotCTAButton } from "@/components/SnapshotCTAButton"
import { FadeIn } from "@/components/FadeIn"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-custom">
        <FadeIn
          trigger="mount"
          duration={0.6}
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-6 text-se-ink">
            Stop Losing Orders to WhatsApp Chaos
          </h1>
          <p className="text-lg md:text-xl text-se-muted-text mb-6 max-w-2xl leading-relaxed">
            A done-for-you operational system for Nigerian shops, schools and sellers. Customers order. Staff manage stock and till. You get daily visibility.
            Live within two weeks.
          </p>
          <p className="text-base md:text-lg text-se-ink font-medium mb-10">
            Your custom system (worth ₦10 million) built completely free — no setup fee. Then ₦300,000/month for maintenance and Meta-ads marketing. <a href="/whats_included.html" className="underline">See what&apos;s included</a> — <span className="text-se-orange">skills create the cash flow, the system creates the scale.</span>
          </p>
          <SnapshotCTAButton size="lg" location="hero" />
          <p className="text-sm text-se-muted-text mt-3">Discovery call first. Proof from systems already built for local businesses.</p>
          <a
            href="#email-capture"
            className="text-sm text-se-muted-text hover:text-se-orange mt-4 underline underline-offset-4"
          >
            Not ready? Get the free chaos checklist →
          </a>
          <div className="flex items-center gap-2 mt-10 text-sm text-se-muted-text">
            <Users className="w-4 h-4 text-se-orange" />
            <span>Built for the real economy — where broken daily processes cost real money.</span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
