# Associate Auctions: New Website Plan

**Goal:** Turn associateauctions.com from a dormant brochure into a site that wins seller consultations and brings in registered bidders.

**Current state (audit, Nov 18, 2026):** ~24 organic visits/month, 12 ranking keywords (mostly brand/misspellings), site health 75.6/100, dead menu links (/about, /advantages, /faq), empty "Upcoming Auctions", placeholder pages live, 3 different phone numbers/addresses across the web.

---

## 1. Positioning & big idea

**"The Champion Auctioneer of the Treasure Coast."**

No local competitor has what KC has: a 2010 Florida Bid Calling Champion who's also a J.D. and a licensed broker. Put that front and center. The site should *feel* like an auction: urgent, live, energetic. It should also feel safe enough to hand over a $1M property.

Two audiences, two paths from the homepage:

| Audience | Wants | Primary CTA |
|---|---|---|
| **Sellers** (owners, estates/trusts, attorneys, investors) | Speed, certainty, true market value, a trustworthy expert | **Get a free auction analysis** |
| **Buyers / bidders** | What's for sale, when, terms, how to bid | **Register to bid** / **Get auction alerts** |

Third line of business: **Benefit/charity auctions** (galas, fundraisers). It gets its own landing page and CTA ("Book KC for your event").

---

## 2. Design direction ("new and exciting")

- **Look:** Editorial and premium, not a template. Deep navy or ink base, a coastal accent (Treasure Coast teal), and a "SOLD" signal color (auction red/gold). Big serif headlines, clean sans body text. Full-bleed property photography.
- **Hero:** A short muted video loop of KC calling bids, with the headline *"Real Auctions. Real Results."* (keep the existing tagline) and a live ticker beneath: *Next auction: 2392 SE Fruit Ave · 12d 04h 31m*.
- **Signature motion:**
  - Countdown timers on every auction card.
  - A "Going… going… SOLD" stamp animation on sold properties.
  - A scrolling results bar ("Sold $X over reserve in 30 days").
  - Keep motion subtle and respect `prefers-reduced-motion`.
- **Proof everywhere:** Results stats (properties sold, total volume, avg days to close), testimonials with photos, and the NAA / FAA / Habitat for Humanity / NAEPC badges with alt text.
- **Mobile-first:** Most bidders will arrive from social and email on phones. Put sticky "Call KC" and "Register" buttons on mobile.
- **Accessibility:** WCAG 2.2 AA, plus light and dark themes.

---

## 3. Sitemap

```
/                               Home (seller + buyer split, next auction, results, KC, testimonials)
/auctions/                      Current & upcoming (filters: county, type, date, online/live)
/auctions/[slug]/               Property detail (gallery, countdown, terms, docs, map, register)
/sold/                          Results gallery (price, date, days to sale, before/after story)
/sell/                          Why auction? Process, timeline (30-day marketing + 30-day close), fees FAQ
/sell/estates-and-trusts/       For executors, trustees, attorneys (KC's J.D. angle)
/sell/investors/                Portfolio and asset reallocation
/buy/                           Buyer's guide: how to bid, deposits, buyer's premium, financing
/benefit-auctions/              Charity and gala auctioneering
/about/                         KC Daniel story, credentials, licenses, memberships
/press/                         Media and awards
/faq/                           Long-form Q&A (with FAQ structured data)
/areas/martin-county/           Local pages: Stuart, Palm City, Jensen Beach, Hobe Sound
/areas/st-lucie-county/         Port St. Lucie, Fort Pierce
/areas/palm-beach-county/
/areas/indian-river-county/     Vero Beach
/blog/                          "Auction insights": market notes, auction recaps
/contact/                       Consultation form, phone, address, map
```

Redirect every old URL (`/current-auctions/`, `/past-auctions/`, `/sold-properties/`, `/sellers-guide/`, `/buyers-guide/`, `/process/`, `/south-florida-real-estate-auctions-associate-auctions/`, etc.) to its new page with 301s.

---

## 4. Key features

1. **Auction listings engine.** Each auction is a content entry with:
   - address, county, type (absolute / reserve / online)
   - dates (preview, auction, closing)
   - status (`upcoming` → `live` → `sold` / `passed`)
   - photos, video, documents (bidder packet, disclosures)
   - starting bid, deposit, buyer's premium

   Status and countdowns update automatically from the dates. Sold auctions roll into `/sold/` automatically.
2. **Register to bid / auction alerts.** One form captures name, email, phone, interests (real estate / benefit / estates), and preferred county. It feeds an email list and the CRM.
3. **Free auction analysis (seller lead form).** A three-step form: property address → situation (estate, relocation, investor, distressed) → timeline. Send an instant confirmation and notify KC by text and email.
4. **Online bidding.** Link out to the bidding platform KC already uses (AuctionZip / HiBid / Proxibid, to confirm). We don't build bidding in-house in phase 1.
5. **Calendar export.** "Add to calendar" (.ics) on every auction.
6. **SEO built in:**
   - Schema.org `RealEstateAgent` + `LocalBusiness`, `Event` for each auction, `FAQPage`, `BreadcrumbList`
   - unique titles and meta descriptions, one H1 per page, alt text, XML sitemap, Open Graph images generated per auction
7. **Analytics:** GA4 + Search Console, with conversion events for consultation requests, bidder registrations and phone taps.

---

## 5. Recommended tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Astro** (static-first, React islands for countdowns and forms) | Very fast pages, strong SEO, cheap to host |
| Styling | Tailwind CSS + custom design tokens | Quick to build, consistent look |
| Content | **Decap CMS** (Git-based) *or* Sanity | KC or staff can add an auction from a browser without touching code |
| Forms | Netlify Forms / Formspree → email + CRM (HubSpot or Mailchimp) | No server to maintain |
| Hosting | Netlify or Vercel, custom domain, HTTPS | Free or low cost, preview links for every change |
| Images | Astro `<Image>` (AVIF/WebP, responsive) | Property photos stay fast |

*Alternative:* If KC's team must stay in WordPress, rebuild on a block theme with a custom "Auction" post type. It's slower and needs more upkeep, but it's familiar.

---

## 6. Content we need from KC

- [x] **Official address (decided):** 100 SW Albany Ave, Suite 300, Stuart, FL 34994 (Chapman Commercial Real Estate office). See §6a.
- [ ] Official phone and email. Confirm the email domain (`AssociateAuction.com` vs `AssociateAuctions.com`).
- [x] Broker license verified on DBPR. See §6a.
- [ ] Auction business license status (see §6a).
- [ ] Logo source files (SVG) and any brand colors.
- [ ] Sales history: 10+ past sales with address, date, price, photos, days to close.
- [ ] 5+ testimonials (with photo and permission).
- [ ] Video of KC calling bids (even phone footage works for the hero), plus a professional headshot.
- [ ] The current and next auctions with full details.
- [ ] The online bidding platform used and its terms (buyer's premium, deposits).
- [ ] Benefit auction history (organizations, amounts raised).

---

## 6a. Official business details (use everywhere)

The site, AuctionZip, Google Business Profile, Instagram/Facebook, LinkedIn, EstateSale.com, Yelp and every directory listing must show exactly the same details.

```
Associate Auctions
KC Daniel, Auctioneer & Broker Associate
100 SW Albany Ave, Suite 300
Stuart, FL 34994
Phone: TBD (Chapman office main line is 772-631-9168)
Florida Auctioneer AU3602 · Florida Real Estate Broker BK3435557
```

**DBPR license check** (myfloridalicense.com, data as of Nov 18, 2026):

| License | Holder | Type | Status | Expires |
|---|---|---|---|---|
| **AU3602** | Daniel, Karlin C | Auctioneer | Current, Active ✅ | 2027-11-30 |
| **BK3435557** | Daniel, Karlin C | Real Estate Broker (rank: Broker Sales) | Current, Active ✅ | 2027-03-31 |
| BK3070353 | Daniel, Karlin C | Real Estate Broker | **License Authority Voided** ❌ | 2019-03-31 |
| BK2070353 | — | — | **Does not exist** ❌ | — |
| AB3046 | Associate Auctions, LLC | Auction Business | **Null and Void** ❌ | 2017-11-30 |
| CQ1038128 | Associate Auctions LLC | Real Estate Corporation | **License Authority Voided** ❌ | 2020-03-31 |

**Fixes:**
- Replace `AU3602 & BK3070353` (site footer) and `BK2070353` (About page) with **AU3602 & BK3435557**.
- DBPR still lists the old addresses (PO Box 123 Stuart; 608 Colorado Ave). KC should update his DBPR address of record to match.
- **Ask KC to confirm with DBPR or his attorney before launch (we don't give legal advice):**
  - **Auction business license:** Associate Auctions' auction business license (AB3046) is void. Can it advertise and run auctions under that name without a current one?
  - **Brokerage name in ads:** BK3435557 is a broker-associate ("Broker Sales") license under Chapman Commercial Real Estate. Do real estate ads on the site need to name Chapman as the brokerage?

---

## 7. Phases & timeline (~6 weeks)

| Week | Phase | Deliverables |
|---|---|---|
| 1 | **Discovery & fixes now** | Collect content (§6). Update every listing to the §6a details. Fix the license numbers on the current site. Confirm the licensing questions in §6a. Claim the Google Business Profile. Hotfix the 404 menu links on the current site. |
| 2 | **Design** | Moodboard, design tokens, homepage + auction detail + sold page mockups (desktop and mobile). Client review. |
| 3–4 | **Build** | Astro scaffold, components, auction content model, CMS, forms, all pages, redirects, structured data. |
| 5 | **Content & QA** | Load real auctions and results, write local/FAQ copy, accessibility and Lighthouse pass (target 95+), cross-browser checks. |
| 6 | **Launch** | DNS cutover, 301 redirects live, Search Console sitemap submitted, analytics verified, AuctionZip and social profiles linked to the new site. |
| Ongoing | **Grow** | 2 posts per month, an auction recap after every sale, a review request after every closing, monthly SEO report. |

---

## 8. Success metrics (6 months after launch)

- Organic traffic: **24 → 500+/month**
- Ranking top 10 for "real estate auction [Stuart / Treasure Coast / Martin County]" and "estate auction Stuart FL"
- In the Google map listings for "auctioneer Stuart FL"
- **10+ consultation requests/month** and a growing bidder alert list
- Lighthouse 95+ on all four categories

---

## 9. Open decisions

1. Which CMS: Decap (simplest, free) or Sanity (nicer editor)? **Recommendation: Decap.**
2. Hosting account: whose name is it in (KC's or ours)?
3. Do we keep the "Associate Auctions" name and logo, or refresh the logo too?
4. Online bidding: link out (phase 1), or a white-label bidding platform later?
