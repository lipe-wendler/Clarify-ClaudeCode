# Felipe Wendler · Portfólio

Portfólio pessoal de **Felipe Wendler (F.Wendler)**, engenheiro de software JavaScript & PHP:
sistemas de gestão, automação de processos e integrações com IA.

> Projeto desenvolvido durante o Curso de Desenvolvimento com Claude Code da Clarify.

## Tecnologias

- [React 19](https://react.dev) + [Vite](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com) (plugin `@tailwindcss/vite`, sem `tailwind.config.js`)
- Fontes self-hosted via Fontsource (Plus Jakarta Sans e JetBrains Mono)

Layout **mobile first**: os estilos base são os do celular, e os prefixos `sm:`, `md:` e `lg:`
ajustam para telas maiores. Os diagramas dos projetos usam *container queries* (`@container`)
para se adaptar à largura do card. O tema claro/escuro segue a configuração do visitante.

## Rodando localmente

Requer Node.js 20.19 ou superior.

```bash
npm install
npm run dev       # servidor de desenvolvimento em http://localhost:5173
npm run build     # build de produção em dist/
npm run preview   # serve o build de produção localmente
```

## Estrutura

```
index.html                  # HTML base, título e metatags de compartilhamento
public/favicon.svg          # Ícone da aba
src/
  main.jsx                  # Entrada: fontes, CSS global e <App />
  App.jsx                   # Ordem das seções da página
  index.css                 # Tailwind, tokens de cor (tema claro/escuro) e componentes CSS
  data/profile.js           # TODO o conteúdo: textos, projetos, trajetória e links
  components/               # Uma seção por arquivo (Nav, Hero, About, Projects...)
vercel.json                 # Configuração de deploy na Vercel
portfolio/ANALISE_PORTFOLIO.md  # Análise e briefing que deram origem ao portfólio
```

**Para atualizar o conteúdo** (novo projeto, novo marco, novo link), edite apenas
`src/data/profile.js`. Os componentes leem esses dados e montam o layout.

## Deploy na Vercel

1. Acesse [vercel.com/new](https://vercel.com/new) e importe o repositório `lipe-wendler/Clarify-ClaudeCode`.
2. A Vercel detecta o Vite sozinha (as configurações também estão em `vercel.json`):
   - Build command: `npm run build`
   - Output directory: `dist`
3. Clique em **Deploy**. O site fica disponível em `https://<nome-do-projeto>.vercel.app`.

A Vercel publica em produção o branch padrão do repositório. Enquanto o portfólio estiver no
branch `portifolio`, cada push gera uma URL de preview. Para produção, faça o merge no branch
padrão ou mude o *Production Branch* em **Settings → Git** do projeto na Vercel.

Opcional: em **Settings → Domains** é possível apontar um domínio próprio.
