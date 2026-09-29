import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Method from './components/Method'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Timeline from './components/Timeline'

/**
 * Página única do portfólio. A ordem das seções segue o que um recrutador
 * procura: quem é (Hero/Sobre) → o que fez (Projetos) → como trabalha
 * (Método) → trajetória → contato.
 */
export default function App() {
  return (
    <>
      {/* Atalho de acessibilidade: pula o menu direto para o conteúdo */}
      <a
        href="#conteudo"
        className="absolute -left-[999px] top-2 z-50 rounded bg-accent px-3 py-2 font-bold text-on-accent focus:left-2"
      >
        Pular para o conteúdo
      </a>
      <Nav />
      <main id="conteudo">
        <Hero />
        <About />
        <Projects />
        <Method />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
