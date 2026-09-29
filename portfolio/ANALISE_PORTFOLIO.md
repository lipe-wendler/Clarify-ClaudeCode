# Análise consolidada — Portfólio profissional de Felipe Wendler (F.Wendler)

> Documento de trabalho que sustenta o site do portfólio (React + Vite + Tailwind + Design System F.Wendler, na raiz do repositório).
> Data da análise: 29/09/2026 · Status: **v1: rascunho que depende das respostas do briefing (seção 8)**

---

## 1. Sumário executivo

Felipe Wendler se apresenta publicamente como **F.Wendler**, com a assinatura de marca
**"Understanding people. Connecting technology. Solving problems."** e o foco
**JavaScript & PHP · Automação · Integrações com IA**.

As evidências disponíveis mostram um perfil de **engenheiro de software e empreendedor**. Ele é
sócio de empresa de tecnologia (CodeHigh), constrói sistemas de gestão para nichos com regras de
negócio complexas (cartórios, imobiliárias, restaurantes) e trabalha num modelo de
**desenvolvimento assistido por agentes de IA**, com processo de engenharia maduro: CI,
migrations testadas, ambientes de preview, Dependabot, worktrees e revisão cruzada entre modelos.

O maior diferencial está na **combinação entre domínio de negócio e engenharia com IA**: ele
entende o processo do cliente (atos notariais, matrículas, Simples Nacional, estoque) e o
transforma em software e automações confiáveis.

A maior lacuna está no **histórico anterior a maio/2026**: formação, empregos anteriores,
métricas de resultado e autorizações de divulgação. Ela é tratada no briefing da seção 8.

---

## 2. Fontes analisadas

| Fonte | O que foi extraído | Confiabilidade |
|---|---|---|
| Perfil GitHub `lipe-wendler` (bio e banner do README) | Nome, título "JavaScript & PHP Software Engineer", tagline, identidade visual preto + amarelo | Alta (público) |
| Repositório `professional-portfolio` (antes `Clarify-ClaudeCode`) | Participação no *Curso de Desenvolvimento com Claude Code* da Clarify | Alta |
| Histórico de sessões do Claude Code (mai–set/2026, cerca de 60 sessões) | Projetos, tarefas técnicas, ferramentas e forma de trabalho | Média-alta: só títulos e resumos, sem acesso ao código |
| Skills pessoais do Claude (`planilha-despesas`, `planilha-receitas`, `pacote-contador`) | Empresas CodeHigh e KAW, papel de sócio, domínio de contabilidade e Simples Nacional, automação de processos | Alta |
| Memória persistente do Claude | Nenhuma memória salva foi encontrada neste ambiente | — |

> **Limitação:** não havia memória persistente nem acesso ao código dos repositórios
> `LipeWendler/*`. As conclusões vêm dos títulos e resumos das sessões e das skills. Tudo o que
> foi **inferido** aparece marcado com *(inferido)*.

---

## 3. Perfil consolidado

### 3.1 Identidade

- **Nome:** Felipe Wendler · **Marca:** F.Wendler
- **Título atual (GitHub):** JavaScript & PHP Software Engineer
- **Eixos da marca:** JavaScript & PHP · Automation · AI Integrations
- **Manifesto:** *Understanding people. Connecting technology. Solving problems.*
- **Papel empresarial:** sócio da **CodeHigh** (empresa de TI/software no Simples Nacional,
  com vendas por plataforma e planos avulsos, mensais e anuais) e da **KAW** (empresa
  multiatividade)
- **Formação contínua:** Curso de Desenvolvimento com Claude Code (Clarify), em 2026

### 3.2 Identidade visual já existente (aproveitada no site)

| Elemento | Valor |
|---|---|
| Fundo | Preto grafite (`#0E0E0F`) |
| Destaque | Amarelo (`#F5C62E`) em "Solving problems." e no traço sob o subtítulo |
| Neutros | Cinzas em planos geométricos (`#8A8A8A`, `#5A5A5A`) |
| Grafismo | Círculo amarelo, planos cinza sobrepostos e linhas finas amarelas em curva ("conexões") |
| Tipografia | Sans geométrica e humanista (no site: *Plus Jakarta Sans*) |

### 3.3 Posicionamento proposto

> **Engenheiro de software que traduz processos complexos de negócio em sistemas e automações
> com IA: do entendimento do problema ao deploy com qualidade.**

Pilares, derivados do manifesto:

1. **Understanding people**: imersão no domínio do cliente (cartório, imobiliária, restaurante,
   contabilidade) antes de escrever código.
2. **Connecting technology**: integrações, automação e agentes de IA (Claude Code, Codex, AIOX)
   conectados ao fluxo de trabalho real.
3. **Solving problems**: entrega com rigor de engenharia (testes, CI, segurança, documentação).

---

## 4. Linha do tempo reconstruída (a partir das sessões)

| Período | Marco | Fonte |
|---|---|---|
| Mai/2026 | Estudo da arquitetura do framework de agentes **AIOX** aplicado ao sistema de cartório | Sessão "Estudar arquitetura e funcionamento do AIOX" |
| Mai/2026 | **LECTUM** (sistema para cartório): fase 2, módulo **Ata Notarial**, revisão de **UX** e **auditoria de segurança da autenticação** | Sessões de 14 a 21/05 |
| Mai/2026 | **Restaurante Manager**: correção de *race condition* no estoque de bebidas | Sessão de 15/05 |
| Jul/2026 | LECTUM: análise completa do repositório, reorganização do onboarding, checklist, épico **Matrícula** (MAT01.04) e helpers de **CND** | Sessões de 08 e 22/07 |
| Ago/2026 | **Site de imobiliária**: newsletter e catálogo de imóveis | Sessões de 24/08 |
| Set/2026 | **Monorepo greenfield**: estrutura inicial; análise dupla **Claude + Codex**; consolidação de contradições na documentação | Sessões de 02–03/09 |
| Set/2026 | **SaaS Imobiliário (`saas-imob`)**: agentes de IA no repositório, worktrees, Dependabot, migrations com Postgres no CI, documentação do fluxo Git | Sessões de 15–18/09 |
| Set/2026 | Marca pessoal no GitHub (`lipe-wendler`, criado em 25/09) e curso Clarify | GitHub |
| Contínuo | Automação da rotina contábil das empresas (CodeHigh e KAW) com skills do Claude | Skills pessoais |

> Antes de mai/2026 não há evidência disponível. Ver perguntas 6 a 11.

---

## 5. Projetos identificados

### 5.1 LECTUM: sistema de gestão para cartórios *(repositório `sistema-cartorio`)*
- **Domínio:** serviços notariais e registrais: atos notariais, matrícula de imóveis e
  certidões negativas (CND).
- **Entregas evidenciadas:** módulo de Ata Notarial; épico de Matrícula (MAT01.04); helpers de
  CND; revisão de UX; verificação de segurança da autenticação; análise completa do repositório;
  reorganização do onboarding de desenvolvedores; checklist de qualidade do produto.
- **Destaque:** uso de framework de agentes (AIOX) e múltiplas sessões paralelas de IA para
  acelerar fases do projeto.
- **Lacunas:** stack, cliente real e uso em produção, tamanho do time, métricas, permissão
  para divulgar o nome.

### 5.2 SaaS Imobiliário *(repositório `saas-imob`)*
- **Domínio:** software como serviço para imobiliárias.
- **Entregas evidenciadas:** pipeline de CI com **migrations validadas contra Postgres real** no
  runner; migrations em ambiente de preview; política do **Dependabot** (ignorar *majors*);
  ciclo de vida de **git worktrees** para desenvolvimento paralelo; **configuração de agentes de
  IA** no repositório; documentação do fluxo Git.
- **Evidência de qualidade:** lint, typecheck, build e **233 testes automatizados** passando
  (PR de documentação, 18/09/2026).
- **Lacunas:** estágio (MVP, beta ou produção), clientes, stack completa, métricas.

### 5.3 Site de imobiliária
- **Entregas:** newsletter e catálogo/listagem de imóveis (*properties*).
- *(inferido)* Pode ser a vitrine pública ligada ao SaaS imobiliário.
- **Lacunas:** cliente, URL, resultados (leads, tráfego).

### 5.4 Restaurante Manager *(repositório `restaurante-manager`)*
- **Domínio:** gestão de restaurante e controle de estoque.
- **Entrega evidenciada:** diagnóstico e correção de **race condition** no estoque de bebidas
  (concorrência e integridade de dados).
- **Lacunas:** contexto (cliente ou produto próprio), stack, status.

### 5.5 Automação contábil com IA *(CodeHigh e KAW)*
- **Problema:** fechamento mensal de duas empresas do Simples Nacional, com extratos, faturas
  de cartão, NFs, DAS e envio ao contador.
- **Solução:** três skills de IA mais um padrão de organização de pastas:
  - `planilha-despesas`: planilha mensal por competência (recorte da fatura por mês-calendário,
    câmbio e IOF por compra internacional, categorias fixas, conferência de documentos);
  - `planilha-receitas`: controle anual de receita por NFS-e, segregação por Anexo, **Fator R**,
    sublimite de R$ 3,6 mi e limite de R$ 4,8 mi, contas a receber;
  - `pacote-contador`: conferência de *red flags*, índice `ENVIO.md` e `.zip` do mês.
- **Destaque:** mostra a capacidade de modelar regras fiscais em processo automatizado e
  auditável. É um case forte de "Automation · AI Integrations".
- **Lacunas:** tempo economizado por mês e permissão para mostrar como case.

### 5.6 Engenharia com agentes de IA: monorepo greenfield e documentação
- **Entregas evidenciadas:** estrutura inicial de monorepo greenfield; **análise cruzada Claude
  × Codex** com consolidação (3 achados na interseção e 6 decisões em aberto registradas);
  varredura de 4 documentos com **31 contradições e 5 ambiguidades** de termos encontradas;
  coordenação de revisão documental com consolidador (21 contradições em 3 gerações de
  documentos); orquestração de várias sessões paralelas.
- **Destaque:** metodologia própria de *spec-driven development* com IA, em que vários agentes
  produzem, confrontam e consolidam as especificações antes do código.
- **Lacunas:** qual produto é o monorepo e se pode ser citado.

### 5.7 Formação: Curso de Desenvolvimento com Claude Code (Clarify)
- Repositório `professional-portfolio` (antes `Clarify-ClaudeCode`), onde este portfólio foi gerado.

---

## 6. Competências mapeadas

| Grupo | Competências | Evidência |
|---|---|---|
| **Linguagens** | JavaScript, PHP; *(inferido)* TypeScript, pelo typecheck no CI | GitHub, saas-imob |
| **Dados** | PostgreSQL, migrations, integridade e concorrência | saas-imob, restaurante-manager |
| **DevOps / Qualidade** | CI (lint, typecheck, build, testes), ambientes de preview, Dependabot, fluxo Git documentado, worktrees | saas-imob |
| **Segurança** | Revisão de autenticação | LECTUM |
| **Produto / UX** | Revisão de UX, checklist de produto, onboarding | LECTUM |
| **IA aplicada** | Claude Code (CLI, VS Code, remoto), Codex, AIOX, skills personalizadas, multiagentes, revisão cruzada entre modelos | Sessões e skills |
| **Automação de processos** | Planilhas automatizadas (xlsx), conferências automáticas, padronização de pastas, scripts PowerShell | Skills contábeis |
| **Negócio** | Gestão de empresa no Simples Nacional, Fator R, regime de competência, relacionamento com contabilidade | Skills contábeis |
| **Domínios verticais** | Cartórios (notas e registro de imóveis), mercado imobiliário, food service | Projetos |

---

## 7. Diagnóstico para o portfólio

### Pontos fortes
1. **Nicho e profundidade de domínio:** cartórios e contabilidade são áreas com regras duras;
   dominar isso diferencia.
2. **Rigor de engenharia visível** e mensurável (233 testes, CI com Postgres, segurança).
3. **Marca pessoal pronta e coerente** (tagline, paleta e grafismo).
4. **Uso avançado e metódico de IA**, bem acima do uso casual: orquestração, revisão cruzada,
   skills próprias.
5. **Visão de dono:** sócio de empresa, entende custo, imposto e operação.

### Pontos de atenção
1. **Histórico curto visível:** as evidências cobrem só mai–set/2026 e o GitHub público foi
   criado em 25/09/2026, com 2 repositórios.
2. **Repositórios dos projetos estão em outra conta (`LipeWendler`)** e provavelmente são
   privados. Será preciso usar screenshots, demos ou estudos de caso.
3. **Faltam métricas de resultado** (usuários, tempo economizado, receita, performance).
4. **Confidencialidade:** confirmar se é possível nomear o LECTUM, clientes e sistemas de
   cartório.
5. **Faltam foto, contatos e depoimentos.**

### Decisões tomadas no site v1 (revisar após o briefing)
- Os projetos aparecem como **estudos de caso** (contexto, desafio, solução, evidência), sem
  inventar métricas. Onde falta número, a evidência é qualitativa.
- Sócios, contador e dados financeiros **não aparecem**.
- O contato publicado é só o GitHub. E-mail, LinkedIn e telefone entram após a confirmação
  (pergunta 27).
- Idioma: português, mantendo a tagline em inglês, que é da marca.

---

## 8. Briefing: 30 perguntas

> Responda direto neste arquivo (abaixo de cada pergunta) ou no chat. As respostas geram a v2
> do site.

### A. Identidade e posicionamento
1. **Título principal:** qual cargo ou título deve abrir o portfólio? Opções: *Software
   Engineer*, *Full-stack Developer*, *Engenheiro de Automação & IA*, *Founder / Sócio da
   CodeHigh* ou uma combinação.
2. **Público-alvo:** para quem é o portfólio? Recrutadores (CLT/PJ), clientes PME
   (freelance/consultoria), cartórios e imobiliárias (venda de produto), parceiros ou
   investidores?
3. **Idioma:** só português, só inglês ou versão bilíngue?
4. **Localização e disponibilidade:** cidade e estado, modelo (remoto, híbrido, presencial) e
   regime de contratação aceito.
5. **Sua história:** como e quando você começou na tecnologia? O que te motiva? Essa é a base da
   bio em primeira pessoa.

### B. Trajetória e formação
6. **Experiências anteriores:** empresas, cargos, períodos e principais responsabilidades. O
   histórico que analisei cobre só mai–set/2026.
7. **Formação acadêmica:** curso, instituição, ano de conclusão ou previsão.
8. **Certificações e cursos**, além do Curso de Claude Code da Clarify.
9. **CodeHigh:** quando foi fundada, qual o seu papel (fundador, CTO, dev líder), o que a
   empresa vende (produtos e serviços) e quais os principais clientes ou segmentos.
10. **KAW:** o que a empresa faz, qual o seu papel e se ela deve aparecer no portfólio.
11. **Anos de experiência** com JavaScript e PHP, e quais frameworks você usa (ex.: React,
    Next.js, Node, Laravel, Vue, WordPress).

### C. Projetos
12. **LECTUM:** é produto da CodeHigh ou projeto para cliente? Está em produção? Quantos
    cartórios ou usuários? **Posso citar o nome?**
13. **LECTUM, detalhes:** stack, tamanho do time, seu papel exato e módulos entregues além de
    Ata Notarial, Matrícula e CND.
14. **SaaS Imobiliário:** é produto próprio ou para cliente? Em que estágio está (MVP, beta,
    produção)? Qual o nome comercial e a stack?
15. **Site da imobiliária:** para quem foi feito, tem URL pública e houve algum resultado
    (leads, visitas)?
16. **Restaurante Manager:** qual o contexto (cliente, produto, estudo)? Está em uso?
17. **Automação contábil:** posso apresentar como case? Quantas horas por mês ela economiza?
18. **Monorepo greenfield:** que produto é? Pode ser citado? Qual o papel do Codex e do Claude
    no processo?
19. **Outros projetos:** existem trabalhos anteriores a 2026 ou fora dessas fontes (freelas,
    open source, TCC, hackathons) que devem entrar?
20. **Métricas:** para cada projeto, algum número de impacto (usuários, tempo economizado,
    redução de erros, performance, receita, prazo de entrega)?
21. **Material visual:** há screenshots, links ao vivo, vídeos ou demos? Tem autorização para
    exibir telas de sistemas de clientes?

### D. Competências
22. **Stack confirmada:** linguagens, frameworks, bancos, cloud/hosting, ferramentas de design
    e de gestão.
23. **Proficiência:** quais tecnologias você quer destacar como fortes e quais prefere omitir?
24. **Liderança e soft skills:** você gerencia pessoas, fornecedores ou clientes? Tem exemplos
    de negociação, levantamento de requisitos ou treinamento?
25. **Idiomas** falados e nível (ex.: inglês técnico, fluente).

### E. Prova social, marca e objetivo
26. **Depoimentos:** algum cliente, sócio ou colega poderia dar 1–2 frases de recomendação?
27. **Canais de contato a publicar:** e-mail profissional, LinkedIn, WhatsApp, site próprio,
    Instagram?
28. **Foto profissional:** você tem uma? Quer usar o monograma "F.Wendler" como logo?
29. **Identidade visual:** mantemos o preto + amarelo do banner do GitHub? Tem fonte ou logo
    oficial?
30. **Objetivo e chamada para ação:** o que você quer alcançar nos próximos 12–24 meses com
    o portfólio (vaga, clientes, parcerias, consultoria em IA)? Qual ação o leitor deve
    tomar ao final?

---

## 9. Estrutura do portfólio (site v3: mockup + Design System F.Wendler)

Site em React + Vite + Tailwind v4, mobile first, deploy na Vercel. Os componentes seguem o
**Design System F.Wendler** (Urbanist, DM Sans, Space Mono; amarelo `#FFC629` e preto `#0B0B0B`;
tema dark). Princípio: **a marca chama atenção, a interface organiza evidência.**

| # | Seção | Camada | Conteúdo |
|---|---|---|---|
| — | Header | — | Wordmark, navegação, seletor PT/EN e CTA "Vamos conversar" |
| — | Hero | Marca | Foto + arquitetura, manifesto, cargo, resumo, LinkedIn e GitHub |
| — | Proof | UI | 4 números comprovados (tempo como dev calculado automaticamente) |
| 01 | Projetos | UI | SaaS Notarial, Fechamento contábil com IA e Restaurante Manager, cada um com página de case (`/work/:slug`) |
| 02 | Método | UI | Entender → Estruturar → Construir → Medir → Melhorar |
| 03 | Capacidades | UI | 4 pilares com tecnologias como evidência |
| 04 | Experiência | UI | Desenvolvedor (2025–atual), escrevente em cartório (2023–2025) e formação (fonte: CV) |
| 05 | Sobre | Marca | Foto de viagem, trajetória, idiomas e citação |
| 06 | Agora | UI | Método multiagente, frameworks de agentes, cursos, este portfólio |
| 07 | Contato | Marca | LinkedIn (principal) e GitHub |

### Decisões da v3
- Sem download de CV nem e-mail, telefone ou cidade no site. O cartório aparece sem nome.
- O MVP de minutagem com AI Vision (do CV) entra no case do SaaS Notarial.
- Só números comprovados; os números do diagrama do Restaurante são marcados como ilustrativos.
- Idioma detectado pelo navegador, com escolha salva no navegador.

### Próximos passos
1. Fazer o deploy na Vercel (ver `README.md`) e colocar o link no LinkedIn e no GitHub.
2. Screenshots reais dos projetos, quando puderem ser mostrados, substituem as capas em código.
3. Um domínio próprio melhora a pré-visualização do link (a imagem de compartilhamento precisa de URL absoluta).

---

## 10. Arquivos

| Arquivo | Função |
|---|---|
| `portfolio/ANALISE_PORTFOLIO.md` | Esta análise e o briefing |
| `src/content/pt.js`, `src/content/en.js` | Todos os textos, nos dois idiomas |
| `src/content/shared.js` | Links, imagens, ordem e estrutura dos projetos |
| `src/components/ds/` | Componentes do Design System F.Wendler portados para React |
| `README.md` | Como rodar, editar e publicar na Vercel |
