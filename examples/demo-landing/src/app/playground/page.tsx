import type { Metadata } from "next";
import { guardPlayground } from "@/lib/playground";
import { ArrowRight, Droplets, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ContrastSwatch } from "@/components/playground/contrast-swatch";
import { PlantReadings } from "@/components/landing/plant-readings";

export const metadata: Metadata = { title: "Playground · Rootline", robots: { index: false } };

const pairs = [
  ["background", "bg-background", "text-foreground"],
  ["card", "bg-card", "text-card-foreground"],
  ["muted", "bg-muted", "text-muted-foreground"],
  ["primary", "bg-primary", "text-primary-foreground"],
  ["primary-subtle", "bg-primary-subtle", "text-primary-subtle-foreground"],
  ["warning-subtle", "bg-warning-subtle", "text-warning-subtle-foreground"],
  ["error-subtle", "bg-error-subtle", "text-error-subtle-foreground"],
  ["inverse", "bg-inverse", "text-inverse-foreground"],
] as const;

const steps = [
  ["text-6xl", "Hero heading, desktop"],
  ["text-5xl", "Hero heading, tablet; prices"],
  ["text-4xl", "Section heading, desktop"],
  ["text-3xl", "Section heading, phone; stats"],
  ["text-xl", "Card title"],
  ["text-lg", "Lead paragraph"],
  ["text-base", "Body"],
  ["text-sm", "Captions, nav"],
  ["text-xs", "Labels on readings"],
] as const;

const radii = [
  ["rounded-md", "small buttons"],
  ["rounded-lg", "buttons, inputs"],
  ["rounded-xl", "icon tiles, swatches"],
  ["rounded-2xl", "cards, nav bar"],
  ["rounded-3xl", "app screen, CTA band"],
  ["rounded-full", "badges, step numbers"],
] as const;

const variants = ["default", "outline", "secondary", "ghost", "link"] as const;
const sizes = ["sm", "default", "lg"] as const;
const states = [
  ["Default", undefined],
  ["Hover", "hover"],
  ["Focus", "focus"],
  ["Pressed", "active"],
] as const;

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="flex flex-col gap-6 border-t py-12">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}

export default function Playground() {
  guardPlayground();

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6">
      <header className="flex flex-col gap-2 pb-12">
        <p className="text-sm text-muted-foreground">Dev only · not indexed</p>
        <h1 className="text-4xl font-semibold">Rootline design system</h1>
        <p className="max-w-[640px] text-base text-muted-foreground">
          Tokens live in <code className="font-mono text-sm">src/app/globals.css</code>, decisions in{" "}
          <code className="font-mono text-sm">DESIGN.md</code>, primitives in{" "}
          <code className="font-mono text-sm">src/components/ui</code>. Everything below renders from them.
        </p>
      </header>

      <Section id="colours" title="Colours as pairs, with measured contrast">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {pairs.map(([name, surface, text]) => (
            <ContrastSwatch key={name} name={name} surface={surface} text={text} />
          ))}
        </div>
      </Section>

      <Section id="type" title="Type: Geist, leading fitted per step">
        <div className="flex flex-col divide-y">
          {steps.map(([cls, use]) => (
            <div key={cls} className="grid items-baseline gap-2 py-3 md:grid-cols-[10rem_1fr]">
              <div className="flex flex-col">
                <code className="font-mono text-xs">{cls}</code>
                <span className="text-xs text-muted-foreground">{use}</span>
              </div>
              <p className={`${cls} truncate font-semibold`}>Rootline soil sensor for houseplants</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="radius" title="Radius">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
          {radii.map(([cls, use]) => (
            <div key={cls} className="flex flex-col gap-2">
              <div className={`h-20 border-2 border-primary bg-primary-subtle ${cls}`} />
              <code className="font-mono text-xs">{cls}</code>
              <span className="text-xs text-muted-foreground">{use}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="buttons" title="Buttons: variant × state, then sizes">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-separate border-spacing-y-3 text-left text-sm">
            <thead>
              <tr>
                <th className="font-medium text-muted-foreground">Variant</th>
                {states.map(([label]) => (
                  <th key={label} className="font-medium text-muted-foreground">
                    {label}
                  </th>
                ))}
                <th className="font-medium text-muted-foreground">Disabled</th>
              </tr>
            </thead>
            <tbody>
              {variants.map((v) => (
                <tr key={v}>
                  <th className="font-mono text-xs font-normal">{v}</th>
                  {states.map(([label, preview]) => (
                    <td key={label}>
                      <Button variant={v} data-preview={preview} tabIndex={-1}>
                        Order a sensor
                      </Button>
                    </td>
                  ))}
                  <td>
                    <Button variant={v} disabled>
                      Order a sensor
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {sizes.map((s) => (
            <Button key={s} size={s}>
              {s} button
              <ArrowRight data-icon="inline-end" aria-hidden />
            </Button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge className="bg-primary-subtle text-primary-subtle-foreground">In 4 days</Badge>
          <Badge className="bg-warning-subtle text-warning-subtle-foreground">Tomorrow</Badge>
          <Badge className="bg-error-subtle text-error-subtle-foreground">Water today</Badge>
        </div>
      </Section>

      <Section id="inputs" title="Inputs">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <Label htmlFor="pg-email">Email</Label>
            <Input id="pg-email" type="email" placeholder="you@example.com" className="h-10" />
            <p className="text-sm text-muted-foreground">We send the tracking link here.</p>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="pg-bad">Email</Label>
            <Input id="pg-bad" type="email" defaultValue="maren@" aria-invalid className="h-10" aria-describedby="pg-bad-error" />
            <p id="pg-bad-error" className="text-sm text-destructive">
              Enter a full email address, like maren@example.com.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="pg-off">Promo code</Label>
            <Input id="pg-off" disabled placeholder="Not available" className="h-10" />
          </div>
        </div>
        <form className="flex max-w-md gap-2">
          <Label htmlFor="pg-search" className="sr-only">
            Search plants
          </Label>
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
            <Input id="pg-search" placeholder="Search 1,400 species" className="h-10 pl-9" />
          </div>
          <Button type="button">Search</Button>
        </form>
      </Section>

      <Section id="icons" title="Icons: Lucide, one stroke">
        <div className="flex items-center gap-6">
          <Droplets className="size-4" aria-hidden />
          <Droplets className="size-5" aria-hidden />
          <Droplets className="size-6 text-muted-foreground" aria-hidden />
          <span className="text-sm text-muted-foreground">16 · 20 · 24 px</span>
        </div>
      </Section>

      <Section id="composition" title="Composition">
        <PlantReadings className="max-w-md" />
      </Section>
    </main>
  );
}
