---
id: project-structure
title: Frontend Project Structure
sidebar_position: 1
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

Features contains the bulk of the project, where routing and logic are defined for each feature.

### Root Files
- `main.tsx`: Application entry point
- `index.css`: Basic css using tailwind.
- `App.tsx`: Contains:
  - Global context providers
  - Routing configuration
- `App.css`: Global stylesheet, contains color settings for our Shadcn-based components 
- `Routes.tsx`: Routing logic for every page.
  - Each feature will have its own routing entry point to define pages for a given feature.

## Dependencies

The project uses several key dependencies:

- [React Router DOM](https://reactrouter.com/) for routing
- [Tailwind](https://tailwindcss.com/) for styling (almost all Tailwind-CSS, definitely all Shadcn components)

## Tools Utilized

These are tools the frontend has noteably leveraged:
- [Dndkit](https://dndkit.com) for drag and drop functionality
- [Shadcn](https://ui.shadcn.com/) for ready-made components
- [Shadcn admin dashboard repo](https://github.com/satnaing/shadcn-admin) for several components' logic and functionality
- [Zod](https://zod.dev/) for form schema validation
- [Vite](https://vitejs.dev/) for fast development server and optimized builds