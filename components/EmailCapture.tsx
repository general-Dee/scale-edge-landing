"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Loader2 } from "lucide-react"
import { leadMagnet } from "@/lib/data"
import { trackConversion } from "@/lib/analytics"

interface EmailCaptureProps {
  source: string
  className?: string
  compact?: boolean
  submitLabel?: string
  successMessage?: string
  privacyNote?: string
}

type Status = "idle" | "submitting" | "success" | "error"

export function EmailCapture({
  source,
  className = "",
  compact = false,
  submitLabel = "Get the Checklist",
  successMessage = "Check your inbox — the checklist is on its way.",
  privacyNote = leadMagnet.privacyNote,
}: EmailCaptureProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("submitting")
    setErrorMessage("")

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      })
      const data = await res.json()

      if (!res.ok || !data.ok) {
        setStatus("error")
        setErrorMessage(data.error || "Something went wrong. Please try again.")
        return
      }

      setStatus("success")
      trackConversion("lead_capture", { source })
    } catch {
      setStatus("error")
      setErrorMessage("Something went wrong. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <div className={`flex items-center gap-2 text-se-ink font-medium ${className}`}>
        <CheckCircle2 className="w-5 h-5 text-se-orange shrink-0" />
        <span>{successMessage}</span>
      </div>
    )
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@business.com"
          className="flex-1 h-12 px-4 rounded-xl border border-se-border bg-se-surface text-se-ink placeholder:text-se-muted-text focus:outline-none focus:ring-2 focus:ring-se-orange"
        />
        <Button
          type="submit"
          variant="outline"
          size={compact ? "sm" : "default"}
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" /> Sending...
            </span>
          ) : (
            submitLabel
          )}
        </Button>
      </form>
      {status === "error" && (
        <p className="text-sm text-red-600 mt-2">{errorMessage}</p>
      )}
      <p className="text-xs text-se-muted-text mt-2">{privacyNote}</p>
    </div>
  )
}
