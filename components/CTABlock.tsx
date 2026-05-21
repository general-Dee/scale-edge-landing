"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, CheckCircle } from "lucide-react"

export function CTABlock() {
  return (
    <section className="py-20 border-y border-white/10 bg-se-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-se-orange/10 px-4 py-2 rounded-full text-se-orange mb-6">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">Limited availability</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Stop Losing Leads. <span className="text-se-orange">Book Your Free Audit.</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            30 minutes. No pitch. Just a clear diagnosis of why your Meta traffic isn't converting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-xl" asChild>
              <a href="https://calendly.com/oshinowodare/30min" target="_blank" rel="noopener noreferrer">
                Claim My Free Audit →
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-gray-500">
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-se-orange" /> No credit card</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-se-orange" /> 30-min strategy call</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-se-orange" /> Cancel anytime</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
