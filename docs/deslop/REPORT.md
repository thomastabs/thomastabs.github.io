# De-slop pass: report

Branch `deslop`. Every check below was run against the production build (`npm run build`, served with `astro preview`).

- `critique-before.md`: Impeccable critique, before the pass (27/40, 9 detector findings).
- `audit-after.md`: Impeccable audit, after the pass (19/20, 2 detector findings, both kept by the brief).
- `removed.md`: everything removed.
- `copy-changes.md`: every copy change, old → new.
- `before/`, `after/`: 24 full-page screenshots each (6 pages × 1440/390 × light/dark).
- `compare/`: the same 24 views as before | after side by side (WebP).

## Scorecard

| Area | Item | Result | Evidence |
|---|---|---|---|
| Visual | No purple outside the hero glow | PASS | The violets exist only in `Hero.astro` (`--dusk-violet`). There is no purple token, hover or shadow anywhere else. |
| Visual | No emoji or sparkles | PASS | The ✎ ◆ ☐ ✓ glyphs were removed from callouts, comments and the form. Arrows (→ ↗ ↓) remain as link affordances. |
| Visual | Subtle hovers only | PASS | Cards change border colour only. Buttons and links change colour only. There are no transforms on hover (no `transform` in any `:hover` rule). |
| Visual | Icons sized to text | PASS | The GitHub mark is 22px on repo tiles, the copy icon is 1em and the pin is 16px. |
| Visual | One font pair used with rhythm | PASS | Fraunces for headings and Plex Sans for everything else. Mono only on dates, spec values and code (measured). |
| Visual | Readable header | PASS | Solid `--bg`, no blur. 0 contrast failures. Lighthouse a11y is 100. |
| Visual | One radius | PASS | 4px everywhere, plus 9999px for pills. Round dots use 50%. |
| Layout | Components identical across pages | PASS | One `SectionHeading`, one `.btn` pair, one `.filter-pill` (Journey, Notebook, Apex), one `ProjectCard`, one `PostCard`. |
| Layout | Grids aligned | PASS | Card rows use `repeat(auto-fit, minmax(18rem, 1fr))` with equal-height flex columns, and everything sits on one 1120px container with a 65ch prose measure. |
| Layout | Consistent spacing rhythm | PASS | Spacing comes only from `--s-*`. Section gap is 128px desktop and 80px mobile, with page heads at 64px. |
| Layout | No sticky jitter | PASS | The header is solid and sticky with a fixed height. The TOC is sticky under it. Neither animates. |
| Function | Every button, toggle, filter and link works | PASS | 27/27 Playwright checks. The link checker found 0 broken internal links or anchors. 25 of 26 external links return 2xx/3xx; LinkedIn returns 999 to bots, so click it once by hand. |
| Function | Feedback on copy and loading | PASS | "Copied" shows for 2s on email, BibTeX and code. "Loading comments…" shows until giscus draws. |
| Function | Fast, no layout shift | PASS | Lighthouse performance is 98–100 on mobile and 100 on desktop. |
| Technical | Titles, descriptions, OG images, favicon | PASS | 24 pages, each with a unique `<title>` (`Page · Tomás Taborda`), a description, a per-page OG PNG, `favicon.svg` and the new `apple-touch-icon.png`. `lang` and `hreflang` are correct (EN, pt-PT, x-default). |
| Technical | Mobile layout clean | PASS | No horizontal scroll at 390 on 8 pages. The graph collapses to the strip and buttons are not full width. |
| Technical | No placeholder text | PASS | `grep TODO dist/**/*.html` finds 0 matches. The comments TODO callout was removed. |
| Copy | No generic taglines | PASS | Headings are labels. The hero line is the one the brief suggested. |
| Copy | No buzzword stacks | PASS | A grep for the banned list (reliable systems, spec as the anchor, explores how, passionate, leverage, seamless, robust, crafting, drawn to, along the way, keep building) finds 0 matches in visible copy. "X, not Y" sentences were rewritten (see `copy-changes.md`). |
| Copy | Correct footer | PASS | `© 2026 Tomás Taborda · Source`. |
| Copy | Clear one-line value in the hero | PASS | "I build backend systems. My MSc thesis was a framework for using AI agents across the software lifecycle without losing control of what ships." It runs to 2 lines at 1280 and 1440 in EN and PT (measured from line boxes) and 3 lines at 1024. |

**Counts:**
- 2 families plus mono in its allowed roles;
- 7 type sizes, plus the wordmark;
- 2 radius values, plus round dots;
- spacing from the scale only;
- 2 button styles;
- uppercase at most 10 per page (home 6, Apex 10, others 0);
- accent at most 2 per viewport;
- 0 AA contrast failures.

**Kept unchanged** (diffed against `main`):
- hero glow gradient: identical;
- `.dot-grid` CSS and its uses on the hero and the Apex header: identical;
- `Wordmark.astro` and `favicon.svg`: no diff.

## Notes and judgement calls

- **Hero sub-line length.** To fit the sentence in 2 lines beside a 420px graph, it is set at the 17px body size on desktop (20px below 960px). The PT line was shortened to fit: "Desenvolvo sistemas de backend. A minha tese foi uma framework para usar agentes de IA em todo o ciclo de vida do software sem perder o controlo."
- **Uppercase.** Section labels are the only uppercase. Apex had 11 sections, so the "Related notes" heading is now a plain heading to keep the page at 10.
- **Home Experience.** Read as one line per role (role · company · dates) for all four roles, including Wondercom as you asked earlier. The brief said "3-line list"; I kept all four rather than drop one.
- **Section-page dot grids** (on `/work`, `/journey` and `/notebook`, which you asked for earlier) are unchanged. The brief only mentions the hero and the Apex header.
- **Humanizer.** The skill install (`npx skills add blader/humanizer`) was blocked by the session's permission classifier, so the copy pass applied its rules by hand. PT strings were rewritten in European Portuguese, not translated word by word.
- **Critique.** The before-critique was a single-context run. Impeccable asks for two isolated assessments; see the banner in `critique-before.md`.
- **Not changed.** The formal dissertation abstract and the thesis statement on the Apex page are quoted from the dissertation, so their wording (including one "rather than") stays as published.
