# Writing a Notebook post

Publishing is one file: add an `.mdx` file, push to `main`, and the deploy does the rest (post page, tag pages, series page, RSS entry, sitemap, comments).

## 1. Create the file

| Language | Folder | URL |
| --- | --- | --- |
| English | `src/content/notebook/en/<slug>.mdx` | `/notebook/<slug>/` |
| Portuguese | `src/content/notebook/pt/<slug>.mdx` | `/pt/caderno/<slug>/` |

The file name is the slug. Use lowercase kebab-case (`why-i-anchor-ai-work-to-specs.mdx`).

## 2. Frontmatter

```yaml
---
title: "Why I anchor AI work to specs"       # required
description: "One sentence for cards and SEO" # required, 160 characters max
pubDate: 2026-11-10                          # required
updatedDate: 2026-11-20                      # optional
tags: [ai, software-engineering]             # optional, lowercase kebab-case
series: "apex-notes"                         # optional series slug
seriesOrder: 1                               # required when series is set
draft: false                                 # optional, default false
lang: en                                     # en | pt, must match the folder
translationKey: "why-specs"                  # optional, same value in the EN and PT files
cover: ./cover.png                           # optional, needs coverAlt
coverAlt: "What the image shows"
comments: true                               # optional, default true
pinned: false                                # optional, shows it as the pinned page on the index
---
```

The build fails with a clear message if a field is wrong: a description over 160 characters, a tag that is not kebab-case, a `series` without `seriesOrder`, or a `cover` without `coverAlt`.

## 3. Drafts

`draft: true` posts show up in `npm run dev` with a red **DRAFT** stamp. They are left out of `npm run build`, so they never reach production, the feeds, the sitemap or any listing. Flip the flag to `false` to publish.

The two sample posts (`en/sample-entry.mdx`, `pt/entrada-de-exemplo.mdx`) are drafts that show every feature. Copy one as a starting point, or delete them once real posts exist.

## 4. What you can use in the body

- **Headings.** `##` and `###` build the table of contents (right margin on wide screens, collapsible on mobile). Don't use `#`: the title is the page's only `h1`.
- **Code.** Fenced blocks with a language (` ```ts `) are highlighted by Shiki in both themes and get a copy button.
- **Footnotes.** `text[^1]` and, anywhere below, `[^1]: the note`. Portuguese posts get a Portuguese heading and back-link labels.
- **Callouts.** Available without importing:

  ```mdx
  <Callout type="note">Context the reader can skip.</Callout>
  <Callout type="decision" title="Short title">A choice and why it was made.</Callout>
  <Callout type="todo">TODO: work still open.</Callout>
  ```

- **Figures.** `Figure` is available without importing. Images need `Image` and the file:

  ```mdx
  import { Image } from 'astro:assets';
  import diagram from './diagram.png';

  <Figure n={1} caption="What the figure shows">
    <Image src={diagram} alt="Describe the image for screen readers" widths={[720, 1200]} sizes="(min-width: 900px) 68ch, 100vw" />
  </Figure>
  ```

  Keep images next to the post, or in `src/assets/` and import them with a relative path.

## 5. Translations

Give the EN and PT files the same `translationKey`. Each post then shows a "Read in Português / Read in English" link, and the header's `EN | PT` switch goes straight to the translation. Without a translation, the switch goes to the other language's Notebook index.

## 6. Series

Give each part the same `series` slug and a `seriesOrder` (1, 2, 3…). Each part shows a "Part 2 of 4" box listing all parts, and `/notebook/series/<slug>/` lists them in order. The series name is the slug in sentence case (`apex-notes` → "Apex notes").

## 7. Tags that do something

- `apex`: the post also appears under "Related notes" on the Apex case study.
- Any tag gets its own page at `/notebook/tags/<tag>/` and a tab on the index.

## 8. Check before pushing

```sh
npm run dev      # read it, drafts included
npm run build    # type check + production build; drafts excluded
npm run preview  # serve the production build
```
