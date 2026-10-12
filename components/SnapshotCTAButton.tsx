"use client"

import type { ReactNode } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/utils/cn"
import { snapshotOffer } from "@/lib/data"
import { trackConversion } from "@/lib/analytics"

// Temporary: point to WhatsApp or form until Stripe/booking link is live.
// Replace with actual discovery booking link (Calendly, WhatsApp, or form) when ready.
const DISCOVERY_LINK = process.env.NEXT_PUBLIC_DISCOVERY_LINK || "https://wa.me/2348086655000?text=Hi%2C%20I%20want%20to%20discuss%20a%20business%20system%20setup"

interface SnapshotCTAButtonProps extends Pick<ButtonProps, "size" | "variant" | "className"> {
  children?: ReactNode
  location?: string
}

export function SnapshotCTAButton({ children, size = "lg", variant, className, location = "unknown" }: SnapshotCTAButtonProps) {
  const content = children ?? `Book Discovery Call — Setup from ${snapshotOffer.priceLabel} →`

  return (
    <Button size={size} variant={variant} className={className} asChild>
      <a
        href={DISCOVERY_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackConversion("discovery_cta_click", { location })}
      >
        {content}
      </a>
    </Button>
  )
}
