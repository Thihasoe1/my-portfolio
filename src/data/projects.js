/**
 * Featured projects — kept to a small, curated set.
 *
 * Descriptions are factual summaries of each app's public App Store listing
 * (all four are published by "SFUx Online"; reviewed 2026-11-08). Unverified
 * superlatives and performance claims from the old portfolio were removed.
 * Tech stacks, screenshots and store links are unchanged; links return HTTP 200.
 *
 * Optional fields, rendered only when present — fill them with verified
 * information only, never estimates:
 *   contribution  string[]  your individual engineering contribution
 *   caseStudy     { problem, solution, challenges: string[], outcomes: string[] }
 *   demoLink      string    public demo or repository URL
 */
// Optimised WebP screenshots (640w + 1200w) generated from the originals.
import wasoLearn640 from "@/assets/projects/waso-learn-640.webp";
import wasoLearn1200 from "@/assets/projects/waso-learn-1200.webp";
import strategyFirstLearn640 from "@/assets/projects/strategyfirst-learn-640.webp";
import strategyFirstLearn1200 from "@/assets/projects/strategyfirst-learn-1200.webp";
import sfux640 from "@/assets/projects/sfux-640.webp";
import sfux1200 from "@/assets/projects/sfux-1200.webp";
import putet640 from "@/assets/projects/putet-comics-640.webp";
import putet1200 from "@/assets/projects/putet-comics-1200.webp";

/** Responsive image: `src` is the 1200w fallback; width/height are its intrinsic size. */
const screenshot = (small, large, width, height) => ({
  src: large,
  srcSet: `${small} 640w, ${large} 1200w`,
  width,
  height,
});

export const projects = [
  {
    id: "waso-learn",
    name: "Waso Learn KG-12",
    description:
      "A mobile learning app for Basic Education High School students in Myanmar, with lessons from kindergarten to Grade 12 that support curriculum studies.",
    tech: ["Dart", "Flutter", "Firebase", "Backend API"],
    image: screenshot(wasoLearn640, wasoLearn1200, 1200, 675),
    links: {
      appStore: "https://apps.apple.com/th/app/waso-learn-kg-12/id1531073432",
      googlePlay: "https://play.google.com/store/apps/details?id=com.sfu.waso_learn&pcampaignid=web_share",
    },
  },
  {
    id: "strategyfirst-learn",
    name: "StrategyFirst Learn",
    description:
      "The student app for Strategy First International College in Myanmar, which offers MBA programmes, bachelor's degrees in business and IT, and certificate and diploma programmes.",
    tech: ["Dart", "Firebase", "Flutter", "REST API"],
    image: screenshot(strategyFirstLearn640, strategyFirstLearn1200, 1200, 821),
    links: {
      appStore: "https://apps.apple.com/us/app/strategyfirst-learn/id6444846287",
      googlePlay: "https://play.google.com/store/apps/details?id=com.sfu.studentapp&pcampaignid=web_share",
    },
  },
  {
    id: "sfux",
    name: "SFUx",
    subtitle: "StrategyFirst Extension",
    description:
      "An online learning app where learners attend virtual classes, work through course materials and take a quiz after each lesson, earning a digital certificate when they pass.",
    tech: ["Dart", "Flutter", "Firebase", "REST API"],
    image: screenshot(sfux640, sfux1200, 1200, 904),
    links: {
      appStore: "https://apps.apple.com/th/app/sfux/id1506353798",
      googlePlay: "https://play.google.com/store/apps/details?id=com.edu.sfuxlearn&pcampaignid=web_share",
    },
  },
  {
    id: "putet-comics",
    name: "Putet Comics",
    description:
      "A comic reader for Putet Comics, a Myanmar comics publisher. Readers can download comics from current weekly journals and the classics catalogue, including free Buddhist comics.",
    tech: ["Dart", "Flutter", "Firebase", "REST API"],
    image: screenshot(putet640, putet1200, 1200, 904),
    links: {
      appStore: "https://apps.apple.com/us/app/putet-comics-2-0/id1559173511",
      googlePlay: "https://play.google.com/store/apps/details?id=com.putet.comic&pcampaignid=web_share",
    },
  },
];
