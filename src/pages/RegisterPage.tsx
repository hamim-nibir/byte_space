import { Link } from 'react-router-dom'
import { AuthCard } from '@/components/auth/AuthCard'
import { AuthLayout } from '@/components/auth/AuthLayout'
import { RegisterForm } from '@/components/auth/RegisterForm'

export function RegisterPage() {
  return (
    <AuthLayout
      tagline="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
    >
      <AuthCard
        eyebrow="Create an Account"
        title={
          <>
            Welcome to
            <br /> ByteSpace
          </>
        }
        footer={
          <>
            Already have an account?{' '}
            <Link to="/login" className="text-primary hover:underline">
              Login
            </Link>
          </>
        }
      >
        <RegisterForm />
      </AuthCard>
    </AuthLayout>
  )
}