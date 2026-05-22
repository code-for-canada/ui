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

Import everything from the package root:

```tsx
import { Button, Heading, Logo } from "@code-for-canada/ui";
```

Every component is documented inline with TSDoc — hover or autocomplete in your editor for its API and variants. For live examples and design guidance, see the **[documentation site](https://code-for-canada.github.io/ui/)**.

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
