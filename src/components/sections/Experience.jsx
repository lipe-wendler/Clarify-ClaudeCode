import { useLanguage } from '../../i18n/LanguageProvider'
import { Tag } from '../ds'
import Section from '../Section'
import SectionHeader from '../SectionHeader'

/**
 * Item da linha do tempo, usado pela Trajetória e pela Formação (mesmo formato).
 * - Celular: linha vertical à esquerda com um ponto; blocos empilhados.
 * - lg+: três colunas (período | título e organização | detalhes), com divisor
 *   no topo de cada linha.
 * O ponto amarelo marca o item mais recente (`current`); `heading` define o
 * nível do título (h3 na trajetória, h4 dentro de "Formação").
 */
function TimelineItem({ period, title, org, current, heading: Heading = 'h3', children }) {
  return (
    <li className="relative grid gap-3 border-l border-line pb-10 pl-6 last:pb-0 lg:grid-cols-[180px_minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-8 lg:border-t lg:border-l-0 lg:pt-8 lg:pb-8 lg:pl-0">
      <span
        aria-hidden="true"
        className={`absolute top-1 -left-[5px] size-2.5 rounded-full lg:hidden ${current ? 'bg-accent' : 'border border-line-strong bg-bg'}`}
      />
      <p className="t-meta text-ink-muted uppercase lg:pt-1">{period}</p>
      <div>
        <Heading className="t-h3">{title}</Heading>
        <p className="t-small mt-1 text-ink-muted">{org}</p>
      </div>
      <div className="grid content-start gap-3">{children}</div>
    </li>
  )
}

/** Lista de marcadores (quadradinho amarelo do DS). */
function Points({ items }) {
  return (
    <ul className="grid gap-2">
      {items.map((point) => (
        <li key={point} className="t-small relative pl-4 text-ink-muted">
          <span aria-hidden="true" className="absolute top-2 left-0 size-1.5 rounded-[2px] bg-accent" />
          {point}
        </li>
      ))}
    </ul>
  )
}

/**
 * Experience / Trajectory: currículo visual resumido (fonte: CV).
 * Trajetória profissional e Formação usam o mesmo TimelineItem.
 */
export default function Experience({ number }) {
  const { t } = useLanguage()
  const e = t.experience

  return (
    <Section id="experience" labelledBy="experience-title" className="border-t border-line">
      <SectionHeader id="experience-title" number={number} eyebrow={e.eyebrow} title={e.title} lead={e.lead} />

      {/* Trajetória profissional */}
      <ol className="mt-10 grid">
        {e.items.map((item, i) => (
          <TimelineItem key={item.period} period={item.period} title={item.role} org={item.org} current={i === 0}>
            <p className="text-ink">{item.context}</p>
            <Points items={item.points} />
            {item.tags && (
              <ul className="flex flex-wrap gap-1" aria-label="Tecnologias">
                {item.tags.map((tag) => (
                  <li key={tag}>
                    <Tag size="sm">{tag}</Tag>
                  </li>
                ))}
              </ul>
            )}
          </TimelineItem>
        ))}
      </ol>

      {/* Formação: mesmo formato da trajetória */}
      <h3 id="education-title" className="t-h2 mt-16">
        {e.educationTitle}
      </h3>
      <ol className="mt-8 grid" aria-labelledby="education-title">
        {e.education.map((ed, i) => (
          <TimelineItem key={ed.title} heading="h4" period={ed.period} title={ed.title} org={ed.org} current={i === 0}>
            <div>
              <Tag size="sm" system>
                {ed.type}
              </Tag>
            </div>
            {ed.points && <Points items={ed.points} />}
          </TimelineItem>
        ))}
      </ol>
    </Section>
  )
}
