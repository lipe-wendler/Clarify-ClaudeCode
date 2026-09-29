import { education, timeline } from '../data/profile'
import Section from './Section'
import SectionHeader from './SectionHeader'

/**
 * Trajetória no formato de histórico de commits (git log).
 * - Celular: coluna do "grafo" à esquerda e a data acima do título.
 * - sm+: a data ganha uma coluna própria à esquerda do grafo.
 */
export default function Timeline() {
  return (
    <Section id="trajetoria" labelledBy="trajetoria-titulo">
      <SectionHeader
        id="trajetoria-titulo"
        eyebrow="trajetória"
        title="Trajetória recente"
        lead="Os marcos de 2026, do mais novo para o mais antigo, no formato de um histórico de commits."
      />
      <p className="mt-5 font-mono text-sm text-muted">$ git log --since=2026-05 --oneline</p>

      <ol className="mt-6 font-mono text-sm">
        {timeline.map((item, i) => {
          const isFirst = i === 0
          const isLast = i === timeline.length - 1
          return (
            <li key={`${item.repo}-${item.title}`} className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-x-3 sm:grid-cols-[5.5rem_1.75rem_minmax(0,1fr)]">
              {/* Data (coluna própria a partir de sm) */}
              <span className="hidden pt-4 text-muted tabular-nums sm:block">{item.when}</span>

              {/* Grafo: linha vertical + ponto do commit */}
              <span aria-hidden="true" className="relative">
                <span
                  className={`absolute left-[13px] w-0.5 bg-line ${isFirst ? 'top-6' : 'top-0'} ${isLast ? 'h-6' : 'bottom-0'}`}
                />
                <span
                  className={`absolute top-[18px] left-[7px] size-3.5 rounded-full border-2 ${
                    item.highlight ? 'border-accent bg-accent' : 'border-fg bg-bg'
                  }`}
                />
              </span>

              <div className={`grid gap-1 py-3.5 ${isLast ? '' : 'border-b border-line'}`}>
                <span className="text-muted tabular-nums sm:hidden">{item.when}</span>
                <p className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                  <span className="font-semibold text-accent-ink">{item.repo}</span>
                  <span className="font-sans text-base font-bold text-fg">{item.title}</span>
                </p>
                <p className="font-sans text-[0.95rem] text-muted">{item.text}</p>
                {item.branches && (
                  <p className="mt-1 flex flex-wrap gap-1.5">
                    {item.branches.map((b) => (
                      <span key={b} className="branch">{b}</span>
                    ))}
                  </p>
                )}
              </div>
            </li>
          )
        })}
      </ol>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {education.map((item) => (
          <li key={item.title} className="rounded-md border border-line bg-surface p-5">
            <p className="font-mono text-xs text-muted">{item.kicker}</p>
            <h3 className="mt-1.5 text-lg font-bold">{item.title}</h3>
            <p className="mt-1 text-[0.95rem] text-muted">{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
