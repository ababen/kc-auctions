// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://auction-station.vercel.app',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/thanks/') })],
});
