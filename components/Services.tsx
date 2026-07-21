"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { services } from "@/lib/data"

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
            What&apos;s Included in Your <span className="text-se-orange">Retainer</span>
          </h2>
          <p className="text-se-muted-text">Four pillars, one monthly retainer, no add-on upsells.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:border-se-orange/40 transition-all">
                <CardHeader>
                  <div className="w-11 h-11 rounded-lg bg-se-orange/10 flex items-center justify-center mb-2">
                    <service.icon className="w-5 h-5 text-se-orange" />
                  </div>
                  <CardTitle className="text-xl text-se-ink">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-se-muted-text mb-4">{service.outcome}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-sm text-se-ink">
                        <CheckCircle2 className="w-4 h-4 text-se-orange shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
