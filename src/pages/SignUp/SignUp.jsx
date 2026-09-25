// Страница: SignUp (/sign-up)
// Figma: "Sign up page"
// Ответственный: Shuhrat
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import AuthSplit from '@/components/auth/AuthSplit'
import FormField from '@/components/auth/FormField'
import PasswordField from '@/components/auth/PasswordField'
import SocialLogin from '@/components/auth/SocialLogin'
import Button from '@/components/ui/Button'
import image from '@/assets/images/auth/sign-up.webp'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function SignUp() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '', terms: true, newsletter: true })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!EMAIL_REGEX.test(form.email)) newErrors.email = 'Enter a valid email address'
    if (form.password.length < 8) newErrors.password = 'Password must be at least 8 characters'
    if (!form.terms) newErrors.terms = 'You must agree to the terms'
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) navigate(ROUTES.VERIFICATION)
  }

  return (
    <AuthSplit image={image} title="Sign Up" subtitle="Sign up for free to access to in any of our products">
      <SocialLogin />

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <FormField
          id="email"
          name="email"
          type="email"
          label="Email Address"
          placeholder="designer@gmail.com"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />
        <PasswordField
          id="password"
          name="password"
          label="Password"
          hint="Use 8 or more characters with a mix of letters, numbers & symbols"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />

        <div className="space-y-3 text-gray">
          <label className="flex items-center gap-3">
            <input type="checkbox" name="terms" checked={form.terms} onChange={handleChange} className="size-4 accent-dark" />
            <span>
              Agree to our{' '}
              <a href="#" className="underline hover:text-primary">
                Terms of use
              </a>{' '}
              and{' '}
              <a href="#" className="underline hover:text-primary">
                Privacy Policy
              </a>
            </span>
          </label>
          {errors.terms && <p className="text-sm text-danger">{errors.terms}</p>}
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="newsletter"
              checked={form.newsletter}
              onChange={handleChange}
              className="size-4 accent-dark"
            />
            Subscribe to our monthly newsletter
          </label>
        </div>

        <Button type="submit" className="px-10 text-lg">
          Sign Up
        </Button>
      </form>

      <p className="mt-4 text-dark">
        Already have an account?{' '}
        <Link to={ROUTES.SIGN_IN} className="underline hover:text-primary">
          Log in
        </Link>
      </p>
    </AuthSplit>
  )
}
