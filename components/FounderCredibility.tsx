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
            <img
              src="/founder-damilare.webp"
              srcSet="/founder-damilare-300.webp 300w, /founder-damilare.webp 600w"
              sizes="128px"
              alt="Damilare Oshinowo, founder of Scale-Edge Marketing LTD"
              width={128}
              height={128}
              loading="lazy"
              decoding="async"
              className="w-32 h-32 rounded-full object-cover border-4 border-se-orange/20 shadow-sm"
            />
            <div className="text-xl font-bold text-se-ink">{founderBio.name}</div>
            <p className="text-se-muted-text max-w-xl">{founderBio.bio}</p>
            <p className="text-se-muted-text max-w-xl">{founderBio.work}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
