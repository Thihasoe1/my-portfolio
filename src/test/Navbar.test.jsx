import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "@/components/Navbar";
import { navLinks } from "@/data/profile";

describe("Navbar mobile menu", () => {
  it("toggles with correct aria-expanded / aria-controls and accessible names", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const toggle = screen.getByRole("button", { name: "Open menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    const menu = document.getElementById(toggle.getAttribute("aria-controls"));
    expect(menu).not.toBeVisible();

    await user.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(toggle).toHaveAccessibleName("Close menu");
    expect(menu).toBeVisible();
    // Desktop list + mobile list now both expose each link.
    for (const { label } of navLinks) {
      expect(screen.getAllByRole("link", { name: label })).toHaveLength(2);
    }
  });

  it("closes on Escape and returns focus to the toggle", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const toggle = screen.getByRole("button", { name: "Open menu" });
    await user.click(toggle);
    await user.tab(); // move focus into the menu
    await user.keyboard("{Escape}");

    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveFocus();
  });

  it("closes after choosing a link", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const toggle = screen.getByRole("button", { name: "Open menu" });
    await user.click(toggle);
    const [, mobileAbout] = screen.getAllByRole("link", { name: "About" });
    await user.click(mobileAbout);

    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });
});
