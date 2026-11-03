import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const l10n = z.object({ en: z.string(), pt: z.string() });
const localized = z.union([z.string(), l10n]);

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: localized,
      summary: localized,
      stack: z.array(z.string()).default([]),
      status: localized.optional(),
      year: z.number().int().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(100),
      links: z
        .object({
          page: z.string().optional(),
          repo: z.url().optional(),
          demo: z.url().optional(),
          docs: z.string().optional(),
        })
        .default({}),
      internal: z.boolean().default(false),
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

export const collections = { work };
