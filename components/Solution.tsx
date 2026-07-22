import { CheckCircle2, PenLine, Send, Compass, BarChart3 } from "lucide-react"
import { SnapshotCTAButton } from "@/components/SnapshotCTAButton"
import { snapshotOffer } from "@/lib/data"
import { FadeIn } from "@/components/FadeIn"

const pillars = [
  { icon: PenLine, label: "Content & Ghostwriting" },
  { icon: Send, label: "Outbound & DM Lead Gen" },
  { icon: Compass, label: "Strategy & Positioning" },
  { icon: BarChart3, label: "Performance Reporting" },
]

export function Solution() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-se-orange/10 px-4 py-2 rounded-full text-se-orange mb-6">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm font-medium">The {snapshotOffer.priceLabel} {snapshotOffer.name}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-se-ink">
              A Full Picture of Your LinkedIn Presence — <span className="text-se-orange">Not a Guess</span>
            </h2>
            <p className="text-se-muted-text text-lg mb-6">
              Posting alone doesn&apos;t generate clients — and neither does guessing what to fix.
              The {snapshotOffer.name} looks at your content, outbound approach, positioning, and
              current results together, so you know exactly what&apos;s working and what&apos;s
              costing you leads.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "A single, one-time payment — no retainer, no subscription",
                "Reviewed across content, outbound, positioning, and reporting",
                "Delivered directly by the founder, not a junior account manager",
                "A live walkthrough call to go over the findings together",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-se-orange shrink-0" />
                  <span className="text-se-ink">{item}</span>
                </li>
              ))}
            </ul>
            <SnapshotCTAButton size="lg" location="solution" />
          </FadeIn>
          <FadeIn className="bg-se-surface rounded-3xl p-8 border border-se-border">
            <div className="text-sm font-semibold text-se-muted-text uppercase tracking-wide mb-6">
              What We Look At
            </div>
            <div className="space-y-4">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 bg-se-bg rounded-xl p-4 border border-se-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-se-orange/10 flex items-center justify-center shrink-0">
                    <pillar.icon className="w-5 h-5 text-se-orange" />
                  </div>
                  <span className="font-medium text-se-ink">{pillar.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
