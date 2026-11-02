import {
  Aperture,
  Award,
  BookOpen,
  Building2,
  Camera,
  Clapperboard,
  Film,
  Landmark,
  Lightbulb,
  Mic,
  MonitorPlay,
  Palette,
  Sliders,
  Sparkles,
  Tv,
  Video,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------
   Company facts: Tiharqa Film Production
   Ethiopian Film Production Company & Amharic Cinema
------------------------------------------------------------------- */
export const SITE = {
  legalName: "Tiharqa Film Production",
  brand: "Tiharqa Film",
  tagline: "Stories That Move. Cinema That Connects.",
  subTagline: "Ethiopian Cinema & Amharic Storytelling",
  phone: "+251 911 234567",
  phoneHref: "tel:+251911234567",
  whatsappNumber: "251911234567",
  email: "contact@tiharqafilm.com",
  emailHref: "mailto:contact@tiharqafilm.com",
  location: "Addis Ababa, Ethiopia",
} as const;

export const whatsappLink = (text?: string) =>
  `https://wa.me/${SITE.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

/* ------------------------------------------------------------------
   Navigation
------------------------------------------------------------------- */
export const NAV_LINKS = [
  { label: "Films", href: "#films", id: "films" },
  { label: "Upcoming", href: "#upcoming", id: "upcoming" },
  { label: "About", href: "#about", id: "about" },
  { label: "Process", href: "#process", id: "process" },
  { label: "Studio", href: "#technology", id: "technology" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

/* Every page section, in document order (used for scroll-spy) */
export const SECTION_IDS = [
  "home",
  "trust",
  "films",
  "upcoming",
  "why-tiharqa",
  "about",
  "process",
  "technology",
  "request-quote",
  "contact",
] as const;

/* ------------------------------------------------------------------
   Imagery (Original high-resolution film production assets)
------------------------------------------------------------------- */
export type Img = {
  src: string;
  srcSet: string;
  alt: string;
  width: number;
  height: number;
};

export const IMAGES = {
  hero: {
    src: "/images/hero.jpg",
    srcSet: "/images/hero.jpg 1920w",
    alt: "Ethiopian film director and cinematographer on an atmospheric movie set with professional cinema camera rig in Addis Ababa",
    width: 1920,
    height: 1080,
  },
  why: {
    src: "/images/why.jpg",
    srcSet: "/images/why.jpg 800w",
    alt: "Dedicated Ethiopian camera operator adjusting a cinema prime lens on a professional camera rig",
    width: 800,
    height: 1000,
  },
  about: {
    src: "/images/about.jpg",
    srcSet: "/images/about.jpg 1400w",
    alt: "Ethiopian movie director reviewing scenes on a production monitor beside crew with a film slate",
    width: 1400,
    height: 933,
  },
  technology: {
    src: "/images/technology.jpg",
    srcSet: "/images/technology.jpg 1400w",
    alt: "High-end 4K cinema post-production and DaVinci Resolve color grading studio suite",
    width: 1400,
    height: 933,
  },
} as const;

/* ------------------------------------------------------------------
   Trust strip: The Pillars of Tiharqa Film Production
------------------------------------------------------------------- */
export const TRUST_ITEMS = [
  {
    label: "Cinematic Vision",
    text: "Stories rooted in authentic Ethiopian culture, humanity, and emotional depth.",
    icon: Film,
  },
  {
    label: "Amharic Cinema",
    text: "Compelling narratives that resonate deeply with local and international audiences.",
    icon: Clapperboard,
  },
  {
    label: "Production Rigor",
    text: "High-end digital cinema cameras, sculpted lighting, and pristine audio capture.",
    icon: Video,
  },
  {
    label: "Artistic Integrity",
    text: "Every frame crafted with uncompromising passion, discipline, and creative vision.",
    icon: Sparkles,
  },
] as const satisfies readonly { label: string; text: string; icon: LucideIcon }[];

/* ------------------------------------------------------------------
   Produced Movies & Filmography Catalogue
------------------------------------------------------------------- */
export type MovieCategory = "all" | "trending" | "features" | "documentaries" | "biographies";

export type FilmItem = {
  id: string;
  title: string;
  amharicTitle: string;
  categories: MovieCategory[];
  genre: string;
  year: string;
  runtime: string;
  director: string;
  cast: string;
  synopsis: string;
  poster: string;
  status: string;
  awards?: string;
  tagline: string;
  featured?: boolean;
};

export const PRODUCED_FILMS: FilmItem[] = [
  {
    id: "semay",
    title: "SEMAY",
    amharicTitle: "ሰማይ",
    categories: ["all", "trending", "features"],
    genre: "Amharic Drama / Feature",
    year: "2025",
    runtime: "118 min",
    director: "Tiharqa Directing Unit",
    cast: "Mesfin Haile, Selamawit Bekele, Dawit Kebede",
    synopsis:
      "Set against the shifting twilight skyline of modern Addis Ababa, an ambitious architectural draftsman must reconcile his family's ancestral land rights with the relentless pace of urban transformation. A profound, emotional inquiry into modern Ethiopian identity.",
    poster: "/images/poster-semay.jpg",
    status: "Theatrical Release",
    awards: "Official Selection · FESPACO & Zanzibar International Film Festival",
    tagline: "Between the earth that anchors us and the sky that calls.",
    featured: true,
  },
  {
    id: "tewodros",
    title: "TEWODROS: THE EMPEROR",
    amharicTitle: "ቴዎድሮስ ፡ ዳግማዊ ንጉሠ ነገሥት",
    categories: ["all", "trending", "biographies", "features"],
    genre: "Historical Biography / Epic",
    year: "2024",
    runtime: "142 min",
    director: "Tiharqa Historical Cinema Unit",
    cast: "Yohannes Berhanu, Alemayehu Tadesse, Aster Mamo",
    synopsis:
      "An epic biographical dramatization of Emperor Tewodros II's audacious quest to modernize and unify 19th-century Ethiopia. Filmed on location across the rugged crags of the Simien mountains with period-accurate arms, royal regalia, and authentic Ge'ez and Amharic dialogue.",
    poster: "/images/poster-tewodros.jpg",
    status: "Festival Acclaimed & Theatrical",
    awards: "Best Cinematography · African Cinema Honors 2024",
    tagline: "One crown. One nation. One unbroken spirit.",
    featured: true,
  },
  {
    id: "echoes",
    title: "ECHOES OF THE HIGHLANDS",
    amharicTitle: "የደጋው ድምፆች",
    categories: ["all", "trending", "documentaries"],
    genre: "Cultural Documentary / Music",
    year: "2025",
    runtime: "88 min",
    director: "Tiharqa Documentary Unit",
    cast: "Master Masenqo Elders of Wollo & Gondar",
    synopsis:
      "An intimate, sensorial journey exploring the ancient acoustic lineages of Ethiopian folk song (Tizita, Bati, and Ambassel), travelling through Gondar, Wollo, and Lalibela to capture master azmari performers preserving oral histories through the single-stringed masenqo.",
    poster: "/images/poster-echoes.jpg",
    status: "Theatrical & Global Screening",
    awards: "Audience Choice Award · Ethio-Heritage Doc Fest",
    tagline: "The strings that carry centuries of living memory.",
    featured: true,
  },
  {
    id: "yezema-tizita",
    title: "YEZEMA TIZITA",
    amharicTitle: "የዜማ ትዝታ",
    categories: ["all", "biographies", "documentaries"],
    genre: "Musical Biography / Docudrama",
    year: "2024",
    runtime: "104 min",
    director: "Tiharqa Heritage Studio",
    cast: "Pioneering Horn of Africa Arrangers & Musicians",
    synopsis:
      "The definitive cinematic biography of the visionary composers, arrangers, and vocalists who created the golden era of modern Ethiopian groove in late 1960s Addis Ababa, featuring meticulously restored sound masters and vivid dramatizations.",
    poster: "/images/technology.jpg",
    status: "Theatrical Showcase",
    awards: "Heritage Cultural Preservation Citation",
    tagline: "The golden sound that defined a generation.",
  },
  {
    id: "addis-nocturne",
    title: "ADDIS NOCTURNE",
    amharicTitle: "የአዲስ ሌሊት",
    categories: ["all", "features"],
    genre: "Neo-Noir Drama",
    year: "2024",
    runtime: "112 min",
    director: "Tiharqa Directing Unit",
    cast: "Kassahun Fikre, Rahel Getachew",
    synopsis:
      "Over the course of a single rainy night in Piazza and Bole, an estranged night-shift taxi driver and an investigative reporter untangle a web of secrets surrounding a lost cultural artifact. A masterclass in shadow, rain reflections, and tension.",
    poster: "/images/hero.jpg",
    status: "Theatrical Release",
    awards: "Nominee · Best Original Screenplay",
    tagline: "The night reveals what the sun conceals.",
  },
  {
    id: "blue-nile-roots",
    title: "BLUE NILE ROOTS",
    amharicTitle: "ዓባይ ፡ የሕይወት ምንጭ",
    categories: ["all", "documentaries"],
    genre: "Environmental Documentary",
    year: "2023",
    runtime: "76 min",
    director: "Tiharqa Wildlife & Culture Team",
    cast: "Communities of Sekela and Lake Tana",
    synopsis:
      "Following the sacred headwaters of the Little Abbay from highland springs in Gojjam to the thunderous majesty of Tis Issat Falls, this visual symphony captures the human communities whose spiritual and cultural existence has intertwined with the river for millennia.",
    poster: "/images/about.jpg",
    status: "Broadcast & Festival Circuit",
    awards: "Panafrican Environmental Ribbon",
    tagline: "From sacred spring to legendary cascade.",
  },
];

/* ------------------------------------------------------------------
   Upcoming Movies & Documentaries Slate
------------------------------------------------------------------- */
export type UpcomingFilmItem = {
  id: string;
  title: string;
  amharicTitle: string;
  type: string;
  stage: string;
  progressPercent: number;
  expectedDate: string;
  director: string;
  synopsis: string;
  poster: string;
  tags: string[];
  directorNote: string;
};

export const UPCOMING_SLATE: UpcomingFilmItem[] = [
  {
    id: "kedamit",
    title: "KEDAMIT",
    amharicTitle: "ቀዳሚት",
    type: "Theatrical Feature Film",
    stage: "Post-Production (Color & Sound Mastering)",
    progressPercent: 88,
    expectedDate: "Q3 2026",
    director: "Tiharqa Directing Unit",
    synopsis:
      "A high-tension psychological drama following two sisters navigating family loyalties and sudden fortune in a rapidly changing Ethiopia. Captured in native 4K anamorphic widescreen with an original orchestral score by renowned Ethiopian instrumentalists.",
    poster: "/images/poster-kedamit.jpg",
    tags: ["Theatrical Feature", "4K Anamorphic", "5.1 Surround Sound"],
    directorNote:
      "Kedamit is our most ambitious narrative exploration of contemporary trust, sisterhood, and resilience. Every frame is saturated with emotional truth.",
  },
  {
    id: "lalibela-mason",
    title: "THE ROCK MASON OF LALIBELA",
    amharicTitle: "የላሊበላው ጠራቢ",
    type: "Historical Epic & Biography",
    stage: "Pre-Production & Casting",
    progressPercent: 55,
    expectedDate: "2027",
    director: "Tiharqa Creative Team",
    synopsis:
      "A sweeping historical drama recounting the architectural wonder of the 12th-century rock-hewn monolithic churches of Roha (Lalibela), seen through the eyes of the master stonecutters and visionary monarch who carved faith out of living mountain stone.",
    poster: "/images/why.jpg",
    tags: ["Historical Biography", "Living Heritage", "Simien Location Filming"],
    directorNote:
      "An ode to Ethiopian architectural genius and unmatched spiritual dedication. Filmed with period-accurate stonecraft tools.",
  },
  {
    id: "voices-of-entoto",
    title: "VOICES OF ENTOTO",
    amharicTitle: "የእንጦጦ ድምፆች",
    type: "Feature Documentary",
    stage: "Principal Photography",
    progressPercent: 70,
    expectedDate: "Early 2027",
    director: "Tiharqa Documentary Unit",
    synopsis:
      "From sunrise eucalyptus mist to panoramic city overlooks, this poetic non-fiction film explores the lives of the women, traditional weavers, and long-distance runners who have made Mount Entoto their home, workplace, and spiritual refuge for generations.",
    poster: "/images/hero.jpg",
    tags: ["Feature Documentary", "Human Stories", "Highland Atmosphere"],
    directorNote:
      "A meditation on mountain dignity, physical endurance, and the soul of Addis Ababa from above.",
  },
];

export const SERVICE_OPTIONS = [
  "SEMAY (ሰማይ) — Screening / Distribution Inquiry",
  "TEWODROS: THE EMPEROR — Screening / Rights",
  "ECHOES OF THE HIGHLANDS — Festival / Broadcast",
  "KEDAMIT (ቀዳሚት) — Co-Production / Advance Rights",
  "Feature Film Co-Production Proposal",
  "Documentary Partnership / Commission",
  "Script / Story Development Collaboration",
  "Other Film Production Inquiry",
] as const;

/* ------------------------------------------------------------------
   Why Tiharqa: Core Filmmaking Philosophy
------------------------------------------------------------------- */
export const WHY_ITEMS = [
  {
    title: "Cultural Authenticity",
    text: "Deeply honoring Ethiopian heritage, cultural nuance, and authentic human narratives that ring true to audiences.",
  },
  {
    title: "Cinematic Standards",
    text: "Deploying high-dynamic-range cinema packages, calibrated color management, and theatrical-grade sound engineering.",
  },
  {
    title: "Narrative Depth",
    text: "Prioritizing complex character journeys and heartfelt emotional resonance over shortcuts or formulaic tropes.",
  },
  {
    title: "Creative Collaboration",
    text: "Empowering talented Ethiopian directors, screenwriters, actors, and on-set craftspeople in an inspiring environment.",
  },
  {
    title: "End-to-End Production",
    text: "Seamless execution across every phase: from initial concept treatment through principal photography to theatrical release.",
  },
  {
    title: "Audience Connection",
    text: "Crafting Amharic cinema that captivates domestic theatre audiences while engaging Ethiopian diaspora communities worldwide.",
  },
  {
    title: "Technical Precision",
    text: "Every cut, grade, and sound master engineered to satisfy global theatrical and digital streaming delivery specifications.",
  },
] as const;

/* ------------------------------------------------------------------
   Film Production Process: Pipeline
------------------------------------------------------------------- */
export const PROCESS_STEPS = [
  {
    n: "01",
    title: "Develop",
    text: "Screenwriting, concept incubation, creative treatments, and script polishing.",
  },
  {
    n: "02",
    title: "Pre-Produce",
    text: "Casting, location scouting across Ethiopia, cinematic storyboarding, and production scheduling.",
  },
  {
    n: "03",
    title: "Produce",
    text: "Principal photography with professional cinema cameras, dynamic lighting, and pristine audio capture.",
  },
  {
    n: "04",
    title: "Post & Premiere",
    text: "Editorial assembly, DaVinci Resolve color grading, theatrical sound mixing, and premiere release.",
  },
] as const;

/* ------------------------------------------------------------------
   Cinema Technology & Studio Capabilities
------------------------------------------------------------------- */
export const TECH_ITEMS = [
  {
    title: "Cinema Camera Systems",
    text: "High-dynamic-range cinema sensors capturing filmic textures and rich shadow detail.",
    icon: Camera,
  },
  {
    title: "Prime Cinema Lenses",
    text: "Anamorphic and spherical cinema optics delivering organic bokeh and expressive character.",
    icon: Aperture,
  },
  {
    title: "Lighting & Grip Packages",
    text: "Precision LED and HMI setups sculpting atmosphere, contrast, and cinematic mood on set.",
    icon: Lightbulb,
  },
  {
    title: "Field Sound Recording",
    text: "Multi-track audio capture recording pristine Amharic dialogue and immersive ambient tracks.",
    icon: Mic,
  },
  {
    title: "DaVinci Color Suite",
    text: "Calibrated 4K reference monitoring and color grading for signature film palettes.",
    icon: Palette,
  },
  {
    title: "Mastering & Finishing",
    text: "Theatrical DCP creation, multi-platform streaming deliverables, and archival masters.",
    icon: MonitorPlay,
  },
] as const satisfies readonly { title: string; text: string; icon: LucideIcon }[];
