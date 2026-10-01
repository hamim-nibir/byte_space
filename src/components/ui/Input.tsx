import { forwardRef, useId, type InputHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const autoId = useId()
    const inputId = id ?? autoId
    return (
      <div className="flex flex-col gap-2">
        {label && <label htmlFor={inputId} className="text-sm font-medium">{label}</label>}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={!!error}
          className={cn(
            'rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20',
            error && 'border-red-500',
            className,
          )}
          {...props}
        />
        {error && <p role="alert" className="text-xs text-red-600">{error}</p>}
      </div>
    )
  },
)
Input.displayName = 'Input'