import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Church-specific variants
        hero: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl text-base px-8 py-6 rounded-full font-semibold tracking-wide",
        heroOutline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 py-6 font-semibold tracking-wide",
        heroLight: "bg-background/20 backdrop-blur-sm text-background border border-background/30 hover:bg-background/30 rounded-full px-8 py-6 font-semibold",
        heroDark: "bg-primary text-primary-foreground hover:brightness-110 shadow-xl hover:shadow-2xl rounded-full px-8 py-6 font-semibold text-lg",
        warm: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-3 shadow-md hover:shadow-lg font-medium",
        warmOutline: "border-2 border-primary text-primary hover:bg-primary/10 rounded-lg px-6 py-3",
        bold: "bg-primary text-primary-foreground hover:brightness-110 rounded-none px-8 py-4 font-bold uppercase tracking-widest shadow-lg",
        boldOutline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none px-8 py-4 font-bold uppercase tracking-widest",
        // Sacred & Liturgical variants
        sacred: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm px-6 py-3 font-medium tracking-wide shadow-md border border-accent/20",
        sacredOutline: "border border-primary text-primary hover:bg-primary/10 rounded-sm px-6 py-3 font-medium tracking-wide",
        // Mission & Movement variants
        mission: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-3 font-bold tracking-tight shadow-md",
        missionOutline: "border-2 border-primary text-primary hover:bg-primary/10 rounded-lg px-6 py-3 font-bold tracking-tight",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
