import { developerSince, yearsSince } from '../../content/shared'
import { useLanguage } from '../../i18n/LanguageProvider'

/**
 * Professional snapshot: responde "ele tem experiência prática?".
 * Números grandes + descrição curta, sem cards (regra do DS contra grades de
 * métricas de enfeite). Só números comprovados; o tempo como desenvolvedor é
 * calculado a partir de mar/2025 para nunca ficar desatualizado.
 */
export default function Proof() {
  const { t, lang } = useLanguage()
  const format = new Intl.NumberFormat(lang === 'pt' ? 'pt-BR' : 'en', { maximumFractionDigits: 1 })

  return (
    <section aria-label={t.proof.label} className="border-b border-line">
      <dl className="container-page grid grid-cols-2 lg:grid-cols-4">
        {t.proof.items.map((item, i) => {
          const value = item.key === 'dev' ? format.format(yearsSince(developerSince)) : item.value
          return (
            <div
              key={item.label}
              className={`grid content-start gap-2 border-line py-7 lg:py-10 ${i % 2 === 0 ? 'border-r pr-4' : 'pl-4'} ${
                i < 2 ? 'border-b lg:border-b-0' : ''
              } lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0`}
            >
              <dt className="order-2 t-small text-ink-muted">{item.label}</dt>
              <dd className="order-1 m-0 flex items-baseline gap-2">
                <span className="t-metric text-ink">{value}</span>
                <span className="t-meta text-accent-text uppercase">{item.unit}</span>
              </dd>
            </div>
          )
        })}
      </dl>
    </section>
  )
}
