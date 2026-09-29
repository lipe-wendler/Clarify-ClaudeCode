/*
 * English copy. Same shape as pt.js (see the conventions there):
 * *word* in a title = yellow highlight; **text** in a paragraph = bold emphasis.
 */
export default {
  lang: 'en',
  meta: {
    title: 'Felipe Wendler · Portfolio',
    description:
      'Portfolio of Felipe Wendler (F.Wendler): management systems, automations and AI integrations for real business problems.',
  },

  nav: {
    work: 'Work',
    experience: 'Experience',
    about: 'About',
    contact: 'Contact',
    cta: "Let's talk",
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    language: 'Language',
    skip: 'Skip to content',
  },

  hero: {
    eyebrow: 'Product · Automation · AI',
    manifesto: ['Understanding people.', 'Connecting technology.', 'Solving *problems.*'],
    role: 'Software developer · JavaScript, PHP and AI',
    summary:
      'I build systems, automations and AI integrations for real business problems. I came from the front desk of a notary office, so I understand the process before I write the code.',
    primary: 'See my work',
    words: ['Ideas', 'Systems', 'People', 'Progress'],
    imageAlt: 'Felipe Wendler smiling in a tan jacket, in front of concrete planes and a yellow sun',
  },

  proof: {
    label: 'Hands-on experience in numbers',
    items: [
      { key: 'dev', unit: 'years', label: 'building web apps and AI automations, since Mar 2025' },
      { value: '2', unit: 'years', label: 'at a notary and civil registry office, from front desk to deeds' },
      { value: '7', unit: 'workstreams', label: 'delivered in SaaS Notarial, from notarial acts to AI Vision' },
      { value: '3', unit: 'automations', label: 'with AI for the monthly accounting close' },
    ],
  },

  work: {
    eyebrow: 'Work',
    title: 'Selected *work*',
    lead: 'Three projects that show how I connect people, processes and technology.',
    problem: 'Problem',
    solution: 'Solution',
    result: 'Result',
    role: 'My role',
    viewCase: 'View case study',
  },

  process: {
    eyebrow: 'Method',
    title: 'How I *think* and work',
    lead: 'A practical path from a complex problem to a simple, effective solution.',
    labels: { goal: 'Goal', activity: 'How', output: 'Output' },
    steps: [
      { title: 'Understand', goal: 'Know which problem to solve, and for whom.', activity: 'Talking to users, watching the real workflow, its rules and exceptions.', output: 'A clear problem and success criteria.' },
      { title: 'Structure', goal: 'Turn the problem into a plan.', activity: 'Specification, priorities and cross-review with AI agents.', output: 'Scope, flow and recorded decisions.' },
      { title: 'Build', goal: 'Deliver value fast, with quality.', activity: 'Short, AI-assisted development cycles with tests.', output: 'Working software in small increments.' },
      { title: 'Measure', goal: 'Know whether it really solved the problem.', activity: 'Validation with users, automated checks and feedback.', output: 'Evidence of what works and what is missing.' },
      { title: 'Improve', goal: 'Evolve what already works.', activity: 'Adjustments, automating repetitive steps and documentation.', output: 'A system that is simpler to use and maintain.' },
    ],
  },

  capabilities: {
    eyebrow: 'Capabilities',
    title: 'What I *deliver*',
    lead: 'Technical and product capabilities to solve the problem end to end. Technologies appear as evidence.',
    items: [
      { icon: 'code', title: 'Product Engineering', description: 'Complete web applications: interface, back end, database and deployment.', tags: ['JavaScript', 'PHP', 'TypeScript', 'Next.js', 'PostgreSQL', 'React'] },
      { icon: 'zap', title: 'AI & Automation', description: 'AI applied to real workflows: document extraction, agents and automations that cut manual work.', tags: ['AI Vision', 'Claude Code', 'Codex', 'AIOX', 'Automations'] },
      { icon: 'database', title: 'Systems & Integrations', description: 'Reliable internal systems and integrations, with care for data, concurrency and security.', tags: ['APIs', 'Document workflows', 'Concurrency', 'Authentication'] },
      { icon: 'users', title: 'Product & Problem Solving', description: 'From client discovery to specification: understand the need and propose the right solution.', tags: ['Discovery', 'Consultative service', 'Specification', 'UX'] },
    ],
  },

  experience: {
    eyebrow: 'Experience',
    title: 'Trajectory',
    lead: 'From serving the public at a notary office to building software for that same domain.',
    current: 'present',
    items: [
      {
        period: 'Mar 2025 — present',
        role: 'Software developer',
        org: 'Own and client projects',
        context: 'Web applications and document-workflow automations with AI.',
        points: [
          'Built web applications and automations with JavaScript and PostgreSQL, integrating AI to reduce manual work.',
          'Created the MVP that automates and standardizes the drafting of deeds and public acts, with document extraction and analysis by AI Vision models.',
          'Take part in client meetings to gather needs and present solutions and proposals.',
        ],
        tags: ['JavaScript', 'PHP', 'PostgreSQL', 'TypeScript', 'Next.js', 'AI'],
      },
      {
        period: 'Mar 2023 — Mar 2025',
        role: 'Notary clerk (Escrevente)',
        org: 'Notary and civil registry office',
        context: 'Two years across every area of the office: front desk, deeds, administrative routines and IT support.',
        points: [
          'Guided clients through notarial acts and procedures, adapting the explanation to each person.',
          'Resolved requests and complaints quickly, turning conflicts into completed services.',
          'Raised team productivity by helping colleagues draft acts and deeds.',
        ],
      },
    ],
    // Education: same format as the trajectory, newest first (source: CV)
    educationTitle: 'Education',
    education: [
      { period: 'Sep 2026', title: 'Claude Code and MCP', org: 'Anthropic', type: 'Complementary training', points: ['Claude Code 101', 'Claude Code in Action', 'Introduction to MCP'] },
      { period: '2026', title: 'Development with Claude Code', org: 'Clarify', type: 'Complementary training' },
      { period: '2023 — 2025', title: 'Software Engineering', org: "Bachelor's degree · incomplete", type: "Bachelor's degree", points: ['2 years completed, paused at the end of 2025'] },
      { period: 'Nov 2025', title: 'Sales training', org: 'Vende-C', type: 'Complementary training', points: ['Vende-C sales program', 'Sales Fundamentals'] },
      { period: 'Feb 2021 — Dec 2022', title: 'Electromechanics Technician', org: 'SENAI/PR', type: 'Technical degree' },
    ],
  },

  about: {
    eyebrow: 'About',
    title: 'About *Felipe*',
    paragraphs: [
      'I started on the technical side, as an Electromechanics Technician trained at SENAI. Then I spent two years as a clerk at a notary and civil registry office, serving people and drafting acts and deeds.',
      'That is where I saw how much manual work hides in processes that could be simple. Today I build software and AI automations, often for that same kind of problem.',
      'I also have sales training from Vende-C. I like talking to the people who will use a solution, understanding what they need and presenting the proposal clearly.',
    ],
    facts: [
      { label: 'Languages', value: 'Portuguese (native) · English (advanced)' },
      { label: 'Interests', value: 'Process automation, applied AI, systems for notary offices and small businesses' },
    ],
    quote: 'Great solutions happen where people, business and technology meet.',
    imageAlt: 'Felipe Wendler in a blue shirt and sunglasses, between concrete planes',
  },

  currently: {
    eyebrow: 'Now',
    title: "What I'm *exploring*",
    lead: 'Projects and studies in progress.',
    items: [
      { title: 'Multi-agent specification', subtitle: 'Claude and Codex review the same documents; a consolidator separates agreement from conflict. First round: 31 contradictions, 5 ambiguities and 6 open decisions.', meta: 'method' },
      { title: 'AI agent frameworks', subtitle: 'AIOX and Claude Code applied to real projects, with parallel sessions and cross-review.', meta: 'practice' },
      { title: 'Claude Code and MCP', subtitle: 'Anthropic courses: Claude Code 101, Claude Code in Action and Introduction to MCP.', meta: 'study' },
      { title: 'This portfolio', subtitle: 'React, Vite and Tailwind on top of the F.Wendler Design System.', meta: 'code', href: 'https://github.com/lipe-wendler/Clarify-ClaudeCode' },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: "Have a complex problem? Let's *solve* it.",
    lead: "I'm open to new opportunities, interesting projects and good conversations about technology, product and processes.",
    linkedin: 'Connect on LinkedIn',
    github: 'See GitHub',
    words: ['People', 'Technology', 'Real impact'],
  },

  footer: {
    tagline: 'Building solutions for real problems.',
    rights: 'All rights reserved.',
  },

  caseStudy: {
    back: 'Back to work',
    context: 'Context',
    problem: 'Problem',
    approach: 'Approach',
    architecture: 'How it works',
    decisions: 'Decisions and trade-offs',
    deliveries: 'Deliverables',
    result: 'Result',
    stack: 'Stack and practices',
    branches: 'Branches',
    role: 'Role',
    period: 'Period',
    area: 'Area',
    prev: 'Previous',
    next: 'Next',
    ctaTitle: 'Want to talk about a *similar* project?',
  },

  notFound: {
    title: 'Page not *found*',
    text: 'The address may have changed. Head back to the home page.',
    back: 'Go to home',
  },

  projects: {
    'saas-notarial': {
      category: 'Management system · Notary offices',
      title: 'SaaS Notarial',
      summary: 'A SaaS platform for notary offices: notarial acts, property registration, certificates and AI-assisted drafts in one place.',
      problem: 'Rigid notarial workflows full of exceptions, with a lot of manual rework when drafting deeds and acts.',
      solution: 'A modular web system plus an MVP that standardizes deed drafting with document extraction by AI Vision.',
      result: 'Seven workstreams delivered, audited authentication and a standardized drafting flow in the MVP.',
      role: 'Discovery, product and engineering',
      period: '2025 — present',
      area: 'Notary and registry services',
      context:
        'I worked for two years as a clerk at a notary and civil registry office. I know the front desk, the deeds and the rework of drafting acts by hand from the inside. SaaS Notarial comes from that domain: every rule in the system comes from a real process.',
      problemLong:
        'Notary offices work under strict legal rules, with documents that must be exact, traceable and secure. Drafting depends on copying data from several documents, which takes time and invites errors.',
      approach:
        'Phased delivery through epics, with a full repository review, a quality checklist and the AIOX agent framework to speed up delivery while keeping the standard.',
      architectureCaption: 'Map of delivered modules',
      modules: [
        { title: 'Notarial minutes', text: 'Full flow from act to document', core: true },
        { title: 'Property registry', text: 'Delivered in incremental steps', core: true },
        { title: 'AI drafting', text: 'Document extraction and analysis with AI Vision', core: true },
        { title: 'Certificates (CND)', text: 'Helpers reused across modules' },
        { title: 'Authentication', text: 'Security audit of access' },
        { title: 'Experience (UX)', text: 'Operation screens reviewed' },
        { title: 'Onboarding', text: 'Docs and checklist for new devs' },
      ],
      decisions: [
        'Incremental epics instead of one large module: the property registry was split into smaller deliveries, validated one by one.',
        'Reusable certificate (CND) helpers, kept next to the code that uses them.',
        'Security before scale: authentication was audited as early as phase 2.',
      ],
      deliveries: [
        '**Notarial minutes** module, from flow to document',
        '**Property registry** epic, delivered incrementally',
        '**AI Vision drafting** MVP: document extraction and analysis to standardize deeds and acts',
        'Reusable **CND** (clearance certificate) helpers',
        '**Security audit** of authentication',
        '**UX** review of operation screens',
        'Developer **onboarding** reorganized',
      ],
    },

    'fechamento-contabil': {
      category: 'AI automation · Accounting',
      title: 'AI accounting close',
      summary: 'AI automations that close the month for small businesses under Brazil’s Simples Nacional tax regime: expenses, revenue and the accountant’s package.',
      problem: 'Bank statements, card bills, invoices and tax slips were organized by hand every month, with room for errors and missing documents.',
      solution: 'Three AI automations on top of a single folder standard, with tax rules built in and automatic checks.',
      result: 'A standardized monthly close, with gaps flagged before anything goes to the accountant.',
      role: 'Process design and automation',
      period: '2026',
      area: 'Accounting · Simples Nacional',
      context:
        'Businesses under Simples Nacional must hand their accountant a complete, checked package every month. The work was manual and depended on remembering tax rules at every close.',
      problemLong:
        'Card bills that close mid-month, international purchases with exchange rates and IOF tax, invoices without receipts: small details that turn into errors or rework when done by hand.',
      approach:
        'First I standardized the organization: one folder per month, with numbered subfolders per document type. Then I built one automation per step, with the tax rules made explicit.',
      architectureCaption: 'Closing flow',
      steps: [
        { title: 'Documents', text: 'statements · bills · invoices' },
        { title: 'AI automations', text: 'tax rules', tone: 'dark' },
        { title: 'Spreadsheets', text: 'expenses · revenue' },
        { title: 'Checks', text: 'open items' },
        { title: 'Accountant', text: 'package + index', tone: 'accent' },
      ],
      decisions: [
        'Accrual basis: an expense belongs to the month of purchase, not the month the card bill is paid.',
        'Card bills are split by calendar month, so a bill that closes mid-month never mixes periods.',
        'Check and report, never block: open items are listed and the decision to send stays with the person.',
      ],
      deliveries: [
        '**Expenses:** accrual-basis spreadsheet, with exchange rate and IOF on international purchases',
        '**Revenue:** yearly control by invoice, split by tax annex, Fator R and Simples limits',
        '**Accountant package:** open-item checks, delivery index and a compressed archive',
      ],
    },

    'restaurante-manager': {
      category: 'Management system · Food service',
      title: 'Restaurant Manager',
      summary: 'Restaurant management with inventory you can trust, even at peak hours.',
      problem: 'Simultaneous orders caused inconsistent stock deductions for drinks: a race condition.',
      solution: 'Diagnosed the concurrency issue and fixed the deduction logic at its root cause.',
      result: 'Consistent inventory even with orders running in parallel.',
      role: 'Diagnosis and fix',
      period: '2026',
      area: 'Food service · Inventory',
      stack: ['Concurrency', 'Data integrity', 'Debugging'],
      context:
        'At peak hours, many orders reach a restaurant at the same time. Each one deducts stock, and the balance must reflect reality for purchasing and control.',
      problemLong:
        'When two orders read the same balance before saving their deduction, one deduction was lost. The system stock drifted away from the physical stock, with no visible error.',
      approach:
        'I reproduced the simultaneous-order scenario, found where the balance reads overlapped and fixed the logic so each deduction works on the already updated balance.',
      architectureCaption: 'Two orders at the same time (illustrative example)',
      concurrency: {
        before: { title: 'Before', lines: ['Order A reads balance: 10', 'Order B reads balance: 10', 'A saves 9 · B saves 9'], outcome: 'Balance 9 (should be 8)' },
        after: { title: 'After', lines: ['Order A deducts: 10 → 9', 'Order B deducts: 9 → 8', 'Each deduction uses the current balance'], outcome: 'Balance 8, correct' },
      },
      decisions: [
        'Fix the cause (how the balance is read and written), not the symptom (manual stock adjustments).',
        'Reproduce the problem before fixing it, to be sure the fix covers the real scenario.',
      ],
      deliveries: [
        'Diagnosis of the **race condition** in stock deduction',
        'Deduction logic fixed to keep **integrity** under concurrency',
      ],
    },
  },
}
