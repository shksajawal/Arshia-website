/**
 * SINGLE SOURCE OF TRUTH FOR ALL SITE COPY & DATA.
 * Edit here — every section reads from this file. No copy lives in components.
 *
 * Sources: Arab News, RACER, Dive Bomb, The Podium Finish, Box Motorsports,
 * + her Instagram bio (@arshia.z.akhtar, ~31K followers).
 * NOTE: racing-series details vary across sources (Formula E vs Formula
 * Regional Americas) — CONFIRM with Arshia before launch. Items marked TODO too.
 */

export const site = {
  name: "Arshia Akhtar",
  // Update once the Netlify domain / custom domain is live.
  url: "https://arshiaakhtar.com",
  tagline: "First Pakistani woman with an FIA racing license.",
  description:
    "Arshia Akhtar — the first Pakistani woman to hold an FIA racing license. Race car driver, cancer researcher, and owner of Box Motorsports. Same discipline, three arenas.",
  // Replace with real handles.
  social: {
    instagram: "https://www.instagram.com/arshia.z.akhtar/",
    linkedin: "https://www.linkedin.com/in/arshia-akhtar-78143a365/",
    tiktok: "https://www.tiktok.com/@arshia.z.akhtar",
  },
  email: "hello@arshiaakhtar.com", // TODO: confirm real inbox
};

/**
 * HERO LINE ALTERNATES — swap line1–line4 with any set below.
 * A) Defiant (current):   "They said" / "it wasn't" / "normal." / "So I made it normal."
 * B) Thesis:              "Same" / "discipline." / "Three" / "arenas."
 * C) Velocity:            "Built for" / "speed." / "Wired for" / "science."
 * D) Trailblazer:         "First to" / "the grid." / "Not the" / "last."
 * E) Manifesto:           "I don't wait" / "for the" / "green light." / "I am it."
 */
export const hero = {
  // Defiant declaration (Sultanic belief-shift) + clarity subhead.
  kicker: "Driver · Researcher · Team Owner",
  line1: "They said",
  line2: "it wasn't",
  line3: "normal.",
  line4: "So I made it normal.",
  sub: "The first Pakistani woman to hold an FIA racing license — racing wheel-to-wheel, fighting cancer as a clinical researcher, and building the next generation of drivers at Box Motorsports.",
  ctaPrimary: { label: "Work with me", href: "#connect" },
  ctaSecondary: { label: "The journey", href: "#journey" },
};

export const proof = {
  stats: [
    { value: "1st", label: "FIA pro-licensed Pakistani woman driver" },
    { value: "Podium", label: "Road America · rookie season" },
    { value: "P4", label: "2025 season points finish" },
    { value: "31K+", label: "Global community" },
  ],
};

export const why = {
  eyebrow: "The why",
  heading: "It was never a hobby. It was the plan.",
  body: [
    "I started karting at five years old in Riyadh. Then I was told to stop — women couldn't legally drive in Saudi Arabia until 2018.",
    "I didn't quit. I waited, I moved, I built the career on my own terms. I came back to racing in medical school and never looked back.",
    "People kept telling me racing wasn't normal for someone like me. So I decided to make it normal.",
  ],
  pullQuote:
    "We make our own norms. If you truly believe something should be normal — and you do it — then it becomes normal.",
};

export const journey = {
  eyebrow: "The journey",
  heading: "From a kart in Riyadh to an FIA license.",
  milestones: [
    {
      year: "Age 5",
      title: "First kart, Riyadh",
      body: "Strapped into a kart as a child in Saudi Arabia. The obsession started early.",
    },
    {
      year: "Teens",
      title: "Forced to stop",
      body: "Racing paused — women couldn't legally drive in Saudi Arabia until 2018. The dream went on hold, not away.",
    },
    {
      year: "2017",
      title: "Moved to the U.S.",
      body: "Relocated to America to chase both careers at once — medicine and motorsport.",
    },
    {
      year: "Late 2024",
      title: "The sprint begins",
      body: "Started formal race training. In months: production cars → Formula Vee → F4. Named 'Most Improved Driver' two weeks after learning manual.",
    },
    {
      year: "2025",
      title: "Podium at Road America",
      body: "Rookie season in Formula Regional Americas — a breakthrough podium at Road America and P4 in the season points standings.",
    },
    {
      year: "Now",
      title: "Formula 3",
      body: "First Pakistani woman with a professional FIA license — stepping up to Formula 3 on the road toward the super license, while trackside at F1, WEC and MotoGP.",
    },
  ],
};

export const arenas = {
  eyebrow: "Three arenas",
  heading: "Racing is science. So is medicine.",
  items: [
    {
      tag: "On the track",
      title: "The Driver",
      body: "FIA-licensed and now racing Formula 3. From her first formal training to a podium at Road America to F3 in under two years — self-funded, against grids who've run these circuits for years.",
    },
    {
      tag: "In the lab",
      title: "The Researcher",
      body: "Full-time clinical cancer researcher in oncology, working with the U.S. FDA to bring experimental chemotherapies and diagnostics to market. Dean's list. Published in scientific journals.",
    },
    {
      tag: "In the boardroom",
      title: "The Owner",
      body: "Founder of Box Motorsports — a science-driven driver-development team operating across the U.S., Italy, the U.K. and the Gulf. 'It's where I'm the happiest.'",
    },
  ],
};

export const recognition = {
  eyebrow: "Recognition",
  heading: "The story the world is watching.",
  press: [
    { outlet: "Arab News", quote: "Pakistan's first woman racer breaks ground in global motorsport." },
    { outlet: "RACER", quote: "Inside the SCCA: Pakistan's female first racer." },
    { outlet: "Dive Bomb", quote: "Woman Spotlight: redefining who belongs on the grid." },
    { outlet: "The Podium Finish", quote: "More than a driver — reshaping motorsport from the inside." },
  ],
};

export const impact = {
  eyebrow: "The impact",
  heading: "I'm not the exception. I'm the proof.",
  body: "My goal isn't to be the only one. It's to open the door — for Pakistani women to enter motorsport as drivers, engineers, team principals and technical leaders. If you don't see women at that level, people start to believe they aren't there. I'm here to change what people believe is possible.",
  quote:
    "When you're the first one doing something, you're figuring it out as you go.",
};

export const box = {
  eyebrow: "The business",
  heading: "Box Motorsports",
  tagline: "Science-Driven Racing Driver Development.",
  body: "Box develops elite racing drivers through data analytics, engineering insight and sports science — an honest, affordable pathway from karting, sim racing and grassroots into competitive Formula racing. No hype. Real careers, on and off the track.",
  points: [
    "Telemetry- and data-led coaching",
    "Race engineering & hands-on track support",
    "Realistic career pathways beyond F1",
    "Operating across the U.S., Italy, U.K. & the Gulf",
  ],
  cta: { label: "Explore Box Motorsports", href: "https://www.boxmotorsportspro.com/" },
};

/** Bento "at a glance" — modular identity snapshot (UI/UX Pro Max: Bento Grid). */
export const snapshot = {
  eyebrow: "At a glance",
  heading: "Who she is, fast.",
  identity: {
    flags: "🇵🇰 🇺🇸 🇸🇦",
    line: "Lahore-born · Riyadh-raised · racing in the U.S.",
  },
  trackside: "Trackside at F1, WEC & MotoGP",
  reach: { value: "31K+", label: "Global community" },
  ladder: { value: "F3", label: "On the F1 feeder ladder" },
  quote: "We make our own norms.",
  dual: "Cancer researcher by day. Race driver on the grid.",
};

export const gallery = {
  eyebrow: "In frame",
  heading: "The energy, in motion.",
  sub: "On the grid, behind the wheel, off the clock — the story in frames.",
  // Editorial mosaic. span: big = 2x2, wide = 2x1, tall = 1x2 (portrait).
  shots: [
    { label: "Visor down", src: "/photos/helmet.jpg", span: "big" },
    { label: "Suited up", src: "/photos/portrait-studio.jpg", span: "tall" },
    { label: "Flat out", src: "/photos/racing-action.jpg", span: "tall" },
    { label: "Eyes forward", src: "/photos/mirror-eyes.jpg", span: "big" },
    { label: "In the paddock", src: "/photos/paddock.jpg", span: "tall" },
    { label: "Open road", src: "/photos/aston-profile.jpg", span: "tall" },
    { label: "Off the clock", src: "/photos/smile-closeup.jpg", span: "tall" },
  ],
};

/** Sponsorship pitch (UI/UX Pro Max: "Trust & Authority + Conversion"). Her #1 goal. */
export const partner = {
  eyebrow: "Partnership",
  heading: "Put your brand on the first.",
  sub: "Sponsoring Arshia isn't buying ad space — it's owning a story no competitor can replicate.",
  value: [
    {
      title: "An un-buyable narrative",
      body: "The first Pakistani woman with an FIA pro license. No brand can manufacture that story — only partner with it.",
    },
    {
      title: "A 31K+ global community",
      body: "A fast-growing, engaged audience across Pakistan, the U.S. and the Gulf — exactly the emerging markets brands chase.",
    },
    {
      title: "Earned, not paid, press",
      body: "Featured by Arab News, RACER, Dive Bomb and more — credibility that compounds every season.",
    },
    {
      title: "A rising trajectory",
      body: "F4 to F3 in under two years, on the F1 feeder ladder. Get in before the rest of the world catches up.",
    },
  ],
  cta: { label: "Request the partnership deck", href: "#connect" },
};

/** Reels — short vertical clips, lazy-loaded + autoplayed in view. */
export const reels = {
  eyebrow: "In motion",
  heading: "Straight from the track.",
  sub: "Raw clips from the grid, the garage and the wheel.",
  items: [
    "/reels/reel-1.mp4",
    "/reels/reel-2.mp4",
    "/reels/reel-3.mp4",
    "/reels/reel-4.mp4",
  ],
};

export const connect = {
  eyebrow: "Get in touch",
  heading: "Let's work together.",
  sub: "Tell me why you're reaching out and it'll land in the right place.",
  channels: [
    {
      key: "sponsorship",
      title: "Sponsorship & Partnerships",
      body: "Brand partnerships, sponsorship decks, and a story no one else can buy.",
    },
    {
      key: "media",
      title: "Media & Press",
      body: "Interviews, features, media kit and high-res assets.",
    },
    {
      key: "box",
      title: "Box Motorsports",
      body: "Driver development, coaching and team inquiries.",
    },
    {
      key: "drivers",
      title: "Aspiring Drivers",
      body: "Trying to break into motorsport? Start here.",
    },
  ],
};
