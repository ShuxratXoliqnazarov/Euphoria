// Страница: ResetPassword (/reset-password)
// Figma: "Reset Password"
// Ответственный: Shuhrat
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import AuthSplit from '@/components/auth/AuthSplit'
import FormField from '@/components/auth/FormField'
import Button from '@/components/ui/Button'
import image from '@/assets/images/auth/reset-password.webp'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ResetPassword() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!EMAIL_REGEX.test(email)) {
      setError('We can not find your email')
      return
    }
    navigate(ROUTES.CHECK_EMAIL)
  }

  return (
    <AuthSplit
      image={image}
      title="Reset Your Password"
      subtitle="Enter your email and we'll send you a link to reset your password. Please check it."
    >
      <form onSubmit={handleSubmit} noValidate className="space-y-8">
        <FormField
          id="email"
          type="email"
          label="Email"
          placeholder="focus001@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error}
        />
        <Button type="submit" className="px-12 text-lg">
          Send
        </Button>
      </form>

      <p className="mt-4 text-dark">
        Back to{' '}
        <Link to={ROUTES.SIGN_IN} className="underline hover:text-primary">
          Login
        </Link>
      </p>
    </AuthSplit>
  )
}
