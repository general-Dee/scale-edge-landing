import {
  Building2,
  School,
  ShoppingBag,
  Home,
  CreditCard,
  UserCheck,
  Rocket,
  LineChart,
  Search,
  Hammer,
  Rss,
  BarChart3,
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

export interface RetainerOffer {
  name: string
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

// Who We Serve — Nigerian SMEs with broken daily operations
export const icpSegments: IcpSegment[] = [
  { label: "Neighbourhood Multi-Counter Shops", icon: ShoppingBag },
  { label: "Schools (Nursery & Primary)", icon: School },
  { label: "Furniture & Home Goods Sellers", icon: Home },
  { label: "Real Estate Agencies", icon: Building2 },
]

// Primary offer: Setup + Monthly Retainer for operational systems (skills → cash flow, systems → scale)
export const snapshotOffer: SnapshotOffer = {
  name: "Operational System Setup",
  price: 250000,
  priceLabel: "₦250,000",
  tagline:
    "We build your system, then one monthly retainer covers maintenance and marketing — so you never pay once and get left alone.",
}

export const snapshotDeliverables =
  "Branded customer + staff system, WhatsApp alerts, data import, staff training, and 30 days support. Live in 7–14 days. Then one monthly retainer covers hosting, maintenance, updates, marketing, reporting, and priority support — ₦50,000/month for the first 3 months, then ₦75,000/month."

export const processSteps: ProcessStep[] = [
  { step: 1, title: "Discovery Call", description: "Map your current pain (lost orders, stock chaos, missing inquiries) and confirm the system fits." },
  { step: 2, title: "Fast Setup", description: "We configure, brand, integrate WhatsApp, and import initial data. You get a working system quickly." },
  { step: 3, title: "Training & Go-Live", description: "Staff training so the team starts using it the same week. First orders or inquiries flow immediately." },
  { step: 4, title: "Monthly Retainer", description: "Ongoing system ownership: updates, monitoring, reporting, and support. The system stays core to daily operations." },
]

export const processIcons = [CreditCard, UserCheck, Rocket, LineChart]

export const founderBio = {
  name: "Damilare Oshinowo",
  linkedinUrl: "https://www.linkedin.com/",
  linkedinLabel: "LinkedIn",
  bio:
    "Founder of Scale-Edge. I build operational systems for Nigerian businesses so owners stop losing money to manual processes. Skills create the cash flow; the system creates the scale. Direct access.",
}

export const samplePosts: SamplePost[] = [
  {
    id: "sp-shop",
    vertical: "Multi-Counter Shop",
    sampleLabel: "PROOF — based on systems we've built",
    hook: "Orders stop getting lost. Stock is visible. Customers get WhatsApp updates. Staff stop chasing messages.",
    body:
      "One system for supermarket, bakery, furniture and more. Mixed baskets, production, deliveries and till in one place.\n\nOwners see daily numbers. One monthly retainer keeps it maintained and marketed — not a website that dies after launch.",
    isSample: true,
  },
  {
    id: "sp-school",
    vertical: "School",
    sampleLabel: "PROOF — based on systems we've built",
    hook: "Parents stay informed. Admin stops chasing papers. Fees and announcements flow without friction.",
    body:
      "A portal that improves the customer's (parent's) position immediately. One monthly retainer keeps the system maintained, updated, and marketed.",
    isSample: true,
  },
]

export const leadMagnet = {
  title: "Free Checklist: Stop Losing Orders to Chaos",
  description:
    "A short checklist for shop owners and school admins who want to see where WhatsApp and paper are costing them sales and time.",
  privacyNote:
    "We'll only use your email to send the checklist and occasional updates. Unsubscribe anytime.",
  items: [
    "List where orders or inquiries currently get lost.",
    "Note the daily time spent chasing WhatsApp messages.",
    "Identify the one process that causes the most friction.",
    "Check if a customer + staff system would remove that friction.",
  ],
}

export const faqs: FaqItem[] = [
  {
    question: "What problem does this actually solve?",
    answer:
      "The expensive everyday problem of broken operations: lost orders, unclear stock, WhatsApp chaos, and no visibility. The system improves the customer's and staff's position immediately while giving the owner control.",
  },
  {
    question: "How much does it cost, and why a monthly retainer?",
    answer:
      "₦250,000 setup, then ₦50,000/month for the first 3 months, then ₦75,000/month ongoing. We build your system and then keep it maintained and marketed under one monthly fee — so you are not paying once and being left alone. The retainer keeps the system live, updated, and bringing in customers instead of becoming another abandoned tool.",
  },
  {
    question: "How fast do I see results?",
    answer:
      "Most systems go live in 7–14 days. First orders or inquiries can flow within days of training. You get a win early, not after months of development.",
  },
  {
    question: "Is there proof this works?",
    answer:
      "Yes. We've built operational systems for multi-counter shops, schools, and other local businesses. The approach is the same: remove the daily friction with a system that runs on a retainer.",
  },
  {
    question: "What if I want to cancel?",
    answer:
      "Monthly retainers can be cancelled with 30 days notice. The ₦250,000 setup fee is the one-time investment in building the system and getting it live.",
  },
]

export const funnelEngineeringOffer: RetainerOffer = {
  name: "Monthly Operations Retainer",
  tagline:
    "The system that keeps running and improving after setup so daily operations stay smooth.",
}

export const funnelEngineeringDeliverables =
  "Hosting, maintenance, updates, marketing, reporting, WhatsApp support, and minor improvements. Priority response so the system never becomes a burden."

export const funnelEngineeringStages: ProcessStep[] = [
  { step: 1, title: "Onboarding", description: "Discovery + data + branding." },
  { step: 2, title: "Configure", description: "Fast setup of the operational system." },
  { step: 3, title: "Launch", description: "Training and go-live." },
  { step: 4, title: "Retainer", description: "Ongoing system ownership and improvement." },
]

export const funnelEngineeringIcons = [Search, Hammer, Rocket, BarChart3]

export const funnelEngineeringPricingNote =
  "₦250,000 setup, then ₦50,000/month for the first 3 months, then ₦75,000/month ongoing. Build + maintenance + marketing under one monthly retainer. Exact fit confirmed on the discovery call."

export const funnelEngineeringFaqs: FaqItem[] = [
  {
    question: "What does the retainer actually buy?",
    answer:
      "A system that stays operational and improves over time, so you keep the daily gains without managing the technology yourself.",
  },
  {
    question: "Do I need technical skills?",
    answer:
      "No. We handle the system. Your team uses the simple staff side. Customers use the ordering or inquiry side.",
  },
]
