"use client"

import { useState, useEffect } from "react"
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
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-se-surface/95 backdrop-blur-lg border-t border-se-border p-3 shadow-2xl transition-all duration-300 ease-out motion-reduce:transition-none"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(100%)",
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
      }}
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
    </div>
  )
}
