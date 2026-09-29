// Cabeçalho padrão das seções: rótulo curto (eyebrow), título com o ponto
// amarelo da marca e um parágrafo de apoio opcional.
export default function SectionHeader({ eyebrow, title, lead, id }) {
  return (
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-3xl font-extrabold sm:text-4xl">
        {title}
        <span className="text-accent">.</span>
      </h2>
      {lead && <p className="mt-4 max-w-2xl text-lg text-muted">{lead}</p>}
    </div>
  )
}
