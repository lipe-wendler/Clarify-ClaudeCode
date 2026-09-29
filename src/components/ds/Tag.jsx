/**
 * Tag (DS): pílula para tecnologias e temas.
 * - size="sm" dentro de cards; system: Space Mono em caixa alta (tags técnicas)
 * - selected: destaque em amarelo; onClick transforma em botão com aria-pressed
 */
export default function Tag({ children, size, selected, system, onClick, className = '' }) {
  const cls = ['fw-tag', size === 'sm' && 'fw-tag-sm', system && 'fw-tag-system', selected && !onClick && 'fw-tag-selected', className]
    .filter(Boolean)
    .join(' ')
  if (onClick) {
    return (
      <button type="button" className={cls} aria-pressed={selected ? 'true' : 'false'} onClick={onClick}>
        {children}
      </button>
    )
  }
  return <span className={cls}>{children}</span>
}
