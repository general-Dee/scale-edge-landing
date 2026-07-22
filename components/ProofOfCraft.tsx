import { Badge } from "@/components/ui/badge"
import { User, ThumbsUp, MessageCircle, Repeat2 } from "lucide-react"
import { samplePosts } from "@/lib/data"
import { FadeIn } from "@/components/FadeIn"

export function ProofOfCraft() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <FadeIn className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-se-ink">
            Proof of <span className="text-se-orange">Craft</span>
          </h2>
          <p className="text-se-muted-text">
            We&apos;re a new agency without a shelf of client case studies yet — so here&apos;s the writing
            itself. Sample posts illustrating our approach for a few of the industries we serve.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {samplePosts.map((post, idx) => (
            <FadeIn
              key={post.id}
              delay={idx * 0.1}
              className="bg-se-surface rounded-2xl border border-se-border overflow-hidden flex flex-col"
            >
              <div className="p-4 border-b border-se-border">
                <Badge variant="sample">{post.sampleLabel}</Badge>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-se-ink/5 border border-se-border flex items-center justify-center">
                    <User className="w-5 h-5 text-se-muted-text" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-se-ink">{post.vertical} Owner</div>
                    <div className="text-xs text-se-muted-text">1st • LinkedIn</div>
                  </div>
                </div>
                <p className="font-semibold text-se-ink mb-2">{post.hook}</p>
                <p className="text-sm text-se-muted-text whitespace-pre-line mb-4 flex-1">{post.body}</p>
                <div className="flex items-center gap-5 text-se-muted-text pt-3 border-t border-se-border text-xs">
                  <span className="flex items-center gap-1"><ThumbsUp className="w-3.5 h-3.5" /> Like</span>
                  <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" /> Comment</span>
                  <span className="flex items-center gap-1"><Repeat2 className="w-3.5 h-3.5" /> Repost</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}
