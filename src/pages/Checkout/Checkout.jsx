// Страница: Checkout (/checkout)
// Figma: "Checkout"
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
import PaymentMethod from './components/PaymentMethod'
import OrderSummary from './components/OrderSummary'

export default function Checkout() {
  const navigate = useNavigate()
  const cart = useCart()
  const { addresses } = useAddresses()
  const [selectedAddressId, setSelectedAddressId] = useState(addresses[0]?.id)

  const lines = cart.items
    .map((item) => ({ ...item, product: getProductById(item.productId) }))
    .filter((line) => line.product)

  const subtotal = lines.reduce((sum, line) => sum + line.product.price * line.qty, 0)

  // Не <form>, а div: внутри уже есть своя форма у CouponForm, вложенные <form> в HTML недопустимы.
  const handlePlaceOrder = () => {
    cart.clear()
    navigate(ROUTES.CONFIRMED_ORDER)
  }

  return (
    <Container className="flex flex-col gap-8 py-10 md:py-14">
      <div className="flex flex-col gap-4">
        <Breadcrumbs
          items={[{ label: 'Home', to: ROUTES.HOME }, { label: 'Cart', to: ROUTES.CART }, { label: 'Checkout' }]}
        />
        <h1 className="text-3xl font-bold md:text-4xl">Checkout</h1>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
        <div className="flex flex-col gap-10">
          <section className="flex flex-col gap-5">
            <h2 className="text-xl font-semibold">Billing Details</h2>
            <BillingForm />
          </section>

          <section className="flex flex-col gap-5">
            <h2 className="text-xl font-semibold">Shipping Address</h2>
            <ShippingAddressPicker selectedId={selectedAddressId} onSelect={setSelectedAddressId} />
          </section>

          <section className="flex flex-col gap-5">
            <h2 className="text-xl font-semibold">Coupon Code</h2>
            <CouponForm />
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
            Place Order
          </Button>
        </div>

        <OrderSummary lines={lines} subtotal={subtotal} />
      </div>
    </Container>
  )
}
