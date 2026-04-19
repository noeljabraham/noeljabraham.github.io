import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[5px] text-sm font-medium ring-offset-[color:var(--ring-offset)] transition-all duration-200 gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--blank)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "text-[var(--mtext)] bg-[var(--main)] border-2 border-[color:var(--blank)] shadow-[4px_4px_0px_0px_var(--blank)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none",
        noShadow: "text-[var(--mtext)] bg-[var(--main)] border-2 border-[color:var(--blank)]",
        neutral:
          "bg-[var(--bw)] text-[var(--mtext)] border-2 border-[color:var(--blank)] shadow-[4px_4px_0px_0px_var(--blank)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none",
        reverse:
          "text-[var(--mtext)] bg-[var(--main)] border-2 border-[color:var(--blank)] translate-x-[4px] translate-y-[4px] shadow-none hover:translate-x-0 hover:translate-y-0 hover:shadow-[4px_4px_0px_0px_var(--blank)]"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
