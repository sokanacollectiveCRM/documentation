# Styling Guide

## shadcn/ui

We use [shadcn/ui](https://ui.shadcn.com/) for our component system because it offers:

1. **Not a Component Library**

   - Copy and paste the components you need
   - Full control over the code and styling
   - No unnecessary bloat from unused components

2. **Perfect for Next.js**

   - Built with Next.js in mind
   - Server component support
   - Easy integration with App Router

3. **Tailwind CSS Integration**

   - Seamless integration with Tailwind
   - Consistent styling patterns
   - Easy customization using Tailwind classes

4. **TypeScript First**

   - Full TypeScript support
   - Type-safe components
   - Better developer experience

5. **Accessibility**
   - Built on top of Radix UI primitives
   - ARIA attributes included
   - Keyboard navigation support

## Tailwind CSS

We use [Tailwind CSS](https://tailwindcss.com/) as our styling solution because it offers:

1. **Utility-First Approach**

   - Write styles directly in your markup
   - No context switching between files
   - Faster development workflow

2. **Performance Optimized**

   - Automatically removes unused CSS
   - Minimal production bundle size
   - Built-in optimization techniques

3. **Highly Customizable**

   - Easy theme configuration
   - Extend with custom values
   - Compatible with design systems

4. **Responsive Design**

   - Built-in responsive modifiers
   - Mobile-first approach
   - Consistent breakpoint system

5. **Developer Experience**
   - Intelligent autocomplete
   - Instant preview in browser
   - Clear and predictable patterns

Here's how we implement and use it:

### Basic Usage

```tsx
// Good - Using Tailwind utility classes
<div className="flex items-center justify-between p-4 bg-white rounded-lg">
  <h2 className="text-xl font-bold text-gray-900">Title</h2>
</div>

// Bad - Using custom CSS
<div className="custom-container">
  <h2 className="custom-title">Title</h2>
</div>
```

### Color System

We use Tailwind's default color palette with some custom colors:

```tsx
// Primary colors
text - primary; // Brand primary
bg - secondary; // Brand secondary
text - accent; // Accent color

// Text colors
text - gray - 900; // Headings
text - gray - 600; // Body text
text - gray - 400; // Subtle text
```

### Responsive Design

Use Tailwind's responsive prefixes:

```tsx
<div className="
  w-full          // Mobile (default)
  md:w-1/2       // Tablet (768px)
  lg:w-1/3       // Desktop (1024px)
">
```

### Using the cn() Utility

For conditional classes:

```tsx
import { cn } from "@/lib/utils";

<button
  className={cn(
    "px-4 py-2 rounded-md",
    variant === "primary"
      ? "bg-blue-500 text-white"
      : "bg-gray-200 text-gray-800"
  )}
>
  Click me
</button>;
```

## Layout Guidelines

### Spacing

Use Tailwind's spacing scale:

- `p-4` for standard padding
- `m-4` for standard margins
- `gap-4` for flex/grid gaps

### Container Width

```tsx
<div className="
  container         // Max-width container
  mx-auto          // Center horizontally
  px-4            // Padding on small screens
  sm:px-6         // Adjusted padding on larger screens
  lg:px-8
">
```

## Component Styling

### shadcn/ui Customization

Customize shadcn/ui components using Tailwind:

```tsx
// Example: Customizing Card component
import { Card } from "@/components/ui/card";

<Card className="hover:shadow-lg transition-shadow duration-200">Content</Card>;
```

### Animation

Using Framer Motion with Tailwind:

```tsx
import { motion } from "framer-motion";

<motion.div
  className="bg-white rounded-lg p-4"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
/>;
```

## Best Practices

1. **Mobile First**

   - Start with mobile styles
   - Add responsive classes as needed

2. **Consistent Spacing**

   - Use Tailwind's spacing scale
   - Maintain consistent spacing between elements

3. **Semantic HTML**

   - Use appropriate HTML elements
   - Style with Tailwind classes

4. **Component Classes**
   - Use shadcn/ui base components
   - Extend with Tailwind classes
   - Keep modifications consistent

## Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Docs](https://ui.shadcn.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Radix UI](https://www.radix-ui.com/)
