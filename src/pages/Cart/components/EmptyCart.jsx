import { ShoppingBasket } from 'lucide-react'
import Button from '@/components/ui/Button'
import { ROUTES } from '@/constants/routes'

// Состояние пустой корзины (Figma: "Empty Cart")
export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center gap-6 py-20 text-center">
      <span className="grid size-24 place-items-center rounded-full bg-light text-primary">
        <ShoppingBasket className="size-11" />
      </span>
      <div>
        <h2 className="text-xl font-semibold">Your cart is empty and sad :(</h2>
        <p className="mt-2 text-gray">Add something to make it happy!</p>
      </div>
      <Button to={ROUTES.PRODUCT_LIST}>Continue Shopping</Button>
    </div>
  )
}
