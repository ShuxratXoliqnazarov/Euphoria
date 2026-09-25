import { useState } from 'react'

const FIELD_CLASS = 'w-full rounded-lg bg-light px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary'

const BRANDS = ['G Pay', 'VISA', 'PayPal', 'Paypass']

// Способ оплаты — список радио-опций (Figma: "Payment Method")
export default function PaymentMethod() {
  const [method, setMethod] = useState('card')

  return (
    <div>
      <p className="mb-4 text-sm text-gray">All transactions are secure and encrypted.</p>

      <div className={`rounded-lg border p-4 ${method === 'card' ? 'border-primary' : 'border-border'}`}>
        <label className="flex cursor-pointer items-start gap-3">
          <input type="radio" name="payment" checked={method === 'card'} onChange={() => setMethod('card')} className="mt-1 accent-primary" />
          <span>
            <span className="block font-semibold">Credit Card</span>
            <span className="text-sm text-gray">We accept all major credit cards.</span>
          </span>
        </label>

        {method === 'card' && (
          <div className="mt-5 flex flex-col gap-5 pl-7">
            <div className="flex flex-wrap gap-3">
              {BRANDS.map((brand) => (
                <span key={brand} className="rounded-lg border border-border px-4 py-2 text-xs font-semibold">
                  {brand}
                </span>
              ))}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label>
                <span className="mb-2 block text-sm font-medium text-dark">Card Number</span>
                <input required type="text" placeholder="Card number" className={FIELD_CLASS} />
              </label>
              <label>
                <span className="mb-2 block text-sm font-medium text-dark">Name of Card</span>
                <input required type="text" placeholder="Name of card" className={FIELD_CLASS} />
              </label>
              <label>
                <span className="mb-2 block text-sm font-medium text-dark">Expiration Date</span>
                <input required type="text" placeholder="MM/YY" className={FIELD_CLASS} />
              </label>
              <label>
                <span className="mb-2 block text-sm font-medium text-dark">Security Code</span>
                <input required type="text" placeholder="CVV" className={FIELD_CLASS} />
              </label>
            </div>
          </div>
        )}
      </div>

      <label className={`mt-3 flex cursor-pointer items-start gap-3 rounded-lg border p-4 ${method === 'cod' ? 'border-primary' : 'border-border'}`}>
        <input type="radio" name="payment" checked={method === 'cod'} onChange={() => setMethod('cod')} className="mt-1 accent-primary" />
        <span>
          <span className="block font-semibold">Cash on Delivery</span>
          <span className="text-sm text-gray">Pay with cash upon delivery.</span>
        </span>
      </label>

      <label className={`mt-3 flex cursor-pointer items-start gap-3 rounded-lg border p-4 ${method === 'paypal' ? 'border-primary' : 'border-border'}`}>
        <input type="radio" name="payment" checked={method === 'paypal'} onChange={() => setMethod('paypal')} className="mt-1 accent-primary" />
        <span className="font-semibold">PayPal</span>
      </label>
    </div>
  )
}
