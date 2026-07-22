"use client"

import { motion } from "framer-motion"

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  duration?: number
  trigger?: "mount" | "inView"
}

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 16,
  duration = 0.5,
  trigger = "inView",
}: FadeInProps) {
  const motionProps =
    trigger === "mount"
      ? { initial: { opacity: 0, y }, animate: { opacity: 1, y: 0 } }
      : { initial: { opacity: 0, y }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

  return (
    <motion.div className={className} {...motionProps} transition={{ duration, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  )
}
