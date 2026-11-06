import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cfg from './src/data/outlet.config.json' with { type: 'json' };
export default defineConfig({ site: `https://${cfg.domain}`, trailingSlash: 'always', build: { inlineStylesheets: 'always' }, vite: { plugins: [tailwindcss()] } });
