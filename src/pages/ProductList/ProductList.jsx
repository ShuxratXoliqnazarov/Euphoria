// Страница: ProductList (/products?category=women)
// Figma: "Products List page"
// Ответственный: Shuhrat
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Container from '@/components/ui/Container'
import ProductCard from '@/components/ui/ProductCard'
import { products } from '@/data/products'
import FilterSidebar from './components/FilterSidebar'
import SeoText from './components/SeoText'
import PriceTable from './components/PriceTable'

const SORT_TABS = ['New', 'Recommended']

export default function ProductList() {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category') === 'men' ? 'men' : 'women'
  const label = category === 'men' ? 'Men' : 'Women'

  const [filters, setFilters] = useState({ minPrice: 0, maxPrice: 1000, color: null, size: null })
  const [sort, setSort] = useState('New')

  const visible = products
    .filter((p) => p.gender === category)
    .filter((p) => p.price >= filters.minPrice && p.price <= filters.maxPrice)
    // New — порядок как в макете, Recommended — сначала дороже
    .sort((a, b) => (sort === 'New' ? a.id - b.id : b.price - a.price))

  return (
    <Container className="pb-24">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
        <FilterSidebar filters={filters} onChange={setFilters} />

        <section className="flex-1 pt-8">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold md:text-[22px]">{label}&apos;s Clothing</h1>
            <div className="flex gap-6">
              {SORT_TABS.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setSort(tab)}
                  className={`text-lg md:text-[22px] ${sort === tab ? 'font-semibold text-primary' : 'text-dark'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {visible.length > 0 ? (
            <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-12 md:mt-10 md:grid-cols-3 md:gap-x-8">
              {visible.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="mt-16 text-center text-gray">No products in this price range</p>
          )}
        </section>
      </div>

      <SeoText label={label} />
      <PriceTable label={label} />
    </Container>
  )
}
