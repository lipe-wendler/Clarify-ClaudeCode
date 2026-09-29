// Envelope das seções: espaçamento vertical (menor no celular), divisor
// inferior e o container com a largura máxima da página.
export default function Section({ id, labelledBy, children, className = '' }) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`border-b border-line py-16 sm:py-20 lg:py-24 ${className}`}
    >
      <div className="container-page">{children}</div>
    </section>
  )
}
