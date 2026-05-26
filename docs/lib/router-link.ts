// Overrides @code-for-canada/ui's default router element (plain <a>) so the
// design system's <Link> uses Next.js client-side navigation for internal hrefs.
// Wired up via the alias in next.config.ts.
export { default } from "next/link"
