---
"@code-for-canada/ui": minor
---

Add `Radio`, `Checkbox`, and `Textarea` form components

- `RadioGroup` + `RadioGroupItem` — Radix-based single-choice list with full-width boxed-row options.
- `Checkbox` + `CheckboxGroup` — Radix-based multi-select with the same boxed-row treatment; `CheckboxGroup` stacks items tightly and triggers `FieldSet`'s existing checkbox-group spacing.
- `Textarea` — mirrors `Input`'s styling for multiline answers. New `withDictation` prop adds a microphone button that streams finalized speech into the field via the Web Speech API; the button is hidden on browsers without support and respects `prefers-reduced-motion`.
