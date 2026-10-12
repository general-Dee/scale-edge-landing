import { CheckCircle2, ShoppingCart, Users, Bell, BarChart3 } from "lucide-react"
import { SnapshotCTAButton } from "@/components/SnapshotCTAButton"
import { snapshotOffer } from "@/lib/data"
import { FadeIn } from "@/components/FadeIn"

const pillars = [
  { icon: ShoppingCart, label: "Customer Ordering (fast)" },
  { icon: Users, label: "Staff Dashboard (simple)" },
  { icon: Bell, label: "WhatsApp Alerts" },
  { icon: BarChart3, label: "Daily Visibility" },
]

export function Solution() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-se-orange/10 px-4 py-2 rounded-full text-se-orange mb-6">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm font-medium">The {snapshotOffer.name}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-se-ink">
              A System That Improves Everyone’s Position — <span className="text-se-orange">Fast</span>
            </h2>
            <p className="text-se-muted-text text-lg mb-6">
              Dream outcome: orders stop getting lost and operations run without constant chasing. Likelihood is high because we’ve already built these systems for local businesses. Time to first win is days, not months. Effort is low — we handle setup and the retainer keeps it running.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Customer side that makes ordering or inquiring easy",
                "Staff dashboard that removes daily friction",
                "WhatsApp alerts so nothing falls through",
                "Monthly retainer so the system stays core to operations",
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
              What Changes Immediately
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
