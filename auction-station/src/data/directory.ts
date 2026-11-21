export const specialties = [
  'Real estate',
  'Benefit & charity',
  'Estates & personal property',
  'Commercial & equipment',
  'Vehicles',
  'Bid calling & ringman',
] as const;
export type Specialty = (typeof specialties)[number];

export interface Auctioneer {
  slug: string;
  name: string;
  business: string;
  city: string;
  county: string;
  state: string;
  licenses: { label: string; number: string }[];
  specialties: Specialty[];
  backup: boolean;
  phone: string;
  phoneHref: string;
  email: string;
  website?: string;
  serviceArea: string;
  bio: string;
  honors: string[];
  verified: string;
}

export const auctioneers: Auctioneer[] = [
  {
    slug: 'kc-daniel',
    name: 'KC Daniel',
    business: 'Associate Auctions',
    city: 'Stuart',
    county: 'Martin',
    state: 'FL',
    licenses: [
      { label: 'Florida Auctioneer', number: 'AU3602' },
      { label: 'Florida Real Estate Broker Associate', number: 'BK3435557' },
    ],
    specialties: ['Real estate', 'Benefit & charity', 'Estates & personal property', 'Commercial & equipment', 'Vehicles', 'Bid calling & ringman'],
    backup: true,
    phone: '(772) 732-0289',
    phoneHref: 'tel:+17727320289',
    email: 'kc@associateauctions.com',
    website: 'https://associate-auctions.vercel.app/',
    serviceArea: 'Treasure Coast and South Florida; travels statewide',
    bio: 'KC Daniel runs Associate Auctions in Stuart and has called real estate, estate, commercial and benefit auctions across the Treasure Coast. Past sales include Port St. Lucie lakefront homes, a Monterey Yacht & Country Club condo, 56.9 acres of development land in Fort Pierce and commercial lots in St. Lucie West.',
    honors: ['Florida Bid Calling Champion, Florida Auctioneers Association (2010)'],
    verified: 'November 2026',
  },
];

export const counties = [...new Set(auctioneers.map((a) => a.county))].sort();
