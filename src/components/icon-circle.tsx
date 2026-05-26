import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../utils"

// When no `color` is set the circle follows the surrounding scheme, falling
// back to the brand red when no scheme is in scope. Passing a colour pins it
// to that fixed brand value regardless of scheme.
const iconCircleVariants = cva(
  "inline-flex items-center justify-center rounded-full [&>svg]:size-[60%] bg-[var(--scheme-muted,var(--color-c4c-red-600))] text-[var(--scheme-bg,#ffffff)]",
  {
    variants: {
      color: {
        red: "bg-c4c-red-600 text-white",
        purple: "bg-c4c-purple-800 text-white",
        blue: "bg-c4c-blue-600 text-white",
      },
      size: {
        sm: "size-7",
        default: "size-9",
        lg: "size-12",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

interface IconCircleProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof iconCircleVariants> {}

/** Circle holding an icon. Pass a single line icon (e.g. lucide) as children. Follows the surrounding colour scheme by default (red when no scheme is set); pass `color` (red | purple | blue) to pin a fixed brand colour. `size`: sm | default | lg. */
function IconCircle({ className, color, size, children, ...props }: IconCircleProps) {
  return (
    <span
      data-slot="icon-circle"
      className={cn(iconCircleVariants({ color, size, className }))}
      {...props}
    >
      {children}
    </span>
  )
}

export { IconCircle, iconCircleVariants }
export type { IconCircleProps }
