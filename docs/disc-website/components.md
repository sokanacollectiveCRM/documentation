# Components

## Overview

The DISC website uses a component-based architecture with three main categories. We use [shadcn/ui](https://ui.shadcn.com/) for our base components.

### 1. Section Components

Located in `_components/_sections/`

```tsx
// Example: _components/_sections/LandingPage/Hero.tsx
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-900">Welcome to DISC</h1>
      <p className="mt-4 text-gray-600 max-w-xl text-center">
        Develop & Innovate for Social Change at Northwestern
      </p>
      <Button className="mt-6">Get Started</Button>
    </section>
  );
};
```

### 2. UI Components

Located in `_components/ui/`

These components are primarily from shadcn/ui. Here's how to use some common ones:

```tsx
// Example: Using Card component
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ProjectCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Name</CardTitle>
        <CardDescription>Brief project description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Main content goes here</p>
      </CardContent>
      <CardFooter>
        <Button>Learn More</Button>
      </CardFooter>
    </Card>
  );
};
```

```tsx
// Example: Using Alert component
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

export const InfoAlert = () => {
  return (
    <Alert>
      <Info className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>Important information goes here</AlertDescription>
    </Alert>
  );
};
```

### 3. Feature Components

Located in `_components/`

```tsx
// Example: _components/HeroTreeMap.tsx
import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Card } from "@/components/ui/card";

export const HeroTreeMap = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // D3.js visualization logic
    const svg = d3.select(svgRef.current);
    // ... rest of D3 code
  }, []);

  return (
    <Card className="p-4">
      <svg ref={svgRef} className="w-full h-[400px]" viewBox="0 0 800 400" />
    </Card>
  );
};
```

## Common Patterns

### 1. Using Composition

```tsx
// Example: Composing multiple shadcn/ui components
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface FeatureCardProps {
  title: string;
  description: string;
  tags: string[];
}

export const FeatureCard = ({ title, description, tags }: FeatureCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {title}
          <Button variant="outline" size="sm">
            View Details
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
        <div className="flex gap-2 mt-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
```

### 2. Using Motion

```tsx
// Example: Adding animations to components
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export const AnimatedCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardContent>Animated content</CardContent>
      </Card>
    </motion.div>
  );
};
```

## Best Practices

1. **File Names**

   - Use PascalCase for component files: `FeatureCard.tsx`
   - Add `.tsx` extension for TypeScript components

2. **Props**

   - Define clear interfaces
   - Use descriptive names
   - Provide default values

   ```tsx
   interface ButtonProps {
     variant?: "primary" | "secondary";
     size?: "sm" | "md" | "lg";
     children: React.ReactNode;
   }
   ```

3. **Styling**

   - Use Tailwind CSS utility classes
   - Use the `cn()` utility for conditional classes
   - Keep styles component-specific

4. **Component Structure**
   - One component per file
   - Export as named exports
   - Group related components in folders

## Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
