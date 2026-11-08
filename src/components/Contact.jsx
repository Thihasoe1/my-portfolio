import { useEffect, useRef, useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { profile, socialLinks } from "@/data/profile";

const socialIcons = { github: FaGithub, linkedin: FaLinkedin };
const [emailUser, emailDomain] = profile.email.split("@");

/** Copy text with the async Clipboard API, falling back to execCommand. */
async function copyText(text) {
  if (window.isSecureContext && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const ok = document.execCommand("copy");
  textarea.remove();
  if (!ok) throw new Error("Copy command was rejected");
}

const messages = {
  idle: "",
  copied: "Email address copied to clipboard.",
  error: "Couldn't copy automatically. Please select the address above and copy it manually.",
};

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | copied | error
  const resetTimer = useRef();

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const handleCopy = async () => {
    clearTimeout(resetTimer.current);
    try {
      await copyText(profile.email);
      setStatus("copied");
      resetTimer.current = setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      resetTimer.current = setTimeout(() => setStatus("idle"), 8000);
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 sm:py-28 bg-lime/40">
      <Container size="md">
        <SectionHeader
          id="contact-title"
          eyebrow="Contact"
          tone="surface"
          align="center"
          title="Let's talk."
          description="Email is the best way to reach me about mobile and Flutter engineering roles, collaborations or a project you have in mind."
        />

        <Card padding="lg" shadow="lg" className="text-center">
          <p className="font-display text-sm font-bold uppercase tracking-wider text-ink-subtle">Email</p>
          {/* <wbr> lets narrow screens wrap at "@" instead of mid-word. */}
          <p className="mt-2 font-display text-[clamp(1.125rem,0.9rem+1.6vw,2rem)] font-bold [overflow-wrap:anywhere] select-all">
            {emailUser}
            <wbr />@{emailDomain}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href={`mailto:${profile.email}`} size="lg" leftIcon={Mail}>
              Email Me
            </Button>
            <Button
              size="lg"
              variant="secondary"
              leftIcon={status === "copied" ? Check : Copy}
              onClick={handleCopy}
              aria-describedby="copy-email-status"
            >
              {status === "copied" ? "Copied!" : "Copy Email"}
            </Button>
          </div>

          <p
            id="copy-email-status"
            role="status"
            aria-live="polite"
            className={`mt-4 min-h-6 text-sm font-semibold ${status === "error" ? "text-ink" : "text-ink-muted"}`}
          >
            {messages[status]}
          </p>

          <div className="mt-6 pt-6 border-t-2 border-ink">
            <p className="font-display text-sm font-bold uppercase tracking-wider text-ink-subtle">
              Elsewhere
            </p>
            <ul className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
              {socialLinks.map((link) => (
                <li key={link.id}>
                  <Button href={link.href} external variant="lavender" leftIcon={socialIcons[link.id]} fullWidth>
                    {link.label}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </Container>
    </section>
  );
}
