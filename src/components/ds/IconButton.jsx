import Icon from './Icon'

/**
 * IconButton (DS): botão circular só com ícone. `label` é obrigatório
 * (vira aria-label e title). Com `href`, vira link externo.
 * `children` substitui o ícone (ex.: logo do LinkedIn).
 */
export default function IconButton({ icon, label, tone, size, href, className = '', children, ...rest }) {
  const cls = ['fw-iconbtn', tone === 'accent' && 'fw-iconbtn-accent', size && size !== 'md' && `fw-iconbtn-${size}`, className]
    .filter(Boolean)
    .join(' ')
  const inner = children || <Icon name={icon || 'arrow-right'} />
  if (href) {
    return (
      <a href={href} className={cls} aria-label={label} title={label} target="_blank" rel="noopener noreferrer" {...rest}>
        {inner}
      </a>
    )
  }
  return (
    <button type="button" className={cls} aria-label={label} title={label} {...rest}>
      {inner}
    </button>
  )
}
