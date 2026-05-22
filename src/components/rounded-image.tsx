import * as React from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "../utils"

interface RoundedImageProps extends Omit<ImageProps, "className"> {
  className?: string
  containerClassName?: string
}

const RoundedImage = React.forwardRef<HTMLImageElement, RoundedImageProps>(
  ({ className, containerClassName, alt, src, ...props }, ref) => {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-3xl bg-muted",
          containerClassName
        )}
      >
        <Image
          ref={ref}
          alt={alt}
          className={cn("h-full w-full object-cover", className)}
          src={src}
          {...props}
        />
      </div>
    )
  }
)
RoundedImage.displayName = "RoundedImage"

export { RoundedImage }
