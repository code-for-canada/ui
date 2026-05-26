import * as React from "react"

import { cn } from "../utils"

export type CardScheme =
  | "white"
  | "white-inverted"
  | "blue"
  | "blue-inverted"
  | "purple"
  | "purple-inverted"
  | "red"
  | "red-inverted"

interface CardProps extends React.ComponentProps<"div"> {
  /** Optional colour scheme applied to the card. Sets the background, typography, and icon colours from the matching `scheme-*` palette. Omit to keep the default card surface. */
  scheme?: CardScheme
}

/** Rounded content surface for a single idea. Compose `CardHeader` (icon + heading + description), `CardContent`, and `CardFooter` (one action/link). Pass `scheme` (e.g. `"blue-inverted"`) to theme the card — its background, typography, and icon adapt to that palette. */
function Card({ className, scheme, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(
        "flex flex-col rounded-3xl overflow-hidden pb-6 bg-card text-card-foreground border",
        scheme && `scheme-${scheme}`,
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-2 px-6 mt-5", className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 mt-3", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center gap-2 px-6 mt-3", className)}
      {...props}
    />
  )
}

export { Card, CardHeader, CardContent, CardFooter }
