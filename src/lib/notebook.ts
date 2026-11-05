/* Notebook helpers: one place for draft filtering, slugs, reading time, series and translations. */
import { getCollection, type CollectionEntry } from 'astro:content';
import { formatDate, type Locale } from '@/i18n';
import { localePath } from '@/i18n/routes';

export type Post = CollectionEntry<'notebook'>;

/** Drafts render in `astro dev` only. Production builds, feeds and the sitemap never see them. */
export const showDrafts = import.meta.env.DEV;

const WPM = 220;

/** `en/my-post` → `my-post` */
export const slugOf = (p: Post) => p.id.replace(/^(en|pt)\//, '');

export const postHref = (p: Post) => localePath('notebook', p.data.lang, slugOf(p)) + '/';
export const tagHref = (tag: string, lang: Locale) => localePath('notebook', lang, 'tags', tag) + '/';
export const seriesHref = (series: string, lang: Locale) => localePath('notebook', lang, 'series', series) + '/';
export const indexHref = (lang: Locale) => localePath('notebook', lang) + '/';

/** All visible posts, newest first. Pass a lang to filter. */
export async function getPosts(lang?: Locale): Promise<Post[]> {
  const all = await getCollection('notebook', (p) => (showDrafts || !p.data.draft) && (!lang || p.data.lang === lang));
  // Same-date posts sort on the shared translation key, so EN and PT list them in the same order.
  return all.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
    || (a.data.translationKey ?? a.id).localeCompare(b.data.translationKey ?? b.id));
}

/** Reading time in minutes from the raw MDX body (code, imports and JSX tags stripped). */
export function readingMinutes(body = ''): number {
  const text = body
    .replace(/^import .*$/gm, '')
    .replace(/```[\s\S]*?```/g, (m) => m.replace(/[^\s]+/g, 'w')) // code still takes time to read
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_`\[\]()|-]/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WPM));
}

/** Tags with counts, most used first, then alphabetical. */
export function tagCounts(posts: Post[]): { tag: string; count: number }[] {
  const m = new Map<string, number>();
  for (const p of posts) for (const t of p.data.tags) m.set(t, (m.get(t) ?? 0) + 1);
  return [...m].map(([tag, count]) => ({ tag, count })).sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

/** Parts of a series in order. */
export async function seriesParts(series: string, lang: Locale): Promise<Post[]> {
  const posts = await getPosts(lang);
  return posts.filter((p) => p.data.series === series).sort((a, b) => (a.data.seriesOrder ?? 0) - (b.data.seriesOrder ?? 0));
}

/** Human label for a series slug: `apex-notes` → `Apex notes`. */
export const seriesLabel = (slug: string) => slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');

/** The same entry in the other language, if one exists and is visible. */
export async function translationOf(p: Post): Promise<Post | undefined> {
  if (!p.data.translationKey) return undefined;
  const other: Locale = p.data.lang === 'en' ? 'pt' : 'en';
  return (await getPosts(other)).find((o) => o.data.translationKey === p.data.translationKey);
}

/** Posts grouped by year, newest year first. */
export function byYear(posts: Post[]): [number, Post[]][] {
  const m = new Map<number, Post[]>();
  for (const p of posts) {
    const y = p.data.pubDate.getUTCFullYear();
    m.set(y, [...(m.get(y) ?? []), p]);
  }
  return [...m].sort((a, b) => b[0] - a[0]);
}

/** Props for <PostCard>. */
export function cardProps(p: Post, t: (k: 'post.minRead' | 'post.draft' | 'notebook.pinned') => string) {
  const lang = p.data.lang;
  return {
    href: postHref(p),
    title: p.data.title,
    description: p.data.description,
    date: formatDate(p.data.pubDate, lang),
    datetime: p.data.pubDate.toISOString().slice(0, 10),
    readingTime: `${readingMinutes(p.body)} ${t('post.minRead')}`,
    tags: p.data.tags.map((tag) => ({ label: tag, href: tagHref(tag, lang) })),
    draft: p.data.draft,
    draftLabel: t('post.draft'),
    pinnedLabel: t('notebook.pinned'),
  };
}
