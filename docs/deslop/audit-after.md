# Audit (after the de-slop pass)

Scope: the production build (`dist/`) served on localhost: `/`, `/work`, `/work/apex`, `/journey`, `/notebook`, `/notebook/defending-apex/`, `/contact` and `/pt/`. Checked at 1440 and 390 px, in both themes. Evidence comes from Lighthouse 12 (16 runs), the Impeccable 4.8.0 detector (rendered at 1280×800 and 390×844, plus the static scan), a Playwright metrics script (computed styles on every visible text element) and a Playwright function script (27 interaction checks).

## Audit health score

| # | Dimension | Score | Key finding |
|---|---|---|---|
| 1 | Accessibility | 4 | Lighthouse a11y 100 on all 16 runs. 0 text elements below AA in either theme at either width. The mobile menu now traps focus. |
| 2 | Performance | 4 | Lighthouse performance 98–100 (mobile), 100 (desktop). The scroll-reveal observer and the blur filters are gone. |
| 3 | Responsive design | 4 | No horizontal scroll at 390 on 8 pages. The graph collapses to the strip. Filter pills and nav are 44px targets. |
| 4 | Theming | 4 | All colours come from `tokens.css`, apart from the hero glow's violet (kept as brand, toned down to a faint corner) and the `theme-color` meta, which repeats the `--bg` values because a meta tag cannot read CSS variables. |
| 5 | Anti-patterns | 3 | The 3.9 detector went from 9 findings to 0 once the section numbers were removed. The 4.8 detector flags only `cream-palette` on each page, which the brief keeps. |
| **Total** | | **19/20** | **Excellent** |

## Anti-patterns verdict

**Pass, with one exception the brief keeps.** The site no longer reads as generated:
- one serif and one sans;
- one accent, used for the primary button, the current-nav underline, link hover and the graph's "next" node;
- one radius, and two button styles;
- no reveals, shadows, side stripes, margin notes, tape or tilt.

The section numbers are gone; each label is the word alone. The remaining tell is the warm off-white background (`--bg #f6f4ef`), which Impeccable 4.8 flags as `cream-palette`. The brief says to keep the existing tokens, so it stays.

Detector, before → after:

| Rule | Before | After |
|---|---|---|
| em-dash-overuse | `/` (9), `/work/apex` (37) | 0 |
| numbered-section-markers | `/`, `/work/apex` | 0 (numbers removed) |
| cream-palette (4.8 only) | n/a | every page (kept by the brief) |
| tiny-text, low-contrast, cramped-padding, tight-leading (4.8 rendered) | n/a | 0 (fixed) |
| flat-type-hierarchy | `/work`, `/journey` | 0 |
| single-font (mono-heavy) | `/work/apex`, post | 0 |
| side-tab | post callout | 0 |

## Executive summary

- Score: **19/20 (Excellent)**.
- Issues: P0 0 · P1 0 · P2 1 · P3 5.
- Top items:
  - the cream background (kept by the brief);
  - the wordmark's 19.2px size, which is off the ramp but is the kept logo.
- Next step: none required. Optionally, decide whether `--bg` changes.

## Measured counts

| Target | Result | Evidence |
|---|---|---|
| Font families: 2 (Fraunces, Plex Sans), plus Plex Mono only for code, dates and spec values | Fraunces Variable, IBM Plex Sans, IBM Plex Mono | Computed `font-family` of every visible text element on 7 pages × 2 widths × 2 themes. Mono appears only on `.date`, spec `dd.mono`, stat and export values, code, BibTeX, metric names and the archive year column. |
| Type sizes ≤ 7 | 7 ramp sizes: 14 / 16 / 17 / 20 / 28 / 40 / 56. Plus 19.2px on the wordmark (logo, kept unchanged). | Same scan. |
| Radius values: 2 | 4px, 9999px. Plus 50% on round dots (timeline nodes, strip dots), which are circles rather than rectangles. | Computed `border-radius` on every bordered or filled element. |
| Spacing only from the scale | Every margin, padding and gap in `src/` uses `--s-*` tokens. The exceptions are hairline offsets (1–7px) that position dots on the timeline axis, and the 80px mobile section gap the brief asks for. | `scan.py` over every `<style>` block and stylesheet. |
| Button styles: 2 | `.btn--primary` (filled) and `.btn` (text link) | `.btn--ghost` and the bordered secondary are gone. |
| Uppercase elements ≤ 10 per page | `/` 6, `/work/apex` 10, every other page 0 | Elements with computed `text-transform: uppercase` that don't inherit it from an uppercase parent. |
| Accent uses ≤ 2 per viewport | Maximum 2: the primary button plus the graph's "next" node on `/`; the nav marker plus the form's Send button on `/contact` | `--pen` / `--pen-fill` on text, background, border, fill or stroke, counted per 900px window, excluding the wordmark. |
| AA contrast | 0 failures | Per-element ratio against the composited background, in both themes at both widths. Text over the contact photo and inside Shiki code is excluded; Lighthouse's own contrast audit passes there. |
| Lighthouse ≥ 95 | Performance 98–100; Accessibility, Best Practices and SEO 100 | 8 pages × mobile + desktop. |

## Detailed findings

**[P2] Cream page background**
- **Location:** `tokens.css`, `--bg #f6f4ef` (light theme).
- **Category:** Anti-pattern.
- **Impact:** Impeccable 4.8 and frontend-design both list a warm off-white with a serif display as a common generated-page default.
- **Recommendation:** Keep it, as the brief says, or move `--bg` to a neutral off-white at chroma 0. That is one token, and every contrast pair would need re-measuring.
- **Suggested command:** `/impeccable colorize`.

**[P3] Wordmark at 19.2px**
- **Location:** `Wordmark.astro`.
- **Category:** Theming.
- **Impact:** It is one size outside the ramp.
- **Recommendation:** Leave it, because it is the kept logo. Move it to `--t-20` only if you decide the logo may change.

**[P3] Plex Mono as a third family**
- **Category:** Typography.
- **Impact:** None. The brief allows it for code, dates and spec values, and that is all it does now.

**[P3] Mobile section gap of 80px**
- **Category:** System.
- **Impact:** 80 is not on the 8-point scale, but the brief sets it.
- **Recommendation:** Keep it.

**[P3] LinkedIn link not machine-verifiable**
- **Location:** `/contact`.
- **Category:** Links.
- **Impact:** LinkedIn answers bots with HTTP 999. The other 25 external links return 2xx/3xx and all internal links and anchors resolve.
- **Recommendation:** Click it once by hand.

**[P3] Screenshots in the repo**
- **Location:** `docs/deslop/before`, `after` (about 43 MB of PNG).
- **Impact:** Repository size only. GitHub Pages deploys `dist/`, so the site is unaffected.
- **Decision:** Kept, as you asked.

## Patterns and systemic notes

- Tokens now carry the whole system: type ramp, spacing, radius, motion and colour. The legacy `--step-*` names map onto the ramp, so old references cannot drift.
- Filters on Journey, Notebook and the Apex timeline share one `.filter-pill` style in `base.css`.
- Motion: `--dur` is 200ms and `--dur-slow` is 250ms, both with an ease-out curve. Under reduced motion, everything is disabled, including the graph draw.

## Positive findings

- The hero now gives a recruiter the answer in one screen: name, "I build backend systems", the thesis, the OpenSoft date and two actions.
- The header is solid `--bg`. It reads over the glow, photos and code, and doesn't jitter.
- The Apex page keeps its substance (spec block, tables, charts) with one voice and no decoration.
- All 27 interaction checks pass:
  - theme toggle, persisted with no flash;
  - EN→PT switches on 4 page types, with hreflang;
  - Journey filters, Apex timeline filter and Notebook tags;
  - graph node clicks;
  - TOC;
  - copy email and BibTeX, showing "Copied" for 2s;
  - giscus placeholder;
  - mobile menu open, focus trap and Esc;
  - no horizontal scroll;
  - no page errors.

## Recommended actions

1. **[P2] `/impeccable colorize`**: only if you want the cream background gone.
2. **[P3] `/impeccable polish`**: final pass after you review the screenshots.

You can ask me to run these one at a time, all at once, or in any order you prefer. Re-run `/impeccable audit` after fixes to see the score change.
