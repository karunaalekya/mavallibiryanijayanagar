# Mavalli Jayanagar: phase plan and status

## Phase 1: quality hardening (this zip, v7)  [DONE in code, needs your build + Lighthouse run]
- Hero: new clip (720px, ~850 KB, poster 35 KB), `preload=metadata` so video never fights the poster for LCP.
- Header/logo: bigger; small logo copy (12 KB instead of 112 KB) on every page.
- A11y: skip-to-content link, focusable `<main id=main>`, Swiggy chip/button now dark text (white on orange failed contrast), disabled chips no longer rely on 50% opacity.
- Headers: COOP, cross-domain policy added. Reduced motion hides the scroll bar.
- Tools: `npm run audit` (static: alt, width/height, missing assets, placeholders, heavy files), `npm run lh` and `npm run lh:desktop` (Lighthouse reports), `npm run check` (owner items).

Run order: `npm ci && npm run audit && npm run build && npm run preview`, then in a second terminal `npm run lh`. Target: mobile Performance 90+, A11y/SEO/Best Practices 95+, LCP <= 2.5s, CLS <= 0.1.
If a score misses, send me the failing audits and I fix them in Phase 1b.

## Phase 2: deploy (prepared in v8, see DEPLOY.md; needs your accounts)
Done in code: noindex + robots block until a real domain is set, GA4 / Search Console / Bing config fields, .gitignore, .nvmrc, step-by-step DEPLOY.md.
GitHub repo -> Cloudflare Pages (build `npm run build`, output `dist`), custom domain, set `domain` in outlet.config.json, redirect www to apex, Search Console + Bing verification, submit sitemap.

## Phase 3: local ranking (prepared in v9, see docs/phase3/README.md)
Google Business Profile, WhatsApp Business catalog, citations (Bing Places, Apple, Justdial, Sulekha), review link + QR. Steps are in the SEO plan md.

## Owner blockers still open
call number, opening hours, real menu prices, domain, Google Maps link, franchisor OK for logo, clean Jayanagar photos, Swiggy/Zomato links. See `npm run check`.
