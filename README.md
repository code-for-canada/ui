# @code-for-canada/ui

Shared design system for Code for Canada applications. Built with Radix UI + class-variance-authority + Tailwind v4, shipped as untranspiled source for Next.js consumers.

## Install

```bash
pnpm add github:code-for-canada/ui
```

To pin to a specific release tag:

```bash
pnpm add github:code-for-canada/ui#v0.1.0
```

### 1. Add `transpilePackages` to `next.config`

```ts
// next.config.ts
const nextConfig = {
  transpilePackages: ["@code-for-canada/ui"],
};
```

### 2. Wire up fonts (Poppins)

In your root layout:

```tsx
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

### 3. Import styles in your global CSS

```css
/* app/globals.css */
@import "tailwindcss";
@import "@code-for-canada/ui/styles.css";

/* Tell Tailwind to scan the package's component source for class names */
@source "../node_modules/@code-for-canada/ui/src";
```

The `styles.css` import provides all design tokens (`@theme inline`), color palette, semantic aliases, radius scale, `.scheme-*` containers, animations, and prose theming.

The `@source` line ensures Tailwind's JIT scans the package components so all utility classes are generated.

---

## Components

All components are exported from the package root:

```tsx
import { Button, Heading, Logo, IconCircle } from "@code-for-canada/ui";
```

### Typography

```tsx
import { Title, Subtitle, Heading, Eyebrow, Body } from "@code-for-canada/ui";

<Eyebrow>Section Label</Eyebrow>
<Title>Page <strong>title</strong></Title>
<Subtitle>Secondary information about the topic.</Subtitle>
<Heading as="h2" size="lg" color="blue">Section heading</Heading>
<Body size="lead">Introductory paragraph text.</Body>
<Body>Regular paragraph text.</Body>
```

`Heading` sizes: `sm` | `md` | `lg` | `xl`  
`Heading` colors: `default` | `purple` | `blue` | `invert` | `invert-purple` | `invert-blue`  
`Eyebrow` colors: `red` | `purple` | `blue`

### Logo

```tsx
import { Logo } from "@code-for-canada/ui";

<Logo />                         // full logo, default size
<Logo variant="mark" />          // icon only
<Logo size="lg" />               // sm | default | lg
<Logo inverted />                // white, for dark backgrounds
```

### Button

```tsx
import { Button } from "@code-for-canada/ui";

<Button>Primary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="white">White (dark bg)</Button>
<Button variant="white-outline">White Outline</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
```

### Link

```tsx
import { Link } from "@code-for-canada/ui";

<Link href="/about">Default link</Link>
<Link href="/about" variant="plain">Plain (no underline decoration)</Link>
<Link href="/about" color="inverse">Inverse (for dark backgrounds)</Link>
```

### Card

```tsx
import { Card, CardHeader, CardContent, CardFooter } from "@code-for-canada/ui";

<Card>
  <CardHeader>
    <Heading as="h3" size="sm">Card Title</Heading>
    <Body className="text-muted-foreground">Supporting description.</Body>
  </CardHeader>
  <CardContent>Content here.</CardContent>
  <CardFooter>Footer actions.</CardFooter>
</Card>
```

### IconCircle

```tsx
import { IconCircle } from "@code-for-canada/ui";
import { Code } from "lucide-react";

<IconCircle><Code className="size-5" /></IconCircle>
<IconCircle color="purple" size="lg"><Code className="size-6" /></IconCircle>
```

`color`: `red` | `purple` | `blue`  
`size`: `sm` | `default` | `lg`

### Form primitives

```tsx
import { Input, Label } from "@code-for-canada/ui";

<div className="space-y-1.5">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>
```

### Prose

```tsx
import { Prose } from "@code-for-canada/ui";

<Prose>
  <h2>Rich text heading</h2>
  <p>CMS content or markdown-rendered HTML.</p>
</Prose>
```

`size`: `sm` | `default` | `lg` | `xl`  
`invert`: `true` for dark backgrounds

### Color scheme containers

Wrap any block with a scheme class to set the full color system for content inside:

```tsx
<div className="scheme-blue rounded-3xl p-8">
  <Prose>...</Prose>
</div>
```

Available: `scheme-white`, `scheme-white-inverted`, `scheme-blue`, `scheme-blue-inverted`, `scheme-purple`, `scheme-purple-inverted`, `scheme-red`, `scheme-red-inverted`

### Accordion

```tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@code-for-canada/ui";

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Question</AccordionTrigger>
    <AccordionContent>Answer</AccordionContent>
  </AccordionItem>
</Accordion>
```

### Sheet (drawer)

```tsx
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@code-for-canada/ui";

<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Title</SheetTitle>
    </SheetHeader>
    Content here.
  </SheetContent>
</Sheet>
```

### Other exports

- `RoundedImage` — Next.js `Image` with `rounded-3xl overflow-hidden`
- `Separator` — thin horizontal/vertical rule
- `NavigationMenu` + subcomponents — Radix navigation menu

---

## Working across repos with pnpm (local dev)

To test local changes to `@code-for-canada/ui` in a consumer repo without publishing:

**Option A — `pnpm.overrides` (recommended, persistent)**

In your consumer repo's `package.json`:

```json
{
  "pnpm": {
    "overrides": {
      "@code-for-canada/ui": "link:../ui"
    }
  }
}
```

Then run `pnpm install` in the consumer. The path is relative to the consumer repo root — adjust based on where your repos are located.

To revert, remove the override and run `pnpm install` again.

**Option B — `pnpm link`**

```bash
# in the ui repo root
pnpm link --global

# in your consumer repo
pnpm link --global @code-for-canada/ui
```

To unlink:

```bash
# in your consumer repo
pnpm unlink @code-for-canada/ui
pnpm install
```

**Note:** `transpilePackages: ["@code-for-canada/ui"]` in `next.config` must remain in place whether you're using the installed version or a local link.

---

## Releases

This package uses [Changesets](https://github.com/changesets/changesets).

1. Make your changes.
2. Run `pnpm changeset` and follow the prompts.
3. Commit the generated `.changeset/*.md` file alongside your code change.
4. When merged to `main`, a CI action opens a "Version Packages" PR.
5. Merging that PR bumps the version, updates `CHANGELOG.md`, and creates a git tag.

Consumers pin to a release tag: `pnpm add github:code-for-canada/ui#v0.2.0`
