/*
  Display casing — the site shows no all-caps text (decision 2026-10-20).
  Words stay exactly as in copy.md; only letter case changes for display (Title Case).
  Wrap the output in an element with `data-display-case` so `npm run audit:copy`
  checks it case-insensitively against copy.md.
*/
const ACRONYMS = new Set(['FAQ']);
const MINOR = new Set(['a', 'an', 'and', 'at', 'by', 'for', 'in', 'of', 'on', 'or', 'the', 'to', 'with']);

export function displayCase(label: string): string {
  const isAllCaps = label === label.toUpperCase() && /[A-Z]/.test(label);
  if (!isAllCaps) return label; // already mixed case in copy.md → keep as written
  return label
    .split(' ')
    .map((word, i) => {
      if (ACRONYMS.has(word.replace(/[^A-Z]/g, ''))) return word;
      const lower = word.toLowerCase();
      if (i > 0 && MINOR.has(lower)) return lower;
      return lower.replace(/(^|[/&-])(\p{L})/gu, (_, sep, ch) => sep + ch.toUpperCase());
    })
    .join(' ');
}
