import { Link } from 'react-router'
import Icon from './Icon'

/**
 * Button (DS): botão pill. Um `primary` por bloco, rótulo com verbo primeiro.
 * - variant: primary | secondary | outline | ghost
 * - size: sm | md | lg
 * - arrow: seta à direita (desliza 2px no hover); use quando leva a outro lugar
 * - href externo vira <a target=_blank>; `to` usa o roteador (link interno)
 * - iconLeft / icon: nome de <Icon>; `leading` aceita qualquer nó (ex.: logo)
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  arrow,
  icon,
  iconLeft,
  leading,
  href,
  to,
  className = '',
  children,
  ...rest
}) {
  const cls = ['fw-btn', `fw-btn-${variant}`, size !== 'md' && `fw-btn-${size}`, className].filter(Boolean).join(' ')
  const content = (
    <>
      {leading}
      {iconLeft && <Icon name={iconLeft} />}
      {children}
      {arrow ? <Icon name="arrow-right" className="fw-btn-arrow" /> : icon && <Icon name={icon} />}
    </>
  )

  if (to) return <Link to={to} className={cls} {...rest}>{content}</Link>
  if (href) {
    const external = /^https?:/.test(href)
    return (
      <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
        {content}
      </a>
    )
  }
  return <button type="button" className={cls} {...rest}>{content}</button>
}
