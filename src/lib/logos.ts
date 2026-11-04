/* Organisation marks for experience and education entries. Files come from each
   organisation's own site icon; an entry without one falls back to a monogram tile. */
import type { ImageMetadata } from 'astro';
import caixaMagica from '@/assets/logos/caixa-magica.png';
import wondercom from '@/assets/logos/wondercom.png';
import tecnico from '@/assets/logos/tecnico.png';

export type LogoKey = 'caixa-magica' | 'wondercom' | 'tecnico';

export const logos: Record<LogoKey, ImageMetadata> = {
  'caixa-magica': caixaMagica,
  wondercom,
  tecnico,
};
