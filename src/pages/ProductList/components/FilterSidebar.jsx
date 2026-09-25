import { useState } from 'react'
import { ChevronRight, ChevronUp, SlidersHorizontal } from 'lucide-react'
import { colors, dressStyles, filterCategories, sizes } from '@/data/categories'

const PRICE_MIN = 0
const PRICE_MAX = 1000

// Раскрывающийся блок фильтра
function FilterSection({ title, children }) {
  const [open, setOpen] = useState(true)

  return (
    <div className="border-t border-border/50">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-7 py-5 text-[22px] font-semibold text-gray"
      >
        {title}
        <ChevronUp className={`size-5 transition-transform ${open ? '' : 'rotate-180'}`} />
      </button>
      {open && <div className="border-t border-border/50 px-7 py-6">{children}</div>}
    </div>
  )
}

function LinkList({ items }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item}>
          <button type="button" className="flex w-full items-center justify-between text-gray hover:text-dark">
            {item}
            <ChevronRight className="size-4" />
          </button>
        </li>
      ))}
    </ul>
  )
}

export default function FilterSidebar({ filters, onChange }) {
  const { minPrice, maxPrice, color, size } = filters
  const toggle = (key, value) => onChange({ ...filters, [key]: filters[key] === value ? null : value })
  const percent = (value) => ((value - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100

  return (
    <aside className="h-fit rounded-b-lg border border-t-0 border-border/50 pb-2 lg:w-[295px] lg:shrink-0">
      <div className="flex items-center justify-between px-7 py-5 text-[22px] font-semibold text-gray">
        Filter
        <SlidersHorizontal className="size-5" />
      </div>

      <div className="border-t border-border/50 px-7 py-6">
        <LinkList items={filterCategories} />
      </div>

      <FilterSection title="Price">
        <div className="relative h-5">
          <div className="absolute top-1/2 h-0.5 w-full -translate-y-1/2 bg-border" />
          <div
            className="absolute top-1/2 h-0.5 -translate-y-1/2 bg-primary"
            style={{ left: `${percent(minPrice)}%`, right: `${100 - percent(maxPrice)}%` }}
          />
          <input
            type="range"
            min={PRICE_MIN}
            max={PRICE_MAX}
            value={minPrice}
            onChange={(e) => onChange({ ...filters, minPrice: Math.min(+e.target.value, maxPrice - 10) })}
            className="range-thumb absolute inset-0 w-full"
            aria-label="Minimum price"
          />
          <input
            type="range"
            min={PRICE_MIN}
            max={PRICE_MAX}
            value={maxPrice}
            onChange={(e) => onChange({ ...filters, maxPrice: Math.max(+e.target.value, minPrice + 10) })}
            className="range-thumb absolute inset-0 w-full"
            aria-label="Maximum price"
          />
        </div>
        <div className="mt-6 flex justify-between gap-4">
          <span className="w-24 rounded-lg border border-border py-2 text-center">${minPrice}</span>
          <span className="w-24 rounded-lg border border-border py-2 text-center">${maxPrice}</span>
        </div>
      </FilterSection>

      <FilterSection title="Colors">
        <div className="grid grid-cols-4 gap-x-4 gap-y-5">
          {colors.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => toggle('color', item.name)}
              className="flex flex-col items-center gap-2 text-sm text-gray"
            >
              <span
                className={`size-9 rounded-xl border border-border/50 ${color === item.name ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                style={{ backgroundColor: item.value }}
              />
              {item.name}
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Size">
        <div className="grid grid-cols-3 gap-4">
          {sizes.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => toggle('size', item)}
              className={`rounded-lg border py-2 text-sm ${
                size === item ? 'border-primary bg-primary text-white' : 'border-border text-gray hover:border-dark'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Dress Style">
        <LinkList items={dressStyles} />
      </FilterSection>
    </aside>
  )
}
