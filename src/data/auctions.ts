import type { ImageMetadata } from 'astro';
import fruitExterior from '../assets/fruit-exterior.jpg';
import fruitBedroom from '../assets/fruit-bedroom.jpg';
import angleAerial from '../assets/angle-road-aerial.jpg';
import slwAerial from '../assets/st-lucie-west-aerial.jpg';
import us1Flyer from '../assets/us1-flyer.jpg';
import lbvHomes from '../assets/la-buona-vita-homes.jpg';
import lbvHome from '../assets/la-buona-vita-home.jpg';
import montereyCondo from '../assets/monterey-condo.jpg';
import { flyerAuctions } from './flyer-auctions';

export type Photo = { src: ImageMetadata; alt: string; position?: string };

export type Auction = {
  slug: string;
  status: 'upcoming' | 'completed';
  category: 'Residential estate' | 'Residential' | 'Condo' | 'Development land' | 'Commercial' | 'Vehicles & equipment' | 'Personal property';
  format: string;
  title: string;
  shortTitle: string;
  city: string;
  cardLine: string;
  subtitle: string;
  overview: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  terms: string[];
  documents: { name: string; url: string }[];
  address: string;
  summary: { label: string; value: string }[];
  photos: Photo[];
};

const registrationForm = {
  name: 'Bidder registration form',
  url: '/wp-content/uploads/2021/02/AUCTION-REGISTRATION-20.pdf',
};

const laBuonaVita =
  'La Buona Vita CO-OP is a deed-restricted 55+ community on US 1 in Port St. Lucie: 189 homes on 45 acres around a 6-acre stocked lake, with a clubhouse, pool, pickleball and shuffleboard courts, card rooms and a banquet room.';

const lbvTerms = [
  'Sells to the highest bidder regardless of price',
  'Sells on an “as is” basis',
  '10% buyer’s premium charged',
  '$10,000 cash or cashier’s check required to bid',
  '10% deposit collected on auction day; balance at closing within 10 days of auction',
  'Possession at closing',
  'Bidder information package available upon request',
  'Auction conducted in the community clubhouse, rain or shine',
];

const featuredAuctions: Auction[] = [
  {
    // Slug kept identical to the old WordPress URL so existing rankings carry over.
    slug: 'real-estate-auction-2-1-riverside-condo-at-monterey-yacht-country-club',
    status: 'completed',
    category: 'Condo',
    format: 'Live on-site auction',
    title: '2/1 Riverside Condo at Monterey Yacht & Country Club',
    shortTitle: 'Monterey Yacht & Country Club condo',
    city: 'Stuart',
    cardLine: 'Stuart · 2 bd / 1 ba riverside condo, 55+ community',
    subtitle: 'Monterey Yacht & Country Club, Stuart, Florida · 2-bedroom riverside condo · 55+ community on the St. Lucie River',
    overview:
      'A live, on-site auction for a 2-bedroom, 1-bathroom riverside condo in Monterey Yacht & Country Club, a 55+ community on the St. Lucie River. The 819 sq ft CBS condo has wood floors and a screen-enclosed balcony, with resort-style amenities minutes from historic downtown Stuart.',
    highlights: ['2 bd / 1 ba', '819 sq ft', 'Screened balcony', '55+ community'],
    specs: [
      { label: 'Bedrooms', value: '2' },
      { label: 'Bathrooms', value: '1' },
      { label: 'Living area', value: '819 sq ft' },
      { label: 'Construction', value: 'CBS' },
      { label: 'Floors', value: 'Wood' },
      { label: 'Balcony', value: 'Screen-enclosed' },
      { label: 'Community', value: '55+, on the St. Lucie River' },
      { label: 'Golf', value: 'Executive 9-hole course (P.B. Dye)' },
      { label: 'Amenities', value: 'Two clubhouses, fitness center, pools, bocce, shuffleboard' },
    ],
    terms: [
      'Sells on an “as is” basis',
      '10% buyer’s premium',
      '$10,000 cashier’s check required to bid',
      '10% deposit collected on auction day; balance due within 30 days',
      'Possession with deed',
      'Owner’s title insurance provided by seller; buyer pays all other closing costs',
      'Current-year property taxes prorated to the day of auction',
      'Broker participation and cooperation with pre-qualified agents welcome',
      'Auction held on site, rain or shine',
    ],
    documents: [],
    address: 'Monterey Yacht & Country Club, Stuart, FL',
    summary: [
      { label: 'To qualify', value: '$10,000' },
      { label: 'Buyer’s premium', value: '10%' },
      { label: 'Deposit', value: '10% on auction day' },
      { label: 'Closing', value: 'Within 30 days' },
    ],
    photos: [
      { src: montereyCondo, alt: 'Two-story condo building at Monterey Yacht & Country Club with palm trees, an arrow marking the unit' },
    ],
  },
  {
    slug: 'auction-home-in-lakefront-private-community-in-port-st-lucie',
    status: 'completed',
    category: 'Residential',
    format: 'Absolute auction',
    title: 'Home in Lakefront Private Community',
    shortTitle: '490 La Buona Vita Drive',
    city: 'Port St. Lucie',
    cardLine: 'Port St. Lucie · 2 bd / 2 ba, 55+ lakefront community',
    subtitle: '490 La Buona Vita Drive, Port St. Lucie, Florida · La Buona Vita CO-OP · sold to the highest bidder regardless of price',
    overview: `A 2-bedroom, 2-bathroom manufactured home on a corner lot with central air, sold at public auction to the highest bidder regardless of price. ${laBuonaVita}`,
    highlights: ['2 bd / 2 ba', 'Corner lot', 'Central air', '55+ community'],
    specs: [
      { label: 'Bedrooms', value: '2' },
      { label: 'Bathrooms', value: '2' },
      { label: 'Lot', value: 'Corner lot' },
      { label: 'Cooling', value: 'Central air' },
      { label: 'Community', value: 'La Buona Vita CO-OP (55+)' },
      { label: 'Auction site', value: 'Lakefront clubhouse, 8601 S Federal Hwy' },
    ],
    terms: lbvTerms,
    documents: [],
    address: '490 La Buona Vita Drive, Port St. Lucie, FL 34952',
    summary: [
      { label: 'To qualify', value: '$10,000' },
      { label: 'Buyer’s premium', value: '10%' },
      { label: 'Deposit', value: '10% on auction day' },
      { label: 'Closing', value: 'Within 10 days' },
    ],
    photos: [{ src: lbvHome, alt: 'Single-story manufactured home with white siding on a corner lot in La Buona Vita' }],
  },
  {
    slug: 'auction-2-homes-in-lakefront-private-community-in-port-st-lucie',
    status: 'completed',
    category: 'Residential',
    format: 'Absolute auction',
    title: '2 Homes in Lakefront Private Community',
    shortTitle: '2 homes at La Buona Vita',
    city: 'Port St. Lucie',
    cardLine: 'Port St. Lucie · two 2 bd / 2 ba homes, 55+ community',
    subtitle: '8590 Mary Ann Lane & 541 Natalie Drive, Port St. Lucie, Florida · La Buona Vita CO-OP · sold to the highest bidder regardless of price',
    overview: `Two 2-bedroom, 2-bathroom manufactured homes sold at public auction to the highest bidder regardless of price. Property A, 8590 Mary Ann Lane, sits on a lakefront lot with central air; Property B, 541 Natalie Drive, is on an interior lot with forced air. ${laBuonaVita}`,
    highlights: ['Two homes', '2 bd / 2 ba each', 'Lakefront lot (A)', '55+ community'],
    specs: [
      { label: 'Property A', value: '8590 Mary Ann Lane' },
      { label: 'A: beds / baths', value: '2 / 2' },
      { label: 'A: lot', value: 'Lakefront, 2,133 sq ft' },
      { label: 'Property B', value: '541 Natalie Drive' },
      { label: 'B: beds / baths', value: '2 / 2' },
      { label: 'B: lot', value: 'Interior, 1,572 sq ft' },
      { label: 'Community', value: 'La Buona Vita CO-OP (55+)' },
      { label: 'Auction site', value: 'Lakefront clubhouse, 8601 S Federal Hwy' },
    ],
    terms: lbvTerms,
    documents: [],
    address: '8601 S Federal Hwy, Port St. Lucie, FL 34952',
    summary: [
      { label: 'To qualify', value: '$10,000' },
      { label: 'Buyer’s premium', value: '10%' },
      { label: 'Deposit', value: '10% on auction day' },
      { label: 'Closing', value: 'Within 10 days' },
    ],
    photos: [{ src: lbvHomes, alt: 'White manufactured home with carport and palm trees in La Buona Vita' }],
  },
  {
    slug: '6019-s-us-highway-1',
    status: 'completed',
    category: 'Development land',
    format: 'On-site auction',
    title: '9.74-Acre Development Land',
    shortTitle: '9.74 acres on US-1',
    city: 'Fort Pierce',
    cardLine: 'Fort Pierce · commercial general zoning, US-1 frontage',
    subtitle: '6019 S US Highway 1, Fort Pierce, Florida · St. Lucie County · sold to the highest bidder regardless of price',
    overview:
      'A 9.74-acre vacant parcel with 100 feet of direct frontage on US Highway 1, zoned Commercial General in St. Lucie County. Sold at public auction on site to the highest bidder regardless of price.',
    highlights: ['9.74 acres', '100 ft of US-1 frontage', 'Commercial General zoning', 'Vacant land'],
    specs: [
      { label: 'Total size', value: '9.74 acres (424,274 sq ft)' },
      { label: 'Frontage', value: '100 ft on US Highway 1' },
      { label: 'Zoning', value: 'Commercial General' },
      { label: 'Jurisdiction', value: 'St. Lucie County' },
      { label: 'Parcel ID', value: '3410-702-0057-000-7' },
      { label: 'Status', value: 'Vacant land' },
    ],
    terms: [
      '10% buyer’s premium charged',
      '$100,000 cash or cashier’s check required to qualify to bid',
      '10% deposit collected on auction day; balance at closing within 30 days, time being of the essence',
      'Possession with deed',
      'Owner’s title insurance provided by seller; all other closing costs paid by buyer',
      'Current-year property taxes prorated to the day of auction',
      'Broker participation form and bidder information package available upon request',
    ],
    documents: [registrationForm],
    address: '6019 S US Highway 1, Fort Pierce, FL',
    summary: [
      { label: 'To qualify', value: '$100,000' },
      { label: 'Buyer’s premium', value: '10%' },
      { label: 'Deposit', value: '10% on auction day' },
      { label: 'Closing', value: 'Within 30 days' },
    ],
    photos: [{ src: us1Flyer, alt: 'Auction flyer for 9.74 acres at 6019 S US Highway 1, Fort Pierce, with an aerial of the parcel' }],
  },
  {
    slug: 'angle-road-development-property',
    status: 'completed',
    category: 'Development land',
    format: 'On-site auction',
    title: '56.9-Acre Development Property',
    shortTitle: '56.9 acres on Angle Road',
    city: 'Fort Pierce',
    cardLine: 'Fort Pierce · site planned for 900+ homes',
    subtitle: '0 Angle Road, Fort Pierce, Florida · St. Lucie County · sold individually or in combination',
    overview:
      'A 56.9-acre development property in St. Lucie County, offered individually or in combination, with the highest method of sale final. Previously planned as The Preserve, a mixed townhouse and single-family community with potential for more than 900 residential units. City water, sewer and gas are available.',
    highlights: ['56.9 acres', 'R15 residential land use', '2 miles east of I-95', 'City water, sewer & gas'],
    specs: [
      { label: 'Total size', value: '56.9 acres (2,478,564 sq ft)' },
      { label: 'Zoning', value: 'Industrial vacant land' },
      { label: 'Land use', value: 'Approved for residential R15' },
      { label: 'Jurisdiction', value: 'St. Lucie County' },
      { label: 'Utilities', value: 'City water, sewer, gas available' },
      { label: 'Access', value: '2 miles east of I-95' },
      { label: 'Corridor', value: 'North of Orange Ave' },
      { label: 'Nearby', value: 'Westwood High School' },
      { label: 'Possible uses', value: 'Light industrial, multifamily' },
    ],
    terms: [
      'Sells on an “as is” basis',
      '10% buyer’s premium charged',
      '$100,000 cash or cashier’s check required to qualify to bid',
      '10% deposit collected on auction day; balance at closing within 30 days, time being of the essence',
      'Possession with deed',
      'Owner’s title insurance provided by seller; all other closing costs paid by buyer',
      'Current-year property taxes prorated to the day of auction',
      'Broker participation offered to qualified agents',
      'Auction conducted on site, rain or shine',
    ],
    documents: [
      { name: 'Bidder information package', url: '/wp-content/uploads/2021/02/Fiery-Color-003-3.pdf' },
      { name: 'Broker participation form', url: '/wp-content/uploads/2021/02/Up-to-2-broker-participation-57-Acres-.pdf' },
      registrationForm,
    ],
    address: '0 Angle Road, Fort Pierce, FL 34947',
    summary: [
      { label: 'To qualify', value: '$100,000' },
      { label: 'Buyer’s premium', value: '10%' },
      { label: 'Deposit', value: '10% on auction day' },
      { label: 'Closing', value: 'Within 30 days' },
    ],
    photos: [
      {
        src: angleAerial,
        alt: 'Aerial view of the 56.9-acre Angle Road site in Fort Pierce, outlined as parcels A and B, with Westwood High School alongside',
      },
    ],
  },
  {
    slug: 'st-lucie-west-commercial-lots',
    status: 'completed',
    category: 'Commercial',
    format: 'On-site auction',
    title: 'St. Lucie West Commercial Lots',
    shortTitle: 'St. Lucie West retail pads',
    city: 'Port St. Lucie',
    cardLine: 'Port St. Lucie · two lots with I-95 frontage',
    subtitle: '1900 SW Fountainview Blvd, Port St. Lucie, Florida · two retail pad-ready lots',
    overview:
      'Two retail, pad-ready commercial building lots in the St. Lucie West community, adjacent to the Residence Inn (Marriott) and Carrabba’s, with I-95 frontage and lake views. The sites can be combined, and infrastructure and more than 80 dedicated parking spaces are already in place.',
    highlights: ['Two 0.31-acre lots', 'I-95 frontage', '80,000+ vehicles daily', 'Sites can be combined'],
    specs: [
      { label: 'Lots', value: '2 × 0.31 acres' },
      { label: 'Zoning', value: 'Planned Urban Development (PUD)' },
      { label: 'Status', value: 'Pad ready, infrastructure in place' },
      { label: 'Exposure', value: '80,000+ vehicles daily' },
      { label: 'Access', value: 'St. Lucie West I-95 interchange' },
      { label: 'Parking', value: '80+ dedicated spaces' },
      { label: 'Neighbors', value: 'Residence Inn, Carrabba’s' },
      { label: 'Views', value: 'Lake' },
      { label: 'Combine', value: 'Yes' },
    ],
    terms: [
      'Sells on an “as is” basis',
      '10% buyer’s premium charged',
      '$50,000 cash or cashier’s check required to qualify to bid',
      '10% deposit collected on auction day; balance at closing within 30 days, time being of the essence',
      'Possession with deed',
      'Owner’s title insurance provided by seller; all other closing costs paid by buyer',
      'Current-year property taxes prorated to the day of auction',
    ],
    documents: [registrationForm, { name: 'Original auction flyer', url: '/flyers/st-lucie-west-commercial-lots.pdf' }],
    address: '1900 SW Fountainview Blvd, Port St. Lucie, FL',
    summary: [
      { label: 'To qualify', value: '$50,000' },
      { label: 'Buyer’s premium', value: '10%' },
      { label: 'Deposit', value: '10% on auction day' },
      { label: 'Closing', value: 'Within 30 days' },
    ],
    photos: [
      {
        src: slwAerial,
        alt: 'Aerial view of two retail pad lots at the St. Lucie West entrance, beside the Residence Inn and a lake',
      },
    ],
  },
  {
    slug: '2392-se-fruit-ave',
    status: 'completed',
    category: 'Residential estate',
    format: 'Absolute auction',
    title: '2392 SE Fruit Ave',
    shortTitle: '2392 SE Fruit Ave',
    city: 'Port St. Lucie',
    cardLine: 'Port St. Lucie · 3 bd / 2 ba, to the highest bidder',
    subtitle: 'Port St. Lucie, Florida · 3-bedroom family home · offered to the highest bidder regardless of price',
    overview:
      'The family hired Associate Auctions and KC Daniel to offer this home to the general public at auction, selling to the highest bidder regardless of price. A concrete-block stucco home with a fenced yard east of US Highway 1, close to Publix, Walgreens and restaurants, with no HOA.',
    highlights: ['3 bd / 2 ba', '1,649 sq ft', 'Built 1991', 'No HOA'],
    specs: [
      { label: 'Bedrooms', value: '3' },
      { label: 'Bathrooms', value: '2' },
      { label: 'Living area', value: '1,649 sq ft' },
      { label: 'Year built', value: '1991' },
      { label: 'Construction', value: 'CB stucco' },
      { label: 'Yard', value: 'Fenced' },
      { label: 'Location', value: 'East of US Hwy 1' },
      { label: 'Nearby', value: 'Publix, Walgreens, restaurants' },
      { label: 'HOA', value: 'None' },
    ],
    terms: [
      'Sells on an “as is” basis',
      '10% buyer’s premium charged on all sales',
      '$25,000 cash or cashier’s check required to bid',
      '10% deposit collected on auction day; balance at closing within 30 days',
      'Possession with deed',
      'Owner’s title insurance provided by seller; all other closing costs paid by buyer',
      'Current-year property taxes paid by buyer',
      'Inspection by appointment with KC Daniel',
      'Broker participation offered to qualified agents',
    ],
    documents: [
      { name: 'Bidder information package', url: '/wp-content/uploads/2021/03/BIP-Fruit-Ave.pdf' },
      { name: 'Broker participation form', url: '/wp-content/uploads/2021/03/Up-to-2-broker-participation-2392-SE-Fruit-Ave.pdf' },
      registrationForm,
    ],
    address: '2392 SE Fruit Ave, Port St. Lucie, FL 34952',
    summary: [
      { label: 'To qualify', value: '$25,000' },
      { label: 'Buyer’s premium', value: '10%' },
      { label: 'Deposit', value: '10% on auction day' },
      { label: 'Closing', value: 'Within 30 days' },
    ],
    photos: [
      { src: fruitExterior, alt: 'Front of 2392 SE Fruit Ave: single-story stucco home with palm trees and a wide lawn' },
      { src: fruitBedroom, alt: 'Primary bedroom with tray ceiling and sliding glass doors' },
    ],
  },
];

export const auctions: Auction[] = [...featuredAuctions, ...flyerAuctions];

/** Smaller past auctions with no detail page or photos (yet). */
export const otherPastAuctions = [
  { category: 'Vehicle', title: '1953 GMC 9300 pickup', place: 'Stuart · online + live virtual 3-D auction', icon: 'truck' },
  { category: 'Vehicle', title: '’07 Harley-Davidson Softail', place: 'Stuart', icon: 'bike' },
] as const;

export const upcomingAuctions = auctions.filter((a) => a.status === 'upcoming');
export const pastAuctions = auctions.filter((a) => a.status === 'completed');

export const mapUrl = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
