import type { L10n } from './types';

export const skills: { group: L10n; items: string[] }[] = [
  { group: { en: 'Languages', pt: 'Linguagens' }, items: ['Python', 'Java', 'TypeScript', 'SQL', 'C'] },
  { group: { en: 'Backend and AI', pt: 'Backend e IA' }, items: ['FastAPI', 'Spring Boot', 'Node.js', 'PostgreSQL', 'Redis', 'LangChain'] },
  { group: { en: 'Frontend', pt: 'Frontend' }, items: ['React, Next.js and Tailwind CSS'] },
  { group: { en: 'Cloud and DevOps', pt: 'Cloud e DevOps' }, items: ['Docker', 'GitHub Actions', 'Azure', 'GCP', 'Linux'] },
];
