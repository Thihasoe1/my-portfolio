/**
 * Join class names, skipping falsy values.
 * Tiny stand-in for `clsx` so we avoid an extra dependency.
 *
 * Note: this does not resolve Tailwind conflicts — when a caller passes a
 * `className` that overrides a component default, prefer non-conflicting
 * utilities or the component's own props (variant, tone, size).
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
