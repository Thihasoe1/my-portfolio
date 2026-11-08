import { cn } from "@/lib/cn";
import Icon from "./Icon";

const base = [
  "group/button relative inline-flex items-center justify-center select-none",
  "font-display font-bold leading-none tracking-tight whitespace-nowrap",
  "border-3 border-ink rounded-brutal shadow-brutal-sm",
  "transition-[transform,box-shadow,background-color] duration-150 ease-brutal",
  // Lift on hover, press flat into the shadow on click.
  "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal",
  "active:translate-x-[3px] active:translate-y-[3px] active:shadow-brutal-none",
  "disabled:pointer-events-none disabled:opacity-55 aria-disabled:pointer-events-none aria-disabled:opacity-55",
].join(" ");

const variants = {
  primary: "bg-lime text-ink",
  secondary: "bg-surface text-ink",
  lavender: "bg-lavender text-ink",
  coral: "bg-coral text-ink",
};

const sizes = {
  sm: "min-h-10 px-4 text-sm gap-1.5", // 40px — still a comfortable touch target
  md: "min-h-12 px-5 text-base gap-2", // 48px
  lg: "min-h-14 px-7 text-lg gap-2.5", // 56px
};

const iconSizes = { sm: 16, md: 18, lg: 20 };

/**
 * Neo-Brutalist button. Renders an `<a>` when `href` is given, otherwise a
 * `<button>` (defaulting to type="button" so it never submits by accident).
 *
 * @param {"primary"|"secondary"|"lavender"|"coral"} [variant="primary"]
 * @param {"sm"|"md"|"lg"} [size="md"]
 * @param {boolean} [external] - opens in a new tab with safe `rel` and an SR hint
 * @param {import("react").ElementType} [leftIcon]
 * @param {import("react").ElementType} [rightIcon]
 * @param {boolean} [fullWidth]
 */
export default function Button({
  href,
  external = false,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled = false,
  type = "button",
  className,
  children,
  ...rest
}) {
  const classes = cn(
    base,
    variants[variant] ?? variants.primary,
    sizes[size] ?? sizes.md,
    fullWidth && "w-full",
    className
  );

  const iconSize = iconSizes[size] ?? iconSizes.md;
  const content = (
    <>
      {leftIcon && <Icon icon={leftIcon} size={iconSize} strokeWidth={2.5} />}
      <span>{children}</span>
      {rightIcon && (
        <Icon
          icon={rightIcon}
          size={iconSize}
          strokeWidth={2.5}
          className="transition-transform duration-150 ease-brutal group-hover/button:translate-x-0.5"
        />
      )}
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        className={classes}
        aria-disabled={disabled || undefined}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} {...rest}>
      {content}
    </button>
  );
}
