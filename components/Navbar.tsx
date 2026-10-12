"use client"

import { useState, useEffect } from "react"
import { SnapshotCTAButton } from "@/components/SnapshotCTAButton"
import { snapshotOffer } from "@/lib/data"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    const raf = requestAnimationFrame(() => setMounted(true))
    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out motion-reduce:transition-none ${
        scrolled ? "bg-se-bg/90 backdrop-blur-md border-b border-se-border" : "bg-transparent"
      }`}
      style={{ transform: mounted ? "translateY(0)" : "translateY(-100%)" }}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <div className="text-xl font-bold tracking-tight text-se-ink">
          <span className="text-se-orange">Scale</span>
          <span>-Edge</span>
        </div>
        <SnapshotCTAButton variant="outline" size="sm" location="navbar">
          <span className="hidden sm:inline">Book Discovery — {snapshotOffer.priceLabel} setup</span>
          <span className="sm:hidden">Get Started</span>
        </SnapshotCTAButton>
      </div>
    </header>
  )
}
