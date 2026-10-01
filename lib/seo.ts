import { ECOSYSTEM_LINKS } from "@/lib/links";

/**
 * Central SEO and site configuration.
 *
 * Every SEO-related string lives here — metadata, JSON-LD, sitemap, robots
 * and manifest all import from this file. Do not hard-code these values
 * anywhere else.
 */

export const SITE_URL = "https://www.yemcurrency.com";

export const SITE_NAME = "YEM Currency";

/** 74 chars — over the ~60 ideal, so the strongest terms lead. */
export const DEFAULT_TITLE =
  "YEM Chain (Yemchain) — Digital Currency, Blockchain Explorer, Payments & OTC";

/** 153 characters. */
export const DEFAULT_DESCRIPTION =
  "YEM Chain is a blockchain digital currency ecosystem: explore transactions on YEM Scan, pay with YEM Pay, follow the roadmap and trade via the OTC desk.";

export const KEYWORDS = [
  // Primary
  "Yemchain",
  "YEM Chain",
  "YEM currency",
  "Yemchain digital currency",
  "bitcoin",
  "blockchain",
  // Secondary
  "YEM coin",
  "YEM token",
  "YEM cryptocurrency",
  "YEM blockchain network",
  "YEM ecosystem",
  "YEM Scan blockchain explorer",
  "YEM transaction explorer",
  "YEM Pay crypto payments",
  "YEM Foundation roadmap",
  "Digital Chain Center OTC",
  "crypto OTC trading desk",
  "buy YEM coin",
  "blockchain payments platform",
  "cryptocurrency payment gateway",
  "decentralized digital currency",
  "secure blockchain transactions",
  "on-chain verification",
  "digital asset ecosystem",
  "Web3 ecosystem",
  "bitcoin alternative cryptocurrency",
] as const;

const YOUTUBE_ID = "M4GKcR6I4-A";

export const YOUTUBE = {
  id: YOUTUBE_ID,
  url: `https://www.youtube.com/watch?v=${YOUTUBE_ID}`,
  /** Privacy-preserving host: no cookies until the viewer plays. */
  embedUrl: `https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}`,
  /** Canonical embed URL for schema.org VideoObject. */
  schemaEmbedUrl: `https://www.youtube.com/embed/${YOUTUBE_ID}`,
  thumbnail: `https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`,
  title: "YEM Chain — Yemchain digital currency explained",
} as const;

/**
 * Self-hosted copy of the YouTube thumbnail. Same-origin images are far more
 * reliable across WhatsApp, LinkedIn and Facebook scrapers, and the preview
 * survives if the video is ever removed.
 */
/** Site-relative path, for <Image> and anything else served from this origin. */
export const OG_IMAGE_PATH = "/og/yem-og.jpg";

export const OG_IMAGE = {
  /** Absolute — social scrapers reject relative og:image values. */
  url: `${SITE_URL}${OG_IMAGE_PATH}`,
  path: OG_IMAGE_PATH,
  width: 1280,
  height: 720,
  alt: "YEM Chain — Yemchain digital currency and blockchain ecosystem",
  type: "image/jpeg",
} as const;

/**
 * TODO: confirm with owner — real values required for video rich results.
 * Google will not show a video rich result without an accurate uploadDate
 * and duration, so these placeholders must be replaced before launch.
 */
export const VIDEO_UPLOAD_DATE = "2026-01-01"; // PLACEHOLDER
export const VIDEO_DURATION = "PT2M00S"; // PLACEHOLDER (ISO 8601)

/** Official ecosystem URLs already present in the codebase. */
export const SOCIAL_LINKS: string[] = ECOSYSTEM_LINKS.map((link) => link.href);
