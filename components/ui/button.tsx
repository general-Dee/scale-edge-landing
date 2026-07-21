import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/utils/cn"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-se-orange disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-se-orange text-white hover:brightness-105 shadow-md shadow-se-orange/10",
        outline: "border border-se-orange bg-transparent text-se-orange hover:bg-se-orange/10",
        ghost: "hover:bg-se-ink/5 text-se-ink",
        link: "text-se-orange underline-offset-4 hover:underline p-0 h-auto font-medium",
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
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
