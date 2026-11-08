import { GraduationCap, Languages, Layers, MapPin, Rocket, TestTube, Users } from "lucide-react";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import SectionHeader from "@/components/ui/SectionHeader";
import { education, profile } from "@/data/profile";

// Each principle is grounded in practices listed in the CV.
const principles = [
  {
    icon: Layers,
    title: "Architecture first",
    tone: "lime",
    body: "Clean Architecture boundaries with Riverpod, BLoC or GetX for state management.",
  },
  {
    icon: TestTube,
    title: "Tested by default",
    tone: "lavender",
    body: "Test-driven development with unit and integration tests to support reliable, maintainable code.",
  },
  {
    icon: Rocket,
    title: "Built to ship",
    tone: "coral",
    body: "Production delivery to Google Play and the App Store, and CI/CD with GitHub Actions and Firebase Hosting for the web.",
  },
  {
    icon: Users,
    title: "Team-minded",
    tone: "surface",
    body: "Code reviews, architecture and technical decisions, and close collaboration with design and backend teams.",
  },
];

export default function About() {
  const facts = [
    { icon: MapPin, label: "Based in", value: profile.location },
    {
      icon: GraduationCap,
      label: "Education",
      value: `${education[0].degree}, ${education[0].institution} (${education[0].period})`,
    },
    { icon: Languages, label: "Languages", value: profile.languages.join(", ") },
  ];

  return (
    <section id="about" aria-labelledby="about-title" className="py-20 sm:py-28 border-b-3 border-ink bg-surface">
      <Container>
        <SectionHeader id="about-title" eyebrow="About" title="Mobile at the core, full-stack in practice." />

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-5 text-lg leading-relaxed text-ink-muted">
            <p>
              I&apos;m a Flutter-focused developer with{" "}
              <strong className="font-semibold text-ink">{profile.yearsOfExperience} years</strong> of
              professional experience. I&apos;ve built and published Android and iOS applications for
              education, finance and real estate, working across the full lifecycle from feature
              development to store release.
            </p>
            <p>
              Today I develop Flutter Web applications and Node.js APIs for commerce, covering internal
              administration, ordering workflows and customer-facing experiences. I take part in
              architecture decisions and code reviews, and work with CI/CD pipelines built on GitHub
              Actions and Firebase Hosting.
            </p>
            <p>
              Across mobile and web, I focus on maintainable applications: clear architecture, predictable
              state, well-integrated Firebase, REST and GraphQL backends, and tests that make change safe.
            </p>
          </div>

          <dl className="lg:col-span-5 grid gap-4 content-start">
            {facts.map((fact) => (
              <Card key={fact.label} tone="paper" shadow="sm" padding="sm" className="flex gap-4 items-start">
                <span className="grid place-items-center size-10 shrink-0 bg-lime border-2 border-ink rounded-brutal-sm">
                  <Icon icon={fact.icon} size={20} strokeWidth={2.25} />
                </span>
                <div>
                  <dt className="font-display text-sm font-bold uppercase tracking-wider text-ink-subtle">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 font-medium text-ink">{fact.value}</dd>
                </div>
              </Card>
            ))}
          </dl>
        </div>

        <h3 className="sr-only">How I work</h3>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item) => (
            <Card as="li" key={item.title} tone={item.tone}>
              <Icon icon={item.icon} size={28} strokeWidth={2.25} />
              <h4 className="mt-4 font-display text-xl font-bold">{item.title}</h4>
              <p className="mt-2 leading-relaxed">{item.body}</p>
            </Card>
          ))}
        </ul>
      </Container>
    </section>
  );
}
