"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CalendarClock, ShieldCheck, XCircle } from "lucide-react"

export function GuaranteeRiskReversal() {
  return (
    <section className="py-16 bg-se-surface border-y border-se-border">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center bg-se-bg rounded-3xl p-8 md:p-12 border border-se-border"
        >
          <div className="inline-flex items-center gap-2 bg-se-orange/10 px-4 py-2 rounded-full text-se-orange mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-sm font-medium">Month-to-Month</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-se-ink">
            No Long-Term Contract. <span className="text-se-orange">Cancel Anytime.</span>
          </h2>
          <p className="text-se-muted-text mb-8 max-w-xl mx-auto">
            This is a month-to-month retainer, not a locked-in annual contract. If it&apos;s not
            worth it to you in any given month, you cancel — no penalty, no negotiation, no fine print.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8 text-sm">
            <span className="flex items-center justify-center gap-2 text-se-ink">
              <CalendarClock className="w-4 h-4 text-se-orange" /> Billed month-to-month
            </span>
            <span className="flex items-center justify-center gap-2 text-se-ink">
              <XCircle className="w-4 h-4 text-se-orange" /> No long-term contract
            </span>
            <span className="flex items-center justify-center gap-2 text-se-ink">
              <ShieldCheck className="w-4 h-4 text-se-orange" /> Cancel anytime
            </span>
          </div>
          <Button size="lg" asChild>
            <a href="https://calendly.com/oshinowodare/30min" target="_blank" rel="noopener noreferrer">
              Book a Call →
            </a>
          </Button>
          <p className="text-sm text-se-muted-text mt-3">
            Not ready to talk?{" "}
            <a href="#email-capture" className="text-se-orange underline underline-offset-4">
              Get the free LinkedIn Content Checklist instead →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
