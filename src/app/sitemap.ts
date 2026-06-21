import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export const dynamic = "force-static";

/** sitemap.xml — single-page site (anchors live within /). */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
