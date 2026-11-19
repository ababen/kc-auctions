# SEO audit & backup: old associateauctions.com

Audited Nov 19, 2026 with Composio (Firecrawl site map, Semrush backlink data) plus a direct crawl. Google Search Console has **no property for associateauctions.com** on the connected Google account, so there is no click/impression data. Get KC (or whoever set up the old site) to add one as soon as possible.

## Bottom line

- **The SEO equity is small and almost all of it sits on the homepage.** Semrush Authority Score is **6/100**. The homepage has links from 92 domains; the `http://` and `www.` versions of the homepage add another 55. No inner page has a meaningful external link.
- **Most links are spam.** Of the 2,518 referring domains, all but a handful are automated link farms created in 2026 (e.g. `prepaidgiftbalance.online` with 503 links, `malatyaescorton.shop` with 441). These carry no value and are not worth preserving or disavowing unless rankings drop.
- **The genuine links are business directories**, all pointing at the homepage:

| Linking site | Score | Link | Points to |
|---|---|---|---|
| auctionzip.com (profile #153144) | 48 | nofollow | `http://www.associateauctions.com/` |
| superpages.com (Stuart, Port St. Lucie, Rio listings) | 47 | nofollow | `http://associateauctions.com/` |
| dexknows.com | 35 | nofollow | `http://associateauctions.com/` |
| visualvisitor.com | 33 | follow | `https://www.associateauctions.com/` |
| allauctionsales.com | 23 | follow | `http://associateauctions.com/` |
| bidbuysmart.com | 17–23 | follow | `https://associateauctions.com/` |
| lifebuilderstc.com (sponsors page) | 16 | follow | `https://associateauctions.com/` |
| charityfundraiser.com | 7 | follow | `http://www.associateauctions.com/` |

**What protects this equity:** the new site must answer on `associateauctions.com` and redirect `www.` and `http://` to it with 301s. Vercel does both automatically once the domain and its `www.` version are added to the project.

## Every old URL is accounted for

102 old URLs were found (Firecrawl map of the current site + Semrush's index of past URLs, including the previous WordPress and Joomla versions of the site). Current status on the old site: **26 live, 7 redirecting, 69 already returning 404**. Full list with status: `backup/old-site-2026-11-19/legacy-status.txt`.

All of them now have a home on the new site (`vercel.json`):

| Old URL(s) | New URL |
|---|---|
| `/` | `/` (same) |
| **4 past auction pages missing from the new site:** Monterey Yacht condo, La Buona Vita home, La Buona Vita 2 homes, 6019 S US Hwy 1 | **Rebuilt at the exact same URLs**, so their rankings carry over |
| `/auctions/residential-real-estate-auction/` | `/auctions/2392-se-fruit-ave/` |
| `/auctions/56-9-acres-development-property/` | `/auctions/angle-road-development-property/` |
| `/auctions/commercial-real-estate-auction/` | `/auctions/st-lucie-west-commercial-lots/` |
| `/auctions/6019-s-us-highway-1-2/`, `/4-5-acres-auctioned-at-real-estate-auction-in-fort-pierce-florida/` | `/auctions/6019-s-us-highway-1/` |
| Photo attachment pages under each auction | That auction's page |
| `/current-auctions/`, `/past-auctions/`, `/sold-properties/`, `/updates/`, `/upcoming-auctions/*`, `/auction/*`, `/tag/*`, `/category/*`, event-calendar archives (`/auctions/category/*`, `/auctions/2024-05-18/`…), old one-off auction posts | `/auctions/` |
| `/south-florida-real-estate-auctions-associate-auctions/`, `/about-us/`, `/press/`, `/author/*`, old Joomla `/news/*` | `/about/` |
| `/sellers-guide/`, `/advantages/`, `/process/`, `/faq/`, `/services/`, `/seller-information/` | `/sell/` |
| `/buyers-guide/`, `/buyers/`, `/buyer-information/` | `/buy/` |
| `/contact/` | `/#analysis` |
| Old Joomla `/index.php/*` | `/auctions/` |
| `/sitemap.xml`, `/sitemap_index.xml`, Yoast sub-sitemaps | `/sitemap-index.xml` |
| Theme junk (`/fusion_tb_category/*`, `/element_category/*`) | `/` |

**Bidder PDFs** (5 files) are now hosted on the new site at their **exact old paths** (`/wp-content/uploads/2021/...pdf`), so links to them keep working after the switch.

## Old-site issues fixed by the new site

- Footer links to `/about/`, `/advantages/`, `/faq/` returned 404 on every page.
- Wrong broker license on every page (`BK3070353`, voided; current is `BK3435557`).
- 9 of 14 pages had no meta description; 8 had no H1; duplicate "New Property" placeholder pages were indexed.
- WordPress theme template pages (`/fusion_tb_category/footer/`) were indexed.
- No images had alt text.

## Backup

`backup/old-site-2026-11-19/` (97 MB, 651 files):

- `site/`: full mirror of the live site: every page's HTML, every uploaded image (all sizes), all 5 PDFs, theme CSS/JS, `sitemap.xml` and `sitemap_index.xml`.
- `legacy-pages/`: the 26 old URLs that still load, saved as HTML.
- `legacy-urls.txt`, `legacy-status.txt`: every known old URL and its status on Nov 19, 2026.

The backup is excluded from Vercel deploys (`.vercelignore`).

## Before switching the domain

1. **Create a Google Search Console property** for `associateauctions.com` (Domain property, via DNS) so rankings can be watched through the move. If KC already has one under another Google account, add your account as an owner.
2. Add both `associateauctions.com` and `www.associateauctions.com` to the Vercel project; set the apex as primary.
3. After DNS switches: submit `https://associateauctions.com/sitemap-index.xml` in Search Console and spot-check a few old URLs from the table above.
4. **Update the directory listings** to the new contact details and `https://associateauctions.com/`: AuctionZip (two profiles), Superpages, DexKnows, AllAuctionSales, BidBuySmart, CharityFundraiser.
5. Watch Search Console for 2–4 weeks for 404s and add redirects for anything missed.
