import { Link, useParams } from 'react-router'
import { links, projectMeta, projectOrder } from '../content/shared'
import { useLanguage, useDocumentTitle } from '../i18n/LanguageProvider'
import ProjectCover from '../components/case/ProjectCover'
import ProjectFigure from '../components/case/ProjectFigure'
import { BrandIcon, Button, Icon, SectionLabel, Tag } from '../components/ds'
import Highlight from '../components/Highlight'
import RichText from '../components/RichText'
import NotFound from './NotFound'

/**
 * Página individual de projeto (/work/:slug): o aprofundamento que o card da
 * home não mostra — contexto, abordagem, diagrama, decisões e entregas.
 * Celular: blocos empilhados. lg+: rótulo à esquerda, conteúdo à direita.
 */
function Block({ label, children }) {
  return (
    <section className="grid gap-3 border-t border-line py-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10 lg:py-10">
      <h2 className="t-meta pt-1 text-ink-muted uppercase">{label}</h2>
      <div className="min-w-0">{children}</div>
    </section>
  )
}

export default function CaseStudy() {
  const { slug } = useParams()
  const { t } = useLanguage()
  const p = t.projects[slug]
  const meta = projectMeta[slug]
  useDocumentTitle(p ? `${p.title} · Felipe Wendler` : t.meta.title)

  if (!p || !meta) return <NotFound />

  const c = t.caseStudy
  const index = projectOrder.indexOf(slug)
  const prev = projectOrder[(index - 1 + projectOrder.length) % projectOrder.length]
  const next = projectOrder[(index + 1) % projectOrder.length]
  const stack = p.stack || meta.stack

  return (
    <article className="container-page py-10 lg:py-16">
      <Link to="/#work" className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink">
        <Icon name="arrow-left" size="sm" />
        {c.back}
      </Link>

      {/* Cabeçalho do case */}
      <header className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-12">
        <div className="grid gap-4">
          <SectionLabel number={index + 1}>{p.category}</SectionLabel>
          <h1 className="t-h1">{p.title}</h1>
          <p className="t-body-lg text-ink-muted">{p.summary}</p>
          <dl className="mt-2 grid gap-3 border-t border-line pt-4 sm:grid-cols-3">
            {[
              [c.role, p.role],
              [c.period, p.period],
              [c.area, p.area],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="t-meta text-ink-muted uppercase">{label}</dt>
                <dd className="t-small m-0 mt-1 text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="overflow-hidden rounded-lg border border-line">
          <ProjectCover type={meta.cover} label={p.title} />
        </div>
      </header>

      <div className="mt-12">
        <Block label={c.context}>
          <p className="t-body-lg text-ink">{p.context}</p>
        </Block>
        <Block label={c.problem}>
          <p className="text-ink-muted">{p.problemLong}</p>
        </Block>
        <Block label={c.approach}>
          <p className="text-ink-muted">{p.approach}</p>
        </Block>
        <Block label={c.architecture}>
          <ProjectFigure type={meta.figure} project={p} />
        </Block>
        <Block label={c.decisions}>
          <ul className="grid gap-3">
            {p.decisions.map((d) => (
              <li key={d} className="relative pl-5 text-ink-muted">
                <span aria-hidden="true" className="absolute top-2.5 left-0 size-1.5 rounded-[2px] bg-accent" />
                {d}
              </li>
            ))}
          </ul>
        </Block>
        <Block label={c.deliveries}>
          <ul className="grid gap-2.5">
            {p.deliveries.map((d) => (
              <li key={d} className="relative pl-6 text-ink-muted">
                <Icon name="check" size="sm" className="absolute top-1 left-0 text-accent-text" />
                <RichText text={d} />
              </li>
            ))}
          </ul>
        </Block>
        <Block label={c.result}>
          <p className="t-h3 text-ink">{p.result}</p>
        </Block>
        <Block label={c.stack}>
          <ul className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <li key={s}>
                <Tag>{s}</Tag>
              </li>
            ))}
          </ul>
          {meta.branches && (
            <div className="mt-5 grid gap-2">
              <p className="t-meta text-ink-muted uppercase">{c.branches}</p>
              <ul className="flex flex-wrap gap-1.5">
                {meta.branches.map((b) => (
                  <li key={b}>
                    <Tag size="sm" system>⎇ {b}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Block>
      </div>

      {/* Navegação entre cases */}
      <nav aria-label="Cases" className="mt-4 grid gap-3 border-t border-line pt-8 sm:grid-cols-2">
        {[
          [c.prev, prev, 'arrow-left'],
          [c.next, next, 'arrow-right'],
        ].map(([label, target, icon], i) => (
          <Link
            key={label}
            to={`/work/${target}`}
            className={`fw-card-link grid gap-1 rounded-md border border-line bg-surface p-4 transition-colors hover:border-ink ${i === 1 ? 'sm:text-right' : ''}`}
          >
            <span className={`t-meta inline-flex items-center gap-1.5 text-ink-muted uppercase ${i === 1 ? 'sm:justify-end' : ''}`}>
              {i === 0 && <Icon name={icon} size="sm" />}
              {label}
              {i === 1 && <Icon name={icon} size="sm" />}
            </span>
            <span className="font-display text-lg font-bold text-ink">{t.projects[target].title}</span>
          </Link>
        ))}
      </nav>

      {/* CTA */}
      <div className="mt-12 grid gap-5 rounded-lg border border-line bg-surface p-6 sm:p-8 md:flex md:items-center md:justify-between">
        <h2 className="t-h3">
          <Highlight text={c.ctaTitle} />
        </h2>
        <Button href={links.linkedin} leading={<BrandIcon name="linkedin" />}>
          {t.contact.linkedin}
        </Button>
      </div>
    </article>
  )
}
