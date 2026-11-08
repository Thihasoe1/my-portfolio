import { cn } from "@/lib/cn";
import Icon from "./Icon";

const tones = {
  paper: "bg-paper text-ink",
  surface: "bg-surface text-ink",
  lime: "bg-lime text-ink",
  lavender: "bg-lavender text-ink",
  coral: "bg-coral text-ink",
  ink: "bg-ink text-paper",
};

const sizes = {
  sm: "px-2 py-0.5 text-xs gap-1",
  md: "px-3 py-1 text-sm gap-1.5",
};

/**
 * Compact label for tech stacks, categories and statuses. Non-interactive.
 *
 * @param {"paper"|"surface"|"lime"|"lavender"|"coral"|"ink"} [tone="paper"]
 * @param {"sm"|"md"} [size="md"]
 * @param {import("react").ElementType} [icon]
 * @param {import("react").ElementType} [as="span"] use "li" inside a <ul>
 */
export default function Tag({
  as = "span",
  tone = "paper",
  size = "md",
  icon,
  className,
  children,
  ...rest
}) {
  const Component = as;
  return (
    <Component
      className={cn(
        "inline-flex items-center font-medium leading-snug whitespace-nowrap",
        "border-2 border-ink rounded-brutal-sm",
        tones[tone] ?? tones.paper,
        sizes[size] ?? sizes.md,
        className
      )}
      {...rest}
    >
      {icon && <Icon icon={icon} size={size === "sm" ? 12 : 14} strokeWidth={2.5} />}
      {children}
    </Component>
  );
}
