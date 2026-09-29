import { useEffect, useState } from 'react'
import { links, profile } from '../data/profile'
import { LinkedInIcon, MenuIcon } from './Icons'

// Itens do menu (âncoras das seções da página)
const navItems = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#metodo', label: 'Método' },
  { href: '#trajetoria', label: 'Trajetória' },
]

/**
 * Menu fixo no topo.
 * - Celular: marca + botão do LinkedIn (sempre à mão) + botão que abre a lista de seções.
 * - Desktop (md+): links das seções visíveis em linha.
 */
export default function Nav() {
  const [open, setOpen] = useState(false)

  // Fecha o menu com a tecla Esc
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg/85 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <nav aria-label="Principal" className="container-page flex h-14 items-center gap-3 sm:h-16">
        <a href="#topo" className="mr-auto text-[1.05rem] font-extrabold tracking-tight" onClick={() => setOpen(false)}>
          {profile.brand}
        </a>

        {/* Links das seções: só no desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded px-3 py-2 text-sm font-semibold text-muted transition-colors hover:bg-surface-2 hover:text-fg"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* LinkedIn: sempre visível, principal canal para recrutadores */}
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center gap-2 rounded-md bg-accent px-3 text-sm font-bold text-on-accent transition hover:brightness-105"
        >
          <LinkedInIcon />
          <span>LinkedIn</span>
        </a>

        {/* Botão do menu: só no celular */}
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-line md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <MenuIcon open={open} />
        </button>
      </nav>

      {/* Painel do menu no celular */}
      <div id="menu-mobile" hidden={!open} className="border-t border-line md:hidden">
        <ul className="container-page grid py-2">
          {[...navItems, { href: '#contato', label: 'Contato' }].map((item) => (
            <li key={item.href} className="border-b border-line last:border-b-0">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center text-base font-semibold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
