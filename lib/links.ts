export type EcosystemLink = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  href: string;
  domain: string;
  /**
   * Placeholder artwork. When your real photos are ready, drop them into
   * /public/images/ and change only this path (e.g. "/images/yemchain.jpg").
   * Recommended size: 1200 x 750 px (16:10).
   */
  image: string;
  serial: string;
  denomination: string;
};

export const ECOSYSTEM_LINKS: EcosystemLink[] = [
  {
    id: "yemchain",
    title: "YEM Chain",
    tagline: "Blockchain",
    description:
      "The core blockchain network powering the entire YEM ecosystem — secure, fast and built for real-world value transfer.",
    href: "https://yemchain.com",
    domain: "yemchain.com",
    image: "/images/img-1.png",
    serial: "A 00000001 A",
    denomination: "01",
  },
  {
    id: "yemscan",
    title: "YEM Scan",
    tagline: "Blockchain Explorer",
    description:
      "Track every block, transaction, wallet and token in real time with the official YEM chain explorer.",
    href: "https://yemscan.com",
    domain: "yemscan.com",
    image: "/images/img-2.png",
    serial: "B 00000002 B",
    denomination: "02",
  },
  {
    id: "foundation",
    title: "YEM Foundation",
    tagline: "Roadmap & Vision",
    description:
      "The foundation behind the project — governance, milestones and the published roadmap for what comes next.",
    href: "https://yem.foundation",
    domain: "yem.foundation",
    image: "/images/img-3.png",
    serial: "C 00000003 C",
    denomination: "03",
  },
  {
    id: "yempay",
    title: "YEM Pay",
    tagline: "Payments",
    description:
      "Send, receive and settle payments in seconds. Merchant-ready checkout for everyday spending.",
    href: "https://yempay.com",
    domain: "yempay.com",
    image: "/images/img-4.png",
    serial: "D 00000004 D",
    denomination: "04",
  },
  {
    id: "digitalchain",
    title: "Digital Chain Center",
    tagline: "OTC Transactions",
    description:
      "Over-the-counter desk for large-volume trades, handled directly with settlement you can verify on chain.",
    href: "https://digitalchain.center",
    domain: "digitalchain.center",
    image: "/images/img-5.png",
    serial: "E 00000005 E",
    denomination: "05",
  },
];

export const POWERED_BY = {
  label: "Deswits",
  href: "https://deswits.com",
};

/**
 * Promotional offer shown in the highlighted band on the landing page.
 * `code` is published verbatim — change it here and nowhere else.
 */
export const PROMO = {
  eyebrow: "Special Offer",
  headline: "Join Deswits with pro code",
  code: "Deswts25",
  description:
    "Use the code below when you sign up at Deswits to unlock pro access.",
  cta: "Join Deswits",
  href: POWERED_BY.href,
};
