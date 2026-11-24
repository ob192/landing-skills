# Rootline demo landing

A landing for a made-up soil sensor, built with the skills in this repo to show what they produce. Next.js 16, React 19, Tailwind v4, shadcn/ui on Radix, Geist.

```bash
pnpm install
pnpm dev                                  # http://localhost:3000, playground at /playground
PLAYGROUND=1 pnpm build && pnpm start     # production build with the playground switched on
```

- Tokens: `src/app/globals.css`
- Decisions: `DESIGN.md`
- Sections: `src/components/landing`
- Playground: `src/app/playground` (design system reference) and `src/app/playground/hero` (three hero variants)

The playground pages return 404 in a normal production build.
