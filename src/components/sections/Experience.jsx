import { useLanguage } from '../../i18n/LanguageProvider'
import { Tag } from '../ds'
import Section from '../Section'
import SectionHeader from '../SectionHeader'

/**
 * Experience / Trajectory: currículo visual resumido (fonte: CV).
 * Celular: linha vertical à esquerda e blocos empilhados.
 * lg+: período | função e organização | contexto, entregas e tecnologias.
 */
export default function Experience({ number }) {
  const { t } = useLanguage()
  const e = t.experience

  return (
    <Section id="experience" labelledBy="experience-title" className="border-t border-line">
      <SectionHeader id="experience-title" number={number} eyebrow={e.eyebrow} title={e.title} lead={e.lead} />

      <ol className="mt-10 grid">
        {e.items.map((item, i) => (
          <li
            key={item.period}
            className="relative grid gap-3 border-l border-line pb-10 pl-6 last:pb-0 lg:grid-cols-[180px_minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-8 lg:border-l-0 lg:border-t lg:pt-8 lg:pb-8 lg:pl-0"
          >
            {/* Ponto na linha do tempo: amarelo no cargo atual */}
            <span
              aria-hidden="true"
              className={`absolute top-1 -left-[5px] size-2.5 rounded-full lg:hidden ${i === 0 ? 'bg-accent' : 'border border-line-strong bg-bg'}`}
            />
            <p className="t-meta text-ink-muted uppercase lg:pt-1">{item.period}</p>
            <div>
              <h3 className="t-h3">{item.role}</h3>
              <p className="t-small mt-1 text-ink-muted">{item.org}</p>
            </div>
            <div className="grid gap-3">
              <p className="text-ink">{item.context}</p>
              <ul className="grid gap-2">
                {item.points.map((point) => (
                  <li key={point} className="t-small relative pl-4 text-ink-muted">
                    <span aria-hidden="true" className="absolute top-2 left-0 size-1.5 rounded-[2px] bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
              {item.tags && (
                <ul className="flex flex-wrap gap-1" aria-label="Tecnologias">
                  {item.tags.map((tag) => (
                    <li key={tag}>
                      <Tag size="sm">{tag}</Tag>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>

      {/* Formação */}
      <div className="mt-12 grid gap-4 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-8">
        <h3 className="t-meta pt-1 text-ink-muted uppercase">{e.educationTitle}</h3>
        <ul className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2">
          {e.education.map((ed) => (
            <li key={ed.title} className="grid gap-1 bg-surface p-4">
              <span className="t-meta text-accent-text">{ed.period}</span>
              <span className="font-semibold text-ink">{ed.title}</span>
              <span className="t-small text-ink-muted">{ed.org}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
