import { useLanguage } from '../../i18n/LanguageProvider'
import { Tabs } from '../ds'

/** Seletor EN/PT: Tabs do DS, variante neutra e compacta (Space Mono). */
export default function LanguageSwitch({ className = '' }) {
  const { lang, setLang, t } = useLanguage()
  return (
    <Tabs
      className={className}
      size="sm"
      variant="neutral"
      label={t.nav.language}
      value={lang}
      onChange={setLang}
      items={[
        { value: 'pt', label: 'PT', title: 'Português', lang: 'pt-BR' },
        { value: 'en', label: 'EN', title: 'English', lang: 'en' },
      ]}
    />
  )
}
