"use client"

import { motion } from "framer-motion"
import { User, Linkedin } from "lucide-react"
import { founderBio } from "@/lib/data"

export function FounderCredibility() {
  return (
    <section id="founder-credibility" className="py-20 bg-se-surface border-y border-se-border">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-se-ink">
            See the Exact Kind of Content We Write
          </h2>
          <p className="text-se-muted-text text-lg mb-10">
            This is our founder&apos;s own LinkedIn — the same voice, strategy, and consistency we bring to your account.
          </p>

          <div className="flex flex-col items-center gap-4 bg-se-bg rounded-2xl border border-dashed border-se-border p-8">
            <div className="w-24 h-24 rounded-full bg-se-ink/5 border border-se-border flex items-center justify-center">
              <User className="w-10 h-10 text-se-muted-text" />
            </div>
            <div className="text-xl font-bold text-se-ink">{founderBio.name}</div>
            <p className="text-se-muted-text max-w-xl">{founderBio.bio}</p>
            <a
              href="#"
              aria-disabled="true"
              className="inline-flex items-center gap-2 text-se-orange font-medium underline underline-offset-4"
            >
              <Linkedin className="w-4 h-4" />
              {founderBio.linkedinLabel}
            </a>
            <p className="text-xs text-se-muted-text mt-2">
              Placeholder — replace with the founder&apos;s real name, photo, and LinkedIn profile URL before launch.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
