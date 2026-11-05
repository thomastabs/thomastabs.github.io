/* One RSS feed per language, full rendered content, drafts always excluded. */
import rss from '@astrojs/rss';
import { render } from 'astro:content';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { loadRenderers } from 'astro:container';
import { getContainerRenderer as mdxRenderer } from '@astrojs/mdx/container-renderer';
import Callout from '@/components/Callout.astro';
import Figure from '@/components/Figure.astro';
import { useTranslations, type Locale } from '@/i18n';
import { getPosts, postHref, indexHref } from './notebook';

export async function feed(lang: Locale, site: URL) {
  const t = useTranslations(lang);
  const container = await AstroContainer.create({ renderers: await loadRenderers([mdxRenderer()]) });
  const posts = (await getPosts(lang)).filter((p) => !p.data.draft);
  const abs = (html: string) =>
    html
      .replace(/(src|href)="\/(?!\/)/g, `$1="${site.origin}/`)
      .replace(/srcset="([^"]*)"/g, (_, v: string) => `srcset="${v.replace(/(^|,\s*)\/(?!\/)/g, `$1${site.origin}/`)}"`);

  const items = await Promise.all(
    posts.map(async (p) => {
      const { Content } = await render(p);
      const html = await container.renderToString(Content, {
        props: { components: { Callout, Figure } },
        request: new Request(new URL(postHref(p), site)),
      });
      return {
        title: p.data.title,
        description: p.data.description,
        pubDate: p.data.pubDate,
        link: postHref(p),
        categories: p.data.tags,
        content: abs(html.replace(/<style[\s\S]*?<\/style>|<script[\s\S]*?<\/script>/g, '')),
      };
    }),
  );

  return rss({
    title: `${t('notebook.title')} | ${t('site.name')}`,
    description: t('notebook.description'),
    site: new URL(indexHref(lang), site),
    items,
    customData: `<language>${lang === 'pt' ? 'pt-PT' : 'en'}</language>`,
  });
}
