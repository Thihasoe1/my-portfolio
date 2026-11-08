import { cn } from "@/lib/cn";

const eyebrowTones = {
  lime: "bg-lime",
  lavender: "bg-lavender",
  coral: "bg-coral",
  surface: "bg-surface",
};

/**
 * Section intro: optional eyebrow label, the real heading, optional lead.
 *
 * The eyebrow is a styled <p>, not a heading, so the document outline stays
 * one heading per section. Pass `id` and reference it from the section with
 * `aria-labelledby` to name the landmark.
 *
 * @param {string} [eyebrow]
 * @param {import("react").ReactNode} title
 * @param {import("react").ReactNode} [description]
 * @param {string} [id] - id applied to the heading element
 * @param {"h1"|"h2"|"h3"} [as="h2"]
 * @param {"left"|"center"} [align="left"]
 * @param {"lime"|"lavender"|"coral"|"surface"} [tone="lime"] eyebrow colour
 */
export default function SectionHeader({
  eyebrow,
  title,
  description,
  id,
  as: Heading = "h2",
  align = "left",
  tone = "lime",
  className,
}) {
  const centered = align === "center";

  return (
    <header
      className={cn(
        "mb-10 sm:mb-14 flex flex-col gap-4",
        centered ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "inline-block px-3 py-1.5 border-2 border-ink rounded-brutal-sm shadow-brutal-sm",
            "font-display text-eyebrow font-bold uppercase text-ink",
            eyebrowTones[tone] ?? eyebrowTones.lime
          )}
        >
          {eyebrow}
        </p>
      )}

      <Heading
        id={id}
        className={cn(
          "font-display font-bold text-ink max-w-4xl",
          Heading === "h1" ? "text-h1" : Heading === "h3" ? "text-h3" : "text-h2"
        )}
      >
        {title}
      </Heading>

      {description && (
        <p className={cn("text-lead text-ink-muted max-w-2xl", centered && "mx-auto")}>
          {description}
        </p>
      )}
    </header>
  );
}
