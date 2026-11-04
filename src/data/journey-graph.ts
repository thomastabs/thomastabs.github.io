/* Nodes and edges of the hero journey graph. Coordinates live in a 640×460 viewBox.
   Text comes from the build prompt only. */
import type { Locale } from '@/i18n';

export type Kind = 'work' | 'study' | 'teaching' | 'community' | 'milestone';
type L10n = Record<Locale, string>;

export interface GraphNode {
  id: string;
  kind: Kind;
  x: number;
  y: number;
  label: L10n;
  role: L10n;
  years: L10n;
  /** Where the label sits relative to the node. */
  side: 'right' | 'left' | 'above' | 'below';
  /** Anchor on the page (Home / Journey entry id). */
  anchor: string;
  future?: boolean;
}

export const nodes: GraphNode[] = [
  {
    id: 'mem-martins', kind: 'study', x: 64, y: 392, side: 'right', anchor: 'edu-secondary',
    label: { en: 'Mem Martins', pt: 'Mem Martins' },
    role: { en: 'Secondary · Science & Technology', pt: 'Secundário · Ciências e Tecnologias' },
    years: { en: '2018 – 2021', pt: '2018 – 2021' },
  },
  {
    id: 'ist-bsc', kind: 'study', x: 178, y: 292, side: 'right', anchor: 'edu-bsc',
    label: { en: 'IST · BSc', pt: 'IST · Licenciatura' },
    role: { en: 'BSc Telecom. & Informatics Eng.', pt: 'Lic. Eng. Telecom. e Informática' },
    years: { en: '2021 – 2024', pt: '2021 – 2024' },
  },
  {
    id: 'community', kind: 'community', x: 92, y: 158, side: 'right', anchor: 'exp-neeti',
    label: { en: 'NEETI · Mentoring', pt: 'NEETI · Mentoria' },
    role: { en: 'Events coordinator · First-year mentor', pt: 'Coord. de eventos · Mentor do 1.º ano' },
    years: { en: '2022 – 2025', pt: '2022 – 2025' },
  },
  {
    id: 'ist-msc', kind: 'study', x: 300, y: 352, side: 'below', anchor: 'edu-msc',
    label: { en: 'IST · MSc', pt: 'IST · Mestrado' },
    role: { en: 'MSc Computer Science & Eng. (MEIC)', pt: 'Mestrado em Eng. Informática (MEIC)' },
    years: { en: '2024 – 2026', pt: '2024 – 2026' },
  },
  {
    id: 'wondercom', kind: 'work', x: 318, y: 206, side: 'above', anchor: 'exp-wondercom',
    label: { en: 'Wondercom', pt: 'Wondercom' },
    role: { en: 'Technical support · Vodafone', pt: 'Apoio técnico · Vodafone' },
    years: { en: 'Aug 2024 – Feb 2025', pt: 'ago. 2024 – fev. 2025' },
  },
  {
    id: 'tecnico-plus', kind: 'teaching', x: 440, y: 268, side: 'below', anchor: 'exp-tecnico-plus',
    label: { en: 'Técnico+', pt: 'Técnico+' },
    role: { en: 'TA · AI Agents Bootcamp', pt: 'Assistente · Bootcamp de Agentes de IA' },
    years: { en: 'May – Jun · Oct – Nov 2026', pt: 'mai. – jun. · out. – nov. 2026' },
  },
  {
    id: 'caixa-magica', kind: 'work', x: 470, y: 128, side: 'left', anchor: 'exp-caixa-magica',
    label: { en: 'Caixa Mágica', pt: 'Caixa Mágica' },
    role: { en: 'Software Engineer Intern', pt: 'Estagiário de Eng. de Software' },
    years: { en: 'Jul – Sep 2026', pt: 'jul. – set. 2026' },
  },
  {
    id: 'apex', kind: 'milestone', x: 572, y: 236, side: 'below', anchor: 'edu-msc',
    label: { en: 'Apex · thesis', pt: 'Apex · tese' },
    role: { en: 'MSc thesis defended · 17/20', pt: 'Tese defendida · 17/20' },
    years: { en: '23 Oct 2026', pt: '23 out. 2026' },
  },
  {
    id: 'next', kind: 'milestone', x: 596, y: 72, side: 'left', anchor: 'ms-opensoft', future: true,
    label: { en: 'OpenSoft', pt: 'OpenSoft' },
    role: { en: 'Starting 16 Nov 2026', pt: 'A partir de 16 nov. 2026' },
    years: { en: 'Nov 2026 →', pt: 'nov. 2026 →' },
  },
];

/** Edges: [from, to, bend]. bend offsets the control point (hand-drawn curvature). */
export const edges: [string, string, number][] = [
  ['mem-martins', 'ist-bsc', -14],
  ['ist-bsc', 'community', 18],
  ['ist-bsc', 'ist-msc', 16],
  ['ist-msc', 'wondercom', -20],
  ['wondercom', 'tecnico-plus', -14],
  ['tecnico-plus', 'caixa-magica', 18],
  ['caixa-magica', 'apex', -16],
  ['apex', 'next', 14],
];

/** Dotted "trace" edge: the thesis traces back to the MSc (echoes Apex's traceability graph). */
export const traces: [string, string, number][] = [['ist-msc', 'apex', 46]];
