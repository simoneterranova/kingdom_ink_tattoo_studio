// ╔══════════════════════════════════════════════════════════════╗
// ║           SHOP CONFIGURATION — ONE FILE TO RULE THEM ALL    ║
// ║                                                              ║
// ║  To deploy this template for a new studio:                   ║
// ║  1. Fill in this file (all sections below)                   ║
// ║  2. Replace images in src/assets/ and update the imports     ║
// ║  3. Update colors & fonts in src/index.css                   ║
// ║  4. Update font names in tailwind.config.ts                  ║
// ║  5. Update domain in public/sitemap.xml and robots.txt       ║
// ║  That's it — nothing else should need touching.             ║
// ║                                                              ║
// ║  PALETTE (TEMA SCURO — "Oro Reale")                          ║
// ║  #0A0804  →  HSL  30 30%  4%  — sfondo (nero caldo, pelle)  ║
// ║  #C9A84C  →  HSL  42 55% 54%  — primario, CTA (oro antico)  ║
// ║  #EDE5CC  →  HSL  42 40% 87%  — testo (crema calda)         ║
// ║                                                              ║
// ║  FONT STACK                                                  ║
// ║  Heading: Cinzel        — romano, imperiale, come il logo    ║
// ║  Body:    DM Sans       — geometrico, pulito, leggibile      ║
// ╚══════════════════════════════════════════════════════════════╝

// ── IMAGE ASSETS ──────────────────────────────────────────────────────────────
// Replace these files in src/assets/ with Kingdom Ink's own photos/videos.
import heroBg    from "@/assets/output_web.mp4";

// Artist photos
import artist1   from "@/assets/claudio1.webp";   // Simone Sorrentino – portrait 1
import artist2   from "@/assets/claudio2.webp";   // Simone Sorrentino – portrait 2
import artist3   from "@/assets/claudio3.webp";   // Simone Sorrentino – portrait 3

import gallery1  from "@/assets/tattoo-1.webp";
import gallery2  from "@/assets/tattoo-2.webp";
import gallery3  from "@/assets/tattoo-3.webp";
import gallery4  from "@/assets/tattoo-4.webp";
import gallery5  from "@/assets/tattoo-5.webp";
import gallery6  from "@/assets/tattoo-6.webp";
import gallery7  from "@/assets/tattoo-7.webp";
import gallery8  from "@/assets/tattoo-8.webp";
import gallery9  from "@/assets/tattoo-9.webp";
import gallery10 from "@/assets/tattoo-10.webp";
import gallery11 from "@/assets/tattoo-11.webp";
import gallery12 from "@/assets/tattoo-12.webp";
import gallery13 from "@/assets/tattoo-13.webp";
import gallery14 from "@/assets/tattoo-14.webp";
import gallery15 from "@/assets/studio.mp4";
import gallery16 from "@/assets/Progetto video 3.mp4";

import piercing1  from "@/assets/piercings-photos/piercing-1.webp";
import piercing2  from "@/assets/piercings-photos/piercing-2.webp";
import piercing3  from "@/assets/piercings-photos/piercing-3.webp";
import piercing4  from "@/assets/piercings-photos/piercing-4.webp";
import piercing5  from "@/assets/piercings-photos/piercing-5.webp";
import piercing6  from "@/assets/piercings-photos/piercing-6.webp";
import piercing7  from "@/assets/piercings-photos/piercing-7.webp";
import piercing8  from "@/assets/piercings-photos/piercing-8.webp";
import piercing9  from "@/assets/piercings-photos/piercing-9.webp";
import piercing10 from "@/assets/piercings-photos/piercing-10.webp";
import piercing11 from "@/assets/piercings-photos/piercing-11.webp";
import piercing12 from "@/assets/piercings-photos/piercing-12.webp";
import piercing13 from "@/assets/piercings-photos/piercing-13.webp";
import piercing14 from "@/assets/piercings-photos/piercing-14.webp";

// ── DISEGNI IMPORTS COMMENTED OUT (NOT NEEDED FOR THIS SHOP) ──
// import disegni1  from "@/assets/disegni-photos/disegni-1.webp";
// import disegni2  from "@/assets/disegni-photos/disegni-2.webp";
// import disegni3  from "@/assets/disegni-photos/disegni-3.webp";
// import disegni4  from "@/assets/disegni-photos/disegni-4.webp";
// import disegni5  from "@/assets/disegni-photos/disegni-5.webp";

import logo      from "@/assets/logo.png";     // Kingdom Ink logo


// ── IDENTITY ──────────────────────────────────────────────────────────────────
const shopConfig = {
  /** Short brand name used in the navbar logo, loading screen, and auth page. */
  name: "KINGDOM INK",

  /** Full brand name used in the footer bottom bar. */
  fullName: "KINGDOM INK TATTOO STUDIO",

  /** Logo image. */
  logo: logo,

  /** City / location shown in hero tagline and section subtitles. RESPECT THE FORMATTING */
  city: "Torino, TO",

  /** Year the shop was founded — shown in the hero tagline. Leave empty if unknown. */
  established: "2020",

  /** The type of business activity. */
  activity: "Studio di Tatuaggi Realistici",

  /** Primary author/artist for blog posts and content authorship. */
  author: {
    name: "Simone Sorrentino",
    jobTitle: "Artista Tatuatore — Realismo Black & Gray",
  },

  // ── SEO / HTML <head> ───────────────────────────────────────────────────────
  meta: {
    /** Full domain without trailing slash. */
    siteUrl: "https://www.kingdomink.it",   // ← update with real domain

    /** Link di prenotazione o contatto */
    bookingSiteUrl: "https://www.kingdomink.it",

    /** og:locale */
    locale: "it_IT",

    googleSiteVerification: "YOUR_GOOGLE_VERIFICATION_CODE_HERE",
    googleAnalyticsId:      "G-XXXXXXXXXX",

    title:
      "Kingdom Ink Torino | Tatuaggi Realistici Black & Gray | Simone Sorrentino",
    description:
      "Studio di tatuaggi realistici black & gray a Torino. Specializzato in ritratti, PMU e piercing. Simone Sorrentino — artista disponibile, preciso, attento ai dettagli. Consulenza gratuita.",
    ogTitle:
      "Kingdom Ink – Arte Realistica Black & Gray a Torino",
    ogDescription:
      "Ogni tatuaggio è un'opera d'arte. Realismo black & gray, ritratti, PMU e piercing nel cuore di Torino. Prenota la tua consulenza con Simone.",
    /** Absolute path from the public/ folder or a full URL. */
    ogImage: "/og-image.jpg",
  },

  // ── NAVIGATION LABELS ───────────────────────────────────────────────────────
  nav: {
    bookingCta: "Prenota",
    links: [
      { label: "Servizi",    href: "#services"     },
      { label: "L'Artista",  href: "#team"         },
      { label: "Tattoo",     href: "#gallery"      },
      // { label: "Disegni",    href: "#disegni"      }, // COMMENTED OUT - Not needed for this shop
      { label: "Piercings",  href: "#piercings"    },
      { label: "Recensioni", href: "#testimonials" },
      { label: "Contatti",   href: "#contact"      },
    ],
  },

  // ── HERO SECTION ────────────────────────────────────────────────────────────
  hero: {
    backgroundImage: heroBg,

    /** Two-line editorial headline rendered in giant type. */
    headline: ["Kingdom", "Ink"],

    subheadline:
      "Arte realistica black & gray a Torino — ogni segno è un'opera incisa con precisione, cura e sincerità.",

    bookingCta: "Prenota",

    marqueeItems: [
      "Realistico",
      "Black & Gray",
      "Ritratti",
      "PMU",
      "Piercing",
      "Su Misura",
      "Torino",
      "Consulenza Gratuita",
    ],
  },

  // ── SECTION HEADINGS ────────────────────────────────────────────────────────
  sections: {
    services: {
      label: "Servizi",
      heading: ["I Nostri", "Servizi"],
      counterLabel: ["Servizi", "Personalizzati"],
      footnote:
        "Ogni progetto nasce da un dialogo sincero · I preventivi sono personalizzati in base a dimensione, complessità e posizionamento anatomico · Consulenza gratuita",
    },
    team: {
      label: "L'Artista",
      heading: ["Chi è", "Simone"],
      counterLabel: ["Anni di", "Esperienza"],
    },
    testimonials: {
      label: "Recensioni",
      heading: "Dicono di noi",
    },
    gallery: {
      label: "Gallery",
      heading: "I nostri Tattoo",
    },
    piercings: {
      label: "Piercings",
      heading: "I nostri Piercings",
    },
    // DISEGNI SECTION COMMENTED OUT - Not needed for this shop
    // disegni: {
    //   label: "Disegni",
    //   heading: "I Nostri Disegni",
    // },
    contact: {
      label: "Contatti",
      heading: ["Vieni a", "Trovarci"],
      locationLabel: "Dove Siamo",
      hoursLabel: "Orari di apertura",
      contactLabel: "Contatti",
      socialLabel: "Social Networks",
    },
  },

  // ── SERVICES ────────────────────────────────────────────────────────────────
  services: [
    // ── TATTOO SERVICES ──────────────────────────────────────────────────────
    {
      id: "consultation",
      index: "01",
      name: "Consulenza",
      category: "tattoo" as "tattoo" | "piercing",
      price: "Gratuita",
      duration: "30 min",
      durationMinutes: 30,
      description:
        "Un primo incontro per conoscersi, studiare la tua idea e costruire insieme il progetto perfetto. Simone ti consiglia con sincerità su ogni aspetto del disegno.",
      badge: "Iniziale" as string | null,
    },
    {
      id: "realistico-blackgray",
      index: "02",
      name: "Realistico Black & Gray",
      category: "tattoo" as "tattoo" | "piercing",
      price: "Su Preventivo",
      duration: "da 2 ore",
      durationMinutes: 120,
      description:
        "La specialità di Kingdom Ink. Tecniche di ombreggiatura e sfumatura per ottenere profondità fotografica sull'inchiostro. Ogni dettaglio è curato con ossessiva precisione.",
      badge: "Specialità" as string | null,
    },
    {
      id: "ritratti",
      index: "03",
      name: "Ritratti Realistici",
      category: "tattoo" as "tattoo" | "piercing",
      price: "Su Preventivo",
      duration: "da 3 ore",
      durationMinutes: 180,
      description:
        "Volti, persone, animali e figure portati sulla pelle con fedeltà assoluta. Un ritratto permanente che racconta chi ami e cosa sei.",
      badge: "Più richiesto" as string | null,
    },
    {
      id: "pmu",
      index: "04",
      name: "PMU — Trucco Permanente",
      category: "tattoo" as "tattoo" | "piercing",
      price: "Su Preventivo",
      duration: "da 1 ora",
      durationMinutes: 60,
      description:
        "Permanent Make-Up professionale: sopracciglia, labbra e eyeliner semi-permanente. Risultati naturali e duraturi con pigmenti di alta qualità.",
      badge: "Disponibile" as string | null,
    },
    {
      id: "cover-up",
      index: "05",
      name: "Cover-up & Correzioni",
      category: "tattoo" as "tattoo" | "piercing",
      price: "Su Preventivo",
      duration: "da 2 ore",
      durationMinutes: 120,
      description:
        "Trasformiamo vecchi tatuaggi in nuove opere d'arte. Studio approfondito del soggetto esistente per una copertura impeccabile e rispettosa della pelle.",
      badge: null as string | null,
    },
    {
      id: "aftercare",
      index: "06",
      name: "Cura Post-Tatuaggio",
      category: "tattoo" as "tattoo" | "piercing",
      price: "Inclusa",
      duration: "inclusa",
      durationMinutes: 30,
      description:
        "Istruzioni dettagliate e supporto continuo per la guarigione. La cura del tuo tatuaggio è parte integrante del servizio — il lavoro non finisce con l'ago.",
      badge: "Inclusa" as string | null,
    },

    // ── PIERCING SERVICES ────────────────────────────────────────────────────
    {
      id: "piercing-orecchio",
      index: "07",
      name: "Piercing Orecchio",
      category: "piercing" as "tattoo" | "piercing",
      price: "30€",
      duration: "15 min",
      durationMinutes: 15,
      description:
        "Piercing professionali all'orecchio: lobo, helix, tragus, conch, industrial. Sterilità assoluta e gioielli in titanio medicale di qualità.",
      badge: "Popolare" as string | null,
    },
    {
      id: "piercing-naso",
      index: "08",
      name: "Piercing Naso/Septum",
      category: "piercing" as "tattoo" | "piercing",
      price: "40€",
      duration: "20 min",
      durationMinutes: 20,
      description:
        "Piercing al naso (nostril) e septum. Include gioiello in titanio medicale chirurgico e consulenza per la cura post-piercing.",
      badge: null as string | null,
    },
    {
      id: "piercing-labbro",
      index: "09",
      name: "Piercing Labbro",
      category: "piercing" as "tattoo" | "piercing",
      price: "35€",
      duration: "15 min",
      durationMinutes: 15,
      description:
        "Piercing al labbro: labret, monroe, medusa, snake bites. Procedura sicura con materiali sterili monouso e gioielli certificati.",
      badge: null as string | null,
    },
    {
      id: "piercing-lingua",
      index: "10",
      name: "Piercing Lingua",
      category: "piercing" as "tattoo" | "piercing",
      price: "45€",
      duration: "20 min",
      durationMinutes: 20,
      description:
        "Piercing alla lingua eseguito con precisione anatomica. Include barbell in titanio e istruzioni dettagliate per la guarigione.",
      badge: null as string | null,
    },
    {
      id: "piercing-ombelico",
      index: "11",
      name: "Piercing Ombelico",
      category: "piercing" as "tattoo" | "piercing",
      price: "35€",
      duration: "20 min",
      durationMinutes: 20,
      description:
        "Piercing all'ombelico con studio della conformazione anatomica. Gioielli anallergici in titanio medicale con design eleganti.",
      badge: null as string | null,
    },
    {
      id: "piercing-sopracciglio",
      index: "12",
      name: "Piercing Sopracciglio",
      category: "piercing" as "tattoo" | "piercing",
      price: "35€",
      duration: "15 min",
      durationMinutes: 15,
      description:
        "Piercing al sopracciglio con posizionamento studiato per valorizzare lo sguardo. Materiali certificati e massima igiene.",
      badge: null as string | null,
    },
    {
      id: "piercing-capezzolo",
      index: "13",
      name: "Piercing Capezzolo",
      category: "piercing" as "tattoo" | "piercing",
      price: "50€",
      duration: "25 min",
      durationMinutes: 25,
      description:
        "Piercing al capezzolo eseguito con esperienza e professionalità. Procedura delicata con attenzione massima alla sterilità.",
      badge: null as string | null,
    },
    {
      id: "piercing-cambio-gioiello",
      index: "14",
      name: "Cambio Gioiello",
      category: "piercing" as "tattoo" | "piercing",
      price: "10€",
      duration: "10 min",
      durationMinutes: 10,
      description:
        "Cambio gioiello professionale per qualsiasi tipo di piercing. Verifica dello stato di guarigione e pulizia inclusa.",
      badge: "Servizio" as string | null,
    },
  ],

  // ── TEAM ────────────────────────────────────────────────────────────────────
  team: [
    {
      index: "01",
      name: "Simone Sorrentino",
      role: "Fondatore & Artista Tatuatore",
      image: artist1,
      images: [artist1, artist2, artist3],
      bio: "Simone è l'anima di Kingdom Ink: un artista che trasforma idee in opere d'arte permanenti. Specializzato nel realismo black & gray, lavora ogni progetto con cura ossessiva per i dettagli, consigliando i clienti con sincerità e trasparenza. Il suo studio è uno spazio accogliente e impeccabilmente pulito, dove la qualità non è mai un optional.",
      tags: ["Realistico", "Black & Gray", "Ritratti", "PMU", "Piercing", "Su Misura"],
      years: "—",   // ← aggiorna con anni reali di esperienza se disponibili
    },
  ],

  // ── TESTIMONIALS ────────────────────────────────────────────────────────────
  testimonials: [
    {
      name: "Giuseppe Alletto",
      text: "Ho conosciuto Simone un anno fa, arrivo da San Mauro. Mi ha disegnato un'opera d'arte sul braccio. Persona molto competente, seria ma soprattutto disponibile. Super consigliata 🔝",
    },
    {
      name: "Noemi Craparotta",
      text: "Posso solo dire che Simone è un bravissimo tatuatore: sa realizzare ciò che vuoi consigliandoti con sincerità ogni tipo di progetto. Oltre a un ottimo tatuatore è un'ottima persona, super educato e gentile ❤️",
    },
    {
      name: "Laura Anzalotto",
      text: "Non posso che essere super soddisfatta: ogni tatuaggio che mi fa Simone ne esco sempre super soddisfatta. Grazie!",
    },
    {
      name: "Yirisell Harrow",
      text: "Super soddisfatta del mio tattoo 😊 Simpaticissimo titolare, locale accogliente. Lo consiglio vivamente.",
    },
    {
      name: "Lucrezia Incorvaia",
      text: "Tatuatore bravissimo, simpatico e di cuore. Lo consiglierei a tutti!!",
    },
    {
      name: "Matteo Bracciante",
      text: "Professionale, super disponibile e veramente attento ai dettagli. Studio pulitissimo e impeccabile. Grazie Simo, alla prossima!",
    },
  ],

  // ── GALLERY ─────────────────────────────────────────────────────────────────
  gallery: [
    { src: gallery1,  alt: "Tatuaggio realistico black & gray su braccio",        label: "Black & Gray"  },
    { src: gallery2,  alt: "Ritratto realistico in black & gray",                  label: "Ritratto"      },
    { src: gallery3,  alt: "Dettaglio ombreggiatura realistica",                   label: "Dettaglio"     },
    { src: gallery4,  alt: "Tatuaggio realistico su schiena",                      label: "Black & Gray"  },
    { src: gallery15, alt: "Lo studio Kingdom Ink",                                label: "Lo Studio"     },
    { src: gallery5,  alt: "Tatuaggio realistico full sleeve",                     label: "Full Sleeve"   },
    { src: gallery6,  alt: "Dettaglio tecnico realistico",                         label: "Dettaglio"     },
    { src: gallery7,  alt: "Interno dello studio Kingdom Ink",                     label: "Lo Studio"     },
    { src: gallery8,  alt: "Tatuaggio realistico su spalla",                       label: "Black & Gray"  },
    { src: gallery9,  alt: "Ritratto realistico su gamba",                         label: "Ritratto"      },
    { src: gallery10, alt: "Tatuaggio realistico su avambraccio",                  label: "Black & Gray"  },
    { src: gallery11, alt: "Tatuaggio realistico su petto",                        label: "Petto"         },
    { src: gallery12, alt: "Tatuaggio realistico su schiena intera",               label: "Black & Gray"  },
    { src: gallery13, alt: "Video dello studio Kingdom Ink",                       label: "Lo Studio"     },
    { src: gallery14, alt: "Tatuaggio full body realistico",                       label: "Full Body"     },
    { src: gallery16, alt: "Video del processo di tatuaggio realistico",           label: "Il Processo"   },
  ],

  // ── PIERCINGS ───────────────────────────────────────────────────────────────
  piercings: [
    { src: piercing1,  alt: "Piercing ombelico professionale",        label: "Ombelico"      },
    { src: piercing2,  alt: "Piercing braccio",                       label: "Braccio"       },
    { src: piercing3,  alt: "Piercing sopracciglio",                  label: "Sopracciglio"  },
    { src: piercing4,  alt: "Piercing lingua",                        label: "Lingua"        },
    { src: piercing5,  alt: "Piercing collo",                         label: "Collo"         },
    { src: piercing6,  alt: "Piercing orecchio",                      label: "Orecchio"      },
    { src: piercing7,  alt: "Piercing studio Kingdom Ink",            label: "Orecchio"      },
    { src: piercing8,  alt: "Piercing industriale",                   label: "Industrial"    },
    { src: piercing9,  alt: "Piercing tragus",                        label: "Tragus"        },
    { src: piercing10, alt: "Piercing helix",                         label: "Helix"         },
    { src: piercing11, alt: "Piercing septum",                        label: "Septum"        },
    { src: piercing12, alt: "Piercing surface ombelico",              label: "Ombelico"      },
    { src: piercing13, alt: "Piercing surface sopracciglio",          label: "Sopracciglio"  },
    { src: piercing14, alt: "Piercing capezzolo",                     label: "Capezzolo"     },
  ],

  // ── DISEGNI (FLASH DESIGNS) ──────────────────────────────────────────────── 
  // COMMENTED OUT - Not needed for this shop
  disegni: [],
  // disegni: [
  //   {
  //     id: "realism-001",
  //     src: disegni1,
  //     alt: "Disegno realistico ritratto animale",
  //     label: "Ritratto Animale",
  //     category: "Ritratto",
  //     price: 60,
  //     originalPrice: null,
  //     size: "Medio (10-15cm)",
  //     badge: "Popolare",
  //     description: "Studio realistico di un soggetto animale in black & gray. Perfetto per avambraccio o polpaccio."
  //   },
  //   {
  //     id: "realism-002",
  //     src: disegni2,
  //     alt: "Disegno ritratto realistico volto",
  //     label: "Ritratto Umano",
  //     category: "Ritratto",
  //     price: 80,
  //     originalPrice: null,
  //     size: "Grande (15-20cm)",
  //     badge: "Bestseller",
  //     description: "Ritratto di un volto in tecnica realistica black & gray. Massima fedeltà all'espressione."
  //   },
  //   {
  //     id: "blackgray-001",
  //     src: disegni3,
  //     alt: "Disegno black & gray composizione",
  //     label: "Composizione B&G",
  //     category: "Black & Gray",
  //     price: 70,
  //     originalPrice: null,
  //     size: "Grande (15-20cm)",
  //     badge: null,
  //     description: "Composizione in black & gray con soggetti naturalistici e sfumature profonde."
  //   },
  //   {
  //     id: "blackgray-002",
  //     src: disegni4,
  //     alt: "Disegno black & gray botanico",
  //     label: "Botanico Realistico",
  //     category: "Black & Gray",
  //     price: 55,
  //     originalPrice: null,
  //     size: "Medio (10-15cm)",
  //     badge: null,
  //     description: "Elementi botanici — fiori, foglie, rami — resi con tecnica fotografica in black & gray."
  //   },
  //   {
  //     id: "realism-003",
  //     src: disegni5,
  //     alt: "Ritratto realistico full detail",
  //     label: "Ritratto Premium",
  //     category: "Ritratto",
  //     price: 100,
  //     originalPrice: 120,
  //     size: "Extra Grande (20-25cm)",
  //     badge: "In Offerta",
  //     description: "Ritratto di alta complessità con massimo dettaglio. Tecnica mista per una resa fotografica."
  //   },
  // ],

  // ── E-COMMERCE DISCOUNT SETTINGS ────────────────────────────────────────────
  discount: {
    /** Enable bulk purchase discount */
    enabled: true,
    /** Percentage discount (0-100) */
    percentage: 15,
    /** Minimum items required to qualify for discount */
    minItems: 3,
    /** Display message for the discount offer */
    message: "Acquista {minItems} o più disegni e ricevi automaticamente il {percentage}% di sconto sul totale!",
  },

  // ── CONTACT & LOCATION ──────────────────────────────────────────────────────
  contact: {
    addressLines: ["Via Plava, 42/I", "10135 Torino TO"],

    quarter: ["Torino"],

    countryCode: "IT",

    priceRange: "$$",

    geo: {
      latitude:  "45.0391",
      longitude: "7.6376",
    },

    phone:     "+39 338 568 9035",
    phoneHref: "tel:+393385689035",

    email: "info@kingdomink.it",   // ← aggiorna con email reale se disponibile

    /**
     * Google Maps embed URL.
     * Get it from: maps.google.com → Share → Embed a map → copy the src URL.
     * Placeholder per Via Plava 42/I, Torino — sostituisci con URL reale.
     */
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818!2d7.6376!3d45.0391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVmlhIFBsYXZhIDQyL0ksIFRvcmlubyBUTw!5e0!3m2!1sit!2sit!4v1700000000000",
  },

  // ── OPENING HOURS ───────────────────────────────────────────────────────────
  hours: [
    { days: "Mar – Ven", time: "10:00 – 19:00" },
    { days: "Sabato",    time: "10:00 – 19:00" },
    { days: "Domenica",  time: "Chiuso"         },
    { days: "Lunedì",    time: "Chiuso"         },
  ],

  // ── SOCIAL LINKS ────────────────────────────────────────────────────────────
  social: {
    instagram: "https://www.instagram.com/kingdom_ink_tattoo_studio/",
    facebook:  "",   // ← aggiorna se disponibile
    youtube:   "",   // ← aggiorna se disponibile
    tiktok:    "",   // ← aggiorna se disponibile
  },

  // ── FOOTER ──────────────────────────────────────────────────────────────────
  footer: {
    copyrightYear:       "2025",
    allRightsReserved:   "All rights reserved",
    privacyPolicyLabel:  "Privacy Policy",
    cookiePolicyLabel:   "Cookie Policy",
    cookieSettingsLabel: "Cookie Settings",
  },

  // ── LEGAL (Privacy Policy & Cookie Policy) ──────────────────────────────────
  legal: {
    legalName:     "Kingdom Ink Tattoo Studio Di Sorrentino Vito Simone",
    privacyEmail:  "info@kingdomink.it",          // ← aggiorna con email reale
    postalAddress: "Via Plava, 42/I – 10135 – Torino (TO)",
    vatNumber:     "13191030017",
    //reaNumber:     "[Inserire Numero REA]",
    //shareCapital:  "[Inserire Capitale Sociale]",
    pecEmail:      "kingdomink@pec.kingdomink.it",  // ← aggiorna con PEC reale
  },


  // ── THEME ────────────────────────────────────────────────────────────────────
  //
  // ┌──────────────────────────────────────────────────────────────────────────┐
  // │  TEMA SCURO — "Oro Reale"                                                │
  // │                                                                          │
  // │  Ispirato direttamente al logo: nero caldo, oro antico, crema soffusa.  │
  // │  La stessa energia del marchio — regale, barocca, artigianale.           │
  // │                                                                          │
  // │  ANCHOR             HEX        HSL               RUOLO                  │
  // │  Nero Caldo         #0A0804    30  30%  4%       sfondo pagina           │
  // │  Oro Antico         #C9A84C    42  55% 54%       primario / CTA / glow   │
  // │  Crema              #EDE5CC    42  40% 87%       testo principale        │
  // │  Cuoio Scuro        #130F08    35  25%  6%       card & superfici        │
  // │  Oro Profondo       #7A6020    42  58% 30%       ring / accento scuro    │
  // │                                                                          │
  // │  RATIONALE                                                               │
  // │  Il logo Kingdom Ink è puro barocco reale: fleur-de-lis, corona,        │
  // │  lettering ornato in oro champagne su fondo nero caldo. La palette       │
  // │  "Oro Reale" porta quel DNA dentro il sito — niente più freddo           │
  // │  platino, tutto gold-leaf caldo. Il ring oro scuro crea profondità       │
  // │  senza eccedere. La crema sostituisce il bianco freddo, mantenendo       │
  // │  la leggibilità ma aggiungendo calore e raffinatezza.                   │
  // │                                                                          │
  // │  FONT                                                                    │
  // │  Cinzel — romano imperiale a maiuscole, zero grazie ornamentali          │
  // │    superflue. Rispecchia la lettura del logo (KINGDOM INK tutto caps)    │
  // │    con la stessa autorevolezza lapidaria. Fa sentire il brand come       │
  // │    inciso su pietra — permanente, come un tatuaggio.                    │
  // │  DM Sans — corpo pulito e leggibile su sfondi scuri.                    │
  // └──────────────────────────────────────────────────────────────────────────┘
  //
  theme: {
    /**
     * ✦ FONT: Cinzel + DM Sans
     *
     *   Cinzel è un carattere tipografico basato sulle iscrizioni romane
     *   classiche — maiuscole costruite con proporzioni lapidarie. Rispecchia
     *   perfettamente il lettering del logo (KINGDOM INK tutto caps) e porta
     *   la stessa energia regale e permanente dentro i titoli del sito.
     *   Ha un'autorevolezza che Cormorant Garamond non può eguagliare per
     *   un brand così marcatamente "imperiale".
     *
     *   DM Sans resta per il body: geometrico, neutro, massima leggibilità
     *   su sfondo scuro. Crea un contrasto secco con la pompa di Cinzel.
     *
     *   Pesi caricati:
     *   - Cinzel 400 / 600 / 700 / 900 (display, heading, navbar)
     *   - DM Sans 300 / 400 / 500 / 700 (body, label, descrizioni)
     *
     *   ⚠️  Ricordati di aggiornare tailwind.config.ts:
     *       fontFamily: { heading: ["Cinzel", "serif"], body: ["DM Sans", "sans-serif"] }
     */
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;700&display=swap",

    fonts: {
      heading: "Cinzel",
      body:    "DM Sans",
    },

    /** Bordi netti — estetica precisa e lapidaria, come un'incisione */
    radius: "0px",

    colors: {
      // ── Sfondo — Nero Caldo #0A0804 ──────────────────────────────────────
      // Non è lo stesso nero freddo del tema precedente. Questo ha un
      // undertone caldo (legno bruciato, pelle vissuta) che fa respirare
      // l'oro senza farlo sembrare kitsch. Coerente con lo sfondo del logo.
      background:              "30 30% 4%",

      // ── Testo principale — Crema #EDE5CC ─────────────────────────────────
      // Panna calda invece del bianco freddo. Su nero caldo risulta naturale
      // come carta invecchiata — elegante, non asettica.
      foreground:              "42 40% 87%",

      // ── Card & popover — Cuoio Scuro #130F08 ─────────────────────────────
      // Superficie appena distinguibile dal background con lo stesso
      // undertone caldo. Profondità senza contrasto aggressivo.
      card:                    "35 25% 6%",
      cardForeground:          "42 40% 87%",
      popover:                 "35 20% 5%",
      popoverForeground:       "42 40% 87%",

      // ── Primario / CTA — Oro Antico #C9A84C ──────────────────────────────
      // Il cuore del rebrand. Questo è l'oro del logo — champagne caldo,
      // non giallo, non arancio. Su nero caldo brilla con dignità regale
      // senza mai urlare. Ogni CTA, ogni badge, ogni highlight usa questo.
      primary:                 "42 55% 54%",
      primaryForeground:       "30 30% 4%",

      // ── Secondario — Superficie calda scura ──────────────────────────────
      secondary:               "35 20% 10%",
      secondaryForeground:     "42 40% 87%",

      // ── Muted — Tono smorzato caldo ───────────────────────────────────────
      muted:                   "35 15% 9%",
      mutedForeground:         "42 20% 48%",

      // ── Accent — Stesso oro antico per coerenza ───────────────────────────
      accent:                  "42 55% 54%",
      accentForeground:        "30 30% 4%",

      // ── Bordi & input — Cuoio sottile ────────────────────────────────────
      border:                  "35 20% 14%",
      input:                   "35 15% 10%",

      // ── Focus ring — Oro Profondo #7A6020 ────────────────────────────────
      // Oro più scuro per il ring — crea gerarchia visiva dentro la stessa
      // famiglia cromatica. Nessuno sbalzo di temperatura, solo profondità.
      ring:                    "42 58% 30%",

      // ── Effetti & overlay ─────────────────────────────────────────────────
      gridPattern:             "35 20% 12%",
      primaryGlow:             "42 55% 54%",   // glow oro antico
      shadowLight:             "0 0% 0%",
      shadowDark:              "0 0% 0%",

      // ── Sidebar ───────────────────────────────────────────────────────────
      sidebarBackground:         "35 25% 5%",
      sidebarForeground:         "42 40% 87%",
      sidebarPrimary:            "42 55% 54%",
      sidebarPrimaryForeground:  "30 30% 4%",
      sidebarAccent:             "35 15% 9%",
      sidebarAccentForeground:   "42 40% 87%",
      sidebarBorder:             "35 20% 14%",
      sidebarRing:               "42 55% 54%",
    },
  },

  // ── INTERNAL / STORAGE ──────────────────────────────────────────────────────
  cookieConsentKey: "kingdom-ink-cookie-consent",
};

export type ShopConfig = typeof shopConfig;
export default shopConfig;