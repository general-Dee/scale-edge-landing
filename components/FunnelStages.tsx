import { funnelEngineeringStages, funnelEngineeringIcons } from "@/lib/data"
import { FadeIn } from "@/components/FadeIn"

export function FunnelStages() {
  return (
    <section className="py-20 bg-se-surface border-y border-se-border">
      <div className="container-custom">
        <FadeIn className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-se-ink">
            How the <span className="text-se-orange">Engagement Works</span>
          </h2>
          <p className="text-se-muted-text">
            A four-stage cycle from mapping your funnel to running and reporting on it.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {funnelEngineeringStages.map((stage, idx) => {
            const Icon = funnelEngineeringIcons[idx]
            return (
              <FadeIn
                key={stage.step}
                delay={idx * 0.08}
                className="relative z-10"
              >
                <div className="bg-se-bg rounded-2xl p-6 text-center border border-se-border h-full">
                  <div className="w-12 h-12 rounded-full bg-se-orange/10 text-se-orange flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {stage.step}
                  </div>
                  <Icon className="w-8 h-8 text-se-orange mx-auto mb-3" />
                  <h3 className="text-lg font-bold mb-2 text-se-ink">{stage.title}</h3>
                  <p className="text-se-muted-text text-sm">{stage.description}</p>
                </div>
                {idx < funnelEngineeringStages.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-se-orange/30 -translate-y-1/2 z-0" />
                )}
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
