import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import ProductCard from '@/components/ui/ProductCard'
import { limelightProducts } from '@/data/products'

export default function Limelight() {
  return (
    <Container className="pb-16 md:pb-[100px]">
      <SectionTitle>In The Limelight</SectionTitle>

      <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:mt-16 lg:grid-cols-4 lg:gap-x-10">
        {limelightProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  )
}
