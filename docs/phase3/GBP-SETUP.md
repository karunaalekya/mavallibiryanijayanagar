# Google Business Profile setup

## 1. Claim or create
1. Search "Mavalli Biryani Jayanagar" and the street address on Google Maps. If a listing exists, choose "Claim this business". If not, go to business.google.com > Add your business.
2. Business name: exactly the signboard name. No extra keywords.
3. Category: primary **Biryani restaurant** if offered in the list (else "Indian restaurant"). Secondary: Non-vegetarian restaurant, Takeaway restaurant (add Delivery only if you really deliver).
4. Location: add the shop address; set service area only if you deliver yourselves.
5. Verification: usually a video recording or a postcard/phone code. Film the signboard, the street, the kitchen, and the licence. Verify before editing everything else.

## 2. Fill every field
| Field | Value |
| --- | --- |
| Phone | [FILL] (same as website) |
| Website | https://[FILL domain]/?utm_source=gbp&utm_medium=organic |
| Hours | [FILL] and add special hours for festivals |
| Services | Dine-in / Takeaway / Delivery: tick only real ones |
| Attributes | Pickup, WhatsApp ordering if shown, wheelchair access only if true |
| Menu link | https://[FILL domain]/menu/ |
| Order link | WhatsApp link, plus Swiggy/Zomato only when live |
| Opening date | the real opening date of this outlet |
| Description (750 max) | see below |

### Description (about 600 characters, plain facts)
Mavalli Biryani Jayanagar cooks Karnataka-style biryani on wood fire in copper handis, in the Mavalli tradition that goes back to 1952. Our Jayanagar outlet serves mutton biryani, chicken biryani, egg biryani and green masala curry, with pickup from 9th Block, Jayanagar. Order by call or WhatsApp. Ask us about biryani for parties and offices.
(Edit "serves" to match menu.json once the menu is confirmed. "1952" refers to the brand, not this outlet's age.)

## 3. Photos (aim for 10+ real ones)
Logo, cover (copper handi), 4 dish photos, kitchen/wood fire, signboard from the street, interior, team (with consent). Name files meaningfully, upload original quality, no text overlays.

## 4. Products / menu
Add each confirmed dish as a product with a real price. Leave out anything unconfirmed.

## 5. Q&A
Seed 3 real Q&As yourself (hours, bulk orders, pickup) from the site FAQ.

## 6. Link tracking
Website link uses UTM so GA4 shows "gbp / organic". Add `?utm_source=gbp&utm_medium=organic` only on this link.

## 7. After verifying
- Add the Maps share link to `mapsUrl` in `src/data/outlet.config.json` (shows Directions buttons on the site) and rebuild.
- Add the GBP link to `sameAs` (config) if you want it in the schema.
- Reply to every review within 48 hours (see REVIEWS.md).
- Check Insights after 30 days: calls, direction requests, website clicks.
