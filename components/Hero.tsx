"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { heroStats } from "@/lib/data"
import { Star } from "lucide-react"

const CountUp = ({ end, suffix, duration = 2 }: { end: number; suffix: string; duration?: number }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const step = end / (duration * 60)
      const timer = setInterval(() => {
        start += step
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [isInView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
}

export function Hero() {
  const headline = "We Fix Leaking Sales Funnels"
  const words = headline.split(" ")

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-se-orange/5 via-transparent to-transparent" />
      <div className="container-custom relative z-10">
        <motion.div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            {words.map((word, idx) => (
              <motion.span
                key={idx}
                custom={idx}
                variants={wordVariants}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
          >
            Book your free 30-minute funnel audit and uncover why Meta leads aren't converting.<br />
            <span className="text-se-orange font-semibold">Most clients see 3.8x ROAS lift in 14 days.</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            <Button size="lg" className="shadow-lg shadow-se-orange/30 hover:shadow-xl transition-all" asChild>
              <a href="https://calendly.com/oshinowodare/30min" target="_blank" rel="noopener noreferrer">
                Book My Free Audit →
              </a>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 w-full max-w-3xl"
          >
            {heroStats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-se-orange">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
          <div className="flex items-center gap-2 mt-8 text-sm text-gray-400">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-se-orange text-se-orange" />)}
            </div>
            <span>Rated 5.0 by 47 DTC founders</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
