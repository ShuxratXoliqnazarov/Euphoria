import { Link, useLocation } from 'react-router-dom'
import { LogOut, MapPin, Package, User } from 'lucide-react'
import { ROUTES } from '@/constants/routes'

// Левое меню личного кабинета: ContactDetails, AddAddress и (позже) Wishlist/MyOrders — общий каркас
const NAV_ITEMS = [
  { label: 'My Profile', to: ROUTES.CONTACT_DETAILS, icon: User },
  { label: 'Address Book', to: ROUTES.ADD_ADDRESS, icon: MapPin },
  { label: 'My Orders', to: ROUTES.MY_ORDERS, icon: Package },
]

export default function AccountSidebar() {
  const { pathname } = useLocation()

  return (
    <aside className="w-full shrink-0 md:w-[260px]">
      <nav className="flex flex-col gap-1">
        {NAV_ITEMS.map(({ label, to, icon: Icon }) => {
          const isActive = pathname === to
          return (
            <Link
              key={label}
              to={to}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium ${
                isActive ? 'bg-primary text-white' : 'text-gray hover:bg-light hover:text-dark'
              }`}
            >
              <Icon className="size-4.5" />
              {label}
            </Link>
          )
        })}

        <button
          type="button"
          className="mt-4 flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-danger hover:bg-danger/10"
        >
          <LogOut className="size-4.5" />
          Logout
        </button>
      </nav>
    </aside>
  )
}
