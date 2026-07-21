"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { SnapshotCTAButton } from "@/components/SnapshotCTAButton"
import { snapshotOffer } from "@/lib/data"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-se-bg/90 backdrop-blur-md border-b border-se-border" : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <div className="text-xl font-bold tracking-tight text-se-ink">
          <span className="text-se-orange">Scale</span>
          <span>-Edge</span>
        </div>
        <SnapshotCTAButton variant="outline" size="sm">
          <span className="hidden sm:inline">Get Snapshot — {snapshotOffer.priceLabel}</span>
          <span className="sm:hidden">Get Snapshot</span>
        </SnapshotCTAButton>
      </div>
    </motion.header>
  )
}
