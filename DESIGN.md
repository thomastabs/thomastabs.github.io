---
name: Tomás Taborda
description: Personal site of a software engineer, with a thesis case study and a notebook
colors:
  bg: "#f4f5f7"
  surface: "#fbfcfd"
  surface-2: "#e9ebef"
  ink: "#16181d"
  ink-2: "#4a4f59"
  muted: "#62666f"
  pen: "#d6003f"
  pen-fill: "#c8003b"
  dark-bg: "#0a0a0a"
  dark-surface: "#111111"
  dark-surface-2: "#151515"
  dark-ink: "#e8e8e8"
  dark-ink-2: "#a0a0a0"
  dark-muted: "#858585"
  dark-pen: "#ff004f"
  dark-pen-fill: "#d1003f"
typography:
  hero:
    fontFamily: "Fraunces Variable, Iowan Old Style, Georgia, serif"
    fontSize: "3.5rem"
    fontWeight: 500
    lineHeight: 1.1
  page-title:
    fontFamily: "Fraunces Variable, Iowan Old Style, Georgia, serif"
    fontSize: "2.5rem"
    fontWeight: 500
    lineHeight: 1.15
  section-title:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  item-title:
    fontFamily: "Fraunces Variable, Iowan Old Style, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.15
  body:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  data:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
  wordmark:
    fontFamily: "Fraunces Variable, Iowan Old Style, Georgia, serif"
    fontSize: "1.2rem"
    fontWeight: 500
  chart-small:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "12px"
  chart-text:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "13px"
  graph-note:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "16px"
  graph-label:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 500
rounded:
  sm: "4px"
  pill: "9999px"
spacing:
  s-2: "8px"
  s-3: "16px"
  s-5: "24px"
  s-6: "32px"
  s-7: "48px"
  s-8: "64px"
components:
  button-primary:
    backgroundColor: "{colors.pen-fill}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
---

# Design system

Tokens live in `src/styles/tokens.css`, which is the source of truth. This file explains how to use them.

## Overview

An engineering notebook: neutral paper in light mode, a drafting table in dark mode. Quiet everywhere except the hero, where the journey graph is the one memorable element. Pointing at a stop lights the path that led to it.

## Colors

- Neutral paper and ink carry almost everything. Don't bring back the old warm cream.
- `pen` crimson is the only accent: primary button, active states, the graph's next stop and traced path.
- Violet exists only as a faint corner in the hero wash.

## Typography

- Fraunces: hero name, page titles and item titles. The owner rejected it for section titles.
- IBM Plex Sans: section titles and all UI and body text. Sentence case, no uppercase labels.
- IBM Plex Mono: dates, numeric spec values and code only.
- Text measure is 65ch. Don't widen paragraphs: the owner tried it and reverted it. Full-width boxes are fine with the text inside capped.

## Layout

One 1120px container, spacing from `--s-*`, 80px section gaps on phones and 128px on desktop. Phones are first-class: tables stack and screenshots pan at a readable width.

## Elevation and shape

No shadows. Depth comes from 1px rules and `surface`. One 4px radius, plus pills for small chips. No cards inside cards.

## Components

- One `SectionHeading`, one `.btn` pair, one `.filter-pill`, one `ProjectCard`, one `SpecBlock`.
- Links are plain underlined text, internal or external, with no arrow or icon. The owner asked for this.

## Do and don't

- Do separate metadata with commas or line breaks. Don't use middle dots or `→` on links.
- Don't put a label above a heading.
- Motion answers an action, apart from the graph's single draw-in, and respects reduced motion.
