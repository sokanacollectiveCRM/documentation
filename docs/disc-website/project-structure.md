# Project Structure

## Directory Overview

```
.
├── _components/
│   ├── HeroTreeMap.tsx
│   ├── _sections/
│   └── ui/
├── app/
│   ├── fonts/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── hooks/
├── lib/
├── types.ts
└── utils/
```

## Key Directories

### `_components/`

Main components directory containing:

- `HeroTreeMap.tsx` - Interactive visualization component
- `_sections/` - Page-specific sections (DiscoverProgram, LandingPage)
- `ui/` - Reusable UI components (buttons, cards, navigation)

### `app/`

Next.js app directory with:

- `fonts/` - Custom font files
- `globals.css` - Global styles
- `layout.tsx` - Root layout component
- `page.tsx` - Home page component

### `hooks/`

Custom React hooks for shared logic across components

### `lib/`

Utility libraries and helper functions

### `utils/`

General utility functions and constants

## Main Pages

- `/` - Landing page
- `/discover-program` - Discover Program page

## Related Links

- [Components Documentation](./components.md)
- [Styling Guide](./styling-guide.md)
