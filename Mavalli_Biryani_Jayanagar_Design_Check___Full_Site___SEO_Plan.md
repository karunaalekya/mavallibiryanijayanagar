# Mavalli Biryani Jayanagar: Design Check + Full Site & SEO Plan

30 Oct 2026 · BJNEXUS AI · Based on phase2-site + ChatGPT reference mockup

## 1. Verdict: does our build match the reference?

**No. Roughly 35% match.** Section order is similar, but the look, hero, nav, cards, order band and footer are all different. Colour and shape are the biggest gaps.

| Part | Reference | Our phase2 | Match | Fix |
| --- | --- | --- | --- | --- |
| Header | Logo left, 7-link nav, Order Now pill, hamburger on mobile | No nav on desktop, no header at all | No | Add sticky header with nav + Order Now |
| Hero | Ivory, headline left, big copper-handi photo right, 1952 seal, Zomato/Swiggy/Pickup row | Black screen, logo only, no food photo, tiny "Vishwaa" designer credit visible under logo | No | Dish photo in hero; crop credit out of logo |
| Must-try dishes | 5 compact 4:3 cards, price, Order Now | 3 tall crops, poster text "valli Bir…" visible on curry card, price shows ₹ -- | No | Re-crop clean photos; real prices; 4:3 ratio |
| Story | Photo left, text + 3 icon points right | Text left, photo right, no points | Partial | Swap sides; add 3 real points (wood fire, own masala, Karnataka style) |
| Why choose us / reviews | 4 icons + 2 review cards | Gold strip with 4 words, no reviews | Partial | Keep strip idea; reviews only if real |
| Order band | Dark band: bag photo, Zomato / Swiggy / Pickup, outlet picker | Missing | No | Call / WhatsApp / Swiggy / Zomato (only live ones); no outlet picker (single outlet) |
| Instagram | Row of small thumbnails + Follow button | 3 tall crops + one huge empty red block | No | 6 square thumbs, small Follow button |
| Footer | Maroon, 4 columns, socials, legal | One line | No | 4-column maroon footer |
| Page background | Warm ivory almost everywhere, dark only for order band | Black hero/tagline/visit, ivory middle | Partial | See palette below |
| Shapes | 10-12px radius cards, 8px-radius buttons, soft shadow, thin gold underline under headings | 6px cards, full pill buttons, no shadow | Partial | Radius 12 cards, 10 buttons |

**Do NOT copy from the reference:** "Hyderabadi" wording, prices (₹280, ₹360…), review names/quotes (Ravi Kumar, Sneha Reddy), "Multiple outlets across the city", the outlet picker, "since 1952" as this outlet's age, the head-office email. These are fake or wrong for Jayanagar.

**Also skip from the reference** (our design rules): small caps eyebrow above every heading ("OUR SIGNATURE", "OUR STORY"), identical icon+heading+text tiles used as page structure.

### Bugs found in phase2 (from my render)

- P1 Designer credit "Vishwaa" is baked into logo.webp and shows on the hero.
- P1 Menu card 3 and Instagram card 3 show cropped poster text ("valli Bir…").
- P1 Instagram strip has an empty red box about half the width. No content.
- P1 All prices ₹ --, phone XXXXX, hours HH:MM, domain YOUR-DOMAIN.com still placeholders.
- P1 Same 3 photos reused 3 times (story, menu, Instagram).
- P2 No header or nav on desktop, so no way to reach Menu/Contact except scrolling.
- P2 Card photos are 1080x529 but displayed tall, so heavy upscaling and wrong crop.
- Not verifiable here: fonts (Google Fonts blocked in my sandbox, so serif/sans shown were fallbacks) and Google Map (blocked). Test both on a real phone.

## 2. Design brief (BJNEXUS design rules)

- **Mode:** Persuade (restaurant). Goal: Call / WhatsApp order in 5 seconds on mobile.
- **Concept:** "Fire to copper to ivory." The page starts at the wood fire (dark hero, the one bold moment), then moves into the copper handi on warm ivory, so food is always on ivory or near-black.
- **Things only Mavalli has:** wood fire, copper hammered handi, the 8-point crest shape of the logo, the red ikat border band in the logo, Kannada wordmark and tagline ತಿಂದು ತೇಗಿ, Taste of 1952, Jayanagar, green masala curry, Karnataka style.
- **Signature shape:** crop the hero dish photo in the 8-point crest outline. Reuse that shape for the 1952 seal and the section divider. No other decorative shapes.
- **Dials:** VARIANCE 6, MOTION 4, DENSITY 5.

### Palette (tint neutrals toward brand; no pure black or white)

| Role | Hex | Use |
| --- | --- | --- |
| Ink | #0F0E0C | Hero, tagline band |
| Ivory | #FFF8ED | Main light background |
| Cream | #F6EAD4 | Alternate light section |
| Maroon | #4A0E12 | Footer and header-on-scroll only, never behind dishes |
| Fire red | #C4261C | Primary buttons only |
| Copper | #B8662E | Thin accents, price underline, icons |
| Gold | #E0A940 | Heading underline, Kannada tagline on ink |
| Charcoal-brown | #3A2A24 | Body text on ivory (≥ 4.5:1) |
| WhatsApp | #25D366 | WhatsApp buttons only, text in dark ink for contrast |

## 3. Fonts and effects, section by section

**Fonts (decision):**

- Display / headings: **Rozha One** (strong, warm, not generic). Hero H1 clamp(2.6rem, 6vw, 5.5rem).
- Body and UI: **Mukta** 400 / 600. Prices: Mukta 600 with tabular numbers.
- Kannada: **Noto Sans Kannada** 700 for the tagline, 500 for any Kannada body.
- **Self-host** the three fonts as woff2 subsets (Latin + Kannada). Fixes the render risk, speeds LCP, no Google request.
- Fallbacks: Georgia for display, system-ui for body.

**Effects (one focal moment only: the hero fire).** Everything else is quiet feedback. Rules applied: only transform/opacity, no `transition: all`, hover inside `@media (hover:hover)`, `:active` scale .97 on buttons, reduced-motion path, content visible if JS fails.

| Section | Font | Effect | Why |
| --- | --- | --- | --- |
| Header | Mukta 600 nav, logo image | Transparent on hero, turns maroon after 40px scroll; active link underline via scaleX 150ms | Nav always reachable, no layout shift |
| Hero (focal moment) | Rozha H1, Mukta sub, Kannada tagline small | Embers canvas (keep, pause offscreen). Logo reveal 700ms, then headline, then buttons (stagger ≤ 0.4s). Dish photo in crest shape rises with scale .95→1 | One authored 700ms entrance, matches the fire idea |
| Trust strip | Mukta 600 | None. Static gold band with 4 short facts | Fast, no marquee |
| Must-try dishes | Rozha card title, Mukta price | Mobile: scroll-snap swipe. Desktop hover: card lifts 4px, photo scale 1.04 | Feedback only, no entrance fade on every card |
| Our story | Rozha H2, Mukta body max 65ch | Photo fades in once with scale .95→1 | Different from other sections |
| Menu | Tabs Mukta 600 | Tab switch = 150ms opacity cross-fade. Tab bar sticky on mobile. Order button press scale .97 | Menu is the money section |
| Kannada tagline band | Noto Sans Kannada 700, gold on ink, huge | No animation. Big type is the effect | Avoid second show-off |
| Gallery / Instagram | None needed | 6 square thumbs. Any video: muted loop, lazy, plays only when visible | Keeps weight low |
| Reviews | Mukta, Rozha for the quote mark only | Swipe row, no auto-rotate. Only real, permitted Google reviews | No fake proof |
| FAQ | Mukta 600 questions | `<details>` plus icon rotates 45° (transform) | Accessible, no JS |
| Visit / map | Rozha H2, Mukta | Map loads on tap (static image facade) to protect LCP. "Open now" dot fades (opacity only) | Speed |
| Footer | Mukta, Rozha logo line | None | Calm ending |
| Sticky bottom bar (mobile) | Mukta 600 | Slides in after hero (translateY). Call, WhatsApp, Menu, Directions | Conversion |
| Reduced motion |  | No embers, no movement. Opacity/colour only | Accessibility |

## 4. Site map and URLs (deployment ready)

Stack: **Astro + Tailwind v4, static output, Cloudflare Pages.** Content in one `outlet.config.json` so the same code can be reused for other outlets. Domain placeholder: `YOUR-DOMAIN.com`.

| URL | Purpose | Title (≤ 60) | Meta description (≤ 155) | H1 |
| --- | --- | --- | --- | --- |
| `/` | Order in 5 seconds, story, top dishes, visit | Mavalli Biryani Jayanagar \| Wood-Fire Biryani Bengaluru | Wood-fire Karnataka biryani in Jayanagar, Bengaluru. Taste of 1952. Call, WhatsApp or order online. | Mavalli's wood-fire biryani, now in Jayanagar |
| `/menu/` | Full menu with real prices | Menu & Prices \| Mavalli Biryani Jayanagar | Mutton, chicken and egg biryani, green masala curry and starters at Mavalli Biryani Jayanagar. Order on WhatsApp. | Our menu |
| `/order/` | Call, WhatsApp, Swiggy, Zomato, pickup | Order Biryani in Jayanagar \| Call, WhatsApp, Swiggy | Order Mavalli Biryani Jayanagar by call, WhatsApp or delivery apps. Pickup available. | Order biryani in Jayanagar |
| `/about/` | Story, wood fire, masala, franchise note | Our Story \| Taste of 1952 \| Mavalli Biryani Jayanagar | How Mavalli's Karnataka biryani is cooked on wood fire, now at the Jayanagar outlet. | The Mavalli story |
| `/gallery/` | Photos and clips | Gallery \| Mavalli Biryani Jayanagar | Photos from the Mavalli Biryani Jayanagar kitchen and table. | From our kitchen |
| `/catering/` | Bulk and party orders (high value) | Bulk Biryani & Party Orders in Jayanagar | Order Mavalli biryani for parties and offices in Jayanagar, Bengaluru. Call or WhatsApp for a quote. | Biryani for parties and offices |
| `/contact/` | Address, hours, map, directions | Contact, Hours & Directions \| Mavalli Biryani Jayanagar | Find Mavalli Biryani in Jayanagar: address, opening hours, phone and directions. | Visit us in Jayanagar |
| `/faq/` | Answers to common questions | FAQ \| Mavalli Biryani Jayanagar | Delivery, hours, parking, bulk orders and more. | Good to know |
| `/privacy/`, `/terms/` | Legal |  |  |  |
| `/404.html` | Friendly error with Call and Menu links |  |  |  |
| `/sitemap.xml`, `/robots.txt`, `/favicon.png`, `/og-image.jpg` (1200x630) | Technical |  |  |  |

Do not create "biryani near 4th Block / 9th Block" copy pages unless the outlet really serves that area with its own details. Thin location pages hurt rankings.

**Internal links**

- Header: Home, Menu, Our Story, Gallery, Order, Contact + Order Now button.
- Footer: all pages above + Catering, FAQ, Privacy, Terms, Instagram, Google Business Profile.
- Home: dishes → `/menu/`, story → `/about/`, order band → `/order/`, FAQ teaser → `/faq/`, visit → `/contact/`, party line → `/catering/`.
- Every page ends with the Call / WhatsApp bar.
- Breadcrumbs on inner pages.

**External links**

- WhatsApp: `https://wa.me/91<number>?text=...` (pre-filled with dish name)
- Call: `tel:+91<number>`
- Directions: Google Maps link from the Business Profile
- Instagram: instagram.com/mavallibiryani\_official/
- Swiggy / Zomato: only when the outlet page is live
- Never link to head office or other outlets.

## 5. SEO plan (Google + local)

I read "wasta business" as **WhatsApp Business**. Tell me if you meant something else.

### On-page

- One H1 per page with the main keyword in plain words. Keywords: biryani in Jayanagar, Mavalli biryani Jayanagar, wood-fire biryani Bengaluru, mutton biryani Jayanagar, party biryani order Bangalore, ಬಿರಿಯಾನಿ ಜಯನಗರ.
- Title and meta per page as in the table. Canonical on every page.
- Open Graph + Twitter card on every page, real 1200x630 image (dish + logo).
- Alt text that describes the dish. Real photos of the Jayanagar kitchen where possible.
- Images: webp/avif, width and height set, hero preloaded, rest lazy.
- Unique copy. Do not copy mavallibiryani.com text. Franchise outlets must not share identical paragraphs.

### Structured data (JSON-LD)

- `Restaurant` on every page: name, address (PostalAddress), geo, telephone, `openingHoursSpecification`, `priceRange`, `servesCuisine`, `hasMenu` → `/menu/`, logo, image, `sameAs` (Instagram, Business Profile, Swiggy, Zomato).
- `Menu` / `MenuItem` with real prices on `/menu/`.
- `BreadcrumbList` on inner pages.
- `FAQPage` on `/faq/`: still fine for clarity, but Google shows FAQ rich results only for a few site types now, so don't expect stars-style boxes.
- `aggregateRating` only with real, verifiable reviews. Otherwise leave out.

### Google Business Profile (biggest local lever)

1. Claim or request ownership of the Jayanagar listing. Check first whether one already exists from the franchisor.
2. Resolve the address conflict (see blockers). Website, GBP, Maps pin, Swiggy, Zomato, FSSAI and GST must say the same.
3. Primary category: Biryani restaurant (or Indian restaurant if not offered). Add secondary: Non-vegetarian restaurant, Takeaway.
4. Add phone, website, hours, special hours for holidays, services (dine-in, takeaway, delivery), menu link, 10+ real photos, logo, cover.
5. Add products/dishes with real prices. Post weekly (dish, offer).
6. Make a short review link + QR for the counter. Ask happy customers; never buy or write reviews.
7. Website link with UTM (`?utm_source=gbp&utm_medium=organic`) so GA4 shows it.
8. Reply to every review within 48 hours.

### Citations (same name, address, phone everywhere)

Bing Places, Apple Business Connect, Justdial, Sulekha, Zomato, Swiggy, Facebook page, Instagram bio, Bing/Google Maps, Magicpin, local Bengaluru food directories.

### WhatsApp Business

- Business profile: name, address, hours, website, catalog with 6 to 12 dishes.
- Greeting message and away message; quick replies ("Menu", "Address", "Bulk order").
- Same number as the site and GBP. Short link + QR on counter and packaging.

### Technical

- Cloudflare Pages: HTTPS, www → apex redirect, Brotli, long cache on fonts/images, security headers via `_headers`.
- Core Web Vitals targets: mobile Lighthouse 90+, LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms.
- `sitemap.xml` with all pages, `robots.txt`, submit in Search Console (domain property via DNS) and Bing Webmaster Tools.
- GA4 or Cloudflare Web Analytics. Track events: call\_click, whatsapp\_click, directions\_click, menu\_view, order\_click.
- Optional later: Kannada version at `/kn/` with `hreflang`.

### Content to grow rankings (after launch)

- Monthly: one GBP post/week, one new gallery set, one blog-style page only if useful (e.g. "What is Karnataka-style wood-fire biryani?").
- Collect 20+ real Google reviews in the first 60 days.

## 6. Deployment checklist

**Blockers from owner (cannot launch without):**

1. Phone / WhatsApp number
2. **Correct address**: owner says 28th Main, 41st Cross, 9th Block; FSSAI/GST say 28th Main, 4th Cross, 1st Block. Pick one, confirm with a document or the Maps pin.
3. Opening hours
4. Real menu items and prices
5. Domain name
6. Clean logo without the "Vishwaa" credit baked in (or approval to crop it)
7. Clean Jayanagar photos / raw video clips (no Instagram overlays or other-outlet text)
8. Swiggy / Zomato links, only if live
9. Written OK from the franchisor on using the logo and brand wording
10. Real reviews with permission (or skip the section)

**Build steps**

1. Fill `outlet.config.json`. Run a grep for `XXXX`, `YOUR-DOMAIN`, `HH:MM`, `₹ --`: must return zero.
2. Add header, new hero, real dish photos, footer, order band, new pages.
3. Self-host fonts. Compress images.
4. Add JSON-LD, sitemap, robots, OG images, analytics events.
5. Test: 375 / 768 / 1280, keyboard focus, reduced motion, JS off.
6. Lighthouse mobile 90+, Rich Results Test, WhatsApp link-preview test, real Android phone.
7. Push to GitHub, connect to Cloudflare Pages, add custom domain, check HTTPS and redirects.
8. Search Console + Bing verify, submit sitemap, update GBP website link.
9. Day 1, 7 and 30 checks: indexing, calls/WhatsApp clicks in GA4, GBP insights.

## 7. Selling this to other franchise outlet owners

You have a real offer: "Mavalli outlet website + Google Business Profile in one week."

- **Reusable template:** one codebase, one config file per outlet (name, address, phone, hours, menu, map, links, optional colour tweak). New outlet = new config, new photos, new domain.
- **Each outlet needs its own:** domain, GBP listing, phone, photos, copy for the story and FAQ. No duplicated text across outlets, or Google may ignore them.
- **Before pitching:** get the franchisor's written permission about brand assets and whether a central site or outlet sites are allowed. Do not use head-office numbers.
- **Packages (you set prices):**
  - Starter: one-page site + GBP setup + WhatsApp Business setup
  - Growth: Starter + menu page + catering page + analytics + citations
  - Care: monthly updates, weekly GBP posts, review replies, price/menu edits
- **Proof for pitching:** this site once live (Lighthouse score, GBP calls and direction clicks after 30 days). Use real numbers only.
- **Process:** intake form → config → photos → build → owner approval → launch → 30-day report.

## 8. Build order (Phase 3)

| Step | Work | Output |
| --- | --- | --- |
| 1 | Header, new hero (crest-shaped dish photo), fix logo credit, footer | Matches reference layout |
| 2 | Dish cards 4:3 clean crops, menu tabs, order band, Instagram row | Conversion sections |
| 3 | Inner pages: menu, order, about, gallery, catering, contact, faq | Full site |
| 4 | SEO, schema, sitemap, analytics events | Google ready |
| 5 | QA + Lighthouse + slop audit + deploy | Live site |
| 6 | GBP + WhatsApp Business + citations setup guide | Local ranking |

**Single biggest improvement right now:** replace the black logo-only hero with a hero that shows the copper handi dish, and add a header with nav. That alone moves the page from 35% to about 70% of the reference.
