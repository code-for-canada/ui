import * as React from "react"
import { cn } from "../utils"

/** Centred page-width wrapper (max-w-7xl) with responsive horizontal padding. Wrap section content to align it to the page grid. */
const PageContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    />
  )
})
PageContainer.displayName = "PageContainer"

export { PageContainer }
