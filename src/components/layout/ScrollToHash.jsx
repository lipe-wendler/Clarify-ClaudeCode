import { useEffect } from 'react'
import { useLocation } from 'react-router'

/**
 * Rolagem ao trocar de rota:
 * - com #âncora (ex.: /#work vindo de uma página de case), rola até a seção;
 * - sem âncora (ex.: abrir um case), volta ao topo.
 */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      // Página nova: vai direto ao topo (sem a rolagem suave usada nas âncoras)
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return
    }
    // Espera o próximo frame para a seção já estar renderizada
    const id = decodeURIComponent(hash.slice(1))
    const raf = requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView())
    return () => cancelAnimationFrame(raf)
  }, [pathname, hash])

  return null
}
