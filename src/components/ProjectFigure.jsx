/**
 * Diagramas dos estudos de caso. Usam container queries (@container / @md: /
 * @2xl: ...) em vez de breakpoints da tela: o diagrama se adapta à largura do
 * CARD: vertical no celular, horizontal quando o card tem largura suficiente.
 */

// Seta entre etapas: aponta para baixo no layout vertical e para a direita
// no horizontal.
function FlowArrow({ horizontalAt = '@xl' }) {
  const rotate = horizontalAt === '@3xl' ? '@3xl:rotate-0' : '@xl:rotate-0'
  return (
    <span aria-hidden="true" className={`grid place-items-center text-accent-ink rotate-90 ${rotate}`}>
      →
    </span>
  )
}

// Caixa de uma etapa. tone: "default" | "dark" | "accent" | "outline"
function FlowBox({ title, text, tone = 'default' }) {
  const tones = {
    default: 'bg-surface-2',
    dark: 'bg-fg text-bg',
    accent: 'bg-accent text-on-accent',
    outline: 'bg-surface-2 ring-1 ring-accent',
  }
  const textTone = { default: 'text-muted', dark: 'opacity-70', accent: 'opacity-75', outline: 'text-muted' }
  return (
    <div className={`rounded-md px-3 py-3 text-center ${tones[tone]}`}>
      <p className="text-sm font-bold">{title}</p>
      <p className={`mt-0.5 font-mono text-[0.7rem] ${textTone[tone]}`}>{text}</p>
    </div>
  )
}

// Moldura comum: legenda em cima e o diagrama dentro de um container query.
function Frame({ caption, legend, children }) {
  return (
    <figure className="@container grid gap-4 rounded-md border border-dashed border-line p-4 sm:p-5">
      <figcaption className="flex justify-between gap-3 font-mono text-xs text-muted">
        <span>{caption}</span>
        {legend && <span>{legend}</span>}
      </figcaption>
      {children}
    </figure>
  )
}

// Mapa de módulos (SaaS Notarial)
function Modules({ figure }) {
  return (
    <Frame caption={figure.caption} legend={figure.legend}>
      <ul className="grid gap-2.5 @sm:grid-cols-2 @2xl:grid-cols-3">
        {figure.items.map((m) => (
          <li key={m.title} className={`rounded-md px-4 py-3.5 ${m.core ? 'bg-fg text-bg' : 'bg-surface-2'}`}>
            <p className="flex justify-between gap-2 font-bold">
              {m.title}
              <span className={`mt-2 size-1.5 flex-none rounded-full ${m.core ? 'bg-accent' : 'bg-plane-2'}`} aria-hidden="true" />
            </p>
            <p className={`mt-1 text-[0.8125rem] leading-snug ${m.core ? 'opacity-70' : 'text-muted'}`}>{m.text}</p>
          </li>
        ))}
      </ul>
    </Frame>
  )
}

// Fluxo de revisão cruzada entre agentes (Especificação com vários agentes)
function SpecFlow({ figure }) {
  return (
    <Frame caption={figure.caption} legend={figure.legend}>
      <div className="grid gap-2 @3xl:grid-cols-[1fr_auto_1.2fr_auto_1.2fr_auto_1fr] @3xl:items-center">
        <FlowBox title="Documentos" text="specs de produto" />
        <FlowArrow horizontalAt="@3xl" />
        {/* Os dois agentes trabalham em paralelo */}
        <div className="grid grid-cols-2 gap-2 @3xl:grid-cols-1">
          <FlowBox title="Agente Claude" text="análise independente" />
          <FlowBox title="Agente Codex" text="análise independente" />
        </div>
        <FlowArrow horizontalAt="@3xl" />
        <FlowBox title="Consolidador" text="consenso e conflitos" tone="accent" />
        <FlowArrow horizontalAt="@3xl" />
        <FlowBox title="Spec final" text="+ decisões em aberto" tone="outline" />
      </div>
    </Frame>
  )
}

// Sequência simples de etapas (Fechamento contábil)
function Steps({ figure }) {
  return (
    <Frame caption={figure.caption}>
      <ol className="grid gap-2 @xl:flex @xl:items-stretch">
        {figure.items.map((step, i) => (
          <li key={step.title} className="contents">
            {i > 0 && <FlowArrow />}
            <div className="@xl:flex-1">
              <FlowBox title={step.title} text={step.text} tone={step.tone} />
            </div>
          </li>
        ))}
      </ol>
    </Frame>
  )
}

export default function ProjectFigure({ figure }) {
  if (!figure) return null
  if (figure.type === 'modules') return <Modules figure={figure} />
  if (figure.type === 'spec-flow') return <SpecFlow figure={figure} />
  if (figure.type === 'steps') return <Steps figure={figure} />
  return null
}
