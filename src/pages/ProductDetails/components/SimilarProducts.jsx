import SectionTitle from '@/components/ui/SectionTitle'
import ProductCard from '@/components/ui/ProductCard'
import { similarProducts } from '@/data/products'

export default function SimilarProducts({ currentId }) {
  return (
    <section>
      <SectionTitle>Similar Products</SectionTitle>
      <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-4 lg:gap-x-10">
        {similarProducts
          .filter((product) => product.id !== currentId)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </section>
  )
}
