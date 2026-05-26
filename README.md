# @code-for-canada/ui

React design system for Code for Canada applications. Radix UI + class-variance-authority + Tailwind v4, shipped as untranspiled source.

Works in any React app — no framework dependency. Components render plain HTML elements; `Link` can optionally be pointed at a router like `next/link` with a one-line alias (see [Next.js](#nextjs)).

## Install

```bash
pnpm add github:code-for-canada/ui
```

To pin to a specific release tag:

```bash
pnpm add github:code-for-canada/ui#v0.1.0
```

You'll also need React 18+ and Tailwind v4 in your app (plus `@tailwindcss/typography` if you use `Prose`).

## Setup

### 1. Import the styles

```css
/* your global CSS — e.g. app/globals.css or src/index.css */
@import "tailwindcss";
@import "@code-for-canada/ui/styles.css";

/* Tell Tailwind to scan the package's component source for class names */
@source "../node_modules/@code-for-canada/ui/src";
```

`styles.css` provides all design tokens (`@theme inline`), the color palette, semantic aliases, radius scale, `.scheme-*` containers, animations, and prose theming. The `@source` line ensures Tailwind's JIT scans the package components so every utility class is generated. (Adjust the relative path so it points at `node_modules` from your CSS file.)

### 2. Load Poppins

The components use Poppins via the `--font-poppins` variable (Tailwind's `font-sans`). Load it however your app loads fonts, then expose the variable on a wrapping element.

**Plain React / Vite** — import from Google Fonts in your CSS:

```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

:root {
  --font-poppins: "Poppins", sans-serif;
}
```

**Next.js** — use `next/font` in your root layout:

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

### 3. Make sure your bundler compiles the package

The package ships untranspiled TypeScript/TSX. Most bundlers (e.g. Vite) compile imported package source automatically. **Next.js** requires you to opt in:

```ts
// next.config.ts
const nextConfig = {
  transpilePackages: ["@code-for-canada/ui"],
};
```

---

## Components

Import from the package root:

```tsx
import { Button, Heading, Logo } from "@code-for-canada/ui";
```

Every component is documented inline with TSDoc — hover or autocomplete in your editor for its API and variants. For live examples and design guidance, see the **[documentation site](https://code-for-canada.github.io/ui/)**.

---

## Next.js

The package has no Next dependency. The one optional integration: route `Link` through `next/link` for client-side navigation. `Link` (from the package root) renders a plain `<a>` by default; alias the package's router-link module to one that re-exports `next/link`:

```ts
// lib/router-link.ts
export { default } from "next/link";
```

```ts
// next.config.ts
import path from "node:path";

const nextConfig = {
  transpilePackages: ["@code-for-canada/ui"],
  // webpack: (next dev / build, default)
  webpack: (config) => {
    config.resolve.alias["@code-for-canada/ui/router-link$"] = path.resolve(
      process.cwd(),
      "lib/router-link.ts",
    );
    return config;
  },
  // turbopack: (next dev --turbopack)
  turbopack: {
    resolveAlias: { "@code-for-canada/ui/router-link": "./lib/router-link.ts" },
  },
};

export default nextConfig;
```

Without the alias nothing breaks — internal links just render as plain `<a>` (full-page navigation).

---

## Working across repos with pnpm (local dev)

To test local changes to `@code-for-canada/ui` in a consumer repo without publishing, use `pnpm link`:

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

---

## Releases

This package uses [Changesets](https://github.com/changesets/changesets).

1. Make your changes.
2. Run `pnpm changeset` and follow the prompts.
3. Commit the generated `.changeset/*.md` file alongside your code change.
4. When merged to `main`, a CI action opens a "Version Packages" PR.
5. Merging that PR bumps the version, updates `CHANGELOG.md`, and creates a git tag.

Consumers pin to a release tag: `pnpm add github:code-for-canada/ui#v0.2.0`
