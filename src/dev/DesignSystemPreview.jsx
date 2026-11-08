/**
 * DEV ONLY — design-system review page for Phase B.
 * Open with `npm run dev` → http://localhost:5173/?design-system
 * Excluded from production builds (see App.jsx). Safe to delete after Phase C.
 * Uses placeholder copy only; no portfolio data.
 */
import { ArrowRight, ArrowUpRight, Download, Layers, Mail, Smartphone } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import SectionHeader from "@/components/ui/SectionHeader";
import Tag from "@/components/ui/Tag";

const swatches = [
  { name: "paper", hex: "#F7F4EC", className: "bg-paper" },
  { name: "surface", hex: "#FFFFFF", className: "bg-surface" },
  { name: "ink", hex: "#171717", className: "bg-ink" },
  { name: "lime", hex: "#D9F66F", className: "bg-lime" },
  { name: "lavender", hex: "#C8B6FF", className: "bg-lavender" },
  { name: "coral", hex: "#FF9B85", className: "bg-coral" },
];

const typeScale = [
  { token: "text-display", sample: "Display headline" },
  { token: "text-h1", sample: "Heading one" },
  { token: "text-h2", sample: "Heading two" },
  { token: "text-h3", sample: "Heading three" },
];

function Block({ title, children }) {
  return (
    <section className="py-10 border-b-3 border-ink last:border-b-0">
      <h2 className="font-display text-h3 font-bold mb-6">{title}</h2>
      {children}
    </section>
  );
}

export default function DesignSystemPreview() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      <Container as="main" className="py-12">
        <SectionHeader
          as="h1"
          eyebrow="Phase B · Dev preview"
          title="Neo-Brutalism design system"
          description="Tokens and reusable components. Tab through this page to check focus rings; enable “Reduce motion” in your OS to check motion handling."
        />

        <Block title="Colour tokens">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {swatches.map((s) => (
              <li key={s.name} className="border-3 border-ink rounded-brutal overflow-hidden shadow-brutal-sm bg-surface">
                <div className={`h-20 border-b-3 border-ink ${s.className}`} />
                <div className="p-3">
                  <p className="font-display font-bold">{s.name}</p>
                  <p className="font-mono text-sm text-ink-muted">{s.hex}</p>
                </div>
              </li>
            ))}
          </ul>
        </Block>

        <Block title="Typography">
          <div className="space-y-4">
            {typeScale.map((t) => (
              <div key={t.token} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                <code className="font-mono text-sm text-ink-subtle sm:w-32 shrink-0">{t.token}</code>
                <p className={`font-display font-bold ${t.token}`}>{t.sample}</p>
              </div>
            ))}
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
              <code className="font-mono text-sm text-ink-subtle sm:w-32 shrink-0">text-lead</code>
              <p className="text-lead text-ink-muted max-w-2xl">
                Inter body text for long-form reading. Comfortable line length and line height keep
                paragraphs easy to scan on every screen size.
              </p>
            </div>
          </div>
        </Block>

        <Block title="Buttons">
          <div className="flex flex-wrap gap-4 items-center">
            <Button rightIcon={ArrowRight}>Primary</Button>
            <Button variant="secondary" leftIcon={Download}>Secondary</Button>
            <Button variant="lavender" leftIcon={Mail}>Lavender</Button>
            <Button variant="coral">Coral</Button>
            <Button href="https://example.com" external variant="secondary" rightIcon={ArrowUpRight}>
              External link
            </Button>
            <Button disabled>Disabled</Button>
          </div>
          <div className="flex flex-wrap gap-4 items-center mt-6">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </Block>

        <Block title="Cards">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card as="article">
              <Icon icon={Smartphone} size={28} />
              <h3 className="font-display text-h3 font-bold mt-4 mb-2">Surface card</h3>
              <p className="text-ink-muted">Default tone and shadow.</p>
            </Card>
            <Card as="article" tone="lime" interactive>
              <Icon icon={Layers} size={28} />
              <h3 className="font-display text-h3 font-bold mt-4 mb-2">
                <a href="#cards" className="after:absolute after:inset-0 rounded-brutal-sm">
                  Interactive card
                </a>
              </h3>
              <p>Lifts on hover and on keyboard focus.</p>
            </Card>
            <Card as="article" tone="lavender" shadow="lg" padding="lg">
              <h3 className="font-display text-h3 font-bold mb-2">Lavender · large</h3>
              <p>Larger shadow and padding.</p>
            </Card>
          </div>
        </Block>

        <Block title="Tags">
          <ul className="flex flex-wrap gap-2" aria-label="Example tags">
            <Tag as="li">Flutter</Tag>
            <Tag as="li" tone="lime">Dart</Tag>
            <Tag as="li" tone="lavender">Firebase</Tag>
            <Tag as="li" tone="coral">REST API</Tag>
            <Tag as="li" tone="surface" icon={Smartphone}>iOS · Android</Tag>
            <Tag as="li" tone="ink">Featured</Tag>
            <Tag as="li" size="sm">small</Tag>
          </ul>
        </Block>

        <Block title="Icons">
          <div className="flex items-center gap-6">
            <Icon icon={Smartphone} size={24} />
            <Icon icon={Mail} size={24} />
            <a href="#icons" className="inline-flex p-2 border-2 border-ink rounded-brutal-sm bg-surface shadow-brutal-sm">
              <Icon icon={FaGithub} size={24} label="GitHub (icon-only link example)" />
            </a>
          </div>
        </Block>

        <Block title="Section header (centred)">
          <SectionHeader
            align="center"
            tone="coral"
            eyebrow="Eyebrow"
            title="A centred section heading"
            description="Optional supporting lead text sits under the heading."
          />
        </Block>
      </Container>
    </div>
  );
}
