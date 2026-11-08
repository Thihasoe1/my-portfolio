/** First focusable element on the page: jumps keyboard users past the nav. */
export default function SkipLink({ targetId = "main" }) {
  return (
    <a
      href={`#${targetId}`}
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:inline-flex focus:items-center focus:px-4 focus:py-3 focus:bg-lime focus:text-ink focus:font-display focus:font-bold focus:border-3 focus:border-ink focus:rounded-brutal focus:shadow-brutal"
    >
      Skip to content
    </a>
  );
}
