import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '@/i18n';
import { localePath } from '@/i18n/routes';
import { useTranslations } from '@/i18n';
import { loc } from '@/data/types';

export type WorkEntry = CollectionEntry<'work'>;

export async function getWork() {
  const all = await getCollection('work');
  const sorted = all.sort((a, b) => a.data.order - b.data.order);
  return {
    featured: sorted.filter((e) => e.data.featured),
    archive: sorted.filter((e) => !e.data.featured).sort((a, b) => (b.data.year ?? 0) - (a.data.year ?? 0) || a.data.order - b.data.order),
  };
}

/** Card props for <ProjectCard>, localised. */
export function cardProps(e: WorkEntry, lang: Locale) {
  const t = useTranslations(lang);
  const d = e.data;
  const links: { label: string; href: string }[] = [];
  if (d.links.page) links.push({ label: t('work.caseStudy'), href: localePath('work', lang, d.links.page) });
  if (d.links.demo) links.push({ label: t('work.demo'), href: d.links.demo });
  if (d.links.repo) links.push({ label: t('work.repo'), href: d.links.repo });
  return {
    title: loc(d.title, lang),
    summary: loc(d.summary, lang),
    year: d.year ? String(d.year) : undefined,
    status: d.status ? loc(d.status, lang) : undefined,
    stack: d.stack,
    href: d.links.page ? localePath('work', lang, d.links.page) : undefined,
    links,
    internalLabel: d.internal ? t('work.internalNoLink') : undefined,
    kicker: d.links.page === 'apex' ? t('work.thesisKicker') : t('work.kicker'),
    cover: d.cover,
    coverAlt: d.coverAlt,
    repo: d.links.repo,
    internal: d.internal,
  };
}
