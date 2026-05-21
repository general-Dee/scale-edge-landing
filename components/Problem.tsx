"use client"

import { motion } from "framer-motion"
import { AlertCircle, TrendingDown, XCircle } from "lucide-react"

export function Problem() {
  return (
    <section className="py-20 bg-se-gray/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-red-500/10 px-4 py-2 rounded-full text-red-400 mb-6">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm font-medium">The Hard Truth</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            You're Paying For Traffic That <span className="text-se-orange">Leaks Out</span>
          </h2>
          <p className="text-lg text-gray-300">
            Every day, Meta sends you cold traffic — but your funnel isn't built for interruption-based buyers. Low intent? Short attention span? They bounce.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: TrendingDown, title: "80% Bounce Rate", desc: "Cold traffic leaves within 5 seconds if headline doesn't match ad promise." },
            { icon: XCircle, title: "Forms Kill Momentum", desc: "Long forms on mobile = lost leads. You ask too much, too soon." },
            { icon: AlertCircle, title: "No Trust = No Call", desc: "Social proof appears after the CTA — visitors get cold feet." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-se-muted/50 rounded-2xl p-6 border border-white/5"
            >
              <item.icon className="w-10 h-10 text-se-orange mb-4" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
