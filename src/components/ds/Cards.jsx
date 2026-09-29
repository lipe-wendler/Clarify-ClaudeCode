import Icon from './Icon'
import Tag from './Tag'

/**
 * Cards do DS: FeatureCard e QuoteCard.
 * (O card de projeto é específico do portfólio: src/components/sections/WorkCard.jsx,
 * construído com as mesmas classes fw-card do DS.)
 */

/** FeatureCard: ícone de destaque, kicker, título, descrição e tags de evidência. */
export function FeatureCard({ icon = 'box', kicker, title, description, tags = [] }) {
  return (
    <article className="fw-card">
      <Icon name={icon} size="lg" className="fw-card-icon" />
      {kicker && <div className="fw-card-kicker mt-2">{kicker}</div>}
      <h3 className="fw-card-title">{title}</h3>
      {description && <p className="fw-card-body">{description}</p>}
      {tags.length > 0 && (
        <ul className="fw-card-foot flex-wrap justify-start gap-1.5" aria-label="Evidências">
          {tags.map((t) => (
            <li key={t}>
              <Tag size="sm">{t}</Tag>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

/** QuoteCard: frase curta (até ~12 palavras) com autoria real. */
export function QuoteCard({ children, author, className = '' }) {
  return (
    <figure className={`fw-card m-0 ${className}`}>
      <span className="fw-quote-mark" aria-hidden="true">“</span>
      <blockquote className="fw-quote-text m-0">{children}</blockquote>
      {author && <figcaption className="fw-quote-by">{author}</figcaption>}
    </figure>
  )
}
