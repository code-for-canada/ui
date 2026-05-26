import * as React from "react"

export type RouterLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
}

/**
 * Router element used by <Link> for internal hrefs. Defaults to a plain <a>.
 *
 * To get client-side navigation (e.g. Next.js), alias this module in your
 * bundler to one that re-exports your router's link:
 *
 *   // lib/router-link.ts
 *   export { default } from "next/link"
 *
 *   // next.config.ts → webpack/turbopack alias:
 *   "@code-for-canada/ui/router-link" -> "./lib/router-link.ts"
 */
const RouterLink = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(
  (props, ref) => <a ref={ref} {...props} />
)
RouterLink.displayName = "RouterLink"

export default RouterLink
