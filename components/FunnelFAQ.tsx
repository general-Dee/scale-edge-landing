import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { funnelEngineeringFaqs } from "@/lib/data"
import { FadeIn } from "@/components/FadeIn"

export function FunnelFAQ() {
  return (
    <section className="py-20">
      <div className="container-custom max-w-3xl mx-auto">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-se-ink">
            What to Know <span className="text-se-orange">Before You Apply</span>
          </h2>
          <p className="text-se-muted-text">Straight answers about how the engagement works.</p>
        </FadeIn>

        <Accordion type="single" collapsible className="w-full">
          {funnelEngineeringFaqs.map((faq, idx) => (
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
