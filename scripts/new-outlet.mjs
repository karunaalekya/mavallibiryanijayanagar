// Clone this site for another franchise outlet.
// node scripts/new-outlet.mjs --name "Mavalli Biryani Koramangala" --domain example.in --whatsapp 9XXXXXXXXX \
//   --line "Street, Area" --pin 560034 [--city Bengaluru --fssai 1234 --email a@b.in --instagram URL] --out ../koramangala
import { cpSync, existsSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, join, relative } from 'node:path';
const a = Object.fromEntries(process.argv.slice(2).reduce((acc, v, i, arr) => v.startsWith('--') ? [...acc, [v.slice(2), arr[i + 1]]] : acc, []));
const need = ['name', 'domain', 'whatsapp', 'line', 'pin', 'out'];
const miss = need.filter(k => !a[k]);
if (miss.length) { console.error('Missing: ' + miss.map(k => '--' + k).join(' ')); process.exit(1); }
if (!/^\d{10}$/.test(a.whatsapp)) { console.error('--whatsapp must be 10 digits, no +91'); process.exit(1); }
if (!/^\d{6}$/.test(a.pin)) { console.error('--pin must be 6 digits'); process.exit(1); }
const root = resolve(import.meta.dirname, '..'); const out = resolve(a.out);
if (existsSync(out)) { console.error('Output folder already exists: ' + out); process.exit(1); }
const skip = new Set(['node_modules', 'dist', '.astro', 'standalone', 'source-assets', '.git']);
cpSync(root, out, { recursive: true, filter: (src) => !skip.has(relative(root, src).split(/[\\/]/)[0]) && !/lighthouse-.*\.html$/.test(src) });
const f = join(out, 'src/data/outlet.config.json'); const c = JSON.parse(readFileSync(f, 'utf8'));
Object.assign(c, {
  name: a.name, domain: a.domain, phone: null, whatsapp: a.whatsapp, hours: null, mapsUrl: null, swiggy: null, zomato: null,
  menuConfirmed: false, legalName: null, gstin: null, grievanceOfficer: null,
  googleRating: null, googleReviews: null, googleReviewsUrl: null, googleReviewUrl: null,
  gscVerify: null, bingVerify: null, ga4: a.ga4 ?? null,
  address: { line: a.line, city: a.city ?? 'Bengaluru', pin: a.pin, confirmed: false },
  fssai: a.fssai ?? 'ADD-FSSAI-NUMBER', email: a.email ?? c.email, instagram: a.instagram ?? c.instagram,
});
writeFileSync(f, JSON.stringify(c, null, 2));
mkdirSync(join(out, 'src/data'), { recursive: true });
console.log(`Created ${out}\nNext: cd it, npm ci, edit src/data/menu.json (prices) + outlet.config.json, then npm run check && npm run build.\nSee docs/NEW-OUTLET.md. Replace the Jayanagar-specific copy (about, hero, gallery photos) before launch.`);
