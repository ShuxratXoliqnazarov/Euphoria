// Страница: CheckEmail (/check-email)
// Figma: "Check Email"
// Ответственный: Shuhrat
import { Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { ROUTES } from '@/constants/routes'
import AuthSplit from '@/components/auth/AuthSplit'
import image from '@/assets/images/auth/check-email.webp'

export default function CheckEmail() {
  return (
    <AuthSplit image={image} title="Check Email">
      <p className="-mt-4 text-gray">
        Please check your email inbox and click on the provided link to reset your password. If you don&apos;t
        receive email,{' '}
        <Link to={ROUTES.RESET_PASSWORD} className="font-semibold text-primary hover:underline">
          Click here to resend
        </Link>
      </p>

      <Link to={ROUTES.SIGN_IN} className="mt-8 inline-flex items-center gap-2 text-dark">
        <ChevronLeft className="size-4" />
        Back to <span className="underline hover:text-primary">Login</span>
      </Link>
    </AuthSplit>
  )
}
