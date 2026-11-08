import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import profileImage from "@/assets/ths.jpeg";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import Tag from "@/components/ui/Tag";
import { profile } from "@/data/profile";

const tagTones = ["lime", "lavender", "coral", "surface"];

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b-3 border-ink"
    >
      {/* Static decorative grid — no motion. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(var(--color-ink)_1px,transparent_1px),linear-gradient(90deg,var(--color-ink)_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <Container className="relative grid gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24 items-center">
        <div className="lg:col-span-7">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-2 font-display font-bold text-ink">
            <span>{profile.name}</span>
            <span aria-hidden="true" className="h-[3px] w-8 bg-ink" />
            <span className="inline-flex items-center gap-1.5 text-ink-muted">
              <Icon icon={MapPin} size={16} strokeWidth={2.5} />
              {profile.location}
            </span>
          </p>

          <h1 id="hero-title" className="mt-5 font-display text-display font-bold">
            Senior{" "}
            <span className="inline-block -rotate-2 px-[0.14em] pb-[0.04em] bg-lime border-3 border-ink rounded-brutal shadow-brutal">
              Mobile
            </span>
            <br />
            Developer
          </h1>

          <p className="mt-6 max-w-2xl text-lead text-ink-muted">{profile.summary}</p>

          <ul aria-label="Core expertise" className="mt-7 flex flex-wrap gap-2">
            {profile.focusAreas.map((area, index) => (
              <Tag as="li" key={area} tone={tagTones[index % tagTones.length]}>
                {area}
              </Tag>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="#projects" rightIcon={ArrowDown}>
              View Projects
            </Button>
            {profile.resume.available && (
              <Button
                href={profile.resume.href}
                download={profile.resume.downloadName}
                type="application/pdf"
                variant="secondary"
                leftIcon={Download}
              >
                Download Resume
                <span className="sr-only"> (PDF)</span>
              </Button>
            )}
            <Button href="#contact" variant="lavender" leftIcon={Mail}>
              Contact Me
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <figure className="relative mx-auto w-full max-w-sm lg:max-w-none">
            {/* Offset colour block behind the photo */}
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 bg-coral border-3 border-ink rounded-brutal-lg"
            />
            <div className="relative overflow-hidden bg-lavender border-3 border-ink rounded-brutal-lg">
              <img
                src={profileImage}
                alt={`Portrait of ${profile.name}`}
                width="600"
                height="800"
                fetchPriority="high"
                decoding="async"
                className="block w-full aspect-[4/5] object-cover object-top"
              />
            </div>

            <figcaption className="absolute -bottom-5 left-4 right-4 sm:left-auto sm:-left-6 sm:right-auto">
              <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 px-4 py-3 bg-surface border-3 border-ink rounded-brutal shadow-brutal font-display font-bold">
                <span className="text-2xl leading-none">{profile.yearsOfExperience}</span>
                <span className="text-sm leading-tight">
                  years building
                  <br />
                  {profile.platforms.join(" · ")}
                </span>
              </span>
            </figcaption>

            <span
              aria-hidden="true"
              className="absolute -top-4 -right-2 sm:-right-5 rotate-6 px-3 py-1.5 bg-lime border-3 border-ink rounded-brutal-sm shadow-brutal-sm font-display text-sm font-bold"
            >
              Flutter-focused
            </span>
          </figure>
        </div>
      </Container>
    </section>
  );
}
