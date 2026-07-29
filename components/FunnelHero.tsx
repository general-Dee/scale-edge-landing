import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/FadeIn"
import { funnelEngineeringOffer } from "@/lib/data"

export function FunnelHero() {
  return (
    <section className="relative pt-20 pb-20 md:pt-24 md:pb-28">
      <div className="container-custom">
        <div className="text-xl font-bold tracking-tight text-se-ink mb-16">
          <span className="text-se-orange">Scale</span>
          <span>-Edge</span>
        </div>
        <FadeIn
          trigger="mount"
          duration={0.6}
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-6 text-se-ink">
            {funnelEngineeringOffer.name}: A Lead Funnel Built and Run For You
          </h1>
          <p className="text-lg md:text-xl text-se-muted-text mb-10 max-w-2xl leading-relaxed">
            {funnelEngineeringOffer.tagline}
          </p>
          <Button size="lg" asChild>
            <a href="#apply">Apply for a Call →</a>
          </Button>
          <p className="text-sm text-se-muted-text mt-3">
            An ongoing engagement — scope and fit discussed on the call.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
