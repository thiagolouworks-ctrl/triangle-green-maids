/*
  Image sources — the same files placed in the Figma frames (img/<slug>).
  Originals live in ../../assets/images; Astro generates responsive AVIF/WebP at build time.
*/
import logoWhite from '../../assets/images/brand/logo-white.png';
import brandTriangle from '../../assets/images/brand/fig.png';
import hero from '../../assets/images/hero-cleaner.jpg';
import partner1 from '../../assets/images/partners/01KDQSCZ3ZM705EW20HQXN3F93.png';
import partner2 from '../../assets/images/partners/01KDQSDBCGXWPNP4M089K5VXH6.png';
import partner3 from '../../assets/images/partners/01KDQSEC5ZPK36GG6DF8WQSFNX.png';
import partner4 from '../../assets/images/partners/01KDQSK52Z4W6JGZVH8MKQZHA3.png';
import serviceOverview from '../../assets/images/v5/service-overview.jpg';
import serviceHouse from '../../assets/images/v5/service-house-apartments.jpg';
import serviceDeep from '../../assets/images/v5/service-deep-cleaning.jpg';
import serviceKeeping from '../../assets/images/v5/service-post-construction.jpg';
import serviceMove from '../../assets/images/v5/service-move-in-out.jpg';
// Raleigh residential street (raleigh.png, provided by the client 2026-10-20)
import ownerPlace from '../../assets/images/owner-raleigh.jpg';
import ownerPortrait from '../../assets/images/owner-darrick-seconi.png';
import ctaBanner from '../../assets/images/v5/cta-curtain.jpg';

export const images = {
  logoWhite,
  brandTriangle,
  hero,
  partners: [partner1, partner2, partner3, partner4],
  services: {
    overview: serviceOverview,
    house: serviceHouse,
    deep: serviceDeep,
    keeping: serviceKeeping,
    move: serviceMove,
  },
  ownerPlace,
  ownerPortrait,
  ctaBanner,
};
