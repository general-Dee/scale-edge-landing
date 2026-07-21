import { NextResponse } from "next/server"
import { z } from "zod"

const leadSchema = z.object({
  email: z.string().trim().toLowerCase().email("Enter a valid email address."),
  name: z.string().trim().min(1).max(120).optional(),
  source: z.string().trim().max(60).optional(),
})

export async function POST(request: Request) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    )
  }

  const parsed = leadSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input." },
      { status: 400 }
    )
  }

  const { email, name, source } = parsed.data

  // TODO(owner): swap this stub for a real CRM/ESP integration once one is
  // chosen (e.g. Mailchimp, ConvertKit, HubSpot, ActiveCampaign). For now we
  // just log the lead server-side so submissions aren't silently lost, and
  // this is the single place to wire up the real integration later.
  console.log("[lead] new LinkedIn Content Checklist signup", {
    email,
    name: name ?? null,
    source: source ?? "unknown",
    receivedAt: new Date().toISOString(),
  })

  return NextResponse.json({ ok: true })
}
