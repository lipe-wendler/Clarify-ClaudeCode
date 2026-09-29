import { useLanguage } from '../../i18n/LanguageProvider'
import { Stepper } from '../ds'
import Section from '../Section'
import SectionHeader from '../SectionHeader'

/**
 * How I think / How I work: Understand → Structure → Build → Measure → Improve.
 * Base: Stepper do DS (vertical no celular, horizontal no desktop), com
 * objetivo, atividade e entrega em cada etapa. As conexões têm um fluxo sutil
 * (.fw-stepper-flow em index.css), desligado com prefers-reduced-motion.
 */
export default function ProcessFlow({ number }) {
  const { t } = useLanguage()
  const { labels } = t.process

  const steps = t.process.steps.map((s) => ({
    title: s.title,
    extra: (
      <dl className="mt-2 grid gap-2 lg:mt-3 lg:pr-2">
        {[
          [labels.goal, s.goal],
          [labels.activity, s.activity],
          [labels.output, s.output],
        ].map(([label, text]) => (
          <div key={label}>
            <dt className="t-meta text-ink-muted uppercase">{label}</dt>
            <dd className="t-small m-0 text-ink">{text}</dd>
          </div>
        ))}
      </dl>
    ),
  }))

  return (
    <Section id="process" labelledBy="process-title" className="border-t border-line">
      <SectionHeader id="process-title" number={number} eyebrow={t.process.eyebrow} title={t.process.title} lead={t.process.lead} />
      <Stepper steps={steps} className="fw-stepper-flow mt-10 lg:mt-14" />
    </Section>
  )
}
