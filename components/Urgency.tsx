"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlarmClock } from "lucide-react"
import { urgencyCopy } from "@/lib/data"

export function Urgency() {
  return (
    <section className="py-16 bg-gradient-to-r from-se-orange/5 via-transparent to-se-orange/5">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center bg-se-muted/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-se-orange/20"
        >
          <Badge variant="urgent" className="mb-4 text-base px-4 py-1 animate-pulse-slow">
            <AlarmClock className="w-4 h-4 inline mr-1" />
            Only {urgencyCopy.spotsLeft} spots left this week
          </Badge>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Your funnel is leaking money <span className="text-se-orange">right now</span>
          </h2>
          <p className="text-gray-300 mb-6">
            We only audit {urgencyCopy.spotsLeft} funnels per week to maintain quality. Spots reset {urgencyCopy.deadline}.
          </p>
          <Button size="lg" className="shadow-glow animate-glow" asChild>
            <a href="https://calendly.com/oshinowodare/30min" target="_blank" rel="noopener noreferrer">
              {urgencyCopy.ctaText}
            </a>
          </Button>
          <p className="text-xs text-gray-500 mt-4">⏱️ 30-min strategy call • No obligation</p>
        </motion.div>
      </div>
    </section>
  )
}
