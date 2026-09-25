import { formatPrice } from '@/utils/formatPrice'

// Способ доставки — один вариант, информационный блок (Figma: "Shipping Method")
export default function ShippingMethod({ fee }) {
  return (
    <div className="rounded-lg border border-border p-4">
      <p className="font-semibold">Arrives by Monday, June 7</p>
      <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
        <div>
          <p className="font-medium">Delivery Charges</p>
          <p className="text-sm text-gray">Additional fees may apply</p>
        </div>
        <p className="font-semibold">{fee === 0 ? 'Free' : formatPrice(fee)}</p>
      </div>
    </div>
  )
}
