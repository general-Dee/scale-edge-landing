"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/utils/cn"

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  duration?: number
  trigger?: "mount" | "inView"
}

/**
 * Lightweight fade/slide-in-on-scroll effect implemented with plain CSS
 * transitions + IntersectionObserver instead of framer-motion, so most
 * sections on the page don't need to ship that dependency's JS.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  y = 16,
  duration = 0.5,
  trigger = "inView",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (trigger === "mount") {
      const raf = requestAnimationFrame(() => setVisible(true))
      return () => cancelAnimationFrame(raf)
    }

    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [trigger])

  return (
    <div
      ref={ref}
      className={cn("transition-all ease-out motion-reduce:transition-none", className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : `translateY(${y}px)`,
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
