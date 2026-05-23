import * as React from "react";
import { cn } from "../utils";
import { Heading, Subtitle, Title } from "./typography";
import { PageContainer } from "./page-container";

type HeroColor = "white" | "blue" | "red" | "purple";

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
  /** Optional content (e.g. an image), height-capped. Sits beside the text on desktop; on mobile it stacks below and overlaps the hero's bottom edge. */
  secondary?: React.ReactNode;
  /** Extra classes for the inner PageContainer */
  containerClassName?: string;
}

/** Page hero: a scheme-coloured banner with a title, optional summary, CTAs, and a side slot. */
function Hero({
  title,
  summary,
  cta,
  color = "white",
  invert = false,
  secondary,
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
          "pt-12 lg:pt-20",
          // Extra bottom padding on mobile gives the overlapping image colour to sit on.
          secondary ? "pb-44 lg:pb-20" : "pb-12 lg:pb-20",
          className,
        )}
        {...props}
      >
        <PageContainer className={containerClassName}>
          <div
            className={cn(
              secondary && "lg:grid lg:grid-cols-2 lg:items-center lg:gap-16",
            )}
          >
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

            {/* Desktop: beside the text, no overlap */}
            {secondary ? (
              <div className="fade-in-delay-2 hidden lg:block">
                <div className="ml-auto w-full max-w-md max-h-[28rem]">
                  {secondary}
                </div>
              </div>
            ) : null}
          </div>
        </PageContainer>
      </section>

      {/* Mobile: stacks below and overlaps the hero's bottom edge by ~half the image */}
      {secondary ? (
        <div className="fade-in-delay-2 -mt-40 mb-8 lg:hidden">
          <PageContainer className={containerClassName}>
            <div className="w-full max-w-md max-h-[28rem]">{secondary}</div>
          </PageContainer>
        </div>
      ) : null}
    </>
  );
}

export { Hero };
export type { HeroProps, HeroColor };
