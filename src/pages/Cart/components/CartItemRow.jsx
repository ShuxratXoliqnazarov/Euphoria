import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { productPath } from '@/constants/routes'
import { formatPrice } from '@/utils/formatPrice'
import QuantityStepper from './QuantityStepper'

// Одна строка таблицы корзины: фото/название | цена | количество | сумма | удалить
export default function CartItemRow({ product, qty, onQtyChange, onRemove }) {
  return (
    <div className="flex flex-wrap items-center gap-4 border-b border-border py-6 sm:flex-nowrap sm:gap-6">
      <Link to={productPath(product.id)} className="flex min-w-[220px] flex-1 items-center gap-4">
        <img src={product.image} alt={product.title} className="size-20 shrink-0 rounded-lg bg-light object-cover" />
        <span className="min-w-0">
          <span className="block truncate font-semibold hover:text-primary">{product.title}</span>
          <span className="mt-1 block text-sm text-gray">{product.brand}</span>
        </span>
      </Link>

      <span className="w-20 shrink-0 text-sm font-semibold sm:w-24">{formatPrice(product.price)}</span>

      <div className="shrink-0">
        <QuantityStepper value={qty} onChange={onQtyChange} />
      </div>

      <span className="w-20 shrink-0 text-sm font-bold sm:w-24">{formatPrice(product.price * qty)}</span>

      <button
        type="button"
        onClick={onRemove}
        aria-label="Remove item"
        className="grid size-8 shrink-0 place-items-center rounded-full text-gray hover:bg-danger/10 hover:text-danger"
      >
        <X className="size-4" />
      </button>
    </div>
  )
}
