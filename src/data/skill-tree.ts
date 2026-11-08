/*
  The career skill tree at /labs/skill-tree/. Everything on that page comes from this file.

  Tracks are the columns of the game: each has a color token from tokens.css.
  Nodes:
    tier   row, 1 at the top          col  column, -1.5 to 1.5 (0 is the middle)
    kind   skill (default) | milestone (a role, degree or credential) | capstone (top of a track) | secret
    lv     skills only: sig (signature strength) | pro (proficient, the default) | dev (still developing)
    status active (in progress) | locked | secret
    from   parents in the same track     cross  prerequisites from other tracks (shown as colored dots)
    t      decimal year, drives the timeline replay
    read   a writing/ or work/ entry; the link only shows once that page is public
*/

export type TrackColor = 'tangerine' | 'sky' | 'pink' | 'lime' | 'violet' | 'sunshine' | 'coral' | 'mint' | 'neutral';
export type Kind = 'skill' | 'milestone' | 'capstone' | 'secret';
export type Level = 'sig' | 'pro' | 'dev';

export interface Track { id: string; name: string; sub: string; color: TrackColor; blurb: string }
export interface SkillNode {
  id: string; track: string; tier: number; col: number;
  kind?: Kind; lv?: Level; status?: 'active' | 'locked' | 'secret';
  from?: string[]; cross?: string[];
  name: string; glyph: string; t?: number; when: string; read?: string;
  lore: string; effects?: string[];
}
export interface Era { lane: 0 | 1; from: number; to: number; name: string; track: string }
export interface Stat { key: string; value: number; why: string; color: TrackColor }

export const tracks: Track[] = [
  {
    id: "floor", name: "Hospitality", sub: "Customer & stakeholder skills", color: "tangerine",
    blurb: "More than a decade on the restaurant floor built the service instincts the rest of the career runs on: reading people, recovering from misses, and keeping every table happy at once.",
  },
  {
    id: "pm", name: "Project → Product", sub: "From delivery to strategy", color: "sky",
    blurb: "Started by keeping projects on schedule, then moved upstream into roadmaps, discovery and platform strategy.",
  },
  {
    id: "design", name: "Design", sub: "Research to pixels", color: "pink",
    blurb: "The bootcamp that started the career change, and a year as the platform's lead designer.",
  },
  {
    id: "release", name: "App Release Manager", sub: "Stores, certification, shipping", color: "lime",
    blurb: "Learned every app store from scratch and became the one person who gets 100+ station apps through eight store platforms.",
  },
  {
    id: "mba", name: "Business (MBA)", sub: "Strategy, markets, operations", color: "violet",
    blurb: "Two degrees earned while working full-time. The MBA branches four ways, and the Operations branch is where the spin-off got built.",
  },
  {
    id: "lead", name: "Leadership", sub: "People and teams", color: "sunshine",
    blurb: "Leading through influence for years, then a team of direct reports and a new Product function.",
  },
  {
    id: "trust", name: "Trust & Compliance", sub: "Privacy, policy, incidents", color: "coral",
    blurb: "Keeping 20+ stations' apps legal, private and online.",
  },
  {
    id: "data", name: "Data & Analytics", sub: "Training in progress", color: "neutral",
    blurb: "The honest track. Good at asking the right questions of data and spotting bad numbers; still building the hands-on analytics skills.",
  },
  {
    id: "dev", name: "AI-Assisted App Dev", sub: "Side quests, built with AI", color: "mint",
    blurb: "Honest label: I don't hand-write code. I write the brief, direct AI coding agents, review what they build, and ship side projects that way.",
  },
];

export const nodes: SkillNode[] = [
  // Hospitality
  {
    id: "f-floor", track: "floor", tier: 1, col: 0, kind: "milestone", name: "Restaurant Floor", glyph: "FOH", t: 2006.5, when: "2006 to 2019", read: "writing/from-restaurants-to-director-of-product",
    lore: "Where the build started: more than a decade of serving, running food and closing out slammed nights, including a decade with Restaurants Unlimited.",
    effects: ["+13 years of live customer feedback", "Unlocks: the whole tree"],
  },
  {
    id: "f-read", track: "floor", tier: 2, col: -1, lv: "pro", from: ["f-floor"], name: "Reading the Room", glyph: "EYE", t: 2007.5, when: "The floor → now",
    lore: "Spotting what a guest needs before they say it. Later: hearing what a station actually needs underneath its feature request.",
    effects: ["Passive: needs discovery"],
  },
  {
    id: "f-calm", track: "floor", tier: 2, col: 0, lv: "pro", from: ["f-floor"], name: "Grace Under Pressure", glyph: "CLM", t: 2008, when: "The floor → now",
    lore: "Twelve tickets, one window, every plate timed, and a smile for table six. The same calm shows up in release weeks and outages.",
    effects: ["+5 composure during the rush"],
  },
  {
    id: "f-super", track: "floor", tier: 2, col: 1, kind: "milestone", from: ["f-floor"], name: "Shift Supervisor", glyph: "SUP", t: 2012, when: "Restaurants Unlimited",
    lore: "Led service operations: ran the floor on the busiest shifts, trained new staff and kept the workflow moving.",
    effects: ["Unlocks: Leadership track"],
  },
  {
    id: "f-recover", track: "floor", tier: 3, col: -1, lv: "pro", from: ["f-read"], name: "Service Recovery", glyph: "FIX", t: 2008, when: "The floor → now",
    lore: "Turning a bad night into a regular: own the miss, fix it fast, follow up. The same playbook works on a broken release.",
    effects: ["Synergy: Incident Response"],
  },
  {
    id: "f-expect", track: "floor", tier: 3, col: 0, lv: "pro", from: ["f-calm"], name: "Expectation Setting", glyph: "ETA", t: 2010, when: "The floor → now",
    lore: "The kitchen is 25 minutes out, and the table hears it before they ask. Now: telling stations what's shipping, when, and what isn't.",
  },
  {
    id: "f-train", track: "floor", tier: 3, col: 1, lv: "pro", from: ["f-super"], name: "Training & Onboarding", glyph: "TRN", t: 2013, when: "The floor → now",
    lore: "Trained new hires on the floor. Now: a six-week station onboarding standard, CMS trainings, walkthrough videos and new-hire orientations.",
    effects: ["6 weeks, kickoff to store submission"],
  },
  {
    id: "f-support", track: "floor", tier: 4, col: -1, lv: "sig", from: ["f-recover"], name: "Customer Support Ops", glyph: "DSK", t: 2024.4, when: "2024 → now", read: "writing/a-help-center-stations-actually-use",
    lore: "Stood up the station support desk in 2024 and triaged about 680 station bug reports since. Then rebuilt the docs and launched an AI-backed help center so stations can answer common questions themselves.",
    effects: ["~680 station reports handled", "18 troubleshooting articles from past tickets"],
  },
  {
    id: "f-stake", track: "floor", tier: 4, col: 0, lv: "sig", from: ["f-expect"], name: "Stakeholder Management", glyph: "STK", t: 2023.9, when: "2023 → now",
    lore: "Keeps station leaders, internal leadership and two outside dev partners pointed the same way. Runs weekly station office hours and the Content, Marketing and Revenue working groups.",
    effects: ["+3 working groups"],
  },
  {
    id: "f-vendor", track: "floor", tier: 4, col: 1, lv: "pro", from: ["f-train"], name: "Partner Relations", glyph: "VND", t: 2024.5, when: "2024 → now",
    lore: "Runs the dev partner relationship with biweekly syncs and a Seattle summit, and sat down one-on-one with Apple App Review to settle requirements.",
    effects: ["Alliance: outside dev partner"],
  },
  {
    id: "f-cap", track: "floor", tier: 5, col: 0, kind: "capstone", from: ["f-support", "f-stake", "f-vendor"], name: "Station Partner Success", glyph: "20+", t: 2026.6, when: "Capstone",
    lore: "Turned 20+ PBS member stations into regulars through onboarding, support, office hours and working groups, and now has a Partner Success manager on the team.",
    effects: ["+20 station partners", "Regulars, not tickets"],
  },
  // Project → Product
  {
    id: "p-proj", track: "pm", tier: 1, col: 0, kind: "milestone", cross: ["d-boot"], name: "Project Management", glyph: "PM", t: 2021.3, when: "2021 · F. Schumacher & Co.",
    lore: "Digital innovation intern, promoted to Junior Project Manager within months. Coordinated a remote cross-functional team on an AR/VR e-commerce initiative.",
    effects: ["Promoted within months"],
  },
  {
    id: "p-scope", track: "pm", tier: 2, col: -1, lv: "pro", from: ["p-proj"], name: "Scope & Scheduling", glyph: "GNT", t: 2021.4, when: "2021 → now",
    lore: "Timelines, dependencies and scope calls, including holding a launch date when a store certification threatened it.",
  },
  {
    id: "p-coord", track: "pm", tier: 2, col: 0, lv: "sig", from: ["p-proj"], name: "Cross-functional Coordination", glyph: "SYN", t: 2021.5, when: "2021 → now",
    lore: "Remote, cross-functional teams from the first job in tech, and later a team of about 20 spanning in-house engineers and two outside firms.",
    effects: ["Party size: ~20"],
  },
  {
    id: "p-agile", track: "pm", tier: 2, col: 1, lv: "pro", from: ["p-proj"], name: "Agile Delivery", glyph: "AGL", t: 2022.8, when: "2022 → now",
    lore: "Kanban reviews, release candidates, weekly CMS releases and steady app release trains.",
  },
  {
    id: "p-map", track: "pm", tier: 3, col: -1, lv: "pro", from: ["p-scope"], name: "Roadmapping", glyph: "MAP", t: 2022.1, when: "2022 → now",
    lore: "From three new product roadmaps at 3 Enrollment Marketing to the CMS, API and app roadmaps for 20+ stations.",
    effects: ["+3 roadmaps at the first PM job"],
  },
  {
    id: "p-first", track: "pm", tier: 3, col: 0, kind: "milestone", from: ["p-coord"], name: "The First PM", glyph: "1ST", t: 2022.15, when: "2022 · 3 Enrollment Marketing",
    lore: "Promoted to the company's first Product Manager and set up the product practice for an immersive-web line: 20+ white-label virtual environments for 10 universities.",
    effects: ["+10 university partners", "+150 qualified leads for clients"],
  },
  {
    id: "p-prag", track: "pm", tier: 3, col: 1, kind: "milestone", from: ["p-agile"], name: "Pragmatic Certified", glyph: "PMC", t: 2022.5, when: "2022 · Pragmatic Institute",
    lore: "Certified Product Manager. Formal frameworks for market problems, positioning and roadmaps.",
  },
  {
    id: "p-disc", track: "pm", tier: 4, col: -1, lv: "pro", from: ["p-map"], name: "Discovery & Intake", glyph: "JPD", t: 2025.4, when: "2024 → now", read: "writing/one-front-door-for-product-requests",
    lore: "Built bug intake, idea intake and a product discovery board with an executive layer, so every request has a home and a decision.",
    effects: ["~880 Jira issues moved to Done"],
  },
  {
    id: "p-spec", track: "pm", tier: 4, col: 0, lv: "pro", from: ["p-first"], name: "Specs & Requirements", glyph: "SPC", t: 2025, when: "2023 → now",
    lore: "API requirements, specs for the most-requested station features, and 79 Figma-linked tickets in 2026 alone.",
  },
  {
    id: "p-plat", track: "pm", tier: 4, col: 1, lv: "sig", from: ["p-first", "p-prag"], name: "Platform Thinking", glyph: "SAAS", t: 2022.7, when: "2022 → now · Cascade PBS", read: "work/relaunching-on-every-screen",
    lore: "Joined when the platform was one station's app and grew it into a multi-tenant SaaS: 100+ station-branded apps on nine platforms, plus a CMS and API.",
    effects: ["+9 client platforms", "+100 station-branded apps"],
  },
  {
    id: "p-port", track: "pm", tier: 5, col: 1, lv: "pro", from: ["p-plat"], name: "Portfolio Management", glyph: "PRT", t: 2026.6, when: "2026",
    lore: "An executive portfolio in Jira Product Discovery, with each product bet tied to the number it should move.",
  },
  {
    id: "p-dir", track: "pm", tier: 6, col: 0, kind: "capstone", from: ["p-disc", "p-spec", "p-port"], name: "Director of Product", glyph: "DIR", t: 2026.5, when: "Jul 2026 · Local Public", read: "work/local-public",
    lore: "Part of the founding team when Local Public spun out of Cascade PBS as a public benefit corporation. Leads the whole product surface for 20+ PBS member stations.",
    effects: ["Class unlocked: Director of Product"],
  },
  // Design
  {
    id: "d-boot", track: "design", tier: 1, col: 0, kind: "milestone", cross: ["f-read"], name: "UX Bootcamp", glyph: "UX", t: 2020.1, when: "2020 · Springboard",
    lore: "The class change. Stepped off the restaurant floor, took Springboard's UX Design program, and started making things instead of serving them.",
    effects: ["Class change: Server → Designer"],
  },
  {
    id: "d-res", track: "design", tier: 2, col: -1, lv: "pro", from: ["d-boot"], cross: ["f-read"], name: "User Research", glyph: "RES", t: 2020.85, when: "2020 → now",
    lore: "First contract gig: revived a stalled research project and finished it in four weeks. Later ran CMS research with station users at four PBS stations.",
  },
  {
    id: "d-ia", track: "design", tier: 2, col: 0, lv: "pro", from: ["d-boot"], name: "Information Architecture", glyph: "IA", t: 2020.5, when: "2020 → now",
    lore: "Navigation and content structure for a catalog of 3,000+ PBS and local shows, on everything from a phone to a TV remote.",
  },
  {
    id: "d-proto", track: "design", tier: 2, col: 1, lv: "pro", from: ["d-boot"], name: "Prototyping", glyph: "PRO", t: 2021.7, when: "2021 → now",
    lore: "3D virtual campus tours, Figma Make prototypes, and working audio app prototypes on real station streams.",
  },
  {
    id: "d-a11y", track: "design", tier: 3, col: -1, lv: "pro", from: ["d-res"], name: "Accessibility", glyph: "A11Y", t: 2025.7, when: "2025 → now",
    lore: "Text-to-speech across every OTT and mobile app, Audio Description on all platforms, and WCAG remediation for the web portal.",
  },
  {
    id: "d-ui", track: "design", tier: 3, col: 0, lv: "sig", from: ["d-ia"], name: "UI Design", glyph: "UI", t: 2025.8, when: "Late 2025 → now",
    lore: "Took on hands-on product design with no dedicated designer: Search, Player, Live, Show Details, Home, My List and Settings.",
  },
  {
    id: "d-ai", track: "design", tier: 3, col: 1, lv: "sig", from: ["d-proto"], name: "AI-Assisted Design", glyph: "AI", t: 2025.9, when: "Nov 2025 → now", read: "writing/what-i-learned-designing-and-building-with-ai",
    lore: "Early adopter of AI agents writing directly to the Figma canvas. Set it up within weeks of write access opening and made it the daily working method.",
    effects: ["Haste: design throughput multiplied"],
  },
  {
    id: "d-sys", track: "design", tier: 4, col: -1, lv: "pro", from: ["d-a11y"], name: "Design Systems", glyph: "SYS", t: 2026.3, when: "2026",
    lore: "Rebuilt the app and web portal design files to be brand-neutral, with color and contrast rules that hold up in every partner station's palette.",
    effects: ["Any screen, any station brand"],
  },
  {
    id: "d-tv", track: "design", tier: 4, col: 0, lv: "pro", from: ["d-ui"], name: "10-Foot UI", glyph: "TV", t: 2026.2, when: "2026",
    lore: "Designing for a remote control across Roku, Apple TV, Fire TV, Android TV, Samsung and LG, where focus states matter more than hover.",
  },
  {
    id: "d-x", track: "design", tier: 4, col: 1, lv: "pro", from: ["d-ai"], name: "Cross-Platform Patterns", glyph: "X", t: 2026.85, when: "3.0.0",
    lore: "Tested native Liquid Glass and Material 3 against a custom pill for the 3.0.0 nav bar, then picked one pattern that works on iOS, Android, phone and tablet.",
  },
  {
    id: "d-cap", track: "design", tier: 5, col: 0, kind: "capstone", from: ["d-sys", "d-tv", "d-x"], name: "Four Major Releases", glyph: "IV", t: 2026.86, when: "Releases 2.8 → 3.0", read: "work/designing-the-2026-releases",
    lore: "Designed the apps hands-on for a year, directing AI agents in Figma: four major releases across mobile, TV and web, ending with the biggest release in the platform's history.",
    effects: ["+1 year of design output", "350+ hours in Figma across 2025 and 2026, on top of the day job"],
  },
  // App Release Manager
  {
    id: "r-keys", track: "release", tier: 1, col: 0, kind: "milestone", cross: ["p-plat"], name: "Took the Keys", glyph: "KEY", t: 2024.45, when: "Jun 2024",
    lore: "With the 2024 launches, became the platform's sole app release manager with no prior app store experience. Learned every store from scratch.",
    effects: ["Unlocks: App Release Manager track"],
  },
  {
    id: "r-sign", track: "release", tier: 2, col: -1, lv: "pro", from: ["r-keys"], name: "Accounts & Signing", glyph: "SIG", t: 2024.5, when: "2024 → now",
    lore: "Developer and organization accounts, certificates and signing, and access across station-owned accounts and Local Public's own.",
    effects: ["First apps on Local Public's own Apple account"],
  },
  {
    id: "r-list", track: "release", tier: 2, col: 0, lv: "sig", from: ["r-keys"], name: "Store Listings", glyph: "ASO", t: 2024.55, when: "2024 → now",
    lore: "Metadata, screenshots and assets for every station, configured by hand on 7 stores. The 3.0.0 refresh alone meant 42 files per station across 56 listings.",
    effects: ["+56 listings refreshed for 3.0.0"],
  },
  {
    id: "r-priv", track: "release", tier: 2, col: 1, lv: "pro", from: ["r-keys"], name: "Privacy Labels & Ratings", glyph: "LBL", t: 2024.6, when: "2024 → now",
    lore: "Privacy declarations, data safety forms and age ratings for each store, kept accurate as the apps change.",
  },
  {
    id: "r-roku", track: "release", tier: 3, col: -1, lv: "pro", from: ["r-sign"], name: "Roku Certification", glyph: "RKU", t: 2024.7, when: "2024",
    lore: "Ran Roku from beta through 1.0.0 and the 2.x line. Negotiated a temporary certification exemption to hold the launch date, then shipped on-device sign-in to close it out.",
  },
  {
    id: "r-apple", track: "release", tier: 3, col: 0, lv: "pro", from: ["r-list"], name: "Apple App Review", glyph: "APL", t: 2024.95, when: "Dec 2024 → now",
    lore: "Resolved a donation-language rejection by taking the Reader App exemption path, then settled iOS and tvOS requirements in one-on-one consultations with App Review.",
    effects: ["Resistance: app review rejections"],
  },
  {
    id: "r-ctv", track: "release", tier: 3, col: 1, lv: "pro", from: ["r-priv"], name: "Smart TV Stores", glyph: "CTV", t: 2025.1, when: "2024–25",
    lore: "Samsung and LG store certification, the LG QA and ad-model messaging that got through review, and Fire TV's move to the AAB format.",
  },
  {
    id: "r-beta", track: "release", tier: 4, col: -1, lv: "pro", from: ["r-roku"], name: "Betas & Release Candidates", glyph: "BETA", t: 2025.2, when: "2024 → now",
    lore: "Beta tracks on each store, Roku beta channels and a release candidate step with the dev partner, so stations can test before anything goes live.",
  },
  {
    id: "r-cad", track: "release", tier: 4, col: 0, lv: "sig", from: ["r-apple"], name: "Release Cadence", glyph: "227", t: 2025.5, when: "Since May 2024",
    lore: "227 production releases across apps, Roku, CMS and web: weekly CMS releases and app releases every one to three weeks.",
    effects: ["+227 releases shipped"],
  },
  {
    id: "r-book", track: "release", tier: 4, col: 1, lv: "pro", from: ["r-ctv"], name: "Release Playbook", glyph: "DOC", t: 2026.8, when: "2024 → Oct 2026",
    lore: "Setup guides for all 8 store platforms, a release tracker by station and platform, and a full hand-off package for the new SRE.",
    effects: ["Bus factor: no longer 1"],
  },
  {
    id: "r-cap", track: "release", tier: 5, col: 0, kind: "capstone", from: ["r-beta", "r-cad", "r-book"], name: "100+ Apps, 8 Stores", glyph: "100", t: 2026.7, when: "Capstone", read: "writing/shipping-station-apps-to-eight-app-stores",
    lore: "Every station launch since 2024 got into the stores through one release manager: 100+ station-branded apps across 8 store platforms, with no dedicated release team.",
    effects: ["+100 apps shipped and maintained"],
  },
  {
    id: "r-v3", track: "release", tier: 6, col: 0, kind: "milestone", status: "active", from: ["r-cap"], name: "3.0.0 Rollout", glyph: "3.0", t: 2026.9, when: "Nov 2026 · in progress",
    lore: "The biggest release since the platform launched, rolling out to every station's mobile and TV apps.",
    effects: ["Quest progress: store assets uploaded"],
  },
  // Business (MBA)
  {
    id: "b-ba", track: "mba", tier: 1, col: 0, kind: "milestone", cross: ["f-floor"], name: "BA, International Studies", glyph: "BA", t: 2016.5, when: "2014–2018 · Univ. of Alaska Anchorage",
    lore: "Earned while working full-time on the restaurant floor.",
    effects: ["+1 degree while working full-time"],
  },
  {
    id: "b-mba", track: "mba", tier: 2, col: 0, kind: "milestone", from: ["b-ba"], name: "MBA", glyph: "MBA", t: 2023.2, when: "2023–2025 · Seattle U Albers", read: "writing/reflecting-on-my-mba-journey-at-seattle-university",
    lore: "Earned while working full-time as a product manager, conferred December 2025. This is the hub: strategy, marketing, finance and operations, each put to work on a real company.",
    effects: ["+1 more degree while working full-time", "Opens 4 branches"],
  },
  {
    id: "b-strat", track: "mba", tier: 3, col: -1.5, lv: "pro", from: ["b-mba"], name: "Strategy", glyph: "STR", t: 2023.6, when: "MBA → work",
    lore: "Competitive advantage and positioning, applied to a platform that sits next to PBS's own national app.",
  },
  {
    id: "b-mkt", track: "mba", tier: 3, col: -0.5, lv: "pro", from: ["b-mba"], name: "Marketing", glyph: "MKT", t: 2024, when: "MBA → work",
    lore: "Segments, positioning and channels, applied to selling a platform to public media stations.",
  },
  {
    id: "b-fin", track: "mba", tier: 3, col: 0.5, lv: "dev", from: ["b-mba"], name: "Finance", glyph: "FIN", t: 2024.4, when: "MBA → work",
    lore: "Reading the numbers behind a business: revenue, cost and the case for spending.",
  },
  {
    id: "b-ops", track: "mba", tier: 3, col: 1.5, lv: "pro", from: ["b-mba"], name: "Operations", glyph: "OPS", t: 2024.8, when: "MBA → work", read: "writing/rolling-out-new-tools-at-a-small-company",
    lore: "Process, systems and the tools that hold a company together. Put straight to work when Local Public became its own company.",
    effects: ["Synergy: the spin-off"],
  },
  {
    id: "b-comp", track: "mba", tier: 4, col: -1.5, lv: "pro", from: ["b-strat"], name: "Competitive Analysis", glyph: "CMP", t: 2026.81, when: "Oct 2026",
    lore: "Mapped PBS's Q3 product readout against the roadmap, set up a competitive analysis space, and moved up four features the team can ship first.",
    effects: ["+4 features pulled forward"],
  },
  {
    id: "b-tam", track: "mba", tier: 4, col: -0.5, lv: "pro", from: ["b-mkt"], name: "Market Sizing", glyph: "TAM", t: 2026.8, when: "Oct 2026",
    lore: "Built Find My Station, a prototype mapping all 485 PBS and NPR stations, and turned it into a ranked prospect list for sales.",
    effects: ["+485 stations mapped"],
  },
  {
    id: "b-case", track: "mba", tier: 4, col: 0.5, lv: "dev", from: ["b-fin"], name: "Business Cases", glyph: "BIZ", t: 2026.7, when: "2026",
    lore: "Wrote the case to move a contractor to a full-time role, and the case for replacing paid Google Analytics with a warehouse-first setup.",
  },
  {
    id: "b-atl", track: "mba", tier: 4, col: 1.5, lv: "sig", from: ["b-ops"], name: "Atlassian Admin", glyph: "ATL", t: 2026.55, when: "2024 → now", read: "writing/setting-up-jira-and-confluence-for-a-new-company",
    lore: "Led the company's Atlassian migration after the spin-off and runs its Jira, Confluence, Jira Service Management and Jira Product Discovery: the support desk, station docs, release management and discovery spaces.",
    effects: ["+4 Atlassian products administered"],
  },
  {
    id: "b-bets", track: "mba", tier: 5, col: -1.5, lv: "dev", from: ["b-comp"], name: "New Platform Bets", glyph: "NEW", t: 2026.55, when: "2026",
    lore: "Evaluated new platforms with the dev partner (Amazon Vega OS, Vizio, Xumo) and a platform expansion for a Texas PBS RFP.",
  },
  {
    id: "b-gtm", track: "mba", tier: 5, col: -0.5, lv: "dev", from: ["b-tam"], name: "Go-to-Market", glyph: "GTM", t: 2026.82, when: "Oct 2026",
    lore: "Planned the low-spend launch campaign for the new apps (LinkedIn, Google search, a site refresh) and made the launch creative and teaser video.",
  },
  {
    id: "b-rev", track: "mba", tier: 5, col: 0.5, lv: "dev", from: ["b-case"], name: "Revenue Strategy", glyph: "$", t: 2026.75, when: "2026",
    lore: "Framed the 2027 revenue bets: ad-supported streaming, an app-driven donations pilot and Digital Pledge. The platform I lead product for drove +53% contributions from Cascade PBS's own apps.",
    effects: ["+53% contributions (platform result)", "11.2% free-to-paid on one station's app, ~3x the national PBS app"],
  },
  {
    id: "b-auto", track: "mba", tier: 5, col: 1.5, lv: "pro", from: ["b-atl"], name: "Workflow Automation", glyph: "BOT", t: 2026.81, when: "Oct 2026",
    lore: "Jira Automation rules and a Rovo agent that write station-facing release notes, publish them to Confluence and post to Slack, plus auto-posting digests and a task board feeding a daily brief.",
    effects: ["Summon: release notes"],
  },
  {
    id: "b-crm", track: "mba", tier: 6, col: 1.5, lv: "pro", from: ["b-auto"], name: "CRM & Website", glyph: "CRM", t: 2026.71, when: "Jun → Sep 2026",
    lore: "Chose HubSpot over Monday as the company CRM, then rebuilt localpublic.tv on HubSpot CMS: site, blog, forms and CRM on one platform at lower cost.",
    effects: ["New localpublic.tv live Sep 2026"],
  },
  {
    id: "b-audio", track: "mba", tier: 6, col: -1, kind: "capstone", status: "active", from: ["b-tam", "b-bets"], cross: ["d-proto"], name: "The Case for Audio", glyph: "FM", t: 2026.84, when: "Quest in progress",
    lore: "Wrote the market case for audio-only station apps, with about 250 NPR member organizations as buyers, backed by working prototypes including a native iOS build with CarPlay.",
    effects: ["Quest progress: pitched to leadership"],
  },
  {
    id: "b-spin", track: "mba", tier: 7, col: 0.5, kind: "capstone", from: ["b-rev", "b-crm"], cross: ["p-dir"], name: "The Spin-off", glyph: "PBC", t: 2026.52, when: "Jul 2026 → now", read: "work/standing-up-local-public",
    lore: "Helped stand up a brand-new public benefit corporation from the inside: Atlassian, CRM, website, help center, incident response and a compliance program, plus the handbook and mission and values work.",
    effects: ["Founding team: Local Public, PBC"],
  },
  // Leadership
  {
    id: "l-capt", track: "lead", tier: 1, col: 0, kind: "milestone", cross: ["f-super"], name: "Initiative Lead", glyph: "CAP", t: 2023.8, when: "2023 · Local Streaming Initiative",
    lore: "Named product and project manager in the initiative's charter, coordinating in-house engineers and two outside firms across a team of about 20.",
  },
  {
    id: "l-inf", track: "lead", tier: 2, col: -1, lv: "sig", from: ["l-capt"], name: "Influence Without Authority", glyph: "INF", t: 2023.9, when: "2023 → now",
    lore: "Years of leading engineers, designers, station partners and outside firms with no one reporting to me.",
  },
  {
    id: "l-exec", track: "lead", tier: 2, col: 1, lv: "pro", from: ["l-capt"], name: "Executive Communication", glyph: "EXC", t: 2025.5, when: "2025 → now",
    lore: "Year-in-review decks, an executive metrics dashboard, and the 2027 bets framed for leadership.",
  },
  {
    id: "l-mgr", track: "lead", tier: 3, col: 0, kind: "milestone", from: ["l-inf", "l-exec"], name: "People Manager", glyph: "1:1", t: 2026.45, when: "2026", read: "writing/becoming-a-first-time-manager",
    lore: "Became a people manager in 2026, moving two teammates from contractor to full-time roles reporting to me.",
    effects: ["+2 direct reports"],
  },
  {
    id: "l-coach", track: "lead", tier: 4, col: -1, lv: "dev", from: ["l-mgr"], name: "Coaching & Delegation", glyph: "CCH", t: 2026.6, when: "2026",
    lore: "Weekly 1:1s, then real ownership: one teammate took over customer support and ran the best-attended working group, the other owns CMS user research.",
  },
  {
    id: "l-hire", track: "lead", tier: 4, col: 0, lv: "dev", from: ["l-mgr"], name: "Hiring", glyph: "HIR", t: 2026.8, when: "Oct 2026", read: "writing/hiring-our-first-product-manager",
    lore: "Ran the Product Manager search end to end: 320+ applicants, 8 interviews, one hire. Also sat on the engineering hiring panel.",
    effects: ["+1 Product Manager recruited"],
  },
  {
    id: "l-cult", track: "lead", tier: 4, col: 1, lv: "dev", from: ["l-mgr"], name: "Culture Building", glyph: "CUL", t: 2026.55, when: "2026",
    lore: "Co-led the employee handbook and mission and values work for the new company, and onboards every new hire on company and product context.",
  },
  {
    id: "l-ai", track: "lead", tier: 5, col: -1, lv: "pro", from: ["l-coach"], name: "AI Adoption", glyph: "LLM", t: 2026.83, when: "Oct 2026",
    lore: "Built an internal plugin that gives each teammate a customizable daily brief, and is drafting the company's AI usage policy.",
    effects: ["Buff: whole team"],
  },
  {
    id: "l-team", track: "lead", tier: 5, col: 0.5, kind: "capstone", from: ["l-hire", "l-cult"], name: "Product Team Builder", glyph: "TEAM", t: 2026.8, when: "Jul → Oct 2026",
    lore: "Formed Local Public's Product team from scratch: a product designer, a partner success manager, and a newly hired Product Manager.",
    effects: ["Party size: 4"],
  },
  {
    id: "l-next", track: "lead", tier: 6, col: 0, kind: "capstone", status: "locked", from: ["l-team"], name: "Next Chapter", glyph: "?", when: "Locked",
    lore: "Requirements partially met. Some XP still to earn. Check back later.",
    effects: ["Requires: ???"],
  },
  // Trust & Compliance
  {
    id: "t-rules", track: "trust", tier: 1, col: 0, kind: "milestone", cross: ["r-keys"], name: "Read the Fine Print", glyph: "TOS", t: 2024.6, when: "2024",
    lore: "App store review guidelines were the first rulebook. Every rejection was a policy lesson.",
  },
  {
    id: "t-inc", track: "trust", tier: 2, col: -1, lv: "pro", from: ["t-rules"], cross: ["f-recover"], name: "Incident Response", glyph: "SOS", t: 2025.85, when: "Nov 2025",
    lore: "During a Ken Burns traffic spike: escalated within about two minutes, resolved in 90, then owned the incident response plan that followed.",
    effects: ["Resolved in 90 minutes"],
  },
  {
    id: "t-priv", track: "trust", tier: 2, col: 1, lv: "pro", from: ["t-rules"], name: "Privacy Law", glyph: "PRV", t: 2025.9, when: "2025 → now",
    lore: "A web portal privacy risk analysis covering VPPA, CIPA and 20 state privacy laws.",
    effects: ["Ward: state privacy laws"],
  },
  {
    id: "t-alert", track: "trust", tier: 3, col: -1, lv: "dev", from: ["t-inc"], name: "Alerting & Monitoring", glyph: "ALR", t: 2026.4, when: "2025–26",
    lore: "Set up incident management in Jira Service Management, then rebuilt alerting in 2026.",
  },
  {
    id: "t-age", track: "trust", tier: 3, col: 1, lv: "pro", from: ["t-priv"], name: "Age Verification", glyph: "AGE", t: 2026.7, when: "2026 · Texas SB 2420",
    lore: "Brought every partner station into compliance with Texas SB 2420 on time, using an age gate that stores no age data. Tracking Utah, Alabama and Louisiana next.",
    effects: ["+0 bytes of age data stored"],
  },
  {
    id: "t-grc", track: "trust", tier: 4, col: 0, kind: "capstone", from: ["t-alert", "t-age"], name: "GRC Program", glyph: "GRC", t: 2026.75, when: "2026",
    lore: "Created the company's governance, risk and compliance program and a weekly compliance digest, so new laws and store policy changes get caught early.",
    effects: ["Early warning: new laws"],
  },
  // Data & Analytics
  {
    id: "x-needs", track: "data", tier: 1, col: 0, kind: "milestone", cross: ["f-read"], name: "Station Data Needs", glyph: "ASK", t: 2024.6, when: "2024",
    lore: "Interviewed stations about what they needed from data and found the top three: revenue proof for their boards, viewer data for programming, and linking to their CRM.",
  },
  {
    id: "x-skep", track: "data", tier: 2, col: -1, lv: "pro", from: ["x-needs"], name: "Metric Skepticism", glyph: "!?", t: 2026.82, when: "Oct 2026", read: "writing/measuring-what-matters-when-the-numbers-disagree",
    lore: "Spotted that Google Analytics active-user counts were inflated on web while viewing stayed flat, and made watch history the number to trust.",
    effects: ["Detect Lies: analytics edition"],
  },
  {
    id: "x-dash", track: "data", tier: 2, col: 1, lv: "dev", from: ["x-needs"], name: "Dashboards", glyph: "KPI", t: 2026.82, when: "Oct 2026",
    lore: "Pulled four scattered Tableau views into one executive dashboard, with a confidence rating on every metric and each product bet tied to the number it should move.",
  },
  {
    id: "x-tax", track: "data", tier: 3, col: -1, lv: "dev", from: ["x-skep"], name: "Event Taxonomy", glyph: "EVT", t: 2026.81, when: "Oct 2026",
    lore: "Drafted a starter app event taxonomy: 23 core events, de-identified by default, portable across analytics tools.",
  },
  {
    id: "x-arch", track: "data", tier: 3, col: 1, lv: "dev", from: ["x-dash"], name: "Analytics Architecture", glyph: "DWH", t: 2026.8, when: "Oct 2026",
    lore: "Proposed a warehouse-first setup (Bitmovin for playback, a product analytics tool for app events) to replace paid Google Analytics, and sent it to engineering for a feasibility check.",
  },
  {
    id: "x-cert", track: "data", tier: 3, col: 0, kind: "milestone", status: "active", from: ["x-needs"], name: "Google Data Analytics Cert", glyph: "GDA", t: 2026.88, when: "Quest accepted · in progress", read: "writing/learning-data-as-a-product-manager",
    lore: "Working toward Google's data analytics certificate to build the hands-on side: SQL, spreadsheets, cleaning data and visualizing it. Training for the stuff this track is still missing.",
    effects: ["Quest progress: underway", "+XP toward DATA"],
  },
  {
    id: "x-cap", track: "data", tier: 4, col: 0, kind: "capstone", status: "active", from: ["x-tax", "x-cert", "x-arch"], name: "Owning the Numbers", glyph: "DATA", t: 2026.9, when: "Training in progress",
    lore: "The current training arc: going from reading other people's dashboards to building and querying the analytics stack directly. Not there yet, which is the point of this node.",
    effects: ["Quest progress: building out"],
  },
  // AI-Assisted App Dev
  {
    id: "a-blog", track: "dev", tier: 1, col: 0, kind: "milestone", name: "Bear Blog", glyph: "BLG", t: 2025.2, when: "kylepace.net",
    lore: "Writing about product management and career development on Bear Blog. The first thing I shipped for myself, and where this site started.",
  },
  {
    id: "a-html", track: "dev", tier: 2, col: -1, lv: "dev", from: ["a-blog"], name: "Reading Code", glyph: "</>", t: 2025.3, when: "2025 → now",
    lore: "Enough HTML, CSS and JavaScript to follow what an AI agent wrote and notice when it looks wrong. Reading, not writing from scratch.",
  },
  {
    id: "a-typst", track: "dev", tier: 2, col: 1, lv: "pro", from: ["a-blog"], name: "Docs as Code", glyph: "TYP", t: 2026.3, when: "2026",
    lore: "The resume is a Typst file in a GitHub repo, set up and maintained with AI help.",
  },
  {
    id: "a-cc", track: "dev", tier: 3, col: -1, lv: "pro", from: ["a-html"], cross: ["p-spec", "d-ai"], name: "Directing AI Agents", glyph: "CC", t: 2026.6, when: "2026 → now",
    lore: "Builds with Claude Code: writes the product brief, lets the agent write the code, reviews the result in the browser, and iterates. The PM skill set, pointed at a coding agent.",
  },
  {
    id: "a-ci", track: "dev", tier: 3, col: 1, lv: "dev", from: ["a-typst"], name: "CI/CD", glyph: "CI", t: 2026.35, when: "2026",
    lore: "The resume builds and deploys itself through GitHub Actions, a workflow set up with AI help. Yes, the resume has CI.",
    effects: ["Auto-deploy on every commit"],
  },
  {
    id: "a-web", track: "dev", tier: 4, col: -1, lv: "dev", from: ["a-cc"], name: "Shipping Web Apps", glyph: "WEB", t: 2026.7, when: "2026 · seattlegrocery.deals", read: "work/seattle-grocery-deals",
    lore: "Seattle Grocery Deals (seattlegrocery.deals): the week’s deals from Seattle’s specialty grocery stores in one place, built entirely with Claude Code.",
  },
  {
    id: "a-auto", track: "dev", tier: 4, col: 1, lv: "dev", from: ["a-ci"], name: "Scheduled Routines", glyph: "CRON", t: 2026.78, when: "2026",
    lore: "Cloud routines, set up through AI agents, that watch every store's flyer page and publish its new deals to the site on their own.",
    effects: ["Loot drops as each flyer lands, automated"],
  },
  {
    id: "a-ios", track: "dev", tier: 5, col: -1, lv: "dev", from: ["a-web"], cross: ["d-proto"], name: "iPhone Apps", glyph: "iOS", t: 2026.82, when: "Oct 2026",
    lore: "iPhone apps for Seattle Grocery Deals and Henwood, plus an audio prototype with CarPlay, all built with AI coding agents.",
  },
  {
    id: "a-site", track: "dev", tier: 5, col: 1, kind: "milestone", from: ["a-web", "a-auto"], name: "This Website", glyph: "KP", t: 2026.84, when: "Nov 2026",
    lore: "Moved off Bear Blog to a site rebuilt with AI coding agents: Astro on Cloudflare, case studies, notes synced from Mastodon, site search, and this lab.",
    effects: ["You are here"],
  },
  {
    id: "a-henwood", track: "dev", tier: 6, col: -1, kind: "milestone", status: "active", from: ["a-ios"], name: "Henwood", glyph: "HEN", t: 2026.83, when: "iPhone · in progress", read: "work/henwood",
    lore: "A pantry and recipes app for iPhone, iPad and Mac, with a hen for a mascot, built with AI coding agents. Sharing recipes into it from other apps is next.",
    effects: ["Quest progress: almost shippable"],
  },
  {
    id: "a-v60", track: "dev", tier: 6, col: 1, kind: "secret", status: "secret", from: ["a-ios"], name: "Perfect Pour-Over", glyph: "V60", t: 2026.95, when: "Secret skill",
    lore: "You found the hidden node. Rumored next side quest: a pour-over coffee timer app.",
    effects: ["+30 seconds of bloom", "Achievement: Cheat Code Enjoyer"],
  },
];

// The timeline's scale: [year, position in %]. Not to scale on purpose: the long early
// chapters are squeezed so the busier recent years get room. The replay follows it too.
export const timeScale: [number, number][] = [
  [2006, 0],
  [2019.6, 12],
  [2020, 13],
  [2021.25, 25],
  [2021.7, 36],
  [2022.6, 49],
  [2026.5, 83],
  [2027, 100],
];

// Year marks under the timeline, at chapter boundaries. 2027 is shown as "Now".
export const timeTicks: number[] = [2006, 2020, 2022, 2024, 2026, 2027];

// The timeline under the tree. Lane 0 is work, lane 1 is school.
export const eras: Era[] = [
  { lane: 0, from: 2006, to: 2019.6, name: "Restaurants", track: "floor" },
  { lane: 0, from: 2020, to: 2021.25, name: "UX bootcamp + contract work", track: "design" },
  { lane: 0, from: 2021.25, to: 2021.7, name: "F. Schumacher & Co.", track: "pm" },
  { lane: 0, from: 2021.7, to: 2022.6, name: "3 Enrollment Marketing", track: "pm" },
  { lane: 0, from: 2022.6, to: 2026.5, name: "Cascade PBS", track: "release" },
  { lane: 0, from: 2026.5, to: 2027, name: "Local Public", track: "lead" },
  { lane: 1, from: 2014, to: 2018.4, name: "BA", track: "mba" },
  { lane: 1, from: 2023, to: 2025.95, name: "MBA", track: "mba" },
  { lane: 1, from: 2026.6, to: 2027, name: "Google data cert", track: "data" },
];

// Tongue-in-cheek attributes, 1 to 20.
export const stats: Stat[] = [
  { key: "EMP", value: 18, why: "13 years reading tables", color: "tangerine" },
  { key: "SHIP", value: 19, why: "227 production releases", color: "lime" },
  { key: "CRAFT", value: 17, why: "four major releases designed hands-on", color: "pink" },
  { key: "INT", value: 16, why: "BA + MBA", color: "violet" },
  { key: "CHA", value: 17, why: "20+ station partners", color: "sunshine" },
  { key: "CON", value: 20, why: "2 degrees earned while working full-time", color: "sky" },
  { key: "DATA", value: 9, why: "Leveling up: Google data cert in progress", color: "neutral" },
];
