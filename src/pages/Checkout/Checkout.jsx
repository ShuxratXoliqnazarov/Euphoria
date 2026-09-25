// Страница: Checkout (/checkout)
// Figma: "Check Out"
// Ответственный: Burhoniddin
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import CouponForm from '@/components/ui/CouponForm'
import Button from '@/components/ui/Button'
import { ROUTES } from '@/constants/routes'
import { getProductById } from '@/data/products'
import { useCart } from '@/hooks/useCart'
import { useAddresses } from '@/hooks/useAddresses'
import BillingForm from './components/BillingForm'
import ShippingAddressPicker from './components/ShippingAddressPicker'
import ShippingMethod from './components/ShippingMethod'
import PaymentMethod from './components/PaymentMethod'
import OrderSummary from './components/OrderSummary'

const DELIVERY_FEE = 5

export default function Checkout() {
  const navigate = useNavigate()
  const cart = useCart()
  const { addresses } = useAddresses()
  const [sameAsBilling, setSameAsBilling] = useState(true)
  const [selectedAddressId, setSelectedAddressId] = useState(addresses[0]?.id)
  const [couponApplied, setCouponApplied] = useState(false)

  const lines = cart.items
    .map((item) => ({ ...item, product: getProductById(item.productId) }))
    .filter((line) => line.product)

  const subtotal = lines.reduce((sum, line) => sum + line.product.price * line.qty, 0)

  // Не <form>: внутри уже своя форма у CouponForm, вложенные <form> в HTML недопустимы.
  const handlePlaceOrder = () => {
    cart.clear()
    navigate(ROUTES.CONFIRMED_ORDER)
  }

  return (
    <Container className="flex flex-col gap-8 py-10 md:py-14">
      <Breadcrumbs
        items={[{ label: 'Home', to: ROUTES.HOME }, { label: 'My Account', to: ROUTES.CONTACT_DETAILS }, { label: 'Check Out' }]}
      />

      <h1 className="flex items-center gap-3 text-2xl font-bold">
        <span className="h-6 w-1.5 shrink-0 rounded-full bg-primary" />
        Check Out
      </h1>

      <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
        <div className="flex flex-col gap-10">
          <section className="flex flex-col gap-5">
            <h2 className="text-xl font-semibold">Billing Details</h2>
            <BillingForm />
            <div className="flex flex-wrap items-center gap-5">
              <Button type="button" className="w-full sm:w-auto">
                Continue to delivery
              </Button>
              <label className="flex items-center gap-2 text-sm text-gray">
                <input type="checkbox" className="accent-primary" />
                Save my information for a faster checkout
              </label>
            </div>
          </section>

          <section className="flex flex-col gap-5">
            <h2 className="text-xl font-semibold">Shipping Address</h2>
            <ShippingAddressPicker
              sameAsBilling={sameAsBilling}
              onChangeSameAsBilling={setSameAsBilling}
              selectedId={selectedAddressId}
              onSelect={setSelectedAddressId}
            />
          </section>

          <section className="flex flex-col gap-5">
            <h2 className="text-xl font-semibold">Shipping Method</h2>
            <ShippingMethod fee={DELIVERY_FEE} />
          </section>

          <section className="flex flex-col gap-5">
            <h2 className="text-xl font-semibold">Coupon Code</h2>
            <CouponForm onApply={() => setCouponApplied(true)} />
          </section>

          <section className="flex flex-col gap-5">
            <h2 className="text-xl font-semibold">Payment Method</h2>
            <PaymentMethod />
          </section>

          <Button
            type="button"
            onClick={handlePlaceOrder}
            disabled={lines.length === 0}
            className="w-full sm:w-auto sm:self-start"
          >
            Pay Now
          </Button>
        </div>

        <OrderSummary lines={lines} subtotal={subtotal} shipping={DELIVERY_FEE} couponApplied={couponApplied} />
      </div>
    </Container>
  )
}
