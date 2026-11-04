# Removed in the de-slop pass

## Visual effects
- Taped photo: tape strips, the −1.2° tilt, the paper mat, the tape shadow and the red hover outline. The portrait is now a plain image with a 1px `--rule` border and the 4px radius.
- Red full stop after "Tomás Taborda" in the hero and after "Apex" on the case study.
- The pulsing status dot before "Joining OpenSoft".
- Fade-and-rise on scroll (`data-reveal` and its IntersectionObserver in `enhance.ts`) on timeline entries, project cards, post cards and Apex blocks.
- The /contact entrance animation (photo zoom and staggered rise).
- Card lift on hover (`transform` transition on project cards). Card hover is now a border colour change only.
- Shadows: the tape shadow, the contact form drop shadow, the archive thumbnail shadow, the status-dot glow ring and the form-field focus underline shadow. There are no box-shadows left.
- The archive row hover thumbnail (tilted, shadowed preview that followed the row).
- The translucent blurred header (now solid `--bg`) and the blur on the contact "Or email me" card.
- The 404 torn-page sheet: torn edge, ruled lines, margin line and tilt.
- Lined-paper background in the contact form textarea.
- The rotated red "Draft" stamp on draft posts.
- Emoji and glyphs used as icons: ✎ before "Comments", the ✎ ◆ ☐ glyphs on callouts, ✓ on the sent form.

## Typography
- Mono used for UI: nav links, buttons, chips, kickers, meta lines, the footer, archive table headers, spec-block keys, form labels, the TOC, callout labels, the language switch and the skip link. Mono now appears only on code, timeline dates and spec values.
- All uppercase except the section label: nav, buttons, dates, status line, chips, table headers, spec keys, form labels, callout labels, code-block language tags, copy buttons, the reading time and the 404 kicker.
- All letter-spacing except the section label (0.06em): display tracking (−0.028em, −0.015em, −0.01em), mono tracking, 0.08em and 0.14em labels, OG kicker tracking.
- Heading weights 540, 560 and 600 (headings are 500).
- Type sizes outside the ramp: 0.7rem, 0.72rem, 0.75rem, 0.84rem, 0.9rem, 0.95rem, 0.96em, 10.5px and others. The ramp is 14 / 16 / 17 / 20 / 28 / 40 / 56.

## System
- Radii 1px, 2px, 3px, 6px (`--radius-sm` usages), 10px (logo tiles), `calc(var(--radius) - 2px)` and 999px. Rectangles use 4px; pills use 9999px.
- Ad-hoc spacing (0.15rem, 0.2rem, 0.35rem, 0.55rem, 0.6em, 0.7rem, 0.75rem, 0.85rem, 0.9rem, 1.15em, 2.2em and clamp() page paddings). Spacing now comes from the 4 / 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128 scale.
- The outlined third button style (`.btn--ghost`) and the bordered secondary. There is one filled primary and one text-link secondary.
- Folder-tab filters on Journey, Notebook and the Apex timeline. All three now use the same pill.
- Unused tokens: `--squiggle`, `--tape`, `--shadow-tape` and the five `--tag-*` colours.
- Components deleted: `MarginNote.astro`, `DimensionLine.astro`.

## Colour
- Accent on section numbers, figure captions, the status dot, graph edges, graph rings, the kicker in the hero, the "a." / "b." markers on /work, the year headings on /notebook, the series "Part n of m" line, numbered lists on Apex, the heatmap, the commit-type bars, phase-strip gates and loops, the commit-graph milestones, the current TOC item, inline footnote markers, copy-button "Copied" state, form focus, callout glyphs and the "+" on disclosure summaries.
- The colour-coded kind system (blue work, green teaching, amber community, grey study) on graph nodes, timeline dots, chips, filter dots and the Apex "design" tag.
- Hard-coded colours outside `tokens.css`: `#fff` and `#16181d` on logo tiles, `#fff` behind light diagrams, `#3b6fd8` on repo tiles, and the hero's `#000` button mix. These are now tokens (`--tile-bg`, `--tile-ink`, `--on-fill`, `--pen-fill`). The hero glow's two violets stay, as the brief asks.

## Notebook motifs
- `§NN —` prefixes and `· meta` suffixes on every section label (home, contact, Apex, OG images, 404).
- Slogan headings under each label (see copy-changes.md).
- `fig. NN —` captions everywhere (captions are now plain text, and the home portrait has none).
- Margin notes on the Apex header, problem facts and Outfolio.
- The hand-drawn circle around the current nav item (now a 2px underline) and the squiggle underline on links (now a plain underline that turns `--pen` on hover).
- The "p. 01" mark and dashed border on the empty notebook state.
- Dashed borders on the series box, export tiles and project-card heads.
- Side-stripe borders: callouts (3px left), the thesis quote, the prose blockquote and the Apex findings.

## Layout and content
- Home Experience timeline (summaries, chips, logos) → a list of role · company · dates linking to /journey.
- Kind chips (`• work`, `• teaching`) on every timeline entry, and tech chips on the timeline.
- Graph legend.
- Status badges on project cards ("Defended · 17/20", "Live demo", "Complete", "Internal") and the Public / Private pill on repo tiles.
- Home project cards show at most four tech chips.
- Skills: "Writing: LaTeX · Markdown" and "LLM-assisted development workflows"; Frontend merged into one line.
- Hero CV button (CV is in the nav and the contact section).
- Footer links and the "hosted on GitHub Pages" stamp.
- Contact section meta "2026 → next" and the second filled button (Copy email is now a text-link secondary).
- The duplicate "It goes straight to my inbox" in the contact lead (the form note keeps it).
- The visible TODO callout for comments.
