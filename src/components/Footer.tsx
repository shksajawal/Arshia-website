import { site } from "@/lib/content";
import {
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
} from "@/components/icons/SocialIcons";

const socials = [
  { label: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
  { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedInIcon },
  { label: "TikTok", href: site.social.tiktok, Icon: TikTokIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div>
          <a href="#top" className="font-display text-3xl">
            Arshia<span className="text-accent">.</span>
          </a>
          <p className="mt-2 max-w-xs text-sm text-muted">{site.tagline}</p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-bone hover:text-bone"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
          <a
            href="#connect"
            className="ml-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            Work with me
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-line pt-6 text-xs text-muted">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
