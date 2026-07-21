import {
  Building2,
  Stethoscope,
  HardHat,
  Scale,
  CreditCard,
  UserCheck,
  Rocket,
  LineChart,
  type LucideIcon,
} from "lucide-react"

export interface IcpSegment {
  label: string
  icon: LucideIcon
}

export interface SnapshotOffer {
  name: string
  price: number
  priceLabel: string
  tagline: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface SamplePost {
  id: string
  vertical: string
  sampleLabel: string
  hook: string
  body: string
  isSample: true
}

// "Who We Serve" — the ICPs the Growth Snapshot is built for
export const icpSegments: IcpSegment[] = [
  { label: "Real Estate Agents", icon: Building2 },
  { label: "Dental & Medical Practices", icon: Stethoscope },
  { label: "Contractors", icon: HardHat },
  { label: "Law Firms", icon: Scale },
]

// The primary offer: a one-time, paid audit — not the old $800-1,000/mo retainer.
// The retainer still exists, but only as a soft upsell discussed after purchase
// (see the Snapshot walkthrough-call step in `processSteps` below).
export const snapshotOffer: SnapshotOffer = {
  name: "Growth Snapshot",
  price: 147,
  priceLabel: "$147",
  tagline:
    "A one-time, done-for-you audit of your LinkedIn presence — what's working, what's costing you leads, and what to fix first.",
}

// Snapshot deliverables — placeholder, owner must define exact scope, turnaround
// time, and delivery format before launch. Follows the same TBD pattern as
// `founderBio` below: render this verbatim wherever the Snapshot's contents are
// described, so it's obviously unfinished rather than invented marketing copy.
export const snapshotDeliverables =
  "[SNAPSHOT DELIVERABLES — TBD: list what's included, e.g. profile audit / content plan / outreach template, plus turnaround time and delivery format]"

// Growth Snapshot delivery flow — replaces the old cold retainer-booking funnel.
// Step 4 is the only place the retainer is mentioned, and only as a soft,
// post-purchase upsell, per the offer restructure.
export const processSteps: ProcessStep[] = [
  { step: 1, title: "Purchase Your Snapshot", description: "Secure checkout via Stripe. One-time $147 payment — no subscription, no sales call required to get started." },
  { step: 2, title: "Quick Intake", description: "A short form so we know your business, your ideal clients, and where your LinkedIn presence stands today." },
  { step: 3, title: "We Build Your Snapshot", description: snapshotDeliverables },
  { step: 4, title: "Walkthrough Call", description: "We walk you through the findings live. If ongoing content, outreach, and reporting support makes sense for your business, we'll discuss it then — no pressure, no cold pitch." },
]

export const processIcons = [CreditCard, UserCheck, Rocket, LineChart]

// Founder credibility — placeholder values, owner must fill in before launch
export const founderBio = {
  name: "[FOUNDER NAME — TBD]",
  linkedinUrl: "[LINKEDIN PROFILE URL — TBD]",
  linkedinLabel: "[LINKEDIN PROFILE URL — TBD]",
  bio:
    "This is a placeholder bio. Replace with a few sentences on your background, why you started Scale-Edge, and why local service businesses should trust you with their LinkedIn presence.",
}

// Proof of Craft — sample post mockups, explicitly labeled as illustrative, not real client work
export const samplePosts: SamplePost[] = [
  {
    id: "sp-dentist",
    vertical: "Dental Practice",
    sampleLabel: "SAMPLE — illustrates our approach for a dentist",
    hook: "Most patients don't leave your practice because of a bad cleaning. They leave because they forgot you exist.",
    body:
      "A quick story from this week: a patient told me she almost booked with the new office down the street — not because of price, just because they \"popped up\" and we hadn't crossed her mind in 8 months.\n\nThat's the real cost of going quiet between checkups. Staying visible isn't about selling — it's about being the name that comes to mind when someone's tooth starts aching at 11pm.\n\nIf you're a practice owner: what's one thing you do to stay top of mind between visits?",
    isSample: true,
  },
  {
    id: "sp-real-estate",
    vertical: "Real Estate Agent",
    sampleLabel: "SAMPLE — illustrates our approach for a real estate agent",
    hook: "The best listing photo in the world won't save a house that's priced wrong.",
    body:
      "Had a seller ask me last week why their neighbor's house sold in 4 days and theirs is sitting at day 42. Same street, similar square footage.\n\nThe answer wasn't staging. It wasn't photography. It was 6% over market, and buyers today do the math before they ever call an agent.\n\nPricing right isn't giving up value — it's the difference between one showing and twenty.",
    isSample: true,
  },
  {
    id: "sp-contractor",
    vertical: "Contractor",
    sampleLabel: "SAMPLE — illustrates our approach for a contractor",
    hook: "The cheapest quote is rarely the cheapest job.",
    body:
      "Walked a job site this week where the homeowner had to redo a $4,000 deck after 14 months because the first contractor skipped proper footings to win the bid.\n\nWe don't compete on being the lowest number on a page. We compete on the client not having this conversation with someone else in 14 months.\n\nIf you're getting three quotes right now, ask each contractor one question: \"what happens if I never think about this again after you leave?\"",
    isSample: true,
  },
]

// Lead magnet copy
export const leadMagnet = {
  title: "The LinkedIn Content Checklist for Local Service Businesses",
  description:
    "A short, practical checklist for real estate agents, dentists, contractors, and lawyers who want to show up consistently on LinkedIn without overthinking every post.",
  privacyNote:
    "We'll only use your email to send the checklist and occasional updates. Unsubscribe anytime.",
  items: [
    "Post at least 3x a week — consistency beats a single viral post every time.",
    "Write like you talk to a client in your office, not like a press release.",
    "Lead with a real story or observation from your week, not a generic tip.",
    "Ask one genuine question at the end of a post to invite replies, not just likes.",
    "Comment on 5-10 posts from your target clients before you post your own — visibility is a two-way street.",
    "Send 10-15 personalized connection requests a week to people who match your ideal client, not random contacts.",
    "Follow up DMs with a real question about their situation, not a pitch in message one.",
    "Track replies and booked calls, not just likes — vanity metrics don't pay the bills.",
  ],
}

export const faqs: FaqItem[] = [
  {
    question: "Is $147 worth it for a local business?",
    answer:
      "The Snapshot is a one-time payment, not a subscription — you're paying once for a clear, outside look at your LinkedIn presence and where it's costing you leads. If it points you toward even one fix that leads to a new client, it pays for itself many times over.",
  },
  {
    question: "Why LinkedIn instead of Meta or Google ads?",
    answer:
      "Local service businesses like real estate, dental, contracting, and law rely on trust — and LinkedIn is where decision-makers already expect professional credibility. Ads can get you clicks; a consistent, well-positioned LinkedIn presence builds the kind of trust that turns into referrals and repeat business, without an ongoing ad spend.",
  },
  {
    question: "You're a new agency — how do I know this works?",
    answer:
      "Honestly, we don't have a decade of case studies yet — we're upfront about that. What we do offer: direct access to the founder (not a junior account manager), real examples of the writing style we use in the Proof of Craft section above, and a one-time payment instead of a long-term contract you'd have to trust us with up front.",
  },
  {
    question: "How much time does this require from me?",
    answer:
      "About 15-20 minutes: a short intake form after checkout so we understand your business and ideal clients, plus the walkthrough call where we go over your Snapshot together. There's no ongoing weekly commitment tied to the Snapshot itself.",
  },
  {
    question: "Do you offer ongoing support after the Snapshot?",
    answer:
      "Sometimes — but we don't sell it upfront. As part of your Snapshot walkthrough call, we'll discuss whether ongoing content, outreach, and reporting support makes sense for your business. There's no obligation, and no pitch before you've seen the value of the Snapshot itself.",
  },
  {
    question: "Where can I see real examples of your work?",
    answer:
      "Check the Proof of Craft section above for sample posts written in the style we'd use for your industry. Since we're a new agency, these are illustrative samples rather than published client case studies — we're transparent about that.",
  },
]
