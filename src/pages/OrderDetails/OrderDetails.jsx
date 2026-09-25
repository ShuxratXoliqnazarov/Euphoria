// Страница: Order Details (/account/orders/:id)
// Figma: "Order Details"
// Ответственный: Nozina
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import AccountSidebar from '@/components/layout/AccountSidebar'
import OrderProgress from './components/OrderProgress'
import OrderItemRow from './components/OrderItemRow'
import { defaultOrderDetails, ordersData } from '@/data/orders'
import { ROUTES } from '@/constants/routes'

export default function OrderDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  // Find order if ID matches one in ordersData, otherwise use defaultOrderDetails
  const allOrders = [
    ...ordersData.active,
    ...ordersData.cancelled,
    ...ordersData.completed,
  ]
  const matchedOrder = allOrders.find((o) => o.id === id)

  const initialData = matchedOrder
    ? {
        ...defaultOrderDetails,
        id: matchedOrder.id,
        orderNumber: matchedOrder.orderNumber,
        placedOn: matchedOrder.orderDate,
        total: matchedOrder.total,
        items: matchedOrder.items.length > 0 ? matchedOrder.items : defaultOrderDetails.items,
      }
    : defaultOrderDetails

  const [orderDetails, setOrderDetails] = useState(initialData)

  const handleCancelItem = (itemId) => {
    setOrderDetails((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== itemId),
    }))
  }

  const breadcrumbs = [
    { label: 'Home', to: ROUTES.HOME },
    { label: 'My Account', to: ROUTES.CONTACT_DETAILS },
    { label: 'Order Detail' },
  ]

  return (
    <div className="pb-24">
      <Container>
        <Breadcrumbs items={breadcrumbs} />

        <div className="flex flex-col lg:flex-row gap-10 xl:gap-14">
          {/* Account Sidebar */}
          <AccountSidebar />

          {/* Main Content Area */}
          <section className="flex-1 min-w-0">
            {/* Back Button + Title */}
            <div className="mb-6 flex items-center gap-2">
              <button
                type="button"
                onClick={() => navigate(ROUTES.MY_ORDERS)}
                className="group flex items-center gap-2 text-2xl md:text-[28px] font-bold text-dark hover:text-primary transition-colors cursor-pointer"
              >
                <ChevronLeft className="size-7 md:size-8 transition-transform duration-200 group-hover:-translate-x-1" />
                <span>Order Details</span>
              </button>
            </div>

            {/* Order Summary Strip */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl bg-light/80 p-5 md:p-6 border border-border/20">
              <div>
                <h2 className="text-base md:text-lg font-bold text-dark">
                  Order no: {orderDetails.orderNumber}
                </h2>
                <p className="mt-1 text-xs md:text-sm text-gray">
                  Placed On {orderDetails.placedOn}
                </p>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-base md:text-lg font-bold font-accent text-dark">
                  Total : ${orderDetails.total.toFixed(2)}
                </p>
              </div>
            </div>

            {/* Progress Stepper & Alert Banner */}
            <div className="my-8">
              <OrderProgress
                currentStep={orderDetails.currentStep}
                steps={orderDetails.steps}
                statusNote={orderDetails.statusNote}
              />
            </div>

            {/* Items Container */}
            <div className="rounded-2xl border border-border/30 bg-light/30 p-6 md:p-8">
              <div className="divide-y divide-border/30">
                {orderDetails.items.map((item) => (
                  <OrderItemRow
                    key={item.id}
                    item={item}
                    onCancelItem={handleCancelItem}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  )
}
