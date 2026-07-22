import { Tag, CheckCircle } from "lucide-react"
import { SnapshotCTAButton } from "@/components/SnapshotCTAButton"
import { snapshotOffer } from "@/lib/data"
import { FadeIn } from "@/components/FadeIn"

export function CTABlock() {
  return (
    <section className="py-20 border-y border-se-border bg-se-surface">
      <div className="container-custom">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-se-orange/10 px-4 py-2 rounded-full text-se-orange mb-6">
            <Tag className="w-4 h-4" />
            <span className="text-sm font-medium">{snapshotOffer.priceLabel} One-Time</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-se-ink">
            Ready to See What&apos;s Actually Costing You <span className="text-se-orange">Leads?</span>
          </h2>
          <p className="text-lg text-se-muted-text mb-8 max-w-2xl mx-auto">
            No pitch deck, no cold call. Get a straight, one-time look at your LinkedIn presence
            for {snapshotOffer.priceLabel} — and decide from there whether more support makes sense.
          </p>
          <div className="flex flex-col items-center gap-4">
            <SnapshotCTAButton size="lg" location="cta-block" />
            <a href="#email-capture" className="text-sm text-se-muted-text underline underline-offset-4 hover:text-se-orange">
              Not ready to buy yet? Get the free LinkedIn Content Checklist instead →
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-se-muted-text">
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-se-orange" /> One-time payment</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-se-orange" /> No subscription</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-se-orange" /> Personal walkthrough call</span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
