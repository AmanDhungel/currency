import type { MetadataRoute } from "next";
import { SITE_URL, YOUTUBE } from "@/lib/seo";

/**
 * Only same-origin routes belong here. The five ecosystem destinations are
 * separate sites we do not own, so they are linked but not listed.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      videos: [
        {
          title: YOUTUBE.title,
          thumbnail_loc: YOUTUBE.thumbnail,
          description:
            "An introduction to the YEM Chain blockchain and the YEM coin that moves across it.",
          content_loc: YOUTUBE.url,
          player_loc: YOUTUBE.schemaEmbedUrl,
        },
      ],
    },
  ];
}
