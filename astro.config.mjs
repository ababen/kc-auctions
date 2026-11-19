// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://associateauctions.com',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/thanks/') })],
  // Old WordPress URLs → new pages (keeps existing links and search rankings).
  redirects: {
    '/current-auctions/': '/auctions/',
    '/past-auctions/': '/auctions/',
    '/sold-properties/': '/auctions/',
    '/updates/': '/auctions/',
    '/auctions/residential-real-estate-auction/': '/auctions/2392-se-fruit-ave/',
    '/auctions/56-9-acres-development-property/': '/auctions/angle-road-development-property/',
    '/auctions/commercial-real-estate-auction/': '/auctions/st-lucie-west-commercial-lots/',
    '/auctions/new-property/': '/auctions/',
    '/auctions/new-property-2/': '/auctions/',
    '/south-florida-real-estate-auctions-associate-auctions/': '/about/',
    '/advantages/': '/sell/',
    '/sellers-guide/': '/sell/',
    '/process/': '/sell/',
    '/buyers-guide/': '/buy/',
    '/buyers/': '/buy/',
    '/press/': '/about/',
    '/faq/': '/sell/',
  },
});
