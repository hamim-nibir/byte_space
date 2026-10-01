import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { PasswordInput } from '@/components/ui/PasswordInput'
import { registerSchema, type RegisterValues } from '@/schemas/auth'
import { signUp } from '@/services/auth'

const fieldClass = 'h-[52px] bg-surface text-base'

export function RegisterForm() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: { fullName: '', email: '', password: '' },
  })

  const onSubmit = async (values: RegisterValues) => {
    try {
      await signUp(values)
      navigate('/login')
    } catch {
      setError('root', { message: 'Unable to create your account. Please try again.' })
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Full Name"
        autoComplete="name"
        placeholder="Jamie Davis"
        maxLength={80}
        error={errors.fullName?.message}
        className={fieldClass}
        {...register('fullName')}
      />
      <Input
        label="Email"
        type="email"
        autoComplete="email"
        placeholder="designer@example.com"
        maxLength={254}
        error={errors.email?.message}
        className={fieldClass}
        {...register('email')}
      />
      <PasswordInput
        label="Password"
        autoComplete="new-password"
        placeholder="********"
        maxLength={128}
        error={errors.password?.message}
        className={fieldClass}
        {...register('password')}
      />

      {errors.root && (
        <p role="alert" className="text-sm text-red-600">
          {errors.root.message}
        </p>
      )}

      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting} className="h-[52px] px-8 text-base">
          {isSubmitting ? 'Creating account…' : 'Continue'}
        </Button>
      </div>
    </form>
  )
}