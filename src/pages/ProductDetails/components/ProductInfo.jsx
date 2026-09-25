import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, CreditCard, MessageSquare, Repeat, Shirt, ShoppingCart, Truck } from 'lucide-react'
import { ROUTES } from '@/constants/routes'
import Rating from '@/components/ui/Rating'

const SIZES = ['XS', 'S', 'M', 'L', 'XL']
const COLORS = ['#3c4242', '#edd146', '#eb84b0', '#9c1f35']
const FEATURES = [
  { icon: CreditCard, text: 'Secure payment' },
  { icon: Shirt, text: 'Size & Fit' },
  { icon: Truck, text: 'Free shipping' },
  { icon: Repeat, text: 'Free Shipping & Returns' },
]

export default function ProductInfo({ product }) {
  const [size, setSize] = useState('L')
  const [color, setColor] = useState(COLORS[0])

  return (
    <div className="px-4 py-10 sm:px-8 lg:w-1/2 lg:px-12 xl:pr-[100px] xl:pl-[70px]">
      <nav className="flex items-center gap-3 text-gray">
        <Link to={ROUTES.HOME} className="hover:text-dark">Shop</Link>
        <ChevronRight className="size-4" />
        <Link to={ROUTES.PRODUCT_LIST} className="hover:text-dark">
          {product.gender === 'men' ? 'Men' : 'Women'}
        </Link>
        <ChevronRight className="size-4" />
        <span>Top</span>
      </nav>

      <h1 className="mt-6 max-w-[430px] text-3xl leading-snug font-semibold md:text-[34px]">{product.title}</h1>

      <div className="mt-6 flex flex-wrap items-center gap-5 text-gray">
        <div className="flex items-center gap-3">
          <Rating value={3.5} />
          3.5
        </div>
        <span className="flex items-center gap-2">
          <MessageSquare className="size-5" />
          120 comment
        </span>
      </div>

      <div className="mt-9 flex items-center gap-5">
        <span className="font-semibold">Select Size</span>
        <a href="#" className="flex items-center gap-2 text-gray hover:text-dark">
          Size Guide <ArrowRight className="size-4" />
        </a>
      </div>
      <div className="mt-6 flex flex-wrap gap-5">
        {SIZES.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setSize(item)}
            className={`grid size-[38px] place-items-center rounded-xl border text-sm ${
              size === item ? 'border-dark bg-dark text-white' : 'border-border hover:border-dark'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <p className="mt-9 font-semibold">Colours Available</p>
      <div className="mt-5 flex gap-5">
        {COLORS.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setColor(item)}
            aria-label={`Color ${item}`}
            className={`size-[22px] rounded-full ${color === item ? 'ring-2 ring-dark ring-offset-2' : ''}`}
            style={{ backgroundColor: item }}
          />
        ))}
      </div>

      <div className="mt-9 flex flex-wrap gap-5">
        <Link
          to={ROUTES.CART}
          className="flex items-center gap-3 rounded-lg bg-primary px-10 py-3 text-lg font-semibold text-white hover:bg-primary-dark"
        >
          <ShoppingCart className="size-5" />
          Add to cart
        </Link>
        <span className="rounded-lg border border-dark px-10 py-3 text-lg font-bold">${product.price.toFixed(2)}</span>
      </div>

      <div className="mt-9 grid gap-y-6 border-t border-border/50 pt-9 sm:grid-cols-2">
        {FEATURES.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-4 font-medium">
            <span className="grid size-11 place-items-center rounded-full bg-light">
              <Icon className="size-5" />
            </span>
            {text}
          </div>
        ))}
      </div>
    </div>
  )
}
