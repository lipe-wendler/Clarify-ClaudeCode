import { Route, Routes } from 'react-router'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import ScrollToHash from './components/layout/ScrollToHash'
import { useLanguage } from './i18n/LanguageProvider'
import CaseStudy from './pages/CaseStudy'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

/**
 * Estrutura comum a todas as páginas (header, conteúdo, rodapé) e as rotas:
 *   /              → Home
 *   /work/:slug    → página do case (saas-notarial, fechamento-contabil, restaurante-manager)
 *   *              → 404
 * Na Vercel, vercel.json reescreve qualquer rota para index.html (SPA).
 */
export default function App() {
  const { t } = useLanguage()
  return (
    <>
      {/* Atalho de acessibilidade: pula o menu direto para o conteúdo */}
      <a
        href="#conteudo"
        className="fixed top-2 -left-[999px] z-50 rounded-sm bg-accent px-3 py-2 font-semibold text-on-accent focus:left-2"
      >
        {t.nav.skip}
      </a>
      <ScrollToHash />
      <Header />
      <main id="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
