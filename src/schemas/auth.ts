import { z } from 'zod'

const email = z
  .string()
  .trim()
  .min(1, 'Email is required')
  .max(254, 'Email is too long')
  .email('Enter a valid email address')

export const loginSchema = z.object({
  email,
  password: z.string().min(1, 'Password is required').max(128, 'Password is too long'),
})

export const registerSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Please enter your full name')
    .max(80, 'Name is too long'),
  email,
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(128, 'Password is too long')
    .regex(/[A-Za-z]/, 'Password must include a letter')
    .regex(/\d/, 'Password must include a number'),
})

export type LoginValues = z.infer<typeof loginSchema>
export type RegisterValues = z.infer<typeof registerSchema>