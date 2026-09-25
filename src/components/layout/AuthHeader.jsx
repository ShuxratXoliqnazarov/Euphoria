// Хедер страниц авторизации (Sign In, Sign Up, Reset Password ...)
// Ответственный: Shuhrat
import { NavLink } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { ROUTES } from '@/constants/routes'
import Container from '@/components/ui/Container'
import Logo from '@/components/ui/Logo'
import SearchInput from '@/components/ui/SearchInput'

const AUTH_LINKS = [
  { label: 'Login', to: ROUTES.SIGN_IN },
  { label: 'Sign Up', to: ROUTES.SIGN_UP },
]

export default function AuthHeader() {
  return (
    <header className="border-b border-border/40 bg-white">
      <Container className="flex h-[104px] items-center justify-between gap-4">
        <Logo />

        <SearchInput className="hidden w-[270px] md:flex" />

        <div className="flex items-center gap-4 sm:gap-10">
          <button type="button" className="hidden items-center gap-2 text-dark lg:flex">
            English (united States)
            <ChevronDown className="size-4" />
          </button>

          <div className="flex gap-3 sm:gap-5">
            {AUTH_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-lg border border-primary px-5 py-2.5 text-sm sm:px-10 sm:text-lg ${
                    isActive ? 'bg-primary text-white' : 'text-primary hover:bg-primary/10'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </Container>
    </header>
  )
}
