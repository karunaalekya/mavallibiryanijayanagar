# Mavalli Biryani Jayanagar: Astro site (all pages built)

Stack: Astro + Tailwind v4, static, Cloudflare Pages. Build: `npm ci && npm run build` (output `dist/`). `npm run check` lists owner items still missing. A prebuilt copy is in `dist-prebuilt/`.

## Built
Home (hero, trust strip, 3 dish cards, story, order band, Kannada tagline, FAQ teaser, Instagram follow), /menu/, /order/, /about/, /gallery/, /catering/, /contact/, /faq/, /privacy/, /terms/, 404.
SEO: titles, meta, canonical, OG/Twitter, og-image.jpg, Restaurant + BreadcrumbList + Menu + FAQPage JSON-LD, sitemap.xml, robots.txt, `_headers`. Click events (call/whatsapp/directions/menu/order) push to dataLayer and gtag if present.
All facts live in `src/data/outlet.config.json` and `src/data/menu.json`. Phone, WhatsApp, Swiggy, Zomato and maps buttons appear only once filled; until then Order falls back to email and Instagram.

## Owner blockers (NOT launch-ready until done)
1. Call number (WhatsApp 9663066999 is set; add `phone` if calls go to the same or another number)  2. Address DONE (41st Cross, 9th Block, confirmed by owner)  3. Opening hours  4. Real menu items and prices (menu.json has only items seen in photos, no prices)  5. Domain (`domain` in config, and `site` in astro.config.mjs)  6. Google Maps link  7. Franchisor OK for logo/brand  8. Clean Jayanagar photos  9. Swiggy/Zomato links if live  10. Privacy and Terms are plain drafts, get them reviewed.

## Notes
- Only 4 clean dish photos exist. Reels have Instagram overlays and other outlets' text, so no video is used.
- No fake prices, reviews or "Hyderabadi" wording. Franchise head-office number not used. GST, partner names and certificates not published.
- Built successfully (11 pages). Not browser, Lighthouse or real-phone tested yet.
- `source-assets/` is not deployed: logo render only (unused IG posters and the reference mockup were removed in v14). The 21 MB original logo PDF was left out to keep the zip under 30 MB (still in your mavali_part rar files).

## Phase status
Phase 1 hardening is in v7: see PHASES.md.

## Remaining plan
Zip 4: Lighthouse and real-phone test, fix issues. Zip 5: deploy to Cloudflare Pages, Search Console, Bing. Zip 6: Google Business Profile, WhatsApp Business, citations (see Design Check + SEO Plan md).

## Menu page (v14, home v2 design wired in)
/menu/ uses `src/components/MenuSection.astro`, now rendered at build time (items are in the HTML, no JS needed to read or order). Design from mavalli-home-v2: pill filter (All + categories, sticky under the nav), compact photo cards with gold badge and Order button, list rows for items without a photo, add-ons line, party/office band linking to /catering/.
Data: `src/data/menu.json` (edit prices, names, Kannada, img, badge there). Images: `public/img/menu/*.jpg`.
Deep links: category ids from menu.json are the anchors, so the home page tiles (`/menu/#starters`, `/menu/#biriyani`, `/menu/#soups---tiffin`, `/menu/#combo`) open that category. Unknown hashes fall back to All.
Order buttons are plain WhatsApp links (`waLink`), so they work without JS and fire the `order_click` event.
**The 7 menu photos are TEMPORARY stand-ins.** Replace each file with the real photo using the same file name (about 600x750 portrait).
Only MenuSection.astro changed in v14. Home, header, footer and other pages are untouched.

## Landing palette (v15)
Desktop (1024px+) header and hero use the owner's reference colours: ivory/cream background, maroon buttons, gold accents, dark text. Below 1024px the header and hero stay dark maroon, as in the reference's mobile view. Rules are at the end of `src/styles/global.css`.

## v20
- Logo bigger on every screen (mobile 7.6rem, desktop 10.6rem) so the Kannada brand name reads; English "Mavalli Biryani / Jayanagar" sits beside it on phones.
- Live fire + smoke on the handi in the logo: canvas `#logo-fx` in `Header.astro` (pauses off-screen / hidden tab, off with reduced motion).
- WhatsApp chat (`Welcome.astro`): human typing (typing dots, uneven speed, small corrections, timestamps, blue read ticks), quick-reply chips Swiggy / Zomato / Pickup / Dine-in (dine-in asks party size), cool slate-teal theme. Swiggy/Zomato chips link out once `swiggy` / `zomato` are set in outlet.config.json; until then the bot says "coming soon" and continues on WhatsApp.
- `standalone/mavalli-biryani-standalone.html`: whole site (10 pages) in one file, images/fonts/video embedded, opens in Chrome by double-click. Rebuild it from `dist/` after any change.

## v21
- New glossy emblem (public/img/logo.webp 720px, logo-sm.webp, favicon). Header: logo now sits INSIDE the bar (no gold plate, no overhang), bar is taller (mobile 6.5rem, desktop 8.2rem) so the brand name reads. English name beside it on phones/tablets.
- Fire/smoke canvas re-aimed at the new emblem. Original file in source-assets/logo-glossy-emblem.png.

## v22
- Header: "Mavalli Biryani / Jayanagar" wordmark now sits beside the logo on EVERY screen size (it was hidden on desktop 1024px+). One line on all phones from 320px up; the name scales smoothly so it never touches the menu button. "Jayanagar" is 12px+.
- Phone/tablet header: logo height is one CSS variable (`--logo-h`, fluid 4.5rem to 5.7rem). Menu panel and hero spacing follow it automatically. Menu button is vertically centred.
- Mobile fixes: Contact/Privacy/Terms no longer scroll sideways at 320px (long email wraps); 44px tap targets for breadcrumb, FAQ rows, chips and footer links.
- All changes are in the v22 block at the end of `src/styles/global.css`. No markup changed.
- `standalone/mavalli-biryani-standalone.html` rebuilt with the same CSS. Tested at 320 to 1600px (both builds): no wrapping, no overlap, no sideways scroll, no console errors.
- v22b: fixed cut-off letters (tails of y/g in "now in Jayanagar" hero headline and the "Taste of 1952" heading): headline mask now has room for descenders, gradient-text span extended below the baseline, reveal clip no longer ends at inset(0). Rules at the very end of global.css.

## v24 (menu)
- Menu data/layout match the Jayanagara Branch board (35 items, numbered 1-35 in board order: left column Biryani, Veg, Veg Starter, Beverages; right column Non-Veg, Boneless, Soup, Sunday Special).
- Standalone is generated: npm run build && python3 scripts/build-standalone.py

## v25
- GA4 G-VHKBGBHQ2C wired (outlet.config.json ga4), domain mavallibiryanijayanagar.com (site now indexable).
- Swiggy/Zomato hidden until URLs are set in outlet.config.json.
- Home restyled to board look (maroon/gold bands, brush headings). Hero photos open with an iris after the video ends.
- Menu: Add/stepper cart, one numbered WhatsApp message.
- Still needed: real opening hours (cfg.hours), Google Maps URL (cfg.mapsUrl), Swiggy/Zomato URLs, photoshoot images.


## v26 update (6 Nov 2026)
- All 35 menu items now have their own dish photo (`public/img/dishes/*.webp`, 600px card + 128px thumb). Source images were AI-generated draft thumbnails from a contact sheet; the baked-in caption strips were cropped off. Replace with real photos of the outlet's food when available (same file names).
- Removed the old placeholder photos that did not match their dishes (Chicken Biriyani showed mutton, Chicken Kabab showed green curry).
- Menu rows show the dish photo on phones too (item number as a corner badge).
- Home "Explore the menu" rail has 8 category tiles; Gallery has a "menu in pictures" grid.
- Added Refund & Cancellation and Cookie pages, rewrote Privacy and Terms, grievance contact, consent-gated GA4, 17-question FAQ, config-driven Google reviews strip, new-outlet script.

## v31 (6 Nov 2026): final palette + arch shapes (from Mavalli_Biryani_Website_Showcase.png)
- Palette tokens in the `@theme` block (global.css): maroon #5A0F1A, wine #2B0509, cream #FDF6E6, gold #E0A940, copper #9A4E1E, cream-on-dark #FFF3D9, dark-on-cream #27100C, card #F5E8CC, gold border #C58B2A. Sections follow ~45% cream / 30% maroon / 15% wine / 7% gold / 3% copper. WhatsApp and CTA buttons are gold.
- Hero: wine-to-maroon, arch photo with gold outline, image left / copy right on desktop. Round gold "SINCE 1952" laurel seal (`src/components/Seal.astro`) sits right of the headline (desktop) and beside the headline lines (phone).
- Home: static trust strip, "Our Signature Dishes" arch cards on cream, "Our Menu" tile grid (static, marquee script removed), story band with arch photo.
- Menu page: cream theme, maroon category tabs, arch-shaped dish photos with gold outline (64x80).
- All v31 rules are the blocks at the end of global.css and the "v31" block at the end of MenuSection.astro's style.

## v32
- Hero is a split: maroon/wine left with the copy, cream right with the arch photo (desktop). On phones the cream panel is on top (photo) and maroon below (copy). The 1952 seal sits on the seam in both.
- Dish photos (home Signature Dishes cards + menu page rows) use the showcase's cut-shoulder arch: one shared clip path `#arch-clip` in Base.astro, gold outline drawn by a small SVG per image, caption plate below.
