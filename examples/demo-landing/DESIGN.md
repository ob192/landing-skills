# Design

## Overview
Rootline is a fictional soil sensor for houseplants; this landing is the demo for the landing-skills repo. Quiet and factual: warm stone neutrals, one green for the main action and plant status, the product shown through its own app screen.

## Colors
| Token | Role | Use |
|---|---|---|
| `background` / `foreground` | page | stone-50 page, stone-900 text |
| `card` | raised surface | cards, alternate section bands |
| `muted` / `muted-foreground` | quiet surface, secondary text | plant rows, captions; 4.5:1 or better on `background`, `card` and `muted` |
| `primary` / `primary-foreground` | main action | one primary button per view, moisture bars, the logo tile |
| `primary-strong` | hover of `primary` | never a resting colour |
| `primary-subtle` (+ `-foreground`, `-stroke`) | positive status | icon tiles, "In 4 days" badge |
| `warning-subtle`, `error-subtle` (+ `-foreground`) | plant status | "Tomorrow", "Water today" only |
| `inverse` (+ `-foreground`, `-muted-foreground`) | dark band | the final call to action |
| `border`, `border-strong`, `input`, `ring` | lines | dividers, inputs, focus ring |

## Typography
Geist via next/font, Latin and Cyrillic. Geist Mono only for readings and numbers.

| Step | Role |
|---|---|
| `text-6xl` | hero heading at `lg`, `text-5xl` at `sm`, `text-4xl` on phones |
| `text-4xl` / `text-3xl` | section heading desktop / phone; stats |
| `text-xl` | card and step titles |
| `text-lg` | lead paragraphs, quotes |
| `text-base` | body, FAQ |
| `text-sm` / `text-xs` | captions, nav, labels |

Weights: 400 body, 500 labels and buttons, 600 headings. Leading and tracking per step are set on the tokens in `globals.css` (1.1 from `text-4xl` up).

## Layout
- container: `mx-auto max-w-6xl px-4 md:px-6`
- sections: `py-20 md:py-24`; alternate bands use `bg-card`
- hero and section text max 680px, paragraphs max 560px
- cards: `rounded-2xl p-6`, grids `gap-4`
- controls: `h-11` for calls to action, `h-10` default, `h-9` in the header

## Elevation & Depth
Borders for structure. One soft shadow on the app screen only.

## Motion
Sections rise 32px and fade in once (700ms, `ease-out-soft`); off under reduced motion. Buttons change colour over 200ms.

## Shapes
`rounded-lg` controls, `rounded-2xl` cards and the nav bar, `rounded-3xl` the app screen and CTA band, `rounded-full` badges.

## Do's and Don'ts
- Do: one primary action per view; the header button and the hero button lead to the same place.
- Do: status colours only for plant status.
- Don't: tint card backgrounds or use gradients.
- Don't: put copy inside images; the app screen is real markup.
