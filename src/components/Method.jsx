import { method, skills } from '../data/profile'
import Section from './Section'
import SectionHeader from './SectionHeader'

/**
 * Seção "Método": as cinco etapas de trabalho e as competências por grupo.
 * No celular as etapas formam uma lista vertical ligada por uma linha; no
 * desktop (lg) viram uma linha do tempo horizontal.
 */
export default function Method() {
  const last = method.steps.length - 1

  return (
    <Section id="metodo" labelledBy="metodo-titulo">
      <SectionHeader id="metodo-titulo" eyebrow="método" title={method.title} lead={method.lead} />

      <ol className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-5 lg:gap-0">
        {method.steps.map((step, i) => (
          <li key={step.title} className="relative flex gap-4 lg:block lg:pr-5">
            {/* Linha que liga as etapas: vertical no celular, horizontal no desktop */}
            {i < last && (
              <span
                aria-hidden="true"
                className="absolute top-10 bottom-[-1.5rem] left-5 w-px bg-line lg:top-5 lg:right-0 lg:bottom-auto lg:left-11 lg:h-px lg:w-auto"
              />
            )}
            <span
              className={`relative z-10 grid size-10 flex-none place-items-center rounded-full font-mono font-bold ${
                i === last ? 'bg-accent text-on-accent' : 'bg-fg text-bg'
              }`}
            >
              {i + 1}
            </span>
            <div className="pt-1.5 lg:pt-0">
              <h3 className="text-lg font-bold lg:mt-4">{step.title}</h3>
              <p className="mt-1 text-[0.95rem] text-muted">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>

      {/* Competências */}
      <h3 className="sr-only">Competências</h3>
      <ul className="mt-14 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <li key={group.title} className="grid content-start gap-3 border-t border-line pt-5">
            <h4 className="font-bold">{group.title}</h4>
            <ul className="flex flex-wrap gap-1.5">
              {group.strong.map((s) => (
                <li key={s} className="tag tag-strong">{s}</li>
              ))}
              {group.other.map((s) => (
                <li key={s} className="tag">{s}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}
