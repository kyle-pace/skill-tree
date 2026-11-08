#!/usr/bin/env node
// Finds which of the skill tree's "Read" links are live on kylepace.net, and their
// titles, and writes them to src/data/links.json. A node only shows its link once the
// post or case study is public there.
//
// Runs before every build (npm run build) and weekly from GitHub Actions, so a post
// that goes live on kylepace.net shows up here without a code change. If kylepace.net
// can't be reached, the last saved file is kept and the build carries on.
//
// No dependencies; Node 18+.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const SITE = 'https://kylepace.net';
const out = new URL('../src/data/links.json', import.meta.url);
const source = readFileSync(new URL('../src/data/skill-tree.ts', import.meta.url), 'utf8');
const reads = [...new Set([...source.matchAll(/read:\s*"([^"]+)"/g)].map((m) => m[1]))];

const links = {};
let reached = 0;
for (const path of reads) {
  try {
    const res = await fetch(`${SITE}/${path}/`, { redirect: 'follow', signal: AbortSignal.timeout(10000) });
    reached++;
    if (!res.ok) continue;
    const html = await res.text();
    const title = html.match(/<title>([^<]*)<\/title>/)?.[1]?.replace(/\s*·\s*Kyle Pace\s*$/, '').trim();
    if (title) links[path] = { href: `${SITE}/${path}/`, title: decode(title) };
  } catch {
    // Network trouble for this one; treat it as not live.
  }
}

if (reached === 0 && existsSync(out)) {
  console.warn(`Couldn't reach ${SITE}; keeping the saved links.`);
  process.exit(0);
}

const next = JSON.stringify(links, null, 2) + '\n';
const before = existsSync(out) ? readFileSync(out, 'utf8') : '';
if (next !== before) writeFileSync(out, next);
console.log(`Read links: ${Object.keys(links).length} of ${reads.length} are live on kylepace.net.`);

function decode(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&#39;|&#x27;|&rsquo;/g, '’')
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}
