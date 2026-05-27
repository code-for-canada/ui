"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "../utils"

/** Stacks {@link Checkbox}es with consistent spacing. Pair with a {@link FieldSet} + {@link FieldLegend} for an accessible group caption. */
function CheckboxGroup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      role="group"
      data-slot="checkbox-group"
      className={cn("flex w-full flex-col gap-2", className)}
      {...props}
    />
  )
}

/** Multi-select boxed option (Radix). Pass label text as children. Stack inside a {@link CheckboxGroup} for consistent spacing. */
function Checkbox({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "group/checkbox flex w-full cursor-pointer items-center gap-3 rounded-xl border-2 border-input bg-white px-4 py-3 text-left text-base transition-colors",
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
          "grid size-6 shrink-0 place-items-center rounded-md border-2 border-muted-foreground/40 bg-white text-white transition-colors",
          "group-data-[state=checked]/checkbox:border-foreground group-data-[state=checked]/checkbox:bg-foreground"
        )}
      >
        <CheckboxPrimitive.Indicator className="flex items-center justify-center">
          <Check className="size-4" strokeWidth={3} />
        </CheckboxPrimitive.Indicator>
      </span>
      {children != null && <span className="flex-1">{children}</span>}
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox, CheckboxGroup }
