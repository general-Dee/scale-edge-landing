"use client"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { faqs } from "@/lib/data"
import { motion } from "framer-motion"

export function FAQ() {
  return (
    <section className="py-20">
      <div className="container-custom max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-se-ink">
            Questions? <span className="text-se-orange">We&apos;ve heard them.</span>
          </h2>
          <p className="text-se-muted-text">Straight answers, including about being a new agency.</p>
        </motion.div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left font-semibold text-lg text-se-ink">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-se-muted-text leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
