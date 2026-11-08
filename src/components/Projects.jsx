import { ArrowUpRight, ChevronDown } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import SectionHeader from "@/components/ui/SectionHeader";
import Tag from "@/components/ui/Tag";
import { projects } from "@/data/projects";

const frameTones = ["bg-lime", "bg-lavender", "bg-coral", "bg-surface"];

function BulletList({ items }) {
  return (
    <ul className="mt-2 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed">
          <span aria-hidden="true" className="mt-2.5 size-2 shrink-0 bg-ink" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Expandable technical case study. Native <details>/<summary> gives keyboard
 * and screen-reader support for free. Only rendered when verified details
 * exist in src/data/projects.js.
 */
function CaseStudy({ project }) {
  const { contribution, caseStudy } = project;
  if (!contribution?.length && !caseStudy) return null;

  return (
    <details className="group/details mt-6 border-2 border-ink rounded-brutal-sm bg-paper">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 font-display font-bold [&::-webkit-details-marker]:hidden">
        Technical case study
        <Icon icon={ChevronDown} size={18} strokeWidth={2.5} className="transition-transform duration-150 group-open/details:rotate-180" />
      </summary>
      <div className="space-y-5 border-t-2 border-ink px-4 py-4">
        {caseStudy?.problem && (
          <div>
            <h4 className="font-display font-bold">Problem</h4>
            <p className="mt-1 leading-relaxed text-ink-muted">{caseStudy.problem}</p>
          </div>
        )}
        {caseStudy?.solution && (
          <div>
            <h4 className="font-display font-bold">Solution</h4>
            <p className="mt-1 leading-relaxed text-ink-muted">{caseStudy.solution}</p>
          </div>
        )}
        {contribution?.length > 0 && (
          <div>
            <h4 className="font-display font-bold">My contribution</h4>
            <BulletList items={contribution} />
          </div>
        )}
        {caseStudy?.challenges?.length > 0 && (
          <div>
            <h4 className="font-display font-bold">Technical challenges</h4>
            <BulletList items={caseStudy.challenges} />
          </div>
        )}
        {caseStudy?.outcomes?.length > 0 && (
          <div>
            <h4 className="font-display font-bold">Outcomes</h4>
            <BulletList items={caseStudy.outcomes} />
          </div>
        )}
      </div>
    </details>
  );
}

function ProjectCard({ project, index }) {
  const titleId = `project-${project.id}-title`;
  const { appStore, googlePlay } = project.links;

  return (
    <Card as="li" padding="none" interactive className="flex flex-col overflow-hidden">
      <article aria-labelledby={titleId} className="flex flex-1 flex-col">
        <div className={`p-4 sm:p-5 border-b-3 border-ink ${frameTones[index % frameTones.length]}`}>
          <div className="overflow-hidden border-3 border-ink rounded-brutal bg-surface">
            <img
              src={project.image.src}
              width={project.image.width}
              height={project.image.height}
              alt={`${project.name} app screenshots`}
              loading="lazy"
              decoding="async"
              className="block w-full aspect-[16/10] object-cover object-top"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <h3 id={titleId} className="font-display text-h3 font-bold">
            {project.name}
          </h3>
          {project.subtitle && <p className="mt-1 font-semibold text-ink-subtle">{project.subtitle}</p>}
          <p className="mt-3 flex-1 leading-relaxed text-ink-muted">{project.description}</p>

          <ul aria-label="Technology stack" className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Tag as="li" key={tech} size="sm">
                {tech}
              </Tag>
            ))}
          </ul>

          <CaseStudy project={project} />

          <div className="mt-6 pt-6 border-t-2 border-ink flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {appStore && (
              <Button href={appStore} external variant="secondary" leftIcon={FaApple} className="flex-1">
                App Store<span className="sr-only">: {project.name}</span>
              </Button>
            )}
            {googlePlay && (
              <Button href={googlePlay} external leftIcon={FaGooglePlay} className="flex-1">
                Google Play<span className="sr-only">: {project.name}</span>
              </Button>
            )}
            {project.demoLink && (
              <Button href={project.demoLink} external variant="lavender" rightIcon={ArrowUpRight} className="flex-1">
                Live demo<span className="sr-only">: {project.name}</span>
              </Button>
            )}
          </div>
        </div>
      </article>
    </Card>
  );
}

export default function Projects() {
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
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
