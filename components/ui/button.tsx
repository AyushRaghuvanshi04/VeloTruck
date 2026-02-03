import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary to-primary/90 text-white hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl hover:scale-105 active:scale-95",
        destructive: "bg-gradient-to-r from-destructive to-destructive/90 text-white hover:from-destructive/90 hover:to-destructive shadow-lg hover:shadow-xl hover:scale-105",
        outline: "border-2 border-gray-300 bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:border-primary/50 hover:shadow-md hover:scale-105",
        secondary: "bg-gradient-to-r from-secondary to-secondary/90 text-white hover:from-secondary/90 hover:to-secondary shadow-lg hover:shadow-xl hover:scale-105 active:scale-95",
        ghost: "hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:shadow-md hover:scale-105",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary/80",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {variant === "default" && !asChild && (
          <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        )}
        {variant === "secondary" && !asChild && (
          <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        )}
        <span className="relative z-10">{children}</span>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
