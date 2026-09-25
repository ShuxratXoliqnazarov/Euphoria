// Общий компонент (на всех страницах, кроме авторизации)
// Ответственный: Shuhrat
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Heart, Menu, ShoppingCart, User, X } from 'lucide-react'
import { ROUTES } from '@/constants/routes'
import Container from '@/components/ui/Container'
import Logo from '@/components/ui/Logo'
import SearchInput from '@/components/ui/SearchInput'

const NAV_LINKS = [
  { label: 'Shop', to: ROUTES.HOME },
  { label: 'Men', to: `${ROUTES.PRODUCT_LIST}?category=men` },
  { label: 'Women', to: `${ROUTES.PRODUCT_LIST}?category=women` },
  { label: 'Combos', to: `${ROUTES.PRODUCT_LIST}?category=combos` },
  { label: 'Joggers', to: `${ROUTES.PRODUCT_LIST}?category=joggers` },
]

const ICON_LINKS = [
  { label: 'Wishlist', to: ROUTES.WISHLIST, icon: Heart },
  { label: 'Account', to: ROUTES.CONTACT_DETAILS, icon: User },
  { label: 'Cart', to: ROUTES.CART, icon: ShoppingCart },
]

export default function Header() {
  const { pathname, search } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  // Товары без категории и страница товара считаются разделом Women (как в макете)
  const current = pathname + search
  const isActive = (to) =>
    to === ROUTES.HOME
      ? pathname === ROUTES.HOME
      : current === to || (to.endsWith('women') && pathname.startsWith('/product') && !search)

  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-white">
      <Container className="flex h-[104px] items-center justify-between gap-6">
        <Logo />

        <nav className="hidden gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`text-[22px] transition-colors duration-200 ${isActive(link.to) ? 'font-medium text-dark' : 'text-gray hover:text-dark'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <SearchInput className="hidden w-[270px] md:flex" />

        <div className="flex items-center gap-3">
          {ICON_LINKS.map(({ label, to, icon: Icon }) => (
            <Link
              key={label}
              to={to}
              aria-label={label}
              className="grid size-11 place-items-center rounded-lg bg-light text-gray transition-all duration-200 hover:scale-110 hover:bg-primary hover:text-white active:scale-95"
            >
              <Icon className="size-5" />
            </Link>
          ))}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            className="grid size-11 place-items-center rounded-lg bg-light transition-all duration-200 hover:scale-110 hover:bg-primary hover:text-white active:scale-95 lg:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      {menuOpen && (
        <nav className="flex flex-col gap-4 border-t border-border/40 px-4 py-4 lg:hidden">
          <SearchInput className="md:hidden" />
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={isActive(link.to) ? 'font-medium' : 'text-gray'}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
