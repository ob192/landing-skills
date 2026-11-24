# Landing skills

Skills for Claude Code (and other agents that read `SKILL.md`) that design and build landing pages on **Next.js + shadcn/ui (Radix) + Tailwind v4 + Geist**, in a fixed order: design system → playground → 2–3 variants per section → assembly → a screenshot-and-fix loop until layout, accessibility and contrast pass.

## Skills

| Skill | What it does |
|---|---|
| [`landing-page-design`](skills/landing-page-design/SKILL.md) | The entry point. Intake, facts-first copy, section order, the workflow, a fallback visual system, the verification loop (B12) and a ship checklist |
| [`design-system`](skills/design-system/SKILL.md) | Tokens in one Tailwind v4 CSS file plus `DESIGN.md`: set up, extend, audit (script included) |
| [`design-playground`](skills/design-playground/SKILL.md) | Dev-only `/playground`: a live reference of every token and primitive, and exploration pages with 2–5 variants of a section |
| [`design-audit`](skills/design-audit/SKILL.md) | Judges the rendered page: screenshots at real widths, first read, measurements, contrast on real pixels, then the linter and rules |
| [`design-a11y`](skills/design-a11y/SKILL.md) | Accessibility pass: axe, keyboard walk, states, reduced motion |
| [`design-mobile`](skills/design-mobile/SKILL.md) | Phone criteria and a page audit script |

`landing-page-design` works alone; with the other five it hands them steps 2–6 of its workflow.

### 3D and scroll animation (optional)

`landing-page-design` has a 3D section (B13) for React Three Fiber scenes and GSAP ScrollTrigger. It leans on these third-party skills, which are not bundled here:

```bash
npx skills add CloudAI-X/threejs-skills -a claude-code
npx skills add greensock/gsap-skills -a claude-code
```

## Install

```bash
npx skills add ob192/landing-skills
```

One skill, or all for Claude Code only:

```bash
npx skills add ob192/landing-skills --skill landing-page-design
npx skills add ob192/landing-skills -a claude-code
```

### Project rules and linter (optional, recommended)

`design-audit` and `design-system` read design rules from `.claude/rules/design/` and run a linter from `.claude/scripts/`. Copy the template into the project root:

```bash
git clone https://github.com/ob192/landing-skills /tmp/landing-skills
cp -rn /tmp/landing-skills/template/.claude/. .claude/
```

This adds the rules, `design-lint.mjs` (set `ICON_SET` to your icon library; default `lucide-react`) and a `PostToolUse` hook in `.claude/settings.json` that lints every edited `.tsx`/`.jsx` file. If the project already has a `.claude/settings.json`, merge the hook by hand (`-n` above does not overwrite it).

## Use

Ask in plain words ("design a landing for …"), or start from [prompts/new-landing.md](prompts/new-landing.md).

## Validate

```bash
pip install pyyaml
python -m unittest discover tests
python scripts/validate_skills.py skills
```

## Credits

`landing-page-design` is adapted from [elayadesign/ai-design-skills](https://github.com/elayadesign/ai-design-skills) (MIT), which in turn adapts parts of [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) (MIT); see the end of its `SKILL.md`. The skill validator and its tests are copied from elayadesign/ai-design-skills.

## License

MIT.
