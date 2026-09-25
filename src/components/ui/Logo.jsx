import { Link } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'

export default function Logo({ className = '' }) {
  return (
    <Link to={ROUTES.HOME} className={`flex flex-col leading-none text-dark ${className}`}>
      <span className="font-logo text-4xl">Euphoria</span>
      <span className="-mt-1 self-end pr-1 font-logo text-xs text-gray">Keep it classy</span>
    </Link>
  )
}
