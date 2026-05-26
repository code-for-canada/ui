---
"@code-for-canada/ui": minor
---

Make the package framework-agnostic — it no longer depends on Next.

- `RoundedImage` now renders a plain `<img>` (lazy by default, `priority` for eager/high fetch priority, `srcSet`/`sizes` for responsive sources) instead of wrapping `next/image`.
- `Link` renders a plain `<a>` by default; for client-side navigation, alias `@code-for-canada/ui/router-link` to a module that re-exports your router's link (e.g. `next/link`) — see the README.
- `next` is no longer a peer dependency. Everything is imported from the package root.

Migration: `RoundedImage` no longer performs Next's automatic image optimization (resizing/format conversion) — provide pre-optimized images, or `srcSet`/`sizes` for responsive loading. If you relied on `Link` resolving to `next/link`, add the router-link alias shown in the README.
