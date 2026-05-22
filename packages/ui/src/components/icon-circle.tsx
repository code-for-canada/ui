import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../utils"

const iconCircleVariants = cva(
  "inline-flex items-center justify-center rounded-full text-white [&>svg]:size-[60%]",
  {
    variants: {
      color: {
        red: "bg-c4c-red-600",
        purple: "bg-c4c-purple-800",
        blue: "bg-c4c-blue-600",
      },
      size: {
        sm: "size-7",
        default: "size-9",
        lg: "size-12",
      },
    },
    defaultVariants: {
      color: "red",
      size: "default",
    },
  }
)

interface IconCircleProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof iconCircleVariants> {}

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
