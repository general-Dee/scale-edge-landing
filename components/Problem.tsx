import { Clock, Users2, AlertCircle } from "lucide-react"
import { FadeIn } from "@/components/FadeIn"

export function Problem() {
  return (
    <section className="py-20 bg-se-surface border-y border-se-border">
      <div className="container-custom">
        <FadeIn className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-se-ink">
            WhatsApp and Paper <span className="text-se-orange">Don't Scale</span>
          </h2>
          <p className="text-lg text-se-muted-text">
            Orders get lost. Stock is unclear. Parents miss updates. Inquiries pile up. Running the business manually costs you time and money every day.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: Clock, title: "Lost Time & Orders", desc: "Chasing messages, updating stock by hand, and missing sales because nothing is organised." },
            { icon: Users2, title: "Staff & Customer Friction", desc: "Customers can't order easily. Staff waste time on repetitive tasks instead of serving people." },
            { icon: AlertCircle, title: "No Clear Picture", desc: "You don't know today's sales, stock levels, or which inquiries need follow-up until it's too late." },
          ].map((item, idx) => (
            <FadeIn
              key={idx}
              delay={idx * 0.1}
              className="bg-se-bg rounded-2xl p-6 border border-se-border"
            >
              <item.icon className="w-9 h-9 text-se-orange mb-4" />
              <h3 className="text-xl font-bold mb-2 text-se-ink">{item.title}</h3>
              <p className="text-se-muted-text">{item.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
