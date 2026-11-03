// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tomastaborda.com',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/styleguide'),
      i18n: { defaultLocale: 'en', locales: { en: 'en', pt: 'pt-PT' } },
    }),
  ],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
      defaultColor: false,
      wrap: false,
    },
  },
});
