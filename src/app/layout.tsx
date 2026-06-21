import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";
import SmoothScroll from "@/components/SmoothScroll";

// Display: Barlow Condensed — athletic, condensed, poster-impact headlines.
const barlowCondensed = Barlow_Condensed({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

// Body/UI: Barlow — the matching humanist sans, clean and fast.
const barlow = Barlow({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

// Labels / stats: JetBrains Mono — telemetry/precision feel ("racing is science").
const jetbrains = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Arshia Akhtar",
    "Pakistani woman racing driver",
    "first Pakistani FIA license",
    "Box Motorsports",
    "Formula 3 driver",
    "Formula 4 driver",
    "women in motorsport",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    // Drop a 1200x630 hero into /public/og.jpg before launch.
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

// Schema.org structured data so search engines understand who she is.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: ["Racing Driver", "Clinical Researcher", "Team Owner"],
  nationality: "Pakistani",
  description: site.description,
  sameAs: [site.social.instagram, site.social.linkedin, site.social.tiktok],
  worksFor: {
    "@type": "Organization",
    name: "Box Motorsports",
    url: "https://www.boxmotorsportspro.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${barlow.variable} ${jetbrains.variable}`}
    >
      <body className="bg-carbon text-bone antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
