# Triangle Green Maids — site (Astro + Tailwind)

Implementação da homepage v5 (Figma `DMTzNf788pUSz3sGtmGByq`, frame `44:279`).

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # gera dist/
npm run check      # build + auditoria de copy (texto visível × ../copy.md)
```

- Copy: `src/data/content.ts` (verbatim de `../copy.md`, não editar wording).
- Tokens: `src/styles/tokens.css` (mesmos nomes do Figma).
- Seções: `src/components/*.astro`; página: `src/pages/index.astro`.
- Movimento: `src/scripts/motion.ts` (Lenis, reveals, header, parallax, acordeão). Respeita `prefers-reduced-motion`.
- Imagens: originais em `assets/images/`, otimizadas em build (AVIF/WebP responsivo).
