import * as React from "react"
import NextLink from "next/link"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../utils"

const linkVariants = cva(
  "relative inline-block font-medium transition-colors duration-120 motion-reduce:transition-none focus:outline-none",
  {
    variants: {
      variant: {
        default:
          "before:absolute  z-1 before:-z-1 before:-bottom-[2px] before:left-0 before:h-[2px] before:w-full before:rounded-sm before:transition-all before:duration-150 before:ease-out before:content-[''] motion-reduce:before:transition-none hover:before:h-[calc(100%+3px)] hover:before:bottom-[-2px] hover:before:scale-[1.1] hover:before:ease-in hover:before:rounded-lg focus:before:h-[calc(100%+3px)] focus:before:bottom-[-2px] focus:before:scale-[1.1] focus:before:ease-in focus:before:rounded-lg active:before:rounded-2xl active:before:scale-x-[1.1]",
        plain: "border-b-2 transition-all",
      },
      color: {
        default: "",
        inverse: "",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        color: "default",
        className:
          "text-foreground before:bg-primary hover:text-white focus:text-white",
      },
      {
        variant: "default",
        color: "inverse",
        className:
          "text-white before:bg-white hover:text-secondary focus:text-secondary",
      },
      {
        variant: "plain",
        color: "default",
        className: "text-foreground border-secondary hover:border-primary focus:border-primary",
      },
      {
        variant: "plain",
        color: "inverse",
        className: "text-white border-white hover:border-primary focus:border-primary",
      },
    ],
    defaultVariants: {
      variant: "default",
      color: "default",
    },
  }
)

interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "color">,
    VariantProps<typeof linkVariants> {
  href: string
}

/** Inline text link. Auto-detects internal (`/`, `#` → Next.js Link) vs external (opens in a new tab). `variant="plain"` for a quieter underline; `color="inverse"` on dark backgrounds. */
const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, color, href, ...props }, ref) => {
    const isInternal = href.startsWith("/") || href.startsWith("#")

    if (isInternal) {
      return (
        <NextLink
          href={href}
          className={cn(linkVariants({ variant, color, className }))}
          ref={ref}
          {...props}
        />
      )
    }

    return (
      <a
        href={href}
        className={cn(linkVariants({ variant, color, className }))}
        ref={ref}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    )
  }
)
Link.displayName = "Link"

export { Link, linkVariants }
