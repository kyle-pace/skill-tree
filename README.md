# Career skill tree

Kyle Pace's career drawn as an RPG skill tree: a decade-plus of restaurants, a UX bootcamp, product management, app stores, an MBA and a spin-off. Pick a track, inspect a skill, or replay the whole career year by year.

Live at **[kylepace.dev/skill-tree](https://kylepace.dev/skill-tree/)**, one of the experiments on [kylepace.dev](https://kylepace.dev).

Built with [Astro](https://astro.build) on Cloudflare Workers, using [kp-design](https://github.com/kyle-pace/kp-design) for the shared look, and following [kyle-pace/principles](https://github.com/kyle-pace/principles).

## Run it

```sh
npm install
npm run dev       # http://localhost:4321/skill-tree/
npm run build     # checks Read links, then builds to dist/
npm run preview   # builds, then runs it the way Cloudflare will
```

## Where things go

| What | Where |
| --- | --- |
| Tracks, skills, eras, attributes | `src/data/skill-tree.ts` |
| The tree and its interactions | `src/components/SkillTree.astro`, `SkillBoard.astro` |
| The page | `src/pages/skill-tree/index.astro` |
| Page shell (header, footer, analytics) | `DevLayout` from kp-design |
| Which "Read" links are live | `src/data/links.json`, written by `scripts/links.mjs` |
| Share card | `design/og.html`, rendered to `public/skill-tree/og.png` |

## How it's served

It's its own Cloudflare Worker, `skill-tree`, mounted on the hub's domain by two routes in `wrangler.jsonc` (`kylepace.dev/skill-tree` and `kylepace.dev/skill-tree/*`). Everything it serves sits under `/skill-tree/`. Cloudflare Workers Builds deploys `main` (build `npm run build`, deploy `npx wrangler deploy`).
