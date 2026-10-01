import { Link } from 'react-router-dom'
import { AuthCard } from '@/components/auth/AuthCard'
import { AuthLayout } from '@/components/auth/AuthLayout'
import { LoginForm } from '@/components/auth/LoginForm'
import { OrDivider } from '@/components/ui/OrDivider'
import { SocialAuthButtons } from '@/components/ui/SocialAuthButtons'

export function LoginPage() {
  return (
    <AuthLayout
      tagline="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <AuthCard
        eyebrow="Sign In"
        title="Welcome Back"
        footer={
          <>
            New user?{' '}
            <Link to="/register" className="text-primary hover:underline">
              Create an account
            </Link>
          </>
        }
      >
        <LoginForm />
        <OrDivider className="mt-12" />
        <SocialAuthButtons className="mt-10" />
      </AuthCard>
    </AuthLayout>
  )
}