// Страница: Verification (/verification)
// Figma: "Verification"
// Ответственный: Shuhrat
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import AuthSplit from '@/components/auth/AuthSplit'
import FormField from '@/components/auth/FormField'
import Button from '@/components/ui/Button'
import image from '@/assets/images/auth/verification.webp'

export default function Verification() {
  const navigate = useNavigate()
  const [code, setCode] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!/^\d{4,6}$/.test(code)) {
      setError('Enter the code from the email')
      return
    }
    navigate(ROUTES.CREATE_NEW_PASSWORD)
  }

  return (
    <AuthSplit image={image} title="Verification" subtitle="Verify your code.">
      <form onSubmit={handleSubmit} noValidate className="space-y-10">
        <FormField
          id="code"
          label="Verification Code"
          inputMode="numeric"
          maxLength={6}
          placeholder="0757"
          value={code}
          onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
          error={error}
        />
        <Button type="submit" className="px-8 text-lg">
          Verify Code
        </Button>
      </form>
    </AuthSplit>
  )
}
