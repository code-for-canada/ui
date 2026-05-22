import * as React from "react"
import { cn } from "../utils"
import { Body } from "./typography"
import { loadingGif, loadingStatic } from "./loading-indicator-assets"

interface LoadingIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  /** Override the animated logo (defaults to the bundled brand gif) */
  gifSrc?: string
  /** Override the reduced-motion fallback (defaults to the bundled brand logo) */
  staticSrc?: string
}

function LoadingIndicator({
  className,
  label,
  gifSrc = loadingGif,
  staticSrc = loadingStatic,
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
        width={160}
        height={78}
        className="hidden h-auto w-40 motion-reduce:block"
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
