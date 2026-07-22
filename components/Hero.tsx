"use client"

import { motion } from "framer-motion"
import { Users } from "lucide-react"
import { SnapshotCTAButton } from "@/components/SnapshotCTAButton"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-6 text-se-ink">
            Done-For-You LinkedIn Marketing for Business Owners Who Don&apos;t Have Time to Post
          </h1>
          <p className="text-lg md:text-xl text-se-muted-text mb-6 max-w-2xl leading-relaxed">
            Built for real estate agents, dentists, contractors, and law firms who know LinkedIn
            matters but don&apos;t have the hours to write posts, message prospects, and track what&apos;s working.
          </p>
          <p className="text-base md:text-lg text-se-ink font-medium mb-10">
            New agency, direct founder access — <span className="text-se-orange">no account managers, no juniors.</span>
          </p>
          <SnapshotCTAButton size="lg" location="hero" />
          <p className="text-sm text-se-muted-text mt-3">One-time payment. Secure checkout. No subscription.</p>
          <a
            href="#email-capture"
            className="text-sm text-se-muted-text hover:text-se-orange mt-4 underline underline-offset-4"
          >
            Not ready to buy? Get the free LinkedIn Content Checklist instead →
          </a>
          <div className="flex items-center gap-2 mt-10 text-sm text-se-muted-text">
            <Users className="w-4 h-4 text-se-orange" />
            <span>Built for local, service-based businesses — not another DTC ad agency.</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
