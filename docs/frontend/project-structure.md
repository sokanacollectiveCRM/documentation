---
id: project-structure
sidebar_position: 4
---

# Project Structure

This guide provides a detailed overview of the frontend of the SokanaCRM.

## Directory Structure

The project follows a modular structure optimized for Next.js development:

```
.
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
│   │   │   ├── search-context.tsx
│   │   │   ├── UserContext.tsx
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

## Key Directories Explained

### Features Directory (`/features`)

The features directory contains each individual feature of the CRM

- `admin-payment`
- `auth` 
- `clients`
- `dashboard-home`
- `my-account`
- `not-found`
- `pipeline`
- `profiles`
- `request`

### Hours Directory (`/hours`)

The hours directory contains components allowing doulas and admins to input work session hours.

- `Hours.tsx`: Main page hosting the hours page
- `HoursRoute.tsx`: Provides the routing to hours page
- `/components`: Directory containing components that handle the logic of the table displayed
- `/context/clients-context`: Contains the React context for the table, also the typescript type of each row
- `/data/schema`: Contains zod schemas for the client info

### App Directory (`/app`)

The app directory contains the core Next.js application logic:

- **about/**: About page routing and components

  - `layout.tsx`: Layout for about pages
  - `page.tsx`: About page implementation

- **content/**: Main content routing

  - `[[...slug]]/page.tsx`: Dynamic routing for content
  - `layout.tsx`: Content pages layout

- **schedule/**: Workshop schedule implementation
  - Similar structure to content directory

### Components Directory (`/components`)

Contains all reusable UI components:

#### Markdown Components (`/components/markdown`)

- `copy.tsx`: Copy button functionality
- `image.tsx`: Image rendering
- `link.tsx`: Link handling
- `note.tsx`: Note blocks
- `pre.tsx`: Code block handling
- `stepper.tsx`: Step-by-step guides

#### UI Components (`/components/ui`)

- `accordion.tsx`: Collapsible sections
- `avatar.tsx`: User avatars
- `breadcrumb.tsx`: Navigation breadcrumbs
- `button.tsx`: Button components
- `dialog.tsx`: Modal dialogs
- `dropdown-menu.tsx`: Dropdown menus
- `sheet.tsx`: Slide-out panels
- `tabs.tsx`: Tab navigation

#### Navigation Components

- `Leftbar.tsx`: Left sidebar navigation
- `navbar.tsx`: Top navigation bar
- `menu-bar.tsx`: Mobile menu
- `pagination.tsx`: Content pagination

#### Utility Components

- `search.tsx`: Search functionality
- `theme-toggle.tsx`: Dark/light mode toggle
- `toc.tsx`: Table of contents

### Contents Directory (`/contents`)

Organized content in MDX format:

```
contents/
├── about/
│   └── index.mdx
├── content/
│   ├── assignments/
│   │   └── [assignment-1...9]/
│   ├── getting-started/
│   │   ├── faq/
│   │   ├── introduction/
│   │   └── quick-start-guide/
│   └── workshops/
│       └── [workshop-1...9]/
└── schedule/
    └── index.mdx
```

### Library Directory (`/lib`)

Utility functions and configurations:

- `markdown.ts`: MDX processing utilities
- `routes-config.ts`: Route configurations
- `utils.ts`: General utilities

## Configuration Files

Key configuration files include:

- `next.config.mjs`: Next.js configuration
- `tailwind.config.ts`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration
- `components.json`: UI component configurations

## Static Assets

The `/public` directory contains:

- `disc-logo.png`: DISC logo
- `public-og.png`: Open Graph image
- Other static assets

## Style System

The project uses a combination of:

1. **Tailwind CSS**: Utility-first styling
2. **Global CSS**: In `styles/globals.css`
3. **Syntax Highlighting**: In `styles/syntax.css`

## Best Practices

When working with this structure:

1. **Component Organization**

   - Keep components focused and single-purpose
   - Use proper naming conventions
   - Group related components together

2. **Content Management**

   - Follow MDX file structure
   - Keep content organized in appropriate directories
   - Use consistent frontmatter

3. **Code Organization**
   - Follow TypeScript best practices
   - Keep utility functions in `/lib`
   - Use proper imports/exports

## Further Reading

- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [MDX Documentation](https://mdxjs.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Contributing

When adding new components or content:

1. Follow the existing directory structure
2. Use appropriate naming conventions
3. Update relevant documentation
4. Add necessary tests
5. Follow the established coding style
