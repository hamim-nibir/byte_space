import type { LoginValues, RegisterValues } from '@/schemas/auth'

const simulateLatency = (ms = 800) => new Promise<void>((resolve) => setTimeout(resolve, ms))

/* Mock service: swap these bodies for real API calls later. */
export async function signIn(credentials: LoginValues) {
  await simulateLatency()
  return { email: credentials.email }
}

export async function signUp(values: RegisterValues) {
  await simulateLatency()
  return { fullName: values.fullName, email: values.email }
}