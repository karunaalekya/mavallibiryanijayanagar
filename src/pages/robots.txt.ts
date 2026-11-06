import cfg from '../data/outlet.config.json';
const live = cfg.domain && cfg.domain !== 'YOUR-DOMAIN.com';
export const GET = ({ site }: { site: URL }) => new Response(live
  ? `User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap.xml', site).href}\n`
  : `User-agent: *\nDisallow: /\n`, { headers: { 'Content-Type': 'text/plain' } });
