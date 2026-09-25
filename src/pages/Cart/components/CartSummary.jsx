import { formatPrice } from '@/utils/formatPrice'

// Итог справа от корзины: Sub Total / Shipping / Grand Total
export default function CartSummary({ subtotal, shipping }) {
  return (
    <dl className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <dt className="text-gray">Sub Total</dt>
        <dd className="font-semibold">{formatPrice(subtotal)}</dd>
      </div>
      <div className="flex items-center justify-between">
        <dt className="text-gray">Shipping</dt>
        <dd className="font-semibold">{shipping === 0 ? 'Free' : formatPrice(shipping)}</dd>
      </div>
      <div className="flex items-center justify-between border-t border-border pt-4">
        <dt className="text-lg font-semibold">Grand Total</dt>
        <dd className="text-lg font-bold text-primary">{formatPrice(subtotal + shipping)}</dd>
      </div>
    </dl>
  )
}
