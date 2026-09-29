import Icon from './Icon'

/**
 * ListRow (DS): linha de lista com título, subtítulo e seta.
 * Com `href` vira link (hover em surface-raised); sem, é uma linha estática.
 * `meta` mostra um rótulo técnico à direita (Space Mono).
 */
export default function ListRow({ title, subtitle, meta, href, leading }) {
  const inner = (
    <>
      {leading}
      <span className="fw-listrow-text">
        <span className="fw-listrow-title">{title}</span>
        {subtitle && <span className="fw-listrow-sub">{subtitle}</span>}
      </span>
      {meta && <span className="t-meta hidden text-ink-muted sm:inline">{meta}</span>}
      {href && (
        <span className="fw-iconbtn fw-iconbtn-sm" aria-hidden="true">
          <Icon name="arrow-right" size="sm" />
        </span>
      )}
    </>
  )
  if (href) {
    const external = /^https?:/.test(href)
    return (
      <a className="fw-listrow" href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {inner}
      </a>
    )
  }
  return <div className="fw-listrow">{inner}</div>
}
