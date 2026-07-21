"use client"

import { motion } from "framer-motion"
import { CheckCircle2, PenLine, Send, Compass, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

const pillars = [
  { icon: PenLine, label: "Content & Ghostwriting" },
  { icon: Send, label: "Outbound & DM Lead Gen" },
  { icon: Compass, label: "Strategy & Positioning" },
  { icon: BarChart3, label: "Performance Reporting" },
]

export function Solution() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-se-orange/10 px-4 py-2 rounded-full text-se-orange mb-6">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm font-medium">The Scale-Edge Method</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-se-ink">
              A Full LinkedIn Engine — <span className="text-se-orange">Not Just Posts</span>
            </h2>
            <p className="text-se-muted-text text-lg mb-6">
              Posting alone doesn&apos;t generate clients. We run content, outbound outreach,
              strategy, and reporting together so your LinkedIn presence actually turns into
              conversations with the people you want as clients.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Content written in your voice, published on a consistent schedule",
                "Direct outbound DMs to your ideal local prospects every week",
                "A monthly strategy call to keep the plan sharp",
                "Plain-English reporting so you know what's working",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-se-orange shrink-0" />
                  <span className="text-se-ink">{item}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" asChild>
              <a href="https://calendly.com/oshinowodare/30min" target="_blank" rel="noopener noreferrer">
                Book a Call →
              </a>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-se-surface rounded-3xl p-8 border border-se-border"
          >
            <div className="text-sm font-semibold text-se-muted-text uppercase tracking-wide mb-6">
              The Four Pillars
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
