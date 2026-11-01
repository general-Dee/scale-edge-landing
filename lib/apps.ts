// Portfolio data for the "Apps we've built" section on the landing page.
// Edit this file to add, remove or reword apps. Only link URLs that are
// confirmed live; leave `url` undefined to show the app without a link.

export type AppTag = "Retail" | "Food ordering" | "AI tool" | "Internal tool" | "Bookshop" | "Client site"

export interface BuiltApp {
  name: string
  tag: AppTag
  /** Small highlight pill, e.g. "Case study". Optional. */
  badge?: string
  description: string
  stack?: string[]
  url?: string
  /** Link text shown on the card, e.g. "Visit site" or "View app". */
  linkText?: "Visit site" | "View app"
}

export interface ClientSite {
  name: string
  /** Domains shown for this client. `live: true` renders as a link. */
  domains: { domain: string; live: boolean }[]
}

export const builtApps: BuiltApp[] = [
  {
    name: "Dalema",
    tag: "Retail",
    badge: "Case study",
    description:
      "Mobile-first retail web app for a neighbourhood shop with Abuja and Kaduna branches, covering Supermarket, Bakery, Furniture and Bookstore departments.",
    // The live URL really is spelled with two Ls (the one-L address 404s).
    url: "https://dallema.vercel.app",
    linkText: "Visit site",
  },
  {
    name: "Hungry Nomad",
    tag: "Food ordering",
    description: "Food-ordering app built for the Kaduna market.",
    stack: ["Next.js", "Supabase", "Paystack"],
    url: "https://hungrynomad.menu",
    linkText: "View app",
  },
  {
    name: "Delisha",
    tag: "Food ordering",
    description: "High-end food-ordering app for Kaduna restaurants, built with a premium look and feel.",
    url: "https://delisha-app.vercel.app",
    linkText: "View app",
  },
  {
    name: "Gold Journal AI",
    tag: "AI tool",
    description:
      "AI trading and gold journal with analytics, discipline tracking and a mobile-first experience.",
    stack: ["TradingView"],
    url: "https://gold-journal-ai.vercel.app",
    linkText: "View app",
  },
  {
    name: "Funnel Ladder",
    tag: "Internal tool",
    description:
      "Our in-house marketing-ops tool for tracking ad spend and return, new-lead alerts and pipeline hygiene.",
    url: "https://funnel-app-opal.vercel.app",
    linkText: "View app",
  },
  {
    name: "Hafiz Books",
    tag: "Bookshop",
    description: "Bookstore client site with a secure admin area and password-reset setup.",
    url: "https://hafizbooks-store.vercel.app",
    linkText: "Visit site",
  },
  {
    name: "Uniform Nigeria",
    tag: "Retail",
    badge: "Case study build",
    description: "Mattress-finder quiz and online store that helps shoppers pick the right mattress.",
    url: "https://uniform-nigeria.vercel.app",
    linkText: "Visit site",
  },
]

export const moreClientSites: ClientSite[] = [
  { name: "Voltream", domains: [{ domain: "admin.voltream.com", live: false }] },
  { name: "Damau Milk Farm", domains: [{ domain: "damaumilkfarm.com", live: false }] },
  {
    name: "KMDMC",
    domains: [
      { domain: "kadunamarkets.com", live: false },
      { domain: "kadunaproperties.org", live: false },
    ],
  },
]
