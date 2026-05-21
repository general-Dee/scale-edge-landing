"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Solution() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-se-orange/10 px-4 py-2 rounded-full text-se-orange mb-6">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm font-medium">The Scale-Edge Method</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              We Don't Run Ads — We <span className="text-se-orange">Fix Funnels</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Your Meta traffic is already there. We rebuild your funnel from the ground up to capture, convince, and convert interruption-based visitors into booked calls.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Ad-to-page scent continuity (no click shock)",
                "Mobile-thumb heatmap-optimized layouts",
                "Urgency & social proof stacked above every CTA",
                "Frictionless Calendly integration",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-se-orange shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" asChild>
              <a href="https://calendly.com/oshinowodare/30min" target="_blank" rel="noopener noreferrer">
                Apply for Free Audit →
              </a>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-se-orange/10 to-transparent rounded-3xl p-8 border border-white/10"
          >
            <div className="text-6xl mb-4">📈</div>
            <div className="text-3xl font-bold text-se-orange mb-2">+3.8×</div>
            <div className="text-gray-300">Average ROAS lift for our clients within 14 days</div>
            <div className="mt-6 h-2 bg-se-muted rounded-full overflow-hidden">
              <div className="w-[78%] h-full bg-se-orange rounded-full" />
            </div>
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>Before</span>
              <span>After (14 days)</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
