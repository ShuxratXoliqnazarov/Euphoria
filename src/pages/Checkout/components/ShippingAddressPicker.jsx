import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { ROUTES } from '@/constants/routes'
import { useAddresses } from '@/hooks/useAddresses'

// Выбор адреса доставки из адресной книги (Figma: раздел "Shipping Address" на Checkout)
export default function ShippingAddressPicker({ selectedId, onSelect }) {
  const { addresses } = useAddresses()

  return (
    <div className="flex flex-col gap-3">
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
            <span className="text-gray">
              {address.line}, {address.cityState}
            </span>
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
  )
}
