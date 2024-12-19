import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const workshopSidebar: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "intro",
      label: "Introduction",
    },
    {
      type: "doc",
      id: "installation",
      label: "Installation",
    },
    {
      type: "doc",
      id: "quick-start",
      label: "Quick Start",
    },
    {
      type: "doc",
      id: "project-structure",
      label: "Project Structure",
    },
    {
      type: "doc",
      id: "contributing",
      label: "Contributing",
    },
  ],
};

export default workshopSidebar;
