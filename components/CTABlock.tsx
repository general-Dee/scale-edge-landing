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
            <span className="text-sm font-medium">Setup from {snapshotOffer.priceLabel}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-se-ink">
            Ready to Replace Chaos With a <span className="text-se-orange">System?</span>
          </h2>
          <p className="text-lg text-se-muted-text mb-8 max-w-2xl mx-auto">
            Skills get you the first customers. The system gets you leverage. We build it, then one monthly retainer keeps it maintained and marketed: ₦250,000 setup, ₦50,000/month for 3 months, then ₦75,000/month.
          </p>
          <div className="flex flex-col items-center gap-4">
            <SnapshotCTAButton size="lg" location="cta-block" />
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-se-muted-text">
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-se-orange" /> Build + maintenance + marketing</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-se-orange" /> Live in days</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-se-orange" /> Proof from local systems</span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
