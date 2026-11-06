# Cloning the site for another outlet

```
node scripts/new-outlet.mjs --name "Mavalli Biryani <Area>" --domain <domain> --whatsapp <10 digits> \
  --line "<street, area>" --pin <6 digits> --fssai <number> --email <email> --out ../<folder>
cd ../<folder> && npm ci
```
The script copies the code, menu photos and legal pages, and blanks every outlet-specific field (phone, hours, maps link, Swiggy/Zomato, legal name, GSTIN, grievance officer, Google rating, analytics id, search-console codes).

## Then, for each new outlet
1. `src/data/outlet.config.json`: fill `phone`, `hours`, `mapsUrl`, `legalName`, `grievanceOfficer`, `gstin` (if registered), `ga4`, and set `address.confirmed` and `menuConfirmed` to true when checked.
2. `src/data/menu.json`: update prices and remove dishes this outlet does not serve. Dish photos live in `public/img/dishes/`; the file name is the `img` value.
3. Rewrite the Jayanagar-specific copy: hero, About page, Kitchen photos in `public/img/kitchen`, reels, and the sentence "Jayanagar franchise outlet" in the footer and FAQ.
4. Legal pages read the legal name, address, email and grievance officer from the config. Have each outlet's legal text read by that outlet's owner or adviser.
5. `npm run check` must print `config complete`, then `npm run audit && npm run build`.
