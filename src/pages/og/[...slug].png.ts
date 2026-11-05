/* One OG card per page. Paths mirror the page URLs (see ogPathFor). */
import type { APIRoute, GetStaticPaths } from 'astro';
import { renderOg, type OgCard } from '@/lib/og';
import { useTranslations, locales, type Locale } from '@/i18n';
import { localePath } from '@/i18n/routes';
import { getPosts, slugOf, tagCounts, seriesLabel } from '@/lib/notebook';
import * as apex from '@/data/apex';

const strip = (p: string) => p.replace(/^\/+|\/+$/g, '');

export const getStaticPaths = (async () => {
  const out: { params: { slug: string }; props: OgCard }[] = [];
  const add = (path: string, card: OgCard) => out.push({ params: { slug: strip(path) || 'index' }, props: card });
  for (const lang of locales as readonly Locale[]) {
    const t = useTranslations(lang);
    add(lang === 'en' ? 'index' : 'pt/index', { kicker: t('hero.kicker'), title: 'Tomás Taborda', description: t('hero.positioning') });
    add(localePath('journey', lang), { kicker: `${t('nav.journey')}`, title: t('journey.title'), description: t('journey.intro') });
    add(localePath('work', lang), { kicker: `${t('nav.work')}`, title: t('work.pageTitle'), description: t('work.intro') });
    add(localePath('work', lang, 'apex'), { kicker: lang === 'pt' ? 'Tese de mestrado, 17/20' : 'MSc thesis, 17/20', title: 'Apex', description: apex.oneLiner[lang] });
    add(localePath('work', lang, 'apex', 'ledger'), { kicker: lang === 'pt' ? 'Histórico git' : 'Git history', title: lang === 'pt' ? 'Diário do Apex e da tese' : 'Apex and thesis ledger', description: lang === 'pt' ? 'O histórico git da aplicação Apex e da dissertação, do primeiro commit à defesa.' : 'The git history of the Apex app and the MSc dissertation, from first commit to defence.' });
    add(localePath('notebook', lang), { kicker: `${t('notebook.title')}`, title: t('notebook.pageTitle'), description: t('notebook.intro') });
    add(localePath('contact', lang), { kicker: `${t('nav.contact')}`, title: t('contact.title'), description: t('contact.lead') });
    const posts = await getPosts(lang);
    for (const p of posts) add(localePath('notebook', lang, slugOf(p)), { kicker: `${t('notebook.title')}${p.data.tags[0] ? `, #${p.data.tags[0]}` : ''}`, title: p.data.title, description: p.data.description });
    for (const { tag } of tagCounts(posts)) add(localePath('notebook', lang, 'tags', tag), { kicker: `${t('notebook.title')}, ${t('notebook.tagged')}`, title: `#${tag}`, description: t('notebook.intro') });
    for (const s of new Set(posts.flatMap((p) => (p.data.series ? [p.data.series] : []))))
      add(localePath('notebook', lang, 'series', s), { kicker: `${t('notebook.series')}`, title: seriesLabel(s), description: t('notebook.intro') });
  }
  add('404', { kicker: '404', title: useTranslations('en')('404.title') });
  return out;
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) =>
  new Response(new Uint8Array(await renderOg(props as OgCard)), { headers: { 'Content-Type': 'image/png' } });
