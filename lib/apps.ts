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
  urlLabel?: string
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
      "Mobile-first retail web app for a neighbourhood shop with Abuja and Lagos branches, covering Supermarket, Bakery, Furniture and Bookstore departments.",
    url: "https://dallema.vercel.app",
    // The live URL really is spelled with two Ls; show the brand name as the label.
    urlLabel: "Dalema",
  },
  {
    name: "Hungry Nomad",
    tag: "Food ordering",
    description: "Food-ordering app built for the Kaduna market.",
    stack: ["Next.js", "Supabase", "Paystack"],
    url: "https://hungrynomad.menu",
    urlLabel: "hungrynomad.menu",
  },
  {
    name: "Delisha",
    tag: "Food ordering",
    description: "High-end food-ordering app for Kaduna restaurants, built with a premium look and feel.",
  },
  {
    name: "Gold Journal AI",
    tag: "AI tool",
    description:
      "AI trading and gold journal with analytics, discipline tracking and a mobile-first experience.",
    stack: ["TradingView"],
  },
  {
    name: "Funnel Ladder",
    tag: "Internal tool",
    description:
      "Our in-house marketing-ops tool for tracking ad spend and return, new-lead alerts and pipeline hygiene.",
  },
  {
    name: "Hafiz Books",
    tag: "Bookshop",
    description: "Bookstore client site with a secure admin area and password-reset setup.",
    url: "https://hafizbooks-store.vercel.app",
    urlLabel: "hafizbooks-store.vercel.app",
  },
  {
    name: "Uniform Nigeria",
    tag: "Retail",
    badge: "Case study build",
    description: "Mattress-finder quiz and online store that helps shoppers pick the right mattress.",
    url: "https://uniform-nigeria.vercel.app",
    urlLabel: "uniform-nigeria.vercel.app",
  },
]

export const moreClientSites: ClientSite[] = [
  { name: "Voltream", domains: [{ domain: "admin.voltream.com", live: true }] },
  { name: "Damau Milk Farm", domains: [{ domain: "damaumilkfarm.com", live: true }] },
  {
    name: "KMDMC",
    domains: [
      { domain: "kadunamarkets.com", live: true },
      { domain: "kadunaproperties.org", live: true },
    ],
  },
]
