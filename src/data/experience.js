/**
 * Professional experience — source of truth: latest CV (public/resume.pdf).
 *
 * `highlights`        responsibilities and work described in the CV.
 * `reportedMetrics`   figures stated in the CV that have not been
 *                     independently verified. Rendered with a clear
 *                     "as reported" label — never as verified results.
 * Newest role first.
 */
export const experience = [
  {
    id: "kitchen-express",
    company: "Kitchen Express",
    role: "FullStack Developer",
    start: "2026-03",
    end: null,
    period: "Mar 2026 – Present",
    highlights: [
      "Develop Flutter Web applications for internal administration, e-commerce and ordering workflows, and customer-facing experiences.",
      "Deliver application features and integrate REST APIs.",
      "Develop backend API functionality using Node.js.",
      "Use GitHub Actions and Firebase Hosting for CI/CD and web deployment workflows.",
      "Participate in architecture and technical decisions and review code to support maintainability and feature quality.",
    ],
    reportedMetrics: [],
    tech: ["Flutter Web", "Dart", "Node.js", "REST APIs", "GitHub Actions", "Firebase Hosting"],
  },
  {
    id: "strategyfirst",
    company: "StrategyFirst Education Group",
    role: "Senior Mobile Developer",
    start: "2024-05",
    end: "2026-02",
    period: "May 2024 – Feb 2026",
    highlights: [
      "Developed and maintained educational applications for Android and iOS.",
      "Integrated Firebase for real-time synchronisation, push notifications and crash reporting.",
      "Applied test-driven development and Clean Architecture to support reliable, maintainable code.",
      "Published applications to Google Play and the Apple App Store.",
    ],
    reportedMetrics: ["100K+ combined downloads across the educational apps."],
    tech: ["Flutter", "Dart", "Firebase", "Clean Architecture", "TDD"],
  },
  {
    id: "spectrum-soft",
    company: "Spectrum Soft Technology",
    location: "Remote",
    role: "Junior Mobile Developer",
    start: "2023-07",
    end: "2024-02",
    period: "Jul 2023 – Feb 2024",
    highlights: [
      "Built banking authentication features using Flutter, Firebase Auth and Navis SDK.",
      "Implemented role-based access control.",
      "Integrated REST APIs with backend teams.",
      "Applied Riverpod state management and widget optimisation.",
    ],
    reportedMetrics: [
      "25% improvement in application load performance (stated in a prior CV).",
      "20% fewer UI-related bugs (stated in a prior CV).",
    ],
    tech: ["Flutter", "Dart", "Firebase Auth", "Navis SDK", "Riverpod", "REST APIs"],
  },
  {
    id: "amicus-realty",
    company: "Amicus Realty & Service Center",
    role: "Junior Mobile Developer",
    start: "2022-06",
    end: "2023-06",
    period: "Jun 2022 – Jun 2023",
    highlights: [
      "Built cross-platform real estate applications using Flutter, Dart and GetX.",
      "Integrated Google Maps SDK for property markers.",
      "Integrated GraphQL for application data fetching.",
      "Collaborated with design and backend teams through agile delivery cycles.",
    ],
    reportedMetrics: [],
    tech: ["Flutter", "Dart", "GetX", "Google Maps SDK", "GraphQL"],
  },
];
