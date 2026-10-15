import { User } from "lucide-react"
import { founderBio } from "@/lib/data"
import { FadeIn } from "@/components/FadeIn"

export function FounderCredibility() {
  return (
    <section id="founder-credibility" className="py-20 bg-se-surface border-y border-se-border">
      <div className="container-custom">
        <FadeIn className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-se-ink">
            Meet the Founder
          </h2>
          <p className="text-se-muted-text text-lg mb-10">
            Scale-Edge Marketing LTD builds and runs business systems for local businesses in Nigeria.
          </p>

          <div className="flex flex-col items-center gap-4 bg-se-bg rounded-2xl border border-dashed border-se-border p-8">
            <div className="w-24 h-24 rounded-full bg-se-ink/5 border border-se-border flex items-center justify-center">
              <User className="w-10 h-10 text-se-muted-text" />
            </div>
            <div className="text-xl font-bold text-se-ink">{founderBio.name}</div>
            <p className="text-se-muted-text max-w-xl">{founderBio.bio}</p>
            <p className="text-se-muted-text max-w-xl">{founderBio.work}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
