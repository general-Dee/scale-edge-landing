"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { testimonials } from "@/lib/data"

export function Testimonials() {
  return (
    <section className="py-20 bg-se-gray/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            From <span className="text-se-orange">Leaking</span> to 3.8x ROAS
          </h2>
          <p className="text-gray-300">Real results from founders who fixed their funnels</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-se-orange/20 flex items-center justify-center font-bold text-se-orange">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-bold">{t.name}</div>
                      <div className="text-sm text-gray-400">{t.company}</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-se-orange text-se-orange" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-4">"{t.quote}"</p>
                  <div className="border-t border-white/10 pt-3 text-sm">
                    <div className="text-se-orange font-semibold">{t.metric}</div>
                    <div className="text-gray-500">Before: {t.beforeState}</div>
                    <div className="text-gray-500">After: {t.afterState} ({t.timeframe})</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
