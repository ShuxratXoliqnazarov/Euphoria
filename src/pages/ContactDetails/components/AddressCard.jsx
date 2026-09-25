import { Trash2 } from 'lucide-react'

// Карточка сохранённого адреса в "Address Book" (Figma: Contact Details)
export default function AddressCard({ address, onDelete }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border p-5">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-light px-3 py-1 text-xs font-semibold">{address.label}</span>
        <button
          type="button"
          onClick={onDelete}
          aria-label="Delete address"
          className="grid size-8 place-items-center rounded-full text-gray hover:bg-danger/10 hover:text-danger"
        >
          <Trash2 className="size-4" />
        </button>
      </div>

      <div className="text-sm">
        <p className="font-medium">{address.fullName}</p>
        <p className="mt-1 text-gray">{address.line}</p>
        <p className="text-gray">{address.cityState}</p>
        <p className="mt-1 text-gray">{address.phone}</p>
      </div>
    </div>
  )
}
