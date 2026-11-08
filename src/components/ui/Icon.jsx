import { cn } from "@/lib/cn";

/**
 * Library-agnostic icon wrapper (works with lucide-react and react-icons).
 *
 * - Decorative by default: hidden from assistive tech.
 * - Pass `label` when the icon is the only content conveying meaning
 *   (e.g. an icon-only link); it is then exposed as an image with that name.
 *
 * @example <Icon icon={ArrowRight} />
 * @example <Icon icon={FaGithub} label="GitHub" size={24} />
 */
export default function Icon({
  icon,
  size = 20,
  label,
  strokeWidth,
  className,
  ...rest
}) {
  const Glyph = icon;
  const a11y = label
    ? { role: "img", "aria-label": label }
    : { "aria-hidden": true, focusable: "false" };

  return (
    <Glyph
      size={size}
      {...(strokeWidth !== undefined && { strokeWidth })}
      className={cn("shrink-0", className)}
      {...a11y}
      {...rest}
    />
  );
}
