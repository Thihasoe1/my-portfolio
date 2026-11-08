import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Tag from "@/components/ui/Tag";

// Phase C: visual restyle only. Content is unchanged; Phase D replaces the
// percentage bars with CV-based skill groups (src/data/skills.js).
const skills = [
  { name: "Dart", level: 85 },
  { name: "Flutter", level: 90 },
  { name: "JavaScript", level: 65 },
  { name: "React", level: 50 },
  { name: "TypeScript", level: 50 },
  { name: "Node.js", level: 55 },
];

const otherSkills = ["Express.js", "GraphQL", "Firebase", "Hive", "Git", "REST APIs"];

const Skills = () => {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-20 sm:py-28 border-b-3 border-ink">
      <Container>
        <SectionHeader id="skills-title" eyebrow="Skills" tone="lime" title="Technical skills" />

        <div className="grid gap-8 lg:grid-cols-3">
          <Card padding="lg" className="lg:col-span-2">
            <h3 className="font-display text-h3 font-bold mb-6">Languages &amp; frameworks</h3>
            <ul className="grid gap-x-8 gap-y-6 md:grid-cols-2">
              {skills.map((skill) => (
                <li key={skill.name}>
                  <div className="flex justify-between mb-2 font-semibold">
                    <span>{skill.name}</span>
                    <span className="font-mono text-sm text-ink-muted">{skill.level}%</span>
                  </div>
                  <div
                    role="meter"
                    aria-label={`${skill.name} proficiency`}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={skill.level}
                    className="h-4 w-full bg-paper border-2 border-ink rounded-brutal-sm overflow-hidden"
                  >
                    <div className="h-full bg-lime border-r-2 border-ink" style={{ width: `${skill.level}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          <Card tone="lavender" padding="lg">
            <h3 className="font-display text-h3 font-bold mb-6">Tools &amp; tech</h3>
            <ul className="flex flex-wrap gap-2">
              {otherSkills.map((skill) => (
                <Tag as="li" key={skill} tone="surface">
                  {skill}
                </Tag>
              ))}
            </ul>
            <p className="mt-8 p-4 bg-surface border-2 border-ink rounded-brutal-sm italic text-ink-muted">
              &ldquo;Continuously adapting to new technologies and architectural patterns to build robust
              mobile applications.&rdquo;
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
