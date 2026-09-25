// Общий компонент (на всех страницах, кроме авторизации)
// Ответственный: Shuhrat
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Container from '@/components/ui/Container'
import {
  FacebookIcon,
  GooglePlayIcon,
  InstagramIcon,
  LinkedinIcon,
  PhoneIcon,
  TwitterIcon,
} from '@/components/ui/BrandIcons'
import { footerColumns, footerContacts, popularCategories } from '@/data/footer'

const SOCIALS = [
  { label: 'Facebook', icon: FacebookIcon },
  { label: 'Instagram', icon: InstagramIcon },
  { label: 'Twitter', icon: TwitterIcon },
  { label: 'LinkedIn', icon: LinkedinIcon },
]

export default function Footer() {
  const [showCategories, setShowCategories] = useState(false)

  return (
    <footer className="bg-footer pt-16 pb-10 text-white md:pt-20">
      <Container className="md:px-[5%]">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[repeat(3,auto)_1.4fr] md:gap-16">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-6 text-2xl font-semibold md:text-[28px]">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/90 hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-1">
            <h3 className="mb-6 text-2xl font-semibold md:text-[28px]">Location</h3>
            <ul className="space-y-3">
              {footerContacts.map((item) => (
                <li key={item} className="text-white/90">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="flex gap-3">
            {SOCIALS.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid size-9 place-items-center rounded-lg bg-white text-dark hover:bg-primary hover:text-white"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>

          <div className="md:w-[42%]">
            <h3 className="mb-5 text-2xl font-semibold md:text-[28px]">Download The App</h3>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 hover:bg-white/10">
                <GooglePlayIcon className="size-7" />
                <span className="leading-tight">
                  <span className="block text-[10px] text-white/70">android app on</span>
                  Google Play
                </span>
              </a>
              <a href="#" className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 hover:bg-white/10">
                <PhoneIcon className="size-7" />
                <span className="leading-tight">
                  <span className="block text-[10px] text-white/70">Available on the</span>
                  App Store
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-y border-white/20">
          <button
            type="button"
            onClick={() => setShowCategories(!showCategories)}
            className="flex w-full items-center justify-between py-6 text-2xl font-semibold md:text-[28px]"
          >
            Popular Categories
            <ChevronDown className={`size-6 transition-transform ${showCategories ? 'rotate-180' : ''}`} />
          </button>
          {showCategories && (
            <div className="flex flex-wrap gap-x-6 gap-y-2 pb-6 text-white/80">
              {popularCategories.map((category) => (
                <a key={category} href="#" className="hover:text-white">
                  {category}
                </a>
              ))}
            </div>
          )}
        </div>

        <p className="mt-10 text-center text-sm font-bold md:text-lg">
          Copyright © {new Date().getFullYear()} Euphoria Folks Pvt Ltd. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
