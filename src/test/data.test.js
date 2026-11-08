// @vitest-environment node
// Pure data tests: no DOM needed (and loading vite.config.js requires Node).
import { describe, expect, it, vi } from "vitest";
import viteConfig from "../../vite.config.js";
import { experience } from "@/data/experience";
import { skillGroups } from "@/data/skills";
import { projects } from "@/data/projects";
import { education, profile, socialLinks } from "@/data/profile";

describe("experience data (CV source of truth)", () => {
  it("lists the four CV roles, newest first, with exact titles and dates", () => {
    expect(
      experience.map(({ company, role, start, end, period }) => ({ company, role, start, end, period }))
    ).toEqual([
      { company: "Kitchen Express", role: "FullStack Developer", start: "2026-03", end: null, period: "Mar 2026 – Present" },
      { company: "StrategyFirst Education Group", role: "Senior Mobile Developer", start: "2024-05", end: "2026-02", period: "May 2024 – Feb 2026" },
      { company: "Spectrum Soft Technology", role: "Junior Mobile Developer", start: "2023-07", end: "2024-02", period: "Jul 2023 – Feb 2024" },
      { company: "Amicus Realty & Service Center", role: "Junior Mobile Developer", start: "2022-06", end: "2023-06", period: "Jun 2022 – Jun 2023" },
    ]);
  });

  it("has no overlapping or out-of-order employment periods", () => {
    for (let i = 1; i < experience.length; i += 1) {
      expect(experience[i].end <= experience[i - 1].start).toBe(true);
    }
    expect(experience.filter((job) => job.end === null)).toHaveLength(1);
  });

  it("keeps CV-reported figures separate from responsibilities", () => {
    const withMetrics = experience.filter((job) => job.reportedMetrics.length > 0).map((job) => job.id);
    expect(withMetrics).toEqual(["strategyfirst", "spectrum-soft"]);
    for (const job of experience) {
      for (const line of job.highlights) expect(line).not.toMatch(/\d+\s*%|\d+K\+/);
    }
  });
});

describe("profile data", () => {
  it("matches the confirmed profile details", () => {
    expect(profile).toMatchObject({
      name: "Saw Thi Ha Soe",
      title: "Senior Mobile Developer",
      location: "Bangkok, Thailand",
      yearsOfExperience: "4+",
      email: "sawthihasoe.mobiledev@gmail.com",
    });
    expect(education[0]).toMatchObject({
      degree: "Bachelor of Computer Science (B.C.Sc)",
      institution: "University of Computer Studies, Hpa-an",
      period: "2015 – 2020",
    });
    expect(socialLinks.find((l) => l.id === "linkedin")).toMatchObject({
      href: "https://linkedin.com/in/saw-thi-ha-soe-812834368",
      verified: true,
    });
  });

  it("configures Vite for the GitHub Pages project sub-path", () => {
    expect(viteConfig.base).toBe("/my-portfolio/");
  });

  it("builds the resume URL from BASE_URL (resolves to /my-portfolio/resume.pdf in production)", async () => {
    // Vitest serves from "/", so stub the production base and re-evaluate the module.
    vi.stubEnv("BASE_URL", viteConfig.base);
    vi.resetModules();
    const { profile: prodProfile } = await import("@/data/profile");
    expect(prodProfile.resume.available).toBe(true);
    expect(prodProfile.resume.href).toBe("/my-portfolio/resume.pdf");
    vi.unstubAllEnvs();
  });
});

describe("skills data", () => {
  it("has the six approved CV groups", () => {
    expect(skillGroups.map((g) => g.title)).toEqual([
      "Mobile & Web",
      "Architecture & State Management",
      "Backend & Integration",
      "Testing & Data",
      "DevOps & Tools",
      "Additional Frontend Technologies",
    ]);
  });

  it("contains named skills only, without self-rated percentages", () => {
    for (const group of skillGroups) {
      expect(group.skills.length).toBeGreaterThan(0);
      for (const skill of group.skills) {
        expect(typeof skill).toBe("string");
        expect(skill).not.toMatch(/%/);
      }
    }
  });
});

describe("featured projects data", () => {
  it("contains exactly the four approved featured apps", () => {
    expect(projects.map((p) => p.name)).toEqual([
      "Waso Learn KG-12",
      "StrategyFirst Learn",
      "SFUx",
      "Putet Comics",
    ]);
  });

  it("has App Store and Google Play links, responsive images and a tech stack", () => {
    for (const project of projects) {
      expect(project.links.appStore).toMatch(/^https:\/\/apps\.apple\.com\//);
      expect(project.links.googlePlay).toMatch(/^https:\/\/play\.google\.com\/store\/apps\/details\?id=/);
      expect(project.image.srcSet).toMatch(/ 640w, .+ 1200w$/);
      expect(project.image.width).toBe(1200);
      expect(project.image.height).toBeGreaterThan(0);
      expect(project.tech.length).toBeGreaterThan(0);
    }
  });

  it("no longer contains the unverified legacy marketing claims", () => {
    const text = projects.map((p) => p.description).join(" ");
    expect(text).not.toMatch(/largest|vast|premium|seamless|offline-first|low-data/i);
  });

  it("does not ship unverified case studies", () => {
    for (const project of projects) {
      expect(project.caseStudy).toBeUndefined();
      expect(project.contribution).toBeUndefined();
    }
  });
});
