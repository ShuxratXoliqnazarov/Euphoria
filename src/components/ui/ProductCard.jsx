import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { productPath } from '@/constants/routes'

// Карточка товара: Home (In The Limelight), ProductList, ProductDetails (Similar Products)
export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false)

  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-xl bg-light">
        <Link to={productPath(product.id)}>
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="aspect-[282/370] w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        <button
          type="button"
          onClick={() => setLiked(!liked)}
          aria-label="Add to wishlist"
          className="absolute top-4 right-4 grid size-8 place-items-center rounded-full bg-white transition-transform duration-200 hover:scale-[1.15] active:scale-90"
        >
          <Heart className={`size-4 transition-colors ${liked ? 'fill-primary text-primary' : 'text-dark'}`} />
        </button>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <Link to={productPath(product.id)} className="block truncate font-semibold hover:text-primary">
            {product.title}
          </Link>
          <p className="mt-1 text-sm text-gray">{product.brand}</p>
        </div>
        <span className="shrink-0 rounded-lg bg-light px-4 py-2 text-sm font-bold">
          ${product.price.toFixed(2)}
        </span>
      </div>
    </article>
  )
}
