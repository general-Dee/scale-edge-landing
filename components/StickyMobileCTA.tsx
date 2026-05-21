"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { PhoneCall } from "lucide-react"

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)

    const timer = setTimeout(() => setIsVisible(true), 3000)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  if (!isMobile) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-se-dark/95 backdrop-blur-lg border-t border-white/10 p-3 shadow-2xl"
        >
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <div className="text-xs text-gray-400">Limited spots</div>
              <div className="text-sm font-bold">Free Funnel Audit</div>
            </div>
            <Button
              size="mobile"
              className="flex items-center gap-2 shadow-lg"
              asChild
            >
              <a href="https://calendly.com/oshinowodare/30min" target="_blank" rel="noopener noreferrer">
                <PhoneCall className="w-4 h-4" />
                Book Now
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
