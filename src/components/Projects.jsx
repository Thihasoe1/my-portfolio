import { FaApple, FaGooglePlay } from "react-icons/fa";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Tag from "@/components/ui/Tag";
import wasolearn from "@/assets/waso_learn.webp";
import sfulearn from "@/assets/strategy_first.png";
import sfux from "@/assets/sfux.png";
import putet from "@/assets/putet.png";

const projects = [
  {
    id: 1,
    title: "Waso Learn KG-12",
    description:
      "A mobile-first learning app bridging educational gaps for BEHS students across Myanmar. Features offline-first functionality, low-data optimization, and interactive quizzes for K-12 students.",
    tech: ["Dart", "Flutter", "Firebase", "Backend API"],
    image: wasolearn,
    iosLink: "https://apps.apple.com/th/app/waso-learn-kg-12/id1531073432",
    androidLink: "https://play.google.com/store/apps/details?id=com.sfu.waso_learn&pcampaignid=web_share",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    title: "StrategyFirst Learn",
    description:
      "A premium educational platform for Strategy First International College (Myanmar), providing mobile access to MBA programs, business degrees, and professional diplomas.",
    tech: ["Dart", "Firebase", "Flutter", "REST API"],
    image: sfulearn,
    iosLink: "https://apps.apple.com/us/app/strategyfirst-learn/id6444846287",
    androidLink: "https://play.google.com/store/apps/details?id=com.sfu.studentapp&pcampaignid=web_share",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 3,
    title: "StrategyFirst Extension",
    description:
      "SFUx is an online learning application offering certified programs in modern business management, digital marketing, and tech, optimized for seamless video streaming.",
    tech: ["Dart", "Flutter", "Firebase", "REST API"],
    image: sfux,
    iosLink: "https://apps.apple.com/th/app/sfux/id1506353798",
    androidLink: "https://play.google.com/store/apps/details?id=com.edu.sfuxlearn&pcampaignid=web_share",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 4,
    title: "Putet Comics",
    description:
      "A digital comic reader for Myanmar's largest comic publisher. Features a vast library of classics, modern releases, and offline downloading capabilities.",
    tech: ["Dart", "Flutter", "Firebase", "REST API"],
    image: putet,
    iosLink: "https://apps.apple.com/us/app/putet-comics-2-0/id1559173511",
    androidLink: "https://play.google.com/store/apps/details?id=com.putet.comic&pcampaignid=web_share",
    color: "from-orange-500 to-red-600",
  }
];

// Phase C: visual restyle only. Project content and links are unchanged;
// data moves to src/data/projects.js in Phase D.
const frameTones = ["bg-lime", "bg-lavender", "bg-coral", "bg-surface"];

const Projects = () => {
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-20 sm:py-28 border-b-3 border-ink bg-surface">
      <Container>
        <SectionHeader
          id="projects-title"
          eyebrow="Projects"
          tone="coral"
          title="Featured projects"
          description="Selected Flutter applications published on the App Store and Google Play."
        />

        <ul className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {projects.map((project, index) => (
            <Card
              as="li"
              key={project.id}
              padding="none"
              interactive
              className="flex flex-col overflow-hidden"
            >
              <article aria-labelledby={`project-${project.id}-title`} className="flex flex-1 flex-col">
                <div className={`p-4 sm:p-5 border-b-3 border-ink ${frameTones[index % frameTones.length]}`}>
                  <div className="overflow-hidden border-3 border-ink rounded-brutal bg-surface">
                    <img
                      src={project.image}
                      alt={`${project.title} app screenshots`}
                      loading="lazy"
                      decoding="async"
                      className="block w-full aspect-[16/10] object-cover object-top"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 id={`project-${project.id}-title`} className="font-display text-h3 font-bold">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-ink-muted">{project.description}</p>

                  <ul aria-label="Technology stack" className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Tag as="li" key={tech} size="sm">
                        {tech}
                      </Tag>
                    ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t-2 border-ink flex flex-col gap-3 sm:flex-row">
                    {project.iosLink && (
                      <Button href={project.iosLink} external variant="secondary" leftIcon={FaApple} className="flex-1">
                        App Store<span className="sr-only">: {project.title}</span>
                      </Button>
                    )}
                    {project.androidLink && (
                      <Button href={project.androidLink} external variant="primary" leftIcon={FaGooglePlay} className="flex-1">
                        Google Play<span className="sr-only">: {project.title}</span>
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            </Card>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Projects;
