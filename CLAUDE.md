# Triangle Green Maids — Homepage redesign

Redesign da homepage da Triangle Green Maids (limpeza residencial ecológica, Raleigh/Triangle, NC).
Trabalhamos em ciclos **Figma → código → Figma**: desenha e refina no Figma, implementa no código, ajusta no código, sincroniza de volta no Figma, e repete.

## Fontes de verdade

| Arquivo | Papel |
|---|---|
| [design.md](design.md) | Diretrizes de design (Organic Luxury + Editorial). Ler antes de qualquer decisão visual. |
| [copy.md](copy.md) | **Copy congelada** da home + FAQ oficial, com destinos de links. Única fonte de texto. |
| `Home - Triangle Green Maids.html` | Snapshot da home publicada. Usar só para conferir copy, links e alt text. |
| `references/` | Moodboard Organic Luxury. Inspiração de ritmo, tipografia e fotografia, nunca de conteúdo. |
| Figma `DMTzNf788pUSz3sGtmGByq` ("Prospect") | Fonte de verdade **visual**: layout, tokens e componentes. |
| `site/` | Fonte de verdade de **comportamento**: HTML semântico, estados, responsividade e acessibilidade. |

## Regras inegociáveis

1. **Copy congelada.** Todo texto vem de `copy.md`, palavra por palavra (capitalização, pontuação, aspas tipográficas e reticências dos depoimentos inclusive). Nunca inventar, reescrever, resumir ou traduzir. Isso vale também no Figma e para placeholders: nada de "Lorem ipsum" nem de "Title".
2. **Não remover conteúdo.** Pode reorganizar e repetir copy existente em outro bloco (ex.: banner CTA). Nunca apagar para simplificar.
3. **Links e CTAs** mantêm os destinos listados em `copy.md`.
4. **Sem alegações novas.** Não criar selos, certificações, números, garantias ou depoimentos.
5. **Pessoas reais** (Darrick Seconi, clientes) **nunca** recebem imagem gerada por IA. Usar a foto oficial ou um placeholder marcado como `OFFICIAL PHOTO`.
6. **Logos oficiais** (marca e parceiros) não são redesenhados nem gerados. Enquanto não houver o arquivo, usar um placeholder.
7. **Mobile-first e WCAG AA**: contraste, foco visível, alvos de toque ≥ 44px e hierarquia correta de headings.

## Fluxo Figma ⇄ código

### Figma (design)
- Arquivo `DMTzNf788pUSz3sGtmGByq`. Páginas: `Home` (telas) e `Components` (componentes locais).
- Frames de tela: `Home — Desktop 1440` e `Home — Mobile 390`.
- Cada seção é um frame de auto-layout com nome numerado igual ao `design.md`: `01 Header`, `02 Hero`, `03 Trust`, `04 Services`, `05 Eco`, `06 Owner`, `07 Testimonials`, `08 CTA Banner`, `09 Service Area`, `10 FAQ`, `11 Final CTA`, `12 Footer`.
- **Grid de 12 colunas.** Desktop 1440: margem 64, coluna 80, gutter 32, conteúdo 1312. Largura de um span de *n* colunas = `112n − 32` (3 → 304, 4 → 416, 6 → 640, 8 → 864). Mobile 390: 4 colunas, margem 24, gutter 16. Todo bloco começa e termina numa coluna; nada de larguras arbitrárias.
- **Regra de 8pt.** Espaçamentos, paddings, gaps, tamanhos de imagem/ícone e line-heights são múltiplos de 8 (4 só em line-height de labels pequenos). Escala: 8 · 16 · 24 · 40 · 64 · 96 · 120 · 128. No CSS vale o mesmo, via tokens.
- Cores, espaçamentos e raios ficam em **variáveis** (coleção `tokens`). Tipografia fica em **text styles** (`display/h1`, `heading/h2`…). Não usar hex solto nem px solto quando existe token.
- Elementos repetidos são **componentes** (`Button`, `ServiceCard`, `TestimonialCard`, `FaqItem`…). Não duplicar frames.
- Imagens: frames nomeados `img/<seção>-<slug>` (ex.: `img/hero-living-room`). O mesmo slug vira o nome do arquivo em `site/assets/images/`.
- Antes de editar o Figma, carregar as skills `figma-use` + `figma-generate-design`.

### Código (implementação)
- Stack: **Astro 7 + Tailwind CSS 4** em `site/` (decisão de 2026-10-20, substitui o HTML/CSS/JS vanilla). Página: `src/pages/index.astro`. Seções em `src/components/`. Copy em `src/data/content.ts`. Imagens em `src/data/images.ts` (originais em `site/assets/images/`, otimizadas pelo `astro:assets`).
- Tokens em `site/src/styles/tokens.css` (`@theme` do Tailwind) com os mesmos nomes das variáveis do Figma (`--color-ivory`, `--color-green`, `--spacing-section`…, com aliases `--space-*`/`--grid-*`). Text styles viram utilities `type-*` (`type-heading-h2`, `type-body-md`…).
- Componentes espelham os componentes do Figma (`Button`, `ServiceCard`, `LeafShadow`, `SectionDivider`…). Classes de seção espelham os frames (`.section-hero`, `.section-services`…).
- Movimento: `src/scripts/motion.ts` (Lenis + reveals por `data-reveal` + header + parallax limitado). Tudo respeita `prefers-reduced-motion`.
- Comandos: `npm run dev`, `npm run build`, `npm run check` (build + auditoria de copy contra `copy.md`).
- Ao ler o Figma para codar, carregar a skill `figma-design-to-code` antes de `get_design_context`.

### Ciclo de sincronização
1. **Figma → código:** `get_design_context` / `get_screenshot` no frame da seção e implementação com os tokens existentes.
2. **Ajustes no código** (comportamento, responsividade, microinterações): registrar o que mudou visualmente.
3. **Código → Figma:** aplicar as mesmas mudanças com `use_figma` no frame existente (atualizar, não recriar). Tokens alterados no CSS são alterados na variável do Figma, e vice-versa.
4. Ao fim de cada ciclo, conferir que Figma e código batem: tokens, ordem das seções e copy.
5. **Auditoria de copy** antes de qualquer entrega: `npm run check` em `site/` compara todo o texto visível do build com `copy.md`. Diferença de palavra é bug.

## Imagens (Magnific via MCP)

- Estilo: **minimalista, luz natural suave, interiores limpos e verossímeis, materiais naturais (madeira clara, linho, pedra, cerâmica), leves tons de verde/sage**, muito espaço negativo, sem texto ou logos na imagem. Pessoas geradas só como profissional genérico em ação (ex.: hero da v2, com rosto, aprovado em 2026-10-19). Nunca apresentar como alguém real (equipe, dono ou cliente). Antes de publicar, preferir foto real da equipe. Paleta coerente com ivory `#F7F5EF`, sage `#E1E8DC` e green `#526B50`.
- Evitar: saturação alta, look de banco de imagem, filtros diferentes entre seções, produtos com marca, serviços que a empresa não oferece.
- Prompts em `image-prompts.md`, um por slug. Gerar no Magnific, salvar em `site/assets/images/<slug>.jpg` e aplicar no frame `img/<slug>` do Figma (`upload_assets` com `nodeIds`).
- Formatos: hero 16:10 (≥ 2400px de largura), cards de serviço 4:5, eco 4:5, banner 21:9.

## Convenções gerais

- Idioma da interface: inglês (copy original). Idioma de trabalho e da documentação: português.
- Sempre que mudar uma decisão de design, atualizar `design.md` ou este arquivo, conforme o caso.
- Não publicar nem fazer deploy sem pedido explícito.
