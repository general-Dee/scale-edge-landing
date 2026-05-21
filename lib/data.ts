export interface Testimonial {
  id: string
  initials: string
  name: string
  company: string
  beforeState: string
  afterState: string
  metric: string
  timeframe: string
  rating: number
  quote: string
}

export interface Service {
  title: string
  outcome: string
  icon: string
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

export const heroStats = [
  { label: "Funnels Built", value: 120, suffix: "+" },
  { label: "Avg ROAS Lift", value: 3.8, suffix: "×" },
  { label: "Go-Live", value: 48, suffix: "hr" },
  { label: "Done-For-You", value: 100, suffix: "%" },
]

export const services: Service[] = [
  { title: "Funnel Fix", outcome: "Plug leaks so your Meta budget actually converts — most see 3.8x ROAS lift within 14 days.", icon: "🔧" },
  { title: "Ad-to-Page Match", outcome: "We align your ad promise with landing page copy so visitors don't bounce.", icon: "🎯" },
  { title: "Mobile-First CRO", outcome: "Thumb-friendly flows that convert 80%+ mobile traffic into booked calls.", icon: "📱" },
  { title: "Urgency Engine", outcome: "Scarcity and social proof built into every stage — no more 'I'll think about it'.", icon: "⚡" },
]

export const processSteps: ProcessStep[] = [
  { step: 1, title: "Book Free Audit", description: "30-min Zoom call — no pitch, just funnel diagnosis." },
  { step: 2, title: "We Diagnose Leaks", description: "We audit your Meta ad → landing page → CTA flow." },
  { step: 3, title: "Fix Roadmap + Quote", description: "You get a prioritized action plan with fixed pricing." },
  { step: 4, title: "Implementation", description: "We rebuild your funnel in 48 hours or less." },
]

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    initials: "JD",
    name: "Jessica Diaz",
    company: "Bloom Cosmetics",
    beforeState: "Spent $12k on Meta ads, zero booked calls.",
    afterState: "Booked 34 calls in first month.",
    metric: "3.8x ROAS",
    timeframe: "14 days",
    rating: 5,
    quote: "Scale-Edge fixed our funnel and we started seeing results within a week. The audit was eye-opening.",
  },
  {
    id: "t2",
    initials: "MK",
    name: "Marcus Khoury",
    company: "FitFuel",
    beforeState: "High CTR but no Calendly bookings.",
    afterState: "23% conversion rate to booked calls.",
    metric: "312% increase",
    timeframe: "21 days",
    rating: 5,
    quote: "They found 7 leaks in our funnel we didn't even know existed. Now our ads actually pay for themselves.",
  },
  {
    id: "t3",
    initials: "SR",
    name: "Sarah Reynolds",
    company: "LeadFlow AI",
    beforeState: "Leads weren't qualified, wasted sales time.",
    afterState: "65% show rate on booked calls.",
    metric: "2.1x ROI",
    timeframe: "30 days",
    rating: 5,
    quote: "Best investment in our Meta ad infrastructure. The sticky CTA alone doubled our conversion rate.",
  },
]

export const faqs: FaqItem[] = [
  {
    question: "Is this just another agency that runs ads?",
    answer: "No. We don't run your ads — we fix your funnel so the traffic you're already paying for actually converts. We're funnel engineers, not media buyers. You keep your ad account.",
  },
  {
    question: "What if I've tried funnels before and nothing worked?",
    answer: "Most 'funnels' are just pages with a button. We use Meta-specific CRO: scent continuity, thumb-flow design, urgency stacking, and objection handling. Our clients see results because we match ad psychology, not just design.",
  },
  {
    question: "How fast will I see results?",
    answer: "Most clients see improved conversion within 7 days of implementation. The full 3.8x average ROAS lift typically shows within 14 days. We'll show you what to track.",
  },
  {
    question: "Do you run the ads too?",
    answer: "No — and that's intentional. We focus 100% on funnel conversion. You keep control of your ad budget. We just make sure every click converts.",
  },
  {
    question: "What's the investment?",
    answer: "The audit is completely free. If we move forward, funnel fixes start at $2,500 — one-time, no retainer. Most clients recoup that within their first 10 booked calls.",
  },
]

export const urgencyCopy = {
  spotsLeft: 3,
  deadline: "Friday at 11:59 PM",
  ctaText: "Claim My Free Audit →",
}
