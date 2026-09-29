import { useLanguage } from '../../i18n/LanguageProvider'
import { ListRow, Tag } from '../ds'
import Section from '../Section'
import SectionHeader from '../SectionHeader'

/** Currently / What I'm exploring: mantém o portfólio vivo (ListRow do DS). */
export default function Currently({ number }) {
  const { t } = useLanguage()
  const c = t.currently
  return (
    <Section id="currently" labelledBy="currently-title">
      <SectionHeader id="currently-title" number={number} eyebrow={c.eyebrow} title={c.title} lead={c.lead} />
      <ul className="fw-list mt-10 rounded-md border border-line bg-surface p-2">
        {c.items.map((item) => (
          <li key={item.title}>
            <ListRow
              title={item.title}
              subtitle={item.subtitle}
              href={item.href}
              leading={
                <span className="hidden w-24 flex-none sm:block">
                  <Tag size="sm" system>{item.meta}</Tag>
                </span>
              }
            />
          </li>
        ))}
      </ul>
    </Section>
  )
}
