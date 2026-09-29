import { useMemo, useState } from 'react'
import { areas, projects } from '../data/profile'
import ProjectCard from './ProjectCard'
import Section from './Section'
import SectionHeader from './SectionHeader'

/**
 * Seção de projetos com filtro por área.
 * Os cards "feature" vêm primeiro, com título maior; os "compact" vêm depois.
 * Todos ocupam a largura toda, para os diagramas terem espaço na horizontal.
 */
export default function Projects() {
  const [filter, setFilter] = useState('all')

  const visible = useMemo(
    () => projects.filter((p) => filter === 'all' || p.areas.includes(filter)),
    [filter],
  )
  const features = visible.filter((p) => p.size === 'feature')
  const compacts = visible.filter((p) => p.size === 'compact')

  return (
    <Section id="projetos" labelledBy="projetos-titulo">
      <SectionHeader
        id="projetos-titulo"
        eyebrow="projetos"
        title="Estudos de caso"
        lead="Contexto, o que foi entregue e as evidências de cada projeto."
      />

      {/* Filtro: rola na horizontal no celular para não quebrar em várias linhas */}
      <div
        role="group"
        aria-label="Filtrar projetos por área"
        className="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {areas.map((area) => (
          <button
            key={area.id}
            id={`filtro-${area.id}`}
            type="button"
            aria-pressed={filter === area.id}
            onClick={() => setFilter(area.id)}
            className="min-h-10 flex-none rounded-full border border-line px-4 text-[0.8125rem] font-semibold whitespace-nowrap text-muted transition-colors hover:text-fg aria-pressed:border-fg aria-pressed:bg-fg aria-pressed:text-bg"
          >
            {area.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:gap-6" aria-live="polite">
        {features.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        {compacts.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        {visible.length === 0 && (
          <p className="rounded-md border border-dashed border-line p-6 text-muted">Nenhum projeto nesta área.</p>
        )}
      </div>
    </Section>
  )
}
