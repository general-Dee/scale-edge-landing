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
            Ready to Stop Losing Orders to <span className="text-se-orange">Chaos?</span>
          </h2>
          <p className="text-lg text-se-muted-text mb-8 max-w-2xl mx-auto">
            Get a system that handles daily operations for your shop, school, or agency. Setup once, then a monthly retainer keeps it running with support.
          </p>
          <div className="flex flex-col items-center gap-4">
            <SnapshotCTAButton size="lg" location="cta-block" />
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-se-muted-text">
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-se-orange" /> Setup + monthly retainer</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-se-orange" /> WhatsApp integrated</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-se-orange" /> Staff training included</span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
