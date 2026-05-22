import * as React from "react"
import { cn } from "../utils"
import { Title, Subtitle } from "./typography"
import { Button } from "./button"
import { RoundedImage } from "./rounded-image"

type HeroColor = "white" | "blue" | "red" | "purple"

interface HeroCta {
  label: string
  href: string
}

interface HeroImage {
  src: string
  alt: string
}

interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  summary?: string
  /** Brand colour scheme applied to the hero background */
  color?: HeroColor
  /** Use the dark (inverted) variant of the scheme */
  invert?: boolean
  /** Optional call-to-action button */
  cta?: HeroCta
  /** Optional image that overlaps the bottom edge of the hero */
  image?: HeroImage
  /** Override the inner container width/padding (matches PageContainer by default) */
  containerClassName?: string
}

const containerClasses = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"

function Hero({
  title,
  summary,
  color = "white",
  invert = false,
  cta,
  image,
  className,
  containerClassName,
  ...props
}: HeroProps) {
  const scheme = `scheme-${color}${invert ? "-inverted" : ""}`

  return (
    <>
      <section
        className={cn(
          scheme,
          "py-12 lg:py-20",
          image && "pb-32 lg:pb-48",
          className
        )}
        {...props}
      >
        <div className={cn(containerClasses, containerClassName)}>
          <div className="space-y-6">
            <div className="space-y-4">
              <Title className="fade-in text-[var(--scheme-muted)]">{title}</Title>
              {summary ? (
                <Subtitle className="fade-in-delay-1 max-w-2xl text-[var(--scheme-text)]">
                  {summary}
                </Subtitle>
              ) : null}
            </div>
            {cta ? (
              <div className="fade-in-delay-2">
                <Button asChild variant={invert ? "white-outline" : "default"}>
                  <a href={cta.href}>{cta.label}</a>
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {image ? (
        <section className="-mt-24 mb-8 lg:-mt-36">
          <div className={cn(containerClasses, containerClassName)}>
            <RoundedImage
              src={image.src}
              alt={image.alt}
              width={1400}
              height={900}
              className="h-full w-full"
              containerClassName="aspect-[16/9]"
            />
          </div>
        </section>
      ) : null}
    </>
  )
}

export { Hero }
export type { HeroProps, HeroColor }
