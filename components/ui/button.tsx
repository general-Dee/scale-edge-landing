import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/utils/cn"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-se-orange disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-se-orange text-white hover:brightness-105 shadow-lg shadow-se-orange/20",
        outline: "border border-se-orange bg-transparent text-se-orange hover:bg-se-orange/10",
        ghost: "hover:bg-white/5 text-white",
      },
      size: {
        default: "h-12 px-6 py-3 text-base md:h-14 md:px-8",
        sm: "h-9 px-4 text-sm",
        lg: "h-14 px-8 text-lg",
        mobile: "h-[52px] px-5 text-base w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
