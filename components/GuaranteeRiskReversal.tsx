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
            <span className="text-sm font-medium">One-Time Payment</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-se-ink">
            No Subscription. <span className="text-se-orange">No Long-Term Commitment.</span>
          </h2>
          <p className="text-se-muted-text mb-8 max-w-xl mx-auto">
            The {snapshotOffer.name} is a single {snapshotOffer.priceLabel} payment — not a
            subscription, not a retainer. You get the full audit and a walkthrough call, and if
            ongoing support makes sense for your business, we&apos;ll talk about it after you&apos;ve
            seen the value — not before.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8 text-sm">
            <span className="flex items-center justify-center gap-2 text-se-ink">
              <CreditCard className="w-4 h-4 text-se-orange" /> One-time payment
            </span>
            <span className="flex items-center justify-center gap-2 text-se-ink">
              <XCircle className="w-4 h-4 text-se-orange" /> No subscription
            </span>
            <span className="flex items-center justify-center gap-2 text-se-ink">
              <ShieldCheck className="w-4 h-4 text-se-orange" /> No cold sales pitch
            </span>
          </div>
          <SnapshotCTAButton size="lg" location="guarantee" />
          <p className="text-sm text-se-muted-text mt-3">
            Not ready yet?{" "}
            <a href="#email-capture" className="text-se-orange underline underline-offset-4">
              Get the free LinkedIn Content Checklist instead →
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
