import React from "react"

interface FormFieldProps {
  label:        string
  error?:       string
  required?:    boolean
  helper?:      string
  children:     React.ReactNode
}

export function FormField({ label, error, required, helper, children }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5 w-full text-left">
      <label className="text-sm font-medium text-[#FBFAF1] tracking-wide flex items-center">
        {label}
        {required && <span className="text-[#B97A4B] ml-1">*</span>}
      </label>
      {children}
      {helper && !error && (
        <p className="text-xs text-[rgba(251,250,241,0.45)] leading-relaxed">{helper}</p>
      )}
      {error && (
        <p className="text-xs text-red-400 flex items-center gap-1 mt-0.5">
          <span className="text-sm">⚠</span> {error}
        </p>
      )}
    </div>
  )
}
