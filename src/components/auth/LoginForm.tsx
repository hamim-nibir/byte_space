import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { PasswordInput } from '@/components/ui/PasswordInput'
import { loginSchema, type LoginValues } from '@/schemas/auth'
import { signIn } from '@/services/auth'

const fieldClass = 'h-[52px] bg-surface text-base'

export function LoginForm() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  })

  const onSubmit = async (values: LoginValues) => {
    try {
      await signIn(values)
      navigate('/')
    } catch {
      setError('root', { message: 'Unable to sign in. Please try again.' })
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
        autoComplete="current-password"
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
          {isSubmitting ? 'Signing in…' : 'Sign In'}
        </Button>
      </div>
    </form>
  )
}