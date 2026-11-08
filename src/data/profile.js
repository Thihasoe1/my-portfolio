/**
 * Personal profile — source of truth: latest Senior Mobile Developer CV
 * (public/resume.pdf). Do not add claims that are not in the CV.
 */

// "/" in dev; becomes the GitHub Pages sub-path once `base` is updated.
const BASE = import.meta.env.BASE_URL;

export const profile = {
  name: "Saw Thi Ha Soe",
  title: "Senior Mobile Developer",
  location: "Bangkok, Thailand",
  yearsOfExperience: "4+",
  summary:
    "Flutter-focused developer with 4+ years of professional experience building Android, iOS and web applications across education, finance, real estate and commerce.",
  focusAreas: [
    "Flutter / Dart",
    "Mobile Architecture",
    "Flutter Web",
    "Firebase",
    "REST / GraphQL",
    "Node.js",
    "CI/CD",
  ],
  platforms: ["Android", "iOS", "Web"],
  languages: ["Myanmar", "English"],
  email: "sawthihasoe.mobiledev@gmail.com",
  resume: {
    // File verified present at public/resume.pdf. Set to false to hide the CTA.
    available: true,
    href: `${BASE}resume.pdf`,
    downloadName: "Saw-Thi-Ha-Soe-Senior-Mobile-Developer-Resume.pdf",
  },
};

export const education = [
  {
    degree: "Bachelor of Computer Science (B.C.Sc)",
    institution: "University of Computer Studies, Hpa-an",
    period: "2015 – 2020",
  },
];

/**
 * External profiles. `verified` marks links confirmed by the owner.
 */
export const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    handle: "Thihasoe1",
    href: "https://github.com/Thihasoe1",
    verified: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "saw-thi-ha-soe-812834368",
    href: "https://linkedin.com/in/saw-thi-ha-soe-812834368",
    verified: true, // confirmed by owner (LinkedIn answers bots with HTTP 999)
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
