// Arte geométrica do hero, recriada a partir do banner F.Wendler do GitHub:
// um "sol" amarelo entre planos cinza e linhas finas que representam conexões.
// As cores vêm das variáveis do tema, então a arte acompanha o modo claro/escuro.
export default function HeroArt({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 400 440" aria-hidden="true">
      <defs>
        <linearGradient id="plane-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--plane-1)" />
          <stop offset=".6" stopColor="var(--plane-2)" />
          <stop offset="1" stopColor="var(--bg)" />
        </linearGradient>
        <linearGradient id="plane-back" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--plane-2)" />
          <stop offset="1" stopColor="var(--bg)" />
        </linearGradient>
        <linearGradient id="plane-right" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--plane-3)" />
          <stop offset="1" stopColor="var(--bg)" />
        </linearGradient>
      </defs>
      {/* Plano do fundo */}
      <polygon points="250,60 372,6 372,340 250,300" fill="url(#plane-back)" />
      {/* Sol */}
      <circle className="hero-sun" cx="200" cy="150" r="88" fill="var(--accent)" />
      {/* Faixa de sombra sobre o sol */}
      <polygon points="250,60 280,74 280,286 250,300" fill="var(--plane-3)" opacity=".85" />
      {/* Planos da frente, que se dissolvem no fundo */}
      <polygon points="118,196 282,290 282,440 118,440" fill="url(#plane-front)" />
      <polygon points="282,290 400,356 400,440 282,440" fill="url(#plane-right)" />
      {/* Linhas de conexão (animadas ao carregar) */}
      <g fill="none" stroke="var(--accent)" strokeWidth="1.1" opacity=".9">
        <path className="hero-curve" d="M-10,396 C100,330 230,300 400,156" />
        <path className="hero-curve [animation-delay:.12s]" d="M0,420 C120,360 260,330 400,190" />
        <path className="hero-curve [animation-delay:.24s]" d="M30,436 C150,380 280,350 400,226" />
        <path className="hero-curve [animation-delay:.36s]" d="M70,446 C180,400 300,372 400,262" />
      </g>
    </svg>
  )
}
