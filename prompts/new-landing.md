# Prompt: design a landing from scratch

Paste this into Claude Code in the landing's repo, with the skills from this repo installed. Fill in the `{…}` parts.

---

Redesign the landing in this repo from scratch, following the `landing-page-design` skill.

**Reference.** Study {reference site URL} and its design skills and rules ({repo or path}) before you design anything. Look at the rendered pages at 375 and 1440 in the browser and note what to reuse: rhythm, type scale, how colour is rationed, how sections hand off. Reuse the method, not the brand.

**Start over.** List everything of the current design you will delete (sections, playground pages, tokens) and wait for my OK. Keep the copy and facts in `{brief file}`.

**Stack.** Next.js App Router, shadcn/ui on Radix, Tailwind v4 with every token in one CSS file, Geist everywhere (Latin and Cyrillic), Lucide icons.

**Order of work:**
1. Design system first, with the `design-system` skill: tokens (light and dark), DESIGN.md, layout rules (container, grid, section spacing), consistency rules, contrast pairs.
2. Playground reference with `design-playground`: every token and every primitive with its states.
3. Section explorations: for each composite section (header, hero, benefits, how it works, proof, pricing, FAQ, final CTA, footer) build 2–3 distinct, fully worked variants in `/playground/<section>`. Not primitives like button or input. Show me numbered variants with screenshots at 375 and 1440, and I will pick.
4. Assemble the chosen variants section by section.

**Quality bar.** Treat this as perfectionist work. After every section, render it, screenshot it at 375, 768, 1023 and 1440, and run `design-audit`; before you call the page done, also run `design-a11y` and `design-mobile`. Fix and re-check until no P0 or P1 is left and every P2 is fixed or named with a reason. Show me before and after screenshots for each fix batch. Do not tell me it is done because the code looks right.

**Copy.** Facts, not slogans: the headline names the product, no metaphors, no promises the brief does not back.

Start with the reference notes and the list of what you will delete.
