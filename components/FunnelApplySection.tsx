import { EmailCapture } from "@/components/EmailCapture"
import { funnelEngineeringOffer } from "@/lib/data"
import { FadeIn } from "@/components/FadeIn"

export function FunnelApplySection() {
  return (
    <section id="apply" className="py-16 bg-se-bg scroll-mt-24">
      <div className="container-custom">
        <FadeIn className="max-w-2xl mx-auto text-center bg-se-surface rounded-3xl border border-se-border p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-se-ink">
            Apply for {funnelEngineeringOffer.name}
          </h2>
          <p className="text-se-muted-text mb-6">
            Tell us your email and we&apos;ll follow up to schedule a call and see if this is a good fit for your business.
          </p>
          <EmailCapture
            source="funnel-engineering-apply"
            className="max-w-md mx-auto text-left"
            submitLabel="Apply Now"
            successMessage="We've got your details — we'll follow up to schedule a call."
            privacyNote="We'll only use your email to follow up about this application. Unsubscribe anytime."
          />
        </FadeIn>
      </div>
    </section>
  )
}
