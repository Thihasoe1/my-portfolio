import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "@/App";
import { navLinks, profile } from "@/data/profile";

describe("App", () => {
  it("renders the page landmarks and the Senior Mobile Developer hero", () => {
    render(<App />);

    // One page-level banner (section/card <header>s inside <main> are not banners).
    const pageBanners = screen.getAllByRole("banner").filter((el) => !el.closest("main"));
    expect(pageBanners).toHaveLength(1);
    expect(within(pageBanners[0]).getByRole("navigation", { name: "Primary" })).toBeInTheDocument();
    expect(screen.getByRole("main")).toHaveAttribute("id", "main");
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();

    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toHaveTextContent(/Senior\s*Mobile\s*Developer/);
    expect(screen.getByText(profile.summary)).toBeInTheDocument();
  });

  it("has exactly one h1 and an h2 for every content section", () => {
    render(<App />);

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    for (const id of ["about", "experience", "projects", "skills", "contact"]) {
      const section = document.getElementById(id);
      expect(section, `#${id} exists`).not.toBeNull();
      expect(within(section).getAllByRole("heading", { level: 2 })).toHaveLength(1);
    }
  });

  it("offers a skip link to the main landmark as the first focusable element", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.tab();
    const skip = screen.getByRole("link", { name: "Skip to content" });
    expect(skip).toHaveFocus();
    expect(skip).toHaveAttribute("href", "#main");
  });

  it("links every primary navigation item to an existing section", () => {
    render(<App />);

    const nav = screen.getByRole("navigation", { name: "Primary" });
    for (const { id, label } of navLinks) {
      // Desktop list (the mobile menu is hidden and excluded from the a11y tree).
      const link = within(nav).getByRole("link", { name: label });
      expect(link).toHaveAttribute("href", `#${id}`);
      expect(document.getElementById(id)).not.toBeNull();
    }
  });

  it("points every in-page anchor at an element that exists", () => {
    render(<App />);

    const hashes = [...document.querySelectorAll('a[href^="#"]')].map((a) => a.getAttribute("href"));
    expect(hashes.length).toBeGreaterThan(0);
    for (const hash of new Set(hashes)) {
      expect(document.getElementById(hash.slice(1)), hash).not.toBeNull();
    }
  });

  it("opens external links safely", () => {
    render(<App />);

    const external = screen.getAllByRole("link").filter((a) => a.getAttribute("target") === "_blank");
    expect(external.length).toBeGreaterThan(0);
    for (const link of external) {
      expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
      expect(link).toHaveAttribute("rel", expect.stringContaining("noreferrer"));
    }
  });
});
