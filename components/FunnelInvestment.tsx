import { Button } from "@/components/ui/button"
import { HeartHandshake } from "lucide-react"
import { funnelEngineeringPricingNote } from "@/lib/data"
import { FadeIn } from "@/components/FadeIn"

export function FunnelInvestment() {
  return (
    <section className="py-16">
      <div className="container-custom">
        <FadeIn className="max-w-3xl mx-auto text-center bg-se-surface rounded-3xl p-8 md:p-12 border border-se-border">
          <div className="inline-flex items-center gap-2 bg-se-orange/10 px-4 py-2 rounded-full text-se-orange mb-6">
            <HeartHandshake className="w-4 h-4" />
            <span className="text-sm font-medium">Ongoing Retainer</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-se-ink">
            The <span className="text-se-orange">Investment</span>
          </h2>
          <p className="text-se-muted-text mb-8 max-w-xl mx-auto">
            {funnelEngineeringPricingNote}
          </p>
          <Button size="lg" asChild>
            <a href="#apply">Apply for a Call →</a>
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
