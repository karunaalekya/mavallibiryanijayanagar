// Static pre-flight (no build needed): node scripts/audit.mjs
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const walk = d => readdirSync(d).flatMap(f => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
let bad = 0; const fail = m => { bad++; console.log('FAIL', m); };
for (const f of walk('src').filter(f => f.endsWith('.astro'))) {
  const s = readFileSync(f, 'utf8');
  for (const m of s.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt=/.test(m[0])) fail(`${f}: img without alt`);
    if (!/\bwidth=/.test(m[0]) || !/\bheight=/.test(m[0])) fail(`${f}: img without width/height (CLS)`);
  }
  for (const m of s.matchAll(/(?:src|href|poster)="(\/(?:img|video)\/[^"]+)"/g)) if (!existsSync(join('public', m[1]))) fail(`${f}: missing asset ${m[1]}`);
  if (/XXXX|YOUR-DOMAIN|HH:MM|₹ --/.test(s.replaceAll("'YOUR-DOMAIN.com'", ''))) fail(`${f}: placeholder text`);
}
for (const f of walk('public/img').concat(walk('public/video'))) { const kb = statSync(f).size / 1024; if (kb > 900) fail(`${f}: ${kb | 0} KB is heavy`); }
console.log(bad ? `${bad} issue(s)` : 'audit clean');
process.exit(bad ? 1 : 0);
