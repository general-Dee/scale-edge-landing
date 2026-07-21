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

  const apiKey = process.env.CONVERTKIT_API_KEY
  const formId = process.env.CONVERTKIT_FORM_ID

  // Until both ConvertKit env vars are set, fall back to logging only so
  // local dev and pre-launch testing never breaks.
  if (!apiKey || !formId) {
    console.log("[lead] new LinkedIn Content Checklist signup", {
      email,
      name: name ?? null,
      source: source ?? "unknown",
      receivedAt: new Date().toISOString(),
    })

    return NextResponse.json({ ok: true })
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 8000)

  try {
    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: apiKey,
          email,
          first_name: name,
          fields: { source: source ?? "unknown" },
        }),
        signal: controller.signal,
      }
    )

    const responseBody = await response.text()

    if (!response.ok) {
      console.error("[lead] ConvertKit subscribe failed", {
        status: response.status,
        body: responseBody,
        email,
        source: source ?? "unknown",
      })

      return NextResponse.json(
        { ok: false, error: "Something went wrong. Please try again." },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[lead] ConvertKit subscribe request errored", {
      error: error instanceof Error ? error.message : String(error),
      email,
      source: source ?? "unknown",
    })

    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 502 }
    )
  } finally {
    clearTimeout(timeout)
  }
}
