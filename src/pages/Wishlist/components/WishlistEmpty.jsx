import { Link } from 'react-router-dom'
import { Heart, RefreshCw } from 'lucide-react'
import { ROUTES } from '@/constants/routes'
import Button from '@/components/ui/Button'

export default function WishlistEmpty({ onRestore }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-border/30 bg-white px-6 py-16 text-center shadow-xs md:py-24">
      {/* Heart circular icon */}
      <div className="grid size-28 place-items-center rounded-full bg-[#e8f8f0] text-emerald-500 transition-transform duration-300 hover:scale-105">
        <Heart className="size-14 stroke-[1.75]" />
      </div>

      {/* Main message */}
      <h3 className="mt-8 text-2xl font-extrabold text-dark md:text-3xl">
        Your wishlist is empty.
      </h3>
      <p className="mt-2.5 max-w-[460px] text-sm text-gray md:text-base">
        You don&apos;t have any products in the wishlist yet. You will find a lot
        of interesting products on our Shop page.
      </p>

      {/* Actions */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
        <Link to={ROUTES.PRODUCT_LIST}>
          <Button className="!px-10 !py-3.5 text-base font-semibold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all">
            Continue Shopping
          </Button>
        </Link>

        {onRestore && (
          <button
            type="button"
            onClick={onRestore}
            className="inline-flex items-center gap-2 rounded-lg border border-border/60 px-5 py-3 text-sm font-semibold text-gray hover:text-dark hover:border-dark transition-all cursor-pointer"
          >
            <RefreshCw className="size-4" />
            <span>Reset Demo Items</span>
          </button>
        )}
      </div>
    </div>
  )
}
