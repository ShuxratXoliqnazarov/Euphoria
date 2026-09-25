import { Minus, Plus } from 'lucide-react'

// Степпер количества товара в корзине: − 2 +
export default function QuantityStepper({ value, onChange }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-lg border border-border px-2 py-1.5">
      <button
        type="button"
        onClick={() => onChange(value - 1)}
        aria-label="Decrease quantity"
        className="grid size-6 place-items-center rounded text-gray hover:bg-light hover:text-dark"
      >
        <Minus className="size-3.5" />
      </button>
      <span className="w-4 text-center text-sm font-semibold">{value}</span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        aria-label="Increase quantity"
        className="grid size-6 place-items-center rounded text-gray hover:bg-light hover:text-dark"
      >
        <Plus className="size-3.5" />
      </button>
    </div>
  )
}
