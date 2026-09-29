import { Link } from 'react-router'
import { links } from '../../content/shared'
import { useLanguage } from '../../i18n/LanguageProvider'
import { BrandIcon, IconButton } from '../ds'
import LanguageSwitch from './LanguageSwitch'

/** Rodapé: wordmark, navegação, perfis, idioma e copyright (ano automático). */
export default function Footer() {
  const { t } = useLanguage()
  const items = [
    { to: '/#work', label: t.nav.work },
    { to: '/#experience', label: t.nav.experience },
    { to: '/#about', label: t.nav.about },
    { to: '/#contact', label: t.nav.contact },
  ]
  return (
    <footer className="border-t border-line pt-10 pb-[max(2rem,env(safe-area-inset-bottom))]">
      <div className="container-page grid gap-8 md:grid-cols-[1fr_auto_auto] md:items-center">
        <div>
          <Link to="/" className="font-display text-[22px] font-bold tracking-[-0.02em] text-ink">F.Wendler</Link>
          <p className="t-small mt-1 text-ink-muted">{t.footer.tagline}</p>
        </div>
        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {items.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-ink opacity-80 hover:opacity-100">{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <IconButton size="sm" href={links.github} label="GitHub">
            <BrandIcon name="github" className="size-4" />
          </IconButton>
          <IconButton size="sm" href={links.linkedin} label="LinkedIn">
            <BrandIcon name="linkedin" className="size-4" />
          </IconButton>
          <LanguageSwitch className="ml-2" />
        </div>
      </div>
      <p className="container-page t-meta mt-8 text-ink-muted">
        © {new Date().getFullYear()} Felipe Wendler · {t.footer.rights}
      </p>
    </footer>
  )
}
