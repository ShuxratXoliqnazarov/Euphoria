// Страница: Cart (/cart)
// Figma: "Cart Page" + "Empty Cart"
// Ответственный: Burhoniddin
import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import CouponForm from '@/components/ui/CouponForm'
import { ROUTES } from '@/constants/routes'
import { getProductById } from '@/data/products'
import { useCart } from '@/hooks/useCart'
import CartItemRow from './components/CartItemRow'
import CartSummary from './components/CartSummary'
import EmptyCart from './components/EmptyCart'

export default function Cart() {
  const cart = useCart()

  const lines = cart.items
    .map((item) => ({ ...item, product: getProductById(item.productId) }))
    .filter((line) => line.product)

  const subtotal = lines.reduce((sum, line) => sum + line.product.price * line.qty, 0)

  return (
    <Container className="flex flex-col gap-8 py-10 md:py-14">
      <div className="flex flex-col gap-4">
        <Breadcrumbs items={[{ label: 'Home', to: ROUTES.HOME }, { label: 'Cart' }]} />
        <h1 className="text-3xl font-bold md:text-4xl">Your Cart</h1>
      </div>

      {lines.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div className="hidden items-center rounded-lg bg-dark px-6 py-4 text-xs font-semibold tracking-wide text-white uppercase sm:flex sm:gap-6">
            <span className="min-w-[220px] flex-1">Product</span>
            <span className="w-20 sm:w-24">Price</span>
            <span className="w-[124px]">Quantity</span>
            <span className="w-20 sm:w-24">Subtotal</span>
            <span className="w-8" />
          </div>

          <div>
            {lines.map((line) => (
              <CartItemRow
                key={line.productId}
                product={line.product}
                qty={line.qty}
                onQtyChange={(qty) => cart.setQty(line.productId, qty)}
                onRemove={() => cart.remove(line.productId)}
              />
            ))}
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <CouponForm className="md:max-w-md" />
            <CartSummary subtotal={subtotal} />
          </div>
        </>
      )}
    </Container>
  )
}
