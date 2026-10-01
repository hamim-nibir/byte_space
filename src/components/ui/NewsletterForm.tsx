import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { cn } from '@/lib/cn'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const value = email.trim()

    if (!EMAIL_PATTERN.test(value)) {
      setSubscribed(false)
      setError('Please enter a valid email address.')
      return
    }

    setError('')
    // TODO: send `value` to your newsletter API here
    setSubscribed(true)
    setEmail('')
  }

  return (
    <form noValidate onSubmit={handleSubmit} className={cn('w-full', className)}>
      <div className="flex items-start gap-4">
        <div className="min-w-0 flex-1">
          <Input
            type="email"
            name="email"
            aria-label="Email address"
            placeholder="Enter your email"
            autoComplete="email"
            maxLength={254}
            value={email}
            error={error}
            onChange={(e) => setEmail(e.target.value)}
            className="h-[52px] rounded-full px-6 text-base"
          />
        </div>
        <Button type="submit" className="h-[52px] px-8 text-base">
          Subscribe
        </Button>
      </div>

      {subscribed && (
        <p role="status" className="mt-3 text-sm text-primary">
          Thanks for subscribing!
        </p>
      )}
    </form>
  )
}