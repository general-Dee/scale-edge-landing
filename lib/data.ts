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

// Who We Serve — Nigerian SMEs that need operational digital systems
export const icpSegments: IcpSegment[] = [
  { label: "Neighbourhood Shops & Supermarkets", icon: ShoppingBag },
  { label: "Schools (Nursery & Primary)", icon: School },
  { label: "Furniture & Home Goods Sellers", icon: Home },
  { label: "Real Estate Agencies", icon: Building2 },
]

// Primary offer: Setup + Monthly SaaS Retainer for operational systems
export const snapshotOffer: SnapshotOffer = {
  name: "Business System Setup",
  price: 150000,
  priceLabel: "₦150,000",
  tagline:
    "One-time setup of your custom web/mobile system (shop, school, or property desk) plus ongoing monthly retainer for updates, support, and operations.",
}

export const snapshotDeliverables =
  "Full setup of your branded system (customer app + staff dashboard), WhatsApp integration, staff training, initial data import, and 30 days of support. Then monthly retainer covers hosting, updates, reporting, and priority support."

export const processSteps: ProcessStep[] = [
  { step: 1, title: "Discovery Call", description: "Short WhatsApp or call to understand your operations, departments, and what the system needs to handle daily." },
  { step: 2, title: "Setup & Branding", description: "We configure your system, add your branding, import initial data, and integrate WhatsApp alerts." },
  { step: 3, title: "Training & Launch", description: "Staff training session + go-live. Your team starts using the customer and admin sides immediately." },
  { step: 4, title: "Monthly Retainer", description: "Ongoing hosting, updates, reporting, and support so the system keeps running smoothly and improves over time." },
]

export const processIcons = [CreditCard, UserCheck, Rocket, LineChart]

export const founderBio = {
  name: "Damilare Oshinowo",
  linkedinUrl: "https://www.linkedin.com/",
  linkedinLabel: "LinkedIn",
  bio:
    "Founder of Scale-Edge Marketing LTD. I build practical digital systems for Nigerian businesses so owners can focus on operations instead of manual processes. Direct access — no layers.",
}

export const samplePosts: SamplePost[] = [
  {
    id: "sp-shop",
    vertical: "Multi-Counter Shop",
    sampleLabel: "SAMPLE — illustrates our approach",
    hook: "One app for supermarket, bakery, furniture, and bookstore — customers order, staff manage stock, and you see everything in one place.",
    body:
      "No more paper slips or WhatsApp chaos. The system handles mixed baskets, production schedules, deliveries, and till in real time.\n\nOwners get daily reports. Customers get WhatsApp updates. Staff get a simple desk.\n\nThat's what a steady retainer system looks like for neighbourhood businesses.",
    isSample: true,
  },
  {
    id: "sp-school",
    vertical: "School",
    sampleLabel: "SAMPLE — illustrates our approach",
    hook: "Parents get announcements and fee updates. Admin tracks everything without chasing papers.",
    body:
      "A simple portal that keeps parents informed and admin organised. Fees, announcements, and basic reports in one place.\n\nMonthly retainer means the system stays updated and supported — not a one-time website that gets abandoned.",
    isSample: true,
  },
]

export const leadMagnet = {
  title: "Free Checklist: Is Your Business Ready for a Digital System?",
  description:
    "A short checklist for shop owners, school admins, and sellers who want to stop losing orders or messages to WhatsApp chaos.",
  privacyNote:
    "We'll only use your email to send the checklist and occasional updates. Unsubscribe anytime.",
  items: [
    "List your main daily operations (orders, stock, fees, inquiries).",
    "Note where WhatsApp or paper is causing delays or lost sales.",
    "Identify who on your team needs access.",
    "Decide if you need customer ordering, staff dashboard, or both.",
    "Check if you can allocate 30 minutes for setup training.",
  ],
}

export const faqs: FaqItem[] = [
  {
    question: "What businesses do you support?",
    answer:
      "Neighbourhood multi-counter shops (supermarket + bakery + furniture etc.), schools, furniture sellers, and real estate agencies in Nigeria. Systems built for local operations with WhatsApp integration.",
  },
  {
    question: "How does the retainer work?",
    answer:
      "After the one-time setup fee, you pay a monthly retainer (typically ₦35,000–₦65,000 depending on features and volume). This covers hosting, updates, support, and improvements so the system stays operational.",
  },
  {
    question: "Is this a custom build or SaaS?",
    answer:
      "It's a managed SaaS-style system. We configure and brand it for your business, then keep it running on a monthly retainer. You get a dedicated customer side and staff dashboard without managing servers yourself.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most systems go live in 7–14 days after the discovery call and data provision. Training is included so your team can start using it immediately.",
  },
  {
    question: "Can I cancel the retainer?",
    answer:
      "Yes. Monthly retainers can be cancelled with 30 days notice. Setup is a one-time investment in your operational system.",
  },
]

export const funnelEngineeringOffer: RetainerOffer = {
  name: "Monthly Operations Retainer",
  tagline:
    "Ongoing support, updates, reporting, and improvements for your business system so it keeps running smoothly every day.",
}

export const funnelEngineeringDeliverables =
  "Monthly hosting, security updates, performance monitoring, basic reporting, WhatsApp support, and minor feature tweaks. Priority response within business hours."

export const funnelEngineeringStages: ProcessStep[] = [
  { step: 1, title: "Onboarding", description: "Discovery call + data collection + branding." },
  { step: 2, title: "Build & Configure", description: "System setup tailored to your operations." },
  { step: 3, title: "Launch & Train", description: "Go-live with staff training." },
  { step: 4, title: "Monthly Operations", description: "Retainer covers ongoing support and improvements." },
]

export const funnelEngineeringIcons = [Search, Hammer, Rocket, BarChart3]

export const funnelEngineeringPricingNote =
  "Setup from ₦150,000 + monthly retainer from ₦35,000. Exact pricing discussed on the call based on your needs."

export const funnelEngineeringFaqs: FaqItem[] = [
  {
    question: "What is included in the monthly retainer?",
    answer:
      "Hosting, updates, monitoring, reporting, and support so your system stays operational without you managing technical details.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "No. We handle the technical side. Your team uses a simple staff dashboard and customers use the ordering or inquiry side.",
  },
]
