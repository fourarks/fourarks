"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const gradientButtonVariants = cva(
  [
    "gradient-button",
    "inline-flex items-center justify-center",
    "rounded-[11px] min-w-[132px] px-9 py-4",
    "font-sans font-bold text-base leading-[19px]",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
    "disabled:pointer-events-none disabled:opacity-50 transition-all select-none duration-200 active:scale-[0.98]",
  ],
  {
    variants: {
      variant: {
        chocolate: "gradient-button-chocolate text-white",
        ivory: "gradient-button-ivory text-[#2D140A]",
        white: "gradient-button-white text-[#2D140A]",
        default: "gradient-button-chocolate text-white",
        variant: "gradient-button-variant text-white",
      },
    },
    defaultVariants: {
      variant: "chocolate",
    },
  }
)

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gradientButtonVariants> {
  asChild?: boolean
  width?: string
  height?: string
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant = "chocolate", asChild = false, width, height, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const combinedStyle = {
      ...(width ? { width } : {}),
      ...(height ? { height } : {}),
      ...style,
    } as React.CSSProperties

    return (
      <Comp
        className={cn(gradientButtonVariants({ variant, className }))}
        style={combinedStyle}
        ref={ref}
        {...props}
      />
    )
  }
)
GradientButton.displayName = "GradientButton"

export { GradientButton, gradientButtonVariants }
