/* Apex case study — single source of truth.
   Every fact here comes from the dissertation, the extended abstract, the defence
   slides or github.com/thomastabs/apex. Links with href: null are TODO and render nothing. */
import type { L10n } from './types';

export const apexTitle =
  'Governed Human-AI Collaboration Across the Software Development Lifecycle: A Process Framework and Its Reference Implementation';

export const oneLiner: L10n = {
  en: 'A process framework for governed human–AI collaboration across the SDLC, instantiated as Apex, a working web application.',
  pt: 'Uma framework de processo para a colaboração humano–IA governada ao longo do ciclo de vida do software, instanciada no Apex, uma aplicação web funcional.',
};

export const header: { k: L10n; v: L10n | string; href?: string; mono?: boolean }[] = [
  { k: { en: 'Title', pt: 'Título' }, v: apexTitle },
  { k: { en: 'Short name', pt: 'Nome curto' }, v: 'Apex' },
  {
    k: { en: 'Degree', pt: 'Grau' },
    v: {
      en: 'MSc in Computer Science and Engineering, Instituto Superior Técnico, Universidade de Lisboa',
      pt: 'Mestrado em Engenharia Informática e de Computadores, Instituto Superior Técnico, Universidade de Lisboa',
    },
  },
  { k: { en: 'Supervisor', pt: 'Orientador' }, v: 'Prof. Miguel Mira da Silva' },
  {
    k: { en: 'Committee', pt: 'Júri' },
    v: { en: 'Prof. Helena Galhardas (chair) · Prof. Ademar Aguiar (member)', pt: 'Prof.ª Helena Galhardas (presidente) · Prof. Ademar Aguiar (vogal)' },
  },
  { k: { en: 'Submitted', pt: 'Entregue' }, v: { en: '7 October 2026', pt: '7 de outubro de 2026' }, mono: true },
  { k: { en: 'Defended', pt: 'Defendida' }, v: { en: '23 October 2026', pt: '23 de outubro de 2026' }, mono: true },
  { k: { en: 'Grade', pt: 'Nota' }, v: '17 / 20', mono: true },
  {
    k: { en: 'Method', pt: 'Método' },
    v: {
      en: 'Systematic Literature Review (646 articles) + Design Science Research Methodology',
      pt: 'Revisão Sistemática da Literatura (646 artigos) + Design Science Research Methodology',
    },
  },
  { k: { en: 'Live app', pt: 'Aplicação' }, v: 'apex-bolt.com', href: 'https://apex-bolt.com' },
  { k: { en: 'Source', pt: 'Código' }, v: 'github.com/thomastabs/apex', href: 'https://github.com/thomastabs/apex' },
];

/* ---------- Links register ---------- */

export type LinkGroup = 'read' | 'use' | 'explore';
export interface RegisterLink {
  group: LinkGroup;
  label: L10n;
  href: string | null; // null = TODO, hidden
  primary?: boolean;
  secondary?: boolean;
  extra?: { label: L10n; href: string }[];
  todo?: string;
}

const gh = 'https://github.com/thomastabs/apex/blob/main';

export const register: RegisterLink[] = [
  { group: 'read', label: { en: 'Read the dissertation (PDF)', pt: 'Ler a dissertação (PDF)' }, href: '/docs/apex-dissertation.pdf', primary: true },
  { group: 'read', label: { en: 'Extended abstract (PDF)', pt: 'Resumo alargado (PDF)' }, href: '/docs/apex-extended-abstract.pdf' },
  {
    group: 'read',
    label: { en: 'Defence slides (PDF)', pt: 'Diapositivos da defesa (PDF)' },
    href: '/docs/apex-defence-slides.pdf',
    extra: [{ label: { en: '.pptx', pt: '.pptx' }, href: '/docs/apex-defence-slides.pptx' }],
  },
  { group: 'read', label: { en: 'Framework spec (v2)', pt: 'Especificação da framework (v2)' }, href: `${gh}/docs/framework/Apex-Framework-v2.docx` },
  { group: 'read', label: { en: 'Literature grounding', pt: 'Fundamentação na literatura' }, href: `${gh}/docs/framework/Apex-Framework-Grounding.docx` },
  { group: 'read', label: { en: 'Implementation report', pt: 'Relatório de implementação' }, href: `${gh}/docs/framework/Apex-Implementation-Report.docx` },
  { group: 'use', label: { en: 'Open the live app', pt: 'Abrir a aplicação' }, href: 'https://apex-bolt.com', secondary: true },
  { group: 'use', label: { en: 'Source on GitHub', pt: 'Código no GitHub' }, href: 'https://github.com/thomastabs/apex' },
  {
    group: 'use',
    label: { en: 'Outfolio (live)', pt: 'Outfolio (online)' },
    href: 'https://outfolio-v1.vercel.app/',
    extra: [{ label: { en: 'Outfolio (source)', pt: 'Outfolio (código)' }, href: 'https://github.com/thomastabs/OutfolioV1' }],
  },
  { group: 'explore', label: { en: 'Diagrams (PlantUML / BPMN)', pt: 'Diagramas (PlantUML / BPMN)' }, href: 'https://github.com/thomastabs/apex/tree/main/docs/diagrams' },
  { group: 'explore', label: { en: 'Thesis ledger', pt: 'Diário da tese' }, href: '/work/apex/ledger/' },
  {
    group: 'explore',
    label: { en: 'Product brief', pt: 'Brief de produto' },
    href: `${gh}/PRODUCT.md`,
    extra: [{ label: { en: 'Design notes', pt: 'Notas de design' }, href: `${gh}/DESIGN.md` }],
  },
  { group: 'explore', label: { en: 'First draft (historical)', pt: 'Primeiro rascunho (histórico)' }, href: `${gh}/docs/framework/Draft-and-Ideas-v1.docx` },
  { group: 'read', label: { en: 'IST repository record', pt: 'Registo no repositório do IST' }, href: null, todo: 'TODO: add when published on Fénix' },
];

export const publishedLinks = register.filter((l) => l.href !== null) as (RegisterLink & { href: string })[];
export const todoLinks = register.filter((l) => l.href === null);

/* ---------- Abstract (verbatim) ---------- */

export const abstractLead: L10n = {
  en: 'AI coding tools have been adopted faster than any method for using them well. This thesis proposes a process framework that treats AI as a bounded, validated and traced collaborator across the whole software lifecycle, and builds Apex to show it working.',
  pt: 'As ferramentas de IA para programação foram adotadas mais depressa do que qualquer método para as usar bem. Esta tese propõe uma framework de processo que trata a IA como um colaborador delimitado, validado e rastreado ao longo de todo o ciclo de vida do software, e constrói o Apex para a demonstrar em funcionamento.',
};

export const abstract: L10n = {
  en: "Generative Artificial Intelligence and Large Language Models have moved from autocomplete assistants to active contributors across the Software Development Life Cycle, enabling development in which practitioners express requirements in natural language and supervise the resulting artefacts. Adoption has outpaced method. A Systematic Literature Review over 646 articles confirms substantial benefits alongside recurring risks in reliability, security, traceability and accountability, and identifies the absence of structured, repeatable guidance for integrating these tools into professional workflows as the field's central unresolved problem. Therefore, value is conditional on process, not on model capability alone. This dissertation addresses that gap through the Design Science Research Methodology. It proposes a process-oriented framework for governed Human-AI collaboration treating AI systems as first-class collaborators whose contributions must be bounded, validated and traced. The framework defines lifecycle phases with phase-specific quality gates, responsibilities expressed as functions rather than job titles, and governance metrics, anchored by a persistent versioned specification linking every generated artefact to its originating requirement. It is instantiated as Apex, a web application operationalising each phase, gate and artefact against a real project management backend. Evaluation combines application in a real project, standardised usability and workload instruments, interviews with practitioners and an Agile expert, and an analytical assessment against criteria set in advance. The contribution is an evidence-grounded process model allowing organisations to adopt AI assistance without surrendering oversight of software quality, security and accountability.",
  pt: 'A Inteligência Artificial Generativa e os Modelos de Linguagem de Grande Dimensão passaram de assistentes de preenchimento automático a contribuidores activos no Ciclo de Vida de Desenvolvimento de Software, permitindo exprimir requisitos em linguagem natural e supervisionar os artefactos gerados. A adopção ultrapassou o método. Uma Revisão Sistemática da Literatura sobre 646 artigos confirma benefícios substanciais a par de riscos recorrentes de fiabilidade, segurança, rastreabilidade e responsabilização, e identifica a ausência de orientação estruturada e repetível para integrar estas ferramentas em contextos profissionais como o principal problema por resolver. Concluindo então que o valor depende do processo, não apenas da capacidade do modelo em questão. Esta dissertação aborda essa lacuna através da Design Science Research Methodology, propondo uma framework orientada a processo para a colaboração Humano-IA governada, cujas contribuições de IA devem ser delimitadas, validadas e rastreadas. Define fases com portões de qualidade específicos, responsabilidades expressas como funções e não como cargos, e métricas de governação, ancoradas numa especificação versionada que liga cada artefacto ao seu requisito. É instanciada no Apex, aplicação web que operacionaliza cada fase, portão e artefacto sobre uma ferramenta real de gestão de projectos. A avaliação combina aplicação num projecto real, instrumentos padronizados de usabilidade e carga cognitiva, entrevistas, e avaliação analítica face a critérios previamente definidos. O contributo é um modelo de processo fundamentado em evidência que permite adoptar assistência por IA sem abdicar do controlo sobre qualidade, segurança e responsabilização.',
};

/* ---------- The problem (extended abstract §1) ---------- */

export const problemFacts: { stat: L10n; text: L10n; ref: string }[] = [
  {
    stat: { en: '84% use · 29% trust', pt: '84% usam · 29% confiam' },
    text: {
      en: 'Developers using or planning to use AI tools rose to 84% (from 76%), while the share trusting the accuracy of that output fell from 40% to 29%. More respondents actively distrust AI output (46%) than trust it (33%).',
      pt: 'Os programadores que usam ou planeiam usar ferramentas de IA passaram a 84% (eram 76%), enquanto a parte que confia na exatidão do resultado caiu de 40% para 29%. Há mais inquiridos a desconfiar ativamente (46%) do que a confiar (33%).',
    },
    ref: 'Stack Overflow, 2025 Developer Survey: AI',
  },
  {
    stat: { en: '61% correct · 10.5% secure', pt: '61% corretas · 10,5% seguras' },
    text: {
      en: 'Benchmarked on real-world tasks, a leading coding agent produced functionally correct solutions 61% of the time, but only 10.5% of them were secure.',
      pt: 'Em tarefas reais, um agente de programação de referência produziu soluções funcionalmente corretas em 61% dos casos, mas só 10,5% eram seguras.',
    },
    ref: 'Zhao et al., 2025, “Is Vibe Coding Safe?” (preprint)',
  },
  {
    stat: { en: '+98% PRs · +91% review time', pt: '+98% PRs · +91% tempo de revisão' },
    text: {
      en: 'Across 1,255 teams, high AI adoption came with 98% more pull requests merged but 91% longer review times, and no significant correlation with delivery outcomes.',
      pt: 'Em 1255 equipas, uma adoção elevada de IA trouxe mais 98% de pull requests integrados, mas revisões 91% mais longas e nenhuma correlação significativa com os resultados de entrega.',
    },
    ref: 'Faros AI, The AI Productivity Paradox Report 2025',
  },
];

export const problemThesis: L10n = {
  en: 'The value of AI assistance in software engineering is conditional on the process that surrounds it, rather than being a property of the model alone.',
  pt: 'O valor da assistência por IA em engenharia de software depende do processo que a rodeia, e não apenas do modelo.',
};

/* ---------- Framework ---------- */

export const phases: { id: string; name: L10n; ai: L10n; gate: L10n }[] = [
  {
    id: 'discovery',
    name: { en: 'Discovery & Requirements', pt: 'Descoberta e Requisitos' },
    ai: { en: 'Drafts stories, compiles approved scenarios into Gherkin', pt: 'Redige histórias e compila os cenários aprovados em Gherkin' },
    gate: { en: 'Discovery Gate (the Trio)', pt: 'Portão de Descoberta (o Trio)' },
  },
  {
    id: 'design',
    name: { en: 'Design, Prototyping & Architecture', pt: 'Design, Prototipagem e Arquitetura' },
    ai: { en: 'Proposes UI structure and a technical specification', pt: 'Propõe a estrutura de interface e uma especificação técnica' },
    gate: { en: 'Design Gate (Design Lead, Tech Lead)', pt: 'Portão de Design (Design Lead, Tech Lead)' },
  },
  {
    id: 'implementation',
    name: { en: 'Implementation', pt: 'Implementação' },
    ai: { en: 'Generates and refactors code inside a Bolt', pt: 'Gera e refatora código dentro de um Bolt' },
    gate: { en: 'Implementation Gate (Developer)', pt: 'Portão de Implementação (Developer)' },
  },
  {
    id: 'testing',
    name: { en: 'Testing', pt: 'Testes' },
    ai: { en: 'Drafts end-to-end BDD scripts from locked Gherkin', pt: 'Redige scripts BDD ponta a ponta a partir do Gherkin bloqueado' },
    gate: { en: 'Testing Gate (QA)', pt: 'Portão de Testes (QA)' },
  },
  {
    id: 'deployment',
    name: { en: 'Deployment', pt: 'Implantação' },
    ai: { en: 'Generates the infrastructure delta only when required', pt: 'Gera o delta de infraestrutura só quando necessário' },
    gate: { en: 'Deployment Gate (Deploying hat)', pt: 'Portão de Implantação (chapéu de quem implanta)' },
  },
  {
    id: 'maintenance',
    name: { en: 'Maintenance', pt: 'Manutenção' },
    ai: { en: 'Reconstructs a narrow context to diagnose one signal', pt: 'Reconstrói um contexto estreito para diagnosticar um sinal' },
    gate: { en: 'Diagnostic firewall, governed loop-back', pt: 'Firewall de diagnóstico, retorno governado' },
  },
];

export const loopBacks: { to: string; label: L10n }[] = [
  { to: 'implementation', label: { en: 'production defect (Fix-Bolt)', pt: 'defeito em produção (Fix-Bolt)' } },
  { to: 'design', label: { en: 'specification gap', pt: 'lacuna na especificação' } },
  { to: 'discovery', label: { en: 'business deviation', pt: 'desvio de negócio' } },
];

export const metrics: { name: string; desc: L10n }[] = [
  {
    name: 'Bolt Cycle Time',
    desc: {
      en: 'The elapsed time from a task being pulled as a Bolt to its completion, measured at task level to isolate execution from queueing, review and gate transitions.',
      pt: 'O tempo decorrido desde que uma tarefa é puxada como Bolt até à sua conclusão, medido ao nível da tarefa para isolar a execução de filas, revisões e transições de portão.',
    },
  },
  {
    name: 'Context Traceability Rate',
    desc: {
      en: 'The proportion of deployed Bolts and stories whose artefacts can be traced through the locked specifications to their originating Unit of Work.',
      pt: 'A proporção de Bolts e histórias implantados cujos artefactos podem ser rastreados, através das especificações bloqueadas, até à Unidade de Trabalho de origem.',
    },
  },
  {
    name: 'AI Defect Escape Rate',
    desc: {
      en: 'The proportion of production defects originating in AI-generated logic that passed the Testing Gate. Apex can only observe it through a named proxy.',
      pt: 'A proporção de defeitos em produção com origem em lógica gerada por IA que passaram o Portão de Testes. O Apex só o consegue observar através de um proxy assumido.',
    },
  },
];

/* ---------- Reference implementation ---------- */

export const capabilities: { title: L10n; text: L10n }[] = [
  {
    title: { en: 'Phased workflow with gates', pt: 'Fluxo por fases, com portões' },
    text: {
      en: 'Transitions are gated on content: no implementation without a locked Gherkin spec, no deploy without a QA sign-off or a green CI run, enforced server-side.',
      pt: 'As transições dependem do conteúdo: sem Gherkin bloqueado não há implementação, sem aprovação de QA ou CI verde não há implantação — validado no servidor.',
    },
  },
  {
    title: { en: 'Traceability graph', pt: 'Grafo de rastreabilidade' },
    text: {
      en: 'One interactive derivation graph per project — epic → story → Gherkin → design → tasks → tests → deploy — derived from the story index, no AI involved.',
      pt: 'Um grafo de derivação interativo por projeto — épico → história → Gherkin → design → tarefas → testes → implantação — derivado do índice de histórias, sem IA.',
    },
  },
  {
    title: { en: 'Governance analytics', pt: 'Métricas de governação' },
    text: {
      en: 'Bolt Cycle Time, Context Traceability Rate and AI Defect Escape Rate, computed from the project and exportable as Markdown or CSV.',
      pt: 'Bolt Cycle Time, Context Traceability Rate e AI Defect Escape Rate, calculadas a partir do projeto e exportáveis em Markdown ou CSV.',
    },
  },
  {
    title: { en: 'Human-in-the-loop guardrails', pt: 'Salvaguardas com a pessoa no circuito' },
    text: {
      en: 'Multi-model cross-check, diff-on-regenerate, a decision log and an optional “Guide the AI” steer on every generative step.',
      pt: 'Verificação cruzada entre modelos, diff ao regenerar, registo de decisões e uma orientação opcional “Guide the AI” em cada passo generativo.',
    },
  },
  {
    title: { en: 'Autopilot', pt: 'Autopilot' },
    text: {
      en: 'Runs the full Phases 1–5 pipeline end to end in the background.',
      pt: 'Executa todo o pipeline das Fases 1 a 5, de ponta a ponta, em segundo plano.',
    },
  },
  {
    title: { en: 'Spec-anchored storage', pt: 'Armazenamento ancorado na especificação' },
    text: {
      en: 'Workflow state lives in versioned, human-readable Markdown context files plus a story index — not in a chat transcript.',
      pt: 'O estado do fluxo vive em ficheiros de contexto Markdown versionados e legíveis, mais um índice de histórias — e não numa conversa.',
    },
  },
];

export const stats = [
  { v: '1,171', l: { en: 'commits', pt: 'commits' } },
  { v: '1,640', l: { en: 'backend tests', pt: 'testes de backend' } },
  { v: '318', l: { en: 'frontend unit tests', pt: 'testes unitários de frontend' } },
  { v: '24', l: { en: 'E2E cases', pt: 'casos E2E' } },
  { v: 'CI/CD', l: { en: 'to Azure Container Apps', pt: 'para Azure Container Apps' } },
];

export const stack: { k: L10n; v: string }[] = [
  { k: { en: 'Backend', pt: 'Backend' }, v: 'Python 3.12 · FastAPI · Pydantic v2 · LangChain' },
  { k: { en: 'Frontend', pt: 'Frontend' }, v: 'Next.js 15 · TypeScript · React Query · Zustand · Tailwind CSS' },
  { k: { en: 'Platform', pt: 'Plataforma' }, v: 'Docker · GitHub Actions · Azure Container Apps · Redis' },
  { k: { en: 'PM backend', pt: 'Gestão de projeto' }, v: 'Taiga · Plane' },
];

/* ---------- Demonstration + results ---------- */

export const outfolio = {
  days: 9,
  epics: { from: 6, to: 9 },
  stories: 54,
  exports: [
    { k: 'Context Traceability Rate', v: '92.6%' },
    { k: { en: 'Spec Conformance mean', pt: 'Conformidade média com a especificação' }, v: '98.65%' },
    { k: 'AI Defect Escape Rate', v: '1.85%' },
  ],
};

export const results: { k: L10n; v: L10n }[] = [
  {
    k: { en: 'Governance constructs realised', pt: 'Construtos de governação realizados' },
    v: { en: '10 of 12 as specified, 1 as a named proxy, 1 partially', pt: '10 de 12 como especificado, 1 como proxy assumido, 1 parcialmente' },
  },
  { k: { en: 'Task-based sessions', pt: 'Sessões com tarefas' }, v: { en: '13', pt: '13' } },
  { k: { en: 'Perceived workload (Raw NASA-TLX)', pt: 'Carga percebida (Raw NASA-TLX)' }, v: { en: '21.5 / 100 (low)', pt: '21,5 / 100 (baixa)' } },
  {
    k: { en: 'Perceived usability (SUS)', pt: 'Usabilidade percebida (SUS)' },
    v: { en: '56.73, grade D (below published norm)', pt: '56,73, nota D (abaixo da norma publicada)' },
  },
  {
    k: { en: 'Design criteria (5, fixed in advance)', pt: 'Critérios de design (5, fixados à partida)' },
    v: { en: '2 met, 3 partially met, 0 not met', pt: '2 cumpridos, 3 parcialmente, 0 não cumpridos' },
  },
  {
    k: { en: 'Demonstration (Outfolio)', pt: 'Demonstração (Outfolio)' },
    v: {
      en: '9 days · 9 epics · 54 stories · CTR 92.6% · Spec conformance 98.65% · AI defect escape 1.85%',
      pt: '9 dias · 9 épicos · 54 histórias · CTR 92,6% · Conformidade 98,65% · AI defect escape 1,85%',
    },
  },
];

export const findings: { title: L10n; text: L10n }[] = [
  {
    title: { en: 'Low workload, below-norm usability', pt: 'Carga baixa, usabilidade abaixo da norma' },
    text: {
      en: 'Across thirteen sessions, perceived workload was low (Raw NASA-TLX 21.5/100) while usability sat below the published corpus mean (SUS 56.73, grade D). Difficulty concentrated at first contact with a dense interface rather than through use: the tool asks little of a practitioner who already knows where they are, and does too little to get them there.',
      pt: 'Nas treze sessões, a carga percebida foi baixa (Raw NASA-TLX 21,5/100) e a usabilidade ficou abaixo da média publicada (SUS 56,73, nota D). A dificuldade concentrou-se no primeiro contacto com uma interface densa, e não durante o uso: a ferramenta pede pouco a quem já sabe onde está, e faz pouco para lá levar quem não sabe.',
    },
  },
  {
    title: { en: 'A gate that could be passed by a stale suite', pt: 'Um portão que um conjunto de testes obsoleto conseguia passar' },
    text: {
      en: 'The Outfolio demonstration surfaced a Testing Gate passable by a suite that had stopped measuring the system it tested. Realised is not yet the same as reliably realised.',
      pt: 'A demonstração com o Outfolio revelou um Portão de Testes que podia ser passado por um conjunto de testes que já não media o sistema que testava. Realizado ainda não é o mesmo que realizado de forma fiável.',
    },
  },
  {
    title: { en: 'The partner-organisation demonstration did not happen', pt: 'A demonstração numa organização parceira não aconteceu' },
    text: {
      en: 'An independent partner organisation was pursued and abandoned: a mid-project migration from Taiga to Plane delayed it while Apex’s adapter was built, and outreach afterwards never led to a scheduled engagement. No amount of solo demonstration substitutes for a team that did not design the framework operating it.',
      pt: 'Foi procurada uma organização parceira independente, sem sucesso: uma migração a meio do projeto de Taiga para Plane atrasou o processo enquanto o adaptador do Apex era construído, e os contactos seguintes nunca chegaram a uma sessão marcada. Nenhuma demonstração a solo substitui ver uma equipa que não desenhou a framework a usá-la.',
    },
  },
];

export const bibtex = `@mastersthesis{taborda2026apex,
  author = {Tom{\\'a}s dos Santos Taborda},
  title  = {Governed Human-AI Collaboration Across the Software Development Lifecycle: A Process Framework and Its Reference Implementation},
  school = {Instituto Superior T{\\'e}cnico, Universidade de Lisboa},
  year   = {2026},
  month  = oct,
  type   = {MSc dissertation},
  url    = {https://tomastaborda.com/work/apex}
}`;
