import { Info } from "lucide-react";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import SectionHeader from "@/components/ui/SectionHeader";
import Tag from "@/components/ui/Tag";
import { experience } from "@/data/experience";

/** "May 2024 – Feb 2026" with machine-readable <time> elements. */
function Period({ job }) {
  const [startLabel, endLabel] = job.period.split(" – ");
  return (
    <>
      <time dateTime={job.start}>{startLabel}</time>
      {" – "}
      {job.end ? <time dateTime={job.end}>{endLabel}</time> : endLabel}
    </>
  );
}

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-20 sm:py-28 border-b-3 border-ink">
      <Container>
        <SectionHeader
          id="experience-title"
          eyebrow="Experience"
          tone="lavender"
          title="Professional experience"
          description="Roles across commerce, education, banking and real estate, newest first."
        />

        <ol className="relative grid gap-8 md:gap-10">
          {/* Timeline rail (tablet and up) */}
          <span
            aria-hidden="true"
            className="hidden md:block absolute top-2 bottom-2 left-[10.5rem] w-[3px] bg-ink"
          />

          {experience.map((job) => {
            const current = job.end === null;
            return (
              <li key={job.id} className="relative md:grid md:grid-cols-[10.5rem_1fr] md:gap-10">
                {/* Date column (tablet and up) */}
                <div className="hidden md:block pt-6 pr-6 text-right">
                  <p className="font-display font-bold leading-snug">
                    <Period job={job} />
                  </p>
                </div>

                {/* Rail marker */}
                <span
                  aria-hidden="true"
                  className={`hidden md:block absolute left-[10.5rem] top-7 size-5 -translate-x-[calc(50%-1.5px)] rotate-45 border-3 border-ink ${
                    current ? "bg-lime" : "bg-surface"
                  }`}
                />

                <Card as="article" padding="lg" className="md:ml-6" aria-labelledby={`${job.id}-role`}>
                  <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 id={`${job.id}-role`} className="font-display text-h3 font-bold">
                        {job.role}
                      </h3>
                      <p className="mt-1 font-semibold text-ink-muted">
                        {job.company}
                        {job.location && <span className="font-normal"> · {job.location}</span>}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:justify-end">
                      {current && <Tag tone="lime" size="sm">Current</Tag>}
                      <Tag tone="paper" size="sm" className="md:hidden">
                        <Period job={job} />
                      </Tag>
                    </div>
                  </header>

                  <ul className="mt-5 space-y-2.5">
                    {job.highlights.map((item) => (
                      <li key={item} className="flex gap-3 leading-relaxed">
                        <span aria-hidden="true" className="mt-2.5 size-2 shrink-0 bg-ink" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {job.reportedMetrics.length > 0 && (
                    <aside
                      aria-label="Reported figures"
                      className="mt-5 p-4 bg-paper border-2 border-dashed border-ink rounded-brutal-sm"
                    >
                      <p className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider">
                        <Icon icon={Info} size={16} strokeWidth={2.5} />
                        As reported in CV
                      </p>
                      <ul className="mt-2 space-y-1 text-ink-muted">
                        {job.reportedMetrics.map((metric) => (
                          <li key={metric}>{metric}</li>
                        ))}
                      </ul>
                      <p className="mt-2 text-sm text-ink-subtle">Not independently verified.</p>
                    </aside>
                  )}

                  <ul aria-label="Technologies used" className="mt-6 flex flex-wrap gap-2">
                    {job.tech.map((tech) => (
                      <Tag as="li" key={tech} size="sm" tone="surface">
                        {tech}
                      </Tag>
                    ))}
                  </ul>
                </Card>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
