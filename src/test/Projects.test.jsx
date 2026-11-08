import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Projects, { ProjectCard } from "@/components/Projects";
import { projects } from "@/data/projects";

describe("Projects", () => {
  it("renders the four featured projects with store links and lazy images", () => {
    render(<Projects />);

    const cards = screen.getAllByRole("article");
    expect(cards).toHaveLength(4);

    projects.forEach((project, i) => {
      const card = cards[i];
      expect(within(card).getByRole("heading", { level: 3, name: project.name })).toBeInTheDocument();
      expect(within(card).getByRole("link", { name: new RegExp(`App Store: ${project.name}`) })).toHaveAttribute(
        "href",
        project.links.appStore
      );
      expect(within(card).getByRole("link", { name: new RegExp(`Google Play: ${project.name}`) })).toHaveAttribute(
        "href",
        project.links.googlePlay
      );

      const img = within(card).getByRole("img", { name: `${project.name} app screenshots` });
      expect(img).toHaveAttribute("loading", "lazy");
      expect(img).toHaveAttribute("width", "1200");
      expect(img).toHaveAttribute("srcset", project.image.srcSet);
    });
  });

  it("does not render a case study when no verified details exist", () => {
    render(<Projects />);
    expect(screen.queryByText("Technical case study")).toBeNull();
  });

  it("renders an expandable case study when verified details are supplied", async () => {
    const user = userEvent.setup();
    const sample = {
      ...projects[0],
      contribution: ["Sample contribution line"],
      caseStudy: {
        problem: "Sample problem statement",
        solution: "Sample solution statement",
        challenges: ["Sample challenge"],
        outcomes: ["Sample outcome"],
      },
    };
    render(
      <ul>
        <ProjectCard project={sample} index={0} />
      </ul>
    );

    const summary = screen.getByText("Technical case study");
    const details = summary.closest("details");
    expect(details).not.toHaveAttribute("open");

    await user.click(summary);
    expect(details).toHaveAttribute("open");

    for (const heading of ["Problem", "Solution", "My contribution", "Technical challenges", "Outcomes"]) {
      expect(within(details).getByRole("heading", { level: 4, name: heading })).toBeInTheDocument();
    }
    expect(within(details).getByText("Sample contribution line")).toBeInTheDocument();
  });

  it("renders only the case-study parts that are provided", () => {
    render(
      <ul>
        <ProjectCard project={{ ...projects[1], contribution: ["Only contribution"] }} index={1} />
      </ul>
    );

    const details = screen.getByText("Technical case study").closest("details");
    expect(within(details).getByRole("heading", { name: "My contribution" })).toBeInTheDocument();
    expect(within(details).queryByRole("heading", { name: "Problem" })).toBeNull();
    expect(within(details).queryByRole("heading", { name: "Outcomes" })).toBeNull();
  });
});
