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
            <span className="text-sm font-medium">Free Build + 30-Day Guarantee</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-se-ink">
            Built, Maintained, Marketed. <span className="text-se-orange">No Long-Term Lock-In.</span>
          </h2>
          <p className="text-se-muted-text mb-8 max-w-xl mx-auto">
            Your custom system (worth ₦10 million) is built completely free — no setup fee. Then{" "}
            {snapshotOffer.priceLabel} keeps it maintained and marketed with Meta ads. If it doesn&apos;t bring
            orders or enquiries within 30 days, we keep working at no extra cost. Cancel with
            30 days&apos; notice.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8 text-sm">
            <span className="flex items-center justify-center gap-2 text-se-ink">
              <CreditCard className="w-4 h-4 text-se-orange" /> No setup fee — built free
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
