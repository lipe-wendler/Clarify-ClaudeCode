# Felipe Wendler · Portfólio

Portfólio pessoal de **Felipe Wendler (F.Wendler)**: sistemas de gestão, automações e integrações
com IA para problemas reais de negócio.

> Projeto desenvolvido durante o Curso de Desenvolvimento com Claude Code da Clarify.

## Tecnologias

- [React 19](https://react.dev) + [Vite](https://vite.dev) + [React Router](https://reactrouter.com)
- [Tailwind CSS v4](https://tailwindcss.com) (plugin `@tailwindcss/vite`, sem `tailwind.config.js`)
- **Design System F.Wendler**: tokens, fontes (Urbanist, DM Sans, Space Mono) e componentes portados
  para React em `src/components/ds/`

Layout **mobile first**: os estilos base são os do celular; `sm:`, `md:`, `lg:` e `xl:` ampliam para
telas maiores. Os diagramas usam *container queries*. Tema escuro, o padrão da marca.

## Rodando localmente

Requer Node.js 20.19 ou superior.

```bash
npm install
npm run dev       # desenvolvimento em http://localhost:5173
npm run build     # build de produção em dist/
npm run preview   # serve o build de produção
```

## Estrutura

```
index.html                       # HTML base e metatags de compartilhamento
public/images/                   # Imagens da marca (versões larga e recorte mobile)
src/
  main.jsx                       # Entrada: CSS, roteador e idioma
  App.jsx                        # Header, rotas (/ , /work/:slug, 404) e rodapé
  index.css                      # Tailwind + tokens do DS + escala tipográfica
  styles/tokens.css              # Tokens do Design System F.Wendler (cores, fontes, espaço)
  styles/fwendler.css            # Estilos dos componentes do DS (classes fw-*)
  content/pt.js, content/en.js   # TODOS os textos, em português e inglês
  content/shared.js              # Links, imagens, ordem e estrutura dos projetos
  i18n/LanguageProvider.jsx      # Idioma (detecção pelo navegador + seletor PT/EN)
  components/ds/                 # Componentes do DS: Button, Tag, Tabs, Stepper, Media...
  components/brand/              # Seções de marca: Hero, About, CTA final
  components/sections/           # Seções de UI: Proof, Projetos, Método, Capacidades...
  components/case/               # Capas e diagramas dos projetos
  pages/                         # Home, página de case e 404
```

**Para atualizar o conteúdo**, edite `src/content/pt.js` e `src/content/en.js` (mesmo formato).
Nos títulos, `*palavra*` vira o destaque amarelo; nos parágrafos, `**trecho**` vira negrito.
Um projeto novo precisa de uma entrada em `projectOrder`/`projectMeta` (`shared.js`) e do texto
nos dois idiomas.

## Deploy na Vercel

1. Acesse [vercel.com/new](https://vercel.com/new) e importe `lipe-wendler/professional-portfolio`.
2. A Vercel detecta o Vite (configuração também em `vercel.json`: build `npm run build`, saída
   `dist`, e reescrita de rotas para `index.html`, necessária para as páginas `/work/...`).
3. Clique em **Deploy**.

A produção usa o branch padrão do repositório; outros branches geram URLs de preview. Para publicar
o branch `portifolio` em produção, faça o merge ou mude o *Production Branch* em **Settings → Git**.
