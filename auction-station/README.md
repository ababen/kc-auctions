# Auction Station

Sister brand to Associate Auctions: all things auctions, an auctioneer directory and a backup-auctioneer service. Separate Astro site, deployed as its own Vercel project (root directory `auction-station`).

```bash
cd auction-station && npm install && npm run dev
```

## Editing content

- Directory listings: `src/data/directory.ts` (add a photo to `src/assets/` and map it in the two directory pages)
- Guides: `src/data/guides.ts`
- Contact details and brand name: `src/data/site.ts`

Forms (backup request, get listed) post to FormSubmit at the email in `site.ts`. The first submission triggers a one-time activation email.

## Before launch

- Pick a domain and a brand email; update `site.ts`, `astro.config.mjs` and `public/robots.txt`.
- Directory listings are added only after checking each license on DBPR.
