# Inspiration teardown

Reference: [beatriz-santos-website.vercel.app](https://beatriz-santos-website.vercel.app/), re-checked on **3 Nov 2026** with headless Chrome (1440 px, home + `/blog`). No text, images, code or assets were copied from it. This file records what I saw so the redesign borrows the feel and nothing else.

## Re-check of the brief's observations

| Area | Brief said | Live check |
| --- | --- | --- |
| Stack | React SPA, client-rendered | **Confirmed.** The served HTML is an empty shell (title only). Nothing renders without JS. |
| Palette | Dark plum, rose primary, lavender accent | Confirmed. Dark only, no theme toggle. |
| Type | Playfair Display + a geometric sans + mono kickers | Confirmed. The body sans is **DM Sans**. Mono is the system `ui-monospace` stack, not a webfont. |
| Hero | Kicker, "Hi, I'm" + name in rose, tagline, one blog button, 3D globe with pin legend | Confirmed. The legend sits bottom-right, apart from the globe. There's also a "SCROLL" cue under the hero. |
| Dividers | Dashed flight-path arcs with airport codes, distance, duration, plane | Confirmed. The arcs run edge to edge, with codes at both viewport edges and the label centred. |
| Sections | About · Experience · Projects · Skills · Education · Certifications · Events · Volunteering · Contact | Confirmed (contact heading reads "Let's Connect"). |
| Experience | Vertical timeline, story links | Confirmed. The timeline axis starts with a plane glyph. |
| Blog index | Featured post, category pills with counts, "Latest Stories" grid | Confirmed. Pills are styled `ALL · 13`. The featured card reuses the globe as its backdrop. |

## What the brief missed

1. **Content is hidden until scrolled.** Sections start at opacity 0 and only appear after scroll-reveal fires. A full-page capture taken without scrolling shows empty sections, so crawlers, print and no-JS readers see almost nothing.
   → *Ours:* the reveal applies only under `html.js` with `IntersectionObserver`, is off under reduced motion and in print, and every page is static HTML.
2. **Three `<h1>`s on Home** ("Hi, I'm", the name, and both together).
   → *Ours:* one `h1` per page.
3. **The chrome changes from page to page.** Home has an 8-anchor top nav. The blog replaces it with a back-arrow and a "• Blog" crumb, so the site doesn't read as one place.
   → *Ours:* the same header (Work · Journey · Notebook · Contact · EN|PT · theme) on every page.
4. **Skills** is a category tab row over one chip cloud, with a big decorative `</>` glyph.
   → *Ours:* a ruled spec block grouped by Languages / Backend / Frontend / Cloud & DevOps / AI / Writing. No tabs, no glyph.
5. **Footers are one-line taglines** (with emoji on Home; a story count on the blog).
   → *Ours:* the revision stamp `rev. <build date> · built with Astro · hosted on GitHub Pages` plus contact links.
6. **No language or theme options**, and it's English only.
   → *Ours:* EN/PT routes and light/dark themes.

## Differentiation decisions taken while building

- **Hero greeting dropped.** An early draft opened with "Hi, I'm" before the name. That is the reference's exact hero line, so it was removed. The hero now reads: kicker → name → positioning line.
- **Journey graph, not globe:** a flat 2D inline SVG on a dot grid, drawn in pen strokes, with a DAG topology (one branch for community work, a dotted trace edge from the MSc to the thesis). Its legend sits under the graph rather than in a viewport corner.
- **Dimension lines, not arcs:** straight lines inside the content width with end ticks, § numbers at the ends and a mono date range in the middle. No icons.
- **Blog tags** will be styled as notebook index tabs, not pill counters like `ALL · 13` (step 5).
- **Pinned page, not featured hero card:** text-led, with a pin glyph. No image backdrop.
- **The rose/lavender pair is replaced** by one red pen (`#ff004f`, or `#d6003f` on paper) and muted tag inks.
