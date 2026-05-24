export type ProjectCategory =
  | "IT"
  | "Data Analysis"
  | "Cloud"
  | "Web Development"
  | "Automation"
  | "Creative Tech"
  | "Business Technology";

export interface ProjectBrand {
  /** simple-icons slug, e.g. "googlecloud", "microsoftexcel" */
  iconSlug?: string;
  /** custom wordmark (overrides icon) */
  wordmark?: string;
  /** tile background color (hex without #) */
  bg: string;
  /** icon/wordmark color (hex without #) */
  fg: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  status: string;
  date?: string;
  featured?: boolean;
  shortDescription: string;
  longDescription: string;
  techStack: string[];
  image?: string;
  brand?: ProjectBrand;
  githubUrl?: string;
  liveUrl?: string;
  problem?: string;
  whatIBuilt?: string;
  whatILearned?: string;
}

export const projects: Project[] = [
  {
    id: "krl-dj",
    title: "KRL — DJ Portfolio Site",
    category: "Web Development",
    status: "Live",
    featured: true,
    shortDescription:
      "A live portfolio site for my DJ project KRL — mixes, visuals, booking, and event archive.",
    longDescription:
      "KRL is my DJ alias in Grand Rapids. The site acts as a single home for mixes, upcoming dates, past events, visual loops, and booking. It is designed to feel like a venue identity rather than a generic portfolio — heavy type, dark palette, and motion that matches the music.",
    techStack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    brand: { wordmark: "KRL", bg: "0a0a0a", fg: "f5f3ee" },
    liveUrl: "https://karlkrusel.github.io/KRL-DJ/",
    problem:
      "I needed one clean place to send venues, promoters, and listeners instead of scattering links across Instagram and SoundCloud.",
    whatIBuilt:
      "A custom site hosted on GitHub Pages with sections for mixes, visuals, booking, and upcoming dates — styled to match the KRL identity.",
    whatILearned:
      "How small typographic and motion decisions completely change the perceived professionalism of a creative brand.",
  },
  {
    id: "mixmate",
    title: "MixMate V2 — DJ Track Analyzer",
    category: "Cloud",
    status: "Deployed",
    featured: true,
    shortDescription:
      "Audio analysis tool built on Google Cloud Run. The same architecture pattern running behind every modern SaaS backend: upload triggers processing, results land in a database, an event fires downstream.",
    longDescription:
      "MixMate V2 is a Flask web app running on Google Cloud Run. You upload a track in the browser and it returns BPM, musical key, and a genre label. I skipped librosa and wrote the audio math myself: BPM estimation uses autocorrelation via FFT on a downsampled amplitude envelope, key detection uses pitch class energy from a windowed FFT across the frequency range, and genre is determined by BPM rules. After analysis, the file goes to Cloud Storage, results get written to Firestore, and a Pub/Sub message fires as an event log for each track. The whole thing runs in a Docker container deployed on Cloud Run with 2GB memory.",
    techStack: ["Python", "Flask", "NumPy", "SoundFile", "Cloud Run", "Cloud Storage", "Firestore", "Pub/Sub", "Docker"],
    brand: { iconSlug: "googlecloud", bg: "0f1d3a", fg: "ffffff" },
    githubUrl: "https://github.com/KarlKrusel/mixmate",
    problem:
      "DJs need a fast way to check BPM and key without loading tracks into Rekordbox or a DAW.",
    whatIBuilt:
      "A Flask API containerized with Docker and deployed on Cloud Run. It runs custom BPM estimation using autocorrelation and key detection using pitch class FFT, then stores files in Cloud Storage, logs results to Firestore, and publishes a Pub/Sub event per track.",
    whatILearned:
      "How to write lightweight audio signal processing without heavy libraries. How to connect four Google Cloud services in a single request cycle. How to containerize a Python app and deploy it on Cloud Run.",
  },
  {
    id: "dj-visuals",
    title: "DJ Visual Loop Generator",
    category: "Creative Tech",
    status: "Active",
    featured: true,
    shortDescription:
      "Seamless 30-second visual loops for live DJ sets and venue screens — scripted in Python, finished in After Effects.",
    longDescription:
      "Code-driven workflow for creating seamless looping visuals tuned to a venue, theme, or set. The goal is to keep the room alive without anyone running visuals manually.",
    techStack: ["Python", "After Effects", "Rendering", "Motion design"],
    brand: { iconSlug: "adobeaftereffects", bg: "1a0033", fg: "d8a8ff" },
    problem:
      "Most venues do not have someone running visuals during a DJ set, so screens end up empty or repetitive.",
    whatIBuilt:
      "A workflow that combines scripted parameters with After Effects compositions to render seamless 30-second loops tailored to a venue.",
    whatILearned:
      "How to balance creative direction with technical automation, and how small details change the feel of a room.",
  },
  {
    id: "brown-mailmerge",
    title: "Brown Insurance Mail Merge",
    category: "Business Technology",
    status: "Completed",
    shortDescription:
      "Walked into a small insurance firm, identified a process that was still being done by hand, and automated it. Saved real staff hours every week.",
    longDescription:
      "Client letters at Brown Insurance were being typed and formatted individually by hand. I built a structured Excel data source paired with Word Mail Merge templates that produce print-ready letters aligned to windowed envelopes. The same skill that IT consultants charge $150/hr to apply — find the manual process that shouldn't be manual, and fix it with tools already in the building.",
    techStack: ["Excel", "Word", "Mail Merge", "Microsoft 365"],
    brand: { iconSlug: "microsoftexcel", bg: "0f5132", fg: "ffffff" },
    problem:
      "Client letters were being typed and formatted by hand, which was slow and easy to mess up.",
    whatIBuilt:
      "A structured client spreadsheet paired with Word templates that produce print-ready letters aligned for windowed envelopes.",
    whatILearned:
      "How small process changes inside Office tools can save real hours every week for a small business.",
  },
  {
    id: "traffic-crash",
    title: "Traffic Crash Data Analysis",
    category: "Data Analysis",
    status: "Class Project",
    shortDescription:
      "Python analysis of traffic crash data — cleaning, charting, and pattern exploration across time and cause.",
    longDescription:
      "Cleaned and explored crash data with Pandas and Matplotlib to surface patterns in timing, location, injury severity, and cause.",
    techStack: ["Python", "Pandas", "Matplotlib", "Excel"],
    brand: { iconSlug: "pandas", bg: "150458", fg: "ffffff" },
  },
  {
    id: "database-design",
    title: "Database Design Projects",
    category: "IT",
    status: "Class Projects",
    shortDescription:
      "ER diagrams, keys, relationships, normalization, and SQL queries across coursework.",
    longDescription:
      "Hands-on database design work covering primary and foreign keys, one-to-many and many-to-many relationships, normalization, and query writing.",
    techStack: ["SQL", "MySQL", "ER diagrams", "Normalization"],
    brand: { iconSlug: "mysql", bg: "00546b", fg: "ffffff" },
  },
  {
    id: "pc-building",
    title: "Custom PC Builds & IT Support",
    category: "IT",
    status: "Past",
    shortDescription:
      "Built and sold custom PCs while handling hardware, software, and connectivity issues.",
    longDescription:
      "Part selection, assembly, OS install, performance testing, and hands-on troubleshooting for clients.",
    techStack: ["Windows", "PC hardware", "Troubleshooting", "Networking"],
    brand: { wordmark: "PC", bg: "1a1a1a", fg: "f5f3ee" },
  },
  {
    id: "portfolio-site",
    title: "This Portfolio",
    category: "Web Development",
    status: "Live",
    shortDescription:
      "Personal portfolio site built with React, TypeScript, and Tailwind. Deployed on GitHub Pages via GitHub Actions.",
    longDescription:
      "Built from a TanStack Start SSR template and converted to a static SPA for GitHub Pages hosting. Covers projects, experience, skills, and a contact form. Deployed automatically on every push to main via a GitHub Actions workflow.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "TanStack Router", "Vite", "GitHub Actions"],
    brand: { iconSlug: "react", bg: "0a0a0a", fg: "61dafb" },
    githubUrl: "https://github.com/KarlKrusel/portfolio",
    liveUrl: "https://karlkrusel.github.io/portfolio/",
  },
];

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "IT",
  "Data Analysis",
  "Cloud",
  "Web Development",
  "Automation",
  "Creative Tech",
  "Business Technology",
];
