import * as React from "react";
import { cn } from "../utils";
import { Heading, Subtitle, Title } from "./typography";
import { RoundedImage } from "./rounded-image";
import { PageContainer } from "./page-container";

type HeroColor = "white" | "blue" | "red" | "purple";

interface HeroImage {
  src: string;
  alt: string;
}

interface HeroProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  /** Hero title — plain text or rich nodes (e.g. <strong>) */
  title?: React.ReactNode;
  /** Supporting summary — plain text or rich nodes */
  summary?: React.ReactNode;
  /** Call-to-action content, e.g. one or more <Button>s. Multiple are spaced automatically. */
  cta?: React.ReactNode;
  /** Brand colour scheme applied to the hero background */
  color?: HeroColor;
  /** Use the dark (inverted) variant of the scheme */
  invert?: boolean;
  /** Optional image that overlaps the bottom edge of the hero */
  image?: HeroImage;
  /** Extra classes for the inner PageContainer */
  containerClassName?: string;
}

function Hero({
  title,
  summary,
  cta,
  color = "white",
  invert = false,
  image,
  className,
  containerClassName,
  ...props
}: HeroProps) {
  const scheme = `scheme-${color}${invert ? "-inverted" : ""}`;
  return (
    <>
      <section
        className={cn(
          scheme,
          "py-12 lg:py-20",
          image && "pb-32 lg:pb-48",
          className,
        )}
        {...props}
      >
        <PageContainer className={containerClassName}>
          <div className="space-y-6">
            <div className="space-y-4">
              {summary ? (
                <Title
                  as="h1"
                  className="fade-in"
                >
                  {title}
                </Title>
              ) : (
                <Heading
                  as="h1"
                  size="xl"
                  className="fade-in"
                >
                  {title}
                </Heading>
              )}
              {summary ? (
                <Subtitle
                  className="text-[var(--scheme-text)] fade-in-delay-1 max-w-2xl"
                >
                  {summary}
                </Subtitle>
              ) : null}
            </div>
            {cta ? (
              <div className="fade-in-delay-1 flex flex-wrap items-center gap-3">
                {cta}
              </div>
            ) : null}
          </div>
        </PageContainer>
      </section>

      {image ? (
        <section className="-mt-24 mb-8 lg:-mt-36">
          <PageContainer className={containerClassName}>
            <RoundedImage
              src={image.src}
              alt={image.alt}
              width={1400}
              height={900}
              className="h-full w-full"
              containerClassName="aspect-[16/9]"
            />
          </PageContainer>
        </section>
      ) : null}
    </>
  );
}

export { Hero };
export type { HeroProps, HeroColor };
