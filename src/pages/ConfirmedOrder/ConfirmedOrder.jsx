// Страница: ConfirmedOrder (/order-confirmed)
// Figma: "Confirmed Order"
// Ответственный: Burhoniddin
import { CheckCircle2 } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { ROUTES } from '@/constants/routes'

export default function ConfirmedOrder() {
  return (
    <Container className="flex flex-col items-center gap-6 py-20 text-center md:py-28">
      <span className="grid size-24 place-items-center rounded-full bg-primary/10 text-primary">
        <CheckCircle2 className="size-12" />
      </span>

      <div>
        <h1 className="text-3xl font-bold md:text-4xl">Your order is confirmed!</h1>
        <p className="mt-3 max-w-md text-gray">
          Thank you for your purchase — we'll send a confirmation email with the tracking details shortly.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Button to={ROUTES.HOME}>Continue Shopping</Button>
        <Button to={ROUTES.MY_ORDERS} variant="outline">
          View Order
        </Button>
      </div>
    </Container>
  )
}
