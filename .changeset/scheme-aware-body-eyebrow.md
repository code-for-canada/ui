---
"@code-for-canada/ui": minor
---

Make `Body`, `Eyebrow`, `IconCircle`, and `Card` scheme-aware.

- `Body` and `Eyebrow` now follow the surrounding `.scheme-*` container (matching `Title`, `Heading`, `Subtitle`). When no scheme is set, they fall back to the previous default colours, so plain pages look unchanged.
- `IconCircle` follows the surrounding scheme by default; pass `color="red" | "purple" | "blue"` to pin a fixed brand colour. The implicit default was previously a fixed red — it now adapts inside a scheme but still falls back to red when no scheme is in scope.
- `Eyebrow`'s `color` prop is now `"red"` only (a branded override). Drop `color="purple"`/`color="blue"` — wrap the eyebrow in `.scheme-purple` / `.scheme-blue` instead. `EyebrowColor` is now `"red"`.
- `Card` accepts an optional `scheme` prop (e.g. `"blue-inverted"`) — sets the card's background, typography, and icon palette in one step. Omit to keep the default card surface.

Migration: remove `color="purple"` / `color="blue"` from `<Eyebrow>` usages — placing the eyebrow inside its scheme container produces the same colour automatically. Eyebrows that should stay red regardless of context can keep `color="red"`.
