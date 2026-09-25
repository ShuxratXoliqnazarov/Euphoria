import { Link } from 'react-router-dom'
import { orderPath } from '@/constants/routes'
import Button from '@/components/ui/Button'

export default function OrderCard({ order }) {
  const firstItem = order.items?.[0]

  return (
    <article className="overflow-hidden rounded-xl border border-border/30 bg-white transition-all duration-300 hover:shadow-md">
      {/* Header bar */}
      <div className="flex flex-col gap-3 bg-light/80 p-5 md:flex-row md:items-center md:justify-between md:p-6">
        {/* Left: order number and dates */}
        <div className="space-y-1">
          <h3 className="text-base font-bold text-dark md:text-lg">
            Order no: {order.orderNumber}
          </h3>
          <p className="text-xs text-gray md:text-sm">
            <span className="font-semibold text-dark/70">Order Date :</span>{' '}
            {order.orderDate}
          </p>
          <p className="text-xs text-gray md:text-sm">
            <span className="font-semibold text-dark/70">
              Estimated Delivery Date :
            </span>{' '}
            {order.estimatedDelivery}
          </p>
        </div>

        {/* Right: status and payment method */}
        <div className="space-y-1 text-left md:text-right">
          <p className="text-xs text-gray md:text-sm">
            <span className="font-semibold text-dark/70">Order Status :</span>{' '}
            <span
              className={`font-semibold ${
                order.status === 'Cancelled'
                  ? 'text-danger'
                  : order.status === 'Delivered'
                  ? 'text-emerald-600'
                  : 'text-dark'
              }`}
            >
              {order.status}
            </span>
          </p>
          <p className="text-xs text-gray md:text-sm">
            <span className="font-semibold text-dark/70">Payment Method :</span>{' '}
            {order.paymentMethod}
          </p>
        </div>
      </div>

      {/* Body: item details and View Detail CTA */}
      <div className="flex flex-col items-start justify-between gap-5 p-5 sm:flex-row sm:items-center md:p-6">
        {firstItem && (
          <div className="flex items-center gap-5">
            <div className="size-20 shrink-0 overflow-hidden rounded-lg bg-light sm:size-24">
              <img
                src={firstItem.image}
                alt={firstItem.title}
                className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-dark line-clamp-1">
                {firstItem.title}
              </h4>
              <p className="text-xs text-gray md:text-sm">
                <span className="font-semibold text-dark/80">Colour :</span>{' '}
                {firstItem.color}
              </p>
              <p className="text-xs text-gray md:text-sm">
                <span className="font-semibold text-dark/80">Qty :</span>{' '}
                {firstItem.quantity}
              </p>
              <p className="text-xs font-bold text-dark md:text-sm">
                <span>Total :</span> ${order.total.toFixed(2)}
              </p>
            </div>
          </div>
        )}

        <Link
          to={orderPath(order.id)}
          className="w-full sm:w-auto"
        >
          <Button className="w-full sm:w-auto !py-2.5 !px-6 text-sm font-semibold shadow-xs hover:shadow-md hover:scale-105 active:scale-95 transition-all">
            View Detail
          </Button>
        </Link>
      </div>
    </article>
  )
}
