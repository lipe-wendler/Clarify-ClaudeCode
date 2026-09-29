import { useLanguage, useDocumentTitle } from '../i18n/LanguageProvider'
import AboutFelipe from '../components/brand/AboutFelipe'
import FinalCta from '../components/brand/FinalCta'
import Hero from '../components/brand/Hero'
import Capabilities from '../components/sections/Capabilities'
import Currently from '../components/sections/Currently'
import Experience from '../components/sections/Experience'
import ProcessFlow from '../components/sections/ProcessFlow'
import Proof from '../components/sections/Proof'
import SelectedWork from '../components/sections/SelectedWork'

/**
 * Homepage. A ordem segue o que um recrutador precisa em 30 segundos:
 * Hero → Proof → Projetos → (Método, Capacidades) → Experiência.
 * Só depois de provar o trabalho aparece a pessoa (About) e o contato.
 *
 * Camada de marca (fotografia, arquitetura, amarelo): Hero, About, CTA final.
 * Camada de UI (grid, componentes, bordas): todo o resto.
 */
export default function Home() {
  const { t } = useLanguage()
  useDocumentTitle(t.meta.title)

  return (
    <>
      <Hero />
      <Proof />
      <SelectedWork number={1} />
      <ProcessFlow number={2} />
      <Capabilities number={3} />
      <Experience number={4} />
      <AboutFelipe number={5} />
      <Currently number={6} />
      <FinalCta number={7} />
    </>
  )
}
