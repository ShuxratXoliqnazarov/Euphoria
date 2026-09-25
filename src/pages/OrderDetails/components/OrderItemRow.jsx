import { useState } from 'react'
import { X } from 'lucide-react'

export default function OrderItemRow({ item, onCancelItem }) {
  const [isCancelled, setIsCancelled] = useState(false)

  const handleCancel = () => {
    setIsCancelled(true)
    setTimeout(() => {
      if (onCancelItem) onCancelItem(item.id)
    }, 280)
  }

  return (
    <div
      className={`flex items-center justify-between gap-4 py-5 transition-all duration-300 ${
        isCancelled ? 'opacity-30 scale-98 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Product Image + Details */}
      <div className="flex items-center gap-4 md:gap-6 min-w-0">
        <div className="size-20 md:size-24 shrink-0 overflow-hidden rounded-xl bg-white shadow-xs">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="space-y-1 min-w-0">
          <h4 className="font-bold text-dark text-base md:text-lg truncate">
            {item.title}
          </h4>
          <p className="text-xs md:text-sm text-dark font-medium">
            <span className="font-bold">Color :</span>{' '}
            <span className="text-gray">{item.color}</span>
          </p>
        </div>
      </div>

      {/* Qty, Price and Cancel action */}
      <div className="flex items-center gap-6 md:gap-10 shrink-0">
        <p className="text-xs md:text-sm text-dark font-semibold">
          Qty : <span className="font-normal text-gray">{item.quantity}</span>
        </p>

        <span className="text-base md:text-lg font-bold font-accent text-dark">
          ${item.price.toFixed(2)}
        </span>

        <button
          type="button"
          onClick={handleCancel}
          aria-label={`Cancel ${item.title}`}
          title="Cancel item"
          className="grid size-8 place-items-center rounded-full text-gray hover:text-danger hover:bg-white transition-colors cursor-pointer"
        >
          <X className="size-4 md:size-5 transition-transform duration-200 hover:scale-110" />
        </button>
      </div>
    </div>
  )
}
