import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sokanacrmSidebar: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "intro",
      label: "Introduction",
    },
    {
      type: "doc",
      id: "getting-started",
      label: "Getting Started",
    },
    {
      type: "doc",
      id: "authentication",
      label: "Authentication",
    },
    {
      type: "category",
      label: "Frontend",
      items: [
        {
          type: "doc",
          id: "frontend/project-structure",
          label: "Project Structure",
        },
        {
          type: "doc",
          id: "frontend/layout",
          label: "Website Layout",
        },
        {
          type: "doc",
          id: "frontend/features",
          label: "Features",
        },
        {
          type: "doc",
          id: "frontend/deployment",
          label: "Deployment",
        },
      ],
    },
    {
      type: "category",
      label: "Backend",
      items: [
        {
          type: "doc",
          id: "backend/project-structure",
          label: "Project Structure",
        },
        {
          type: "doc",
          id: "backend/implementation",
          label: "Implementation",
        },
        {
          type: "doc",
          id: "backend/deployment",
          label: "Deployment",
        },
      ],
    },
    {
      type: "category",
      label: "Handoff Documentation",
      items: [
        {
          type: "doc",
          id: "handoff/overview",
          label: "Overview",
        },
        {
          type: "doc",
          id: "handoff/progress",
          label: "Progress",
        },
        {
          type: "doc",
          id: "handoff/next-steps",
          label: "Next Steps",
        },
      ],
    },
  ],
};

export default sokanacrmSidebar;
