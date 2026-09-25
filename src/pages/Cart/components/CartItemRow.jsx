import { Link } from 'react-router-dom'
import { Trash2 } from 'lucide-react'
import { productPath } from '@/constants/routes'
import { formatPrice } from '@/utils/formatPrice'
import QuantityStepper from './QuantityStepper'

// Одна строка таблицы корзины: фото/название/цвет/размер | цена | количество | доставка | сумма | удалить
export default function CartItemRow({ product, line, onQtyChange, onRemove }) {
  return (
    <div className="flex flex-wrap items-center gap-4 border-b border-border py-6 sm:flex-nowrap sm:gap-6">
      <Link to={productPath(product.id)} className="flex min-w-[220px] flex-1 items-center gap-4">
        <img src={product.image} alt={product.title} className="size-20 shrink-0 rounded-lg bg-light object-cover" />
        <span className="min-w-0">
          <span className="block truncate font-semibold hover:text-primary">{product.title}</span>
          {line.color && <span className="mt-1 block text-sm text-gray">Color : {line.color}</span>}
          {line.size && <span className="block text-sm text-gray">Size : {line.size}</span>}
        </span>
      </Link>

      <span className="w-20 shrink-0 text-sm font-semibold sm:w-24">{formatPrice(product.price)}</span>

      <div className="shrink-0">
        <QuantityStepper value={line.qty} onChange={onQtyChange} />
      </div>

      <span className="w-16 shrink-0 text-sm text-gray sm:w-20">
        {line.shipping ? formatPrice(line.shipping) : 'FREE'}
      </span>

      <span className="w-20 shrink-0 text-sm font-bold sm:w-24">{formatPrice(product.price * line.qty)}</span>

      <button
        type="button"
        onClick={onRemove}
        aria-label="Remove item"
        className="grid size-8 shrink-0 place-items-center rounded-full text-primary hover:bg-primary/10"
      >
        <Trash2 className="size-4" />
      </button>
    </div>
  )
}
