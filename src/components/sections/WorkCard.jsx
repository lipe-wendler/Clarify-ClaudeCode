import { Link } from 'react-router'
import { projectMeta } from '../../content/shared'
import { useLanguage } from '../../i18n/LanguageProvider'
import ProjectCover from '../case/ProjectCover'
import { Icon, Tag } from '../ds'

/**
 * Card de projeto da home, construído sobre o ProjectCard do DS (fw-card):
 * capa 16:9, kicker, título, Problema/Solução/Resultado, papel, até 3 tags e
 * o link para o case. Mostra só o suficiente para justificar o clique.
 */
export default function WorkCard({ slug, index }) {
  const { t } = useLanguage()
  const p = t.projects[slug]
  const stack = (p.stack || projectMeta[slug].stack).slice(0, 3)
  const href = `/work/${slug}`

  return (
    <article className="fw-card group" aria-labelledby={`card-${slug}`}>
      <div className="fw-card-media aspect-video">
        <ProjectCover type={projectMeta[slug].cover} label={p.title} />
      </div>
      <p className="fw-card-kicker">
        <span className="text-accent-text">{String(index + 1).padStart(2, '0')}</span> {p.category}
      </p>
      <h3 id={`card-${slug}`} className="fw-card-title">
        <Link to={href} className="fw-card-link rounded-sm hover:text-accent-text">
          {p.title}
        </Link>
      </h3>

      <dl className="mt-1 grid gap-2.5">
        {[
          [t.work.problem, p.problem],
          [t.work.solution, p.solution],
          [t.work.result, p.result],
        ].map(([label, text]) => (
          <div key={label}>
            <dt className="t-meta text-accent-text uppercase">{label}</dt>
            <dd className="fw-card-body m-0">{text}</dd>
          </div>
        ))}
        <div>
          <dt className="t-meta text-ink-muted uppercase">{t.work.role}</dt>
          <dd className="fw-card-body m-0 text-ink">{p.role}</dd>
        </div>
      </dl>

      <div className="fw-card-foot flex-wrap">
        <ul className="flex flex-wrap gap-1" aria-label="Stack">
          {stack.map((s) => (
            <li key={s}>
              <Tag size="sm">{s}</Tag>
            </li>
          ))}
        </ul>
        <Link to={href} className="fw-card-link inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold text-accent-text">
          {t.work.viewCase}
          <Icon name="arrow-right" size="sm" className="transition-transform group-hover:translate-x-0.5" />
          <span className="sr-only">: {p.title}</span>
        </Link>
      </div>
    </article>
  )
}
