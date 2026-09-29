import { useLanguage } from '../../i18n/LanguageProvider'
import { FeatureCard } from '../ds'
import Section from '../Section'
import SectionHeader from '../SectionHeader'

/** Capabilities: quatro pilares, com as tecnologias como evidência (FeatureCard do DS). */
export default function Capabilities({ number }) {
  const { t } = useLanguage()
  return (
    <Section id="capabilities" labelledBy="capabilities-title" className="border-t border-line">
      <SectionHeader
        id="capabilities-title"
        number={number}
        eyebrow={t.capabilities.eyebrow}
        title={t.capabilities.title}
        lead={t.capabilities.lead}
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {t.capabilities.items.map((c) => (
          <FeatureCard key={c.title} icon={c.icon} title={c.title} description={c.description} tags={c.tags} />
        ))}
      </div>
    </Section>
  )
}
