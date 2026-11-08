import { useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import { navLinks, profile } from "@/data/profile";

/** Track which section is in the reading zone, without a scroll listener. */
function useActiveSection(ids) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      // A thin band just below the sticky header counts as "current".
      { rootMargin: "-30% 0px -65% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const ids = navLinks.map((link) => link.id);

const linkBase =
  "relative inline-flex items-center min-h-11 px-3 font-display font-bold text-ink rounded-brutal-sm border-2 transition-colors duration-150";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);
  const menuId = useId();
  const toggleRef = useRef(null);

  // Escape closes the menu and returns focus to the toggle.
  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Close the mobile menu if the viewport grows to desktop size.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (event) => event.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-paper border-b-3 border-ink">
      <Container as="nav" aria-label="Primary" className="flex items-center justify-between gap-4 h-[4.5rem]">
        <a
          href="#top"
          className="group inline-flex items-center gap-3 rounded-brutal-sm"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden="true"
            className="grid place-items-center size-10 bg-lime border-3 border-ink rounded-brutal-sm shadow-brutal-sm font-display font-bold text-sm transition-transform duration-150 group-hover:-rotate-6"
          >
            TS
          </span>
          <span className="font-display font-bold text-lg leading-none">
            {profile.name}
            <span className="sr-only">, {profile.title} — back to top</span>
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    linkBase,
                    isActive
                      ? "bg-lime border-ink"
                      : "border-transparent hover:border-ink hover:bg-surface"
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          type="button"
          className="md:hidden grid place-items-center size-11 bg-surface border-3 border-ink rounded-brutal-sm shadow-brutal-sm active:translate-x-[3px] active:translate-y-[3px] active:shadow-brutal-none"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon icon={open ? X : Menu} size={22} strokeWidth={2.5} />
        </button>
      </Container>

      {/* Mobile menu: removed from the tab order entirely when closed. */}
      <div id={menuId} hidden={!open} className="md:hidden border-t-3 border-ink bg-paper">
        <Container as="ul" className="flex flex-col gap-2 py-4">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center min-h-12 px-4 font-display font-bold text-lg border-3 border-ink rounded-brutal-sm",
                    isActive ? "bg-lime shadow-brutal-sm" : "bg-surface"
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </Container>
      </div>
    </header>
  );
}
