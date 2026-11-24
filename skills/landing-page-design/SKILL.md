---
name: landing-page-design
description: "Plan, design and build a landing page on Next.js + shadcn/ui (Radix) + Tailwind v4 with Geist: intake, facts-first copy, design system before pages, a playground with 2–3 variants of each section, optional React Three Fiber 3D and GSAP scroll scenes, then a screenshot-and-fix loop until accessibility, contrast and layout pass. Use when planning, building, redesigning or reviewing a landing page or marketing site page (hero, benefits, how it works, proof, pricing, FAQ, final CTA). Not for dashboards or app UI; token and primitive work belongs to the project's design-system skill."
---

<!-- Adapted from elayadesign/ai-design-skills@456d9e0 (MIT). Changes: narrower trigger; a design-system-first workflow
     with playground variants and a verification loop; the project's DESIGN.md wins over Part B; headline names the
     product, facts not slogans; Geist; Cyrillic leading; no-hyphens rule dropped; tagline reveal optional. -->

# Landing Page Design

A landing page is not a homepage. A homepage serves multiple intents. A landing page wins one intent:

**one offer → one audience → one primary action.**

The standard is perfectionism you can measure: nothing ships until it has been rendered, screenshotted at every width and checked for layout, consistency, accessibility and contrast, and every finding is fixed or named.

## Stack

Next.js (App Router), shadcn/ui on Radix primitives, Tailwind v4 with every token in one CSS file, Geist (via `next/font`, Latin and Cyrillic subsets) as the one typeface. Geist Mono only for code, data or tabular numbers. Icons are Lucide (shadcn's default). Use another font or icon set only when the user or DESIGN.md says so.

## Workflow

Work in this order. Do not skip ahead to pages: a section built before the system exists gets rebuilt.

0. **Reference.** If the user names a reference site or repo, study it first: its DESIGN.md, `.claude/rules/design/`, and the rendered pages at 375 and 1440. Note what it does well (rhythm, type scale, how colour is rationed, how sections hand off) and reuse the method, not the brand.
1. **Intake and copy** (Part A). Facts, structure and layout type. Output the plan in the Output format below before writing code.
2. **Design system.** With the `design-system` skill: tokens in the CSS file (palette → semantic → `@theme inline` mapping, light and dark), DESIGN.md with roles and rules, Geist with leading and tracking fitted per step (B1). Layout rules (container, grid, section spacing), consistency rules and accessibility (contrast pairs) are decided here, once.
3. **Playground reference.** With the `design-playground` skill: `/playground` renders every token and every shadcn primitive with its states from real classes. Dev only, `noindex`, 404 in production.
4. **Section explorations.** For each composite section (hero, benefits, how it works, proof, pricing, FAQ, final CTA band, header, footer) build **2–3 distinct, fully worked variants** in `/playground/<section>`: different structure or hierarchy, not the same layout recoloured, real copy, real primitives. Primitives (button, input, textarea) are not explored; they come from the system. Show the user numbered variants with screenshots and let them pick or combine. When a section gets a 3D variant (B13), one of the others is a non 3D version of the same idea.
5. **Assemble** the chosen variants into the page, one section at a time (A6). Clean the explorations.
6. **Verify, fix, repeat** (B12). Every section closes with a quick audit; the page closes with a full one. Loop until no P0 or P1 is left and every P2 is fixed or named with a reason.

**Companion skills.** `design-system`, `design-playground`, `design-audit`, `design-a11y` and `design-mobile` do steps 2–6 when the project has them. If it does not, do the same steps by hand with Part B as the fallback system and B12 as the check. For 3D and scroll animation, load the three.js and GSAP skills named in B13.

**Precedence.** If the project has DESIGN.md and `.claude/rules/design/`, they win over every value in Part B (colours, spacing, radius, motion, type steps). Part A, B8, B9, B10 and B12 apply everywhere.

**Part A** decides what the page says and how it is structured. **Part B** is the fallback visual system and the verification standard.

## Scope

Apply to landing pages and marketing site pages. When a Part B rule conflicts with a framework default and the project has no DESIGN.md, this file wins. The project's DESIGN.md wins over Part B. When the user's explicit prompt conflicts with a rule, the user wins. A line the end client asks for by name is the client's call: ask the user once, then follow the answer.

**Redesign.** When the user asks to redo an existing design, list what will be deleted (sections, explorations, tokens) and confirm, then rebuild from Workflow step 2. Keep copy and facts the brief still backs.

---

# PART A — Strategy and structure

## A1. Intake

Gather these before designing or writing. Ask only for what is missing, and ask in one batch rather than one question at a time.

**Purpose**
- What is the ONE primary action? (trial, demo, buy, waitlist, download)
- What is the offer, exactly what do they get?
- What counts as a conversion? (click, signup, purchase)

**Audience and context**
- Who is the ICP?
- What problem are they trying to solve?
- Top three objections, meaning why they do not convert today
- Traffic source: ads, search, social, email
- What do visitors already know when they land?

**Proof and assets**
- Proof points: logos, testimonials, numbers, case studies
- Screenshots, demo video, product GIFs
- Guarantees, refund terms, cancellation terms

**Constraints**
- Brand voice: casual or professional
- Design direction: minimal editorial, playful 3D, glass UI
- 3D: is there a physical product, model or space that 3D shows better than a photo? Is a GLB or source model available? (B13)
- Mobile priority?

If the user cannot answer, make a reasonable assumption, state it in one line, and continue. Do not stall the build.

## A2. Page structure

**Above the fold (required)**
1. Headline that names the product («Онлайн-курс масажу»), per A5
2. Subheadline, clarifies how and adds specificity
3. Primary CTA, clear verb plus what they get
4. One proof signal, logo strip, stat, or short testimonial
5. Hero visual, product screenshot or video, or a strong illustration

**Mid page (the argument)**
6. Problem to solution, one section
7. Benefits, three to five, outcome driven
8. How it works, three steps
9. Social proof, testimonials or a case study

**Bottom (objection handling)**
10. FAQ, six to twelve questions
11. Risk reversal, trial, cancel anytime, guarantee
12. Final CTA, identical to the top

The tagline reveal section from B11 is optional. Add it only when the user asks for it or the brief has one core fact worth a large type moment.

## A3. Layout selection

Pick one and say why.

| Type | Use when |
|---|---|
| **A. Classic hero plus sections** | The product is understandable from a hero screenshot. Most common. |
| **B. Long form story** | You need to educate and overcome skepticism. |
| **C. Minimal conversion page** | High intent traffic (email to known users), or a short offer like a download or waitlist. |
| **D. Comparison page** | Search intent includes alternatives ("X vs Y", "best for"). Usually paired with SEO pages. |

## A4. Conversion rules

**Match message to source.** If traffic comes from ads, mirror the ad headline in the hero and keep the same promise and visual tone.

**Make the next step obvious.** One primary CTA. Never place competing CTAs above the fold.

**Write benefit first.** Features are what it does. Benefits are what that means for them.

**Be specific.**
- ❌ "Save time and streamline"
- ✅ "Cut your weekly reporting from 4 hours to 15 minutes"

**Reduce risk.** Pick at least one: free trial, free plan, no credit card, cancel anytime, money back guarantee.

**Treat objections as a section, not a footnote.** Move the FAQ earlier for high friction offers. Put proof directly beside the claim it supports.

## A5. Copywriting

**Facts, not slogans.** Copy is editing of the product's facts: what it is, what is in it, who made it, the price. Every line is a plain sentence one person would say to another about the product.
- No "big idea" slogans, metaphors or pathos. Replace a metaphor with the fact it stands for, or delete it; never swap one metaphor for another.
- No promises of jobs, clients, income, schedule or qualification unless the brief proves them.
- Do not repeat a fact in neighbouring sections.
- Cold ad traffic must see the concrete product in the first screen.

**Headline.** Names the product: «Онлайн-курс масажу», "Accounting app for Ukrainian FOPs". No outcome formulas, no slogans. If the ad being mirrored (A4) has a concrete promise the brief backs, it goes in the subheadline.

**Subheadline.** One or two sentences of facts: what it is, who it is for, the key number (length, price, format).

**CTA.** Verb plus what they get. Never "Learn more" or "Submit". Use "Start free trial", "Book a demo", "Get the checklist".

**Benefit bullets.** Bold benefit, then the proof or detail. Example: **Faster iteration** — generate three layout variants in one click.

Note: the copy rules in B1 still apply. No orphaned words.

## A6. Build order

After the system and the explorations (Workflow 2–4), assemble section by section, in this order:

1. Header and hero
2. Benefits
3. How it works
4. Proof
5. Pricing, if any
6. FAQ
7. Final CTA and footer

Each section is done only when its quick audit (B12) is clean. Never rebuild the whole page on each iteration. Section by section keeps control and keeps diffs reviewable.

## A7. SEO and AEO

**Do not index** ad only campaign pages or highly time bound offers. Use `noindex` or keep them behind a non indexed path.

**Do index** evergreen offers and pages where search intent matches the promise. Add a clear title and meta description, internal links from the homepage and feature pages, and the FAQ in plain question and answer form for AEO. Add FAQ schema if appropriate.

## A8. Pitfalls

- Too many CTAs above the fold
- Vague value prop: "streamline", "optimize"
- A large feature list with no outcomes
- Proof buried at the bottom
- Mobile layout that breaks readability
- No clear next step

---

# PART B — Visual system

Every visual value must resolve through these rules instead of being invented ad hoc.

## B1. Typography

### Fonts

**Geist everywhere**, loaded with `next/font` with the `latin` and `cyrillic` subsets. A second family (for headings or a logo) only when the user decides it, recorded in DESIGN.md.

**Never use italic fonts** anywhere in the interface.

**Geist Mono** is allowed beside Geist only for code, data, or numeric UI where a monospace is functionally required.

**Never use ultra bold weights** (900 / black). Cap at semibold or bold.

**Cyrillic.** Check that і, ї, є, ґ and the apostrophe (’) render in the shipped subset. Й and Ї carry marks above the cap height: a two line heading below 1.1 line height lets them touch the descenders (у, р, д) of the line above.

**Leading and tracking for Geist.** Fit them per step and record them in DESIGN.md:

| Steps | Line height | Tracking |
|---|---|---|
| `text-base`, `text-lg` | 1.5 to 1.56 | 0 |
| `text-xl` | 1.3 | 0 |
| `text-2xl` | 1.25 | −0.01em |
| `text-3xl` | 1.15 | −0.02em |
| `text-4xl` | 1.1 | −0.02em |
| `text-5xl` and up | 1.1 (never 1) | −0.025em |

These replace the default line heights in the scale table below for steps 3xl and up.

### Copy rules

**No orphaned words.** A single word must never sit alone on the last line. Apply `text-wrap: balance` for headings and `text-wrap: pretty` for body copy.

### Type scale

Always resolve font sizes to Tailwind's default type scale. Never leave arbitrary values in place, including `text-[19px]`, `font-size: 22px`, or `1.4rem`.

If an existing size does not land exactly on a step, snap it to the **closest step below**, taking both the size and its paired line height.

| Class | Size | Line height |
|---|---|---|
| `text-xs` | 12px (0.75rem) | 16px |
| `text-sm` | 14px (0.875rem) | 20px |
| `text-base` | 16px (1rem) | 24px |
| `text-lg` | 18px (1.125rem) | 28px |
| `text-xl` | 20px (1.25rem) | 28px |
| `text-2xl` | 24px (1.5rem) | 32px |
| `text-3xl` | 30px (1.875rem) | 36px |
| `text-4xl` | 36px (2.25rem) | 40px |
| `text-5xl` | 48px (3rem) | 1 |
| `text-6xl` | 60px (3.75rem) | 1 |
| `text-7xl` | 72px (4.5rem) | 1 |
| `text-8xl` | 96px (6rem) | 1 |
| `text-9xl` | 128px (8rem) | 1 |

Line height and tracking come from the Geist table above (or DESIGN.md), set once on the step token, never per element.

### Text styles

Every piece of text uses one of these named styles. Never style text with a loose size and weight. Use the names exactly as written, including capitalization.

| Style | Scale step | Size / line height | Weight |
|---|---|---|---|
| Heading 1 | `text-6xl` | 60 / 60 | Semibold |
| Heading 2 | `text-5xl` | 48 / 48 | Semibold |
| Heading 3 | `text-4xl` | 36 / 40 | Semibold |
| Heading 4 | `text-3xl` | 30 / 36 | Semibold |
| Heading 5 | `text-2xl` | 24 / 32 | Semibold |
| Heading 6 | `text-xl` | 20 / 28 | Semibold |
| Title 1 | `text-xl` | 20 / 28 | Medium |
| Title 2 | `text-lg` | 18 / 28 | Medium |
| Title 3 | `text-base` | 16 / 24 | Medium |
| Title 4 | `text-sm` | 14 / 20 | Medium |
| Title 5 | `text-xs` | 12 / 16 | Medium |
| Body 1 | `text-base` | 16 / 24 | Semibold |
| Body 2 | `text-base` | 16 / 24 | Medium |
| Body 3 | `text-base` | 16 / 24 | Regular |
| Body 4 | `text-sm` | 14 / 20 | Semibold |
| Body 5 | `text-sm` | 14 / 20 | Medium |
| Body 6 | `text-sm` | 14 / 20 | Regular |
| Button-lg | `text-lg` | 18 / 28 | Semibold |
| Button-md | `text-base` | 16 / 24 | Semibold |
| Button-sm | `text-sm` | 14 / 20 | Semibold |
| Button-Xsm | `text-xs` | 12 / 16 | Semibold |
| Caption 1 | `text-sm` | 14 / 20 | Medium |
| Caption 2 | `text-sm` | 14 / 20 | Regular |
| Caption 3 | `text-xs` | 12 / 16 | Semibold |
| Caption 4 | `text-xs` | 12 / 16 | Medium |
| Caption 5 | `text-xs` | 12 / 16 | Regular |

How the groups work:

- **Heading** for page and section headings, largest to smallest. Heading 1 is the hero.
- **Title** for card titles, list item titles, labels that lead a block, and nav items.
- **Body** for running text. Within each size, 1 is the strongest weight and the last is regular.
- **Button** for text inside buttons only. Main buttons use Button-md, small header buttons use Button-sm.
- **Caption** for metadata, helper text, badges, timestamps, and fine print.

The sizes come from the type scale above, so a style never introduces an off scale value. If a project needs a new style, add the next number in its group (for example Body 7) built from a scale step, rather than inventing a new name.

In code, define each style once as a reusable class or token with the same name in kebab case (`heading-1`, `body-4`, `button-md`, `caption-2`) and apply that, instead of repeating size and weight utilities on every element.

## B2. Spacing

Only these values. Nothing between them, nothing outside them.

| Token | Value |
|---|---|
| Spacing-0 | 0 |
| Spacing-25 | 2px |
| Spacing-50 | 4px |
| Spacing-75 | 8px |
| Spacing-100 | 12px |
| Spacing-200 | 16px |
| Spacing-300 | 24px |
| Spacing-400 | 32px |
| Spacing-500 | 40px |
| Spacing-600 | 48px |
| Spacing-700 | 64px |
| Spacing-800 | 80px |
| Spacing-900 | 96px |

**Main buttons:** 8px vertical padding, 12px horizontal padding.

## B3. Corner radius

Only use Tailwind's radius values.

**Nested radius formula.** When a shape sits inside another shape and the gap between them is **less than 32px**:

```
inner radius = outer radius − gap
```

Apply this only when the result is **greater than 2**. Below that, leave the inner shape square or unchanged.

Example: an outer card at `rounded-2xl` (16px) with 8px of internal padding gives an inner element an 8px radius (`rounded-lg`).

## B4. Borders and backgrounds

- **Never apply a border to only one side of a card.** Borders go all the way around or not at all.
- **Never use gradients in backgrounds.** Backgrounds are flat.

### Dark mode background colors

Use only these:

`#000000` · `#181818` · `#1F1F1F` · `#272727` · `#313131` · `#131209`

## B5. Hero section

### Heading color

- **Dark theme:** left to right gradient on the heading text, `#FFFFFF` → `#9B9B9B`.
- **Light theme:** left to right gradient on the heading text, `#000000` → `#666666`.

This is the one place gradients are used, and only on text, never on the background.

### Layout

- Heading and subheading both get a **max width of 680px**.
- Read the heading copy and insert line breaks at **meaningful** points.
- Never break a line in a way that cuts a phrase awkwardly or makes the sentence harder to read. Break where the thought breaks.

## B6. Icons

**Use:** Lucide (`lucide-react`, shadcn's default), one stroke width across the site, sized by the primitives (`[&_svg]:size-4`). Another set only when DESIGN.md names it.

**Never use:** Material Icons, Material Symbols, emoji as icons.

Pick icons by meaning; when no icon fits clearly, use text. Decorative icons get `aria-hidden`; an icon-only button gets an accessible name.

## B7. Motion

Motion should feel weighted and decelerate into place. Never ship a browser default curve (`ease`, `linear`, `ease-in-out`).

**Base curve:** `ease-[cubic-bezier(0.22,1,0.36,1)]` with `duration-500` for layout and position changes. Color and opacity shifts on hover may use `duration-300`, never shorter than 200ms.

Animate only `transform` and `opacity`. Never animate `top`, `left`, `width`, or `height`.

Respect `prefers-reduced-motion`: replace movement with a plain opacity change.

### Navigation

**Resting state.** A compact bar that floats off the top edge rather than sitting flush against it, centered and sized to its content. It uses a translucent surface over a background blur so page content stays faintly visible behind it. Spacing comes from B2, radius from B3.

**Menu toggle.** The open and close icon transforms between its two states instead of swapping instantly. Use an icon from B6 or draw the lines yourself; either way the change is animated with the base curve.

**Mobile menu.** Opens as a full height panel, not a small dropdown. The panel background uses the theme's base surface at high opacity with a strong blur.

**Link entrance.** Links inside the open menu arrive one after another in reading order, each moving up a short distance (Spacing-300, 24px) while fading in. Step each item 60ms after the previous one and cap the total sequence at 400ms so long menus never feel slow.

### Scroll reveals

Sections entering the viewport rise a short distance (Spacing-400, 32px) and fade from 0 to full opacity over 600 to 800ms on the base curve. Reveal each section once; do not replay on scroll back up.

Trigger reveals with `IntersectionObserver` or Framer Motion's `whileInView`. Never attach work to an unthrottled `window.addEventListener('scroll')`, since it runs on every frame and drags down mobile performance.

---

## B8. Content realism

Every piece of sample content should read like it came from a real product with real users.

- **Write the copy.** No placeholder Latin, no "Your headline here". Draft real sentences in the product's voice.
- **People.** Give testimonials and team members full, specific names that fit the product's audience and region. Never reuse one face for two people.
- **Brands and logos.** Invent names that sound like they belong in the product's industry. A logistics tool's customers sound like logistics companies, not generic tech startups.
- **Never invent facts.** On a real product's page, prices, guarantees, statistics, customer counts, testimonials, and logos must come from the user or a real source. When a fact is missing, use a clearly marked placeholder such as `{{price}}` or `{{testimonial}}` instead of making one up.
- **Sample numbers.** In fictional demos and prototypes (where the invented names and brands above are fine), avoid suspiciously round figures. Pricing should look like real pricing, metrics should carry a decimal or an odd final digit, and dates across a list should vary.
- **Banned filler words.** Do not write "revolutionize", "supercharge", "cutting edge", "effortless", "transform your workflow", "take it to the next level", "harness the power", or "world class". Say what the product does in plain terms instead.
- **Sentence case** for headings and buttons.
- **System messages.** Confirmations are calm and specific ("Invoice sent to Dana"). Errors say what failed and what to do next ("Upload failed. The file is over 20 MB."). No cute interjections, no exclamation marks.

## B9. States

Every interactive element ships with its full state set:

- **Hover** — background shift, slight scale, or translate
- **Active** — `scale(0.98)` or `translateY(1px)` for physical feedback
- **Focus** — a visible focus ring. Accessibility requirement, not optional.
- **Loading** — skeleton loaders shaped like the real layout, not circular spinners
- **Empty** — a composed "getting started" view, never a blank panel
- **Error** — inline and specific. Never `window.alert()`.

No dead links. A button pointing at `#` is either linked or visually disabled. The current page must be indicated in the navigation.

## B10. Ship requirements

Things that get forgotten and make a page feel unfinished:

- Privacy policy and terms links in the footer
- A custom, branded 404
- Client side form validation for email format and required fields
- A skip to content link for keyboard users
- Cookie consent where the jurisdiction requires it
- A branded favicon
- `<title>`, meta description, `og:image`, and social sharing tags
- Alt text on every meaningful image
- Semantic HTML: `<nav>`, `<main>`, `<article>`, `<aside>`, `<section>`
- A way back from every page
- The B12 widths pass: no horizontal overflow, buttons keep their text inside, and the primary action is visible in the first screen at 375

## B11. Tagline reveal section (optional)

Only when the user asks for it (see A2). It is one large type section stating a core fact about the product, separate from the hero. It sits further down the page as its own moment, not stacked directly under the hero.

**Copy**
- Minimum two lines of text.
- A plain fact about the product, written per A5 (no slogan), not a generic section heading.

**Typography**
- Use Heading 3 to Heading 1 from the B1 text styles, depending on line count.
- Max width capped like the hero, so lines break at meaningful points per B5.

**Animation**
- Text starts in a subtle, muted tone, roughly 25 to 35% opacity of the theme's base text color.
- As the section scrolls into view, each word transitions individually from that muted tone to the full text color, in reading order.
- Words activate one at a time as they cross a trigger line, not the entire block flipping at once. The transition uses the base curve from B7, never a linear fade.
- Implement with `IntersectionObserver` per word, or a single scroll listener throttled through `requestAnimationFrame`. Never an unthrottled `window.addEventListener('scroll')`, per B7.
- Under `prefers-reduced-motion`, show the final text at full color right away, with no word by word animation.

## B12. Verification loop

Nothing is done because the code looks right. It is done when the rendered page has been seen and measured.

**Bench.** Run the dev server and open the page in a browser you can drive (the built-in browser pane, or Playwright when the pane is hidden and the page will not hydrate). Hide dev overlays and exploration labels before screenshots.

**Widths.** Quick check: 375×812 and 1440×900, plus both sides of every breakpoint the change touches. Full check: 320 (overflow only), 375, 768, 1023, 1024, 1440, 1920. The last width before a breakpoint is where a phone layout stretched to tablet shows.

**Each pass:**
1. Screenshot every width. Write the first read: what the eye lands on first, second, third, and the one thing that feels off.
2. Layout and consistency: one container width, section spacing from one rhythm, aligned edges across siblings, no element past the container unless it bleeds on purpose, the same component looks the same everywhere.
3. Contrast: body text 4.5:1, large text and UI parts 3:1, measured on the real pixels when text sits on an image, gradient or glow (check the lightest end of a gradient heading).
4. Accessibility: keyboard through every control with a visible focus ring, landmarks and one `h1`, names on icon buttons and inputs, an axe run with no violations, `prefers-reduced-motion` respected, touch targets at least 44×44 on phones.
5. The project's design linter, if it has one, reports nothing on the changed files.

**Fix and repeat.** Rank findings P0 (blocks or misleads), P1 (a visitor sees it), P2 (hygiene). Fix the system first (a token or primitive) before a local patch. Re-shoot the same widths after each batch and compare before and after; a finding is closed when the screenshot or the number changed, not when the code did. Stop when no P0 or P1 is left and every remaining P2 is fixed or named with a reason.

With the companion skills, quick mode is `design-audit` quick, full mode is `design-audit` full plus `design-a11y` and `design-mobile`.

## B13. 3D and WebGL (optional)

**Earn it.** Use 3D only when it shows the product better than a photo or video: a physical product to turn, a configurator, a space or mechanism that needs depth. Not floating shapes for atmosphere. Decide it at intake (A1). In the section explorations a 3D variant always sits beside a non 3D variant of the same section, and the user picks.

**Stack.**
- React Three Fiber (`@react-three/fiber` 9 on React 19) with `@react-three/drei`. Plain three.js only outside React. Spline only for a quick prototype or a scene a designer hands over; count its runtime in the budget.
- Scroll: GSAP ScrollTrigger through `useGSAP` from `@gsap/react` with a `scope` ref, or drei `ScrollControls` for a story that lives entirely in the canvas. Keep native scroll. Lenis only when the user asks; then ScrollTrigger reads from Lenis and CSS `scroll-behavior: smooth` is removed.
- Companion skills: load the matching one before writing the code. [CloudAI-X/threejs-skills](https://github.com/CloudAI-X/threejs-skills) (`threejs-react-three-fiber`, `threejs-performance`, `threejs-loaders`, `threejs-materials`, `threejs-lighting`) and [greensock/gsap-skills](https://github.com/greensock/gsap-skills) (`gsap-react`, `gsap-scrolltrigger`, `gsap-performance`).

**Next.js.**
- The canvas lives in a client component loaded with `next/dynamic` and `ssr: false`.
- The server renders a **poster**: a still of the scene at the same framing (AVIF or WebP, `next/image`, `priority` in the hero). The poster is the LCP element, never the canvas. The scene replaces it after its first frame renders, in a box with a fixed `aspect-ratio` so nothing shifts.
- Load the scene after the page is interactive, or when its section nears the viewport. The primary CTA works before the scene loads.

**Content stays in the DOM.** Headline, copy, prices and CTAs are HTML over or beside the canvas, never WebGL text. A decorative canvas wrapper is `aria-hidden`; a scene that carries information has a text equivalent next to it.

**Assets.**
- GLB only, compressed: `gltf-transform optimize in.glb out.glb --compress meshopt --texture-compress webp` (Draco or KTX2 when the scene needs them).
- Budget per scene: under 100k triangles, under 5 MB compressed (aim far lower for a hero), textures at most 2048 px.
- A metallic material needs an environment map, or it renders black.

**Performance.**
- Cap `dpr={[1, 2]}`; let drei `PerformanceMonitor` drop it to 1 when the frame rate declines.
- `frameloop="demand"` when nothing moves, and stop rendering while the section is off screen.
- Motion comes from `delta` in `useFrame`, so 60 Hz and 144 Hz screens look the same. Mutate refs in `useFrame`; never `setState` there.
- Repeats go through `Instances`; dispose what you load when it unmounts.
- No `OrbitControls` as decoration. When the product needs free rotation, disable zoom so the wheel still scrolls the page, and leave vertical touch scrolling to the page (`touch-action: pan-y`).
- Phones get a lighter scene (fewer lights, no shadows or post processing). Low end devices, a failed WebGL context and Save-Data get the poster only.
- Custom shaders declare `precision mediump float` for mobile GPUs.

**Motion and accessibility.**
- Under `prefers-reduced-motion`: no camera flights, no scrubbed scenes, no idle spin. Show the poster or a still frame; interaction stays optional.
- No scroll hijacking. A pinned section holds only as long as its content needs, and keyboard, screen reader and normal scrolling still reach the next section.
- No autoplay audio.

**Contrast over 3D.** Text over a canvas is text over an image: measure it on real pixels at the brightest frame of the animation (B12 step 3). Add a scrim token when it fails.

**Verify (adds to B12).**
- No WebGL errors or warnings in the console.
- The scene renders at 375 and 1440, and the poster path renders with reduced motion on and with WebGL disabled.
- A steady 60 fps on desktop and at least 30 fps under 4× CPU throttling with phone emulation, measured in a performance trace.
- LCP is the poster; no layout shift when the canvas swaps in.
- Compare Lighthouse mobile with and without the scene. A drop is a finding to fix or name.

---

# Output format

When generating a landing page from scratch, return these in order before writing code:

0. **Reference notes**, if the user named a reference: what to reuse from it and why
1. **Page outline** — sections and their order, and which sections get 2–3 playground variants
2. **Hero copy** — headline, subheadline, CTA, proof line
3. **Benefits** — three to five outcome driven bullets
4. **How it works** — three steps
5. **FAQ** — six to twelve questions and answers
6. **SEO / AEO** — index or noindex recommendation, plus title and meta if indexed
7. **Layout recommendation** — A, B, C, or D, and why
8. **3D decision** — none, or which section gets a scene, what it shows that a photo cannot, and the asset it needs

Then follow the Workflow: design system, playground reference, section explorations, assembly per A6, verification per B12.

---

# Quick checklist

**Strategy**
- [ ] One offer, one audience, one primary action
- [ ] No competing CTAs above the fold
- [ ] Headline names the product; no slogans, metaphors or unbacked promises
- [ ] Specific numbers instead of vague verbs
- [ ] At least one risk reversal
- [ ] Proof sits next to the claim it supports
- [ ] Layout type chosen deliberately

**Visual** (where the project has DESIGN.md, its rules and the design linter replace this block)
- [ ] Geist only (Latin and Cyrillic subsets), leading per the Geist table, no italics, no ultra bold
- [ ] No orphaned words
- [ ] Every font size lands on a Tailwind scale step
- [ ] Every text element uses a named text style (Heading, Title, Body, Button, Caption)
- [ ] Every spacing value comes from the spacing table
- [ ] Nested radii follow the formula
- [ ] No single sided card borders, no background gradients
- [ ] Hero heading and subheading capped at 680px with meaningful line breaks
- [ ] Lucide icons at one stroke width (or the set DESIGN.md names), decorative ones `aria-hidden`
- [ ] Every transition uses the B7 base curve, scroll reveals use IntersectionObserver
- [ ] If a tagline reveal section was asked for: minimum two lines, words activate one at a time on scroll
- [ ] No invented prices, stats, or testimonials; missing facts use marked placeholders
- [ ] B12 loop closed: screenshots at every width, no P0 or P1, every P2 fixed or named

**Process**
- [ ] Design system (tokens + DESIGN.md) existed before the first section was built
- [ ] Playground reference shows every token and primitive
- [ ] Each composite section had 2–3 worked variants and the user picked
- [ ] Explorations cleaned after assembly

**3D, if used** (B13)
- [ ] The scene shows something a photo cannot; a non 3D variant was compared
- [ ] Poster is server rendered and is the LCP element; no shift when the canvas swaps in
- [ ] Copy and CTAs are HTML; CTA works before the scene loads
- [ ] GLB compressed and within budget; `dpr` capped; rendering stops off screen
- [ ] Reduced motion, WebGL failure and low end devices get the poster
- [ ] 60 fps desktop, 30 fps throttled phone; no WebGL console errors

**Content and ship**
- [ ] Real draft copy, believable names and numbers, no banned filler words
- [ ] Hover, active, focus, loading, empty, and error states all present
- [ ] No dead links, current nav item indicated
- [ ] 404, legal links, form validation, favicon, meta tags, alt text

---

## Credits

The no invented facts rule and reduced motion support for the tagline reveal were suggested by [@allen-baler](https://github.com/allen-baler) in [#1](https://github.com/elayadesign/ai-design-skills/pull/1).

Parts of this skill were adapted from [taste-skill](https://github.com/Leonxlnx/taste-skill) by Leon Lin ([@LexnLin](https://x.com/LexnLin)), MIT licensed. Its redesign audit structure, content realism checks, and motion and navigation ideas informed the matching sections here, which have since been rewritten.

<details>
<summary>taste-skill license</summary>

```
MIT License

Copyright (c) 2026 Leonxlnx

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
</details>
