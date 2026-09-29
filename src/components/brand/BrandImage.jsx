/**
 * Imagem das seções de marca (Hero, About, CTA).
 * Usa <picture> para servir o recorte vertical no celular (< 768px) e a
 * versão larga no desktop. width/height evitam salto de layout (CLS).
 * `priority` carrega já (hero, acima da dobra); o resto carrega sob demanda.
 */
export default function BrandImage({ image, alt, priority = false, className = '' }) {
  return (
    <picture>
      {image.mobile && (
        <source
          media="(max-width: 767px)"
          srcSet={image.mobile.src}
          width={image.mobile.width}
          height={image.mobile.height}
        />
      )}
      <img
        src={image.src}
        width={image.width}
        height={image.height}
        alt={alt}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
      />
    </picture>
  )
}
