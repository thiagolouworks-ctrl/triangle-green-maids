# Prompts de imagem — Magnific

Estilo base (anexar a todos os prompts):
> minimalist editorial interior photography, soft diffused natural daylight, calm and airy, light oak wood, linen, natural stone, matte ceramics, subtle muted sage-green accents, warm ivory walls, generous negative space, clean but lived-in, photorealistic, shot on medium format, shallow depth of field, no people, no text, no logos, low saturation

Negativo: oversaturated, glossy stock photo, HDR, harsh shadows, clutter, branded products, text, watermark, people's faces, cosmetics ad look

| Slug (frame `img/…` e arquivo) | Proporção | Prompt |
|---|---|---|
| `hero-living-room` | 16:10 | Bright minimalist living room after cleaning, ivory linen sofa, light oak floor freshly polished, large window with sheer curtains, a single olive branch in a stone vase, soft sage-green wall accent, morning light |
| `service-house-apartments` | 4:5 | Serene apartment bedroom, neatly made linen bed in ivory and pale sage, light wood nightstand, ceramic lamp, soft window light |
| `service-deep-cleaning` | 4:5 | Spotless minimalist kitchen counter in pale stone, sage-green ceramic jar, wooden cutting board, gleaming sink, soft side light |
| `service-housekeeping-post-construction` | 4:5 | Freshly finished minimalist room, light plaster walls, oak floor clean of dust, folded linen cloth on a wooden stool, airy daylight |
| `service-move-in-out` | 4:5 | Empty bright room ready for move-in, clean oak floor, tall window, single potted green plant on the floor, calm shadows |
| `eco-products` | 4:5 | Unbranded amber and frosted-glass spray bottles on a pale stone surface, linen cloth, eucalyptus sprig, sage-green backdrop, still life |
| `cta-banner-interior` | 21:9 | Wide calm interior view, ivory walls, oak bench, green foliage outside a large window, deep soft shadows, room for text on the left |

Não gerar: foto do proprietário (Darrick Seconi), logos de parceiros, logo da marca, mapa.

## v2 Editorial — gerados no Magnific (Seedream 5 Pro, 2026-10-19)

Mesmo estilo base acima, com "touches of green" reforçado. Arquivos em `site/assets/images/`.

| Slug | Tamanho gerado | Uso no Figma (v2) | Prompt (resumo) |
|---|---|---|---|
| `hero-living-room` | 2880×1440 (2:1) | `02 Hero`, full-bleed 1440×720 | sala ivory, sofá de linho, piso de carvalho, cortinas, galho de oliveira, jardim verde na janela |
| `service-house-apartments-wide` | 3264×576 | `ServiceBanner` 1088×192 | quarto com roupa de cama ivory/sage, mesa de cabeceira de carvalho, planta |
| `service-deep-cleaning-wide` | 3264×576 | `ServiceBanner` | bancada de pedra clara, pote cerâmico sage, tábua de madeira, ervas |
| `service-housekeeping-post-construction-wide` | 3264×576 | `ServiceBanner` | sala recém-finalizada, banquinho de madeira com linho, oliveira no vaso |
| `service-move-in-out-wide` | 3264×576 | `ServiceBanner` | cômodo vazio, piso de carvalho, planta, árvores na janela |
| `eco-products` | 1728×2304 (3:4) | `05 Eco`, 416×520, radius/lg | frascos âmbar e fosco sem rótulo, pedra, linho, eucalipto, fundo sage |
| `cta-banner-interior` | 2624×1120 (21:9) | `08 CTA Banner`, 1312×560 | interior calmo, banco de carvalho, janela para folhagem verde |
| `owner-home-exterior` | 1728×2304 (3:4) | `06 Owner`, 480×640, sangrando à direita | canto de casa com ripado de madeira, gramado e samambaias, folhas em primeiro plano |

Banners de serviço usam a variante `-wide` (5,67:1); os slugs 4:5 originais continuam reservados para os cards da v1.

## v2 rodada 2 — gerados no Magnific (Seedream 5 Pro, 2026-10-19)

| Slug | Tamanho | Uso | Prompt (resumo) |
|---|---|---|---|
| `hero-cleaner` | 2880×1440 | `02 Hero` (sem overlay) | vista de um corredor escuro para uma cozinha branca ensolarada; faxineira de avental verde, cortada nos ombros (sem rosto), limpando a ilha de pedra; faixa de cima e metade esquerda escuras para o texto branco |
| `hero-cleaner-alt-a/-b/-d` | 2880×1440 | alternativas não usadas | variações da mesma cena |
| `service-house-apartments` | 1728×2304 (3:4) | `ServiceCard v2` | mãos esticando roupa de cama branca, planta verde |
| `service-deep-cleaning` | 3:4 | `ServiceCard v2` | mãos com luvas verdes limpando bancada branca e pia, torneira preta |
| `service-housekeeping-post-construction` | 3:4 | `ServiceCard v2` | sala branca recém-finalizada, profissional (rosto coberto pelo boné) dobrando toalhas sobre banco preto, oliveira |
| `service-move-in-out` | 3:4 | `ServiceCard v2` | cômodo branco vazio, piso de carvalho, planta, balde com panos |

Regra adicional: pessoas geradas aparecem sem rosto identificável (de costas, cortadas ou com o rosto coberto).

## v2 rodada 3 (2026-10-19)

| Slug | Tamanho | Uso | Prompt (resumo) |
|---|---|---|---|
| `hero-cleaner` | 2880×1440 | `02 Hero` (substitui a versão "janela", agora `hero-cleaner-alt-c`) | cena em tela cheia, sem moldura; parede verde-escura no centro, borrifador e plantas à esquerda, profissional de avental verde (sem rosto) limpando mesa branca à direita, luz lateral |
| `owner-north-carolina` | 1728×2304 (3:4) | `06 Owner` (substitui `owner-home-exterior`) | rua arborizada de Raleigh/NC, casa sulista com varanda branca, pinheiros e carvalho |
| `final-cta-triangle` | 2880×960 (3:1) | `11 Final CTA` | vista aérea ao entardecer de bairro arborizado do Triangle, copas escuras, alto contraste |

## v2 rodada 4 (2026-10-19)

| Slug | Tamanho | Uso | Prompt (resumo) |
|---|---|---|---|
| `hero-cleaner` | 2880×1440 | `02 Hero` | mesma cena da rodada 3, agora com a profissional um pouco mais distante, rosto visível, sorrindo, à direita; parede verde-escura no centro |
| `services-overview` | cópia de `hero-cleaner-alt-a` | card largo SERVICES do bento | profissional de avental verde limpando bancada (rosto fora do quadro) |
| `final-cta-home` | 2880×960 | `11 Final CTA` | farmhouse branca na Carolina do Norte ao anoitecer, janelas acesas, gramado, céu escuro ocupando a parte de cima |

Rejeitada: a variação "face-a" do hero, que veio com texto sem sentido pintado na parede. Pedir sempre "no text" e conferir antes de usar.

## v2 rodada 5 (2026-10-19)

| Slug | Tamanho | Uso | Prompt (resumo) |
|---|---|---|---|
| `final-cta-interior` | 2880×1120 | `11 Final CTA` | sala minimalista aconchegante à noite, parede escura, sofá de linho com manta, mesa de carvalho com galho de oliveira, planta, luminária de papel acesa; metade de cima escura para o texto |
| `hero-living-room` (reuso da rodada 1) | 2880×1440 | card SERVICES do bento | sala clara com sofá de linho, como a foto de sala do card SERVICES original |

Descartadas: `final-cta-home*` (casa vista de fora) e `final-cta-triangle*` (vista aérea de árvores).

## v3 Light (2026-10-19)

| Slug | Tamanho | Uso | Prompt (resumo) |
|---|---|---|---|
| `hero-cleaner-light` | 2880×1440 | v3 `02 Hero` | interior claro high-key, profissional sorrindo de avental verde à direita, borrifador e plantas à esquerda, "the middle of the picture is simply a large bare plain white wall"; "no words, no letters, no signage" |
| `final-cta-interior-light` | 2880×1120 | v3 `11 Final CTA` | sala minimalista clara de dia, sofá de linho branco, cortinas iluminadas, galho de oliveira, planta grande |

## v5 Organic Editorial (2026-10-19)

**Direção compartilhada:** fotografia documental/editorial em casas reais e vividas da Carolina do Norte; luz natural de janela; paleta neutra quente (carvalho, nogueira, linho, pedra); verde contido (avental oliva, ervas); 35/50mm; cor natural, contraste suave, grão de filme leve; sem HDR ou bloom; profissional concentrada na tarefa, sem pose; sem palavras, logos ou rótulos. O hero aprovado foi usado como `references: [{type: "style"}]` em todas as outras imagens.

| Arquivo (`site/assets/images/v5/`) | Proporção | Uso | Cena |
|---|---|---|---|
| `hero-cleaning.jpg` (alt: `hero-cleaning-alt.jpg`) | 2:1 | 02 Hero | profissional de avental oliva limpando bancada de pedra, borrifador âmbar sem rótulo, parede de nogueira escura à esquerda |
| `service-overview.jpg` | 2:3 | card SERVICES | sala vivida, profissional aspirando o tapete ao fundo |
| `service-house-apartments.jpg` | 4:3 | card House Cleaning & Apartments | ajeitando o edredom num apartamento, cesto de roupa |
| `service-deep-cleaning.jpg` | 4:3 | card Deep Cleaning | mãos com luvas esfregando o rejunte do azulejo |
| `service-post-construction.jpg` | 3:2 | card House Keeping, Fill In & Post Construction | poeira de obra no peitoril, lona, escada, aspirador |
| `service-move-in-out.jpg` | 3:2 | card Move In/Out Cleaning | quarto vazio, rodapé sendo limpo, caixas na porta |
| `owner-raleigh-street.jpg` | 2:3 | 06 Owner (complemento) | rua residencial comum de Raleigh, casa térrea de tijolo, carvalhos e pinheiros |
| `eco-products.jpg` | 4:3 | 04 Services (ao lado do título) | frascos reutilizáveis sem rótulo, panos dobrados, escova de madeira, alecrim |
| `cta-banner.jpg` (alt: `cta-banner-alt.jpg`) | 18:7 | 11 Final CTA | mãos colocando a toalha dobrada na cama ao fim da visita, luz de fim de tarde |
| `texture-leaf-shadow-a/-b.jpg` | ~3:2 | `LeafShadow` | sombra de folhas em parede, tratada em escala de cinza com a parede em branco |

## Vídeo — sombra de folhas animada (2026-10-20)
- Modelo: Kling 2.5, 10s, 1080p, 16:9. Primeiro e último frame = `leaf-shadow-a` (loop sem corte). 650 créditos.
- Prompt: câmera fixa; sombras de folhas e galhos finos numa parede de reboco ivory balançando com uma brisa leve de fim de tarde; lento, natural, loop sem emenda; só as sombras se movem. Negativo: movimento de câmera, zoom, pessoas, texto, flicker, mudança de luz.
- Pós (ffmpeg): crop 74% da largura (remove o galho real), escala de cinza, `curves 0/0 0.55/0.32 0.80/0.98 1/1`, 1600px, 24fps. Sai em WebM VP9 e MP4 H.264.

## Vídeo — sombra de folhas v2 (2026-10-20)
- Kling 2.5, 10s, 1080p, só o primeiro frame fixado (`leaf-shadow-a`). 650 créditos. A v1 travava o último frame igual ao primeiro, o que deixava as folhas quase paradas.
- Prompt: câmera fixa; galhos balançando de um lado para o outro em ondas lentas, cachos de folhas tremendo de forma independente, frestas de luz abrindo e fechando; movimento natural e contínuo, claramente visível; parede parada.
- Pós: mesmo tratamento + `split/reverse/concat` (ping-pong de 20s).

## CTA — cortina de linho (2026-10-20)
- Foto (`v5/cta-curtain.jpg`, alt: `cta-curtain-alt.jpg`): Seedream 5 Pro, 2880×1440, referência de estilo do CTA anterior. Quarto calmo de fim de tarde, cortina de linho translúcida na janela à direita, jardim desfocado, borda da cama com toalha dobrada, parede escura no centro. 200 créditos (2 opções).
- Vídeo: Kling 2.5, 10s, 1080p, só o primeiro frame fixado. Cortina inflando e assentando com a brisa, o resto do quarto parado. 650 créditos. Pós: 1920px, ping-pong de 20s, WebM VP9 + MP4.

## Owner — foto real de Raleigh (2026-10-20)
- `owner-raleigh-ncma-gyre.jpg`: "Large metal rings stand in a grassy field", *Gyre* de Thomas Sayre, North Carolina Museum of Art Park, Raleigh. Foto de Alexander Korte (unsplash.com/@stelath), licença Unsplash (gratuita, permite uso comercial, crédito opcional). Original 3872×2592.
- Descartadas: skyline do Figma (baixa resolução), Dix Park de Reba Spike (o skyline fica fora de foco no recorte vertical) e as fotos "downtown Raleigh HDR" do acervo Freepik, que na verdade são de outra cidade.
- É uma obra de arte pública. Ao publicar, vale creditar o fotógrafo e confirmar com o cliente se faz sentido usar.
