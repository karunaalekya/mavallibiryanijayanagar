// Lists owner-blocking gaps. Exit 1 if any remain.
import cfg from '../src/data/outlet.config.json' with { type: 'json' };
import menu from '../src/data/menu.json' with { type: 'json' };
const need = { phone: cfg.phone, whatsapp: cfg.whatsapp, hours: cfg.hours, domain: cfg.domain !== 'YOUR-DOMAIN.com' && cfg.domain, 'address confirmed': cfg.address.confirmed, mapsUrl: cfg.mapsUrl, 'menu confirmed': cfg.menuConfirmed, 'legalName (registered business name)': cfg.legalName, 'grievanceOfficer name': cfg.grievanceOfficer, 'all menu prices': menu.categories.every(c => c.items.every(i => i.price)) };
const miss = Object.entries(need).filter(([, v]) => !v).map(([k]) => k);
console.log(miss.length ? 'MISSING: ' + miss.join(', ') : 'config complete'); process.exit(miss.length ? 1 : 0);
