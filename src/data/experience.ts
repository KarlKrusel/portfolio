export interface Experience {
  role: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    role: "Freelance DJ",
    company: "DJ KRL",
    location: "Grand Rapids, MI",
    dates: "December 2025 — Current 2026",
    bullets: [
      "Freelance DJ for bars and venues in Grand Rapids, earning repeat bookings.",
      "Communicate directly with venue owners and managers to coordinate events and expectations.",
      "Promote sets on social media to support turnout and build a local brand.",
      "Adapt sets in real time to match the crowd and create the right atmosphere.",
      "Create custom visual content and looping event visuals for venue screens and branding.",
    ],
  },
  {
    role: "IT Internship",
    company: "Brown Insurance Services",
    location: "Traverse City, MI",
    dates: "May — August 2025",
    bullets: [
      "Built and managed the company's social media presence to increase local digital visibility.",
      "Designed and implemented a Microsoft Office bulk mailing system using Excel and Word mail merge for client communications.",
      "Structured client data in Excel to improve organization, tracking, and print accuracy.",
      "Introduced shared Microsoft 365 systems for collaborative file management.",
      "Assisted in developing targeted outreach strategies for Medicare and ACA clients.",
      "Used AI-assisted content workflows to improve communication and efficiency.",
    ],
  },
  {
    role: "Server",
    company: "Knot Just A Bar",
    location: "Omena, MI",
    dates: "May — August 2022, 2023, and 2024",
    bullets: [
      "Worked in a fast-paced customer service environment while multitasking and using automated ordering systems.",
      "Assisted with troubleshooting point-of-sale software and basic connectivity issues.",
    ],
  },
  {
    role: "PC Builder",
    company: "IT Entrepreneur",
    location: "Self-employed",
    dates: "2021 — 2023",
    bullets: [
      "Built and sold custom PCs.",
      "Handled part selection, system assembly, software setup, and basic IT support.",
      "Helped with hardware, software, and connectivity troubleshooting.",
    ],
  },
  {
    role: "Counselor",
    company: "Omena Traverse Yacht Club",
    location: "Omena, MI",
    dates: "July 2018 — 2024",
    bullets: [
      "Summer youth counselor responsible for safety, organization, sailing instruction, tennis instruction, and daily group management.",
    ],
  },
  {
    role: "General Laborer",
    company: "2XT Services",
    location: "Omena, MI",
    dates: "May — August 2021",
    bullets: ["Worked on residential construction and landscaping projects."],
  },
];
