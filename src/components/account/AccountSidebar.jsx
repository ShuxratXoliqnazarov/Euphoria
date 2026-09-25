import { Link, useLocation } from 'react-router-dom'
import { LogOut, Package, User, Heart } from 'lucide-react'
import { ROUTES } from '@/constants/routes'
import { profile } from '@/data/account'

// Левое меню личного кабинета (Figma: сайдбар на Personal Info / Delivery Address)
const NAV_ITEMS = [
  { label: 'My orders', to: ROUTES.MY_ORDERS, icon: Package },
  { label: 'Wishlist', to: ROUTES.WISHLIST, icon: Heart },
  { label: 'My info', to: ROUTES.CONTACT_DETAILS, icon: User },
]

export default function AccountSidebar() {
  const { pathname } = useLocation()
  // Add Address живёт под тем же разделом, что и My info — оба подсвечивают "My info"
  const isInfoSection = pathname === ROUTES.CONTACT_DETAILS || pathname === ROUTES.ADD_ADDRESS

  return (
    <aside className="w-full shrink-0 md:w-[260px]">
      <div className="mb-6">
        <h2 className="flex items-center gap-3 text-xl font-bold">
          <span className="h-6 w-1.5 shrink-0 rounded-full bg-primary" />
          Hello {profile.firstName}
        </h2>
        <p className="mt-1 pl-4.5 text-sm text-gray">Welcome to your Account</p>
      </div>

      <nav className="flex flex-col gap-1">
        {NAV_ITEMS.map(({ label, to, icon: Icon }) => {
          const isActive = to === ROUTES.CONTACT_DETAILS ? isInfoSection : pathname === to
          return (
            <Link
              key={label}
              to={to}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium ${
                isActive ? 'bg-light text-dark' : 'text-gray hover:text-dark'
              }`}
              style={isActive ? { boxShadow: 'inset 3px 0 0 var(--color-primary)' } : undefined}
            >
              <Icon className="size-4.5" />
              {label}
            </Link>
          )
        })}

        <button type="button" className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-danger">
          <LogOut className="size-4.5" />
          Sign out
        </button>
      </nav>
    </aside>
  )
}
