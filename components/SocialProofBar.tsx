"use client"

import { motion } from "framer-motion"
import { Zap, TrendingUp, Rocket, CheckCircle } from "lucide-react"

export function SocialProofBar() {
  const stats = [
    { label: "120+ funnels built", icon: Rocket },
    { label: "3.8× avg ROAS", icon: TrendingUp },
    { label: "48hr go-live", icon: Zap },
    { label: "100% done-for-you", icon: CheckCircle },
  ]

  return (
    <section className="border-y border-white/10 bg-se-gray/30 py-5">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-sm md:text-base font-medium"
            >
              <stat.icon className="w-5 h-5 text-se-orange" />
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
