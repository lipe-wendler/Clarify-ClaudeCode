import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { links } from '../../content/shared'
import { useLanguage } from '../../i18n/LanguageProvider'
import { BrandIcon, Button, IconButton } from '../ds'
import LanguageSwitch from './LanguageSwitch'

/**
 * Header: só navegação, sem explicar nada.
 * - Celular: wordmark · seletor de idioma · botão de menu (lista recolhível).
 * - sm+: CTA "Vamos conversar" (o único primary da barra, regra do DS).
 * - md+: links das seções em linha.
 * - xl+: atalhos para GitHub e LinkedIn.
 * Os links usam "/#secao" para funcionar também a partir das páginas de case.
 */
export default function Header() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  const items = [
    { to: '/#work', label: t.nav.work },
    { to: '/#experience', label: t.nav.experience },
    { to: '/#about', label: t.nav.about },
    { to: '/#contact', label: t.nav.contact },
  ]

  // Esc fecha o menu
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <nav aria-label="Principal" className="container-page flex h-16 items-center gap-3 lg:h-[var(--header-height)] lg:gap-6">
        <Link to="/" className="font-display text-[22px] leading-none font-bold tracking-[-0.02em] text-ink" onClick={() => setOpen(false)}>
          F.Wendler
        </Link>

        <ul className="ml-auto hidden items-center gap-6 md:flex">
          {items.map((item) => (
            <li key={item.to}>
              <Link to={item.to} className="py-2 text-sm font-medium text-ink opacity-80 transition-opacity hover:opacity-100">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 md:ml-0 lg:gap-3">
          <LanguageSwitch />
          <div className="hidden items-center gap-2 xl:flex">
            <IconButton size="sm" href={links.github} label="GitHub">
              <BrandIcon name="github" className="size-4" />
            </IconButton>
            <IconButton size="sm" href={links.linkedin} label="LinkedIn">
              <BrandIcon name="linkedin" className="size-4" />
            </IconButton>
          </div>
          <Button to="/#contact" size="sm" arrow className="hidden sm:inline-flex">
            {t.nav.cta}
          </Button>
          <IconButton
            size="sm"
            icon={open ? 'close' : 'menu'}
            label={open ? t.nav.menuClose : t.nav.menuOpen}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
          />
        </div>
      </nav>

      {/* Menu do celular */}
      <div id="menu-mobile" hidden={!open} className="border-t border-line md:hidden">
        <ul className="container-page grid py-2">
          {items.map((item) => (
            <li key={item.to} className="border-b border-line last:border-b-0">
              <Link to={item.to} onClick={() => setOpen(false)} className="flex min-h-12 items-center text-base font-medium">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
