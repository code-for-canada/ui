import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../utils"

const proseVariants = cva("prose prose-img:rounded-lg prose-img:reveal", {
  variants: {
    size: {
      sm: "prose-base",
      default: "prose-lg",
      lg: "prose-xl",
      xl: "prose-2xl",
    },
    invert: {
      true: "prose-invert",
      false: "",
    },
  },
  defaultVariants: {
    size: "default",
    invert: false,
  },
})

function Prose({
  className,
  size = "default",
  invert = false,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof proseVariants>) {
  return (
    <div
      data-slot="prose"
      className={cn(proseVariants({ size, invert, className }))}
      {...props}
    />
  )
}

export { Prose, proseVariants }
