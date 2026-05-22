import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition-all duration-300 ease-in-out hover:rounded-[18px] active:rounded-6xl active:duration-350 active:delay-0 delay-40 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border-2 border-transparent",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border-primary hover:bg-primary-dimmed hover:border-primary-dimmed",
        outline:
          "border-muted-foreground text-muted-foreground bg-white  hover:bg-muted",
        ghost:
          "text-muted-foreground border-transparent hover:bg-muted hover:text-muted-foreground",
        white:
          "bg-white text-primary border-white hover:bg-primary hover:text-white hover:border-primary",
        "white-outline":
          "bg-transparent text-white border-white hover:bg-white hover:text-primary",
      },
      size: {
        default: "h-auto py-3 px-6 text-base",
        sm: "h-auto py-2 px-4 text-sm",
        lg: "h-auto py-3 px-8 text-lg",
        icon: "size-10 p-0",
        "icon-sm": "size-8 p-0",
        "icon-lg": "size-12 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/** Action button. `variant`: default (primary) · outline (secondary) · ghost (low-emphasis) · white / white-outline (dark backgrounds). `asChild` renders as another element (e.g. an `<a>`). Prefer one primary per view. */
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
