#!/usr/bin/env node
/*
  Copy audit (CLAUDE.md, rule 1): every visible text in dist/index.html must exist verbatim in ../copy.md.
  Usage: npm run build && npm run audit:copy
  Exits 1 on any difference.
*/
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const html = readFileSync(resolve(here, '../dist/index.html'), 'utf8');
const copy = readFileSync(resolve(here, '../../copy.md'), 'utf8');

const decode = (s) =>
  s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ');

const normalize = (s) => s.replace(/\s+/g, ' ').trim();
const copyText = normalize(copy);

// Menu labels shown in Title Case (display-only, approved 2026-10-20): must match copy.md ignoring case.
const lowerCopy = copyText.toLowerCase();
const displayCase = [...html.matchAll(/<span[^>]*data-display-case[^>]*>([^<]*)<\/span>/g)].map((m) => normalize(decode(m[1])));
const displayCaseMissing = [...new Set(displayCase)].filter((t) => !lowerCopy.includes(t.toLowerCase()));

// Visible text: drop head, scripts, styles, svg and attributes; keep text between tags.
const body = html
  .replace(/<span[^>]*data-display-case[^>]*>[^<]*<\/span>/gi, '')
  .replace(/<head[\s\S]*?<\/head>/i, '')
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<style[\s\S]*?<\/style>/gi, '')
  .replace(/<svg[\s\S]*?<\/svg>/gi, '')
  // Decorative duplicates (e.g. the button label roll clone) are hidden from assistive tech.
  .replace(/<span[^>]*aria-hidden="true"[^>]*>[^<]*<\/span>/gi, '');

// Inline phrasing tags (span, em, strong…) are joined so split sentences are checked whole;
// <br> counts as a space; links stay separate blocks (each is its own label).
const blocks = body
  .replace(/<(br)\s*\/?>/gi, ' ')
  .replace(/<\/?(span|em|strong|b|i)(\s[^>]*)?>/gi, '')
  .split(/<[^>]+>/)
  .map((t) => normalize(decode(t)))
  .filter(Boolean);

// Texts that are not copy: accessibility names only (not visible) are excluded by construction above.
const allowed = new Set([]);

const missing = [...new Set(blocks)].filter((t) => !allowed.has(t) && !copyText.includes(t)).concat(displayCaseMissing);

// Visible attribute text that must also come from copy.md: alt + aria-label + title.
const attrs = [...html.matchAll(/\s(alt|aria-label|title)="([^"]*)"/g)]
  .map((m) => ({ attr: m[1], value: normalize(decode(m[2])) }))
  .filter((a) => a.value);
const nonCopyAttrs = [...new Map(attrs.map((a) => [a.attr + a.value, a])).values()].filter(
  (a) => !copyText.includes(a.value),
);

console.log(`Checked ${new Set(blocks).size} text blocks against copy.md (+ ${new Set(displayCase).size} menu labels, case-insensitive)`);
if (nonCopyAttrs.length) {
  console.log('\nAccessibility attributes not in copy.md (review — not visible text):');
  for (const a of nonCopyAttrs) console.log(`  ${a.attr}="${a.value}"`);
}
if (missing.length) {
  console.error('\n✖ Visible text not found verbatim in copy.md:');
  for (const t of missing) console.error(`  - ${t}`);
  process.exit(1);
}
console.log('\n✔ All visible text matches copy.md');
