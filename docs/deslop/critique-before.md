⚠️ DEGRADED: single-context (Impeccable's critique asks for two isolated sub-agents; this session runs without spawning agents, so Assessment A was done first, then the detector)

# Critique (before the de-slop pass)

Scope: `/`, `/work`, `/work/apex`, `/journey`, `/notebook`, `/notebook/defending-apex/`, 1440 and 390 px, both themes (screenshots in `before/`).

## Design health (Nielsen, 0–4)

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 3 | Copy buttons give feedback; giscus has no loading state |
| 2 | Match with the real world | 3 | "§NN — LABEL · meta" notation reads as decoration, not information |
| 3 | User control and freedom | 3 | Fine; filters reset, menus close |
| 4 | Consistency and standards | 2 | Three button styles, seven radii, mixed uppercase, Apex page in a different type voice |
| 5 | Error prevention | 3 | Form validates; little else to prevent |
| 6 | Recognition rather than recall | 3 | Nav clear; tag/colour chips need a legend to decode |
| 7 | Flexibility and efficiency | 3 | Tag filters, TOC, EN/PT |
| 8 | Aesthetic and minimalist design | 1 | Too many motifs at once: § numbers, dimension rules, taped photo, margin notes, red-pen underlines, colour dots, chips, badges, reveals |
| 9 | Error recovery | 3 | 404 page, form errors |
| 10 | Help and documentation | 3 | n/a for a portfolio; README covers authoring |
| **Total** | | **27/40** | **Good structure, noisy surface** |

## Anti-patterns verdict

**Assessment A (design review).** Yes, it reads as AI-made. The structure is sound, but every section carries the same scaffold: an uppercase tracked kicker with a § number and a meta suffix, a serif slogan heading, then cards with chips. The "engineering notebook" idea is expressed through five motifs at once, so none of them reads as a choice. Copy leans on template phrasing ("Reliable systems, with the spec as the anchor", "I'm drawn to…", "Along the way…", "where I'll keep building and learning").

**Assessment B (detector, `detect.mjs` over the built pages).** 9 findings:

| Page | Rule | Detail |
|---|---|---|
| `/` | em-dash-overuse | 9 em dashes in body text |
| `/` | numbered-section-markers | 01 → 06 on every section |
| `/work` | flat-type-hierarchy | 12 / 14.4 / 15.2 px, ratio 1.3 |
| `/work/apex` | single-font | large areas only in `--font-mono` |
| `/work/apex` | em-dash-overuse | 37 em dashes |
| `/work/apex` | numbered-section-markers | 01 → 11 |
| `/journey` | flat-type-hierarchy | 11.5 / 12 / 13.6 px |
| `/notebook/defending-apex/` | side-tab | callout with a 3 px left border |
| `/notebook/defending-apex/` | single-font | mono-heavy meta |

Agreement: both point at the section-number scaffolding, mono overuse and the dash cadence. The detector also caught the callout side-stripe and the flat small-size ramp, which the visual pass under-weighted.

## Strengths

1. Clear IA: Work / Journey / Notebook / Contact, with real content behind each.
2. Strong brand assets the brief keeps: hero glow, dot grid, red-letter wordmark, the dusk photo.
3. Real substance (thesis, ledger, numbers) that does not need decoration to be credible.

## Priority issues

1. **[P1] Motif overload.** § numbers + meta on every label, dimension rules, taped photo, margin notes, red-pen underlines, `fig.` captions. Keep section labels (simplified) and spec blocks; cut the rest.
2. **[P1] Uppercase and tracking everywhere.** ~50 uppercase elements on the home page (nav, buttons, dates, chips, status). Restrict to the section label.
3. **[P1] Inconsistent system.** Radii 1/2/3/6/10 px + pills; spacing includes 12 px and ad-hoc rem values; three button styles. One radius, the 8-point scale, two button styles.
4. **[P2] Accent overuse.** `#ff004f` on § numbers, captions, the status dot, graph edges, chips and hovers, often 5+ times per viewport.
5. **[P2] Repetition.** Journey graph, home Experience and the Journey page show the same data three times; colour-dot kind chips repeat the timeline dots.

## Persona red flags

- **Recruiter, 30 seconds:** has to read past the kicker, the slogan heading and a long hero line before learning "backend engineer, Lisbon, joining OpenSoft".
- **Engineer:** sees badges like "Complete" / "Public" that carry no information.

## Minor

- Hero name has a red full stop that duplicates the wordmark.
- Card hover lifts and section reveals add motion without meaning.
- Footer stamp is wording, not information.

## Questions

- If every section has a § number, what does the number tell the reader?
- Would the page lose anything if the home Experience were three lines?
