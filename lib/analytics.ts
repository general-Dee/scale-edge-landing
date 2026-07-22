declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    lintrk?: (...args: unknown[]) => void
  }
}

type ConversionEvent = "lead_capture" | "snapshot_cta_click"

const LI_CONVERSION_IDS: Record<ConversionEvent, string | undefined> = {
  lead_capture: process.env.NEXT_PUBLIC_LI_CONVERSION_ID_LEAD,
  snapshot_cta_click: process.env.NEXT_PUBLIC_LI_CONVERSION_ID_SNAPSHOT,
}

export function trackConversion(event: ConversionEvent, params?: Record<string, string>) {
  if (typeof window === "undefined") return
  window.gtag?.("event", event, params)
  const conversionId = LI_CONVERSION_IDS[event]
  if (conversionId) window.lintrk?.("track", { conversion_id: conversionId })
}
