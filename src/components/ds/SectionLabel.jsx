/**
 * SectionLabel (DS): rótulo de seção em Space Mono, CAIXA ALTA.
 * - number: vira "02" em accent-text (índice da seção)
 * - bar: barra amarela curta à esquerda (abre o hero)
 */
export default function SectionLabel({ children, number, bar, className = '' }) {
  return (
    <div className={`fw-eyebrow ${className}`}>
      {bar && <span className="fw-eyebrow-bar" aria-hidden="true" />}
      {number != null && <span className="fw-eyebrow-num">{String(number).padStart(2, '0')}</span>}
      <span>{children}</span>
    </div>
  )
}
