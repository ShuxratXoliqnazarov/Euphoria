// Страница: CreateNewPassword (/new-password)
// Figma: "Create New Password"
// Ответственный: Shuhrat
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import AuthSplit from '@/components/auth/AuthSplit'
import PasswordField from '@/components/auth/PasswordField'
import Button from '@/components/ui/Button'
import image from '@/assets/images/auth/new-password.webp'

export default function CreateNewPassword() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ password: '', confirm: '' })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    if (form.password.length < 8) newErrors.password = 'Must be at least 8 characters.'
    if (form.confirm !== form.password) newErrors.confirm = 'New password and comfirm new password do not match'
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) navigate(ROUTES.SIGN_IN)
  }

  return (
    <AuthSplit
      image={image}
      title="Create New Password"
      subtitle="Your new password must be different from previous used passwords."
    >
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <PasswordField
          id="password"
          name="password"
          label="Password"
          hint="Must be at least 8 characters."
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />
        <PasswordField
          id="confirm"
          name="confirm"
          label="Confirm Password"
          value={form.confirm}
          onChange={handleChange}
          error={errors.confirm}
        />
        <Button type="submit" className="mt-4 px-8 text-lg">
          Reset Password
        </Button>
      </form>
    </AuthSplit>
  )
}
