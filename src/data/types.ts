import type { Locale } from '@/i18n';

export type L10n = Record<Locale, string>;
export type Kind = 'work' | 'study' | 'teaching' | 'community' | 'milestone';

/** Resolve a plain string or an { en, pt } pair. */
export const loc = (v: string | L10n, lang: Locale) => (typeof v === 'string' ? v : v[lang]);
