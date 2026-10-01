import { FAQ_ITEMS } from "@/lib/faq";
import { ECOSYSTEM_LINKS } from "@/lib/links";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
  VIDEO_DURATION,
  VIDEO_UPLOAD_DATE,
  YOUTUBE,
} from "@/lib/seo";

/**
 * Server-rendered schema.org graph for the homepage.
 *
 * One <script> holding a single @graph with stable @ids, so each node can
 * reference the others instead of repeating itself.
 */

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const WEBPAGE_ID = `${SITE_URL}/#webpage`;
const VIDEO_ID = `${SITE_URL}/#video`;
const IMAGE_ID = `${SITE_URL}/#primaryimage`;

const graph = [
  {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "YEM Chain",
    alternateName: ["Yemchain", "YEM Currency", "YEM"],
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/icon.svg`,
    },
    sameAs: SOCIAL_LINKS,
  },
  {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "en",
    publisher: { "@id": ORGANIZATION_ID },
  },
  {
    "@type": "ImageObject",
    "@id": IMAGE_ID,
    url: OG_IMAGE.url,
    width: OG_IMAGE.width,
    height: OG_IMAGE.height,
    caption: OG_IMAGE.alt,
  },
  {
    "@type": "WebPage",
    "@id": WEBPAGE_ID,
    name: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    isPartOf: { "@id": WEBSITE_ID },
    primaryImageOfPage: { "@id": IMAGE_ID },
    about: { "@id": ORGANIZATION_ID },
    inLanguage: "en",
  },
  {
    "@type": "VideoObject",
    "@id": VIDEO_ID,
    name: YOUTUBE.title,
    description:
      "An introduction to the YEM Chain blockchain and the YEM coin that moves across it, including how transfers are verified on YEM Scan and spent with YEM Pay.",
    thumbnailUrl: [YOUTUBE.thumbnail],
    // TODO: confirm with owner — placeholders; video rich results require
    // an accurate uploadDate and duration.
    uploadDate: VIDEO_UPLOAD_DATE,
    duration: VIDEO_DURATION,
    contentUrl: YOUTUBE.url,
    embedUrl: YOUTUBE.schemaEmbedUrl,
    publisher: { "@id": ORGANIZATION_ID },
  },
  {
    "@type": "ItemList",
    "@id": `${SITE_URL}/#destinations`,
    name: "YEM ecosystem destinations",
    itemListElement: ECOSYSTEM_LINKS.map((link, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: link.title,
      description: link.tagline,
      url: link.href,
    })),
  },
  {
    // Rendered from the same FAQ_ITEMS array as the visible accordion, so
    // the schema always matches the text on the page.
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function JsonLd() {
  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  })
    // Prevent the payload from closing the surrounding <script> element.
    .replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
