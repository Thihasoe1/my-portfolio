/**
 * Featured projects — kept to a small, curated set.
 *
 * Descriptions, tech stacks, screenshots and store links are carried over
 * unchanged from the previous portfolio; store links were checked (HTTP 200).
 *
 * Optional fields, rendered only when present — fill them with verified
 * information only, never estimates:
 *   contribution  string[]  your individual engineering contribution
 *   caseStudy     { problem, solution, challenges: string[], outcomes: string[] }
 *   demoLink      string    public demo or repository URL
 */
import wasoLearn from "@/assets/waso_learn.webp";
import strategyFirstLearn from "@/assets/strategy_first.png";
import sfux from "@/assets/sfux.png";
import putet from "@/assets/putet.png";

export const projects = [
  {
    id: "waso-learn",
    name: "Waso Learn KG-12",
    description:
      "A mobile-first learning app bridging educational gaps for BEHS students across Myanmar. Features offline-first functionality, low-data optimization, and interactive quizzes for K-12 students.",
    tech: ["Dart", "Flutter", "Firebase", "Backend API"],
    image: { src: wasoLearn, width: 1920, height: 1080 },
    links: {
      appStore: "https://apps.apple.com/th/app/waso-learn-kg-12/id1531073432",
      googlePlay: "https://play.google.com/store/apps/details?id=com.sfu.waso_learn&pcampaignid=web_share",
    },
  },
  {
    id: "strategyfirst-learn",
    name: "StrategyFirst Learn",
    description:
      "A premium educational platform for Strategy First International College (Myanmar), providing mobile access to MBA programs, business degrees, and professional diplomas.",
    tech: ["Dart", "Firebase", "Flutter", "REST API"],
    image: { src: strategyFirstLearn, width: 2370, height: 1622 },
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
      "SFUx is an online learning application offering certified programs in modern business management, digital marketing, and tech, optimized for seamless video streaming.",
    tech: ["Dart", "Flutter", "Firebase", "REST API"],
    image: { src: sfux, width: 2352, height: 1772 },
    links: {
      appStore: "https://apps.apple.com/th/app/sfux/id1506353798",
      googlePlay: "https://play.google.com/store/apps/details?id=com.edu.sfuxlearn&pcampaignid=web_share",
    },
  },
  {
    id: "putet-comics",
    name: "Putet Comics",
    description:
      "A digital comic reader for Myanmar's largest comic publisher. Features a vast library of classics, modern releases, and offline downloading capabilities.",
    tech: ["Dart", "Flutter", "Firebase", "REST API"],
    image: { src: putet, width: 2352, height: 1772 },
    links: {
      appStore: "https://apps.apple.com/us/app/putet-comics-2-0/id1559173511",
      googlePlay: "https://play.google.com/store/apps/details?id=com.putet.comic&pcampaignid=web_share",
    },
  },
];
