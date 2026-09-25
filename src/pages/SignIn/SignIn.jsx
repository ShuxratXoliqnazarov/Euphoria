// Страница: SignIn (/sign-in)
// Figma: "Sign In Page"
// Ответственный: Shuhrat
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import AuthSplit from '@/components/auth/AuthSplit'
import FormField from '@/components/auth/FormField'
import PasswordField from '@/components/auth/PasswordField'
import SocialLogin from '@/components/auth/SocialLogin'
import Button from '@/components/ui/Button'
import image from '@/assets/images/auth/sign-in.webp'

export default function SignIn() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ login: '', password: '' })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!form.login.trim()) newErrors.login = 'Enter your user name or email'
    if (!form.password) newErrors.password = 'Enter your password'
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) navigate(ROUTES.HOME)
  }

  return (
    <AuthSplit image={image} title="Sign In Page">
      <SocialLogin />

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <FormField
          id="login"
          name="login"
          label="User name or email address"
          value={form.login}
          onChange={handleChange}
          error={errors.login}
        />
        <div>
          <PasswordField
            id="password"
            name="password"
            label="Password"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
          />
          <Link to={ROUTES.RESET_PASSWORD} className="mt-2 block text-right text-dark underline hover:text-primary">
            Forget your password
          </Link>
        </div>

        <Button type="submit" className="px-10 text-lg">
          Sign In
        </Button>
      </form>

      <p className="mt-4 text-dark">
        Don&apos;t have an account?{' '}
        <Link to={ROUTES.SIGN_UP} className="underline hover:text-primary">
          Sign up
        </Link>
      </p>
    </AuthSplit>
  )
}
