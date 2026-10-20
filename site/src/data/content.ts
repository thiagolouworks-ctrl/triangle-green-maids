/*
  Frozen copy — every string comes verbatim from ../../../copy.md.
  Do not edit wording, capitalisation or punctuation here; run `npm run audit:copy` after any change.
  Prototype (2026-10-20): links must NOT lead to the pages of the current live site, so every
  page link renders as "#". The real path stays next to each item (and in copy.md);
  set LINK_TO_LIVE_SITE = true at launch to restore them.
*/
export const SITE_URL = 'https://trianglegreenmaids.com';
const LINK_TO_LIVE_SITE = false;
const url = (path: string) => (LINK_TO_LIVE_SITE ? `${SITE_URL}${path}` : '#');

export const meta = {
  title: 'Home - Triangle Green Maids',
  description:
    "We'll leave your home spotless and clean. No harmful chemicals and no toxins. Just a thoughtfully clean home from a team trusted by thousands of families!",
};

export const contact = {
  email: { label: 'EMAIL US NOW!', footerLabel: 'Email Us Now!', href: 'mailto:info@trianglegreenmaids.com' },
  phone: { label: '(919) 809-9654', href: 'tel:9198099654' },
  address: '1220 SE Mynard Rd, Suite 201. Cary, NC 27511',
};

export const topBar = {
  message: "We'll leave your home spotless and clean. No harmful chemicals and no toxins.",
};

export const brand = {
  logoAlt: 'Triangle Green Cleaning Logo',
  footerLogoAlt: 'Triangle Green Maids',
  href: url('/'),
};

export type NavLink = { label: string; href: string; children?: { label: string; href: string }[] };

export const nav: NavLink[] = [
  {
    label: 'SERVICES',
    href: url('/services'),
    children: [
      { label: 'House Cleaning & Apartments', href: url('/house-cleaning-apartments') },
      { label: 'Deep Cleaning', href: url('/deep-cleaning') },
      { label: 'House Keeping, Fill In & Post Construction', href: url('/house-keeping-fill-in-post-construction') },
      { label: 'Move In/Out Cleaning', href: url('/move-inout-cleaning') },
      { label: 'TRIANGLE GREEN CLEANING CHECKLIST', href: url('/triangle-green-cleaning-checklist') },
    ],
  },
  // Top-level on the published header too (between SERVICES and PRODUCTS).
  { label: 'TRIANGLE GREEN CLEANING CHECKLIST', href: url('/triangle-green-cleaning-checklist') },
  {
    label: 'PRODUCTS',
    href: url('/products'),
    children: [
      { label: 'Peroxide Cleaner', href: url('/peroxide-cleaner') },
      { label: 'Window & Glass Cleaner', href: url('/window-glass-cleaner') },
      { label: 'Multi-Surface Cleaner', href: url('/multi-surface-cleaner') },
      { label: 'Floor Cleaner', href: url('/floor-cleaner') },
    ],
  },
  { label: 'FAQ', href: url('/faq') },
  { label: 'OFFERS', href: url('/offers') },
  { label: 'CONTACT US', href: url('/contact-us') },
];

export const cta = {
  book: { label: 'BOOK ONLINE NOW', href: url('/') },
  quote: { label: 'GET A QUICK QUOTE', href: url('/quote') },
};

export const hero = {
  // H1 is rendered in two lines in the design; the string is unchanged.
  titleLead: 'Keeping the Triangle',
  titleAccent: 'Green',
  titleTail: 'and Clean',
  lead: "We'll leave your home spotless and clean.",
  tail: 'No harmful chemicals and no toxins.',
};

export const trust = {
  text: 'Just a thoroughly clean home from a team trusted by hundreds of families, throughout the Triangle.',
  partnerAlt: 'Partner Logo',
};

export const services = {
  // Section title on the original home: "We'll leave your home spotless and clean. No harmful chemicals and no toxins."
  titleLead: "We'll leave your ",
  titleAccent: 'home spotless and clean',
  titleTail: '.',
  titleSecond: 'No harmful chemicals and no toxins.',
  cards: [
    { key: 'overview', label: 'SERVICES', href: url('/services') },
    { key: 'house', label: 'House Cleaning & Apartments', href: url('/house-cleaning-apartments') },
    { key: 'deep', label: 'Deep Cleaning', href: url('/deep-cleaning') },
    { key: 'keeping', label: 'House Keeping, Fill In & Post Construction', href: url('/house-keeping-fill-in-post-construction') },
    { key: 'move', label: 'Move In/Out Cleaning', href: url('/move-inout-cleaning') },
  ],
} as const;

export const owner = {
  heading: 'Triangle Green Maids of Raleigh',
  name: 'Darrick Seconi',
  role: 'OWNER',
  bio: [
    'Triangle Green Maids of Raleigh is locally owned and operated by Darrick Seconi. Darrick is an entrepreneur and a strong advocate of a well staffed and trained team. Darrick has put his operational experience to great use and today he continues to expand the value of the services that he provides to Triangle Green Maids customers throughout the Raleigh area.',
    'At Triangle Green Maids, Darrick and his team take great pride in the value that they deliver for their clients and would welcome the opportunity to speak and discuss how they may be of service for you and your family.',
  ],
  photoAlt: 'Darrick Seconi - Owner',
};

export const testimonials = {
  heading: 'What Our Customers Say',
  subheading: 'Read testimonials from our satisfied clients',
  items: [
    {
      initial: 'D',
      name: 'Deborah Segal',
      time: '3 months ago',
      quote: '"Our house was cleaned very well. I was very pleased and the new buyers were also very happy with everything. The cre..."',
    },
    {
      initial: 'L',
      name: 'Larry Holding',
      time: '4 months ago',
      quote: '"We appreciate the service and enjoyed the prompt response. Our wood floors received a good cleaning and we are.."',
    },
    {
      initial: 'A',
      name: 'Angela Kilpatrick',
      time: '4 months ago',
      quote: '"So nice to come home to a clean house without all the chemical smells that make you think it’s clean, but it probably..."',
    },
  ],
};

export const serviceArea = {
  // "Where We Clean: Raleigh, Durham, Cary, Chapel Hill & More" — split only to colour the cities.
  headingLead: 'Where We Clean: ',
  headingCities: 'Raleigh, Durham, Cary, Chapel Hill',
  headingTail: ' & More',
  text: 'Serving Raleigh, Durham, Cary, Apex, Holly Springs, Fuquay Varina, Chapel Hill, and the entire Triangle, our locally owned team delivers reliable, eco-friendly cleaning exactly where you need it.',
  // Same embed as the published home (place: Triangle Green Maids).
  mapSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30789.0195663622!2d-78.78369332417141!3d35.79264086495278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac8cdd19e66ac3%3A0x7e438a6683a8c35e!2sTriangle%20Green%20Maids!5e0!3m2!1sen!2sus!4v1768555696044!5m2!1sen!2sus',
  mapTitle: 'Triangle Green Maids',
};

export const faq = {
  heading: 'Frequently Asked Questions',
  // Literal subset of the official /faq page (design.md §10).
  items: [
    {
      q: 'Why Trust Triangle Green Maids With My Home?',
      a: 'All of our employees are screened for criminal activity. Most have been with us for years and have cleaned thousands of homes without incident. We are also fully insured, including liability, workers’ compensation, and theft coverage.',
    },
    {
      q: 'What is Green Cleaning? How is it Any Different From Regular Cleaning?',
      a: 'Green cleaning involves more than just non-toxic, no-odor products. We start in the rooms furthest from the entrance and work our way out, cleaning from top to bottom so dust and debris are fully picked up. We also make sure not to cross-contaminate between bathrooms, kitchens, and the rest of the house.',
    },
    {
      q: 'Do I Need to Have Cleaning Products at Home?',
      a: 'You don’t need to provide any cleaning supplies—we bring everything with us. If you have specific products you’d like us to use, just tell the team where they’re kept and how you’d like them used. We’ll handle the rest.',
    },
    {
      q: 'How Can I Book a Cleaning?',
      a: 'You can book a cleaning by phone, by filling out an online request and responding to the estimate via email, or by clicking the “Book Online” button on our website.',
    },
    {
      q: 'Do I Have to Be Home for Cleaning?',
      a: 'It is entirely up to you. Some customers prefer to be home, others never are—even on the first day—and both options work perfectly fine.',
    },
    {
      q: 'How Long Will the Cleaning Take?',
      a: 'The duration depends on the size of your home. An initial cleaning typically takes 3–5 hours for a team of two, while regular service usually takes 1.5–3.5 hours for a team of two.',
    },
  ],
};

export const finalCta = {
  text: 'We have your cleaning needs covered no matter where you are in the Triangle area.',
};

export const footer = {
  quickMenuTitle: 'Quick Menu',
  quickMenu: [
    { label: 'CONTACT US', href: url('/contact-us') },
    { label: 'FAQ', href: url('/faq') },
    { label: 'OFFERS', href: url('/offers') },
    { label: 'PRODUCTS', href: url('/products') },
    { label: 'QUOTE', href: url('/quote') },
    { label: 'SERVICES', href: url('/services') },
    { label: 'TRIANGLE GREEN CLEANING CHECKLIST', href: url('/triangle-green-cleaning-checklist') },
  ],
  contactTitle: 'Contact Us',
  // aria-labels are the ones used on the published site; destinations are still "#".
  social: [
    { key: 'instagram', label: 'Instagram', href: '#' },
    { key: 'linkedin', label: 'LinkedIn', href: '#' },
    { key: 'facebook', label: 'Facebook', href: '#' },
  ],
  copyright: '©2025 All Rights Reserved.',
};
