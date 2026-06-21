import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — produces a fully static site in /out for Netlify.
  // No Node server required; fastest possible hosting + global CDN.
  output: "export",

  // Static export can't use the on-demand Image Optimization server,
  // so images are served as-is. We still get next/image's lazy-loading,
  // sizing and layout-shift prevention. (Swap to Netlify Image CDN later
  // if we want on-the-fly optimization.)
  images: {
    unoptimized: true,
  },

  // Clean URLs as directories (/story/ instead of /story.html) — plays
  // nicely with Netlify's static serving.
  trailingSlash: true,
};

export default nextConfig;
