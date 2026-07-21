"use client"

import { motion } from "framer-motion"
import { EmailCapture } from "@/components/EmailCapture"
import { leadMagnet } from "@/lib/data"

export function EmailCaptureSection() {
  return (
    <section id="email-capture" className="py-16 bg-se-bg scroll-mt-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center bg-se-surface rounded-3xl border border-se-border p-8 md:p-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-se-ink">
            Free: {leadMagnet.title}
          </h2>
          <p className="text-se-muted-text mb-6">{leadMagnet.description}</p>
          <EmailCapture source="mid-page-strip" className="max-w-md mx-auto text-left" />
        </motion.div>
      </div>
    </section>
  )
}
