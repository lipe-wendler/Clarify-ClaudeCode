// Envelope das seções da camada de UI: espaçamento vertical do DS
// (space-8 no celular, space-9 no desktop) e o container de 1280px.
export default function Section({ id, labelledBy, children, className = '' }) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`py-16 lg:py-24 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  )
}
