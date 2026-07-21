"use client"

import { motion } from "framer-motion"
import { icpSegments } from "@/lib/data"

export function SocialProofBar() {
  return (
    <section className="border-y border-se-border bg-se-surface py-6">
      <div className="container-custom">
        <p className="text-center text-xs uppercase tracking-wide text-se-muted-text mb-4">Who We Serve</p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {icpSegments.map((segment, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex items-center gap-2 text-sm md:text-base font-medium text-se-ink"
            >
              <segment.icon className="w-5 h-5 text-se-orange" />
              <span>{segment.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
