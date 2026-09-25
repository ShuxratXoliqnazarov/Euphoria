import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

// <Breadcrumbs items={[{ label: 'Home', to: ROUTES.HOME }, { label: 'Cart' }]} />
export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-gray">
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <span key={item.label} className="flex items-center gap-2">
            {item.to && !isLast ? (
              <Link to={item.to} className="hover:text-primary">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? 'text-dark' : ''}>{item.label}</span>
            )}
            {!isLast && <ChevronRight className="size-3.5" />}
          </span>
        )
      })}
    </nav>
  )
}
