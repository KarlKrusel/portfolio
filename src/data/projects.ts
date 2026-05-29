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
  downloadUrl?: string;
  images?: string[];
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
      "Code-driven workflow for creating seamless looping visuals tuned to a venue, theme, or set. The goal is to keep the room alive without anyone running visuals manually. This project remains private — it's part of the KRL brand and kept off public repos intentionally.",
    techStack: ["Python", "After Effects", "Rendering", "Motion design"],
    images: ["dj-visual-icon.png"],
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
    images: ["mail-merge-icon.png"],
    problem:
      "Client letters were being typed and formatted by hand, which was slow and easy to mess up.",
    whatIBuilt:
      "A structured client spreadsheet paired with Word templates that produce print-ready letters aligned for windowed envelopes.",
    whatILearned:
      "How small process changes inside Office tools can save real hours every week for a small business.",
  },
  {
    id: "vuln-assessment",
    title: "CIS 458 Vulnerability Assessment",
    category: "IT",
    status: "Class Project",
    date: "April 2026",
    shortDescription:
      "Assessed an intentionally misconfigured Ubuntu VM. Found four vulnerabilities: open firewall, exposed credential files with no auth, SQL injection, and a CVSS 10.0 FTP exploit already in Metasploit.",
    longDescription:
      "Given a Ubuntu 20.04 VM set up to replicate a system that had never had security work done on it. Started with nmap to enumerate open ports and version numbers, then ran a Lynis audit for system-level issues. Found four documented vulnerabilities: UFW was completely off leaving every service exposed, a plain HTTP file server on port 9090 was serving employee password hashes and 47 customer records (SSNs, card numbers, full PII) with zero authentication, the XVWA web app had unsanitized user input going directly into SQL queries, and the FTP server was running ProFTPD 1.3.0a — a version from 2007 with a CVSS 10.0 stack buffer overflow already packaged in Metasploit. Remediated the firewall with UFW deny-by-default rules and moved the credential files off the public server. The missing firewall was the biggest issue: with it off, every other vulnerability was directly reachable from the network with nothing in between.",
    techStack: ["nmap", "Lynis", "Ubuntu", "UFW", "SQL Injection", "ProFTPD", "CVE Research", "OWASP"],
    images: ["vuln-icon.png"],
    brand: { wordmark: "CIS", bg: "0d1117", fg: "f0f6fc" },
    downloadUrl: "CIS458-Vulnerability-Assessment-Karl-Krusel.docx",
    problem:
      "A VM running several services had never had any security hardening applied. The goal was to find the vulnerabilities, document them with proper classification, and fix at least two.",
    whatIBuilt:
      "A full vulnerability assessment covering four findings: no firewall (CWE-1008), exposed credentials and PII on an unauthenticated file server (CWE-200), SQL injection in a web app (CWE-89, OWASP A1:2017), and an outdated FTP server with a public CVSS 10.0 exploit (CVE-2010-4221). Included remediation steps and verified each fix worked.",
    whatILearned:
      "How much a missing firewall compounds every other vulnerability. With UFW off, all services were directly reachable with nothing between an attacker and the data. Most of the fixes were simple — one command for the firewall, a file move for the exposed records. The harder part is knowing where to look and how to document findings clearly enough that someone else can act on them.",
  },
  {
    id: "gsr-monitor",
    title: "GSR Stress Monitor",
    category: "Creative Tech",
    status: "Class Project",
    date: "April 2026",
    shortDescription:
      "Browser-based stress monitor using a GSR sensor and an Adafruit Circuit Playground. Real hardware, real data — proved a measurable stress spike at the exact moment a jumpscare fired.",
    longDescription:
      "Built for CIS 373. A GSR sensor wired to an Adafruit Circuit Playground Bluefruit reads skin conductance from finger electrodes 10 times a second. CircuitPython firmware on the board applies a 30-sample rolling average to cut noise, then streams structured data over USB serial as GSR:{value},T:{time}. A Chrome page connects directly to the serial port using the Web Serial API — no libraries, plain JavaScript — and renders a live graph with a 15-second baseline benchmark and a noise floor band. To get a real, controlled stress response, I embedded the classic Scary Maze Game into the interface. When the jumpscare fires, it drops a marker on the graph at that exact moment. The spike lands well outside the noise band. It is the same basic principle a polygraph uses.",
    techStack: ["CircuitPython", "Web Serial API", "JavaScript", "Adafruit Circuit Playground", "GSR Sensor"],
    image: "gsr/ui.png",
    images: ["gsr/ui.png", "gsr/results.png", "gsr/maze.png", "gsr/sensor.jpg"],
    brand: { wordmark: "GSR", bg: "0a1628", fg: "4fc3f7" },
    problem:
      "Needed a controlled way to produce and measure a real physiological stress response — not simulated data.",
    whatIBuilt:
      "A two-part system: CircuitPython firmware that reads the GSR sensor, smooths the signal with a rolling average, and streams data over USB serial — paired with a plain JavaScript Chrome interface using the Web Serial API that graphs the live signal, sets a baseline, and marks exactly when the jumpscare triggers.",
    whatILearned:
      "How to get hardware and a browser talking directly with no middleware. The Web Serial API is more capable than most people realize. Rolling averages are essential for noisy analog sensor data — raw readings are unusable without smoothing.",
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
    id: "hypeddit-downloader",
    title: "HypedditDownloader v3",
    category: "Automation",
    status: "Shipped",
    shortDescription:
      "Standalone Windows app that downloads and converts Hypeddit tracks. Single .exe — no install, no Node required. Go GUI shell wraps a bundled Node.js engine via caxa.",
    longDescription:
      "A single .exe for downloading and converting audio from Hypeddit — the music distribution platform used by labels, producers, and promoters. The architecture is two-layer: a native Windows GUI written in Go using the walk framework handles buttons, dialogs, and status feedback. When the user triggers a download, Go spawns an embedded Node.js process that hits the Hypeddit API, resolves audio URLs, and writes files to disk. caxa bundles the entire Node.js runtime and npm dependency tree directly into the binary — zero installation on the target machine. ffmpeg handles MP3/MP4 conversion. Version 3 reflects iterative improvement over multiple shipped releases.",
    techStack: ["Go", "Node.js", "JavaScript", "caxa", "ffmpeg", "walk", "Windows GUI"],
    brand: { wordmark: "v3", bg: "1a0a2e", fg: "b47fff" },
    problem:
      "Hypeddit offers no bulk download option through its web interface. Music fans, producers, and DJs needed a way to pull tracks locally — with format conversion — without touching a terminal or installing anything.",
    whatIBuilt:
      "A standalone Windows executable combining a Go GUI shell (walk framework) with a caxa-bundled Node.js downloader. The GUI handles user input, file dialogs, and progress feedback. Go spawns the Node.js engine which hits the Hypeddit API, resolves audio URLs, and writes to disk. ffmpeg converts output to MP3 or MP4. Supports single tracks, playlists, and batch downloads.",
    whatILearned:
      "How to architect polyglot applications — combining Go and Node.js inside a single deployable binary. How caxa solves the Node.js distribution problem cleanly. That a native Windows GUI via walk gives a lighter, faster feel than Electron for a utility app, even when the bundled runtime is large.",
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
