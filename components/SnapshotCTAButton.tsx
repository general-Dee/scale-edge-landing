import type { ReactNode } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/utils/cn"
import { snapshotOffer } from "@/lib/data"

// Stripe Payment Link for the Growth Snapshot. Set NEXT_PUBLIC_SNAPSHOT_PAYMENT_LINK_URL
// in .env.local once the Stripe account + Payment Link exist. Until then, every CTA
// using this component renders a disabled "coming soon" state instead of a dead link.
const PAYMENT_LINK_URL = process.env.NEXT_PUBLIC_SNAPSHOT_PAYMENT_LINK_URL

interface SnapshotCTAButtonProps extends Pick<ButtonProps, "size" | "variant" | "className"> {
  children?: ReactNode
}

/**
 * The single primary CTA for the site: buy the $147 Growth Snapshot.
 * Renders a real link to the Stripe Payment Link once it's configured, or a
 * clearly-labeled disabled "coming soon" button (with tooltip) when it isn't —
 * never a silent `#` link or a 404.
 */
export function SnapshotCTAButton({ children, size = "lg", variant, className }: SnapshotCTAButtonProps) {
  const content = children ?? `Get Your ${snapshotOffer.priceLabel} Growth Snapshot →`

  if (!PAYMENT_LINK_URL) {
    return (
      <Button
        type="button"
        size={size}
        variant={variant}
        className={cn("cursor-not-allowed opacity-60", className)}
        aria-disabled="true"
        title="Checkout isn't live yet — the Stripe Payment Link is being set up. Check back soon."
      >
        <span>{content}</span>
        <span className="ml-2 text-xs font-normal">(Coming soon)</span>
      </Button>
    )
  }

  return (
    <Button size={size} variant={variant} className={className} asChild>
      <a href={PAYMENT_LINK_URL} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    </Button>
  )
}
