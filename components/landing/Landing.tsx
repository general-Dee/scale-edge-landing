import { WA_LINK, INCLUDED } from "./links"

const Check = () => (
  <svg viewBox="0 0 20 20" className="w-5 h-5 shrink-0 text-se-orange" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
  </svg>
)

const WaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
    <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1-.8 1-1 1.2-.4.2-.7.1a8.2 8.2 0 01-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 00-.9.4 3.6 3.6 0 00-1.1 2.7 6.3 6.3 0 001.3 3.3 14.4 14.4 0 005.5 4.9c2 .9 2.8.9 3.8.8a3.3 3.3 0 002.1-1.5 2.7 2.7 0 00.2-1.5c-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 00-8.6 15l-1.4 5 5.2-1.4A10 10 0 1012 2z" />
  </svg>
)

export function PrimaryCTA({ label = "Book a 15-min WhatsApp video call", className = "" }: { label?: string; className?: string }) {
  return (
    <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-se-orange px-6 py-4 text-base font-semibold text-white shadow-lg shadow-se-orange/25 transition hover:brightness-110 focus:outline-none focus-visible:ring-4 focus-visible:ring-se-orange/40 ${className}`}>
      <WaIcon /> {label}
    </a>
  )
}

export function SecondaryLink({ className = "" }: { className?: string }) {
  return (
    <a href={INCLUDED} className={`inline-flex items-center justify-center gap-1 px-2 py-3 text-base font-semibold text-se-ink underline decoration-se-orange decoration-2 underline-offset-4 hover:text-se-orange ${className}`}>
      See what&apos;s included →
    </a>
  )
}

function Phone({ src, alt, eager = false }: { src: string; alt: string; eager?: boolean }) {
  return (
    <div className="relative mx-auto w-[220px] sm:w-[250px] rounded-[2.2rem] border-[10px] border-se-ink bg-se-ink shadow-2xl">
      <div className="absolute left-1/2 top-1.5 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-se-ink" />
      <img src={src} alt={alt} width={390} height={844} loading={eager ? "eager" : "lazy"} decoding="async"
        className="block w-full rounded-[1.5rem] bg-white" />
    </div>
  )
}

function Laptop({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="rounded-t-xl border-[8px] border-b-0 border-se-ink bg-se-ink">
        <img src={src} alt={alt} width={1200} height={750} loading="lazy" decoding="async" className="block w-full rounded-t-md bg-white" />
      </div>
      <div className="mx-auto h-3 w-[108%] -translate-x-[3.7%] rounded-b-xl bg-gradient-to-b from-stone-400 to-stone-500" />
    </div>
  )
}

function Section({ id, eyebrow, title, intro, children, tone = "bg" }: {
  id?: string; eyebrow?: string; title: string; intro?: React.ReactNode; children: React.ReactNode; tone?: "bg" | "surface"
}) {
  return (
    <section id={id} className={`py-16 md:py-24 ${tone === "surface" ? "bg-se-surface border-y border-se-border" : ""}`}>
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center mb-10 md:mb-14">
          {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-se-orange">{eyebrow}</p>}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-se-ink">{title}</h2>
          {intro && <p className="mt-4 text-lg leading-relaxed text-se-muted-text">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-se-border/70 bg-se-bg/90 backdrop-blur">
      <div className="container-custom flex h-16 items-center justify-between">
        <a href="#top" className="text-xl font-bold tracking-tight text-se-ink"><span className="text-se-orange">Scale</span>-Edge</a>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-se-muted-text">
          <a href="#work" className="hover:text-se-ink">Our work</a>
          <a href="#what-you-get" className="hover:text-se-ink">What you get</a>
          <a href="#pricing" className="hover:text-se-ink">Pricing</a>
          <a href="#faq" className="hover:text-se-ink">FAQ</a>
        </nav>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
          className="rounded-lg bg-se-ink px-4 py-2 text-sm font-semibold text-white hover:bg-se-orange">Book a call</a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-10 pb-16 md:pt-20 md:pb-24">
      <div aria-hidden className="pointer-events-none absolute -top-40 right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-se-orange/10 blur-3xl" />
      <div className="container-custom grid items-center gap-12 md:grid-cols-2">
        <div className="text-center md:text-left">
          <p className="mb-4 inline-block rounded-full bg-se-orange/10 px-4 py-1.5 text-sm font-semibold text-se-orange">
            For Nigerian shops, bakeries, interiors &amp; property firms
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-se-ink">
            Take orders online and stop losing customers to WhatsApp chaos.
          </h1>
          <p className="mt-5 text-lg sm:text-xl leading-relaxed text-se-muted-text">
            We build your custom ordering site or business system, <strong className="text-se-ink">worth ₦10 million, completely free</strong>.
            Then <strong className="text-se-ink">₦300,000/month</strong> covers maintenance and Meta ads that bring customers to you.
          </p>
          <ul className="mt-6 flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2 text-sm font-medium text-se-ink">
            <li className="flex items-center gap-1.5"><Check /> No setup fee</li>
            <li className="flex items-center gap-1.5"><Check /> Live within two weeks</li>
            <li className="flex items-center gap-1.5"><Check /> 30-day guarantee</li>
          </ul>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
            <PrimaryCTA className="w-full sm:w-auto" />
            <SecondaryLink />
          </div>
        </div>
        <div className="relative">
          <div className="relative mx-auto w-[230px] sm:w-[260px] rounded-[2.4rem] border-[10px] border-se-ink bg-se-ink shadow-2xl">
            <div className="absolute left-1/2 top-1.5 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-se-ink" />
            <video className="block w-full rounded-[1.6rem] bg-white" width={360} height={780} autoPlay muted loop playsInline preload="metadata"
              poster="/work/hungrynomad-scroll-poster.webp" aria-label="Scrolling through the Hungry Nomad ordering site we built">
              <source src="/work/hungrynomad-scroll.webm" type="video/webm" />
              <source src="/work/hungrynomad-scroll.mp4" type="video/mp4" />
            </video>
          </div>
          <p className="mt-4 text-center text-sm text-se-muted-text">Real site we built: <a className="underline" href="https://hungrynomad.menu" target="_blank" rel="noopener noreferrer">hungrynomad.menu</a></p>
        </div>
      </div>
    </section>
  )
}

function Proof() {
  const items = [
    { name: "Hungry Nomad", url: "https://hungrynomad.menu", label: "hungrynomad.menu", what: "Food ordering site in Kaduna. It now takes 50–100 orders a week.", m: "/work/hungrynomad-mobile.webp", d: "/work/hungrynomad-desktop.webp" },
    { name: "Dallema", url: "https://dallema.vercel.app", label: "dallema.vercel.app", what: "Online shop built for a Kaduna shop: customers browse, order and pay from home.", m: "/work/dallema-mobile.webp", d: "/work/dallema-desktop.webp" },
  ]
  return (
    <Section id="work" eyebrow="Proof" title="Real systems we've built" intro="Not mock-ups. These are live sites for real Kaduna businesses." tone="surface">
      <div className="grid gap-10 lg:grid-cols-2">
        {items.map((x) => (
          <article key={x.name} className="rounded-3xl border border-se-border bg-se-bg p-6 md:p-8">
            <div className="hidden sm:block"><Laptop src={x.d} alt={`${x.name} website on desktop`} /></div>
            <div className="sm:hidden"><Phone src={x.m} alt={`${x.name} website on a phone`} /></div>
            <h3 className="mt-8 text-2xl font-bold text-se-ink">{x.name}</h3>
            <p className="mt-2 text-se-muted-text leading-relaxed">{x.what}</p>
            <a href={x.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-semibold text-se-orange underline underline-offset-4">Visit {x.label} ↗</a>
          </article>
        ))}
      </div>
    </Section>
  )
}

function WhatYouGet() {
  const v = [
    { t: "Bakeries", h: "Order desk", p: ["Take and manage orders in one place", "See what's due and when", "No more lost WhatsApp orders"] },
    { t: "Supermarkets & shops", h: "Ordering site + stock & till dashboard", p: ["Customers order from their phones", "Staff manage stock and the till", "An evening sales report every day"] },
    { t: "Interiors & furniture", h: "Catalogue + order tracker", p: ["Show your pieces in a clean online catalogue", "Track every order from enquiry to delivery"] },
    { t: "Property firms", h: "Property desk", p: ["Your listings in one place", "Enquiries that don't get lost"] },
  ]
  return (
    <Section id="what-you-get" eyebrow="What you get" title="Built for the way your business works" intro="Every build includes your domain and hosting, full setup with your products and branding, and hands-on staff training.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {v.map((x) => (
          <div key={x.t} className="flex flex-col rounded-2xl border border-se-border bg-se-surface p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-se-orange">{x.t}</p>
            <h3 className="mt-2 text-xl font-bold text-se-ink">{x.h}</h3>
            <ul className="mt-4 space-y-2.5 text-se-muted-text">
              {x.p.map((i) => <li key={i} className="flex gap-2"><Check /><span>{i}</span></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center"><SecondaryLink /></div>
    </Section>
  )
}

function HowItWorks() {
  const s = [
    { t: "A quick chat", d: "A 15-minute WhatsApp video call to understand your business." },
    { t: "We build and set up", d: "We build your software and load in your products and branding. Free." },
    { t: "You go live", d: "Live within two weeks. We train your staff step by step." },
    { t: "We bring customers", d: "Meta ads on Facebook and Instagram, plus ongoing maintenance." },
  ]
  return (
    <Section eyebrow="How it works" title="From first call to live in two weeks" tone="surface">
      <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {s.map((x, i) => (
          <li key={x.t} className="rounded-2xl border border-se-border bg-se-bg p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-se-orange text-lg font-bold text-white">{i + 1}</span>
            <h3 className="mt-4 text-lg font-bold text-se-ink">{x.t}</h3>
            <p className="mt-2 text-se-muted-text leading-relaxed">{x.d}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

function Guarantee() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl rounded-3xl bg-se-ink px-6 py-12 text-center text-white md:px-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-se-orange">The 30-day guarantee</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">Orders or enquiries in 30 days, or we keep working free.</h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-300">
            If your system doesn&apos;t bring orders or enquiries within 30 days, we keep working at no extra cost until it does.
          </p>
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <Section id="pricing" eyebrow="Pricing" title="Simple, honest pricing" tone="surface">
      <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
        <div className="rounded-3xl border border-se-border bg-se-bg p-8">
          <p className="font-semibold text-se-muted-text">The build</p>
          <p className="mt-2 text-5xl font-extrabold text-se-ink">₦0</p>
          <p className="mt-1 text-se-muted-text">Worth ₦10 million. No setup fee.</p>
          <ul className="mt-6 space-y-3 text-se-ink">
            {["Custom software for your business", "Your domain and hosting", "Full setup with your products and branding", "Hands-on staff training"].map((i) => <li key={i} className="flex gap-2"><Check />{i}</li>)}
          </ul>
        </div>
        <div className="relative rounded-3xl border-2 border-se-orange bg-se-surface p-8 shadow-xl shadow-se-orange/10">
          <p className="font-semibold text-se-muted-text">Monthly</p>
          <p className="mt-2 text-5xl font-extrabold text-se-ink">₦300,000<span className="text-lg font-semibold text-se-muted-text">/month</span></p>
          <p className="mt-1 text-se-muted-text">Cancel with 30 days&apos; notice.</p>
          <ul className="mt-6 space-y-3 text-se-ink">
            {["Ongoing maintenance, updates and fixes", "Meta ads on Facebook and Instagram", "30-day guarantee"].map((i) => <li key={i} className="flex gap-2"><Check />{i}</li>)}
          </ul>
          <PrimaryCTA label="Book your free call" className="mt-8 w-full" />
        </div>
      </div>
      <div className="mt-6 text-center"><SecondaryLink /></div>
    </Section>
  )
}

function Founder() {
  return (
    <Section eyebrow="Who you'll talk to" title="Meet the founder">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 rounded-3xl border border-se-border bg-se-surface p-8 text-center md:flex-row md:text-left">
        <img src="/founder-damilare.webp" srcSet="/founder-damilare-300.webp 300w, /founder-damilare.webp 600w" sizes="160px"
          alt="Damilare Oshinowo, founder of Scale-Edge Marketing LTD" width={160} height={160} loading="lazy" decoding="async"
          className="h-40 w-40 shrink-0 rounded-full object-cover ring-4 ring-se-orange/20" />
        <div>
          <h3 className="text-2xl font-bold text-se-ink">Damilare Oshinowo</h3>
          <p className="text-se-orange font-semibold">Founder, Scale-Edge Marketing LTD</p>
          <p className="mt-3 leading-relaxed text-se-muted-text">
            I founded Scale-Edge Marketing LTD in Nigeria. We build custom business systems (ordering sites, catalogues and dashboards) for local businesses free of charge, then ₦300,000/month covers maintenance and Meta-ads marketing. Recent work includes Dallema, built for a Kaduna shop, and Hungry Nomad, which takes 50–100 orders a week.
          </p>
        </div>
      </div>
    </Section>
  )
}

function FAQ() {
  const q = [
    ["Is the build really free?", "Yes. There is no setup fee. We build your custom system (worth ₦10 million) completely free. You pay ₦300,000/month, which covers maintenance plus Meta-ads marketing."],
    ["How fast will I be live?", "Within two weeks. We set it up with your products and branding and train your staff."],
    ["What does the ₦300,000/month cover?", "Ongoing maintenance, updates and fixes, plus Facebook and Instagram ads to bring customers to you."],
    ["What if it doesn't work?", "If the system doesn't bring orders or enquiries within 30 days, we keep working at no extra cost."],
    ["Can I cancel?", "Yes. You can cancel with 30 days' notice. There is no setup fee to lose."],
    ["What happens on the call?", "A 15-minute WhatsApp video call to understand your business and confirm the right system for you."],
  ]
  return (
    <Section id="faq" eyebrow="FAQ" title="Questions owners ask" tone="surface">
      <div className="mx-auto max-w-3xl divide-y divide-se-border rounded-2xl border border-se-border bg-se-bg">
        {q.map(([a, b]) => (
          <details key={a} className="group p-5 md:p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-se-ink">
              {a}<span className="text-2xl text-se-orange transition group-open:rotate-45" aria-hidden>+</span>
            </summary>
            <p className="mt-3 leading-relaxed text-se-muted-text">{b}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}

function FinalCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom text-center">
        <h2 className="mx-auto max-w-2xl text-3xl md:text-5xl font-extrabold leading-tight text-se-ink">Ready to get your system built free?</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-se-muted-text">₦10 million build, no setup fee. ₦300,000/month. Live within two weeks.</p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <PrimaryCTA className="w-full sm:w-auto" />
          <SecondaryLink />
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-se-border bg-se-surface py-10 pb-28 md:pb-10 text-center text-sm text-se-muted-text">
      <p className="font-semibold text-se-ink">Scale-Edge Marketing LTD</p>
      <p className="mt-1">Custom business systems built free, plus Meta-ads marketing for ₦300,000/month.</p>
      <p className="mt-3"><a href={WA_LINK} className="underline">WhatsApp +234 816 551 0842</a></p>
      <p className="mt-4 text-xs">© {new Date().getFullYear()} Scale-Edge Marketing LTD. All rights reserved.</p>
    </footer>
  )
}

function StickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-se-border bg-se-surface/95 p-3 backdrop-blur md:hidden">
      <PrimaryCTA label="Book a free 15-min call" className="w-full py-3.5" />
    </div>
  )
}

export function Landing() {
  return (
    <main className="relative overflow-x-hidden">
      <Header />
      <Hero />
      <Proof />
      <WhatYouGet />
      <HowItWorks />
      <Guarantee />
      <Pricing />
      <Founder />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyBar />
    </main>
  )
}
