import { images, links } from '../../content/shared'
import { useLanguage } from '../../i18n/LanguageProvider'
import { BrandIcon, Button, SectionLabel } from '../ds'
import Highlight from '../Highlight'
import BrandImage from './BrandImage'

/**
 * Hero (camada de marca): em poucos segundos, quem é o Felipe e o que ele faz.
 * - Celular: a foto (recorte vertical) vem primeiro, e o texto sobe sobre o
 *   degradê da base da imagem.
 * - md+: a foto ocupa o fundo; o texto fica sobre a metade esquerda, escura,
 *   com um degradê lateral para garantir contraste.
 */
export default function Hero() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden border-b border-line md:min-h-[600px] lg:min-h-[680px]">
      {/* Imagem de fundo */}
      <div className="relative md:absolute md:inset-0 md:-z-10">
        <BrandImage
          image={images.hero}
          alt={h.imageAlt}
          priority
          className="h-auto w-full md:h-full md:object-cover md:object-[72%_center]"
        />
        {/* Degradês: base no celular; lateral esquerda e base no desktop */}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg to-transparent md:hidden" />
        <div aria-hidden="true" className="absolute inset-0 hidden bg-gradient-to-r from-bg via-bg/80 to-transparent md:block md:via-35% md:to-65%" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 hidden h-24 bg-gradient-to-t from-bg to-transparent md:block" />
      </div>

      <div className="container-page relative -mt-16 pb-12 md:mt-0 md:flex md:min-h-[600px] md:items-center md:py-20 lg:min-h-[680px]">
        <div className="max-w-xl">
          <SectionLabel bar>{h.eyebrow}</SectionLabel>
          <h1 id="hero-title" className="t-hero mt-5">
            {h.manifesto.map((line) => (
              <span key={line} className="block">
                <Highlight text={line} />
              </span>
            ))}
          </h1>
          <p className="t-meta mt-5 text-ink-muted">{h.role}</p>
          <p className="t-body-lg mt-3 text-ink-muted">{h.summary}</p>

          {/* Ações: empilhadas no celular; um primary e um secondary (DS) */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button to="/#work" size="lg" arrow>
              {h.primary}
            </Button>
            <Button href={links.linkedin} variant="secondary" size="lg" leading={<BrandIcon name="linkedin" />}>
              LinkedIn
            </Button>
            <Button href={links.github} variant="ghost" size="lg" leading={<BrandIcon name="github" />}>
              GitHub
            </Button>
          </div>
        </div>
      </div>

      {/* Coluna de palavras do Hero do DS (só em telas largas) */}
      <ul
        aria-hidden="true"
        className="absolute right-8 bottom-10 hidden flex-col gap-2 rounded-sm bg-surface/90 px-4 py-3 font-mono text-xs tracking-[0.24em] text-ink uppercase xl:flex"
      >
        {h.words.map((w) => (
          <li key={w}>{w}</li>
        ))}
        <li className="mt-1 h-0.5 w-6 bg-accent" />
      </ul>
    </section>
  )
}
