import Link from "next/link";
import { ArrowRight, BatteryFull, BellRing, Bluetooth, Check, Droplets, Sprout, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { PlantReadings } from "./plant-readings";

export const container = "mx-auto w-full max-w-6xl px-4 md:px-6";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 rounded-md text-base font-semibold">
      <span className="grid size-7 place-items-center rounded-lg bg-primary text-primary-foreground">
        <Sprout className="size-4" aria-hidden />
      </span>
      Rootline
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-3 z-40 px-4">
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-3xl items-center justify-between gap-4 rounded-2xl border bg-background/80 py-2 pr-2 pl-4 backdrop-blur-md"
      >
        <Logo />
        <ul className="hidden items-center gap-1 text-sm md:flex">
          {[
            ["How it works", "#how"],
            ["Pricing", "#pricing"],
            ["FAQ", "#faq"],
          ].map(([label, href]) => (
            <li key={href}>
              <a href={href} className="rounded-md px-3 py-2 text-muted-foreground transition-colors duration-200 hover:text-foreground">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <Button asChild>
          <a href="#pricing">Order a sensor</a>
        </Button>
      </nav>
    </header>
  );
}

export function HeroSplit() {
  return (
    <section className="pt-28 pb-8 md:pt-40 md:pb-12">
      <div className={`${container} grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16`}>
        <div className="flex max-w-[680px] flex-col items-start gap-6">
          <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
            Rootline soil sensor
            <br />
            for houseplants
          </h1>
          <p className="max-w-[560px] text-lg text-muted-foreground">
            It reads moisture, light and temperature every 15 minutes and tells your phone which pot needs water.
            One AA battery lasts about 14 months.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <a href="#pricing">
                Order a sensor for $39
                <ArrowRight data-icon="inline-end" aria-hidden />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#how">How it works</a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Rated 4.7 out of 5 by 2,318 owners · free returns for 30 days
          </p>
        </div>
        <PlantReadings className="w-full max-w-md justify-self-center lg:justify-self-end" />
      </div>
    </section>
  );
}

const benefits = [
  {
    icon: Droplets,
    title: "Knows which pot is dry",
    body: "A 6 cm probe measures moisture at root depth every 15 minutes, so you water the plant that needs it, not all of them.",
  },
  {
    icon: BellRing,
    title: "Tells you the evening before",
    body: "The app tracks how fast each pot dries and sends one notification the evening before it reaches the dry limit.",
  },
  {
    icon: Sun,
    title: "Checks the light against the species",
    body: "Light is measured in lux and compared with the range for your plant from a list of 1,400 species.",
  },
  {
    icon: BatteryFull,
    title: "About 14 months per battery",
    body: "One AA battery, no charging. The app warns you two weeks before it runs out.",
  },
];

export function Benefits() {
  return (
    <section className="py-20 md:py-24" aria-labelledby="benefits-title">
      <div className={container}>
        <h2 id="benefits-title" className="max-w-[680px] text-3xl font-semibold md:text-4xl" data-reveal>
          What the sensor does
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2" data-reveal>
          {benefits.map(({ icon: Icon, title, body }) => (
            <Card key={title} className="gap-4 rounded-2xl p-6 shadow-none">
              <span className="grid size-10 place-items-center rounded-xl bg-primary-subtle text-primary-subtle-foreground">
                <Icon className="size-5" aria-hidden />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-base text-muted-foreground">{body}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: Sprout, title: "Push it into the soil", body: "Up to the line on the probe, about 2 cm from the stem." },
  { icon: Bluetooth, title: "Pair it in the app", body: "Hold the phone near the sensor and pick the plant species." },
  { icon: BellRing, title: "Water when it asks", body: "One notification per pot, the evening before it gets too dry." },
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-card py-20 md:py-24" aria-labelledby="how-title">
      <div className={container}>
        <h2 id="how-title" className="text-3xl font-semibold md:text-4xl" data-reveal>
          Set up in three steps
        </h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-3" data-reveal>
          {steps.map(({ icon: Icon, title, body }, i) => (
            <li key={title} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full border font-mono text-sm tabular-nums">
                  {i + 1}
                </span>
                <Icon className="size-5 text-muted-foreground" aria-hidden />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-base text-muted-foreground">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const quotes = [
  {
    text: "I have 23 plants and used to water all of them on Sundays. Now I water four or five a day and lost none since March.",
    name: "Maren Holt",
    detail: "Rotterdam, 23 plants",
  },
  {
    text: "The light reading told me the calathea was in the wrong room. Moved it two metres and it stopped curling.",
    name: "Diego Ferreira",
    detail: "Lisbon, 9 plants",
  },
];

export function Proof() {
  return (
    <section className="py-20 md:py-24" aria-labelledby="proof-title">
      <div className={container}>
        <h2 id="proof-title" className="text-3xl font-semibold md:text-4xl" data-reveal>
          What owners say
        </h2>
        <dl className="mt-12 grid grid-cols-2 gap-6 border-y py-8 md:grid-cols-4" data-reveal>
          {[
            ["2,318", "reviews, 4.7 average"],
            ["14 months", "per AA battery"],
            ["15 min", "between readings"],
            ["1,400", "species in the app"],
          ].map(([value, label]) => (
            <div key={label} className="flex flex-col gap-1">
              <dt className="order-2 text-sm text-muted-foreground">{label}</dt>
              <dd className="order-1 text-3xl font-semibold tabular-nums">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8 grid gap-4 md:grid-cols-2" data-reveal>
          {quotes.map((q) => (
            <figure key={q.name} className="flex flex-col justify-between gap-6 rounded-2xl border bg-card p-6">
              <blockquote className="text-lg">“{q.text}”</blockquote>
              <figcaption className="text-sm">
                <span className="font-medium">{q.name}</span>
                <span className="text-muted-foreground"> · {q.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const plans = [
  { name: "One sensor", price: "$39", note: "For one pot", items: ["Sensor and AA battery", "Rootline app", "Free returns for 30 days"] },
  {
    name: "Three sensors",
    price: "$99",
    note: "$33 per sensor",
    items: ["Three sensors and batteries", "Rootline app", "Free returns for 30 days", "Free shipping in the EU"],
    featured: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-card py-20 md:py-24" aria-labelledby="pricing-title">
      <div className={container}>
        <h2 id="pricing-title" className="text-3xl font-semibold md:text-4xl" data-reveal>
          Pricing
        </h2>
        <p className="mt-4 max-w-[560px] text-lg text-muted-foreground" data-reveal>
          No subscription. The app and its updates are included.
        </p>
        <div className="mt-12 grid gap-4 md:grid-cols-2" data-reveal>
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`rounded-2xl p-6 shadow-none ${plan.featured ? "border-primary ring-1 ring-primary" : ""}`}
            >
              <CardHeader className="gap-1 px-0">
                <CardTitle className="text-xl font-semibold">{plan.name}</CardTitle>
                <CardDescription className="text-sm">{plan.note}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-6 px-0">
                <p className="text-5xl font-semibold tabular-nums">{plan.price}</p>
                <ul className="flex flex-1 flex-col gap-3">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-base">
                      <Check className="size-4 shrink-0 text-primary" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button size="lg" variant={plan.featured ? "default" : "outline"} className="w-full">
                  Order {plan.name.toLowerCase()}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  ["Which plants does it work with?", "Any plant in a pot with soil or a soil mix at least 7 cm deep. It does not work in water, LECA or pure bark."],
  ["Do I need Wi‑Fi?", "No. The sensor talks to your phone over Bluetooth when you are within about 10 metres. Readings are stored on the sensor for 9 days."],
  ["Can I water with the sensor in the pot?", "Yes. The top is splash proof (IPX4). Do not submerge it."],
  ["Which phones are supported?", "iPhone with iOS 16 or later and Android 10 or later."],
  ["How do returns work?", "Send it back within 30 days in any condition and you get the full price back. We pay the return label."],
  ["What happens to my data?", "Readings stay on your phone. An account is optional and only needed to sync between two phones."],
];

export function Faq() {
  return (
    <section id="faq" className="py-20 md:py-24" aria-labelledby="faq-title">
      <div className={`${container} grid gap-12 lg:grid-cols-[1fr_2fr]`}>
        <h2 id="faq-title" className="text-3xl font-semibold md:text-4xl" data-reveal>
          Questions
        </h2>
        <Accordion type="single" collapsible className="w-full" data-reveal>
          {faqs.map(([q, a]) => (
            <AccordionItem key={q} value={q}>
              <AccordionTrigger className="py-5 text-base font-medium">{q}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className={`${container} pb-20 md:pb-24`} aria-labelledby="cta-title">
      <div className="flex flex-col items-start gap-6 rounded-3xl bg-inverse px-6 py-12 text-inverse-foreground md:px-12 md:py-16" data-reveal>
        <h2 id="cta-title" className="max-w-[680px] text-3xl font-semibold md:text-4xl">
          Rootline soil sensor, $39
        </h2>
        <p className="max-w-[560px] text-lg text-inverse-muted-foreground">
          Ships in two working days. Free returns for 30 days.
        </p>
        <Button asChild size="lg">
          <a href="#pricing">
            Order a sensor for $39
            <ArrowRight data-icon="inline-end" aria-hidden />
          </a>
        </Button>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t py-10">
      <div className={`${container} flex flex-col gap-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between`}>
        <Logo />
        <p>Rootline is a fictional product. This page is a demo of the ob192/landing-skills skills.</p>
        <Separator className="md:hidden" />
        <a href="https://github.com/ob192/landing-skills" className="rounded-md underline underline-offset-4 hover:text-foreground">
          Skills on GitHub
        </a>
      </div>
    </footer>
  );
}
