# @code-for-canada/ui

## 0.2.0

### Minor Changes

- 3469d64: Make the package framework-agnostic — it no longer depends on Next.

  - `RoundedImage` now renders a plain `<img>` (lazy by default, `priority` for eager/high fetch priority, `srcSet`/`sizes` for responsive sources) instead of wrapping `next/image`.
  - `Link` renders a plain `<a>` by default; for client-side navigation, alias `@code-for-canada/ui/router-link` to a module that re-exports your router's link (e.g. `next/link`) — see the README.
  - `next` is no longer a peer dependency. Everything is imported from the package root.

  Migration: `RoundedImage` no longer performs Next's automatic image optimization (resizing/format conversion) — provide pre-optimized images, or `srcSet`/`sizes` for responsive loading. If you relied on `Link` resolving to `next/link`, add the router-link alias shown in the README.

- 0d1e7de: Make `Body`, `Eyebrow`, `IconCircle`, and `Card` scheme-aware.

  - `Body` and `Eyebrow` now follow the surrounding `.scheme-*` container (matching `Title`, `Heading`, `Subtitle`). When no scheme is set, they fall back to the previous default colours, so plain pages look unchanged.
  - `IconCircle` follows the surrounding scheme by default; pass `color="red" | "purple" | "blue"` to pin a fixed brand colour. The implicit default was previously a fixed red — it now adapts inside a scheme but still falls back to red when no scheme is in scope.
  - `Eyebrow`'s `color` prop is now `"red"` only (a branded override). Drop `color="purple"`/`color="blue"` — wrap the eyebrow in `.scheme-purple` / `.scheme-blue` instead. `EyebrowColor` is now `"red"`.
  - `Card` accepts an optional `scheme` prop (e.g. `"blue-inverted"`) — sets the card's background, typography, and icon palette in one step. Omit to keep the default card surface.

  Migration: remove `color="purple"` / `color="blue"` from `<Eyebrow>` usages — placing the eyebrow inside its scheme container produces the same colour automatically. Eyebrows that should stay red regardless of context can keep `color="red"`.

## 0.1.1

### Patch Changes

- 849f24c: Add inline TSDoc to all components for better editor and AI autocomplete
