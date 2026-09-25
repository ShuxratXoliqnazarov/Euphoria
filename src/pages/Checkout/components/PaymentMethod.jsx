import { useState } from 'react'
import { Banknote, CreditCard, Wallet } from 'lucide-react'

const METHODS = [
  { id: 'card', label: 'Credit Card', icon: CreditCard },
  { id: 'paypal', label: 'PayPal', icon: Wallet },
  { id: 'cod', label: 'Cash on Delivery', icon: Banknote },
]

const FIELD_CLASS =
  'w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary'

// Способ оплаты — табы (Figma: "Payment Method"). Для карты — доп. поля.
export default function PaymentMethod() {
  const [method, setMethod] = useState('card')

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-3 gap-3">
        {METHODS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => setMethod(id)}
            className={`flex flex-col items-center gap-2 rounded-lg border p-4 text-xs font-medium sm:text-sm ${
              method === id ? 'border-primary bg-primary/5 text-primary' : 'border-border text-gray hover:text-dark'
            }`}
          >
            <Icon className="size-5" />
            {label}
          </button>
        ))}
      </div>

      {method === 'card' && (
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="sm:col-span-2">
            <span className="mb-2 block text-sm font-medium text-dark">Card Number</span>
            <input required type="text" placeholder="1234 5678 9012 3456" className={FIELD_CLASS} />
          </label>
          <label>
            <span className="mb-2 block text-sm font-medium text-dark">Expiry Date</span>
            <input required type="text" placeholder="MM/YY" className={FIELD_CLASS} />
          </label>
          <label>
            <span className="mb-2 block text-sm font-medium text-dark">CVV</span>
            <input required type="text" placeholder="123" className={FIELD_CLASS} />
          </label>
        </div>
      )}

      {method === 'paypal' && (
        <p className="rounded-lg bg-light p-4 text-sm text-gray">
          Вы будете перенаправлены на PayPal для завершения оплаты после оформления заказа.
        </p>
      )}

      {method === 'cod' && (
        <p className="rounded-lg bg-light p-4 text-sm text-gray">Оплата наличными курьеру при получении заказа.</p>
      )}
    </div>
  )
}
