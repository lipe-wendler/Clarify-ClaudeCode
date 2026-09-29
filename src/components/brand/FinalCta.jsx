import { images, links } from '../../content/shared'
import { useLanguage } from '../../i18n/LanguageProvider'
import { BrandIcon, Button, SectionLabel } from '../ds'
import Highlight from '../Highlight'
import BrandImage from './BrandImage'

/**
 * CTA final (camada de marca): quem chegou até aqui precisa saber o próximo
 * passo. LinkedIn é a ação principal (único primary); GitHub é a alternativa.
 */
export default function FinalCta({ number }) {
  const { t } = useLanguage()
  const c = t.contact

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate overflow-hidden bg-bg">
      <div aria-hidden="true" className="relative h-56 sm:h-72 md:absolute md:inset-0 md:-z-10 md:h-auto">
        <BrandImage image={images.cta} alt="" className="h-full w-full object-cover object-[80%_center]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg to-transparent md:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-bg via-bg/70 to-transparent md:block md:via-40% md:to-70%" />
      </div>

      <div className="container-page relative py-12 md:flex md:min-h-[520px] md:items-center md:py-20">
        <div className="max-w-xl">
          <SectionLabel number={number}>{c.eyebrow}</SectionLabel>
          <h2 id="contact-title" className="t-h1 mt-4">
            <Highlight text={c.title} />
          </h2>
          <p className="t-body-lg mt-4 text-ink-muted">{c.lead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={links.linkedin} size="lg" leading={<BrandIcon name="linkedin" />}>
              {c.linkedin}
            </Button>
            <Button href={links.github} variant="secondary" size="lg" leading={<BrandIcon name="github" />}>
              {c.github}
            </Button>
          </div>
        </div>
      </div>

      <ul aria-hidden="true" className="absolute right-8 bottom-10 hidden flex-col gap-2 font-mono text-xs tracking-[0.24em] text-ink uppercase lg:flex">
        {c.words.map((w) => (
          <li key={w}>{w}</li>
        ))}
        <li className="mt-1 h-0.5 w-6 bg-accent" />
      </ul>
    </section>
  )
}
