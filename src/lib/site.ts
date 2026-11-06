import raw from '../data/outlet.config.json';
export const cfg: Record<string, any> = raw;
// Hotel staff number: dedicated call line if set, otherwise the WhatsApp number (same staff phone).
export const callNum: string | null = cfg.phone ?? cfg.whatsapp ?? null;
export const waLink = (t = 'ನಮಸ್ಕಾರ! Hi, I want to order biryani') => cfg.whatsapp ? `https://wa.me/91${cfg.whatsapp}?text=${encodeURIComponent(t)}` : '/order/';
export const telLink = callNum ? `tel:+91${callNum}` : '/order/';
export const dirLink = cfg.mapsUrl ?? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Mavalli Biryani, ${cfg.address.line}, ${cfg.address.city} ${cfg.address.pin}`)}`;
export const waIcon = '<path fill="currentColor" d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3Zm0 23.7a10.6 10.6 0 0 1-5.4-1.5l-.4-.2-3.9 1 1-3.8-.3-.4A10.7 10.7 0 1 1 16 26.700Zm5.900-8c-.3-.2-1.900-.9-2.200-1s-.5-.2-.7.200-.8 1-1 1.200-.4.200-.7 0a8.700 8.700 0 0 1-4.300-3.800c-.3-.600.300-.5.900-1.700.1-.2 0-.4 0-.5l-1-2.300c-.2-.6-.5-.5-.7-.5h-.6a1.200 1.200 0 0 0-.9.400 3.700 3.700 0 0 0-1.100 2.700 6.400 6.400 0 0 0 1.300 3.400c.2.200 2.300 3.600 5.600 5 2.100.9 2.900.9 3.900.8a3.300 3.300 0 0 0 2.200-1.600 2.700 2.700 0 0 0 .2-1.600c-.1-.1-.3-.2-.6-.4Z"/>';
export const pages = ['/', '/menu/', '/order/', '/about/', '/gallery/', '/catering/', '/contact/', '/faq/', '/privacy/', '/terms/', '/refund/', '/cookies/'];

// Brand-colour marks for the delivery apps. Simplified inline SVGs; swap for the official brand-kit SVGs when you have them.
export const brandIcon: Record<string, string> = {
  zomato: '<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><rect width="32" height="32" rx="8" fill="#fff"/><text x="16" y="24" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-weight="700" font-size="24" fill="#E23744">z</text></svg>',
  swiggy: '<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><rect width="32" height="32" rx="8" fill="#fff"/><path d="M16 5c-4.400 0-8 3.400-8 7.800 0 5.600 8 14.200 8 14.200s8-8.600 8-14.200C24 8.400 20.400 5 16 5Z" fill="#FC8019"/><circle cx="16" cy="13" r="3.200" fill="#fff"/></svg>',
};
export const brandName: Record<string, string> = { zomato: 'zomato', swiggy: 'swiggy' };
