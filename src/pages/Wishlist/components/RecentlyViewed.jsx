import SectionTitle from '@/components/ui/SectionTitle'
import ProductCard from '@/components/ui/ProductCard'
import { similarProducts } from '@/data/products'

export default function RecentlyViewed() {
  const products = similarProducts.slice(0, 4)

  return (
    <section className="mt-16 md:mt-24">
      <SectionTitle className="mb-8">Recently Viewed</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
