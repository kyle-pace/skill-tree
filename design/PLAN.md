# Design plan: career skill tree

The skill tree is a standalone lab on kylepace.dev (kp-design's `LabLayout`). This is the
plan for its own look. The tokens live in `src/styles/theme.css`.

## Concept: a character sheet on graph paper

A tabletop RPG character sheet is a printed form you fill in by hand: field labels under
ruled lines, ability scores in a column, a backstory box, and the build itself sketched on
graph paper. The page is that sheet. In dark mode the paper becomes a blueprint, because a
skill tree is a build plan.

## Color

Light mode is graph paper and form ink. Dark mode is a blueprint. Track colors stay (they
carry which track a skill belongs to), always paired with a name or a shape.

| Name | Light | Dark | Use |
| --- | --- | --- | --- |
| Paper | `#eef2f5` | `#0f2135` | Page and graph sheet |
| Card stock | `#f9fbfc` | `#152c45` | The notes column, pressed index entries |
| Form ink | `#15233a` | `#e6edf5` | Text, printed rules, the play button |
| Pencil | `#4b5a6e` | `#a3b4c8` | Field labels, secondary text (6.2:1 and 7.7:1) |
| Grid | `#c9d4de` | `#27425f` | Graph paper lines only (decorative) |
| Ballpoint | `#2445c8` | `#9db2ff` | Links, focus rings, the scrubber (6.8:1 and 8.0:1) |

Form borders that people need to see (buttons, fields) use a "Rule" shade, `#7b8ba0` /
`#6d87a6` (3.1:1 and 4.4:1 against paper).

## Type

Atkinson Hyperlegible Next only (fixed by the principles). Personality comes from:

- **Form title** (h1): 700, step-3, tight tracking, the only large type on the page.
- **Field values**: 700, step-1, sitting on a 2px ruled line.
- **Field labels**: 400, step--1, Pencil, sentence case, under the line, the way a
  printed form labels its blanks.
- **Ability scores**: 700, step-2, tabular figures. The abbreviations (EMP, SHIP) are the
  data itself, so they stay as written, in bold text face, not mono.
- **Node glyphs and tier numerals**: text face, bold. No monospace anywhere.

## Layout

The tree is the app, so it comes first: a one-line title, then the tree. The character
sheet (fields and attributes) sits under it, and the explanation lives in an About
section at the bottom, linked from "About" on the right of LabLayout's top bar.

```
 < kylepace.dev                                                        About
 My career, as a skill tree
 ┌──────────────┬────────────────────────────────────┬──────────────────────┐
 │ All tracks   │ ░░░░░░░░ graph paper frame ░░░░░░░░ │ Notes (card stock,   │
 │ Hospitality  │ ░ Track name                      ░ │ sticky): the skill   │
 │ Project →    │ ░          THE TREE               ░ │ you picked, what it  │
 │ ...          │ ░                                 ░ │ builds on, leads to  │
 │ (index)      │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │                      │
 │              │ 2024  Cascade PBS  [Replay] 1× Now  │                      │
 │              │ Work ▬▬▬▬▬|▬▬  School ▬  Year ──●   │                      │
 │              │ Key: signature, proficient, ...     │                      │
 └──────────────┴────────────────────────────────────┴──────────────────────┘
 ────────────────────────────────────────────────────────────────────────────
 Kyle Pace___________________          Attributes out of 20
 Character                             EMP  18  ■■■■■■■■■■■■■■■■■■□□
 Director of Product__ 6__ Restaurant  SHIP 19  ■■■■■■■■■■■■■■■■■■■□
 Class                 Level Background ...
 ────────────────────────────────────────────────────────────────────────────
 About
 What this is. How to read it. Notes.
```

- Everything is left aligned, like a form. Nothing is centered except the tree drawing.
- Phone: the index becomes a two-column list above the tree, the overview shows two
  sketches per row, a track's tree scrolls sideways inside its frame (opening centered on
  the trunk), and the notes go under the timeline.
- The index is a list of text buttons with the track's color as a binder-tab edge on the
  left. The pressed entry is on card stock with a 2px ink border and bold text, so the
  state never rests on color.

## Principles

1. **The graph-paper frame is the hero.** It holds the tree, and nothing above it competes:
   one line of title, then the app. The explanation waits in About.
2. **Use the form's own devices.** Ruled blanks with labels under them, a score column with
   pips (one per point, out of 20), a backstory box, a key. Each one says what the content
   is; none is decoration.
3. **Square, printed edges.** Controls are rectangles with a 2px ink border and a 3px
   radius, like boxes on a printed form. No pills, no soft shadows, no gradients.
4. **Plain words.** Meta reads as a sentence ("Milestone in Hospitality"), not chips joined
   with dots. No arrows tacked onto links.
5. **One motion moment.** The career replay, which already exists, is the only motion.

## Review against the generic defaults, and what changed

- *First pass put the character sheet (fields, backstory, scores) above the tree.* That
  is an intro block in costume. Kyle wants the app first, so the fields and scores moved
  under the tree and the backstory became the About section.
- *Second pass had a 7-box row of big ability scores.* That is the "big
  number, small label" stat row every dashboard uses. Changed to a single ruled column of
  scores beside the name fields, with pips, which is how a character sheet prints them.
- *First pass kept the track tabs as a row above the tree.* A row of buttons is a pill bar
  with the corners squared. Changed to a binder-style index down the left of the graph
  sheet, which also gives the tree more height.
- *First pass kept the "All tracks" view as nine bordered mini cards.* Identical cards in a
  grid. Changed to the mini trees drawn straight onto the graph paper with a ruled title
  above each, so the overview reads as one sheet of sketches.
- *Dark mode first idea was near-black with the violet accent.* That is the dark-mode
  default. Changed to a blueprint navy that follows from "the build".
- *Light mode avoided cream on purpose* (the warm-paper default); graph paper is cool.
- Dropped: the gradient avatar, the eyebrow and status badge above the headline, the
  "How to play" eyebrow, all-caps h3s, monospace ticks and glyphs, the "→" on Read links,
  middle-dot meta, and the "Built with AI coding agents" line.
