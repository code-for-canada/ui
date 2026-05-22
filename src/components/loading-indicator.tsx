import * as React from "react"
import { cn } from "../utils"
import { Body } from "./typography"

interface LoadingIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  gifSrc?: string
  staticSrc?: string
}

function LoadingIndicator({
  className,
  label,
  gifSrc = "/C4C-Logo-Animated.gif",
  staticSrc = "/logo.svg",
  ...props
}: LoadingIndicatorProps) {
  return (
    <div
      role="status"
      className={cn(
        "flex flex-col items-center justify-center gap-4 py-16",
        className
      )}
      {...props}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={gifSrc}
        alt=""
        aria-hidden="true"
        width={80}
        height={80}
        className="motion-reduce:hidden"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={staticSrc}
        alt=""
        aria-hidden="true"
        width={80}
        height={80}
        className="hidden motion-reduce:block"
      />
      {label ? (
        <Body size="lead" aria-live="polite">{label}</Body>
      ) : (
        <span className="sr-only">Loading</span>
      )}
    </div>
  )
}

export { LoadingIndicator }
export type { LoadingIndicatorProps }
