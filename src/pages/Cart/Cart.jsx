// Страница: Cart (/cart)
// Figma: "Add To Cart" + "Empty Cart"
// Ответственный: Burhoniddin
import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import CouponForm from '@/components/ui/CouponForm'
import Button from '@/components/ui/Button'
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
  const shipping = lines.reduce((sum, line) => sum + (line.shipping ?? 0), 0)

  return (
    <Container className="flex flex-col gap-6 py-10 md:py-14">
      <Breadcrumbs items={[{ label: 'Home', to: ROUTES.HOME }, { label: 'Add To Cart' }]} />

      {lines.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div className="hidden items-center rounded-lg bg-dark px-6 py-4 text-xs font-semibold tracking-wide text-white uppercase sm:flex sm:gap-6">
            <span className="min-w-[220px] flex-1">Product Details</span>
            <span className="w-20 sm:w-24">Price</span>
            <span className="w-[124px]">Quantity</span>
            <span className="w-16 sm:w-20">Shipping</span>
            <span className="w-20 sm:w-24">Subtotal</span>
            <span className="w-8">Action</span>
          </div>

          <div>
            {lines.map((line) => (
              <CartItemRow
                key={line.productId}
                product={line.product}
                line={line}
                onQtyChange={(qty) => cart.setQty(line.productId, qty)}
                onRemove={() => cart.remove(line.productId)}
              />
            ))}
          </div>

          <div className="flex flex-col gap-10 rounded-xl bg-light p-6 md:flex-row md:justify-between md:p-10">
            <div className="flex flex-col gap-4 md:max-w-md">
              <div>
                <h2 className="text-lg font-semibold">Discount Codes</h2>
                <p className="text-sm text-gray">Enter your coupon code if you have one</p>
              </div>
              <CouponForm />
              <Button to={ROUTES.PRODUCT_LIST} variant="white" className="self-start">
                Continue Shopping
              </Button>
            </div>

            <div className="flex flex-col gap-6 md:w-[300px]">
              <CartSummary subtotal={subtotal} shipping={shipping} />
              <Button to={ROUTES.CHECKOUT}>Proceed To Checkout</Button>
            </div>
          </div>
        </>
      )}
    </Container>
  )
}
