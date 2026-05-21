"use client"

import { motion } from "framer-motion"
import { processSteps } from "@/lib/data"
import { Calendar, Search, FileCheck, Rocket } from "lucide-react"

const icons = [Calendar, Search, FileCheck, Rocket]

export function Process() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Here's What Happens <span className="text-se-orange">After You Book</span>
          </h2>
          <p className="text-gray-300">No guesswork. No hidden calls. Just a clear path to a fixed funnel.</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {processSteps.map((step, idx) => {
            const Icon = icons[idx]
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="bg-se-muted rounded-2xl p-6 text-center border border-white/5 h-full">
                  <div className="w-12 h-12 rounded-full bg-se-orange/20 text-se-orange flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <Icon className="w-8 h-8 text-se-orange mx-auto mb-3" />
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-se-orange/30 -translate-y-1/2 z-0" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
