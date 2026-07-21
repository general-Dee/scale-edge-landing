import {
  Building2,
  Stethoscope,
  HardHat,
  Scale,
  PenLine,
  Send,
  Compass,
  BarChart3,
  Calendar,
  UserCheck,
  Rocket,
  LineChart,
  type LucideIcon,
} from "lucide-react"

export interface IcpSegment {
  label: string
  icon: LucideIcon
}

export interface Service {
  title: string
  outcome: string
  details: string[]
  icon: LucideIcon
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

// "Who We Serve" — the ICPs this retainer is built for
export const icpSegments: IcpSegment[] = [
  { label: "Real Estate Agents", icon: Building2 },
  { label: "Dental & Medical Practices", icon: Stethoscope },
  { label: "Contractors", icon: HardHat },
  { label: "Law Firms", icon: Scale },
]

// "What's Included" — the four retainer pillars
export const services: Service[] = [
  {
    title: "Content & Ghostwriting",
    outcome: "Consistent, in-your-voice LinkedIn posts so you show up every week without writing a word.",
    details: [
      "3-4 posts per week, written and scheduled for you",
      "Voice-matched to how you actually talk to clients",
      "Topics pulled from your real expertise and deal flow",
    ],
    icon: PenLine,
  },
  {
    title: "Outbound & DM Lead Gen",
    outcome: "Direct outreach to your ideal local prospects — not just hoping the algorithm notices you.",
    details: [
      "Targeted connection requests to your ICP each week",
      "Personalized DM sequences that don't feel like spam",
      "Warm conversations handed to you to close",
    ],
    icon: Send,
  },
  {
    title: "Strategy & Positioning",
    outcome: "A clear point of view on what you post and why, so every piece of content earns its place.",
    details: [
      "Monthly content calendar built around your goals",
      "Positioning that separates you from every other agent, dentist, or contractor on LinkedIn",
      "Direct access to the founder for strategy, not a junior account manager",
    ],
    icon: Compass,
  },
  {
    title: "Performance Reporting",
    outcome: "Plain-English monthly reports on what's working, so you always know where the retainer is going.",
    details: [
      "Monthly report on reach, engagement, and DM replies",
      "Live call to walk through the numbers together",
      "Adjustments based on what's actually landing with your audience",
    ],
    icon: BarChart3,
  },
]

// Retainer onboarding flow
export const processSteps: ProcessStep[] = [
  { step: 1, title: "Free Strategy Call", description: "30 minutes to understand your business, your ideal clients, and whether this is a fit." },
  { step: 2, title: "Onboarding & Voice-Match (Week 1)", description: "We learn how you talk, what you know, and who you serve — no generic templates." },
  { step: 3, title: "Content + Outreach Go Live (Week 2)", description: "Your posts start publishing and outbound DMs start going out to your target prospects." },
  { step: 4, title: "Monthly Strategy & Reporting Call", description: "We review what's working, adjust the plan, and keep the content calendar sharp." },
]

export const processIcons = [Calendar, UserCheck, Rocket, LineChart]

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
    question: "Is $800-1,000/month worth it for a local business?",
    answer:
      "If it replaces even one missed referral or one new client a quarter, it typically pays for itself. Unlike paid ads, the content and relationships we build compound — your LinkedIn presence and outbound conversations keep working even in months you don't spend a dollar on advertising.",
  },
  {
    question: "Why LinkedIn instead of Meta or Google ads?",
    answer:
      "Local service businesses like real estate, dental, contracting, and law rely on trust — and LinkedIn is where decision-makers already expect professional credibility. Ads can get you clicks; consistent LinkedIn content and direct outreach build the kind of trust that turns into referrals and repeat business, without an ongoing ad spend.",
  },
  {
    question: "You're a new agency — how do I know this works?",
    answer:
      "Honestly, we don't have a decade of case studies yet — we're upfront about that. What we do offer: you work directly with the founder (see the Founder Credibility section above), you can see real examples of the writing style we use, and you're never locked into a contract. If it's not working, you cancel — no penalty, no fine print.",
  },
  {
    question: "How much time does this require from me?",
    answer:
      "About 30-45 minutes a month after onboarding: one strategy call to keep content aligned with what's actually happening in your business, and quick replies when a DM conversation needs your voice. We handle the writing, scheduling, and outreach.",
  },
  {
    question: "Is the content actually written in my voice?",
    answer:
      "Yes — that's the point of the onboarding week. We interview you about how you talk to clients, pull real stories and expertise from your business, and write in that voice rather than generic templates. You approve everything before it's published.",
  },
  {
    question: "Where can I see real examples of your work?",
    answer:
      "Check the Founder Credibility section above for our founder's own LinkedIn, and the Proof of Craft section for sample posts written in the style we'd use for your industry. Since we're a new agency, these are illustrative samples rather than published client case studies — we're transparent about that.",
  },
]
