import { projectOrder } from '../../content/shared'
import { useLanguage } from '../../i18n/LanguageProvider'
import Section from '../Section'
import SectionHeader from '../SectionHeader'
import WorkCard from './WorkCard'

/** Selected Work: a seção mais importante. 1 coluna no celular, 3 no desktop. */
export default function SelectedWork({ number }) {
  const { t } = useLanguage()
  return (
    <Section id="work" labelledBy="work-title">
      <SectionHeader id="work-title" number={number} eyebrow={t.work.eyebrow} title={t.work.title} lead={t.work.lead} />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projectOrder.map((slug, i) => (
          <WorkCard key={slug} slug={slug} index={i} />
        ))}
      </div>
    </Section>
  )
}
