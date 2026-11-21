export interface Guide {
  slug: string;
  title: string;
  summary: string;
  audience: 'Buyers' | 'Sellers' | 'Organizers' | 'Everyone';
  sections: { heading: string; body: string[] }[];
}

export const guides: Guide[] = [
  {
    slug: 'auction-types-explained',
    title: 'Absolute, reserve and minimum-bid auctions explained',
    summary: 'The three ways an auction can be set up, and what each one means for buyers and sellers.',
    audience: 'Everyone',
    sections: [
      {
        heading: 'Absolute auction',
        body: [
          'The item sells to the highest bidder, whatever the price. There is no minimum and the seller cannot reject the top bid.',
          'Absolute auctions draw the biggest crowds because every bidder knows the item will sell today.',
        ],
      },
      {
        heading: 'Reserve auction',
        body: [
          'The seller keeps the right to accept or reject the high bid, usually because there is a confidential minimum price (the reserve).',
          'If bidding does not reach the reserve, the item may not sell. Bidders should ask before the auction whether a reserve applies.',
        ],
      },
      {
        heading: 'Minimum-bid auction',
        body: [
          'The opening bid is published in advance. Once someone bids at or above that number, the item sells to the highest bidder.',
          'It is a middle ground: the seller is protected below a known price, and bidders know exactly where the floor is.',
        ],
      },
      {
        heading: 'Which one should a seller choose?',
        body: [
          'It depends on the property, the market and how quickly you need to sell. A good auctioneer will walk you through the trade-offs before you sign anything.',
        ],
      },
    ],
  },
  {
    slug: 'buyers-premium',
    title: 'What is a buyer’s premium?',
    summary: 'The fee added to the winning bid at most auctions, and how to factor it into what you bid.',
    audience: 'Buyers',
    sections: [
      {
        heading: 'The short version',
        body: [
          'A buyer’s premium is a percentage added to the winning bid. If you win at $100,000 with a 10% premium, the contract price is $110,000.',
          'The percentage and how it is applied are set out in the auction terms. Read them before you register.',
        ],
      },
      {
        heading: 'Bid with the premium in mind',
        body: [
          'Work out your top all-in number first, then back the premium out to get your maximum bid. That keeps you from overpaying in the heat of the moment.',
        ],
      },
      {
        heading: 'Other costs to check',
        body: [
          'Real estate auctions often require a deposit at signing, a set closing date and a cash or pre-approved purchase. Personal property auctions usually require removal by a deadline. All of this is in the terms.',
        ],
      },
    ],
  },
  {
    slug: 'hiring-an-auctioneer-in-florida',
    title: 'How to hire an auctioneer in Florida',
    summary: 'Licensing, questions to ask and what a good auction agreement covers.',
    audience: 'Sellers',
    sections: [
      {
        heading: 'Check the license',
        body: [
          'Florida licenses auctioneers (license numbers start with AU) and auction businesses (AB) through the Department of Business and Professional Regulation. You can look up any license for free on the DBPR website.',
          'Real estate auctions in Florida also involve a licensed real estate broker or sales associate. Ask who that is.',
        ],
      },
      {
        heading: 'Questions to ask',
        body: [
          'What have you sold that is similar to my property?',
          'Which auction type do you recommend, and why?',
          'What does marketing include, and who pays for it?',
          'How is your fee structured (commission, buyer’s premium or both)?',
          'Who will be on site on auction day, and who is your backup if you cannot make it?',
        ],
      },
      {
        heading: 'Get it in writing',
        body: [
          'A written auction agreement should cover the auction type, date, marketing budget, fees, who holds deposits and what happens if the property does not sell.',
        ],
      },
    ],
  },
  {
    slug: 'planning-a-benefit-auction',
    title: 'Planning a benefit auction that raises more',
    summary: 'Practical tips for charity galas and fundraisers from the auctioneer’s side of the podium.',
    audience: 'Organizers',
    sections: [
      {
        heading: 'Fewer, better items',
        body: [
          'A short live auction of strong items beats a long one. Most galas do best with a handful of live lots and the rest in a silent auction.',
        ],
      },
      {
        heading: 'Plan the paddle raise',
        body: [
          'A fund-a-need or paddle raise, where guests give at set levels for a single cause, is often the biggest money moment of the night. Give it a clear story and a prime slot in the program.',
        ],
      },
      {
        heading: 'Book a professional, and a backup',
        body: [
          'A trained benefit auctioneer keeps the energy up and the bids moving. Because the date is fixed months ahead, line up a backup auctioneer too, so illness or travel delays never leave you without a bid caller.',
        ],
      },
    ],
  },
  {
    slug: 'what-is-a-backup-auctioneer',
    title: 'What is a backup auctioneer?',
    summary: 'Why auction companies and event planners keep a second licensed auctioneer on call.',
    audience: 'Everyone',
    sections: [
      {
        heading: 'Insurance for auction day',
        body: [
          'An auction date is set weeks or months ahead and marketed to bidders. If the auctioneer is sick, double-booked or stuck in traffic, the sale still has to happen. A backup auctioneer is a licensed professional who has the details and is ready to step in.',
        ],
      },
      {
        heading: 'More than a stand-in',
        body: [
          'Backups also work alongside the lead auctioneer: as a second bid caller for long sales, as a ringman spotting bids in the crowd, or to run a second ring at large estate and equipment auctions.',
        ],
      },
      {
        heading: 'How to set one up',
        body: [
          'Share the terms, catalog and run of show ahead of time, agree a day rate and confirm license details. Auction Station can match you with a backup; see the Backup Auctioneer page.',
        ],
      },
    ],
  },
];
