import { RevealOnScroll } from "@/components/reveal";
import {
  Benefits,
  Faq,
  FinalCta,
  HeroSplit,
  HowItWorks,
  Pricing,
  Proof,
  SiteFooter,
  SiteHeader,
} from "@/components/landing/sections";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-background px-3 py-2 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <HeroSplit />
        <Benefits />
        <HowItWorks />
        <Proof />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <RevealOnScroll />
    </>
  );
}
