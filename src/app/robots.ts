import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export const dynamic = "force-static";

/** robots.txt — allow everything, point crawlers at the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
