/**
 * Media (DS): slot para as imagens da marca. Sem `src`, mostra o placeholder
 * hachurado do DS (nunca um bloco vazio). `ratio` fixa a proporção (ex.: "16/9").
 */
export default function Media({ src, alt = '', ratio, label = 'Image', className = '', children }) {
  const style = ratio ? { aspectRatio: ratio, height: 'auto' } : undefined
  if (src) {
    return (
      <span className={`fw-media ${className}`} style={style}>
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      </span>
    )
  }
  if (children) {
    // Composição em código (ex.: capas dos projetos) no lugar de uma imagem
    return (
      <span className={`fw-media ${className}`} style={style} role={alt ? 'img' : undefined} aria-label={alt || undefined}>
        {children}
      </span>
    )
  }
  return (
    <span className={`fw-media fw-media-empty ${className}`} style={style} role="img" aria-label={alt || 'Imagem pendente'}>
      {label !== false && <span>{label}</span>}
    </span>
  )
}
