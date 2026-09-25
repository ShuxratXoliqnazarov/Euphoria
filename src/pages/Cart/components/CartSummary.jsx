import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import { ROUTES } from '@/constants/routes'
import { formatPrice } from '@/utils/formatPrice'
import { getShipping } from '@/utils/shipping'

// Итог справа от корзины: Subtotal / Shipping / Total + кнопка на Checkout
export default function CartSummary({ subtotal }) {
  const shipping = getShipping(subtotal)

  return (
    <div className="w-full rounded-xl border border-border p-6 md:w-[340px]">
      <dl className="flex flex-col gap-4">
        <div className="flex items-center justify-between text-sm text-gray">
          <dt>Subtotal</dt>
          <dd className="font-semibold text-dark">{formatPrice(subtotal)}</dd>
        </div>
        <div className="flex items-center justify-between text-sm text-gray">
          <dt>Shipping</dt>
          <dd className="font-semibold text-dark">{shipping === 0 ? 'Free' : formatPrice(shipping)}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-border pt-4 text-base">
          <dt className="font-semibold">Total</dt>
          <dd className="text-lg font-bold text-primary">{formatPrice(subtotal + shipping)}</dd>
        </div>
      </dl>

      <Button to={ROUTES.CHECKOUT} className="mt-6 w-full">
        Proceed to Checkout
        <ArrowRight className="size-4" />
      </Button>
    </div>
  )
}
