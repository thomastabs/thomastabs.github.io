import type { L10n } from './types';

/* Only what the CV or a project on this site backs up. */
export const skills: { group: L10n; items: string[] }[] = [
  { group: { en: 'Languages', pt: 'Linguagens' }, items: ['Python', 'Java', 'TypeScript', 'JavaScript', 'SQL', 'PL/pgSQL', 'C', 'Bash', 'R', 'Assembly'] },
  { group: { en: 'Backend', pt: 'Backend' }, items: ['FastAPI', 'Spring Boot', 'Node.js', 'Express'] },
  { group: { en: 'AI', pt: 'IA' }, items: ['LangChain', 'Microsoft Foundry', 'Google Colab Enterprise'] },
  { group: { en: 'Frontend', pt: 'Frontend' }, items: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Material UI', 'React Query'] },
  { group: { en: 'Data', pt: 'Dados' }, items: ['PostgreSQL', 'Redis', 'Prisma', 'Sequelize', 'Supabase'] },
  { group: { en: 'Cloud and DevOps', pt: 'Cloud e DevOps' }, items: ['Docker', 'Kubernetes', 'Ansible', 'GitHub Actions', 'Azure', 'Azure Container Apps', 'Google Cloud', 'Linux'] },
  { group: { en: 'Tools', pt: 'Ferramentas' }, items: ['Git', 'Playwright', 'Figma'] },
];
