import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import { useAddresses } from '@/hooks/useAddresses'

// Выбор адреса доставки (Figma: "Shipping Address" на Checkout)
export default function ShippingAddressPicker({ sameAsBilling, onChangeSameAsBilling, selectedId, onSelect }) {
  const { addresses } = useAddresses()

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-gray">Select the address that matches your card or payment method.</p>

      <label className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 text-sm font-semibold ${sameAsBilling ? 'border-primary bg-primary/5' : 'border-border'}`}>
        <input type="radio" name="shipping-mode" checked={sameAsBilling} onChange={() => onChangeSameAsBilling(true)} className="accent-primary" />
        Same as Billing address
      </label>

      <label className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 text-sm font-semibold ${!sameAsBilling ? 'border-primary bg-primary/5' : 'border-border'}`}>
        <input type="radio" name="shipping-mode" checked={!sameAsBilling} onChange={() => onChangeSameAsBilling(false)} className="accent-primary" />
        Use a different shipping address
      </label>

      {!sameAsBilling && (
        <div className="mt-2 flex flex-col gap-3 pl-2">
          {addresses.map((address) => (
            <label
              key={address.id}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 text-sm ${
                selectedId === address.id ? 'border-primary bg-primary/5' : 'border-border'
              }`}
            >
              <input
                type="radio"
                name="shipping-address"
                checked={selectedId === address.id}
                onChange={() => onSelect(address.id)}
                className="mt-1 accent-primary"
              />
              <span>
                <span className="font-semibold">{address.label}</span> — {address.fullName}
                <br />
                <span className="text-gray">{address.line}</span>
              </span>
            </label>
          ))}

          <Link
            to={ROUTES.ADD_ADDRESS}
            className="flex items-center gap-2 rounded-lg border border-dashed border-border p-4 text-sm font-medium text-primary hover:bg-primary/5"
          >
            <Plus className="size-4" />
            Add New Address
          </Link>
        </div>
      )}
    </div>
  )
}
