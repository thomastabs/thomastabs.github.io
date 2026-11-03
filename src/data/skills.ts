import type { L10n } from './types';

export const skills: { group: L10n; items: string[] }[] = [
  { group: { en: 'Languages', pt: 'Linguagens' }, items: ['Python', 'Java', 'TypeScript / JavaScript', 'SQL', 'C'] },
  { group: { en: 'Backend', pt: 'Backend' }, items: ['FastAPI', 'Spring Boot', 'Node.js / Express', 'Pydantic', 'PostgreSQL', 'Redis'] },
  { group: { en: 'Frontend', pt: 'Frontend' }, items: ['React', 'Next.js', 'Tailwind CSS', 'React Query', 'Zustand'] },
  { group: { en: 'Cloud & DevOps', pt: 'Cloud e DevOps' }, items: ['Docker', 'GitHub Actions', 'Azure (Container Apps)', 'GCP', 'Linux'] },
  { group: { en: 'AI', pt: 'IA' }, items: ['LangChain', 'multi-agent systems', 'LLM-assisted development workflows'] },
  { group: { en: 'Writing', pt: 'Escrita' }, items: ['LaTeX', 'Markdown'] },
];
