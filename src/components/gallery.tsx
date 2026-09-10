"use client"

import * as React from "react"
import { cn } from "../utils"
import { RoundedImage } from "./rounded-image"

export interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

export interface GalleryProps {
  images: GalleryImage[]
  className?: string
}

interface GridSlot {
  /** Grid column span classes applied to this slide's wrapper (desktop grid only). */
  wrapperClassName?: string
  /** Aspect ratio applied to the image frame. */
  aspect: string
}

/** Editorial desktop grid layouts keyed by image count. 5+ falls back to rows of 3 with the first spanning 2 columns. */
function getDesktopLayout(count: number): { gridClassName: string; slots: GridSlot[] } {
  if (count === 1) {
    return {
      gridClassName: "grid-cols-1",
      slots: [{ aspect: "aspect-[16/9]" }],
    }
  }

  if (count === 2) {
    return {
      gridClassName: "grid-cols-2",
      slots: [{ aspect: "aspect-[4/3]" }, { aspect: "aspect-[4/3]" }],
    }
  }

  if (count === 3) {
    return {
      gridClassName: "grid-cols-2 grid-rows-2",
      // Left image spans both rows and stretches to their combined height (~3/4 in practice);
      // the two right images each keep a 4/3 frame and stack via grid auto-placement.
      slots: [
        { wrapperClassName: "row-span-2", aspect: "h-full" },
        { aspect: "aspect-[4/3]" },
        { aspect: "aspect-[4/3]" },
      ],
    }
  }

  if (count === 4) {
    return {
      gridClassName: "grid-cols-2 grid-rows-2",
      slots: [
        { aspect: "aspect-[4/3]" },
        { aspect: "aspect-[4/3]" },
        { aspect: "aspect-[4/3]" },
        { aspect: "aspect-[4/3]" },
      ],
    }
  }

  // 5+: rows of 3, first image spans 2 columns
  return {
    gridClassName: "grid-cols-3",
    slots: Array.from({ length: count }, (_, index) => ({
      wrapperClassName: index === 0 ? "col-span-2" : undefined,
      aspect: index === 0 ? "aspect-[21/9]" : "aspect-[4/3]",
    })),
  }
}

/** Framework-agnostic editorial image gallery. Renders an editorial CSS grid on desktop and a
 *  scroll-snap carousel with dot indicators on mobile. */
function Gallery({ images, className }: GalleryProps) {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const scrollerRef = React.useRef<HTMLDivElement>(null)
  const slideRefs = React.useRef<(HTMLDivElement | null)[]>([])

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches

  React.useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const slides = slideRefs.current.filter((el): el is HTMLDivElement => Boolean(el))
    if (!slides.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!mostVisible) return
        const index = slides.indexOf(mostVisible.target as HTMLDivElement)
        if (index !== -1) setActiveIndex(index)
      },
      { root: scroller, threshold: [0.5, 0.75, 1] },
    )

    slides.forEach((slide) => observer.observe(slide))
    return () => observer.disconnect()
  }, [images.length])

  const scrollToIndex = (index: number) => {
    const slide = slideRefs.current[index]
    if (!slide) return
    slide.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    })
    setActiveIndex(index)
  }

  if (!images.length) return null

  const { gridClassName, slots } = getDesktopLayout(images.length)

  return (
    <div className={cn("w-full", className)}>
      {/* Desktop editorial grid */}
      <div className={cn("hidden sm:grid gap-4", gridClassName)}>
        {images.map((image, index) => {
          const slot = slots[index] ?? slots[slots.length - 1]
          return (
            <figure key={`${image.src}-${index}`} className={cn("space-y-2", slot.wrapperClassName)}>
              <RoundedImage
                src={image.src}
                alt={image.alt}
                width={1400}
                height={900}
                className="h-full w-full"
                containerClassName={cn("h-full w-full", slot.aspect)}
              />
              {image.caption ? (
                <figcaption className="text-sm text-muted-foreground">{image.caption}</figcaption>
              ) : null}
            </figure>
          )
        })}
      </div>

      {/* Mobile scroll-snap carousel */}
      <div className="sm:hidden">
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 -mx-4 px-4"
        >
          {images.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              ref={(el) => {
                slideRefs.current[index] = el
              }}
              className="w-[85%] shrink-0 snap-center space-y-2"
            >
              <RoundedImage
                src={image.src}
                alt={image.alt}
                width={1000}
                height={750}
                className="h-full w-full"
                containerClassName="aspect-[4/3]"
              />
              {image.caption ? (
                <figcaption className="text-sm text-muted-foreground">{image.caption}</figcaption>
              ) : null}
            </div>
          ))}
        </div>

        {images.length > 1 ? (
          <div className="mt-4 flex items-center justify-center gap-2">
            {images.map((image, index) => (
              <button
                key={`${image.src}-dot-${index}`}
                type="button"
                aria-label={`Go to image ${index + 1}`}
                aria-current={index === activeIndex}
                onClick={() => scrollToIndex(index)}
                className={cn(
                  "size-2 rounded-full transition-colors",
                  index === activeIndex ? "bg-c4c-red-600" : "bg-muted",
                )}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export { Gallery }
