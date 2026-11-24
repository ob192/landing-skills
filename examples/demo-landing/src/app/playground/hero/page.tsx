import type { Metadata } from "next";
import { guardPlayground } from "@/lib/playground";
import { ArrowRight, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSplit, container } from "@/components/landing/sections";
import { plants } from "@/components/landing/plant-readings";

export const metadata: Metadata = { title: "Hero explorations · Rootline", robots: { index: false } };

function Label({ n, name, idea }: { n: number; name: string; idea: string }) {
  return (
    <div className={`${container} pt-8`}>
      <p className="text-sm font-semibold">
        {n}. {name}
      </p>
      <p className="text-sm text-muted-foreground">{idea}</p>
    </div>
  );
}

function HeroCentered() {
  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-24">
      <div className={`${container} flex flex-col items-center gap-6 text-center`}>
        <h1 className="max-w-[680px] text-4xl font-semibold sm:text-5xl lg:text-6xl">
          Rootline soil sensor
          <br />
          for houseplants
        </h1>
        <p className="max-w-[560px] text-lg text-muted-foreground">
          Reads moisture, light and temperature every 15 minutes and tells your phone which pot needs water.
        </p>
        <Button size="lg">
          Order a sensor for $39
          <ArrowRight data-icon="inline-end" aria-hidden />
        </Button>
        <ul className="mt-8 grid w-full max-w-4xl gap-3 text-left sm:grid-cols-3">
          {plants.map((p) => (
            <li key={p.name} className="flex flex-col gap-3 rounded-2xl border bg-card p-4">
              <div className="flex items-center justify-between">
                <span className="text-base font-medium">{p.name}</span>
                <span className="font-mono text-sm tabular-nums">{p.moisture}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-border">
                <div className="h-full rounded-full bg-primary" style={{ width: `${p.moisture}%` }} />
              </div>
              <span className="text-sm text-muted-foreground">{p.room}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function HeroDarkReading() {
  return (
    <section className="bg-inverse text-inverse-foreground">
      <div className={`${container} grid items-center gap-12 py-24 md:py-32 lg:grid-cols-2`}>
        <div className="flex max-w-[680px] flex-col items-start gap-6">
          <h1 className="text-4xl font-semibold sm:text-5xl">
            Rootline soil sensor
            <br />
            for houseplants
          </h1>
          <p className="max-w-[560px] text-lg text-inverse-muted-foreground">
            One reading every 15 minutes. One notification the evening before a pot gets too dry.
          </p>
          <Button size="lg">
            Order a sensor for $39
            <ArrowRight data-icon="inline-end" aria-hidden />
          </Button>
        </div>
        <div className="flex flex-col gap-2 lg:items-end lg:text-right">
          <span className="flex items-center gap-2 text-sm text-inverse-muted-foreground">
            <Droplets className="size-4" aria-hidden />
            Calathea · Bathroom
          </span>
          <span className="font-mono text-8xl font-semibold tabular-nums md:text-9xl">14%</span>
          <span className="text-base">Water today</span>
        </div>
      </div>
    </section>
  );
}

export default function HeroExplorations() {
  guardPlayground();
  return (
    <main>
      <Label n={1} name="Split with the app" idea="Copy left, the real app screen right. Shows the product at once; busiest of the three." />
      <HeroSplit />
      <div className="h-svh" aria-hidden />
      <Label n={2} name="Centred with a readings strip" idea="Copy first, three plant cards below. Calm and symmetric; the product reads as data, not as an app." />
      <HeroCentered />
      <div className="h-svh" aria-hidden />
      <Label n={3} name="Dark band, one big reading" idea="A single reading as the visual. Strongest contrast; says less about what the app shows." />
      <HeroDarkReading />
      <div className="h-svh" aria-hidden />
    </main>
  );
}
