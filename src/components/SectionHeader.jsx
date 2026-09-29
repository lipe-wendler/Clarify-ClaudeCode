import { SectionLabel } from './ds'
import Highlight from './Highlight'

/**
 * Cabeçalho padrão das seções da camada de UI: índice + rótulo (SectionLabel
 * do DS), título h2 com uma palavra em destaque e texto de apoio.
 * No celular empilha; a partir de lg o texto de apoio vai para a direita.
 */
export default function SectionHeader({ number, eyebrow, title, lead, id }) {
  return (
    <header className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-end lg:gap-12">
      <div className="grid gap-3">
        <SectionLabel number={number}>{eyebrow}</SectionLabel>
        <h2 id={id} className="t-h2">
          <Highlight text={title} />
        </h2>
      </div>
      {lead && <p className="max-w-xl text-ink-muted lg:justify-self-end">{lead}</p>}
    </header>
  )
}
