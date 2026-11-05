// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';

/* GFM footnotes are labelled in English. Portuguese posts (src/content/notebook/pt/…)
   get a Portuguese heading and back-link labels. Sätteri hast plugin, per file. */
const footnotesPt = {
  name: 'footnotes-pt',
  element: [
    {
      filter: ['h2'],
      /** @param {any} node @param {any} ctx */
      visit(node, ctx) {
        if (node.properties?.id !== 'footnote-label') return;
        ctx.replaceNode(node, { ...node, children: [{ type: 'text', value: 'Notas' }] });
      },
    },
    {
      filter: ['a'],
      /** @param {any} node @param {any} ctx */
      visit(node, ctx) {
        const label = node.properties?.ariaLabel;
        if (typeof label === 'string' && label.startsWith('Back to'))
          ctx.setProperty(node, 'ariaLabel', label.replace('Back to reference', 'Voltar à referência').replace('Back to content', 'Voltar ao texto'));
      },
    },
  ],
};
/** @param {{ fileURL?: URL }} ctx */
const footnotesPtFor = (ctx) => (/\/notebook\/pt\//.test(ctx.fileURL?.pathname ?? '') ? footnotesPt : null);

export default defineConfig({
  site: 'https://tomastaborda.com',
  trailingSlash: 'ignore',
  redirects: {
    '/notebook/de-slopping-my-portfolio': '/notebook/ai-assisted-development-on-my-portfolio/',
    '/pt/caderno/limpar-o-design-do-portfolio': '/pt/caderno/desenvolvimento-assistido-por-ia-no-portfolio/',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/styleguide') && !page.includes('de-slopping') && !page.includes('limpar-o-design'),
      i18n: { defaultLocale: 'en', locales: { en: 'en', pt: 'pt-PT' } },
    }),
  ],
  markdown: {
    processor: satteri({ hastPlugins: [footnotesPtFor] }),
    shikiConfig: {
      themes: { light: 'github-light-high-contrast', dark: 'github-dark-dimmed' },
      defaultColor: false,
      wrap: false,
    },
  },
});
