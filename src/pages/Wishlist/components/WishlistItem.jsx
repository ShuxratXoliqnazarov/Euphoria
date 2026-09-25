import { useState } from 'react'
import { Check, ShoppingBag, X } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function WishlistItem({ item, onRemove, onAddToCart }) {
  const [isRemoving, setIsRemoving] = useState(false)
  const [isAdded, setIsAdded] = useState(false)

  const handleRemove = () => {
    setIsRemoving(true)
    setTimeout(() => {
      onRemove(item.id)
    }, 280)
  }

  const handleAddToCart = () => {
    setIsAdded(true)
    if (onAddToCart) onAddToCart(item)
    setTimeout(() => {
      setIsAdded(false)
    }, 1800)
  }

  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-b border-border/30 transition-all duration-300 ${
        isRemoving
          ? 'opacity-0 -translate-x-8 max-h-0 py-0 overflow-hidden border-transparent'
          : 'opacity-100 translate-x-0'
      }`}
    >
      {/* Left part: Remove button + Image + Info */}
      <div className="flex items-center gap-4 md:gap-6 w-full sm:w-auto">
        {/* Remove cross button */}
        <button
          type="button"
          onClick={handleRemove}
          aria-label={`Remove ${item.title} from wishlist`}
          className="grid size-9 shrink-0 place-items-center rounded-full text-dark/70 hover:bg-light hover:text-danger transition-colors cursor-pointer"
        >
          <X className="size-5 transition-transform duration-200 hover:rotate-90" />
        </button>

        {/* Product Image */}
        <div className="size-24 md:size-28 shrink-0 overflow-hidden rounded-xl bg-light">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <div className="min-w-0">
          <h3 className="text-base md:text-lg font-bold text-dark hover:text-primary transition-colors line-clamp-1">
            {item.title}
          </h3>
          <p className="mt-1 text-sm text-dark font-medium">
            <span className="font-semibold text-dark">Color :</span>{' '}
            <span className="text-gray">{item.color}</span>
          </p>
          <p className="text-sm text-dark font-medium">
            <span className="font-semibold text-dark">Quantity :</span>{' '}
            <span className="text-gray">{item.quantity}</span>
          </p>
        </div>
      </div>

      {/* Right part: Price + Add to cart */}
      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0">
        <span className="text-lg md:text-xl font-bold font-accent text-dark">
          ${item.price.toFixed(2)}
        </span>

        <Button
          onClick={handleAddToCart}
          className={`min-w-[130px] !py-2.5 !px-5 text-sm font-semibold rounded-lg transition-all duration-300 active:scale-95 ${
            isAdded
              ? '!bg-emerald-600 !text-white ring-2 ring-emerald-400/40'
              : 'hover:shadow-md'
          }`}
        >
          {isAdded ? (
            <>
              <Check className="size-4 animate-bounce" />
              <span>Added!</span>
            </>
          ) : (
            <>
              <ShoppingBag className="size-4 opacity-80" />
              <span>Add to cart</span>
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
