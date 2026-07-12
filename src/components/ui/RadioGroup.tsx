import React from 'react'
import { cn } from '@/lib/utils'

interface RadioGroupProps {
  options: { value: string; label: string }[]
  value:   string
  onChange: (val: string) => void
  error?:   string
  variant?: 'pill' | 'card' // pill = horizontal small, card = larger box
}

export function RadioGroup({ options, value, onChange, error, variant = 'pill' }: RadioGroupProps) {
  return (
    <div className={cn(
      "w-full",
      variant === 'pill'
        ? "flex flex-wrap gap-3"
        : "grid grid-cols-2 sm:grid-cols-4 gap-4"
    )}>
      {options.map((option) => {
        const isSelected = option.value === value
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={cn(
              "transition-all duration-200 font-sans text-sm font-medium border text-left cursor-pointer outline-none",
              variant === 'pill'
                ? "px-5 py-2.5 rounded-full text-center flex justify-center items-center"
                : "px-5 py-4 rounded-xl flex items-center justify-center text-center h-[52px]",
              isSelected
                ? "bg-[#B97A4B]/15 border-[#B97A4B] text-[#B97A4B] shadow-[0_0_12px_rgba(185,122,75,0.15)]"
                : "bg-transparent border-[#B97A4B]/30 text-[#FBFAF1]/70 hover:border-[#B97A4B]/60",
              error && !isSelected && "border-red-400/40"
            )}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
