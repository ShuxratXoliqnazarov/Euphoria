import { Link, useLocation } from 'react-router-dom'
import { Heart, LogOut, Package, User } from 'lucide-react'
import { ROUTES } from '@/constants/routes'

const NAV_ITEMS = [
  { label: 'My orders', to: ROUTES.MY_ORDERS, icon: Package },
  { label: 'Wishlist', to: ROUTES.WISHLIST, icon: Heart },
  { label: 'My info', to: ROUTES.CONTACT_DETAILS, icon: User },
  { label: 'Sign out', to: ROUTES.SIGN_IN, icon: LogOut },
]

export default function AccountSidebar({ className = '' }) {
  const { pathname } = useLocation()

  const isActive = (to) => {
    if (to === ROUTES.MY_ORDERS) {
      return pathname.startsWith('/account/orders')
    }
    return pathname === to
  }

  return (
    <aside className={`w-full lg:w-[280px] shrink-0 ${className}`}>
      {/* User Greeting */}
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <span className="h-6 w-1 rounded-full bg-primary" />
          <h2 className="text-2xl font-bold tracking-tight text-dark md:text-[28px]">
            Hello Jhanvi
          </h2>
        </div>
        <p className="mt-1 text-sm text-gray pl-4">Welcome to your Account</p>
      </div>

      {/* Nav Menu */}
      <nav className="flex flex-col space-y-1">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.to)
          const Icon = item.icon

          return (
            <Link
              key={item.label}
              to={item.to}
              className={`group flex items-center gap-3.5 px-4 py-3 text-base font-medium transition-all duration-200 ${
                active
                  ? 'border-l-4 border-dark bg-light font-bold text-dark shadow-xs'
                  : 'border-l-4 border-transparent text-gray hover:bg-light/60 hover:text-dark hover:pl-5'
              }`}
            >
              <Icon
                className={`size-5 transition-transform duration-200 group-hover:scale-110 ${
                  active ? 'text-dark' : 'text-gray group-hover:text-dark'
                }`}
              />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
