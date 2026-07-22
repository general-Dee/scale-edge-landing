"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Sparkles } from "lucide-react"
import { EmailCapture } from "@/components/EmailCapture"
import { SnapshotCTAButton } from "@/components/SnapshotCTAButton"
import { leadMagnet, snapshotOffer } from "@/lib/data"

export function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true)
        setHasShown(true)
      }
    }
    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [hasShown])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-se-ink/40 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-md w-full bg-se-surface rounded-2xl border border-se-border p-6 text-center shadow-xl"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-se-muted-text hover:text-se-ink"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-16 h-16 rounded-full bg-se-orange/10 flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-se-orange" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-se-ink">Before You Go</h3>
          <p className="text-se-muted-text mb-5">
            See exactly what&apos;s costing you leads on LinkedIn — get the {snapshotOffer.priceLabel}{" "}
            {snapshotOffer.name} now.
          </p>
          <SnapshotCTAButton size="lg" className="w-full justify-center" location="exit-intent-modal" />
          <div className="text-xs text-se-muted-text uppercase tracking-wide my-5">or</div>
          <p className="text-sm text-se-muted-text mb-3">
            Not ready to buy? Grab the free {leadMagnet.title} instead.
          </p>
          <EmailCapture source="exit-intent-modal" />
          <button
            onClick={() => setIsOpen(false)}
            className="text-sm text-se-muted-text mt-4 hover:text-se-ink"
          >
            No thanks
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
