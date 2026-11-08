// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// The skill tree lives at kylepace.dev/skill-tree/. It's its own Worker, mounted on
// that path by the routes in wrangler.jsonc; the hub (kyle-pace/kylepace.dev) serves
// everything else on the domain, including the favicon and robots.txt.
// Everything this site serves sits under /skill-tree/: the page is
// src/pages/skill-tree/, public files go in public/skill-tree/, and built assets go to
// /skill-tree/_astro/. (Astro's `base` option isn't used: with the Cloudflare adapter it
// serves the files from the wrong folder.)
export default defineConfig({
  site: 'https://kylepace.dev',
  build: { assets: 'skill-tree/_astro' },
  session: false,
  adapter: cloudflare({ imageService: 'compile' }),
});
