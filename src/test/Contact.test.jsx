import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, fireEvent, render, screen } from "@testing-library/react";
import Contact from "@/components/Contact";

const EMAIL = "sawthihasoe.mobiledev@gmail.com";

function setClipboard(writeText) {
  Object.defineProperty(navigator, "clipboard", { configurable: true, value: writeText ? { writeText } : undefined });
}

describe("Contact", () => {
  let originalSecure;

  beforeEach(() => {
    originalSecure = window.isSecureContext;
    Object.defineProperty(window, "isSecureContext", { configurable: true, value: true });
  });

  afterEach(() => {
    Object.defineProperty(window, "isSecureContext", { configurable: true, value: originalSecure });
    setClipboard(undefined);
    vi.useRealTimers();
  });

  it("offers a direct mailto link and no contact form", () => {
    render(<Contact />);

    expect(screen.getByRole("link", { name: "Email Me" })).toHaveAttribute("href", `mailto:${EMAIL}`);
    expect(screen.getByText(EMAIL)).toBeInTheDocument();
    expect(document.querySelector("form")).toBeNull();
    expect(screen.queryByRole("textbox")).toBeNull();
  });

  it("links to GitHub and the confirmed LinkedIn profile in a new tab", () => {
    render(<Contact />);

    const linkedin = screen.getByRole("link", { name: /LinkedIn/ });
    expect(linkedin).toHaveAttribute("href", "https://linkedin.com/in/saw-thi-ha-soe-812834368");
    expect(linkedin).toHaveAttribute("target", "_blank");
    expect(linkedin).toHaveAttribute("rel", "noopener noreferrer");
    expect(linkedin).toHaveAccessibleName("LinkedIn (opens in a new tab)");

    expect(screen.getByRole("link", { name: /GitHub/ })).toHaveAttribute("href", "https://github.com/Thihasoe1");
  });

  it("copies the email and announces success", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    setClipboard(writeText);
    render(<Contact />);

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: "Copy Email" }));
    });

    expect(writeText).toHaveBeenCalledWith(EMAIL);
    expect(screen.getByRole("button", { name: "Copied!" })).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("Email address copied to clipboard.");
  });

  it("resets the button label after a successful copy", async () => {
    vi.useFakeTimers();
    setClipboard(vi.fn().mockResolvedValue(undefined));
    render(<Contact />);

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: "Copy Email" }));
    });
    expect(screen.getByRole("button", { name: "Copied!" })).toBeInTheDocument();

    act(() => vi.advanceTimersByTime(3000));
    expect(screen.getByRole("button", { name: "Copy Email" })).toBeInTheDocument();
    expect(screen.getByRole("status")).toBeEmptyDOMElement();
  });

  it("announces a manual-copy fallback when the Clipboard API rejects", async () => {
    setClipboard(vi.fn().mockRejectedValue(new DOMException("denied", "NotAllowedError")));
    render(<Contact />);

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: "Copy Email" }));
    });

    expect(screen.getByRole("button", { name: "Copy Email" })).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent(/Couldn't copy automatically/);
  });

  it("falls back to execCommand without the Clipboard API, and reports its failure", async () => {
    setClipboard(undefined);
    const exec = vi.fn().mockReturnValue(false);
    document.execCommand = exec;
    render(<Contact />);

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: "Copy Email" }));
    });

    expect(exec).toHaveBeenCalledWith("copy");
    expect(screen.getByRole("status")).toHaveTextContent(/Couldn't copy automatically/);
    delete document.execCommand;
  });
});
