import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";
import { IconCircle } from "./icon-circle";

// Title - Single-use hero/page title (fixed size)
const titleVariants = cva(
  "text-[var(--scheme-muted)] tracking-tight leading-[0.95] text-balance text-pretty text-5xl md:text-7xl lg:text-7xl font-bold [&_strong]:animate-gradient [&_strong]:bg-linear-to-r/oklch [&_strong]:from-purple-900  [&_strong]:via-red-800 [&_strong]:via-25% [&_strong]:to-red-600 [&_strong]:bg-[length:80%] [&_strong]:bg-clip-text [&_strong]:bg-repeat-round [&_strong]:text-transparent"
);

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

function Title({ className, as: Component = "h1", ...props }: TitleProps) {
  return (
    <Component className={cn(titleVariants(), className)} {...props} />
  );
}

// Subtitle - Chunkier secondary headlines
const subtitleVariants = cva("text-[var(--scheme-text)] tracking-tight text-pretty text-muted-foreground font-medium [&_strong]:font-semibold [&_strong]:text-[var(--scheme-muted)]", {
  variants: {
    size: {
      default: "text-xl md:text-2xl",
      lg: "text-2xl md:text-3xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface SubtitleProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color">,
    VariantProps<typeof subtitleVariants> {
  as?: "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

function Subtitle({
  className,
  size,
  as: Component = "p",
  ...props
}: SubtitleProps) {
  return (
    <Component
      className={cn(subtitleVariants({ size, className }))}
      {...props}
    />
  );
}

// Heading - General headings with configurable size (decoupled from semantic level)
const headingVariants = cva("tracking-tight text-balance font-semibold has-[strong]:font-semibold [&_strong]:font-bold text-[var(--scheme-muted)] has-[strong]:text-[var(--scheme-muted)] [&_strong]:text-[var(--scheme-text)]", {
  variants: {
    size: {
      sm: "text-xl leading-[1.1] md:text-2xl lg:text-2xl",
      md: "text-2xl leading-[1.1] md:text-3xl lg:text-3xl",
      lg: "text-4xl leading-[1.1]md:text-4xl lg:text-4xl ",
      xl: "text-5xl leading-[1.1] md:text-5xl lg:text-5xl",
    }
  },
  defaultVariants: {
    size: "lg",
  },
});

interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color">,
    VariantProps<typeof headingVariants> {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
}

function Heading({ className, size, as: Component, ...props }: HeadingProps) {
  return (
    <Component
      className={cn(headingVariants({ size, className }))}
      {...props}
    />
  );
}

// Eyebrow - Uppercase section labels
const eyebrowVariants = cva("font-semibold uppercase leading-none", {
  variants: {
    size: {
      sm: "text-base",
      default: "text-lg",
      lg: "text-xl",
    },
    color: {
      red: "text-primary",
      purple: "text-c4c-purple-800",
      blue: "text-c4c-blue-800",
    },
  },
  defaultVariants: {
    size: "default",
    color: "red",
  },
});

export type EyebrowColor = "red" | "purple" | "blue"

interface EyebrowProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof eyebrowVariants> {
  as?: "span" | "p" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  icon?: React.ReactNode;
}

function Eyebrow({
  className,
  size,
  color,
  icon,
  as: Component = "p",
  children,
  ...props
}: EyebrowProps) {
  const text = (
    <Component
      className={cn(eyebrowVariants({ size, color, className }))}
      {...props}
    >
      {children}
    </Component>
  );

  if (icon) {
    return (
      <div className="flex items-center gap-2">
        <IconCircle className="-mt-[2px]" color={color}>{icon}</IconCircle>
        {text}
      </div>
    );
  }

  return text;
}

// Body - Paragraph text with lead variant
const bodyVariants = cva("text-foreground font-medium max-w-[65ch] [&_strong]:text-black", {
  variants: {
    size: {
      xs: "text-sm leading-snug",
      sm: "text-base leading-snug",
      default: "text-lg leading-snug",
      lg: "text-xl leading-normal",
      lead: "text-xl tracking-tight font-medium has-[strong]:text-neutral-600 [&_strong]:font-semibold",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface BodyProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof bodyVariants> {
  as?: "p" | "span" | "div";
}

function Body({ className, size, as: Component = "p", ...props }: BodyProps) {
  return (
    <Component
      className={cn(bodyVariants({ size, className }))}
      {...props}
    />
  );
}

export {
  Title,
  titleVariants,
  Subtitle,
  subtitleVariants,
  Heading,
  headingVariants,
  Eyebrow,
  eyebrowVariants,
  Body,
  bodyVariants,
};
