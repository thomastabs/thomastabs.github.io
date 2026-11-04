import type { L10n } from './types';
import type { LogoKey } from '@/lib/logos';

export interface Education {
  id: string;
  start: string;
  period: L10n;
  degree: L10n;
  short: L10n;
  institution: string;
  location?: L10n;
  details?: L10n;
  coursework?: L10n[];
  thesis?: { title: string; advisor: string; defended: L10n; grade: string };
  logo?: LogoKey;
  monogram?: string;
}

export const education: Education[] = [
  {
    id: 'edu-msc',
    logo: 'tecnico',
    start: '2024-09',
    period: { en: '2024 – 2026', pt: '2024 – 2026' },
    degree: { en: 'MSc in Computer Science and Engineering (MEIC)', pt: 'Mestrado em Engenharia Informática e de Computadores (MEIC)' },
    short: { en: 'MSc', pt: 'Mestrado' },
    institution: 'Instituto Superior Técnico',
    location: { en: 'Lisbon · Oeiras', pt: 'Lisboa · Oeiras' },
    details: {
      en: 'Specialisations: Software Engineering, Cybersecurity. Coursework average 16/20; final MSc grade not yet awarded.',
      pt: 'Especializações: Engenharia de Software, Cibersegurança. Média da componente curricular 16/20; nota final do mestrado ainda por atribuir.',
    },
    thesis: {
      title: 'Governed Human-AI Collaboration Across the Software Development Lifecycle: A Process Framework and Its Reference Implementation',
      advisor: 'Prof. Miguel Mira da Silva',
      defended: { en: '23 Oct 2026', pt: '23 out. 2026' },
      grade: '17/20',
    },
  },
  {
    id: 'edu-bsc',
    logo: 'tecnico',
    start: '2021-09',
    period: { en: '2021 – 2024', pt: '2021 – 2024' },
    degree: { en: 'BSc in Telecommunications and Informatics Engineering (LETI)', pt: 'Licenciatura em Engenharia de Telecomunicações e Informática (LETI)' },
    short: { en: 'BSc', pt: 'Licenciatura' },
    institution: 'Instituto Superior Técnico',
    location: { en: 'Lisbon · Oeiras', pt: 'Lisboa · Oeiras' },
    coursework: [
      { en: 'Data Structures and Algorithms', pt: 'Algoritmos e Estruturas de Dados' },
      { en: 'Foundations of Programming', pt: 'Fundamentos da Programação' },
      { en: 'Object-Oriented Programming', pt: 'Programação com Objetos' },
      { en: 'Databases', pt: 'Bases de Dados' },
      { en: 'Operating Systems', pt: 'Sistemas Operativos' },
      { en: 'Network and Computer Security', pt: 'Segurança Informática em Redes e Sistemas' },
      { en: 'Distributed Systems', pt: 'Sistemas Distribuídos' },
      { en: 'Introduction to Computer Networks', pt: 'Introdução às Redes de Computadores' },
      { en: 'Network Architecture', pt: 'Arquitetura de Redes' },
      { en: 'Software Engineering', pt: 'Engenharia de Software' },
    ],
  },
  {
    id: 'edu-secondary',
    monogram: 'ESMM',
    start: '2018-09',
    period: { en: '2018 – 2021', pt: '2018 – 2021' },
    degree: { en: 'Secondary education, Science and Technology', pt: 'Ensino secundário, Ciências e Tecnologias' },
    short: { en: 'Secondary', pt: 'Secundário' },
    institution: 'Escola Secundária de Mem Martins',
  },
];

export interface Milestone {
  id: string;
  date: string;
  period: L10n;
  title: L10n;
  details?: L10n;
}

export const milestones: Milestone[] = [
  {
    id: 'ms-opensoft',
    date: '2026-11-16',
    period: { en: '16 Nov 2026', pt: '16 nov. 2026' },
    title: { en: 'Joining OpenSoft', pt: 'Entrada na OpenSoft' },
  },
  {
    id: 'ms-defence',
    date: '2026-10-23',
    period: { en: '23 Oct 2026', pt: '23 out. 2026' },
    title: { en: 'MSc thesis defended — 17/20', pt: 'Tese de mestrado defendida — 17/20' },
    details: {
      en: 'Governed Human-AI Collaboration Across the Software Development Lifecycle. Committee: Prof. Helena Galhardas (chair), Prof. Ademar Aguiar; supervisor Prof. Miguel Mira da Silva.',
      pt: 'Governed Human-AI Collaboration Across the Software Development Lifecycle. Júri: Prof.ª Helena Galhardas (presidente), Prof. Ademar Aguiar; orientador Prof. Miguel Mira da Silva.',
    },
  },
  {
    id: 'ms-bsc',
    date: '2024-07-31',
    period: { en: '2024', pt: '2024' },
    title: { en: 'BSc completed, MSc started', pt: 'Licenciatura concluída, início do mestrado' },
  },
];
