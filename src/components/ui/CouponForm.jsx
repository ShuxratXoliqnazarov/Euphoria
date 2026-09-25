import { useState } from 'react'
import Button from './Button'

// Поле промокода: используется на Cart и Checkout.
// onApply — необязательный колбэк, срабатывает при отправке непустого кода (проверки нет, бэкенда нет).
export default function CouponForm({ className = '', onApply }) {
  const [code, setCode] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (code.trim()) onApply?.(code.trim())
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
