import { CreditCard, ShieldCheck, XCircle } from "lucide-react"
import { SnapshotCTAButton } from "@/components/SnapshotCTAButton"
import { snapshotOffer } from "@/lib/data"
import { FadeIn } from "@/components/FadeIn"

export function GuaranteeRiskReversal() {
  return (
    <section className="py-16 bg-se-surface border-y border-se-border">
      <div className="container-custom">
        <FadeIn className="max-w-3xl mx-auto text-center bg-se-bg rounded-3xl p-8 md:p-12 border border-se-border">
          <div className="inline-flex items-center gap-2 bg-se-orange/10 px-4 py-2 rounded-full text-se-orange mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-sm font-medium">Setup + Monthly Retainer</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-se-ink">
            Built, Maintained, Marketed. <span className="text-se-orange">No Long-Term Lock-In.</span>
          </h2>
          <p className="text-se-muted-text mb-8 max-w-xl mx-auto">
            {snapshotOffer.priceLabel} setup, then a monthly retainer that keeps your system
            maintained and marketed — ₦50,000/month for the first 3 months, then ₦75,000/month.
            You&apos;re never paying once and being left alone, and you can cancel the retainer
            with 30 days notice.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8 text-sm">
            <span className="flex items-center justify-center gap-2 text-se-ink">
              <CreditCard className="w-4 h-4 text-se-orange" /> One-time setup fee
            </span>
            <span className="flex items-center justify-center gap-2 text-se-ink">
              <XCircle className="w-4 h-4 text-se-orange" /> Cancel with 30 days notice
            </span>
            <span className="flex items-center justify-center gap-2 text-se-ink">
              <ShieldCheck className="w-4 h-4 text-se-orange" /> No cold sales pitch
            </span>
          </div>
          <SnapshotCTAButton size="lg" location="guarantee" />
        </FadeIn>
      </div>
    </section>
  )
}
