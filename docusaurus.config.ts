import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "DISC Documentation",
  tagline: "Documentation for DISC Projects",
  favicon: "img/favicon.ico",

  url: "https://disc-nu.github.io",
  baseUrl: "/DISC-Documentation-Website/",

  organizationName: "DISC-NU",
  projectName: "DISC-Documentation-Website",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          id: "workshop-series",
          path: "docs/workshop-series",
          routeBasePath: "/",

          sidebarPath: require.resolve("./sidebars.workshop-series.ts"),
          editUrl:
            "https://github.com/DISC-NU/DISC-Documentation-Website/tree/main",
        },
        blog: false,
        pages: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "disc-website",
        path: "docs/disc-website",
        routeBasePath: "disc-website",
        sidebarPath: require.resolve("./sidebars.disc-website.ts"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "discover-program-template-project",
        path: "docs/discover-program-template-project",
        routeBasePath: "discover-program-template-project",
        sidebarPath: require.resolve(
          "./sidebars.discover-program-template-project.ts"
        ),
      },
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "Develop & Innovate for Social Change",
      logo: {
        alt: "DISC Logo",
        src: "img/disc-logo.png",
        href: "https://disc-nu.github.io/disc-website/",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Workshop Series",
          docsPluginId: "workshop-series",
        },
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "DISC Website",
          docsPluginId: "disc-website",
        },
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Discover Program Template",
          docsPluginId: "discover-program-template-project",
        },
        {
          href: "https://github.com/DISC-NU/DISC-Documentation-Website",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Workshop Series",
              to: "/intro",
            },
            {
              label: "DISC Website",
              href: "https://disc-nu.github.io/disc-website/",
            },
            {
              label: "Discover Program Template",
              to: "/discover-program-template-project/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "DISC Website",
              href: "https://disc-nu.github.io/disc-website/",
            },
            {
              label: "GitHub",
              href: "https://github.com/DISC-NU",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Develop and Innovate for Social Change`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
