"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, Gift } from "lucide-react"

export function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isOpen) {
        setIsOpen(true)
      }
    }
    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-w-md w-full bg-se-gray rounded-2xl border border-se-orange/30 p-6 text-center"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-16 h-16 rounded-full bg-se-orange/20 flex items-center justify-center mx-auto mb-4">
            <Gift className="w-8 h-8 text-se-orange" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Wait — Don't Leave!</h3>
          <p className="text-gray-300 mb-4">
            Most founders don't realize their funnel is leaking 60%+ of leads. Let us diagnose it for free.
          </p>
          <Button size="default" className="w-full" asChild>
            <a href="https://calendly.com/oshinowodare/30min" target="_blank" rel="noopener noreferrer">
              Yes, Give Me My Free Audit
            </a>
          </Button>
          <button
            onClick={() => setIsOpen(false)}
            className="text-sm text-gray-500 mt-4 hover:text-gray-300"
          >
            No thanks, I'll keep losing leads
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
