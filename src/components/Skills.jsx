import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Tag from "@/components/ui/Tag";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-20 sm:py-28 border-b-3 border-ink">
      <Container>
        <SectionHeader
          id="skills-title"
          eyebrow="Skills"
          tone="lime"
          title="Technical skills"
          description="Tools and practices I use across mobile, web and backend work."
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Card
              as="li"
              key={group.id}
              tone={group.tone}
              aria-labelledby={`skills-${group.id}`}
              className="flex flex-col"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 id={`skills-${group.id}`} className="font-display text-xl font-bold leading-tight">
                  {group.title}
                </h3>
                <span aria-hidden="true" className="font-mono text-sm font-bold text-ink-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Tag as="li" key={skill} tone={group.tone === "surface" ? "paper" : "surface"}>
                    {skill}
                  </Tag>
                ))}
              </ul>
            </Card>
          ))}
        </ul>
      </Container>
    </section>
  );
}
