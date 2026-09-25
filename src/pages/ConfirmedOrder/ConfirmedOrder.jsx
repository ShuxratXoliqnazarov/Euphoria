// Страница: ConfirmedOrder (/order-confirmed)
// Figma: "Confirmed Order"
// Ответственный: Burhoniddin
import { useState } from 'react'
import { CheckCircle2, X } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { ROUTES } from '@/constants/routes'

const RAYS = Array.from({ length: 8 }, (_, i) => i * 45)

export default function ConfirmedOrder() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <Container className="flex items-center justify-center py-20 md:py-28">
      <div className="relative w-full max-w-sm rounded-2xl border border-border p-10 text-center">
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Close"
          className="absolute top-4 right-4 text-gray hover:text-dark"
        >
          <X className="size-5" />
        </button>

        <div className="relative mx-auto grid size-24 place-items-center">
          {RAYS.map((deg) => (
            <span
              key={deg}
              className="absolute h-8 w-0.5 rounded-full bg-border"
              style={{ transform: `rotate(${deg}deg) translateY(-34px)` }}
            />
          ))}
          <span className="relative grid size-16 place-items-center rounded-full bg-primary/10 text-primary">
            <CheckCircle2 className="size-9" />
          </span>
        </div>

        <h1 className="mt-6 text-2xl font-bold">Your Order is Confirmed</h1>

        <Button to={ROUTES.HOME} className="mt-6 w-full">
          Continue Shopping
        </Button>
      </div>
    </Container>
  )
}
