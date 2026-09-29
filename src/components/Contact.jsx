import { contact, links } from '../data/profile'
import { GitHubIcon, LinkedInIcon } from './Icons'
import Section from './Section'

// Chamada final para contato, com LinkedIn em destaque.
export default function Contact() {
  return (
    <Section id="contato" labelledBy="contato-titulo">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <div>
          <p className="eyebrow">contato</p>
          <h2
            id="contato-titulo"
            className="mt-4 text-[2.4rem] leading-[1.03] font-extrabold tracking-[-0.035em] sm:text-6xl"
          >
            {contact.title}
            <span className="block text-accent-ink">{contact.highlight}</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg text-muted">{contact.lead}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className="btn btn-primary" href={links.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
              Conectar no LinkedIn
            </a>
            <a className="btn" href={links.github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
              Ver GitHub
            </a>
          </div>
          {/* Endereço visível para quem prefere copiar o link */}
          <p className="mt-4 font-mono text-xs break-all text-muted select-all">
            {links.linkedin.replace('https://www.', '')}
          </p>
        </div>

        <ul className="self-start border-t border-line lg:mt-11">
          {contact.offers.map((offer) => (
            <li key={offer.title} className="border-b border-line py-4">
              <h3 className="font-bold">{offer.title}</h3>
              <p className="mt-0.5 text-[0.95rem] text-muted">{offer.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
