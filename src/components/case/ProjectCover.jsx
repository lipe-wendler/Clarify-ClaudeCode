/**
 * Capa dos projetos: composição em código no motivo da marca (sol amarelo
 * atrás de planos de concreto, cortado por linhas de luz), com um mini
 * diagrama do projeto por cima. Não é screenshot: é um retrato abstrato do
 * que o sistema faz, até existirem imagens reais dos projetos.
 *
 * type: "modules" (SaaS Notarial) · "steps" (Fechamento) · "concurrency" (Restaurante)
 * Todas as cores vêm dos tokens do DS.
 */
const fill = (token) => ({ fill: `var(--${token})` })
const stroke = (token, width = 1.5) => ({ stroke: `var(--${token})`, strokeWidth: width, fill: 'none' })

function Backdrop() {
  return (
    <>
      <rect width="320" height="180" style={fill('surface')} />
      <circle cx="238" cy="62" r="46" style={fill('accent')} />
      <polygon points="252,0 320,0 320,180 236,180" style={fill('surface-raised')} />
      <polygon points="252,0 262,0 246,180 236,180" style={fill('line')} />
      <path d="M0 150 C90 132 190 96 320 40" style={stroke('accent', 1)} opacity=".7" />
      <path d="M0 166 C100 148 210 116 320 64" style={stroke('accent', 1)} opacity=".5" />
    </>
  )
}

function Modules() {
  // 7 módulos: 3 do núcleo (preenchidos) + 4 de suporte
  const tiles = [
    [24, 30, true], [80, 30, true], [136, 30, true],
    [24, 70], [80, 70], [136, 70], [24, 110],
  ]
  return tiles.map(([x, y, core]) => (
    <g key={`${x}-${y}`}>
      <rect x={x} y={y} width="48" height="30" rx="4" style={core ? fill('ink') : { ...fill('surface-raised'), stroke: 'var(--line-strong)' }} />
      <rect x={x + 8} y={y + 10} width="24" height="3" rx="1.5" style={fill(core ? 'bg' : 'ink-muted')} />
      <rect x={x + 8} y={y + 17} width="16" height="3" rx="1.5" style={fill(core ? 'bg' : 'line-strong')} opacity=".7" />
      {core && <circle cx={x + 40} cy={y + 7} r="2.5" style={fill('accent')} />}
    </g>
  ))
}

function Steps() {
  const xs = [20, 60, 100, 140, 180]
  return (
    <>
      <path d="M36 90 H196" style={stroke('line-strong')} />
      {xs.map((x, i) => (
        <rect
          key={x}
          x={x}
          y="76"
          width="32"
          height="28"
          rx="4"
          style={i === 1 ? fill('ink') : i === 4 ? fill('accent') : { ...fill('surface-raised'), stroke: 'var(--line-strong)' }}
        />
      ))}
      <rect x="28" y="120" width="72" height="4" rx="2" style={fill('ink-muted')} opacity=".6" />
      <rect x="28" y="130" width="48" height="4" rx="2" style={fill('line-strong')} />
    </>
  )
}

function Concurrency() {
  return (
    <>
      {/* Dois pedidos chegando ao mesmo tempo no estoque */}
      <path d="M24 56 H112 C140 56 140 90 168 90" style={stroke('ink-muted')} />
      <path d="M24 124 H112 C140 124 140 90 168 90" style={stroke('ink-muted')} />
      <rect x="20" y="44" width="44" height="24" rx="4" style={{ ...fill('surface-raised'), stroke: 'var(--line-strong)' }} />
      <rect x="20" y="112" width="44" height="24" rx="4" style={{ ...fill('surface-raised'), stroke: 'var(--line-strong)' }} />
      <text x="42" y="60" textAnchor="middle" style={{ ...fill('ink'), font: '700 10px var(--font-mono)' }}>A</text>
      <text x="42" y="128" textAnchor="middle" style={{ ...fill('ink'), font: '700 10px var(--font-mono)' }}>B</text>
      <rect x="168" y="72" width="44" height="36" rx="4" style={fill('ink')} />
      <text x="190" y="94" textAnchor="middle" style={{ ...fill('bg'), font: '700 11px var(--font-mono)' }}>8</text>
    </>
  )
}

const DIAGRAMS = { modules: Modules, steps: Steps, concurrency: Concurrency }

export default function ProjectCover({ type, label, className = '' }) {
  const Diagram = DIAGRAMS[type] || Modules
  return (
    <svg viewBox="0 0 320 180" role="img" aria-label={label} className={`block h-auto w-full ${className}`} preserveAspectRatio="xMidYMid slice">
      <Backdrop />
      <Diagram />
    </svg>
  )
}
