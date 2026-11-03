/* Professional and community experience, newest first. Home shows the first three. */
import type { Kind, L10n } from './types';

export interface Experience {
  id: string;
  kind: Kind;
  /** ISO start (yyyy-mm) used for ordering on /journey. */
  start: string;
  period: L10n;
  role: L10n;
  org: L10n;
  summary: L10n;
  stack?: string[];
  /** Slug of a Notebook post → adds "Read the notes →". */
  notesSlug?: string;
}

export const experience: Experience[] = [
  {
    id: 'exp-opensoft',
    kind: 'work',
    start: '2026-11',
    period: { en: 'From 16 Nov 2026', pt: 'Desde 16 nov. 2026' },
    role: { en: 'Software Engineer', pt: 'Engenheiro de Software' },
    org: { en: 'OpenSoft', pt: 'OpenSoft' },
    summary: {
      en: 'Joining a software company certified under ISO 9001 and ISO 27001 and appraised at CMMI-DEV v3.0 maturity level 3, where traceability from requirements and architecture to user stories and code is part of everyday delivery: close to what my thesis studied.',
      pt: 'Entrada numa empresa de software certificada pelas normas ISO 9001 e ISO 27001 e avaliada em CMMI-DEV v3.0 (nível 3 de maturidade), onde a rastreabilidade entre requisitos, arquitetura, user stories e código faz parte do dia a dia: perto daquilo que a minha tese estudou.',
    },
  },
  {
    id: 'exp-caixa-magica',
    kind: 'work',
    start: '2026-07',
    period: { en: 'Jul 2026 – Sep 2026', pt: 'jul. 2026 – set. 2026' },
    role: { en: 'Software Engineer Intern, Development team', pt: 'Estagiário de Engenharia de Software, equipa de Desenvolvimento' },
    org: { en: 'Caixa Mágica Software · Lisbon', pt: 'Caixa Mágica Software · Lisboa' },
    summary: {
      en: 'Built Gescol, an internal HR module for employee vacations and absences: Node.js / Express / PostgreSQL backend and a Next.js 15 frontend. Responsive, internationalised UI with Material UI v6 and Tailwind CSS; data fetching and state sync with React Query.',
      pt: 'Desenvolvi o Gescol, um módulo interno de RH para gerir férias e ausências: backend em Node.js / Express / PostgreSQL e frontend em Next.js 15. Interface responsiva e internacionalizada com Material UI v6 e Tailwind CSS; obtenção de dados e sincronização de estado com React Query.',
    },
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Next.js 15', 'Material UI', 'Tailwind CSS', 'React Query'],
  },
  {
    id: 'exp-tecnico-plus',
    kind: 'teaching',
    start: '2026-05',
    period: { en: 'May 2026 – Jun 2026', pt: 'mai. 2026 – jun. 2026' },
    role: { en: 'Teaching Assistant, AI Agents Bootcamp', pt: 'Assistente de Ensino, Bootcamp de Agentes de IA' },
    org: { en: 'Técnico+ Formação Avançada (IST) · Lisbon', pt: 'Técnico+ Formação Avançada (IST) · Lisboa' },
    summary: {
      en: 'Supported the AI Agents bootcamp led by Prof. Cristina Fraga and set up its initial notebooks in Google Colab Enterprise on Google Cloud. Built and orchestrated AI agents with LangChain, Microsoft Azure and Microsoft Foundry, and taught executives to design and coordinate them.',
      pt: 'Apoiei o bootcamp de Agentes de IA coordenado pela Prof.ª Cristina Fraga e preparei os seus notebooks iniciais no Google Colab Enterprise, no Google Cloud. Construí e orquestrei agentes de IA com LangChain, Microsoft Azure e Microsoft Foundry, e ensinei executivos a desenhá-los e a coordená-los.',
    },
    stack: ['LangChain', 'Azure', 'Microsoft Foundry', 'Google Colab Enterprise'],
  },
  {
    id: 'exp-wondercom',
    kind: 'work',
    start: '2024-08',
    period: { en: 'Aug 2024 – Feb 2025', pt: 'ago. 2024 – fev. 2025' },
    role: { en: 'Technical Support', pt: 'Apoio Técnico' },
    org: { en: 'Wondercom · Lisbon / Sintra', pt: 'Wondercom · Lisboa / Sintra' },
    summary: {
      en: 'Remote technical support for Vodafone fixed services (internet, TV, landline), inbound and outbound. Guided customers through troubleshooting and escalated complex faults.',
      pt: 'Apoio técnico remoto aos serviços fixos da Vodafone (internet, televisão, telefone fixo), em chamadas de entrada e de saída. Acompanhei clientes na resolução de problemas e escalei avarias complexas.',
    },
  },
  {
    id: 'exp-neeti',
    kind: 'community',
    start: '2023-01',
    period: { en: '2023 – 2025', pt: '2023 – 2025' },
    role: { en: 'Events coordinator', pt: 'Coordenador de eventos' },
    org: {
      en: 'NEETI — Telecommunications and Informatics Engineering student group, IST',
      pt: 'NEETI — núcleo de estudantes de Engenharia de Telecomunicações e Informática, IST',
    },
    summary: {
      en: 'Coordinated and organised events: planning, scheduling and logistics.',
      pt: 'Coordenei e organizei eventos: planeamento, calendarização e logística.',
    },
  },
  {
    id: 'exp-mentoring',
    kind: 'community',
    start: '2022-09',
    period: { en: '2022 – 2025', pt: '2022 – 2025' },
    role: { en: 'First-year mentor', pt: 'Mentor do primeiro ano' },
    org: { en: 'IST Mentoring Programme', pt: 'Programa de Mentorado do IST' },
    summary: {
      en: 'Mentored incoming first-year students.',
      pt: 'Acompanhei estudantes recém-chegados ao primeiro ano.',
    },
  },
];
