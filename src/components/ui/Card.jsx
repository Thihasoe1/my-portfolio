import { cn } from "@/lib/cn";

const tones = {
  surface: "bg-surface",
  paper: "bg-paper",
  lime: "bg-lime",
  lavender: "bg-lavender",
  coral: "bg-coral",
};

const shadows = {
  none: "",
  sm: "shadow-brutal-sm",
  md: "shadow-brutal",
  lg: "shadow-brutal-lg",
};

const paddings = {
  none: "",
  sm: "p-4",
  md: "p-5 sm:p-6",
  lg: "p-6 sm:p-8",
};

/**
 * Bordered Neo-Brutalist surface.
 *
 * `interactive` adds a lift-on-hover and also reacts to `:focus-within`, so a
 * card wrapping a link responds to keyboard users the same as to the mouse.
 *
 * @param {"surface"|"paper"|"lime"|"lavender"|"coral"} [tone="surface"]
 * @param {"none"|"sm"|"md"|"lg"} [shadow="md"]
 * @param {"none"|"sm"|"md"|"lg"} [padding="md"]
 * @param {import("react").ElementType} [as="div"] e.g. "article", "li"
 */
export default function Card({
  as = "div",
  tone = "surface",
  shadow = "md",
  padding = "md",
  interactive = false,
  className,
  children,
  ...rest
}) {
  const Component = as;
  return (
    <Component
      className={cn(
        "relative border-3 border-ink rounded-brutal-lg text-ink",
        tones[tone] ?? tones.surface,
        shadows[shadow] ?? shadows.md,
        paddings[padding] ?? paddings.md,
        interactive &&
          "transition-[transform,box-shadow] duration-200 ease-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg focus-within:-translate-x-1 focus-within:-translate-y-1 focus-within:shadow-brutal-lg",
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
