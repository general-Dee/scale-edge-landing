import { CheckCircle2, ShoppingCart, Users, Bell, BarChart3 } from "lucide-react"
import { SnapshotCTAButton } from "@/components/SnapshotCTAButton"
import { snapshotOffer } from "@/lib/data"
import { FadeIn } from "@/components/FadeIn"

const pillars = [
  { icon: ShoppingCart, label: "Customer Ordering / Inquiry" },
  { icon: Users, label: "Staff Dashboard & Till" },
  { icon: Bell, label: "WhatsApp Alerts" },
  { icon: BarChart3, label: "Daily Reports & Stock" },
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
              A System That Handles Daily Operations — <span className="text-se-orange">Not Just a Website</span>
            </h2>
            <p className="text-se-muted-text text-lg mb-6">
              Customers place orders or inquiries. Staff manage stock, till, and production. You get reports and WhatsApp alerts.
              Setup once, then a monthly retainer keeps everything running and supported.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Customer side for ordering or inquiries (web + mobile friendly)",
                "Staff dashboard for daily operations",
                "WhatsApp integration for alerts and updates",
                "Monthly retainer for hosting, updates, and support",
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
              What the System Covers
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
