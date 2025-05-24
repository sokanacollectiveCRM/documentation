---
id: project-structure
title: Frontend Project Structure
sidebar_position: 2
---

# Frontend Project Structure

The frontend template follows a modular React architecture designed for scalability and maintainability. This document explains the organization of the project and the purpose of each directory.

## Directory Overview

```bash
├── src/                          # Source code root
│   ├── App.css                   # Main application styles
│   ├── App.tsx                   # Main application component
│   ├── index.css                 # Global styles
│   ├── main.tsx                  # Application entry point
│   ├── Routes.tsx                # Application routing
│   │
│   ├── common/                   # Shared code across the application
│   │   ├── components/           # Reusable UI components
│   │   │   ├── file-input.tsx    # File input component
│   │   │   ├── form/             # Form-related components
│   │   │   ├── header/           # Header components (Search, etc)
│   │   │   ├── loading/          # Loading indicators
│   │   │   ├── navigation/       # Navigation components
│   │   │   │   ├── navbar/       # Top navigation
│   │   │   │   ├── sidebar/      # Side navigation
│   │   │   ├── routes/           # Route-related components
│   │   │   ├── ui/               # Basic UI components from Shadcn (buttons, cards, etc)
│   │   │   ├── user/             # User-related components
│   │   │
│   │   ├── contexts/             # React contexts
│   │   │
│   │   ├── data/                 # Static data
│   │   │   ├── sidebar-data.ts   # Sidebar navigation data
│   │   │
│   │   ├── hooks/                # Custom React hooks
│   │   │   ├── clients/          # Client data hooks
│   │   │   ├── doulas/           # Doula data hooks
│   │   │   ├── hours/            # Hours data hooks
│   │   │   ├── toast/            # Toast notification hooks
│   │   │   ├── ui/               # UI-related hooks
│   │   │   ├── user/             # User data hooks
│   │   │
│   │   ├── layouts/              # Layout components
│   │   │   ├── DashboardLayout.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Main.tsx          # Main content container
│   │   │   ├── NavLayout.tsx     # Navigation layout
│   │   │
│   │   ├── types/                # TypeScript type definitions
│   │   │
│   │   ├── utils/                # Utility functions
│   │       ├── addWorkSession.ts # Work session utilities
│   │
│   ├── features/                 # Feature-specific modules
│   │   ├── admin-payment/        # Admin payment feature
│   │   │   ├── AdminPay.tsx
│   │   │   ├── AdminPayRoute.tsx
│   │   │
│   │   ├── auth/                 # Authentication feature
│   │   │   ├── AuthRoutes.tsx
│   │   │
│   │   ├── clients/              # Clients management feature
│   │   │   ├── Clients.tsx
│   │   │   ├── ClientRoutes.tsx
│   │   │   ├── components/       # Client-specific components
│   │   │
│   │   ├── dashboard-home/       # Dashboard home page
│   │   │   ├── Home.tsx
│   │   │
│   │   ├── hours/                # Hours tracking feature
│   │   │   ├── Hours.tsx
│   │   │   ├── HoursRoute.tsx
│   │   │   ├── components/       # Hours-specific components
│   │   │   │   ├── clients-picker.tsx
│   │   │   │   ├── time-date-pick.tsx
│   │   │   │   ├── users-columns.tsx
│   │   │   │   ├── users-dialogs.tsx
│   │   │   │   ├── users-primary-buttons.tsx
│   │   │   │   ├── users-table.tsx
│   │   │   ├── context/          # Hours-specific context
│   │   │
│   │   ├── my-account/           # User account management
│   │   │   ├── MyAccount.tsx
│   │   │   ├── components/
│   │   │
│   │   ├── not-found/            # 404 page
│   │   │   ├── NotFound.tsx
│   │   │
│   │   ├── pipeline/             # Pipeline management feature
│   │   │   ├── Pipeline.tsx
│   │   │   ├── PipelineRoutes.tsx
│   │   │
│   │   ├── profiles/             # User profiles feature
│   │   │   ├── Profile.tsx
│   │   │   ├── Notes.tsx
│   │   │   ├── OverviewLayout.tsx
│   │   │   ├── ClientInfo.tsx
│   │   │   ├── Documents.tsx
│   │   │   ├── ProfileRoutes.tsx
│   │   │
│   │   ├── request/              # Request management feature
│   │       ├── RequestRoutes.tsx
│   │
│   └── lib/                      # Library utilities
│       ├── utils.ts              # Generic utilities
```

## Core Directories

### `src/` Directory

The source directory contains all application code, organized into specific subdirectories based on functionality.

### `assets/`

Contains static files that are not code:

- `icons/`: SVG icon files used throughout the application
- Images, fonts, and other media files

### `common/`

Houses shared resources used across multiple pages:

- `components/`: Reusable React components
- `contexts/`: React context providers and consumers
- `hooks/`: Custom React hooks
- `layouts/`: Page layout components for routing
- `utils/`: Helper functions and utilities
- `data/`: Anything shared data or interfaces/enums 

### `features/`

Contains components and logic for features implemented, including their pages:

- `admin-payment/`: Features related to credit cards and payments. 
  - This page should not be used anymore because we are integrating with Quickbooks instead. 
  - It's active for now just for testing purposes.
- `auth/`: Sign up, login, everything auth related. 
  - Some of the pages are still jsx (which should to be fixed at some point).
- `clients/`: Includes client table (which shows all clients). 
  - Can drag and drop a template onto a client to initiate a contract. 
  - Archive feature needs to be implemented (in the backend)
  - Clicking on client brings you to their specific page
- `dashboard-home/`: Needs to be deleted (deprecated)
  - Because it expects a username (not what we're doing anymore)
- `my-account/`: Displays your account information. 
  - In the future, the view will be like 
- `not-found/`: 404 page
- `pipeline/`: Drag and drop functionality
- `profiles/`: ==PLZ FILL WHOEVER IMPLEMENTED THIS==
- `request/`: ==PLZ FILL WHOEVER IMPLEMENTED THIS==

### Root Files
- `App.jsx`: Application entry point, contains:
  - Global context providers
  - Routing configuration
  - Top-level layout
- `App.css`: Global stylesheet, contains color settings for our Shadcn-based components 

## Protected Files
The following files should not be modified directly:

```bash
├── .vscode/            # VSCode settings
├── build/              # Production build output
├── node_modules/       # Project dependencies
├── eslint.config.mjs   # Linting configuration
├── jsconfig.json       # JS compilation settings
├── package-lock.json   # Dependency lock file
└── package.json        # Project metadata
└── tsconfig.json       # Main typescript compilation settings
└── tsconfig.node.json  # Configuration for Node.js environments
└── tsconfig.app.json   # App-specific typecsript settings (we only have 1 app so not pertinent to a specific app)
└── tsconfig.build.json # Typescript configuration for build outputs
└── vercel.json         # Vercel configurations
└── vite.config.ts      # Vite configurations
└── vite-env.d.ts       # Provides type definitions for vite-specific features

```

These files are essential for project configuration:

- `.vscode/`: Editor-specific settings (e.g., format on save)
- `build/`: Generated during production builds
- `node_modules/`: Managed by npm
- Configuration files: Maintain consistent code style and behavior

## Adding New Features
When adding new features to the frontend:

1. Create a new directory in `features/` for your feature
2. Add shared components to `common/components/`
3. Create custom hooks in `common/hooks/` if needed (put it under the appropriate directory, ie `user/`, `doulas/`, etc)
4. Add new contexts in `common/contexts/` for state management
5. Create your route in your directory under `features/` and include it in `src/Routes.tsx`

## Best Practices

- Keep features focused and single-purpose
- Follow the established directory structure
- Use typescript
- Use absolute imports with `@/...` directory for shared files, or relative imports for feature-specific files under your specific feature directory

## Dependencies

The project uses several key dependencies:

- [React Router DOM](https://reactrouter.com/) for routing
- [Tailwind](https://tailwindcss.com/) for styling (almost all Tailwind-CSS, definitely all Shadcn components)
- [prop-types](https://www.npmjs.com/package/prop-types) for type checking

These dependencies are pre-configured for the DISCover Program's needs and ensure consistency across all projects.

## Tools Utilized

These are tools the frontend has noteably leveraged:
- [Shadcn](https://ui.shadcn.com/) for ready-made components
- [Shadcn admin dashboard repo](https://github.com/satnaing/shadcn-admin) for several components' logic and functionality
- [Zod](https://zod.dev/) for form schema validation
- [Vite](https://vitejs.dev/) for fast development server and optimized builds