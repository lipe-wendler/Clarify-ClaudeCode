/*
 * Conteúdo do portfólio.
 *
 * Todos os textos, links e projetos ficam neste arquivo. Para atualizar o site
 * (novo projeto, novo marco na trajetória, novo contato), edite só aqui: os
 * componentes em src/components leem estes dados e montam o layout.
 */

/** Links externos usados no menu, no hero e no contato. */
export const links = {
  linkedin: 'https://www.linkedin.com/in/felipe-wendler/',
  github: 'https://github.com/lipe-wendler',
}

/** Identidade e textos de apresentação. */
export const profile = {
  name: 'Felipe Wendler',
  brand: 'F.Wendler',
  role: 'Software Engineer',
  // Manifesto da marca, uma frase por linha. A última aparece em amarelo.
  manifesto: ['Understanding people.', 'Connecting technology.', 'Solving problems.'],
  headline:
    'Transformo processos de negócio complexos em sistemas de gestão e automações confiáveis, usando agentes de IA para entregar mais rápido sem perder qualidade.',
  axes: ['JavaScript & PHP', 'Automação', 'Integrações com IA'],
}

/** Seção "Sobre". */
export const about = {
  title: 'Tecnologia que começa pelo problema',
  // Parágrafos da bio. Trechos entre ** ** aparecem em destaque.
  bio: [
    'Meu trabalho começa antes do código: **entender como as pessoas trabalham**, com suas regras, exceções e gargalos. É assim que construo software para áreas com regras rígidas, como **cartórios** (atos notariais, matrícula de imóveis e certidões), **food service** e **rotinas contábeis**.',
    'No dia a dia combino desenvolvimento full-stack com **automação e integrações com IA**. Uso agentes como Claude Code, Codex e AIOX dentro de um processo com especificação, revisão cruzada, testes e CI. A IA acelera o trabalho, e o processo garante a confiabilidade.',
    'Penso em **custo, prazo, operação e impacto no negócio** em cada decisão técnica. Software bom é o que resolve o problema de quem usa.',
  ],
  // Números-chave: só dados comprovados pelos projetos.
  facts: [
    { value: '3', label: 'áreas de negócio atendidas: cartórios, food service e contabilidade' },
    { value: '6', label: 'frentes entregues no SaaS Notarial, de atos notariais a segurança' },
    { value: '3', label: 'automações com IA no fechamento contábil mensal' },
    { value: '31', label: 'contradições de especificação encontradas por revisão com vários agentes' },
  ],
  pillars: [
    { key: 'pessoas', title: 'Understanding people', text: 'Imersão no domínio do cliente e levantamento de regras e do fluxo real antes de propor solução.' },
    { key: 'tecnologia', title: 'Connecting technology', text: 'Integrações, automação de processos e agentes de IA ligados ao fluxo de trabalho real.' },
    { key: 'resultado', title: 'Solving problems', text: 'Entrega com rigor: testes, CI, segurança e documentação que sustentam o produto.', highlight: true },
  ],
}

/**
 * Áreas usadas no filtro de projetos. O "id" é referenciado em project.areas.
 */
export const areas = [
  { id: 'all', label: 'Todos' },
  { id: 'gestao', label: 'Sistemas de gestão' },
  { id: 'ia', label: 'IA aplicada' },
  { id: 'auto', label: 'Automação' },
]

/**
 * Estudos de caso.
 * - size: "feature" (destaque, título maior) ou "compact" (mais enxuto).
 * - figure: diagrama opcional ("modules", "spec-flow" ou "steps").
 */
export const projects = [
  {
    id: 'saas-notarial',
    size: 'feature',
    areas: ['gestao', 'ia'],
    domain: 'cartórios · notas e registro de imóveis',
    title: 'SaaS Notarial',
    summary: 'Plataforma SaaS de gestão para cartórios: atos notariais, matrícula de imóveis e certidões num só lugar.',
    tags: ['Sistema de gestão', 'Segurança', 'UX', 'AIOX'],
    meta: [
      { label: 'Setor', value: 'Serviços notariais e registrais' },
      { label: 'Papel', value: 'Engenharia e produto' },
      { label: 'Período', value: '2026 · em evolução' },
    ],
    left: [
      {
        title: 'Contexto e desafio',
        text: 'Cartórios operam sob regras legais rígidas, com documentos que precisam ser exatos, rastreáveis e seguros. O desafio é transformar esses fluxos, cheios de exceções, num sistema claro para o escrevente e confiável para o cartório.',
      },
      {
        title: 'Abordagem',
        text: 'Evolução por fases e épicos, com análise completa do repositório, checklist de qualidade e framework de agentes de IA (AIOX) para acelerar as entregas mantendo o padrão.',
      },
    ],
    right: {
      title: 'O que entreguei',
      items: [
        'Módulo de **Ata Notarial**, do fluxo ao documento',
        'Épico de **Matrícula** de imóveis, em entregas incrementais',
        'Helpers de **CND** (certidões negativas) reutilizáveis',
        '**Auditoria de segurança** da autenticação',
        'Revisão de **UX** das telas de operação',
        'Reorganização do **onboarding** de desenvolvedores',
      ],
    },
    figure: {
      type: 'modules',
      caption: 'mapa de módulos entregues',
      legend: '● núcleo do domínio',
      items: [
        { title: 'Ata Notarial', text: 'Fluxo completo do ato ao documento', core: true },
        { title: 'Matrícula', text: 'Registro de imóveis em entregas incrementais', core: true },
        { title: 'Certidões (CND)', text: 'Helpers reutilizáveis entre módulos', core: true },
        { title: 'Autenticação', text: 'Auditoria de segurança do acesso' },
        { title: 'Experiência (UX)', text: 'Telas de operação revisadas' },
        { title: 'Onboarding', text: 'Docs e checklist para novos devs' },
      ],
    },
    branches: ['epic/matricula', 'mnt/cnd-helpers', 'chore/reorg-onboarding'],
  },
  {
    id: 'especificacao-multiagente',
    size: 'feature',
    areas: ['ia'],
    domain: 'engenharia com IA · projetos greenfield',
    title: 'Especificação com vários agentes',
    summary: 'Um método para começar projetos do zero com especificações sólidas: agentes de IA diferentes analisam os mesmos documentos, os conflitos são consolidados e só então o código começa.',
    tags: ['Claude Code', 'Codex', 'Monorepo'],
    figure: { type: 'spec-flow', caption: 'fluxo de revisão cruzada', legend: 'docs → spec' },
    left: [
      {
        title: 'Por que importa',
        text: 'Erro de especificação é o mais caro de corrigir. Quando modelos diferentes confrontam a mesma documentação, as ambiguidades aparecem **antes** do desenvolvimento, e o time decide só o que exige julgamento humano.',
      },
    ],
    right: {
      title: 'O que o método faz',
      items: [
        'Estrutura inicial de **monorepo** pronta para trabalhar com agentes',
        '**Análise dupla Claude e Codex** dos mesmos documentos, de forma independente',
        '**Consolidação** que separa consenso, conflito e decisões pendentes',
        'Coordenação de **várias sessões em paralelo**, cada uma com um papel',
      ],
    },
    stats: [
      { value: '31', label: 'contradições encontradas em 4 documentos' },
      { value: '5', label: 'ambiguidades de termos identificadas' },
      { value: '6', label: 'decisões em aberto registradas para o time' },
    ],
  },
  {
    id: 'automacao-contabil',
    size: 'compact',
    areas: ['auto', 'ia'],
    domain: 'contabilidade · Simples Nacional',
    title: 'Fechamento contábil automatizado',
    summary: 'Automações com IA para o fechamento mensal de empresas do Simples Nacional: despesas, receitas e o pacote enviado ao contador.',
    tags: ['Skills de IA', 'Excel', 'Regras fiscais', 'PowerShell'],
    left: [
      {
        title: 'Problema',
        text: 'Extratos, faturas de cartão, notas fiscais e guias do DAS eram organizados à mão todo mês, com risco de erro e de documento faltando.',
      },
    ],
    right: {
      title: 'Automações',
      items: [
        '**Despesas:** planilha por competência, recorte da fatura por mês, câmbio e IOF em compras internacionais',
        '**Receitas:** controle anual por NFS-e, separação por Anexo, **Fator R** e limites do Simples',
        '**Pacote do contador:** conferência de pendências, índice de envio e arquivo .zip',
      ],
    },
    figure: {
      type: 'steps',
      caption: 'fluxo do fechamento',
      items: [
        { title: 'Documentos', text: 'extratos · faturas · NFs' },
        { title: 'Skills de IA', text: 'regras fiscais', tone: 'dark' },
        { title: 'Planilhas', text: 'despesas · receitas' },
        { title: 'Conferência', text: 'pendências' },
        { title: 'Contador', text: '.zip + índice', tone: 'accent' },
      ],
    },
  },
  {
    id: 'restaurante-manager',
    size: 'compact',
    areas: ['gestao'],
    domain: 'food service · gestão de estoque',
    title: 'Restaurante Manager',
    summary: 'Sistema de gestão de restaurante com controle de estoque confiável mesmo nos horários de pico.',
    tags: ['Concorrência', 'Integridade de dados', 'Debugging'],
    left: [
      {
        title: 'Problema',
        text: 'Pedidos simultâneos podiam gerar baixas inconsistentes no estoque de bebidas: uma **race condition** que distorcia o saldo real.',
      },
    ],
    right: {
      title: 'Solução',
      text: 'Diagnóstico da concorrência e correção da lógica de baixa na causa raiz, mantendo o **estoque íntegro** mesmo com operações em paralelo.',
    },
  },
]

/** Seção "Método": etapas em ordem (a numeração é a sequência real do trabalho). */
export const method = {
  title: 'Como eu trabalho',
  lead: 'Cinco etapas, da conversa com o cliente ao sistema em produção. A IA participa de todas, e cada entrega passa por verificação.',
  steps: [
    { title: 'Entender', text: 'Imersão no processo do cliente, nas regras e nas exceções do domínio.' },
    { title: 'Especificar', text: 'Especificação revisada por mais de um agente para eliminar contradições.' },
    { title: 'Construir', text: 'Desenvolvimento assistido por IA, com sessões em paralelo.' },
    { title: 'Validar', text: 'Testes, lint, typecheck e CI a cada mudança.' },
    { title: 'Entregar', text: 'Deploy, documentação e onboarding para o produto continuar evoluindo.' },
  ],
}

/** Competências por grupo. "strong" destaca as principais de cada grupo. */
export const skills = [
  { title: 'Desenvolvimento', strong: ['JavaScript', 'PHP'], other: ['TypeScript', 'Full-stack web', 'SaaS', 'Sistemas de gestão'] },
  { title: 'Dados e back-end', strong: ['PostgreSQL'], other: ['Migrations', 'Concorrência', 'Regras de negócio', 'Autenticação'] },
  { title: 'IA aplicada', strong: ['Claude Code'], other: ['Codex', 'AIOX', 'Vários agentes', 'Skills personalizadas'] },
  { title: 'Qualidade e DevOps', strong: ['CI/CD'], other: ['Testes automatizados', 'Code review', 'Git worktrees', 'Segurança'] },
  { title: 'Automação de processos', strong: ['Automação com IA'], other: ['Planilhas Excel', 'Conferências automáticas', 'PowerShell'] },
  { title: 'Negócio e produto', strong: ['Visão de negócio'], other: ['UX', 'Requisitos', 'Onboarding', 'Simples Nacional'] },
]

/**
 * Trajetória no formato de histórico de commits (do mais novo para o mais antigo).
 * highlight: true pinta o ponto de amarelo.
 */
export const timeline = [
  {
    when: 'set 2026',
    repo: 'monorepo',
    title: 'Método de especificação com vários agentes',
    text: 'Monorepo greenfield com revisão cruzada entre Claude e Codex e consolidação dos documentos.',
    highlight: true,
  },
  {
    when: 'set 2026',
    repo: 'lipe-wendler',
    title: 'Marca pessoal F.Wendler e curso Clarify',
    text: 'Perfil público no GitHub e Curso de Desenvolvimento com Claude Code.',
    highlight: true,
  },
  {
    when: 'jul 2026',
    repo: 'saas-notarial',
    title: 'Épico Matrícula e certidões',
    text: 'Análise completa do repositório, reorganização do onboarding e helpers de CND.',
    branches: ['epic/matricula', 'mnt/cnd-helpers'],
  },
  {
    when: 'mai 2026',
    repo: 'restaurante-manager',
    title: 'Race condition no estoque de bebidas',
    text: 'Correção com foco em integridade dos dados sob concorrência.',
  },
  {
    when: 'mai 2026',
    repo: 'saas-notarial',
    title: 'Fase 2 e módulo Ata Notarial',
    text: 'Revisão de UX, auditoria de segurança da autenticação e adoção do framework de agentes AIOX.',
  },
]

/** Formação e prática, abaixo da linha do tempo. */
export const education = [
  { kicker: 'curso · 2026', title: 'Desenvolvimento com Claude Code', text: 'Clarify: engenharia de software assistida por agentes de IA.' },
  { kicker: 'prática · 2026', title: 'Frameworks de agentes de IA', text: 'Claude Code, Codex e AIOX aplicados em projetos reais.' },
]

/** Seção de contato. */
export const contact = {
  title: 'Tem um processo complexo?',
  highlight: 'Vamos resolvê-lo.',
  lead: 'Sistemas de gestão sob medida, automação de rotinas e IA integrada ao fluxo de trabalho, do entendimento do problema à entrega em produção.',
  offers: [
    { title: 'Sistemas de gestão', text: 'Software web para áreas com regras de negócio complexas.' },
    { title: 'Automação de processos', text: 'Rotinas manuais transformadas em fluxos automáticos e auditáveis.' },
    { title: 'IA aplicada', text: 'Agentes e integrações de IA no desenvolvimento e na operação.' },
  ],
}
