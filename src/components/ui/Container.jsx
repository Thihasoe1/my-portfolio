import { cn } from "@/lib/cn";

const widths = {
  sm: "max-w-3xl", // 768px — long-form text
  md: "max-w-5xl", // 1024px
  lg: "max-w-6xl", // 1152px — default page width
  xl: "max-w-7xl", // 1280px — wide grids
};

/**
 * Centred page column with responsive gutters (16px on phones, 24px on
 * tablets, 32px on desktop).
 *
 * @param {"sm"|"md"|"lg"|"xl"} [size="lg"]
 * @param {import("react").ElementType} [as="div"]
 */
export default function Container({
  as = "div",
  size = "lg",
  className,
  children,
  ...rest
}) {
  const Component = as;
  return (
    <Component
      className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", widths[size] ?? widths.lg, className)}
      {...rest}
    >
      {children}
    </Component>
  );
}
