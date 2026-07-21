"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, CheckCircle } from "lucide-react"

export function CTABlock() {
  return (
    <section className="py-20 border-y border-se-border bg-se-surface">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-se-orange/10 px-4 py-2 rounded-full text-se-orange mb-6">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">Free Strategy Call</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-se-ink">
            Ready to Stop Winging It on <span className="text-se-orange">LinkedIn?</span>
          </h2>
          <p className="text-lg text-se-muted-text mb-8 max-w-2xl mx-auto">
            30 minutes. No pitch deck. Just a clear look at whether a done-for-you LinkedIn engine
            makes sense for your business.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button size="lg" asChild>
              <a href="https://calendly.com/oshinowodare/30min" target="_blank" rel="noopener noreferrer">
                Book a Call →
              </a>
            </Button>
            <a href="#email-capture" className="text-sm text-se-muted-text underline underline-offset-4 hover:text-se-orange">
              Not ready to talk? Get the free LinkedIn Content Checklist instead →
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-se-muted-text">
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-se-orange" /> No credit card</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-se-orange" /> 30-min strategy call</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-se-orange" /> Cancel anytime</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
