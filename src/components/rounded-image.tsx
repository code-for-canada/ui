import * as React from "react"
import { cn } from "../utils"

interface RoundedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Classes for the rounded frame (sizes the image — e.g. width/height or aspect ratio). */
  containerClassName?: string
  /** Load eagerly with high fetch priority — use for above-the-fold images. Defaults to lazy. */
  priority?: boolean
}

/** Image cropped into a rounded frame (object-cover). `containerClassName` sizes the frame (e.g. aspect ratio); `className` styles the image. Lazy-loads by default — set `priority` for above-the-fold images, and pass `srcSet`/`sizes` for responsive sources. */
const RoundedImage = React.forwardRef<HTMLImageElement, RoundedImageProps>(
  (
    {
      className,
      containerClassName,
      alt = "",
      priority = false,
      loading,
      fetchPriority,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-3xl bg-muted",
          containerClassName
        )}
      >
        <img
          ref={ref}
          alt={alt}
          className={cn("h-full w-full object-cover", className)}
          loading={loading ?? (priority ? "eager" : "lazy")}
          fetchPriority={fetchPriority ?? (priority ? "high" : undefined)}
          decoding="async"
          {...props}
        />
      </div>
    )
  }
)
RoundedImage.displayName = "RoundedImage"

export { RoundedImage }
