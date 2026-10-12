import { Users } from "lucide-react"
import { SnapshotCTAButton } from "@/components/SnapshotCTAButton"
import { FadeIn } from "@/components/FadeIn"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-custom">
        <FadeIn
          trigger="mount"
          duration={0.6}
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-6 text-se-ink">
            Digital Systems That Run Your Business Every Day
          </h1>
          <p className="text-lg md:text-xl text-se-muted-text mb-6 max-w-2xl leading-relaxed">
            Ready web + mobile systems for Nigerian shops, schools, furniture sellers, and real estate agencies.
            Customers order or inquire. Staff manage everything. You get steady operations without the chaos.
          </p>
          <p className="text-base md:text-lg text-se-ink font-medium mb-10">
            Setup + monthly retainer — <span className="text-se-orange">so the system stays running and supported.</span>
          </p>
          <SnapshotCTAButton size="lg" location="hero" />
          <p className="text-sm text-se-muted-text mt-3">Start with a discovery call. No long contracts.</p>
          <a
            href="#email-capture"
            className="text-sm text-se-muted-text hover:text-se-orange mt-4 underline underline-offset-4"
          >
            Not ready? Get the free readiness checklist →
          </a>
          <div className="flex items-center gap-2 mt-10 text-sm text-se-muted-text">
            <Users className="w-4 h-4 text-se-orange" />
            <span>Built for local Nigerian businesses that need daily operational systems.</span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
