/* Professional and community experience, newest first. Home shows every non-community entry. */
import type { Kind, L10n } from './types';
import type { LogoKey } from '@/lib/logos';

export interface Experience {
  id: string;
  kind: Kind;
  /** ISO start (yyyy-mm) used for ordering on /journey. */
  start: string;
  period: L10n;
  role: L10n;
  org: L10n;
  summary?: L10n;
  stack?: string[];
  /** Slug of a Notebook post → adds "Read the notes →". */
  notesSlug?: string;
  logo?: LogoKey;
  monogram?: string;
}

export const experience: Experience[] = [
  {
    id: 'exp-tecnico-plus-2',
    logo: 'tecnico',
    kind: 'teaching',
    start: '2026-10',
    period: { en: 'Oct 2026 – Nov 2026', pt: 'out. 2026 – nov. 2026' },
    role: { en: 'Teaching Assistant, AI Agents Bootcamp (second edition)', pt: 'Assistente de Ensino, Bootcamp de Agentes de IA (segunda edição)' },
    org: { en: 'Técnico+ Formação Avançada (IST), Lisbon', pt: 'Técnico+ Formação Avançada (IST), Lisboa' },
  },
  {
    id: 'exp-caixa-magica',
    logo: 'caixa-magica',
    kind: 'work',
    start: '2026-07',
    period: { en: 'Jul 2026 – Sep 2026', pt: 'jul. 2026 – set. 2026' },
    role: { en: 'Software Engineer Intern, Development team', pt: 'Estagiário de Engenharia de Software, equipa de Desenvolvimento' },
    org: { en: 'Caixa Mágica Software, Lisbon', pt: 'Caixa Mágica Software, Lisboa' },
    summary: {
      en: "Built Gescol, the company's internal absence-management tool (Node.js, PostgreSQL, Next.js).",
      pt: 'Desenvolvi o Gescol, a ferramenta interna de gestão de ausências da empresa (Node.js, PostgreSQL, Next.js).',
    },
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Next.js 15', 'Material UI', 'Tailwind CSS', 'React Query'],
  },
  {
    id: 'exp-tecnico-plus',
    logo: 'tecnico',
    kind: 'teaching',
    start: '2026-05',
    period: { en: 'May 2026 – Jun 2026', pt: 'mai. 2026 – jun. 2026' },
    role: { en: 'Teaching Assistant, AI Agents Bootcamp', pt: 'Assistente de Ensino, Bootcamp de Agentes de IA' },
    org: { en: 'Técnico+ Formação Avançada (IST), Lisbon', pt: 'Técnico+ Formação Avançada (IST), Lisboa' },
    summary: {
      en: "Set up the bootcamp's notebooks in Google Colab Enterprise and taught executives to build and coordinate AI agents with LangChain and Azure.",
      pt: 'Preparei os notebooks do bootcamp no Google Colab Enterprise e ensinei executivos a construir e coordenar agentes de IA com LangChain e Azure.',
    },
    stack: ['LangChain', 'Azure', 'Microsoft Foundry', 'Google Colab Enterprise'],
  },
  {
    id: 'exp-wondercom',
    logo: 'wondercom',
    kind: 'work',
    start: '2024-08',
    period: { en: 'Aug 2024 – Feb 2025', pt: 'ago. 2024 – fev. 2025' },
    role: { en: 'Technical Support', pt: 'Apoio Técnico' },
    org: { en: 'Wondercom, Lisbon / Sintra', pt: 'Wondercom, Lisboa / Sintra' },
    summary: {
      en: "Gave remote technical support for Vodafone's fixed internet, TV and phone services.",
      pt: 'Dei apoio técnico remoto aos serviços fixos da Vodafone: internet, televisão e telefone.',
    },
  },
  {
    id: 'exp-neeti',
    monogram: 'NEETI',
    kind: 'community',
    start: '2023-01',
    period: { en: '2023 – 2025', pt: '2023 – 2025' },
    role: { en: 'Events coordinator', pt: 'Coordenador de eventos' },
    org: {
      en: 'NEETI, the Telecommunications and Informatics Engineering student group at IST',
      pt: 'NEETI, o núcleo de estudantes de Engenharia de Telecomunicações e Informática do IST',
    },
    summary: {
      en: 'Planned and ran events for the student group.',
      pt: 'Planeei e organizei eventos para o núcleo de estudantes.',
    },
  },
  {
    id: 'exp-mentoring',
    logo: 'tecnico',
    kind: 'community',
    start: '2022-09',
    period: { en: '2022 – 2025', pt: '2022 – 2025' },
    role: { en: 'First-year mentor', pt: 'Mentor do primeiro ano' },
    org: { en: 'IST Mentoring Programme', pt: 'Programa de Mentorado do IST' },
    summary: {
      en: 'Mentored incoming first-year students.',
      pt: 'Acompanhei estudantes do primeiro ano.',
    },
  },
];
