# Triangle Green Maids --- Design Specification

**Documento:** `design.md`\
**Projeto:** Redesign da homepage da Triangle Green Maids\
**Direção visual:** Organic Luxury + Editorial Design\
**Idioma da interface:** Inglês, conforme o site atual\
**Restrição obrigatória:** preservar integralmente a copy existente, sem
reescrever, resumir, traduzir ou inventar textos.

------------------------------------------------------------------------

## 1. Objetivo

Elevar a qualidade visual e a narrativa da homepage da Triangle Green
Maids, reforçando a percepção de uma marca profissional, confiável e
ecológica. O redesign deve melhorar hierarquia, ritmo visual,
consistência fotográfica, legibilidade e caminhos de conversão, sem
alterar a copy nem a funcionalidade dos links e CTAs atuais.

A página deve comunicar visualmente três ideias já presentes no
posicionamento da marca:

-   Cuidado com a casa.
-   Conveniência e confiança.
-   Preferência por uma abordagem de limpeza ecológica.

## 2. Princípios inegociáveis

1.  **Copy congelada:** manter exatamente os textos atuais, incluindo
    capitalização, pontuação, idioma, depoimentos, rótulos de botões e
    títulos.
2.  **Não inventar conteúdo:** não criar slogans, benefícios,
    depoimentos, perguntas, respostas ou alegações novas.
3.  **Não remover conteúdo existente:** reorganizar visualmente é
    permitido, mas não apagar informações para simplificar a página.
4.  **Preservar funcionalidades:** manter destinos de links, ações dos
    CTAs, formulários e integrações existentes.
5.  **FAQ:** a homepage pode exibir perguntas e respostas já publicadas
    na página oficial de FAQ. Não criar ou reescrever respostas. Manter
    um link para a página completa se necessário.
6.  **CTA adicional:** reutilizar copy e destino de contratação já
    existentes. O banner pode ser uma nova composição visual, não uma
    nova mensagem.
7.  **Mobile-first:** garantir experiência clara, acessível e funcional
    em telas pequenas.
8.  **Não fazer promessas não verificadas:** o design não deve sugerir
    garantias ou certificações que não estejam sustentadas pelo conteúdo
    atual.

## 3. Direção visual

### Organic Luxury + Editorial Design

Combinar a naturalidade de uma marca ecológica com a sofisticação de uma
publicação de interiores. O resultado deve ser acolhedor, premium e
contemporâneo --- sem parecer uma marca de cosméticos, um template
corporativo genérico ou um site excessivamente minimalista que dificulte
a contratação.

### Personalidade visual

-   Natural, luminosa e acolhedora.
-   Profissional e confiável.
-   Refinada, mas não distante.
-   Comercialmente clara.
-   Fotográfica e editorial, evitando decoração desnecessária.

### Evitar

-   Gradientes chamativos, sombras pesadas e efeitos de vidro.
-   Ícones decorativos em excesso.
-   Cartões idênticos para todas as seções.
-   Fotos de banco de imagens com aparência artificial ou estilos
    incompatíveis.
-   Animações que atrasem a navegação.
-   Contraste insuficiente entre texto e fundo.
-   Alterações na identidade do logotipo sem autorização.

## 4. Paleta de cores proposta

A paleta é uma direção para o redesign. Antes da implementação, comparar
com a identidade e as cores atuais da marca e preservar os elementos
oficiais.

  -----------------------------------------------------------------------
  Token             Cor               Hex               Aplicação
  ----------------- ----------------- ----------------- -----------------
  `color-ivory`     Ivory             `#F7F5EF`         Fundo principal e
                                                        áreas de leitura

  `color-sage`      Sage              `#E1E8DC`         Fundos suaves e
                                                        seção ecológica

  `color-green`     Green             `#526B50`         Botões, links
                                                        destacados e
                                                        pequenos acentos

  `color-sand`      Sand              `#C9AD88`         Detalhes
                                                        pontuais, sem
                                                        comprometer
                                                        contraste

  `color-forest`    Forest            `#26352B`         Footer, banner
                                                        CTA e títulos de
                                                        alto contraste

  `color-white`     White             `#FFFFFF`         Superfícies e
                                                        áreas de
                                                        contraste

  `color-text`      Charcoal          `#292E29`         Texto principal
                                                        sobre fundos
                                                        claros
  -----------------------------------------------------------------------

### Regras de aplicação

-   Usar ivory e branco quente como superfícies predominantes.
-   Reservar verde-floresta para momentos de ênfase, como CTA e footer.
-   Usar sage para separar seções sem criar excesso de blocos coloridos.
-   Sand deve ser um acento discreto, não uma cor para texto pequeno.
-   Verificar contraste WCAG AA para texto e controles; ajustar os
    valores se necessário.
-   Não depender apenas da cor para comunicar estados ou interações.

## 5. Tipografia

### Fontes sugeridas

-   **Títulos:** Cormorant Garamond.
-   **Corpo, navegação e controles:** DM Sans.

Essas fontes são sugestões. Confirmar licenças, disponibilidade e
compatibilidade com a implementação. Se a marca já utilizar fontes
próprias, avaliar sua manutenção antes de substituí-las.

### Hierarquia tipográfica sugerida

  --------------------------------------------------------------------------
  Elemento                     Desktop               Mobile Orientação
  --------------- -------------------- -------------------- ----------------
  H1 do hero                 56--72 px            38--46 px Forte,
                                                            editorial,
                                                            line-height
                                                            compacto

  H2 de seção                38--48 px            30--36 px Serifada, clara
                                                            e consistente

  H3 / título de             22--28 px            20--24 px Boa leitura em
  serviço                                                   cartões ou
                                                            grades

  Corpo                      16--18 px                16 px Sans-serif,
                                                            line-height
                                                            1.5--1.7

  Navegação                  14--16 px            14--16 px Legível e sem
                                                            excesso de itens
                                                            visíveis

  Botões                     14--16 px            14--16 px Peso
                                                            médio/semibold e
                                                            área de toque
                                                            ampla

  Metadados                  12--14 px            12--14 px Usar com
                                                            moderação
  --------------------------------------------------------------------------

Os valores são referências de implementação, não uma autorização para
alterar o texto. Ajustar a escala ao conteúdo real e evitar que títulos
ou descrições sejam truncados.

## 6. Layout, grid e espaçamento

-   Container máximo sugerido: `1200–1280px`.
-   Margens laterais desktop: `48–72px`, conforme viewport.
-   Margens laterais mobile: `20–24px`.
-   Grid desktop: 12 colunas quando útil; grades de serviços podem usar
    2--4 colunas conforme quantidade e largura.
-   Espaçamento entre seções: aproximadamente `88–128px` em desktop e
    `56–80px` em mobile.
-   Usar alinhamentos consistentes e alternar composições de texto e
    imagem para criar ritmo editorial.
-   Evitar que todas as seções tenham a mesma estrutura ou o mesmo
    fundo.
-   Não aumentar a altura da página sem necessidade; priorizar clareza e
    ritmo.

## 7. Direção de fotografia

Usar imagens com linguagem visual consistente:

-   Luz natural e suave.
-   Interiores limpos, mas verossímeis.
-   Materiais naturais, como madeira, linho e pedra.
-   Enquadramentos amplos para hero e composições verticais ou quadradas
    para serviços.
-   Pessoas fotografadas em situações de trabalho naturais, quando
    houver imagens de equipe.
-   Produtos ecológicos fotografados de maneira simples e sofisticada.

Evitar fotos artificiais, saturação excessiva, filtros diferentes entre
seções e imagens que sugiram serviços não oferecidos. Priorizar as
imagens oficiais existentes quando forem adequadas; substituir apenas
quando houver uma melhoria clara.

## 8. Arquitetura proposta da homepage

A ordem abaixo é uma proposta de narrativa. Antes de implementar,
conferir a homepage publicada e mapear todos os blocos e textos
existentes. Reutilizar conteúdo real e preservar a copy palavra por
palavra.

### 01. Header / Navigation --- existente

**Conteúdo:** logotipo, navegação e acesso ao agendamento.

**Design:** - Cabeçalho limpo e alinhado ao grid. - Boa separação entre
logotipo, links e CTA. - Estado de foco visível e hover discreto. - Em
mobile, menu compacto e acessível. - Se o header ficar fixo, garantir
que não ocupe espaço excessivo nem cubra conteúdo.

**Regra:** manter rótulos, destinos e funcionalidades atuais.

### 02. Hero --- existente

**Conteúdo conhecido a preservar:** título atual "Keeping the Triangle
Green and Clean", texto existente e CTAs "BOOK ONLINE NOW" e "GET A
QUICK QUOTE", conforme presentes na página atual.

**Design:** - Composição editorial assimétrica, combinando copy e imagem
ampla de interior luminoso. - H1 como foco principal, com largura de
linha controlada. - CTA principal em verde; CTA secundário com
tratamento visual mais discreto, mas claramente identificável. - Não
sobrepor texto à imagem se isso reduzir legibilidade. - Em mobile,
empilhar conteúdo com copy antes da imagem ou conforme o fluxo atual de
conversão.

**Objetivo:** tornar a proposta e o próximo passo compreensíveis
rapidamente, sem alterar os textos.

### 03. Faixa de confiança --- reorganização de conteúdo existente

**Conteúdo:** logotipos de parceiros ou elementos de credibilidade já
existentes, se presentes na homepage.

**Design:** - Faixa compacta, com alinhamento e escala consistentes. -
Fundo neutro e contraste suficiente. - Não inserir novos logotipos,
certificações ou alegações.

**Objetivo:** reforçar credibilidade sem competir com o hero.

### 04. Serviços --- existente

**Conteúdo:** preservar as categorias, títulos e descrições exatamente
como aparecem no site. Categorias identificadas na análise incluem
limpeza de casas e apartamentos, limpeza profunda, serviços domésticos
complementares, limpeza de mudança e pós-construção; confirmar os nomes
e a estrutura exatos no site antes de codificar.

**Design:** - Grade de serviços com fotografias consistentes. - Evitar
excesso de bordas, sombras e ícones. - Usar títulos claros e descrições
legíveis. - Manter links e destinos originais de cada serviço. - Tornar
os cartões clicáveis apenas quando já houver destino ou quando o
comportamento for explicitamente aprovado.

**Objetivo:** ajudar o visitante a identificar o serviço relevante com
rapidez.

### 05. Diferencial ecológico --- reorganização de conteúdo existente

**Conteúdo:** textos atuais que explicam a proposta ecológica e os
produtos utilizados.

**Design:** - Fundo sage ou composição com imagem e texto. - Fotografia
de produtos ou ambiente com luz natural. - Elementos gráficos discretos;
não usar selos ambientais novos. - Manter as alegações exatamente como
publicadas e não ampliá-las.

**Objetivo:** dar destaque visual ao diferencial da marca.

### 06. Proprietário e equipe --- existente, se presente na homepage

**Conteúdo:** preservar o texto e a identificação existentes sobre o
proprietário/equipe.

**Design:** - Retrato autêntico e composição editorial. - Texto com
largura de leitura confortável. - Evitar aparência excessivamente
corporativa ou fotos genéricas que não representem a empresa.

**Objetivo:** humanizar o negócio e aumentar a confiança.

### 07. Depoimentos --- existente

**Conteúdo:** título, avaliações, nomes e demais informações exatamente
como publicados.

**Design:** - Dar prioridade à legibilidade do texto. - Utilizar cartões
simples ou uma composição editorial. - Não editar depoimentos, encurtar
frases ou criar avaliações. - Se houver carrossel, manter controles
acessíveis e não iniciar rotação automática sem necessidade.

**Objetivo:** tornar a prova social fácil de consultar.

### 08. Banner CTA --- novo componente visual

**Conteúdo:** reutilizar um CTA e a copy de contratação que já existem
na homepage. Não criar slogan, subtítulo ou promessa nova.

**Posição:** depois dos depoimentos, como ponto de conversão
intermediário.

**Design:** - Fundo verde-floresta ou fotografia ampla com contraste
suficiente. - Tipografia clara e CTA em posição de destaque. - Bastante
espaço interno e composição simples. - Reutilizar o destino de
agendamento/orçamento já validado. - O banner não deve repetir múltiplos
botões se isso criar competição desnecessária.

**Objetivo:** oferecer um próximo passo claro após a prova social.

### 09. Área de atendimento --- existente, se presente

**Conteúdo:** título, cidades, mapa e demais informações atuais.

**Design:** - Composição entre texto e mapa, com boa adaptação mobile. -
Não adicionar cidades ou sugerir cobertura que não esteja confirmada. -
Se houver mapa interativo, assegurar controles acessíveis e alternativa
textual.

**Objetivo:** ajudar o visitante a verificar se está na área atendida.

### 10. FAQ --- nova seção na homepage, usando conteúdo publicado

**Conteúdo:** selecionar perguntas e respostas já publicadas na página
oficial de FAQ. Não criar perguntas, reescrever respostas ou resumir o
conteúdo. Se a lista for extensa, mostrar apenas um subconjunto literal
e incluir um link para a página completa, usando o rótulo e destino
existentes quando possível.

**Posição:** depois da área de atendimento e antes do CTA final.

**Design:** - Fundo ivory ou branco quente. - Perguntas em formato de
acordeão. - Divisórias finas, ícone simples de expandir/recolher e
estados de foco visíveis. - Uma pergunta aberta por vez é uma opção, não
um requisito. - Garantir navegação por teclado, semântica correta e
funcionamento em leitores de tela. - Respostas devem ser copiadas
literalmente da fonte oficial e permanecer completas. - Não alterar a
página original de FAQ; a seção da homepage é uma apresentação
adicional.

**Objetivo:** responder dúvidas perto do fim da jornada, antes da
decisão de contratação.

### 11. CTA final --- reaproveitar conteúdo existente

**Conteúdo:** reutilizar o texto e o CTA atuais, sem inventar uma nova
chamada.

**Design:** - Bloco visual mais compacto que o banner intermediário. -
Contraste suficiente em relação à FAQ e ao footer. - Botão fácil de
localizar e tocar.

**Objetivo:** permitir que o visitante agende após consultar as
respostas.

### 12. Footer --- existente

**Conteúdo:** informações de contato, navegação, FAQ, produtos, ofertas,
checklist e demais links atualmente publicados.

**Design:** - Fundo verde-floresta, se compatível com a identidade da
marca. - Agrupar links em colunas bem definidas. - Em mobile, empilhar
ou usar grupos expansíveis acessíveis. - Preservar telefone, e-mail,
endereço, redes e destinos atuais. - Não esconder informações
importantes em texto de baixo contraste.

**Objetivo:** oferecer um encerramento organizado e facilitar acesso a
informações secundárias.

## 9. Componentes de interface

### Botões

-   Primário: fundo `color-green` ou `color-forest`, texto branco,
    contraste validado.
-   Secundário: fundo transparente ou ivory, borda visível e texto de
    alto contraste.
-   Estados obrigatórios: default, hover, focus-visible, active e
    disabled quando aplicável.
-   Área de toque recomendada: pelo menos `44 × 44px`.
-   Não mudar rótulos nem destinos existentes.

### Cards de serviço

-   Fotografia consistente.
-   Título e descrição sem truncamento.
-   Bordas discretas ou ausência de borda.
-   Raio sugerido: `8–16px`.
-   Sombra mínima ou nenhuma.

### FAQ accordion

-   Pergunta como controle interativo semântico.
-   Estado aberto/fechado perceptível.
-   Ícone decorativo que não substitua o nome acessível do controle.
-   Resposta legível, com espaçamento adequado.
-   Suporte a teclado e leitores de tela.

### Links

-   Aparência claramente identificável como link.
-   Estados de hover e foco visíveis.
-   Não depender exclusivamente de mudanças de cor muito sutis.

## 10. Responsividade

### Desktop --- 1024px ou mais

-   Hero em duas áreas, quando a composição permitir.
-   Serviços em grade.
-   Depoimentos e área de atendimento com layout editorial.
-   Banner CTA em largura ampla.
-   Footer em colunas.

### Tablet --- 768px a 1023px

-   Reduzir colunas e margens.
-   Evitar texto muito estreito.
-   Manter CTA visível e não comprimir o hero.
-   Ajustar imagens para preservar o assunto principal.

### Mobile --- abaixo de 768px

-   Navegação compacta e acessível.
-   Hero empilhado, com texto e CTA fáceis de encontrar.
-   Botões com largura adequada e área de toque ampla.
-   Serviços em uma coluna ou grade de duas colunas somente quando
    houver espaço suficiente.
-   Depoimentos sem texto cortado.
-   FAQ confortável para toque.
-   Banner CTA adaptado sem perder contraste.
-   Evitar carrosséis obrigatórios para conteúdo essencial.
-   Não ocultar copy existente para economizar espaço.

## 11. Movimento e microinterações

-   Transições curtas e discretas, geralmente entre `150–250ms`.
-   Hover sutil em botões e links.
-   Animações de entrada opcionais e não essenciais.
-   Respeitar `prefers-reduced-motion`.
-   Não usar vídeo de fundo pesado ou animações que atrasem a
    visualização do CTA.
-   Todo conteúdo deve permanecer acessível sem animação.

## 12. Acessibilidade e desempenho

-   Contraste de texto conforme WCAG AA.
-   Estrutura correta de headings, sem saltos arbitrários de nível.
-   Texto alternativo útil para imagens informativas; imagens
    decorativas com alternativa vazia.
-   Navegação completa por teclado e foco visível.
-   Labels associados a campos e mensagens de erro compreensíveis, se
    houver formulários.
-   Carregamento de imagens responsivas, formatos modernos e dimensões
    reservadas para evitar layout shift.
-   Lazy-load em imagens abaixo da dobra; não atrasar indevidamente a
    imagem principal.
-   Minimizar scripts e bibliotecas adicionais.
-   Preservar indexabilidade, URLs e metadados existentes, salvo
    aprovação explícita.

## 13. Estratégia de conteúdo e QA da copy

Antes de publicar:

1.  Exportar ou copiar o texto da homepage atual.
2.  Registrar todos os textos por seção, incluindo rótulos de botões,
    alt text editorial relevante, formulários e mensagens visíveis.
3.  Registrar os destinos de todos os links e CTAs.
4.  Criar uma versão de referência para comparação.
5.  Implementar o redesign sem editar strings.
6.  Comparar texto antigo e novo automaticamente ou por revisão lado a
    lado.
7.  Verificar depoimentos, nomes, cidades, serviços, preços e alegações.
8.  Para a FAQ, copiar diretamente da página oficial e verificar cada
    pergunta e resposta.
9.  Confirmar que nenhum conteúdo existente foi removido.
10. Validar links, formulários, agendamento e orçamento em desktop e
    mobile.

**Critério de aprovação:** nenhuma diferença textual não autorizada.
Mudanças de quebra de linha, tamanho, posição e estilo são permitidas;
mudanças de palavras não são.

## 14. Checklist de implementação

-   [ ] Copy atual inventariada e congelada.
-   [ ] Links, CTAs e funcionalidades documentados.
-   [ ] Paleta validada com a identidade da marca.
-   [ ] Fontes e licenças confirmadas.
-   [ ] Header e hero redesenhados.
-   [ ] Serviços organizados com imagens consistentes.
-   [ ] Seção ecológica refinada.
-   [ ] Conteúdo de proprietário/equipe preservado.
-   [ ] Depoimentos preservados integralmente.
-   [ ] Banner CTA adicionado com copy existente.
-   [ ] FAQ incluída com conteúdo literal da página oficial.
-   [ ] Área de atendimento preservada e responsiva.
-   [ ] CTA final reutiliza texto e destino existentes.
-   [ ] Footer e links secundários preservados.
-   [ ] Testes mobile, teclado e leitor de tela concluídos.
-   [ ] Contraste e desempenho verificados.
-   [ ] Auditoria final de copy concluída.

## 15. Resultado esperado

Uma homepage mais sofisticada, coerente e fácil de navegar, com a
narrativa visual organizada em:

**Apresentação → credibilidade → serviços → diferencial ecológico →
humanização → prova social → CTA → cobertura → FAQ → CTA final →
contato.**

O redesign deve elevar a percepção de qualidade e tornar a contratação
mais clara, sem alterar a voz, as promessas ou qualquer texto original
da Triangle Green Maids.

------------------------------------------------------------------------

**Nota de implementação:** esta especificação é uma proposta de design.
Antes de desenvolver, conferir a homepage e a página de FAQ publicadas
para confirmar o conteúdo, a ordem atual, os nomes exatos das seções e
os destinos dos links. Não presumir a existência de conteúdo ou
funcionalidades que não tenham sido verificados.

------------------------------------------------------------------------

## 16. Variante v2 — "Editorial" (rodada 2, 2026-10-19)

Frame no Figma: `Home — Desktop 1440 · v2 Editorial` (página Home, à direita da v1).
Direção pedida pelo cliente interno: **transmitir paz; layout branco, verde e preto**. Texto preto e branco sobre fundo branco, com detalhes verdes. Tipografia **só sans-serif** (DM Sans), com bold em momentos de destaque (hero).

Decisões:

- **`color/green` = `#368409`** (antes `#526B50`): o verde do logo/site (`#5FC206`) escurecido até passar AA com texto branco (4.71:1). Hover `#2D6E07`. Essa troca também afeta a v1, que usa o mesmo token.
- **`color/green-bright` = `#5FC206`**: verde-limão original. Só decorativo (barra dos cards, grafismo radial do Owner), nunca texto.
- **`color/black` = `#111311`** para texto e footer. Fundo das seções: `color/white`. Ivory, sand e ochre saíram da v2.
- **Text styles**: `display/h1-sans` (DM Sans Bold 72/80, −3%), `heading/h2-sans` (SemiBold 40/48, −2%), `heading/h3-sans` (SemiBold 20/32, −1%), `display/sans-xl` (Regular 64/72, só no Owner). Os estilos serifados em caixa-alta da rodada 1 foram removidos.
- **Botões**: todas as variantes de `Button` usam `radius/pill`. O primário é verde. `Outline` usa preto e `Outline Light` branco.
- **00 Top Bar** verde com texto branco. **01 Header** sem fundo, sobreposto ao hero, com o logo oficial `logo-white.png` (palavras brancas, triângulo original).
- **02 Hero**: foto em tela cheia, sem overlay. A profissional aparece um pouco distante, com o rosto visível, à direita; a parede verde-escura fica no centro; o borrifador e as plantas à esquerda. Crop alinhado à esquerda para o texto centralizado ficar sobre a parede escura. É uma pessoa gerada por IA: antes de publicar, trocar por foto real da equipe.
- **03 Trust** vira uma faixa compacta logo abaixo do hero: frase à esquerda, 4 logos oficiais à direita.
- **04 Services**: título do site original ("We'll leave your **home spotless and clean**. No harmful chemicals and no toxins.", com o trecho em bold/verde). Abaixo, um **bento premium minimalista** com os **5 cards do original, na mesma ordem e no mesmo estilo**: SERVICES (→ /services), House Cleaning & Apartments, Deep Cleaning, House Keeping…, todos `ServiceCard v2 / Size=Regular` em 2×2, e Move In/Out Cleaning em `Size=Wide` (12 colunas). A imagem preenche o card inteiro, com `radius/lg` e um gradiente escuro só na base (72% → 0 até a metade, como no original). Título branco `heading/card` com a barra verde no canto inferior esquerdo. Sem formas extras.
- **05 Eco removida**: não existe na home original. Tinha sido montada na v1 a partir de um fragmento da frase do topo e dos nomes de produtos do menu.
- **07 Testimonials** em `TestimonialCard v2`: card branco com borda `color/line`, aspas verdes e avatar com a inicial, como no site.
- **Componentes novos**: `ServiceCard v2`, `TestimonialCard v2`. Removidos: `ServiceBanner`, `TestimonialQuote`.
- **Owner**: o retrato oficial tem 188×213 px e aparece a 256×288 (fica levemente suave). É preciso pedir ao cliente a foto em resolução maior. Não usar upscale por IA em pessoas reais.
- **06 Owner**: a imagem alta à direita agora é uma rua residencial arborizada de Raleigh/NC (casa sulista com varanda branca, pinheiros e carvalho), gerada por IA. É uma cena genérica, não um endereço real.
- **10 FAQ**: o botão "FAQ" no fim da seção foi removido. A página completa continua acessível pelo menu e pelo footer.
- **11 Final CTA**: 480px de altura, com foto aérea escura de bairro arborizado no Triangle, sem overlay e com texto branco centralizado. Botões `On Dark` e `Outline Light`.
- **Divisão entre seções**: fundo branco em todas as seções de conteúdo, com o componente `SectionDivider` entre elas: linha de 1px `color/line` dentro das margens (1312). Fica entre Trust/Services, Services/Owner, Owner/Testimonials, Testimonials/Service Area e Service Area/FAQ. O fundo cinza alternado foi testado e descartado. `color/surface` ficou só para cards (bento e depoimentos).
- **11 Final CTA**: 560px, com sala de estar minimalista e aconchegante à noite: parede escura, sofá de linho, luminária de papel acesa, planta e galho de oliveira. Texto e botões no topo, sobre a parede escura, sem overlay. As versões de casa vista de fora e de bairro aéreo foram descartadas.
- **Footer**: ícones oficiais de Instagram, LinkedIn e Facebook, extraídos do SVG do footer original (`site/assets/icons/social-*.svg`), em botões circulares de 48px com destino `#`, como no site.
- **Novos tokens/estilos**: `color/surface` `#F4F5F3`, `heading/card` (DM Sans SemiBold 32/40, −2%).

## 17. Variante v3 — "Light" (2026-10-19)

Frame: `Home — Desktop 1440 · v3 Light` (duplicata da v2, à direita). Mesma estrutura, componentes e copy da v2. Muda só o tratamento das imagens escuras:

- **02 Hero**: foto clara (high-key), com parede branca lisa no centro, a profissional sorrindo à direita (rosto visível) e o borrifador e as plantas à esquerda. Crop centralizado. Título, subtítulo e menu em `color/black`; "Green" continua verde. Logo oficial `logo-black.png`. Botão secundário `Outline` (preto).
- **11 Final CTA**: sala minimalista clara de dia, com sofá de linho branco, cortinas iluminadas e plantas. Texto preto, botões `Primary` + `Outline`.
- O restante (bento, owner, depoimentos, FAQ, footer) é igual à v2.
- Aprendizado: frases como "space for text" no prompt fazem o modelo desenhar letras falsas. Descrever só "plain blank wall" e pedir "no words, no letters, no signage". Retocar texto já pintado (replace/erase) deixou fantasma ou mancha, então vale mais gerar de novo.

## 18. Variante v4 — "Human" (2026-10-19)

Frame: `Home — Desktop 1440 · v4 Human` (duplicata da v2). Objetivo: tirar a "cara de IA" sem depender de material novo do cliente (diagnóstico feito com a skill ai-detector-visual).

- **Tipografia**: Instrument Sans (sans com mais caráter que DM Sans) em estilos próprios `v4/…` (display/h1 Bold 72/80, display/xl 64/72, heading/h2 40/48, heading/card 32/40, body/lg 20/32…). v2/v3 continuam em DM Sans.
- **Assimetria**:
  - Hero alinhado à esquerda a partir da coluna 3.
  - Títulos de Services e Testimonials alinhados à esquerda.
  - Bento com tamanhos variados: SERVICES alto (640×1056) à esquerda, House Cleaning e Deep Cleaning empilhados à direita, House Keeping e Move In/Out em 640×400 embaixo.
  - Depoimentos: um grande (7 colunas, citação em `v4/heading/card`) e dois empilhados (5 colunas).
  - FAQ em duas colunas: título com 4 colunas e perguntas com 8.
- **Material real em destaque**:
  - Owner sem a imagem gerada de casa nem o grafismo radial. Foco no retrato oficial do Darrick (304×344, com legenda de nome e cargo), bio em `body/lg` e o triângulo oficial do site (`brand/fig.png`) cortado na borda, como nos cards do site original.
  - Service Area com mapa real (OpenStreetMap, z11, dessaturado, `site/assets/images/service-area-map.png`) e pin aproximado do escritório em Cary. No código entra o embed do Google Maps.
  - Faixa tipográfica verde com as cidades: trecho literal do parágrafo, marcado como `aria-hidden` no código.
- **Texto fora do copy.md**: só "© OpenStreetMap contributors", exigido pela licença do mapa.

### Pendências com o cliente (o que mais tira a cara de IA)
1. Fotos reais da equipe trabalhando, para substituir a profissional gerada no hero e as mãos e pessoas dos cards.
2. Fotos dos produtos próprios (Peroxide Cleaner, Window & Glass Cleaner, Multi-Surface Cleaner, Floor Cleaner).
3. Retrato do Darrick em alta resolução (o atual tem 188×213 px).
4. Texto completo dos depoimentos. Os atuais terminam em "The cre...", "we are..", "it probably...", e qualquer mudança de copy precisa de aprovação.
5. Fotos de casas atendidas na região, ou fotos licenciadas reais de Raleigh no lugar das geradas.

## 19. Variante v5 — "Organic Editorial" (2026-10-19)

Frame: `Home — Desktop 1440 · v5 Organic Editorial` (duplicata da v4 Human). Base: brief "Authentic Organic Editorial" + pedido de sombras de folhas (ref. lenvalproperties.com).

**Cor**
- **CTA primário = verde vivo da marca `#5FC206`** (`color/green-bright`, igual ao site/logo) com **label escuro** `#111311` (8.18:1; branco daria só 2.28:1). Hover/active `color/green-bright-hover` `#4DA005` (5.64:1).
- Estados no código: hover → hover token; active → hover + translateY(1px); focus-visible → outline 2px `color/text` com offset 2px; disabled → opacity .4.
- O verde vivo fica reservado aos CTAs e a 1–2 acentos (a palavra "Green" no hero e a barra dos cards). Links, ícones e títulos não usam esse verde.
- Fundos: ivory `#F7F5EF` como principal; sage `#E1E8DC` só em Testimonials, com cards brancos; forest `#26352B` no top bar e no footer. Texto em charcoal `color/text`.

**Componentes**
- `Button`: novas variantes `Vivid`, `Quiet` e `Quiet Light`, com `radius/sm` (8px). Na v5, nenhum botão é pill.
- `LeafShadow` (Corner=Right/Left): textura fotográfica de sombra de folhas em escala de cinza, `MULTIPLY` a 90%, com máscara radial de alpha para sumir nas bordas. Fica como camada absoluta atrás do conteúdo em Services (direita), Owner (esquerda), Service Area (direita) e FAQ (esquerda). No código: `<div aria-hidden>` com `mix-blend-mode: multiply` e `mask-image: radial-gradient(...)`.

**Layout**
- Header: logo à esquerda, menu completo logo depois (sobre a madeira escura do hero) e CTA vivo à direita. Gradiente escuro contido só na faixa do menu (200px, 55% → 0) para manter o AA em qualquer crop.
- Hero: texto à esquerda (coluna 1, 560px) sobre a parede de nogueira. Foto com crop em zoom 1.15 alinhado à esquerda, sem overlay no corpo da imagem.
- Services: título à esquerda com a foto eco (`img/v5-eco-products`, 416×312) ao lado. Não é uma seção nova: reforça "No harmful chemicals and no toxins." Bento com as 5 fotos novas.
- Owner: retrato real do Darrick mantido (sem alteração), foto complementar de rua residencial de Raleigh à direita e triângulo da marca na quina da foto.
- Final CTA: foto de mãos dobrando toalha sobre a cama ao fim da visita, com overlay forest 40% e texto branco.

**Fotografia** (Magnific, Seedream 5 Pro; o hero aprovado serviu de referência de estilo para todo o resto do set): ver `image-prompts.md` › v5. Arquivos em `site/assets/images/v5/`.

**Observações**
- Na v5, a camada "image 1" (foto de limpeza de estofado herdada da v4) está oculta, não deletada, dentro do Final CTA.
- Em v5, a faixa de cidades não existe porque já tinha sido removida na v4 antes da duplicação.

## 20. Implementação v5 — Astro + Tailwind (2026-10-20)

Fonte: frame `44:279` (v5 Organic Editorial). Código em `site/`.

Decisões de consistência tomadas no código (o Figma tinha variações entre seções):
- **Um único botão primário**: pill, `color/green` `#368409` com label branco (4.71:1, AA), em header, hero e CTA final. O `Outline Light` fica sobre foto/escuro. A variante "Vivid" (`#5FC206` com label escuro) não foi usada; dá para trocar em `Button.astro`.
- O verde vivo `#5FC206` fica só nos acentos: a palavra "Green" no hero e a barra dos cards.
- **LeafShadow** só em Trust e Services, como no frame (nas outras seções está oculto no Figma). Tem um drift lento de 18s.
- **Mapa**: o embed do Google Maps é o mesmo da home publicada, com a interface em inglês (`1sen!2sus`). O render OSM do Figma é só referência visual.
- **Header**: transparente sobre o hero; vira barra forest sólida depois do hero, some ao rolar para baixo e volta ao rolar para cima. Dropdowns de SERVICES e PRODUCTS com os subitens do `copy.md`. Menu mobile em painel.
- **FAQ**: acordeão com um item aberto por vez e altura animada (grid 0fr→1fr).
- **Movimento** ("paz"): Lenis (1.25s, easeOutQuart); reveals de 1s com stagger de 110ms; easing `cubic-bezier(.22,1,.36,1)`; hero com zoom 1.08→1 em 2.8s; parallax de no máximo ±48px; hover de card com zoom 1.035 em 1.6s. `prefers-reduced-motion` desliga tudo.

### Ajustes de 2026-10-20 (rodada 2)
- **Hero = tela cheia**: `100svh` no mobile e `100svh − top bar (48px)` a partir de md, para a primeira dobra ser exatamente a tela.
- **Menu**: "TRIANGLE GREEN CLEANING CHECKLIST" entra como item de topo entre SERVICES e PRODUCTS, como no header publicado. Continua também no dropdown de SERVICES, como em `copy.md`. O menu desktop aparece a partir de 1280px (tracking 0.02em entre 1280 e 1439px, para caber numa linha). Abaixo disso, menu hamburguer.
- **Logo** mais discreto: 36px de altura no mobile, 40px no desktop, opacidade 95%. Header com 96px no desktop.
- **Sombra de folhas animada**: vídeo próprio em loop de 10s (Magnific, Kling 2.5, primeiro e último frame = nossa foto `leaf-shadow-a`, então o loop não tem corte), recortado (sem o galho real), em escala de cinza com a parede branca, aplicado com `mix-blend-mode: multiply` a 85%. Máscara radial do Figma mais fade linear na base. Arquivos: `site/public/media/leaf-shadow.{webm,mp4}` (109 KB e 583 KB) e poster. Fonte original em `site/assets/images/v5/leaf-shadow-source.mp4`. Pausa fora da tela e com `prefers-reduced-motion`. Referência de comportamento: seção "Architecture for a bespoke life" de lenvalproperties.com; nenhum asset deles foi usado.
- **Depoimentos**: sem hover. Parallax com velocidades diferentes por card (0.04 / −0.03 / 0.07, limite de ±48px), só a partir de md.
- **Service Area**: barra verde-viva acima do título e as cidades "Raleigh, Durham, Cary, Chapel Hill" em `color/green` (4.32:1 sobre ivory; vale AA para texto grande, 40px semibold).
- **FAQ hover**: a pergunta desliza 8px e fica verde, o ícone ganha um círculo sage com leve scale, e uma linha verde se desenha no topo do item (também fica no item aberto).
- **Botões**: hover com "maré": um preenchimento sobe da base (forest no primário, branco no outline-light, charcoal no outline) e o label rola para cima, trocado por uma cópia idêntica (`aria-hidden`). 700ms, `--ease-calm`.

### Ajustes de 2026-10-20 (rodada 3)
- **Menu em Title Case** (só exibição): as palavras são as do `copy.md` e só muda a caixa ("Services", "Triangle Green Cleaning Checklist", "Contact Us"). "FAQ" fica como sigla. 15px, sem tracking. Pedido explícito do cliente interno; é uma exceção à regra 1 (capitalização) restrita ao menu do header. Os itens ficam marcados com `data-display-case`, e a auditoria aceita só a diferença de caixa nesses elementos.
- **Hero com zoom**: Ken Burns lento (1 → 1.06 em 24s, alternado) mais zoom ligado ao scroll (até 1.15 quando o hero sai da tela). O texto sobe 64px e cai para 30% de opacidade junto.
- **Sombra de folhas**: o vídeo foi trocado. Agora só o primeiro frame é fixado, com prompt de balanço visível (cerca de 4× mais movimento: PSNR entre frames de ~27 dB contra ~38 antes). O loop é ping-pong (ida e volta, 20s, sem corte). WebM com 494 KB.
- **CTA final**: 520px de altura mínima no mobile e 640px no desktop (reduzido em 2026-10-20, antes 600/760).
- **Hover dos botões mais sutil**: sem o preenchimento subindo. Fica só a troca suave de tom (verde → verde mais escuro; outline → tint de 10%) e o label rolando com fade, em 800ms `--ease-soft`.
- **Divisores entre todas as seções claras** (Trust|Services|Owner|Testimonials|Service Area|FAQ). A linha se desenha da esquerda em 1.6s quando entra na tela.
- **FAQ hover sem tranco**: o bug era que `translate-x`/`scale` do Tailwind 4 usam as propriedades CSS `translate`/`scale`, que não estavam na lista de transição. Corrigido, e a easing passou a ser `--ease-soft` (`cubic-bezier(.33,0,.2,1)`), 900–1100ms.

### Temperos ecológicos e de limpeza (2026-10-20)
_Revisão do mesmo dia: o cliente interno não aprovou os itens 1 e 2, que foram removidos. Ficaram 3, 4 e 5._

1. ~~**"Passada de pano"**~~ (removido) (`data-reveal="wipe"`): as fotos dos 5 cards de serviço e a foto do Owner são reveladas por uma varredura diagonal (`clip-path`, 1.5s), seguida de um brilho suave atravessando a imagem (soft-light, 1.7s) e do título subindo. O recorte fica numa camada interna (`.wipe-layer`): com o elemento observado 100% recortado, o IntersectionObserver nunca dispara.
2. ~~**Luz ao longo do dia**~~ (removido; a sombra de folhas fica só em Trust/Services. O componente continua aceitando `corner`/`warmth`/`offset`/`fadeTop`): `LeafShadow` aceita `corner`, `warmth`, `offset` e `fadeTop`. Trust/Services: canto direito, neutro (manhã). Owner: canto esquerdo (espelhado), warmth 0.35. FAQ: canto direito, warmth 0.7 (fim de tarde). Cada um começa o loop num segundo diferente para não balançarem juntos. O tom quente vem de `sepia()` + `brightness()`, que deixa a parede branca e tinge só a sombra.
3. **Textura de linho**: `body::after` com ruído SVG em trama e urdidura (feTurbulence) a 3.5%, multiply, fixo. Sem arquivo extra.
4. **Triângulo da marca como assinatura**: cada `SectionDivider` abre com o `fig.png` oficial (16px), que assenta girando de leve; depois a linha se desenha.
5. **"Ar fresco" no CTA final**: quarto calmo com cortina de linho translúcida balançando na brisa (Magnific: foto Seedream 5 Pro + vídeo Kling 2.5, loop ping-pong de 20s, WebM com 956 KB, `preload="none"`). A foto parada fica por baixo para movimento reduzido e carregamento. Overlay forest a 35%; o texto se manteve legível no momento mais claro do loop.

### Detalhes inspirados em bonancainstituto.com.br (2026-10-20)
Referência de **comportamento**, nada copiado: cada detalhe usa o universo da Triangle Green (triângulo do logo, folha, limpeza).
- **Sem caixa-alta em nenhum texto do site**: helper `displayCase()` (`src/lib/text.ts`) exibe em Title Case os rótulos que estão em maiúsculas no `copy.md` (botões, menu, "Email Us Now!", "Owner", card "Services", links do footer). "FAQ" fica como sigla; palavras menores ("a", "and"…) ficam em minúscula. As palavras são as mesmas; a auditoria checa sem diferenciar caixa nos elementos `data-display-case`. O tracking largo dos labels saiu (era para caixa-alta).
- **Preloader**: o triângulo oficial assenta (0.72 → 1), depois cresce e some enquanto uma abertura com a silhueta do triângulo se expande e revela o site (máscara CSS com `mask-composite: exclude` e `@property --hole`). O hero entra em seguida. Uma vez por sessão (`sessionStorage`), não aparece sem JS nem com movimento reduzido e espera no máximo ~3s pela imagem do hero.
- **Reveal vertical** (`data-reveal="rise"`): as fotos dos cards de serviço e do Owner se descobrem **de cima para baixo** (`clip-path` numa `.reveal-layer` interna, 1.4s), assentando de um zoom de 1.12. O título do card entra depois.
- **Realce de rodo**: "home spotless and clean" ganha uma faixa verde-viva a 22% passada da esquerda para a direita (`.squeegee`, background-size animado, cruza as quebras de linha).
- **Triângulos flutuantes** (`FloatingTriangles`): 3 facetas perto do título do Owner e 3 perto do título dos depoimentos, nas cores tiradas do `fig.png` (`--color-brand-blue #237ec2`, `--color-brand-leaf #7bc142`, `--color-brand-teal #63af65`). Têm balanço lento e parallax leve e ficam ocultos abaixo de md.
- **CTA que cresce**: a camada de mídia do CTA final começa como card com recuo (64px nas laterais e 40px no topo/base no desktop, 16px no mobile) e raio de 40px, e abre até a borda conforme a seção entra na tela (`clip-path` ligado ao scroll).
- **Brilho no botão**: no hover, um reflexo fino atravessa o botão uma vez (1.1s). Sem partículas: bolhas foram descartadas por parecerem infantis.
- **Divisória**: triângulo da marca com 24px de largura.
- **Owner**: ~~skyline de Raleigh do Figma~~ (só 1600×1067 px, ficava em baixa no card vertical); trocada por foto **real** de Raleigh: as esculturas *Gyre* (Thomas Sayre) no parque do NC Museum of Art, por Alexander Korte no Unsplash (licença Unsplash, uso comercial livre, 3872×2592 px). Crop em 85–90%. Antes era o skyline de Raleigh colocado pelo cliente no Figma (60:373), com crop em 45%. No mobile entra a composição do frame 60:373: foto grande, retrato do Darrick sobreposto no canto inferior esquerdo e triângulo encaixado embaixo, logo após o título. O desktop mantém o layout anterior com a foto nova.

### Ajuste de 2026-10-20 — peso dos títulos
- **Todos os títulos agora usam SemiBold (600)**: H1 do hero, títulos de seção (H2), título do Owner, títulos dos cards e perguntas do FAQ. Antes o hero era Bold (700), o título do Owner Regular (400) e o de Serviços SemiBold por override. Os tokens `type-display-h1` e `type-display-xl` passaram a 600.
- **Removida a faixa verde de realce** ("rodo") sob "home spotless and clean". O trecho continua só em verde.
- **Owner, foto final** (2026-10-20): `raleigh.png`, fornecida pelo cliente interno (1728×2304, 3:4, o formato exato do card), salva como `site/assets/images/owner-raleigh.jpg`. Crop em 50%/60%. Substitui a foto *Gyre* do Unsplash, que fica no repositório como alternativa.

### Ajustes de mobile (2026-10-20)
- **Hero mobile** (revisado 2×): sem nenhum efeito (sem Ken Burns, sem zoom/fade no scroll, sem entrada). A foto fica em cima, ocupando o topo atrás do header, reenquadrada em `object-x 86%`: rosto, mãos e pano limpando a bancada ficam visíveis. A base da foto se funde na cor da parede (`#191e19`) com um fade curto (16%), e **texto e botões ficam embaixo**, sobre essa cor, encostando só 16px na foto. Em tela baixa o hero cresce além de 100svh para não cortar a cena. O desktop não mudou.
- **Menu mobile**: Services e Products viram acordeões fechados por padrão (seta para abrir). O painel rola por conta própria (`data-lenis-prevent`), e todos os itens cabem na tela.
- **Sem linhas divisórias no mobile** (`SectionDivider` só a partir de md).
- **Sem efeitos de entrada no mobile**: reveals, entrada do hero e o "CTA que cresce" só rodam a partir de md. O Ken Burns do hero, os vídeos e o preloader continuam.
- **Sem viúvas**: `text-wrap: balance` em títulos e `text-wrap: pretty` em parágrafos e listas, no site inteiro.
- **Ritmo de espaçamento único**: utility `section-y` em todas as seções de conteúdo (Services, Owner, Testimonials, Service Area, FAQ), com 64px em cima e embaixo no mobile e 120px (`space/section`) a partir de lg. Do título ao conteúdo: 40px no mobile e 64px no desktop. A faixa de Trust fica com 64px e o CTA final com 96px, por serem faixa e banner. Footer: 64px no mobile e 96px no desktop.
- **Owner mobile**: a composição do Figma 60:373 foi alinhada às margens do grid. A foto de Raleigh encosta na margem direita, com 93.6% da largura; o retrato do Darrick encosta na margem esquerda, com sombra suave; o triângulo fica centralizado embaixo. No desktop, o título e a foto agora começam no mesmo topo (120px).

### Links no protótipo (2026-10-20)
- Por pedido do cliente interno, nenhum link do protótipo leva às páginas do site atual. Os 50 links de página (menu, dropdowns, botões, cards de serviço, logo e footer) renderizam `href="#"`, e o clique não faz a página pular para o topo. É uma **exceção temporária à regra 3** do CLAUDE.md. Os caminhos reais continuam em `src/data/content.ts` e no `copy.md`: no lançamento basta `LINK_TO_LIVE_SITE = true`.
- Continuam ativos: `mailto:`/`tel:` (não são sites) e o embed do Google Maps (mantido por decisão do cliente).

