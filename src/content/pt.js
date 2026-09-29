/*
 * Textos em português.
 *
 * Convenções:
 * - *palavra* em um título vira destaque amarelo (uma palavra por título, regra do DS).
 * - **trecho** em parágrafos vira destaque em negrito (no máximo um por parágrafo).
 * - O conteúdo segue o CV e as fontes da análise: nada de números sem comprovação.
 * - en.js tem exatamente o mesmo formato.
 */
export default {
  lang: 'pt-BR',
  meta: {
    title: 'Felipe Wendler · Portfólio',
    description:
      'Portfólio de Felipe Wendler (F.Wendler): sistemas de gestão, automações e integrações com IA para problemas reais de negócio.',
  },

  nav: {
    work: 'Projetos',
    experience: 'Experiência',
    about: 'Sobre',
    contact: 'Contato',
    cta: 'Vamos conversar',
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
    language: 'Idioma',
    skip: 'Pular para o conteúdo',
  },

  hero: {
    eyebrow: 'Produto · Automação · IA',
    manifesto: ['Understanding people.', 'Connecting technology.', 'Solving *problems.*'],
    role: 'Desenvolvedor de software · JavaScript, PHP e IA',
    summary:
      'Construo sistemas, automações e integrações com IA para problemas reais de negócio. Vim do balcão de um cartório: entendo o processo antes de escrever o código.',
    primary: 'Ver projetos',
    words: ['Ideas', 'Systems', 'People', 'Progress'],
    imageAlt: 'Felipe Wendler sorrindo, de jaqueta caramelo, diante de planos de concreto e um sol amarelo',
  },

  proof: {
    label: 'Experiência prática em números',
    items: [
      { key: 'dev', unit: 'anos', label: 'desenvolvendo aplicações web e automações com IA, desde mar/2025' },
      { value: '2', unit: 'anos', label: 'em cartório de Notas e Registro Civil, do balcão às escrituras' },
      { value: '7', unit: 'frentes', label: 'entregues no SaaS Notarial, de atos notariais a IA Vision' },
      { value: '3', unit: 'automações', label: 'com IA no fechamento contábil mensal' },
    ],
  },

  work: {
    eyebrow: 'Projetos',
    title: 'Projetos em *destaque*',
    lead: 'Três projetos que mostram como conecto pessoas, processos e tecnologia.',
    problem: 'Problema',
    solution: 'Solução',
    result: 'Resultado',
    role: 'Meu papel',
    viewCase: 'Ver case',
  },

  process: {
    eyebrow: 'Método',
    title: 'Como eu *penso* e trabalho',
    lead: 'Um caminho prático para transformar um problema complexo em uma solução simples.',
    labels: { goal: 'Objetivo', activity: 'Como', output: 'Entrega' },
    steps: [
      { title: 'Entender', goal: 'Saber qual problema resolver e para quem.', activity: 'Conversas com quem usa, observação do fluxo real, regras e exceções.', output: 'Problema claro e critérios de sucesso.' },
      { title: 'Estruturar', goal: 'Transformar o problema em um plano.', activity: 'Especificação, prioridades e revisão cruzada com agentes de IA.', output: 'Escopo, fluxo e decisões registradas.' },
      { title: 'Construir', goal: 'Entregar valor rápido e com qualidade.', activity: 'Desenvolvimento em ciclos curtos, assistido por IA, com testes.', output: 'Software funcionando em partes pequenas.' },
      { title: 'Medir', goal: 'Saber se resolveu de verdade.', activity: 'Validação com quem usa, conferências automáticas e feedback.', output: 'Evidência do que funciona e do que falta.' },
      { title: 'Melhorar', goal: 'Evoluir o que já funciona.', activity: 'Ajustes, automação de etapas repetitivas e documentação.', output: 'Um sistema mais simples de usar e manter.' },
    ],
  },

  capabilities: {
    eyebrow: 'Capacidades',
    title: 'O que eu *entrego*',
    lead: 'Capacidades técnicas e de produto para resolver o problema de ponta a ponta. As tecnologias aparecem como evidência.',
    items: [
      { icon: 'code', title: 'Product Engineering', description: 'Aplicações web completas: interface, back-end, banco de dados e deploy.', tags: ['JavaScript', 'PHP', 'TypeScript', 'Next.js', 'PostgreSQL', 'React'] },
      { icon: 'zap', title: 'AI & Automation', description: 'IA aplicada a fluxos reais: extração de documentos, agentes e automações que reduzem trabalho manual.', tags: ['AI Vision', 'Claude Code', 'Codex', 'AIOX', 'Automações'] },
      { icon: 'database', title: 'Systems & Integrations', description: 'Sistemas internos e integrações confiáveis, com atenção a dados, concorrência e segurança.', tags: ['APIs', 'Fluxos documentais', 'Concorrência', 'Autenticação'] },
      { icon: 'users', title: 'Product & Problem Solving', description: 'Do levantamento com o cliente à especificação: entender a necessidade e propor a solução certa.', tags: ['Levantamento', 'Atendimento consultivo', 'Especificação', 'UX'] },
    ],
  },

  experience: {
    eyebrow: 'Experiência',
    title: 'Trajetória',
    lead: 'Do atendimento em cartório ao desenvolvimento de software para o mesmo domínio.',
    current: 'atual',
    items: [
      {
        period: 'mar/2025 — atual',
        role: 'Desenvolvedor de software',
        org: 'Projetos próprios e para clientes',
        context: 'Aplicações web e automações de fluxos documentais com IA.',
        points: [
          'Desenvolvi aplicações web e automações com JavaScript e PostgreSQL, integrando IA para reduzir trabalho manual.',
          'Criei o MVP que automatiza e padroniza a minutagem de escrituras e atos públicos, com extração e análise de documentos por AI Vision.',
          'Participo de reuniões com clientes para levantar necessidades e apresentar soluções e propostas.',
        ],
        tags: ['JavaScript', 'PHP', 'PostgreSQL', 'TypeScript', 'Next.js', 'IA'],
      },
      {
        period: 'mar/2023 — mar/2025',
        role: 'Escrevente',
        org: 'Cartório de Notas e Registro Civil',
        context: 'Dois anos em todas as frentes da serventia: balcão, escrituras, rotinas administrativas e suporte de TI.',
        points: [
          'Orientei clientes sobre atos e procedimentos de forma didática, adaptando a comunicação a cada perfil.',
          'Resolvi demandas e reclamações com agilidade, revertendo conflitos em atendimentos concluídos.',
          'Aumentei a produtividade da equipe apoiando colegas na elaboração de atos e escrituras.',
        ],
      },
    ],
    // Formação: mesmo formato da trajetória, do mais recente para o mais antigo (fonte: CV)
    educationTitle: 'Formação',
    education: [
      { period: 'set/2026', title: 'Claude Code e MCP', org: 'Anthropic', type: 'Formação complementar', points: ['Claude Code 101', 'Claude Code in Action', 'Introduction to MCP'] },
      { period: '2026', title: 'Desenvolvimento com Claude Code', org: 'Clarify', type: 'Formação complementar' },
      { period: '2023 — 2025', title: 'Engenharia de Software', org: 'Graduação · incompleta', type: 'Graduação', points: ['2 anos cursados, trancado no fim de 2025'] },
      { period: 'nov/2025', title: 'Formação comercial', org: 'Vende-C', type: 'Formação complementar', points: ['Formação Vende-C', 'Fundamentos de Vendas'] },
      { period: 'fev/2021 — dez/2022', title: 'Técnico em Eletromecânica', org: 'SENAI/PR', type: 'Curso técnico' },
    ],
  },

  about: {
    eyebrow: 'Sobre',
    title: 'Sobre o *Felipe*',
    paragraphs: [
      'Comecei na área técnica, com formação em Eletromecânica pelo SENAI. Depois passei dois anos como escrevente em um cartório de Notas e Registro Civil, atendendo pessoas e elaborando atos e escrituras.',
      'Foi ali que vi de perto quanto trabalho manual existe em processos que poderiam ser simples. Hoje construo software e automações com IA, muitas vezes para esse mesmo tipo de problema.',
      'Também tenho formação comercial pela Vende-C. Gosto de conversar com quem vai usar a solução, entender a necessidade e apresentar a proposta com clareza.',
    ],
    facts: [
      { label: 'Idiomas', value: 'Português (nativo) · Inglês (avançado)' },
      { label: 'Interesses', value: 'Automação de processos, IA aplicada, sistemas para cartórios e pequenas empresas' },
    ],
    quote: 'Boas soluções nascem entre pessoas, negócio e tecnologia.',
    imageAlt: 'Felipe Wendler de camisa azul e óculos escuros, entre planos de concreto',
  },

  currently: {
    eyebrow: 'Agora',
    title: 'O que estou *explorando*',
    lead: 'Projetos e estudos em andamento.',
    items: [
      { title: 'Especificação com vários agentes', subtitle: 'Claude e Codex analisam os mesmos documentos; um consolidador separa consenso e conflitos. Na primeira rodada: 31 contradições, 5 ambiguidades e 6 decisões em aberto.', meta: 'método' },
      { title: 'Frameworks de agentes de IA', subtitle: 'AIOX e Claude Code aplicados a projetos reais, com sessões em paralelo e revisão cruzada.', meta: 'prática' },
      { title: 'Claude Code e MCP', subtitle: 'Cursos da Anthropic: Claude Code 101, Claude Code in Action e Introduction to MCP.', meta: 'estudo' },
      { title: 'Este portfólio', subtitle: 'React, Vite e Tailwind sobre o Design System F.Wendler.', meta: 'código', href: 'https://github.com/lipe-wendler/professional-portfolio' },
    ],
  },

  contact: {
    eyebrow: 'Contato',
    title: 'Tem um problema complexo? Vamos *resolver.*',
    lead: 'Estou aberto a novas oportunidades, projetos e boas conversas sobre tecnologia, produto e processos.',
    linkedin: 'Conectar no LinkedIn',
    github: 'Ver GitHub',
    words: ['People', 'Technology', 'Real impact'],
  },

  footer: {
    tagline: 'Soluções para problemas reais.',
    rights: 'Todos os direitos reservados.',
  },

  caseStudy: {
    back: 'Voltar aos projetos',
    context: 'Contexto',
    problem: 'Problema',
    approach: 'Abordagem',
    architecture: 'Como funciona',
    decisions: 'Decisões e trade-offs',
    deliveries: 'Entregas',
    result: 'Resultado',
    stack: 'Stack e práticas',
    branches: 'Branches',
    role: 'Papel',
    period: 'Período',
    area: 'Área',
    prev: 'Anterior',
    next: 'Próximo',
    ctaTitle: 'Quer conversar sobre um projeto *parecido?*',
  },

  notFound: {
    title: 'Página não *encontrada*',
    text: 'O endereço pode ter mudado. Volte para a página inicial.',
    back: 'Ir para o início',
  },

  projects: {
    'saas-notarial': {
      category: 'Sistema de gestão · Cartórios',
      title: 'SaaS Notarial',
      summary: 'Plataforma SaaS para cartórios: atos notariais, matrícula de imóveis, certidões e minutas com IA num só lugar.',
      problem: 'Fluxos notariais rígidos e cheios de exceções, com muito retrabalho manual na redação de escrituras e atos.',
      solution: 'Sistema web por módulos e um MVP que padroniza a minutagem de escrituras com extração de documentos por AI Vision.',
      result: 'Sete frentes entregues, autenticação auditada e o fluxo de minutas padronizado no MVP.',
      role: 'Levantamento, produto e engenharia',
      period: '2025 — atual',
      area: 'Serviços notariais e registrais',
      context:
        'Trabalhei dois anos como escrevente em um cartório de Notas e Registro Civil. Conheço por dentro o balcão, as escrituras e o retrabalho de redigir atos à mão. O SaaS Notarial nasce desse domínio: cada regra do sistema vem de um processo real.',
      problemLong:
        'Cartórios operam sob regras legais rígidas, com documentos que precisam ser exatos, rastreáveis e seguros. A redação de minutas depende de copiar dados de vários documentos, o que consome tempo e abre espaço para erro.',
      approach:
        'Evolução por fases e épicos, com análise completa do repositório, checklist de qualidade e o framework de agentes AIOX para acelerar as entregas mantendo o padrão.',
      architectureCaption: 'Mapa de módulos entregues',
      modules: [
        { title: 'Ata Notarial', text: 'Fluxo completo do ato ao documento', core: true },
        { title: 'Matrícula', text: 'Registro de imóveis em entregas incrementais', core: true },
        { title: 'Minutas com IA', text: 'Extração e análise de documentos por AI Vision', core: true },
        { title: 'Certidões (CND)', text: 'Helpers reutilizáveis entre módulos' },
        { title: 'Autenticação', text: 'Auditoria de segurança do acesso' },
        { title: 'Experiência (UX)', text: 'Telas de operação revisadas' },
        { title: 'Onboarding', text: 'Documentação e checklist para novos devs' },
      ],
      decisions: [
        'Épicos incrementais em vez de um módulo grande: a Matrícula foi dividida em entregas menores, validadas uma a uma.',
        'Helpers de certidões (CND) reutilizáveis, mantidos junto do código que os usa.',
        'Segurança antes de escalar: a autenticação passou por auditoria já na fase 2.',
      ],
      deliveries: [
        'Módulo de **Ata Notarial**, do fluxo ao documento',
        'Épico de **Matrícula** de imóveis, em entregas incrementais',
        'MVP de **minutagem com AI Vision**: extração e análise de documentos para padronizar escrituras e atos',
        'Helpers de **CND** (certidões negativas) reutilizáveis',
        '**Auditoria de segurança** da autenticação',
        'Revisão de **UX** das telas de operação',
        'Reorganização do **onboarding** de desenvolvedores',
      ],
    },

    'fechamento-contabil': {
      category: 'Automação com IA · Contabilidade',
      title: 'Fechamento contábil com IA',
      summary: 'Automações com IA que fecham o mês de empresas do Simples Nacional: despesas, receitas e o pacote do contador.',
      problem: 'Extratos, faturas, notas e guias organizados à mão todo mês, com risco de erro e de documento faltando.',
      solution: 'Três automações com IA sobre um padrão único de pastas, com as regras fiscais embutidas e conferência automática.',
      result: 'Fechamento mensal padronizado, com as pendências apontadas antes do envio ao contador.',
      role: 'Desenho do processo e automação',
      period: '2026',
      area: 'Contabilidade · Simples Nacional',
      context:
        'Empresas no Simples Nacional precisam entregar ao contador, todo mês, um pacote completo e conferido. O trabalho era manual e dependia de lembrar as regras fiscais a cada fechamento.',
      problemLong:
        'Faturas de cartão que fecham no meio do mês, compras internacionais com câmbio e IOF, notas sem comprovante: pequenos detalhes que, feitos à mão, viram erro ou retrabalho.',
      approach:
        'Primeiro padronizei a organização: uma pasta por mês, com subpastas numeradas por tipo de documento. Depois criei uma automação para cada etapa, com as regras fiscais explícitas.',
      architectureCaption: 'Fluxo do fechamento',
      steps: [
        { title: 'Documentos', text: 'extratos · faturas · NFs' },
        { title: 'Automações de IA', text: 'regras fiscais', tone: 'dark' },
        { title: 'Planilhas', text: 'despesas · receitas' },
        { title: 'Conferência', text: 'pendências' },
        { title: 'Contador', text: 'pacote + índice', tone: 'accent' },
      ],
      decisions: [
        'Regime de competência: a despesa entra no mês da compra, não no mês em que a fatura é paga.',
        'Recorte da fatura por mês-calendário, para uma fatura que fecha no meio do mês não misturar competências.',
        'Conferir e relatar, nunca bloquear: as pendências são listadas e a decisão de enviar fica com a pessoa.',
      ],
      deliveries: [
        '**Despesas:** planilha por competência, com câmbio e IOF em compras internacionais',
        '**Receitas:** controle anual por nota fiscal, separação por Anexo, Fator R e limites do Simples',
        '**Pacote do contador:** conferência de pendências, índice de envio e arquivo compactado',
      ],
    },

    'restaurante-manager': {
      category: 'Sistema de gestão · Food service',
      title: 'Restaurante Manager',
      summary: 'Gestão de restaurante com controle de estoque confiável mesmo nos horários de pico.',
      problem: 'Pedidos simultâneos geravam baixas inconsistentes no estoque de bebidas: uma race condition.',
      solution: 'Diagnóstico da concorrência e correção da lógica de baixa na causa raiz.',
      result: 'Estoque consistente mesmo com pedidos em paralelo.',
      role: 'Diagnóstico e correção',
      period: '2026',
      area: 'Food service · Estoque',
      stack: ['Concorrência', 'Integridade de dados', 'Debugging'],
      context:
        'Em um restaurante, vários pedidos chegam ao mesmo tempo nos horários de pico. Cada pedido dá baixa no estoque, e o saldo precisa refletir a realidade para compras e controle.',
      problemLong:
        'Quando dois pedidos liam o mesmo saldo antes de gravar a baixa, uma das baixas se perdia. O estoque do sistema deixava de bater com o físico, sem erro aparente.',
      approach:
        'Reproduzi o cenário de pedidos simultâneos, identifiquei o ponto em que as leituras do saldo se cruzavam e corrigi a lógica para que cada baixa considere o saldo já atualizado.',
      architectureCaption: 'Dois pedidos ao mesmo tempo (exemplo ilustrativo)',
      concurrency: {
        before: { title: 'Antes', lines: ['Pedido A lê saldo: 10', 'Pedido B lê saldo: 10', 'A grava 9 · B grava 9'], outcome: 'Saldo 9 (deveria ser 8)' },
        after: { title: 'Depois', lines: ['Pedido A dá baixa: 10 → 9', 'Pedido B dá baixa: 9 → 8', 'Cada baixa usa o saldo atual'], outcome: 'Saldo 8, correto' },
      },
      decisions: [
        'Corrigir a causa (a leitura e a gravação do saldo), não o sintoma (ajustes manuais de estoque).',
        'Reproduzir o problema antes de corrigir, para ter certeza de que a correção resolve o cenário real.',
      ],
      deliveries: [
        'Diagnóstico da **race condition** na baixa de estoque',
        'Correção da lógica de baixa com **integridade** sob concorrência',
      ],
    },
  },
}
