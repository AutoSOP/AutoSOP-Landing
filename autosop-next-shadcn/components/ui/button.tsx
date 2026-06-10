import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 px-4 py-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-[#c3181d]",
        outline: "border border-secondary text-foreground hover:bg-muted",
        ghost: "hover:bg-muted",
        secondary: "bg-secondary text-secondary-foreground hover:bg-[#AEB7C0]",
      },
      size: {
        default: "h-10",
        lg: "h-11 px-6 text-base",
        sm: "h-9 px-3",
        icon: "h-9 w-9 p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
