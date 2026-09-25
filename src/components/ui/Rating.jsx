import { Star } from 'lucide-react'

// Звёзды рейтинга: <Rating value={3.5} />
export default function Rating({ value, className = 'size-5' }) {
  return (
    <div className="flex gap-1" aria-label={`Rating ${value} of 5`}>
      {[1, 2, 3, 4, 5].map((n) => {
        const fill = Math.min(Math.max(value - n + 1, 0), 1) * 100
        return (
          <span key={n} className="relative">
            <Star className={`${className} text-star`} />
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill}%` }}>
              <Star className={`${className} fill-star text-star`} />
            </span>
          </span>
        )
      })}
    </div>
  )
}
