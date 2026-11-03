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

/* Notebook posts: src/content/notebook/{en,pt}/<slug>.mdx */
const kebab = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const notebook = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notebook' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string().min(1),
        description: z.string().min(1).max(160),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        tags: z.array(z.string().regex(kebab, 'tags must be lowercase kebab-case')).default([]),
        series: z.string().regex(kebab, 'series must be a kebab-case slug').optional(),
        seriesOrder: z.number().int().positive().optional(),
        draft: z.boolean().default(false),
        lang: z.enum(['en', 'pt']),
        translationKey: z.string().optional(),
        cover: image().optional(),
        coverAlt: z.string().optional(),
        comments: z.boolean().default(true),
        /** Show as the pinned page at the top of the index. */
        pinned: z.boolean().default(false),
      })
      .refine((d) => !d.series || d.seriesOrder !== undefined, {
        message: 'seriesOrder is required when series is set',
        path: ['seriesOrder'],
      })
      .refine((d) => !d.cover || !!d.coverAlt, {
        message: 'coverAlt is required when cover is set',
        path: ['coverAlt'],
      }),
});

export const collections = { work, notebook };
