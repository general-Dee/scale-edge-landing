"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CreditCard } from "lucide-react"
import { SnapshotCTAButton } from "@/components/SnapshotCTAButton"
import { snapshotOffer } from "@/lib/data"

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
          className="fixed bottom-0 left-0 right-0 z-50 bg-se-surface/95 backdrop-blur-lg border-t border-se-border p-3 shadow-2xl"
        >
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <div className="text-sm font-bold text-se-ink">{snapshotOffer.name} — {snapshotOffer.priceLabel}</div>
            </div>
            <SnapshotCTAButton size="mobile" className="flex items-center gap-2 shadow-lg w-auto" location="sticky-mobile">
              <CreditCard className="w-4 h-4" />
              Get Snapshot
            </SnapshotCTAButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
