import type { MetadataRoute } from "next";
import { DEFAULT_DESCRIPTION, SITE_NAME } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — YEM Chain`,
    short_name: "YEM",
    description: DEFAULT_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#f5f1e3",
    theme_color: "#14543f",
    icons: [
      // TODO: confirm with owner — add raster 192x192 and 512x512 PNG icons.
      // Only a vector icon exists in the codebase; Android install prompts
      // prefer PNGs at those sizes.
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
