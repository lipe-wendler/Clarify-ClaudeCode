import { useLanguage, useDocumentTitle } from '../i18n/LanguageProvider'
import { Button, SectionLabel } from '../components/ds'
import Highlight from '../components/Highlight'

/** Página 404: rota inexistente ou case que não existe. */
export default function NotFound() {
  const { t } = useLanguage()
  useDocumentTitle(`404 · ${t.meta.title}`)
  return (
    <section className="container-page grid min-h-[60vh] content-center gap-5 py-16">
      <SectionLabel bar>404</SectionLabel>
      <h1 className="t-h1">
        <Highlight text={t.notFound.title} />
      </h1>
      <p className="max-w-md text-ink-muted">{t.notFound.text}</p>
      <div>
        <Button to="/" arrow>
          {t.notFound.back}
        </Button>
      </div>
    </section>
  )
}
