import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm md:text-base text-gray">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={item.label} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="size-4 shrink-0 text-border" />}
              {isLast || !item.to ? (
                <span className="font-semibold text-dark">{item.label}</span>
              ) : (
                <Link
                  to={item.to}
                  className="transition-colors hover:text-dark hover:underline underline-offset-4"
                >
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
