import { links, profile } from '../data/profile'
import HeroArt from './HeroArt'
import { ArrowRightIcon, GitHubIcon, LinkedInIcon } from './Icons'

/**
 * Abertura da página: manifesto da marca, frase de posicionamento e ações.
 * Mobile first: no celular a arte fica pequena no topo e os botões ocupam a
 * largura toda; a partir de md a arte vai para a coluna da direita.
 */
export default function Hero() {
  const lastLine = profile.manifesto.length - 1

  return (
    <div id="topo" className="relative overflow-hidden border-b border-line">
      <div className="container-page grid items-center gap-6 py-10 sm:py-16 md:grid-cols-[1.3fr_0.9fr] md:gap-8 lg:py-24">
        {/* Arte: primeiro no celular (acima do texto), à direita no desktop */}
        <div className="-mb-8 ml-auto w-44 sm:w-56 md:order-last md:mb-0 md:w-full md:max-w-md">
          <HeroArt className="h-auto w-full" />
        </div>

        <div className="min-w-0">
          <p className="flex flex-wrap items-center gap-2 font-mono text-[0.8125rem] text-muted">
            <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
            <span>{profile.name}</span>
            <span className="rounded-full border border-line px-2.5 py-0.5">{profile.role}</span>
          </p>

          {/* Manifesto: a última frase fica em amarelo */}
          <h1 className="mt-5 text-[2.6rem] leading-[1.02] font-extrabold tracking-[-0.035em] sm:text-6xl lg:text-7xl">
            {profile.manifesto.map((line, i) => (
              <span key={line} className={`block ${i === lastLine ? 'text-accent-ink' : ''}`}>
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted sm:text-xl">{profile.headline}</p>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Áreas de atuação">
            {profile.axes.map((axis) => (
              <li key={axis} className="tag tag-strong">
                {axis}
              </li>
            ))}
          </ul>

          {/* Ações: empilhadas no celular, em linha a partir de sm */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className="btn btn-primary" href="#projetos">
              Ver projetos
              <ArrowRightIcon />
            </a>
            <a className="btn" href={links.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
              LinkedIn
            </a>
            <a className="btn" href={links.github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
