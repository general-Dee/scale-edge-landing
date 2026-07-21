"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { snapshotOffer, snapshotDeliverables } from "@/lib/data"
import { SnapshotCTAButton } from "@/components/SnapshotCTAButton"

export function Services() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-se-ink">
            What&apos;s Included in Your{" "}
            <span className="text-se-orange">{snapshotOffer.priceLabel} {snapshotOffer.name}</span>
          </h2>
          <p className="text-se-muted-text">{snapshotOffer.tagline}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-se-surface rounded-2xl border border-dashed border-se-border p-8 text-center"
        >
          <div className="w-11 h-11 rounded-lg bg-se-orange/10 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-5 h-5 text-se-orange" />
          </div>
          <div className="text-sm font-semibold text-se-ink uppercase tracking-wide mb-2">
            Exact Deliverables
          </div>
          <p className="text-se-muted-text">{snapshotDeliverables}</p>
          <p className="text-xs text-se-muted-text mt-4">
            Placeholder — replace with the final Snapshot scope, turnaround time, and delivery
            format before launch.
          </p>
        </motion.div>

        <div className="flex justify-center mt-10">
          <SnapshotCTAButton size="lg" />
        </div>
      </div>
    </section>
  )
}
