# tomastaborda.com

Source for [tomastaborda.com](https://tomastaborda.com): a bilingual (EN at `/`, PT at `/pt/`) engineering-notebook portfolio built with Astro, TypeScript and MDX, deployed to GitHub Pages.

## Local development

Requires Node 24 (`.nvmrc`).

```sh
nvm use            # Node 24
npm install
npm run dev        # http://localhost:4321, drafts visible, /styleguide/ available
npm run build      # astro check + production build into dist/
npm run preview    # serve dist/ on http://localhost:4321
```

Pushing to `main` runs `.github/workflows/deploy.yml` (withastro/action, then actions/deploy-pages). In the repository settings, Pages must be set to **Source: GitHub Actions**. The custom domain comes from `public/CNAME`.

### Where things live

| What | Where |
| --- | --- |
| Page routes (EN / PT) | `src/pages/`, `src/pages/pt/` (thin wrappers around `src/views/`) |
| UI strings | `src/i18n/en.json`, `src/i18n/pt.json` |
| Profile, journey, skills, links | `src/data/*.ts` |
| Projects | `src/content/work/*.md` |
| Notebook posts | `src/content/notebook/{en,pt}/*.mdx` |
| Apex case study content | `src/data/apex.ts`, `src/data/apex-history.ts` |
| Images (optimised at build) | `src/assets/` |
| Files served as-is (PDFs, CV) | `public/` |
| Open Graph cards | `src/lib/og.ts`, generated at `/og/*.png` |

## Writing a post

See [`docs/writing-a-post.md`](docs/writing-a-post.md) for the full guide, and start from [`docs/post-template.mdx`](docs/post-template.mdx).

Summary: add `src/content/notebook/en/<slug>.mdx` (or `pt/`), fill in the frontmatter (`title`, `description` up to 160 characters, `pubDate`, `lang`), and push. `draft: true` keeps it out of the production build. Each post gets an RSS entry (`/rss.xml`, `/pt/rss.xml`), an OG card, tag and series pages, and comments.

`docs/post-template.mdx` shows every feature (callouts, figures, footnotes).

## Adding a project

Create `src/content/work/<slug>.md`:

```yaml
---
title: { en: "Project name", pt: "Nome do projeto" }
summary: { en: "One line.", pt: "Uma linha." }
stack: [TypeScript, PostgreSQL]
status: { en: "Shipped", pt: "Concluído" }   # optional
year: 2026                                    # optional, groups the archive
featured: false                               # true puts it on the home page
order: 100                                    # lower comes first
links:
  repo: https://github.com/thomastabs/…       # optional
  demo: https://…                             # optional
  docs: /docs/report.pdf                      # optional, file in public/docs/
  page: apex                                  # optional, an internal case-study route
cover: ../../assets/projects/<image>.png      # optional, needs coverAlt
coverAlt: "What the image shows"
---
```

The body is not rendered. Cards show the title, summary, stack and links. A full case study (like Apex) needs its own view and route under `src/pages/work/` and `src/pages/pt/trabalho/`.

## Filling the Apex links register

The "Links register" on `/work/apex/` comes from `register` in `src/data/apex.ts`. Each entry has a `group` (`read`, `use`, `explore`), a bilingual `label`, and an `href`.

- An entry with `href: null` is a TODO and is hidden on the page (the `todo` field says what is missing). Set the URL to publish it.
- `primary: true` gives the button the filled style. `extra` adds secondary buttons on the same row.
- Local files go in `public/docs/` and are linked as `/docs/<file>`.

Open item: **IST repository record**. Add the Fénix link when it is published.

## Comments (giscus)

Comments use [giscus](https://giscus.app) and GitHub Discussions on this repository. Config is in `src/data/giscus.ts`.

1. Enable Discussions in the repository settings, and install the [giscus app](https://github.com/apps/giscus) on the repository.
2. On giscus.app, enter `thomastabs/thomastabs.github.io`, choose mapping **pathname** and the **Announcements** category.
3. Copy `data-repo-id` and `data-category-id` from the generated script into `repoId` and `categoryId`.

While either value starts with `TODO`, posts show a placeholder instead of the comment box. The widget loads lazily when the reader reaches it and follows the site theme. Set `comments: false` in a post's frontmatter to turn it off for that post.

## Contact form (Web3Forms)

The home page form sends through [Web3Forms](https://web3forms.com). Config is in `src/data/contact.ts`.

1. Create a form on web3forms.com with the email that should receive messages.
2. Paste the access key into `accessKey`. The key is public by design: it only lets someone send to that inbox.
3. In the Web3Forms dashboard, restrict the form to the `tomastaborda.com` domain. Add `localhost` too if you want to test locally.

Without a key, the form falls back to opening the reader's mail client (`mailto:`). A hidden honeypot field (`botcheck`) filters basic spam.
