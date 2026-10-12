import { Clock, Users2, AlertCircle } from "lucide-react"
import { FadeIn } from "@/components/FadeIn"

export function Problem() {
  return (
    <section className="py-20 bg-se-surface border-y border-se-border">
      <div className="container-custom">
        <FadeIn className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-se-ink">
            Broken Operations Are an <span className="text-se-orange">Expensive Everyday Problem</span>
          </h2>
          <p className="text-lg text-se-muted-text">
            Lost orders. Unclear stock. Staff chasing WhatsApp. No clear picture of the day. In the real economy these frictions cost money every single day.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: Clock, title: "Lost Sales & Time", desc: "Orders and inquiries disappear in chat. Time spent chasing instead of serving." },
            { icon: Users2, title: "Friction for Everyone", desc: "Customers struggle to order. Staff waste effort on repetitive manual work." },
            { icon: AlertCircle, title: "No Leverage", desc: "You stay stuck trading time for money because nothing runs without constant attention." },
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
