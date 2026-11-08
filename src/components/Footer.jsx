import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import { profile, socialLinks } from "@/data/profile";

const icons = { github: FaGithub, linkedin: FaLinkedin };

const linkClass =
  "inline-flex items-center gap-2 min-h-11 px-3 font-display font-bold border-2 border-paper rounded-brutal-sm hover:bg-lime hover:text-ink hover:border-lime transition-colors duration-150";

export default function Footer() {
  return (
    // data-surface="dark" switches the focus ring to lime on the ink background.
    <footer data-surface="dark" className="bg-ink text-paper">
      <Container className="py-12 sm:py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-h3 font-bold">{profile.name}</p>
            <p className="mt-1 text-paper/75">
              {profile.title} · {profile.location}
            </p>
          </div>

          <ul aria-label="Contact and profiles" className="flex flex-wrap gap-3">
            <li>
              <a href={`mailto:${profile.email}`} className={linkClass}>
                <Icon icon={Mail} size={18} strokeWidth={2.5} />
                Email
              </a>
            </li>
            {socialLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  <Icon icon={icons[link.id]} size={18} />
                  {link.label}
                  {" "}
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 pt-6 border-t-2 border-paper/30 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-paper/75">
          <p>© {new Date().getFullYear()} {profile.name}. Built with React and Tailwind CSS.</p>
          <a href="#top" className="inline-flex items-center gap-1.5 self-start font-semibold text-paper hover:text-lime rounded-brutal-sm">
            Back to top
            <Icon icon={ArrowUp} size={16} strokeWidth={2.5} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
