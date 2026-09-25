import { useState } from 'react'
import Button from './Button'

// Поле промокода: используется на Cart и Checkout
export default function CouponForm({ className = '' }) {
  const [code, setCode] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    // Проверки промокода нет — бэкенда пока нет, форма для вёрстки
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-wrap gap-4 ${className}`}>
      <input
        type="text"
        value={code}
        onChange={(event) => setCode(event.target.value)}
        placeholder="Coupon Code"
        className="min-w-0 flex-1 rounded-lg border border-border bg-white px-5 py-3 text-sm outline-none focus:border-primary"
      />
      <Button type="submit" variant="dark">
        Apply Coupon
      </Button>
    </form>
  )
}
