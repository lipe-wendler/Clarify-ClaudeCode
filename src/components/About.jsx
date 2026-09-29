import { about } from '../data/profile'
import RichText from './RichText'
import Section from './Section'
import SectionHeader from './SectionHeader'

// Seção "Sobre": bio, números-chave e os três pilares da marca.
export default function About() {
  return (
    <Section id="sobre" labelledBy="sobre-titulo">
      <SectionHeader id="sobre-titulo" eyebrow="sobre" title={about.title} />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div className="grid max-w-2xl gap-4 text-[1.05rem] text-muted">
          {about.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>
              <RichText text={paragraph} />
            </p>
          ))}
        </div>

        {/* Números-chave: 2 colunas já no celular (são curtos) */}
        <dl className="grid grid-cols-2 self-start border-t border-line">
          {about.facts.map((fact, i) => (
            <div
              key={fact.label}
              className={`border-b border-line py-5 ${i % 2 === 0 ? 'border-r pr-4' : 'pl-4 sm:pl-5'}`}
            >
              <dt className="sr-only">{fact.label}</dt>
              <dd>
                <span className="block text-4xl leading-none font-extrabold tracking-tight tabular-nums">{fact.value}</span>
                <span className="mt-2 block text-[0.8125rem] leading-snug text-muted">{fact.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <ul className="mt-14 grid gap-8 sm:grid-cols-3 sm:gap-6">
        {about.pillars.map((pillar) => (
          <li key={pillar.key} className={`border-t-2 pt-4 ${pillar.highlight ? 'border-accent' : 'border-fg'}`}>
            <p className="font-mono text-xs text-muted">{pillar.key}</p>
            <h3 className="mt-1.5 text-lg font-bold">{pillar.title}</h3>
            <p className="mt-1.5 text-[0.95rem] text-muted">{pillar.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
