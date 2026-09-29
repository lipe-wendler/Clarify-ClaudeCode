/*
 * Dados que não mudam com o idioma: links, imagens, datas e a estrutura dos
 * projetos (slug, stack, diagramas, branches). Os textos ficam em pt.js/en.js.
 */

export const links = {
  linkedin: 'https://www.linkedin.com/in/felipe-wendler/',
  github: 'https://github.com/lipe-wendler',
}

/**
 * Imagens da marca (fotos já compostas com a arquitetura F.Wendler).
 * `mobile` é um recorte vertical centrado na pessoa, usado abaixo de 768px.
 * width/height evitam salto de layout enquanto a imagem carrega.
 */
export const images = {
  hero: { src: '/images/hero.webp', width: 1774, height: 887, mobile: { src: '/images/hero-mobile.webp', width: 800, height: 887 } },
  about: { src: '/images/about.webp', width: 2000, height: 666, mobile: { src: '/images/about-mobile.webp', width: 580, height: 666 } },
  cta: { src: '/images/cta.webp', width: 2000, height: 668 },
}

/** Início da carreira como desenvolvedor (CV): usado para calcular o tempo de experiência. */
export const developerSince = '2025-03'

/** Ordem dos projetos em destaque (Selected Work) e das páginas de case. */
export const projectOrder = ['saas-notarial', 'fechamento-contabil', 'restaurante-manager']

/**
 * Estrutura de cada projeto. Os textos correspondentes ficam em
 * content[lang].projects[slug].
 * - stack: tecnologias e práticas (as 3 primeiras aparecem no card da home)
 * - cover: composição de capa (ProjectCover.jsx)
 * - figure: diagrama da página do case (ProjectFigure.jsx)
 * - branches: branches reais do Git, como evidência do trabalho
 */
export const projectMeta = {
  'saas-notarial': {
    stack: ['JavaScript', 'PostgreSQL', 'AI Vision', 'AIOX', 'Claude Code'],
    cover: 'modules',
    figure: 'modules',
    branches: ['epic/matricula', 'mnt/cnd-helpers', 'chore/reorg-onboarding'],
  },
  'fechamento-contabil': {
    stack: ['Claude (skills)', 'Excel', 'PowerShell', 'Simples Nacional'],
    cover: 'steps',
    figure: 'steps',
  },
  'restaurante-manager': {
    stack: ['Concorrência', 'Integridade de dados', 'Debugging'],
    cover: 'concurrency',
    figure: 'concurrency',
  },
}

/** Anos (com uma casa decimal) desde uma data "AAAA-MM" até hoje. */
export function yearsSince(yyyyMm, now = new Date()) {
  const [y, m] = yyyyMm.split('-').map(Number)
  const months = (now.getFullYear() - y) * 12 + (now.getMonth() + 1 - m)
  return Math.max(0, Math.floor((months / 12) * 2) / 2) // arredonda para baixo em meio ano: 1, 1.5, 2...
}
