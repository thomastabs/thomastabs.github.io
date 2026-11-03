import type { Locale } from './index';

/* First path segment per locale. Anything deeper (slugs, tags) is mirrored as-is. */
const segments: Record<string, Record<Locale, string>> = {
  journey: { en: 'journey', pt: 'percurso' },
  work: { en: 'work', pt: 'trabalho' },
  notebook: { en: 'notebook', pt: 'caderno' },
};

export type RouteKey = keyof typeof segments | 'home';

/** Build a localised path: localePath('work', 'pt', 'apex') → /pt/trabalho/apex */
export function localePath(key: RouteKey, lang: Locale, ...rest: string[]): string {
  const prefix = lang === 'en' ? '' : `/${lang}`;
  if (key === 'home') return `${prefix}/` + (rest.length ? rest.join('/') : '');
  const tail = rest.filter(Boolean).join('/');
  return `${prefix}/${segments[key][lang]}${tail ? `/${tail}` : ''}`;
}

/** Map a pathname to its equivalent in the other locale. */
export function translatePath(pathname: string, to: Locale): string {
  const parts = pathname.replace(/\/+$/, '').split('/').filter(Boolean);
  if (parts[0] === 'pt') parts.shift();
  const [first, ...rest] = parts;
  const key = Object.keys(segments).find((k) =>
    Object.values(segments[k]).includes(first ?? ''),
  );
  if (!first) return localePath('home', to);
  if (!key) return (to === 'en' ? '' : `/${to}`) + `/${parts.join('/')}`;
  return localePath(key as RouteKey, to, ...rest);
}
