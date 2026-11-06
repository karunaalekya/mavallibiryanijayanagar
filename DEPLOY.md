# Phase 2: deploy to Cloudflare Pages

Until `domain` in `src/data/outlet.config.json` is a real domain, every page is `noindex` and robots.txt blocks crawlers. This is on purpose, so a preview URL never gets indexed with a wrong canonical. Set the domain, rebuild, and indexing switches on by itself.

## 1. Before you push
1. `npm ci && npm run audit && npm run build` must pass.
2. Edit `src/data/outlet.config.json`: `domain` (no https://), `phone`, `hours`, `mapsUrl`, and `swiggy` / `zomato` only if live. `site` in astro.config.mjs reads `domain` automatically.
3. `npm run check` should print `config complete`. It also lists the legal fields still empty: `legalName` (registered business name as on the FSSAI licence or GST certificate) and `grievanceOfficer` (a named person). Fill both, add `gstin` if the outlet is GST registered.

## 2. GitHub
```
git init && git add . && git commit -m "Mavalli Jayanagar site"
git branch -M main && git remote add origin <your-repo-url> && git push -u origin main
```
`.gitignore` already skips node_modules, dist and Lighthouse reports.

## 3. Cloudflare Pages
Workers & Pages > Create > Pages > Connect to Git > pick the repo.
- Framework preset: Astro (or None)
- Build command: `npm run build`
- Build output directory: `dist`
- Environment variable: `NODE_VERSION` = `22`

Open the `*.pages.dev` URL and check all 12 pages on a real phone.

## 4. Custom domain
Pages project > Custom domains > add the apex (example.in) and www. Cloudflare issues HTTPS. Then add a redirect rule www -> apex (Rules > Redirect Rules, 301, keep path). Confirm `http://` redirects to `https://`.

## 5. Search engines
1. Search Console: add a Domain property, verify by DNS TXT. Or paste the HTML-tag code into `gscVerify` in the config, rebuild, deploy.
2. Submit `https://<domain>/sitemap.xml`. Request indexing for `/`.
3. Bing Webmaster Tools: import from Search Console, or paste the code into `bingVerify`.
4. Analytics: create a GA4 property, put the `G-XXXXXXX` id in `ga4`. Events call_click, whatsapp_click, directions_click, menu_view, order_click are already wired. Mark them as key events in GA4.

## 6. Day 1 / 7 / 30 checks
Day 1: HTTPS, www redirect, `/robots.txt` allows, `/sitemap.xml` lists 12 URLs, Rich Results Test passes on `/` and `/menu/`, WhatsApp link preview shows the OG image.
Day 7: pages indexed in Search Console, no coverage errors.
Day 30: calls/WhatsApp clicks in GA4, then Phase 3 (Google Business Profile, WhatsApp Business, citations).

## 7. Legal pages and cookie consent (added in v26)
- Pages: `/privacy/` (DPDP Act 2023 and IT Act), `/terms/`, `/refund/` (refund and cancellation), `/cookies/`. Each ends with the grievance contact: 48-hour acknowledgement, one-month resolution (Consumer Protection (E-Commerce) Rules, 2020).
- Text is generated from `outlet.config.json` (legal name, address, email, grievance officer, FSSAI, GSTIN). Date is set in `src/components/LegalDoc.astro`.
- **Have the outlet owner confirm the refund rules** (cancel before cooking, 2-hour issue window, refund timelines) and, ideally, a lawyer read all four pages before launch. They are good-faith defaults, not legal advice.
- Analytics: Google Analytics loads only after the visitor taps Accept (Consent Mode default is denied, no request to Google before that). The footer "Cookie settings" link reopens the choice. In GA4 set Data retention to 14 months (Admin > Data collection and modification > Data retention); the privacy page says 14 months.
- Reviews strip on the home page stays hidden until `googleRating`, `googleReviews` and a link are set in the config. Use real Google numbers only.
- Security headers are in `public/_headers` (HSTS, frame-ancestors, base-uri, object-src, form-action).

## 8. New franchise outlet
See `docs/NEW-OUTLET.md` and `node scripts/new-outlet.mjs`.
