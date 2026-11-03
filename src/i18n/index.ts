import en from './en.json';
import pt from './pt.json';

export const locales = ['en', 'pt'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export type UIKey = keyof typeof en;

/* `satisfies` makes `astro check` (and therefore `npm run build`) fail
   when pt.json is missing a key that exists in en.json. */
const dictionaries = { en, pt: pt satisfies Record<UIKey, string> } as const;

export function useTranslations(lang: Locale) {
  return function t(key: UIKey): string {
    return dictionaries[lang][key];
  };
}

export const htmlLang: Record<Locale, string> = { en: 'en', pt: 'pt-PT' };

export function getLangFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  return first === 'pt' ? 'pt' : 'en';
}

export function formatDate(date: Date, lang: Locale, opts: Intl.DateTimeFormatOptions = {}) {
  return new Intl.DateTimeFormat(htmlLang[lang], {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
    ...opts,
  }).format(date);
}
