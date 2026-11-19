# Associate Auctions website

The new associateauctions.com, built with [Astro](https://astro.build) as a fast static site. The plan and background research are in `PLAN.md` and `SOLD-DEALS-RESEARCH.md`.

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the built site
```

## Pages

| URL | File |
|---|---|
| `/` | `src/pages/index.astro` |
| `/auctions/` | `src/pages/auctions/index.astro` |
| `/auctions/<slug>/` | `src/pages/auctions/[slug].astro` (one page per auction) |
| `/sell/`, `/buy/`, `/about/` | `src/pages/*.astro` |
| `/thanks/` | Form confirmation page |
| `/404` | Not found |

## Editing content

- **Contact details and licenses:** `src/data/site.ts` (used everywhere).
- **Auctions:** `src/data/auctions.ts`. Add an object to `auctions` with `status: 'upcoming'` and it appears under "Upcoming auctions" on the home page and gets its own page automatically. Change it to `'completed'` after the sale. Put photos in `src/assets/` and import them at the top of the file.
- **Smaller past auctions without photos:** `otherPastAuctions` in the same file.

## Forms

The "Auction alerts" and "Free auction analysis" forms post to **FormSubmit** (formsubmit.co), which emails each submission to the address in `src/data/site.ts`. The **first** submission triggers a one-time activation email to that inbox; KC must click the link in it, after which submissions arrive normally. Visitors are then sent to `/thanks/`.

## Deploying (Vercel)

The repo is linked to a Vercel project: every push to `main` deploys to production, and other branches get preview URLs. `vercel.json` sends the old WordPress URLs (e.g. `/past-auctions/`, `/sellers-guide/`) to the new pages with permanent redirects.

## Before launch

1. **Bidder-packet PDFs** are still linked from the old WordPress site (`associateauctions.com/wp-content/...`). Download them into `public/docs/` and update the URLs in `src/data/auctions.ts` before the old site is switched off.
2. Point the associateauctions.com domain at Vercel (Project → Settings → Domains) and update DNS.
3. **Brokerage disclosure:** confirm with KC whether real estate ads must name Chapman Commercial Real Estate (his BK3435557 license is a broker-associate license).
4. **Auction business license:** Associate Auctions' auction business license (AB3046) shows as void on DBPR; KC should confirm it's in order.
5. Set up Google Search Console and submit `/sitemap-index.xml`.
