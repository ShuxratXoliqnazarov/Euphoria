import { formatPrice } from '@/utils/formatPrice'

const COUPON_DISCOUNT = 30

// Правая колонка Checkout: список товаров + итог (Figma: "Order Summary")
export default function OrderSummary({ lines, subtotal, shipping, couponApplied }) {
  const discount = couponApplied ? COUPON_DISCOUNT : 0
  const total = subtotal - discount + shipping
  const itemsCount = lines.reduce((sum, line) => sum + line.qty, 0)

  return (
    <div className="flex flex-col gap-6 rounded-xl border border-border p-6 lg:sticky lg:top-24">
      <h2 className="text-lg font-semibold">Order Summary</h2>

      <ul className="flex flex-col gap-4">
        {lines.map((line) => (
          <li key={line.productId} className="flex items-center gap-3">
            <img src={line.product.image} alt={line.product.title} className="size-14 shrink-0 rounded-lg bg-light object-cover" />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-medium">
                {line.product.title} x{line.qty}
              </span>
              {line.color && <span className="text-xs text-gray">Color : {line.color}</span>}
            </span>
            <span className="shrink-0 text-sm font-semibold">{formatPrice(line.product.price * line.qty)}</span>
          </li>
        ))}
      </ul>

      <dl className="flex flex-col gap-3 border-t border-border pt-4">
        <div className="flex items-center justify-between text-sm text-gray">
          <dt>Subtotal ({itemsCount} items)</dt>
          <dd className="font-semibold text-dark">{formatPrice(subtotal)}</dd>
        </div>
        {couponApplied && (
          <div className="flex items-center justify-between text-sm text-gray">
            <dt>Savings</dt>
            <dd className="font-semibold text-danger">-{formatPrice(discount)}</dd>
          </div>
        )}
        <div className="flex items-center justify-between text-sm text-gray">
          <dt>Shipping</dt>
          <dd className="font-semibold text-dark">{shipping === 0 ? 'Free' : formatPrice(shipping)}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-border pt-3 text-base">
          <dt className="font-semibold">Total</dt>
          <dd className="text-lg font-bold text-primary">{formatPrice(total)}</dd>
        </div>
      </dl>
    </div>
  )
}
