"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"

import { cn } from "../utils"

/** Single-choice list of boxed options (Radix). Wrap one or more {@link RadioGroupItem}s. */
function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("flex w-full flex-col gap-2", className)}
      {...props}
    />
  )
}

/** One option in a {@link RadioGroup}. Renders as a clickable boxed row with a dot indicator; pass label text as children. */
function RadioGroupItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "group/radio-group-item flex w-full cursor-pointer items-center gap-3 rounded-xl border-2 border-input bg-background px-4 py-3 text-left text-base transition-colors",
        "hover:bg-muted",
        "data-[state=checked]:border-foreground data-[state=checked]:bg-muted",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-ring focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className={cn(
          "grid size-6 shrink-0 place-items-center rounded-full border-2 border-muted-foreground/40 transition-colors",
          "group-data-[state=checked]/radio-group-item:border-foreground"
        )}
      >
        <RadioGroupPrimitive.Indicator className="block size-3 rounded-full bg-foreground" />
      </span>
      {children != null && <span className="flex-1">{children}</span>}
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
