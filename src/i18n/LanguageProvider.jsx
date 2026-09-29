import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import pt from '../content/pt'
import en from '../content/en'

/**
 * Idioma do site (PT/EN).
 * - Primeira visita: detecta pelo navegador (pt* → PT, qualquer outro → EN).
 * - Escolha manual pelo seletor fica salva no navegador (localStorage).
 *   Todo acesso ao localStorage fica em try/catch: em janela anônima ou com
 *   armazenamento bloqueado o site continua funcionando, só não lembra a escolha.
 */
const CONTENT = { pt, en }
const STORAGE_KEY = 'fw-lang'
const LanguageContext = createContext(null)

function detectLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && CONTENT[saved]) return saved
  } catch {
    /* armazenamento indisponível: segue para a detecção */
  }
  const langs = typeof navigator !== 'undefined' ? navigator.languages || [navigator.language] : []
  return langs.some((l) => l?.toLowerCase().startsWith('pt')) ? 'pt' : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectLanguage)

  const setLang = useCallback((next) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* sem persistência: a escolha vale até fechar a página */
    }
  }, [])

  const t = CONTENT[lang]

  // Mantém <html lang> e a meta description no idioma atual (acessibilidade e SEO)
  useEffect(() => {
    document.documentElement.lang = t.lang
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [t])

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

/** Hook de acesso: const { t, lang, setLang } = useLanguage() */
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage precisa estar dentro de <LanguageProvider>')
  return ctx
}

/** Define o título da aba do navegador. */
export function useDocumentTitle(title) {
  useEffect(() => {
    if (title) document.title = title
  }, [title])
}
