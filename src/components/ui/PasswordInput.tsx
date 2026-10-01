import { forwardRef, useState, type ComponentPropsWithoutRef } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Input } from '@/components/ui/Input'

type PasswordInputProps = Omit<ComponentPropsWithoutRef<typeof Input>, 'type' | 'endAdornment'>

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>((props, ref) => {
  const [visible, setVisible] = useState(false)

  return (
    <Input
      ref={ref}
      type={visible ? 'text' : 'password'}
      endAdornment={
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? 'Hide password' : 'Show password'}
          aria-pressed={visible}
          className="text-muted transition hover:text-ink focus-visible:outline-2 focus-visible:outline-primary"
        >
          {visible ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      }
      {...props}
    />
  )
})
PasswordInput.displayName = 'PasswordInput'