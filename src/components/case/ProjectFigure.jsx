/**
 * Diagramas das páginas de case. Usam container queries (@container / @xl: /
 * @2xl:): o diagrama se adapta à largura do bloco, não da tela. Vertical no
 * celular, horizontal quando há espaço. Estilo e cores do DS.
 *
 * type: "modules" | "steps" | "concurrency" (dados vêm de content[lang].projects[slug])
 */

function Frame({ caption, children }) {
  return (
    <figure className="@container m-0 grid gap-4 rounded-md border border-line bg-surface p-4 sm:p-5">
      <figcaption className="t-meta text-ink-muted uppercase">{caption}</figcaption>
      {children}
    </figure>
  )
}

function Modules({ items }) {
  return (
    <ul className="grid gap-2.5 @md:grid-cols-2 @2xl:grid-cols-3">
      {items.map((m) => (
        <li key={m.title} className={`rounded-md border px-4 py-3.5 ${m.core ? 'border-ink bg-ink text-bg' : 'border-line bg-surface-raised'}`}>
          <p className="flex justify-between gap-2 font-semibold">
            {m.title}
            <span aria-hidden="true" className={`mt-2 size-1.5 flex-none rounded-full ${m.core ? 'bg-accent' : 'bg-line-strong'}`} />
          </p>
          <p className={`t-small mt-1 ${m.core ? 'opacity-70' : 'text-ink-muted'}`}>{m.text}</p>
        </li>
      ))}
    </ul>
  )
}

function Arrow() {
  return (
    <span aria-hidden="true" className="grid rotate-90 place-items-center text-accent-text @2xl:rotate-0">
      →
    </span>
  )
}

function Steps({ items }) {
  const tones = {
    default: 'border border-line bg-surface-raised',
    dark: 'bg-ink text-bg',
    accent: 'bg-accent text-on-accent',
  }
  return (
    <ol className="grid gap-2 @2xl:flex @2xl:items-stretch">
      {items.map((s, i) => (
        <li key={s.title} className="contents">
          {i > 0 && <Arrow />}
          <div className={`rounded-md px-3 py-3 text-center @2xl:flex-1 ${tones[s.tone || 'default']}`}>
            <p className="text-sm font-semibold">{s.title}</p>
            <p className="t-meta mt-0.5 opacity-75">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

function Concurrency({ data }) {
  const Column = ({ block, ok }) => (
    <div className={`grid gap-2 rounded-md border p-4 ${ok ? 'border-accent' : 'border-line'} bg-surface-raised`}>
      <p className="t-meta text-ink-muted uppercase">{block.title}</p>
      <ol className="grid gap-1.5">
        {block.lines.map((l) => (
          <li key={l} className="font-mono text-[13px] leading-5 text-ink">{l}</li>
        ))}
      </ol>
      <p className={`mt-1 text-sm font-semibold ${ok ? 'text-accent-text' : 'text-ink-muted'}`}>{block.outcome}</p>
    </div>
  )
  return (
    <div className="grid gap-3 @xl:grid-cols-2">
      <Column block={data.before} />
      <Column block={data.after} ok />
    </div>
  )
}

export default function ProjectFigure({ type, project }) {
  return (
    <Frame caption={project.architectureCaption}>
      {type === 'modules' && <Modules items={project.modules} />}
      {type === 'steps' && <Steps items={project.steps} />}
      {type === 'concurrency' && <Concurrency data={project.concurrency} />}
    </Frame>
  )
}
