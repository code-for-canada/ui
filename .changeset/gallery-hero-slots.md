---
"@code-for-canada/ui": minor
---

Add `Gallery` component and `Hero` eyebrow/meta slots

- `Gallery` — responsive image gallery with a mixed-span grid layout.
- `Hero` now accepts `eyebrow` (label above the title) and `meta` (byline row
  below the summary) slots, and reworks the mobile secondary-image scheme
  backdrop to size relative to the image.
- Prose imagery uses a subtle scroll-linked `editorial-drift` in place of the
  previous `reveal`/`reveal-bleed` entrance animations.
- `Card` no longer applies a default border; typography prefers `text-pretty`
  over `text-balance`; the `purple` scheme gets deeper bg/text contrast.
