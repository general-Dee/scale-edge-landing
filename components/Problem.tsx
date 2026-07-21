"use client"

import { motion } from "framer-motion"
import { Clock, Users2, ThumbsUp } from "lucide-react"

export function Problem() {
  return (
    <section className="py-20 bg-se-surface border-y border-se-border">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-se-ink">
            Referrals Alone <span className="text-se-orange">Don&apos;t Scale</span>
          </h2>
          <p className="text-lg text-se-muted-text">
            You know LinkedIn could bring in new clients. But between running the business and
            serving the clients you already have, posting consistently keeps sliding to the bottom
            of the list.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: Clock, title: "No Time to Post", desc: "Between clients, jobs, and cases, sitting down to write a post consistently just doesn't happen." },
            { icon: Users2, title: "Referrals Only Go So Far", desc: "Word-of-mouth is great until it slows down — and you have no reliable way to fill the gap." },
            { icon: ThumbsUp, title: "DIY Posts Get Likes, Not Leads", desc: "Occasional posts might get engagement from other business owners, but rarely turn into booked calls." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-se-bg rounded-2xl p-6 border border-se-border"
            >
              <item.icon className="w-9 h-9 text-se-orange mb-4" />
              <h3 className="text-xl font-bold mb-2 text-se-ink">{item.title}</h3>
              <p className="text-se-muted-text">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
