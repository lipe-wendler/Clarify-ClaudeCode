import { images } from '../../content/shared'
import { useLanguage } from '../../i18n/LanguageProvider'
import { QuoteCard, SectionLabel } from '../ds'
import Highlight from '../Highlight'
import BrandImage from './BrandImage'

/**
 * About (camada de marca, editorial): a pessoa por trás do trabalho.
 * - Celular: foto (recorte vertical) → texto → citação.
 * - lg+: a foto ocupa o fundo; texto à esquerda e citação à direita, sobre os
 *   planos escuros de concreto da imagem.
 */
export default function AboutFelipe({ number }) {
  const { t } = useLanguage()
  const a = t.about

  return (
    <section id="about" aria-labelledby="about-title" className="relative isolate overflow-hidden border-y border-line bg-bg">
      <div className="relative lg:absolute lg:inset-0 lg:-z-10">
        <BrandImage image={images.about} alt={a.imageAlt} className="h-auto w-full lg:h-full lg:object-cover" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-bg to-transparent lg:hidden" />
        <div aria-hidden="true" className="absolute inset-0 hidden bg-gradient-to-r from-bg/90 via-transparent to-bg/90 lg:block" />
      </div>

      <div className="container-page grid gap-10 py-12 lg:min-h-[640px] lg:grid-cols-[minmax(0,420px)_1fr_minmax(0,360px)] lg:items-center lg:py-20">
        <div className="grid gap-5">
          <SectionLabel number={number}>{a.eyebrow}</SectionLabel>
          <h2 id="about-title" className="t-h1">
            <Highlight text={a.title} />
          </h2>
          <div className="grid gap-4 text-ink-muted">
            {a.paragraphs.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
          <dl className="grid gap-3 border-t border-line pt-5">
            {a.facts.map((f) => (
              <div key={f.label} className="grid gap-0.5">
                <dt className="t-meta text-ink-muted uppercase">{f.label}</dt>
                <dd className="t-small text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Coluna do meio vazia no desktop: é onde a foto aparece */}
        <div aria-hidden="true" className="hidden lg:block" />

        <QuoteCard author="F.Wendler" className="bg-surface/95">
          {a.quote}
        </QuoteCard>
      </div>
    </section>
  )
}
