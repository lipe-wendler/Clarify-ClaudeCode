import ProjectFigure from './ProjectFigure'
import RichText from './RichText'

// Título pequeno em caixa alta com o ponto amarelo (Contexto, O que entreguei...)
function BlockTitle({ children }) {
  return (
    <h4 className="flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase">
      <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
      {children}
    </h4>
  )
}

/**
 * Card de um estudo de caso. A estrutura se adapta ao conteúdo de cada
 * projeto em src/data/profile.js: meta, colunas, diagrama, números e branches
 * são opcionais.
 */
export default function ProjectCard({ project }) {
  const { title, domain, summary, tags, meta, left = [], right, figure, stats, branches, size } = project
  const isFeature = size === 'feature'

  return (
    <article
      id={project.id}
      aria-labelledby={`${project.id}-titulo`}
      className="@container grid content-start gap-7 rounded-md border border-line bg-surface p-5 sm:p-8 lg:p-10"
    >
      {/* Cabeçalho do card */}
      <header>
        <p className="font-mono text-[0.8125rem] text-accent-ink">{domain}</p>
        <h3
          id={`${project.id}-titulo`}
          className={`mt-1.5 font-extrabold ${isFeature ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}
        >
          {title}
          <span className="text-accent">.</span>
        </h3>
        <p className={`mt-3 max-w-3xl text-muted ${isFeature ? 'text-lg' : ''}`}>{summary}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tecnologias e práticas">
          {tags.map((tag, i) => (
            <li key={tag} className={`tag ${i === 0 ? 'tag-strong' : ''}`}>
              {tag}
            </li>
          ))}
        </ul>
      </header>

      {/* Setor / Papel / Período: empilhados no card estreito, em linha no largo */}
      {meta && (
        <dl className="grid border-y border-line @xl:grid-cols-3">
          {meta.map((item, i) => (
            <div
              key={item.label}
              className={`py-3 @xl:px-4 @xl:first:pl-0 ${i > 0 ? 'border-t border-line @xl:border-t-0 @xl:border-l' : ''}`}
            >
              <dt className="font-mono text-[0.7rem] tracking-wider text-muted uppercase">{item.label}</dt>
              <dd className="mt-0.5 font-semibold">{item.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {/* Diagrama logo após o cabeçalho quando o projeto é explicado por ele */}
      {figure?.type === 'spec-flow' && <ProjectFigure figure={figure} />}

      {/* Duas colunas quando o card é largo; uma coluna no celular */}
      <div className="grid gap-8 @3xl:grid-cols-2">
        <div className="grid content-start gap-3">
          {left.map((block) => (
            <div key={block.title} className="grid gap-2.5 [&+&]:mt-3">
              <BlockTitle>{block.title}</BlockTitle>
              <p className="text-muted">
                <RichText text={block.text} />
              </p>
            </div>
          ))}
        </div>

        {right && (
          <div className="grid content-start gap-3">
            <BlockTitle>{right.title}</BlockTitle>
            {right.text && (
              <p className="text-muted">
                <RichText text={right.text} />
              </p>
            )}
            {right.items && (
              <ul className="grid gap-2">
                {right.items.map((item) => (
                  <li key={item} className="relative pl-5 text-muted">
                    <span className="absolute left-0 text-accent-ink" aria-hidden="true">→</span>
                    <RichText text={item} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      {figure && figure.type !== 'spec-flow' && <ProjectFigure figure={figure} />}

      {/* Números do projeto */}
      {stats && (
        <ul className="grid gap-3 @xl:grid-cols-3">
          {stats.map((stat) => (
            <li key={stat.label} className="rounded-md bg-surface-2 px-4 py-4">
              <p className="text-3xl leading-none font-extrabold tracking-tight text-accent-ink tabular-nums">{stat.value}</p>
              <p className="mt-2 text-[0.8125rem] leading-snug text-muted">{stat.label}</p>
            </li>
          ))}
        </ul>
      )}

      {/* Branches reais do Git, como evidência do trabalho */}
      {branches && (
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="mr-1 font-mono text-xs text-muted">branches</span>
          {branches.map((b) => (
            <span key={b} className="branch">
              {b}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}
